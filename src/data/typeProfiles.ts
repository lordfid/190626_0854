import type { SocionicsType, TypeProfile } from '../types/socionics';
import { ELEMENT_DESCRIPTIONS } from './elementDescriptions';
import { MODEL_A_BY_TYPE, TYPE_QUADRA } from './socionicsModelA';

const fullNames: Record<SocionicsType, string> = {
  ILE: 'Intuitive Logical Extravert',
  SEI: 'Sensing Ethical Introvert',
  ESE: 'Ethical Sensing Extravert',
  LII: 'Logical Intuitive Introvert',
  EIE: 'Ethical Intuitive Extravert',
  LSI: 'Logical Sensing Introvert',
  SLE: 'Sensing Logical Extravert',
  IEI: 'Intuitive Ethical Introvert',
  SEE: 'Sensing Ethical Extravert',
  ILI: 'Intuitive Logical Introvert',
  LIE: 'Logical Intuitive Extravert',
  ESI: 'Ethical Sensing Introvert',
  IEE: 'Intuitive Ethical Extravert',
  SLI: 'Sensing Logical Introvert',
  LSE: 'Logical Sensing Extravert',
  EII: 'Ethical Intuitive Introvert'
};

const mistypes: Record<SocionicsType, SocionicsType[]> = {
  ILE: ['LII', 'IEE', 'SLE'],
  SEI: ['ESE', 'SLI', 'IEI'],
  ESE: ['SEI', 'EIE', 'LSE'],
  LII: ['ILE', 'LSI', 'EII'],
  EIE: ['IEI', 'ESE', 'LIE'],
  LSI: ['SLE', 'LII', 'ESI'],
  SLE: ['LSI', 'SEE', 'ILE'],
  IEI: ['EIE', 'ILI', 'SEI'],
  SEE: ['SLE', 'ESI', 'IEE'],
  ILI: ['IEI', 'LIE', 'SLI'],
  LIE: ['ILI', 'LSE', 'EIE'],
  ESI: ['SEE', 'EII', 'LSI'],
  IEE: ['EII', 'ILE', 'SEE'],
  SLI: ['LSE', 'SEI', 'ILI'],
  LSE: ['SLI', 'LIE', 'ESE'],
  EII: ['IEE', 'ESI', 'LII']
};

const oneLines: Record<SocionicsType, string> = {
  ILE: 'Membuka kemungkinan, lalu mencari rangka yang membuatnya masuk akal.',
  SEI: 'Menjaga kualitas pengalaman sambil menghaluskan suasana di sekitar.',
  ESE: 'Menghidupkan atmosfer dan membuat kenyamanan terasa bisa dibagi.',
  LII: 'Merapikan prinsip lalu membuka kemungkinan yang masih konsisten.',
  EIE: 'Membaca gelombang emosi dan mengarahkannya ke momentum yang terasa penting.',
  LSI: 'Menata struktur, batas, dan langkah nyata agar keadaan tidak melebar liar.',
  SLE: 'Mengambil ruang, menekan keputusan, lalu memakai struktur untuk bergerak cepat.',
  IEI: 'Membaca arah yang pelan terbentuk dan menyentuh suasana di titik yang pas.',
  SEE: 'Masuk ke ruang nyata, membaca orang, lalu menggerakkan keadaan lewat kedekatan dan daya dorong.',
  ILI: 'Menangkap arah konsekuensi dan memilih cara kerja yang paling berguna.',
  LIE: 'Mengejar hasil nyata dengan mata pada arah besar yang sedang bergerak.',
  ESI: 'Menjaga batas batin dan loyalitas, lalu mengambil posisi saat nilai itu terusik.',
  IEE: 'Membaca potensi orang dan kemungkinan relasi tanpa melepas batas personal.',
  SLI: 'Menjaga kualitas hidup dan memakai cara kerja yang terbukti tanpa banyak drama.',
  LSE: 'Membuat kerja berjalan rapi sambil menjaga ritme dan standar pengalaman.',
  EII: 'Membaca jarak batin dengan halus lalu membuka jalan tumbuh yang tetap manusiawi.'
};

function makeProfile(code: SocionicsType): TypeProfile {
  const modelA = MODEL_A_BY_TYPE[code];
  const base = ELEMENT_DESCRIPTIONS[modelA.base];
  const creative = ELEMENT_DESCRIPTIONS[modelA.creative];
  const role = ELEMENT_DESCRIPTIONS[modelA.role];
  const vulnerable = ELEMENT_DESCRIPTIONS[modelA.vulnerable];
  const suggestive = ELEMENT_DESCRIPTIONS[modelA.suggestive];
  const mobilizing = ELEMENT_DESCRIPTIONS[modelA.mobilizing];
  const ignoring = ELEMENT_DESCRIPTIONS[modelA.ignoring];
  const demonstrative = ELEMENT_DESCRIPTIONS[modelA.demonstrative];
  return {
    code,
    fullName: fullNames[code],
    quadra: TYPE_QUADRA[code],
    modelA,
    oneLine: oneLines[code],
    corePattern: `Kemungkinan pola ${code}: ${base.resultLanguage} menjadi pusat otomatis, sementara ${creative.resultLanguage} dipakai sebagai alat yang luwes.`,
    baseDescription: `Area paling otomatis cenderung berada pada ${base.publicName.toLowerCase()}. Ini biasanya terasa seperti cara alami membaca situasi, bukan strategi yang harus dipaksa.`,
    creativeDescription: `Area pendukung cenderung memakai ${creative.publicName.toLowerCase()} untuk membantu tujuan lain. Sinyalnya lebih lentur, tidak selalu dijadikan identitas utama.`,
    roleMask: `Di area ${role.publicName.toLowerCase()}, kamu mungkin bisa tampil cukup rapi ketika situasi menuntut, tetapi energi ini lebih mudah terasa seperti performa sosial.`,
    vulnerableRisk: `Area ${vulnerable.publicName.toLowerCase()} perlu dibaca hati-hati: sinyal di sini bisa muncul sebagai tegang, menghindar, malu, atau defensif ketika tuntutan datang terlalu langsung.`,
    suggestiveNeed: `Dukungan dari orang lain pada ${suggestive.publicName.toLowerCase()} dapat terasa sangat melegakan, terutama ketika datang tanpa menggurui.`,
    mobilizingDrive: `Pada ${mobilizing.publicName.toLowerCase()}, ada indikasi dorongan tumbuh: ingin makin bisa, ingin diakui, tetapi belum selalu stabil.`,
    ignoringStyle: `${ignoring.publicName} mungkin muncul sebagai kemampuan yang bisa dipakai, namun sering tidak terasa cukup penting untuk dijadikan pusat perhatian.`,
    demonstrativeSkill: `${demonstrative.publicName} bisa berjalan di latar: membantu tanpa banyak drama, sering baru terlihat ketika orang lain membutuhkannya.`,
    strengths: [
      `Cepat kembali ke pola utama: ${base.shortName.toLowerCase()}.`,
      `Mampu memakai ${creative.shortName.toLowerCase()} sebagai alat bantu yang cukup lentur.`,
      `Punya kontribusi latar pada ${demonstrative.shortName.toLowerCase()} yang tidak selalu disadari.`
    ],
    drains: [
      `Tuntutan kasar pada ${vulnerable.shortName.toLowerCase()} bisa terasa menguras.`,
      `Harus terus-menerus memakai ${role.shortName.toLowerCase()} sebagai wajah sosial dapat membuat lelah.`,
      `Situasi yang tidak memberi ruang bagi ${suggestive.shortName.toLowerCase()} dapat terasa kering.`
    ],
    reliefNeeds: [
      `Dibantu secara natural pada ${suggestive.shortName.toLowerCase()}, tanpa dibuat merasa kurang.`,
      `Diberi pengakuan yang konkret pada ${mobilizing.shortName.toLowerCase()}.`,
      `Dibiarkan memakai kekuatan utama tanpa harus menjelaskan semuanya dari nol.`
    ],
    developmentNotes: [
      `Selama 7 hari, catat situasi ketika ${vulnerable.shortName.toLowerCase()} membuatmu ingin menghindar; cari satu bentuk bantuan kecil yang tidak memalukan.`,
      `Gunakan ${creative.shortName.toLowerCase()} sebagai alat, bukan kewajiban tampil sempurna.`,
      `Jangan membaca satu hasil sebagai vonis; perhatikan kandidat kedua dan ketiga bila jaraknya rapat.`
    ],
    commonMistypes: mistypes[code],
    stereotypeBlock: `Bagian hiburan yang sengaja dilebih-lebihkan: ${code} sering terlihat seperti orang yang membuat dunia punya pola khasnya sendiri, lalu kesal ketika orang lain membaca pola itu terlalu dangkal. Jangan pakai kalimat ini untuk menilai manusia nyata.`,
    notADiagnosisNote: 'Profil ini adalah interpretasi tipologi berbasis jawaban, bukan diagnosis klinis atau kebenaran final tentang dirimu.'
  };
}

export const TYPE_PROFILES: Record<SocionicsType, TypeProfile> = {
  ILE: makeProfile('ILE'),
  SEI: makeProfile('SEI'),
  ESE: makeProfile('ESE'),
  LII: makeProfile('LII'),
  EIE: makeProfile('EIE'),
  LSI: makeProfile('LSI'),
  SLE: makeProfile('SLE'),
  IEI: makeProfile('IEI'),
  SEE: makeProfile('SEE'),
  ILI: makeProfile('ILI'),
  LIE: makeProfile('LIE'),
  ESI: makeProfile('ESI'),
  IEE: makeProfile('IEE'),
  SLI: makeProfile('SLI'),
  LSE: makeProfile('LSE'),
  EII: makeProfile('EII')
};
