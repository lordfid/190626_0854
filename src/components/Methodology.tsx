import { METHODOLOGY_COPY } from '../data/resultCopy';

type Props = { onBack: () => void };

export function Methodology({ onBack }: Props) {
  return (
    <main className="method-page">
      <section className="panel readable">
        <p className="eyebrow">Metodologi ringkas</p>
        <h1>Apa yang sebenarnya dibaca?</h1>
        <article><h2>Apa yang diukur?</h2><p>{METHODOLOGY_COPY.measured}</p></article>
        <article><h2>Kenapa ada top 3?</h2><p>{METHODOLOGY_COPY.top3}</p></article>
        <article><h2>Apa arti confidence?</h2><p>{METHODOLOGY_COPY.confidence}</p></article>
        <article><h2>Apakah dataku dikirim?</h2><p>{METHODOLOGY_COPY.privacy}</p></article>
        <p className="soft-note">Relasi antar-tipe tidak menentukan nasib hubungan. Keamanan, komunikasi, nilai, kedewasaan, dan keadaan nyata tetap jauh lebih penting.</p>
        <button type="button" className="primary-button" onClick={onBack}>Kembali</button>
      </section>
    </main>
  );
}
