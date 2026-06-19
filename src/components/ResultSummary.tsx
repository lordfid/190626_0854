import type { FinalResult } from '../types/results';
import { TYPE_PROFILES } from '../data/typeProfiles';
import { ELEMENT_DESCRIPTIONS } from '../data/elementDescriptions';
import { asPercent } from '../scoring/normalize';
import { ElementBars } from './ElementBars';
import { ModelAMapView } from './ModelAMapView';
import { WarningPanel } from './WarningPanel';

type Props = {
  result: FinalResult;
  onMakeCard: () => void;
  onRestart: () => void;
};

export function ResultSummary({ result, onMakeCard, onRestart }: Props) {
  const profile = result.primaryType ? TYPE_PROFILES[result.primaryType] : null;
  if (!result.primaryType || !profile) {
    return (
      <main className="result-page">
        <section className="result-hero panel">
          <p className="eyebrow">Hasil belum aman</p>
          <h1>Belum cukup bukti untuk membaca pola Socionics-mu.</h1>
          <p>{result.interpretation.summary}</p>
          <ul className="clean-list">{result.confidence.reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
          <button type="button" className="primary-button" onClick={onRestart}>Mulai ulang</button>
        </section>
      </main>
    );
  }

  return (
    <main className="result-page">
      <section className="result-hero panel">
        <div>
          <p className="eyebrow">Hasil indikatif</p>
          <h1>{result.primaryType}</h1>
          <p className="type-name">{profile.fullName} · {profile.quadra}</p>
          <p>{result.interpretation.summary}</p>
        </div>
        <div className="confidence-card">
          <span>Confidence</span>
          <strong>{result.confidence.label}</strong>
          <em>{asPercent(result.confidence.score)}/100 kualitas bukti internal</em>
        </div>
      </section>

      <section className="result-section">
        <h2>Top 3 kandidat</h2>
        <div className="top3-grid">
          {result.top3.map((row, index) => (
            <article className="top-card" key={row.type}>
              <span>#{index + 1}</span>
              <strong>{row.type}</strong>
              <p>{TYPE_PROFILES[row.type].oneLine}</p>
              <div className="bar-track"><span style={{ width: `${asPercent(row.relativeSupport)}%` }} /></div>
              <small>Relative support {asPercent(row.relativeSupport)}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="result-section">
        <h2>Cara membaca hasil</h2>
        <p>{profile.corePattern}</p>
        <p className="soft-note">Fit score di sini adalah indeks kemiripan model dalam sesi ini, bukan probabilitas ilmiah. Jika kandidat teratas rapat, baca top 3 sebagai area kemungkinan.</p>
      </section>

      <section className="result-section">
        <h2>Peta Model A</h2>
        <ModelAMapView slots={result.slotReadings} />
      </section>

      <section className="result-section">
        <h2>Ranking 8 unsur informasi</h2>
        <ElementBars elements={result.elementRanking} />
      </section>

      <section className="result-section two-col">
        <article>
          <h2>Quadra dan pola nilai</h2>
          <p><strong>{result.quadra.primary}</strong> — {result.quadra.note}</p>
          {result.valuedPattern && (
            <p>{result.valuedPattern.note}</p>
          )}
        </article>
        <article>
          <h2>Sinyal terkuat</h2>
          <ul className="clean-list">
            {result.elementRanking.slice(0, 3).map((item) => (
              <li key={item.element}>{item.element}: {ELEMENT_DESCRIPTIONS[item.element].resultLanguage}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="result-section editorial-grid">
        <article>
          <h2>Kekuatan</h2>
          <ul className="clean-list">{result.interpretation.strengths.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <h2>Drain</h2>
          <ul className="clean-list">{result.interpretation.drains.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <h2>Kebutuhan relief</h2>
          <ul className="clean-list">{result.interpretation.reliefNeeds.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <h2>Catatan 7 hari</h2>
          <ul className="clean-list">{result.interpretation.developmentNotes.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <WarningPanel title="Catatan confidence" items={result.confidence.reasons} />
      <WarningPanel title="Catatan bias respons" items={result.biasReport.warnings} />
      <WarningPanel title="Catatan kontradiksi" items={result.contradictionNotes} />
      <WarningPanel title="Coverage" items={[`${result.missingCoverage.answeredCells}/64 kanal terjawab. ${result.missingCoverage.missingCells} kanal belum memiliki bukti. Holdout terpakai: ${result.holdoutUsed}.`]} />

      <section className="result-section disclaimer-section">
        <h2>Disclaimer</h2>
        <p>{result.interpretation.disclaimer}</p>
        <div className="result-actions">
          <button type="button" className="primary-button" onClick={onMakeCard}>Buat kartu hasil</button>
          <button type="button" className="secondary-button" onClick={onRestart}>Ulang tes</button>
        </div>
      </section>
    </main>
  );
}
