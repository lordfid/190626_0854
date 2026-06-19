import type { QuestionItem } from '../types/questions';
import { CORE_QUESTIONS } from './coreQuestions';
import { HOLDOUT_QUESTIONS } from './holdoutQuestions';
import { TIE_BREAK_QUESTIONS } from './tieBreakQuestions';

export const QUESTION_BANK: QuestionItem[] = [...CORE_QUESTIONS, ...HOLDOUT_QUESTIONS, ...TIE_BREAK_QUESTIONS];
export const QUESTION_BY_ID: Record<string, QuestionItem> = QUESTION_BANK.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, QuestionItem>);

export function getQuestionById(id: string): QuestionItem | undefined {
  return QUESTION_BY_ID[id];
}
