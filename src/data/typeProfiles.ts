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
  ILE: 'Membuka berbagai kemungkinan, lalu menyusun logikanya agar ide tersebut bisa dijelaskan.',
  SEI: 'Menjaga kenyamanan fisik diri dan sekitar, sambil meredakan ketegangan agar suasana tetap santai.',
  ESE: 'Menghidupkan suasana kelompok dan memastikan semua orang merasa diperhatikan serta nyaman.',
  LII: 'Menyusun prinsip dan aturan secara rapi, lalu membuka opsi baru yang tidak menabrak logika tersebut.',
  EIE: 'Membaca emosi bersama dalam kelompok, lalu mendorongnya ke arah tujuan yang jelas dan terasa penting.',
  LSI: 'Membuat aturan dan batas yang tegas agar segala sesuatu tetap berjalan sesuai rencana dan tidak berantakan.',
  SLE: 'Mengambil posisi kendali, mendesak orang lain membuat keputusan cepat, dan memakai aturan untuk menyingkirkan hambatan.',
  IEI: 'Membaca arah perubahan situasi yang pelan-pelan terjadi, dan memberikan respons emosional pada waktu yang pas.',
  SEE: 'Membaca karakter orang secara langsung, lalu menggerakkan situasi lewat lobi personal dan tindakan nyata.',
  ILI: 'Menebak urutan kejadian hingga kemungkinan terburuknya, lalu memilih cara yang paling efisien dan meminimalkan rugi.',
  LIE: 'Mengejar hasil nyata yang terukur, dengan pandangan yang selalu memperhitungkan pergerakan jangka panjang.',
  ESI: 'Menjaga privasi dan kesetiaan dalam hubungan, serta berani mengambil sikap tegas kalau nilai pribadinya dilanggar.',
  IEE: 'Membaca potensi terpendam seseorang dan membuka koneksi baru, tapi tetap paham kapan harus menjaga jarak personal.',
  SLI: 'Menyelesaikan pekerjaan dengan cara yang paling tidak melelahkan, agar punya waktu cukup untuk beristirahat.',
  LSE: 'Mengatur sistem kerja dan prosedur dengan rinci, tanpa melupakan kualitas fasilitas dan kesejahteraan harian.',
  EII: 'Membaca kecocokan dan rasa percaya, lalu memberikan dukungan yang aman agar orang lain bisa mengembangkan dirinya.'
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
    corePattern: `Pola inti ${code}: ${base.resultLanguage} adalah fokus utama yang berjalan otomatis, sementara ${creative.resultLanguage} dipakai sebagai cara pendukung yang luwes.`,
    baseDescription: `Fokus pertamamu secara natural ada pada ${base.publicName.toLowerCase()}. Ini adalah caramu memproses situasi secara instingtif sehari-hari, bukan cara yang harus kamu rencanakan atau paksa.`,
    creativeDescription: `Untuk membantu tujuanmu, kamu menggunakan ${creative.publicName.toLowerCase()} dengan lincah. Ini adalah alat bantu untuk menyelesaikan persoalan, bukan sesuatu yang harus kamu pertahankan secara kaku.`,
    roleMask: `Saat berhadapan dengan tuntutan sosial, kamu mampu memakai ${role.publicName.toLowerCase()} agar terlihat menyesuaikan diri. Kamu bisa melakukannya, tapi sering terasa menguras tenaga karena bukan kebiasaan aslimu.`,
    vulnerableRisk: `Area ${vulnerable.publicName.toLowerCase()} adalah titik rentanmu. Bila kamu dituntut untuk merespons langsung di area ini, kamu cenderung merasa tegang, cemas, kaku, atau mencari cara untuk segera menghindarinya.`,
    suggestiveNeed: `Menerima dukungan dari orang lain terkait urusan ${suggestive.publicName.toLowerCase()} sangat melegakan buatmu. Kamu diam-diam merasa terbantu bila ada yang mau mengurus hal ini tanpa banyak mendikte.`,
    mobilizingDrive: `Dalam hal ${mobilizing.publicName.toLowerCase()}, kamu memiliki dorongan besar untuk terlihat mampu. Kamu ingin terus belajar dan diakui di area ini, walaupun sebenarnya kemampuanmu masih sering tidak konsisten.`,
    ignoringStyle: `Kamu sebenarnya sanggup memproses ${ignoring.publicName.toLowerCase()}, tapi cenderung sengaja mengabaikannya. Kamu merasa fokus ke area tersebut kurang penting dan hanya menghabiskan energi tanpa hasil yang sepadan.`,
    demonstrativeSkill: `Kemampuanmu dalam mengurus ${demonstrative.publicName.toLowerCase()} berjalan diam-diam tanpa banyak dibahas. Kamu menyelesaikan urusan ini dengan baik di latar belakang, dan biasanya orang lain baru menyadari peranmu saat keadaan darurat.`,
    strengths: [
      `Sangat cepat merespons melalui pola utama: ${base.shortName.toLowerCase()}.`,
      `Cukup praktis dalam menggunakan ${creative.shortName.toLowerCase()} sebagai taktik memecahkan masalah.`,
      `Memberikan kontribusi stabil pada urusan ${demonstrative.shortName.toLowerCase()} tanpa perlu pamrih atau sorotan.`
    ],
    drains: [
      `Tuntutan atau kritik tajam seputar ${vulnerable.shortName.toLowerCase()} membuatmu cepat lelah secara mental.`,
      `Harus terus-menerus tampil dengan gaya ${role.shortName.toLowerCase()} terasa berat dan menguras kapasitas fisikmu.`,
      `Berada di lingkungan yang tidak memberikanmu dukungan di area ${suggestive.shortName.toLowerCase()} terasa sangat menyulitkan.`
    ],
    reliefNeeds: [
      `Dibantu membereskan masalah ${suggestive.shortName.toLowerCase()} secara nyata, tanpa membuatmu merasa direndahkan.`,
      `Diberi apresiasi secara tulus untuk setiap usaha yang kamu lakukan pada ${mobilizing.shortName.toLowerCase()}.`,
      `Diberi ruang bebas memproses dengan cara andalanmu, tanpa harus menjelaskan langkah demi langkahnya kepada orang lain.`
    ],
    developmentNotes: [
      `Bila berhadapan dengan situasi terkait ${vulnerable.shortName.toLowerCase()} yang membuatmu cemas, temukan satu langkah penyelesaian terkecil agar kamu tidak terus-terusan menghindar.`,
      `Ingat bahwa ${creative.shortName.toLowerCase()} hanyalah metode bantu bagimu, jadi kamu tidak perlu menuntut dirimu untuk selalu sempurna di area tersebut.`,
      `Jangan jadikan satu hasil ini sebagai kepastian mutlak; pertimbangkan juga kandidat tipe kedua dan ketiga jika jarak probabilitasnya tipis.`
    ],
    commonMistypes: mistypes[code],
    stereotypeBlock: `Gambaran berlebihan dari luar: ${code} sering dilabeli sebagai karakter yang melihat dunia dengan logika khasnya sendiri, lalu mengeluh ketika orang lain dianggap terlalu dangkal memahaminya. Deskripsi ini sengaja dilebih-lebihkan, jadi jangan jadikan acuan untuk menilai perilaku aslimu sehari-hari.`,
    notADiagnosisNote: 'Profil ini merupakan pemetaan kecenderungan dari pola jawaban yang kamu berikan, bukan diagnosis medis atau penentuan final mengenai karaktermu.'
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
