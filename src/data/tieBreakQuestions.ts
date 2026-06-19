import { SOCIONICS_TYPES } from '../types/socionics';
import type { QuestionItem, RatingOption } from '../types/questions';
import type { SocionicsType } from '../types/socionics';
import { MODEL_A_BY_TYPE } from './socionicsModelA';

const optionSet: RatingOption[] = ([1, 2, 3, 4, 5] as const).map((value) => ({
  value,
  label: value === 1 ? 'Tidak menggambarkan aku' : value === 2 ? 'Agak jauh' : value === 3 ? 'Tergantung keadaan' : value === 4 ? 'Cukup menggambarkan' : 'Sangat menggambarkan',
  meaning: value === 1
    ? 'Pola ini jarang menjadi caraku bergerak.'
    : value === 2
      ? 'Ada sedikit kemiripan, tetapi bukan jalur utama.'
      : value === 3
        ? 'Aku perlu konteks tambahan untuk menilainya.'
        : value === 4
          ? 'Pola ini cukup sering tampak dalam tindakanku.'
          : 'Pola ini terasa sangat dekat dengan cara tubuh dan pikiranku merespons.',
  reaction: value <= 2
    ? 'Aku membaca kalimatnya lalu merasa jaraknya cukup jauh.'
    : value === 3
      ? 'Aku berhenti sebentar karena jawabannya bergantung pada situasi.'
      : value === 4
        ? 'Aku bisa membayangkan beberapa adegan ketika ini terjadi.'
        : 'Aku langsung teringat banyak kejadian yang cocok dengan pola ini.',
  score: {
    direction: value === 3 ? 0 : value > 3 ? 1 : -1,
    intensity: value === 3 ? 0 : value === 2 || value === 4 ? 0.5 : 1,
    reliability: value === 3 ? 0.55 : value === 2 || value === 4 ? 0.82 : 0.92
  }
}));

const pairStatements = [
  'Saat dua jalan sama-sama masuk akal, aku memilih yang membuat tindakanku paling terasa hidup di situasi nyata.',
  'Kalau harus menjelaskan pilihanku, aku lebih mudah memakai adegan konkret daripada uraian panjang.',
  'Ketika orang menuntut kepastian, aku memperhatikan apakah kepastian itu benar-benar membantu atau hanya menenangkan sesaat.',
  'Aku lebih percaya pola yang berulang dalam tindakan daripada kesan pertama yang terlalu manis.',
  'Saat kelompok mulai saling salah baca, aku mencari titik kecil yang membuat orang bisa bernapas lagi.',
  'Ketika rencana terlihat rapi tapi tubuhku menolak, aku tidak bisa sepenuhnya mengabaikan sinyal itu.',
  'Jika ada keputusan penting, aku ingin tahu batas, konsekuensi, dan alasan paling bersih sebelum bergerak.',
  'Ketika hubungan terasa dekat, aku tetap memperhatikan apakah batasnya sehat dan tidak dipaksa.'
];

const scenePlaces = ['di chat keluarga', 'di meja kerja', 'di ruang kelas', 'di antrean panjang', 'di kamar sendiri', 'di acara teman', 'di perjalanan pulang', 'di panggilan video', 'di toko kecil', 'di ruang tunggu'];
const sceneTurns = [
  'ketika satu kalimat membuat semua orang menunggu arah',
  'ketika rencana berubah setelah semua orang setuju',
  'ketika seseorang meminta jawaban yang terlalu cepat',
  'ketika detail kecil tiba-tiba mengubah suasana',
  'ketika bantuan datang tetapi tidak sepenuhnya pas',
  'ketika batas personal mulai terasa kabur',
  'ketika pilihan yang aman tidak lagi terasa jujur',
  'ketika orang lain menekan tanpa menyebut alasannya',
  'ketika suasana terlihat tenang tetapi ada ketegangan kecil',
  'ketika keputusan praktis harus tetap menjaga hubungan',
  'ketika tubuh lelah namun situasi belum boleh berhenti',
  'ketika peluang kecil muncul dari obrolan yang hampir selesai'
];

function canonicalPair(a: SocionicsType, b: SocionicsType): string {
  return [a, b].sort().join('_');
}

function pairItem(a: SocionicsType, b: SocionicsType, index: number): QuestionItem {
  const aBase = MODEL_A_BY_TYPE[a].base;
  const bBase = MODEL_A_BY_TYPE[b].base;
  const element = index % 2 === 0 ? aBase : bBase;
  const channel = index % 3 === 0 ? 'producer' : index % 3 === 1 ? 'flexible' : 'background';
  return {
    id: `tiebreak_${canonicalPair(a, b).toLowerCase()}`,
    kind: 'tieBreak',
    pairKey: canonicalPair(a, b),
    element,
    channel,
    context: index % 4 === 0 ? 'decision' : index % 4 === 1 ? 'conflict' : index % 4 === 2 ? 'friendship' : 'private',
    scaleFamily: 'frequency',
    statementOriginal: `${pairStatements[index % pairStatements.length]} Bayangannya: ${scenePlaces[index % scenePlaces.length]}, ${sceneTurns[Math.floor(index / scenePlaces.length) % sceneTurns.length]}.`,
    statementCasual: `${pairStatements[index % pairStatements.length]} Bayangannya: ${scenePlaces[index % scenePlaces.length]}, ${sceneTurns[Math.floor(index / scenePlaces.length) % sceneTurns.length]}.`,
    responseFocus: `pair:${canonicalPair(a, b)}:${element}:${channel}`,
    options: optionSet,
    psychometrics: {
      ambiguity: 0.28,
      intensity: 0.62,
      discrimination: 0.78,
      socialDesirability: 0.31,
      extremityRisk: 0.22
    },
    version: '2026.06.instrument.v1'
  };
}

const pairs: QuestionItem[] = [];
for (let i = 0; i < SOCIONICS_TYPES.length; i += 1) {
  for (let j = i + 1; j < SOCIONICS_TYPES.length; j += 1) {
    pairs.push(pairItem(SOCIONICS_TYPES[i], SOCIONICS_TYPES[j], pairs.length));
  }
}

export const TIE_BREAK_QUESTIONS = pairs;
