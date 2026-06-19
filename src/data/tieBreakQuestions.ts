import { SOCIONICS_TYPES } from '../types/socionics';
import type { QuestionItem, RatingOption } from '../types/questions';
import type { SocionicsType } from '../types/socionics';
import { MODEL_A_BY_TYPE } from './socionicsModelA';

const optionSet: RatingOption[] = ([1, 2, 3, 4, 5] as const).map((value) => ({
  value,
  label: value === 1 ? 'Bukan aku banget' : value === 2 ? 'Kayaknya jarang deh' : value === 3 ? 'Tergantung sikon (50/50)' : value === 4 ? 'Lumayan aku banget' : 'Ini aku banget!',
  meaning: value === 1
    ? 'Pola ini sangat bertolak belakang dengan cara otakmu bekerja. Memaksa masuk ke mode ini rasanya seperti memakai sepatu orang lain yang kekecilan—sangat tidak nyaman dan menguras energi.'
    : value === 2
      ? 'Sesekali kamu mungkin pernah berada di situasi ini, tapi ini jelas bukan insting pertamamu. Kepalamu masih menolaknya karena terasa canggung dan tidak mengalir natural.'
      : value === 3
        ? 'Otakmu tidak punya keberpihakan mutlak di area ini. Responsmu ibarat saklar lampu yang sangat bergantung pada siapa orangnya, seberapa darurat situasinya, atau seberapa lelah tubuhmu hari itu.'
        : value === 4
          ? 'Pola ini cukup sering menjadi mode operasional standarmu. Kepalamu merasa familier dan lumayan nyaman menggunakan cara ini tanpa perlu banyak dipaksa.'
          : 'Mode ini sudah berjalan mutlak layaknya autopilot. Inilah cara paling murni dan paling instingtif dari tubuh serta pikiranmu dalam memproses dunia di sekitarmu sedari dulu.',
  reaction: value <= 2
    ? 'Kamu membaca kalimatnya, langsung mengerutkan dahi, dan dengan cepat bergumam, "Wah, ini sih bukan gue banget," lalu langsung melewatkannya.'
    : value === 3
      ? 'Kamu menopang dagu, pandanganmu sedikit menerawang, menimbang-nimbang dua ingatan yang berbeda, lalu bergumam, "Hmm... bisa iya bisa nggak sih, lihat sikon dulu."'
      : value === 4
        ? 'Sambil mengangguk-angguk kecil, memori di kepalamu langsung memutar beberapa adegan spesifik di masa lalu saat kamu merespons persis seperti kalimat tersebut.'
        : 'Matamu sedikit melebar, kamu tersenyum tipis atau tertawa kecil, lalu dengan mantap langsung merasa kalimat itu seperti sedang membaca isi kepalamu tanpa celah.',
  score: {
    direction: value === 3 ? 0 : value > 3 ? 1 : -1,
    intensity: value === 3 ? 0 : value === 2 || value === 4 ? 0.5 : 1,
    reliability: value === 3 ? 0.55 : value === 2 || value === 4 ? 0.82 : 0.92
  }
}));

const pairStatements = [
  'Pas dua pilihan sama-sama logis, aku bakal milih jalan yang efeknya paling berasa langsung di dunia nyata (misalnya, mending langsung turun bantu angkat barang ketimbang cuma nyumbang ide brilian dari grup WA).',
  'Kalau disuruh menjelaskan keputusanku, aku jauh lebih gampang ngasih contoh kejadian nyatanya ketimbang harus menceramahi pakai teori panjang lebar (misalnya, "Pokoknya kalau pakai alat ini jadi cepat kelar, kayak pas kita ngerjain proyek bulan lalu tuh").',
  'Pas orang-orang memaksa minta jawaban pasti saat itu juga, aku malah mikir dulu apakah kepastian ini beneran menyelesaikan masalah atau cuma buat obat penenang sementara doang (misalnya, nahan diri nggak langsung mengiyakan deadline mepet cuma buat bikin atasan senang).',
  'Aku jauh lebih percaya sama kebiasaan asli orang yang kelihatan dari tindakannya sehari-hari, ketimbang pencitraan manis di pertemuan pertama (misalnya, nggak gampang luluh sama kenalan baru yang super ramah kalau nyatanya dia suka telat membalas pesan berulang kali).',
  'Pas orang-orang di grup mulai salah paham dan hawa jadi tegang, mataku otomatis nyari celah kecil buat mengendurkan urat saraf mereka (misalnya, tiba-tiba mengirim stiker lucu atau melempar candaan ringan biar mereka bisa senyum lagi).',
  'Walau rencana di atas kertas udah kelihatan sempurna banget, tapi kalau feeling atau badanku tiba-tiba kerasa nggak enak, aku nggak bakal berani mengabaikan sinyal itu (misalnya, batalin ikut nongkrong di kafe padahal udah janjian karena mendadak perut kerasa kurang nyaman).',
  'Kalau mau ngambil keputusan besar, aku wajib tahu dulu batas mainnya di mana, risiko terburuknya apa, dan logika dasarnya harus clear sebelum aku mau melangkah (misalnya, baca pelan-pelan syarat dan ketentuan denda sebelum tanda tangan kontrak apartemen).',
  'Walau lagi dekat-dekatnya sama orang, radarku tetap nyala buat memastikan apakah hubungan ini masih punya boundaries yang sehat dan nggak ada unsur paksaan (misalnya, mulai jaga jarak kalau sahabat tiba-tiba mulai mengatur urusan pribadiku secara berlebihan).'
];

const scenePlaces = [
  'di tengah grup obrolan keluarga yang lagi ramai', 
  'di meja kantor pas lagi dikejar deadline', 
  'di ruang kelas pas dosen nanya mendadak', 
  'di tengah antrean panjang minimarket', 
  'di kamar sendiri pas lagi asyik scrolling malam-malam', 
  'di acara kumpul temen yang suasananya mulai canggung', 
  'di jalan pulang pas lagi capek-capeknya di kendaraan', 
  'di zoom meeting yang kameranya pada mati', 
  'di warung atau kafe sempit yang agak sumpek', 
  'di ruang tunggu rumah sakit atau stasiun'
];

const sceneTurns = [
  'pas ada satu celetukan yang bikin semua orang tiba-tiba diam nungguin ada yang ambil keputusan',
  'pas rencana mendadak dibatalin padahal tadi udah pada setuju semua',
  'pas ada orang yang mendesak minta dikasih jawaban detik itu juga',
  'pas ada satu kejadian sepele yang tiba-tiba merusak mood satu ruangan',
  'pas ada yang niatnya bantuin, tapi malah bikin kerjaan makin ribet',
  'pas mulai ngerasa ada teman yang terlalu ikut campur urusan privasi',
  'pas ngerasa pura-pura setuju cari aman tuh rasanya makin mengganjal di hati',
  'pas ada bos atau teman yang maksa-maksa tapi nggak mau menjelaskan alasannya apa',
  'pas kelihatannya pada anteng, tapi kerasa banget ada perang dingin di udara',
  'pas harus mengambil keputusan tegas tapi tetap harus jaga perasaan orang biar nggak tersinggung',
  'pas badan udah mau rontok saking capeknya, tapi kerjaan memaksa buat terus jalan',
  'pas lagi mau bubaran meeting atau nongkrong, eh malah kepikiran peluang emas'
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
