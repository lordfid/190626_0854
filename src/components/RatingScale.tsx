import { useState } from 'react';
import type { RatingOption } from '../types/questions';

type Props = {
  options: RatingOption[];
  value: number | null;
  onChange: (value: 1 | 2 | 3 | 4 | 5) => void;
};

export function RatingScale({ options, value, onChange }: Props) {
  const [openValue, setOpenValue] = useState<number | null>(null);
  return (
    <div className="rating-group" role="radiogroup" aria-label="Pilihan jawaban">
      {options.map((option) => {
        const active = value === option.value;
        const open = openValue === option.value;
        return (
          <div className={`rating-option ${active ? 'selected' : ''}`} key={option.value}>
            <button
              type="button"
              role="radio"
              aria-checked={active}
              className="rating-main"
              onClick={() => onChange(option.value)}
            >
              <span className="rating-number">{option.value}</span>
              <span>{option.label}</span>
            </button>
            <button
              type="button"
              className="info-button"
              aria-expanded={open}
              aria-label={`Penjelasan pilihan ${option.value}`}
              onClick={() => setOpenValue(open ? null : option.value)}
            >
              i
            </button>
            {open && (
              <div className="option-detail">
                <p><strong>Artinya:</strong> {option.meaning}</p>
                <p><strong>Reaksi:</strong> {option.reaction}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
