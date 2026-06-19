import { useMemo, useRef, useState } from 'react';
import type { FinalResult } from '../types/results';
import { TYPE_PROFILES } from '../data/typeProfiles';
import { CARD_THEMES } from '../data/cardThemes';
import type { CardTheme } from '../data/cardThemes';
import { PhotoUploader } from './PhotoUploader';
import { ThemePicker } from './ThemePicker';
import { exportElementAsPng, shareElementAsPng } from '../utils/exportCard';
import { sanitizeFilename } from '../utils/sanitizeFilename';
import { asPercent } from '../scoring/normalize';

type Orientation = 'portrait' | 'square' | 'feed' | 'story';

type Props = { result: FinalResult; onBack: () => void };

const orientationClass: Record<Orientation, string> = {
  portrait: 'card-portrait',
  square: 'card-square',
  feed: 'card-feed',
  story: 'card-story'
};

export function ShareCard({ result, onBack }: Props) {
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [theme, setTheme] = useState<CardTheme>(CARD_THEMES[0]);
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [status, setStatus] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const profile = result.primaryType ? TYPE_PROFILES[result.primaryType] : null;
  const cardId = useMemo(() => {
    const base = `${result.primaryType ?? 'READ'}-${Date.now().toString(36).slice(-5)}`;
    return base.toUpperCase();
  }, [result.primaryType]);

  if (!profile || !result.primaryType) {
    return (
      <main className="card-page"><section className="panel narrow"><h1>Kartu belum bisa dibuat</h1><p>Hasil belum punya tipe utama yang cukup aman.</p><button className="primary-button" onClick={onBack}>Kembali</button></section></main>
    );
  }

  async function download() {
    if (!cardRef.current) return;
    setStatus('Merapikan kartu...');
    try {
      await exportElementAsPng(cardRef.current, sanitizeFilename(`sdd-${nickname || result.primaryType}`));
      setStatus('Kartu sudah diunduh.');
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Kartu belum berhasil dibuat.');
    }
  }

  async function share() {
    if (!cardRef.current) return;
    setStatus('Menyiapkan kartu...');
    try {
      const outcome = await shareElementAsPng(cardRef.current, sanitizeFilename(`sdd-${nickname || result.primaryType}`));
      setStatus(outcome === 'shared' ? 'Kartu sudah dibagikan.' : 'Browser tidak mendukung bagikan file, kartu diunduh sebagai fallback.');
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Kartu belum berhasil dibuat.');
    }
  }

  return (
    <main className="card-page">
      <section className="card-tools panel">
        <div>
          <p className="eyebrow">Kartu hasil</p>
          <h1>Buat kartu bergaya identitas</h1>
          <p>Foto dipakai lokal untuk preview dan export. Tidak ada upload ke server.</p>
        </div>
        <label className="text-field">
          Nickname
          <input value={nickname} maxLength={28} placeholder="Nama panggilan" onChange={(event) => setNickname(event.target.value)} />
        </label>
        <PhotoUploader value={photo} onChange={setPhoto} />
        <ThemePicker selected={theme} onSelect={setTheme} />
        <div className="orientation-row">
          {(['portrait', 'square', 'feed', 'story'] as Orientation[]).map((item) => (
            <button type="button" className={orientation === item ? 'selected small-button' : 'small-button'} key={item} onClick={() => setOrientation(item)}>{item}</button>
          ))}
        </div>
        <div className="result-actions">
          <button type="button" className="primary-button" onClick={() => void download()}>Unduh PNG</button>
          <button type="button" className="secondary-button" onClick={() => void share()}>Bagikan</button>
          <button type="button" className="ghost-button" onClick={onBack}>Kembali</button>
        </div>
        {status && <p className="microcopy" role="status">{status}</p>}
      </section>

      <section className="card-preview-wrap">
        <div
          ref={cardRef}
          className={`share-card ${orientationClass[orientation]}`}
          style={{ '--card-bg': theme.background, '--card-surface': theme.surface, '--card-ink': theme.ink, '--card-muted': theme.muted, '--card-accent': theme.accent, '--card-chip': theme.chip } as React.CSSProperties}
        >
          <div className="card-header">
            <span>Socionics Dalam Diriku</span>
            <span>{cardId}</span>
          </div>
          <div className="card-body-main">
            <div className="card-photo" aria-label="Foto kartu">
              {photo ? <img src={photo} alt="Foto pilihan peserta" /> : <span>{result.primaryType}</span>}
            </div>
            <div className="card-identity">
              <p>{nickname || 'Pemilik kartu'}</p>
              <h2>{result.primaryType}</h2>
              <span>{profile.fullName}</span>
              <strong>{profile.quadra}</strong>
            </div>
          </div>
          <p className="card-one-line">{profile.oneLine}</p>
          <div className="card-mini-grid">
            {result.slotReadings.slice(0, 8).map((slot) => (
              <span key={slot.slot}><b>{slot.element}</b>{slot.label}</span>
            ))}
          </div>
          <div className="card-elements">
            {result.elementRanking.slice(0, 5).map((element) => (
              <div key={element.element}><span>{element.element}</span><i style={{ width: `${asPercent(element.score)}%` }} /></div>
            ))}
          </div>
          <div className="card-footer">
            <span>Confidence: {result.confidence.label}</span>
            <span>Bacaan indikatif, bukan diagnosis.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
