import type { ElementScore } from '../types/results';
import { asPercent } from '../scoring/normalize';

type Props = { elements: ElementScore[] };

export function ElementBars({ elements }: Props) {
  return (
    <div className="element-bars">
      {elements.map((item) => (
        <div className="bar-row" key={item.element}>
          <div className="bar-label"><strong>{item.element}</strong><span>{item.label}</span></div>
          <div className="bar-track"><span style={{ width: `${asPercent(item.score)}%` }} /></div>
          <span className="bar-value">{asPercent(item.score)}</span>
        </div>
      ))}
    </div>
  );
}
