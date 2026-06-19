import type { SlotReading } from '../types/results';
import { SLOT_LABELS } from '../types/socionics';
import { asPercent } from '../scoring/normalize';

type Props = { slots: SlotReading[] };

export function ModelAMapView({ slots }: Props) {
  return (
    <div className="slot-grid">
      {slots.map((slot) => (
        <article className="slot-card" key={slot.slot}>
          <p className="slot-kicker">{SLOT_LABELS[slot.slot]} · {slot.element}</p>
          <h3>{slot.label}</h3>
          <p>{slot.note}</p>
          <span className="mini-chip">Bukti area: {asPercent(slot.evidence)}</span>
        </article>
      ))}
    </div>
  );
}
