import { MODEL_A_BY_TYPE } from '../data/socionicsModelA';
import { QUESTION_BANK } from '../data/questionIndex';
import { SOCIONICS_ELEMENTS, SOCIONICS_TYPES, MODEL_A_SLOTS } from '../types/socionics';
import { MEASUREMENT_CHANNELS } from '../types/questions';
import { auditQuestionLanguage } from './languageAudit';
import { auditRelationMatrix } from './relationAudit';

export type AuditReport = { passed: boolean; errors: string[]; warnings: string[] };

export function runInstrumentAudit(): AuditReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const ids = new Set<string>();
  for (const item of QUESTION_BANK) {
    if (ids.has(item.id)) errors.push(`Duplicate question id: ${item.id}`);
    ids.add(item.id);
    if (!item.statementCasual.trim()) errors.push(`Empty statement: ${item.id}`);
    if (item.options.length !== 5) errors.push(`Options not 5: ${item.id}`);
    for (const value of [1, 2, 3, 4, 5]) {
      const option = item.options.find((candidate) => candidate.value === value);
      if (!option) errors.push(`Missing option ${value}: ${item.id}`);
      if (option && (!option.label || !option.meaning || !option.reaction)) errors.push(`Incomplete option copy: ${item.id}`);
    }
  }

  for (const type of SOCIONICS_TYPES) {
    const map = MODEL_A_BY_TYPE[type];
    if (!map) errors.push(`Missing Model A: ${type}`);
    const values = MODEL_A_SLOTS.map((slot) => map?.[slot]);
    for (const slot of MODEL_A_SLOTS) {
      if (!map?.[slot]) errors.push(`Missing slot ${type}.${slot}`);
    }
    for (const element of SOCIONICS_ELEMENTS) {
      if (!values.includes(element)) errors.push(`Element ${element} missing in ${type}`);
    }
    if (new Set(values).size !== 8) errors.push(`Model A not unique for ${type}`);
  }

  const coreCells = new Set(
    QUESTION_BANK.filter((item) => item.kind === 'core').map((item) => `${item.element}:${item.channel}`)
  );
  for (const element of SOCIONICS_ELEMENTS) {
    for (const channel of MEASUREMENT_CHANNELS) {
      if (!coreCells.has(`${element}:${channel}`)) errors.push(`Missing core cell ${element}:${channel}`);
    }
  }
  if (coreCells.size !== 64) errors.push(`Core cell count ${coreCells.size}, expected 64`);

  const languageErrors = auditQuestionLanguage(QUESTION_BANK.filter((item) => item.kind !== 'tieBreak'));
  errors.push(...languageErrors);
  errors.push(...auditRelationMatrix());

  const statements = QUESTION_BANK.map((item) => item.statementCasual.toLowerCase().replace(/\s+/g, ' ').trim());
  const duplicates = statements.filter((statement, index) => statements.indexOf(statement) !== index);
  if (duplicates.length) warnings.push(`Duplicate statement count: ${duplicates.length}`);

  return { passed: errors.length === 0, errors, warnings };
}
