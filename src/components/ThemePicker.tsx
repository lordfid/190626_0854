import type { CardTheme } from '../data/cardThemes';
import { CARD_THEMES } from '../data/cardThemes';

type Props = { selected: CardTheme; onSelect: (theme: CardTheme) => void };

export function ThemePicker({ selected, onSelect }: Props) {
  return (
    <div className="theme-picker" role="radiogroup" aria-label="Pilih tema kartu">
      {CARD_THEMES.map((theme) => (
        <button
          type="button"
          key={theme.id}
          role="radio"
          aria-checked={selected.id === theme.id}
          className={`theme-swatch ${selected.id === theme.id ? 'selected' : ''}`}
          onClick={() => onSelect(theme)}
          style={{ background: theme.background, color: theme.surface }}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
