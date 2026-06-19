import { useState } from 'react';
import type { TestMode } from '../types/questions';
import { ModeSelector } from './ModeSelector';

type Props = {
  hasSession: boolean;
  onStart: (mode: TestMode) => void;
  onResume: () => void;
  onOpenMethodology: () => void;
  onReset: () => void;
};

export function LandingHero({ hasSession, onStart, onResume, onOpenMethodology, onReset }: Props) {
  const [mode, setMode] = useState<TestMode>('ringkas');
  return (
    <main className="landing">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Socionics Dalam Diriku</p>
          <h1>Tes Socionics yang membaca cara unsur informasi terasa di hidupmu.</h1>
          <p className="hero-subtitle">
            Bukan diagnosis, bukan vonis, dan bukan ramalan. Hasilnya berupa interpretasi indikatif: TIM utama, top 3 kandidat, peta Model A, pola quadra, confidence, dan catatan yang perlu dibaca hati-hati.
          </p>
          <div className="trust-row">
            <span>Disimpan lokal</span>
            <span>Tanpa login</span>
            <span>Bisa dihapus</span>
          </div>
        </div>
        <div className="start-panel">
          <h2>Pilih mode</h2>
          <ModeSelector selected={mode} onSelect={setMode} />
          <button type="button" className="primary-button wide" onClick={() => onStart(mode)}>Mulai tes</button>
          {hasSession && <button type="button" className="secondary-button wide" onClick={onResume}>Lanjutkan sesi tersimpan</button>}
          <div className="link-row">
            <button type="button" className="link-button" onClick={onOpenMethodology}>Metodologi</button>
            {hasSession && <button type="button" className="link-button danger" onClick={onReset}>Hapus data lokal</button>}
          </div>
          <p className="privacy-note">Jawabanmu diproses di perangkat ini. Aplikasi tidak membutuhkan akun dan tidak mengirim jawaban ke server pada versi ini.</p>
        </div>
      </section>
    </main>
  );
}
