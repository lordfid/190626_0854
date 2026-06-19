type Props = { current: number; total: number };

export function ProgressBar({ current, total }: Props) {
  const value = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div className="progress-wrap" aria-label={`Progress ${current} dari ${total}`}>
      <div className="progress-meta">
        <span>{current} dari {total}</span>
        <span>{value}%</span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={current}>
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
