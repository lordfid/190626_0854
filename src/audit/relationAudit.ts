import { SOCIONICS_TYPES } from '../types/socionics';
import { RELATION_MATRIX } from '../data/relationMatrix';

export function auditRelationMatrix(): string[] {
  const errors: string[] = [];
  for (const from of SOCIONICS_TYPES) {
    const row = RELATION_MATRIX[from];
    if (!row) errors.push(`Missing row ${from}`);
    for (const to of SOCIONICS_TYPES) {
      const relation = row?.[to];
      if (!relation) errors.push(`Missing relation ${from}->${to}`);
      if (from === to && relation?.relation !== 'Identity') errors.push(`Identity mismatch ${from}`);
      if (relation && ['Supervision', 'Reverse supervision', 'Benefit', 'Reverse benefit'].includes(relation.relation) && !relation.directional) {
        errors.push(`Directional flag missing ${from}->${to}`);
      }
    }
  }
  return errors;
}
