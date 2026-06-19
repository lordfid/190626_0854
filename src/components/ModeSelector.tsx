import type { ModeConfig, TestMode } from '../types/questions';

export const MODE_CONFIGS: ModeConfig[] = [
  { mode: 'ringkas', title: 'Ringkas', itemCount: 80, estimate: '±12–18 menit', description: 'Mencakup semua kanal minimum, cocok untuk bacaan awal yang tetap hati-hati.' },
  { mode: 'standar', title: 'Standar', itemCount: 128, estimate: '±20–30 menit', description: 'Mengulang setiap kanal inti agar bukti lebih stabil lintas konteks.' },
  { mode: 'mendalam', title: 'Mendalam', itemCount: 280, estimate: '±45–70 menit', description: 'Memakai core, holdout, dan pair pembeda untuk sesi yang lebih panjang.' }
];

type Props = { selected: TestMode; onSelect: (mode: TestMode) => void };

export function ModeSelector({ selected, onSelect }: Props) {
  return (
    <div className="mode-grid" role="radiogroup" aria-label="Pilih mode tes">
      {MODE_CONFIGS.map((mode) => (
        <button
          type="button"
          key={mode.mode}
          className={`mode-card ${selected === mode.mode ? 'selected' : ''}`}
          onClick={() => onSelect(mode.mode)}
          role="radio"
          aria-checked={selected === mode.mode}
        >
          <span className="mode-title">{mode.title}</span>
          <span className="mode-count">{mode.itemCount} item · {mode.estimate}</span>
          <span className="mode-desc">{mode.description}</span>
        </button>
      ))}
    </div>
  );
}
