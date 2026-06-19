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
    case 'Identity': 
      return 'Cara berpikir kalian ibarat cermin; gampang sekali menyambung dan paham kebiasaan masing-masing, tapi giliran mentok, dua-duanya sama-sama buntu di area yang sama (misalnya, berdua asyik membedah ide berjam-jam, tapi sama-sama lupa makan siang karena malas masak).';
    case 'Duality': 
      return 'Terasa seperti kepingan puzzle yang pas; kelemahanmu ditutupi kelebihannya, tapi ini bukan jaminan bebas drama (misalnya, kamu yang suka panik otomatis ditenangkan oleh dia yang super santai, walau kadang kamu gemas sendiri melihat dia terlalu santai bekerja).';
    case 'Activation': 
      return 'Gampang sekali menghidupkan suasana dan saling memompa semangat, tapi kalau kelamaan bisa bikin baterai sosial cepat habis (misalnya, kalian bisa heboh maraton obrolan semalaman, tapi besoknya butuh waktu diam menyendiri untuk bernapas).';
    case 'Mirror': 
      return 'Punya tujuan yang sama tapi beda rute; cocok sekali untuk jadi teman diskusi yang saling mengoreksi tanpa harus berujung debat kusir (misalnya, sama-sama ingin membuat acara, tapi kamu sibuk mengurus konsep acaranya sementara dia sibuk memastikan anggarannya aman).';
    case 'Kindred': 
      return 'Awalnya terasa satu frekuensi karena cara memulai obrolannya mirip, tapi ujung prioritasnya bisa bertolak belakang (misalnya, sama-sama suka membahas film, tapi kamu fokus membedah pesan moralnya sedangkan dia lebih sibuk mengkritik akting para aktornya).';
    case 'Semi-duality': 
      return 'Rasanya sudah hampir pas; dia sering mencoba mendukungmu tapi kadang caranya meleset dari sasaran (misalnya, kamu sedang sangat lelah dan cuma butuh dibantu beres-beres ruangan, tapi dia malah memberimu ceramah motivasi panjang lebar).';
    case 'Mirage': 
      return 'Obrolannya mengalir ringan dan gampang bikin nyaman, tapi kalian berdua cenderung saling menghindar kalau disuruh membahas masalah serius (misalnya, lebih memilih berjam-jam saling kirim video lucu ketimbang membahas konflik yang sedang mengganjal di antara kalian).';
    case 'Business': 
      return 'Cocok sekali untuk bermitra kerja selama pembagian tugasnya jelas, tapi jangan terlalu berharap ada kedekatan emosional (misalnya, kalau urusan menyelesaikan dokumen tugas kelompok kalian juara satu, tapi kalau disuruh curhat rasanya kaku dan canggung).';
    case 'Contrary': 
      return 'Sering saling menetralkan energi satu sama lain; bagus untuk meredam kepanikan, tapi kadang bikin suasana terasa datar (misalnya, saat kamu sedang menggebu-gebu bercerita dengan semangat, dia cuma merespons dengan senyum tipis dan anggukan tenang).';
    case 'Superego': 
      return 'Melihat dia seperti melihat orang dari latar belakang yang sangat asing; butuh usaha ekstra untuk menerjemahkan maksud masing-masing biar tidak gampang salah paham (misalnya, candaan santaimu sering ditanggapi serius olehnya, dan kritikannya yang berniat baik malah terasa seperti serangan bagimu).';
    case 'Quasi-identity': 
      return 'Kalau dilihat sekilas dari luar sifat kalian mirip, tapi begitu membedah cara kerjanya, ternyata jalurnya beda jauh (misalnya, dari luar sama-sama terlihat rajin mencatat rapat, tapi kamu mencatat ide kasarnya saja, sedangkan dia mencatat urutan waktunya dengan detail).';
    case 'Conflict': 
      return 'Titik terkuatnya dia kebetulan adalah titik paling rawanmu, begitu pun sebaliknya; butuh komunikasi ekstra hati-hati biar tidak gampang tersinggung (misalnya, dia terbiasa bicara to the point apa adanya, padahal kamu butuh bahasa yang lebih diperhalus agar tidak merasa dihakimi).';
    case 'Supervision': 
      return 'Tanpa sadar kamu bisa bersikap seperti "mandor" baginya; kalau tidak hati-hati, caramu bicara bisa menekan titik paling rentannya (misalnya, kamu cuma iseng mengingatkan dia soal jadwal, tapi buat dia itu terasa seperti teguran tajam yang bikin panik).';
    case 'Reverse supervision': 
      return 'Kamu merasa seperti sedang diawasi oleh sosok "mandor"; ada perasaan terus-menerus diamati atau gampang dikoreksi tepat di area kelemahanmu (misalnya, setiap kali kamu mencoba menyusun rencana anggaran, dia selalu datang menyoroti di mana letak ketidakefisienannya).';
    case 'Benefit': 
      return 'Kamu secara alami bertindak layaknya "sponsor" yang memompa semangat dan membukakan jalan untuknya, walau terkadang rasanya tidak simetris (misalnya, kamu sering memberinya solusi logis yang sangat membantu pekerjaannya, tapi dia jarang bisa membalas membantumu dengan kapasitas yang sama).';
    case 'Reverse benefit': 
      return 'Kamu berada di posisi yang menerima banyak dukungan, energi, atau wawasan darinya yang sangat berguna, walau rasanya kadang kurang utuh (misalnya, dia terus-terusan memberimu dorongan motivasi dan koneksi kerja yang kamu butuhkan, meski kalian sering tidak nyambung kalau diajak bercanda santai).';
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
