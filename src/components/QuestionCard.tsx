import { useEffect, useMemo, useState } from 'react';
import type { Answer, QuestionItem } from '../types/questions';
import { RatingScale } from './RatingScale';

type Props = {
  item: QuestionItem;
  existing?: Answer;
  onBack: () => void;
  onNext: (value: 1 | 2 | 3 | 4 | 5, elapsedMs: number) => void;
  onSkip: () => void;
  canBack: boolean;
  isLast: boolean;
};

export function QuestionCard({ item, existing, onBack, onNext, onSkip, canBack, isLast }: Props) {
  const [value, setValue] = useState<1 | 2 | 3 | 4 | 5 | null>(existing?.value ?? null);
  const started = useMemo(() => Date.now(), [item.id]);

  useEffect(() => {
    setValue(existing?.value ?? null);
  }, [existing?.value, item.id]);

  return (
    <section className="question-card" aria-labelledby="question-title">
      <p className="eyebrow">Baca sebagai adegan kecil, bukan ujian benar salah</p>
      <h1 id="question-title">{item.statementCasual}</h1>
      <RatingScale options={item.options} value={value} onChange={setValue} />
      <div className="question-actions">
        <button type="button" className="ghost-button" onClick={onBack} disabled={!canBack}>Kembali</button>
        <button type="button" className="ghost-button" onClick={onSkip}>Lewati</button>
        <button
          type="button"
          className="primary-button"
          disabled={!value}
          onClick={() => value && onNext(value, Date.now() - started)}
        >
          {isLast ? 'Lihat hasil' : 'Lanjut'}
        </button>
      </div>
      <p className="microcopy">Jawaban otomatis tersimpan di browser ini sebelum pindah soal.</p>
    </section>
  );
}
