import { SOCIONICS_TYPES } from '../types/socionics';
import type { IntertypeRelation, RelationName, SocionicsType } from '../types/socionics';

const relationCycle: RelationName[] = [
  'Identity',
  'Duality',
  'Activation',
  'Mirror',
  'Kindred',
  'Semi-duality',
  'Mirage',
  'Business',
  'Contrary',
  'Superego',
  'Quasi-identity',
  'Conflict',
  'Supervision',
  'Reverse supervision',
  'Benefit',
  'Reverse benefit'
];

const directionalRelations = new Set<RelationName>(['Supervision', 'Reverse supervision', 'Benefit', 'Reverse benefit']);

function relationForIndex(fromIndex: number, toIndex: number): RelationName {
  if (fromIndex === toIndex) return 'Identity';
  const delta = (toIndex - fromIndex + SOCIONICS_TYPES.length) % SOCIONICS_TYPES.length;
  return relationCycle[delta];
}

function toneFor(relation: RelationName): string {
  switch (relation) {
    case 'Identity': return 'Pola informasi mirip; mudah memahami ritme, tetapi blind spot bisa ikut mirip.';
    case 'Duality': return 'Sering terasa saling melengkapi pada area informasi, tetap bukan jaminan hubungan aman.';
    case 'Activation': return 'Mudah saling menghidupkan, tetapi ritmenya bisa cepat melelahkan jika tidak ada jeda.';
    case 'Mirror': return 'Mirip arah, beda penekanan; bagus untuk saling mengoreksi tanpa selalu sepakat.';
    case 'Kindred': return 'Ada kesamaan pintu masuk, tetapi prioritas lanjutan bisa berbeda tajam.';
    case 'Semi-duality': return 'Ada rasa hampir pas; beberapa dukungan terasa dekat namun tidak selalu tepat sasaran.';
    case 'Mirage': return 'Interaksi dapat terasa ringan dan menenangkan, tetapi mudah menghindari masalah inti.';
    case 'Business': return 'Cocok untuk kerja sejajar ketika peran jelas, namun kedalaman emosional tidak otomatis muncul.';
    case 'Contrary': return 'Saling memadamkan atau menetralkan ritme; bisa berguna untuk jeda, bisa juga terasa datar.';
    case 'Superego': return 'Saling melihat area yang tampak asing; butuh banyak penerjemahan agar tidak cepat salah baca.';
    case 'Quasi-identity': return 'Terlihat mirip dari luar, tetapi proses di dalam sering berjalan lewat jalur berbeda.';
    case 'Conflict': return 'Area kuat dan rawan dapat saling bersinggungan; komunikasi aman jauh lebih penting dari label.';
    case 'Supervision': return 'Arah ini dapat membuatmu tampak menekan area rawan pihak lain bila tidak hati-hati.';
    case 'Reverse supervision': return 'Arah ini dapat membuatmu merasa diamati atau dikoreksi di area yang sulit dijaga.';
    case 'Benefit': return 'Arah ini dapat membuatmu memberi dorongan yang terasa besar bagi pihak lain, meski tidak selalu simetris.';
    case 'Reverse benefit': return 'Arah ini dapat membuatmu menerima dorongan yang berguna sekaligus kadang terasa kurang lengkap.';
  }
}

export const RELATION_MATRIX: Record<SocionicsType, Record<SocionicsType, IntertypeRelation>> = SOCIONICS_TYPES.reduce((matrix, from, fromIndex) => {
  matrix[from] = SOCIONICS_TYPES.reduce((row, to, toIndex) => {
    const relation = relationForIndex(fromIndex, toIndex);
    row[to] = {
      from,
      to,
      relation,
      tone: toneFor(relation),
      directional: directionalRelations.has(relation)
    };
    return row;
  }, {} as Record<SocionicsType, IntertypeRelation>);
  return matrix;
}, {} as Record<SocionicsType, Record<SocionicsType, IntertypeRelation>>);
