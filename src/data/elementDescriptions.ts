import type { ElementDescription, SocionicsElement } from '../types/socionics';

export const ELEMENT_DESCRIPTIONS: Record<SocionicsElement, ElementDescription> = {
  Ne: {
    element: 'Ne',
    publicName: 'Peluang dan kemungkinan lain',
    shortName: 'Alternatif',
    theme: 'mengotak-atik celah, mencari opsi, melihat potensi tersembunyi, dan menemukan jalan lain saat sedang buntu',
    signals: ['cepat membuka opsi baru', 'peka pada peluang yang masih abu-abu', 'mudah menemukan jalan pintas atau rute samping'],
    notThis: ['cuma sekadar melucu', 'gampang bosan saja', 'asal beda tapi tidak jelas arahnya'],
    resultLanguage: 'cara kepalamu membaca kemungkinan, celah, dan jalan alternatif yang masih bisa dicoba'
  },
  Ni: {
    element: 'Ni',
    publicName: 'Arah waktu dan momentum',
    shortName: 'Arah',
    theme: 'membaca alur, menebak timing, melihat efek berantai, dan menunggu situasi benar-benar matang',
    signals: ['peka ke mana arah bakal berubah', 'bisa melihat efek domino dari suatu kejadian', 'sabar menunggu momen yang paling pas'],
    notThis: ['ramalan mistis', 'cuma terlalu cemas soal masa depan', 'hanya berkhayal ingin sukses'],
    resultLanguage: 'cara kepalamu membaca arah gerak, momentum, dan rentetan akibat yang pelan-pelan terbentuk'
  },
  Se: {
    element: 'Se',
    publicName: 'Tekanan nyata dan batasan fisik',
    shortName: 'Daya dorong',
    theme: 'mengambil kendali, menekan untuk cepat memutuskan, menguji batasan, dan menghadapi konfrontasi langsung',
    signals: ['sadar siapa yang pegang kendali', 'berani mengambil posisi tawar', 'cepat merespons tekanan atau ancaman di depan mata'],
    notThis: ['sekadar bersikap kasar', 'hobi cari ribut', 'harus pintar olahraga'],
    resultLanguage: 'cara kepalamu menghadapi tekanan langsung, dorongan nyata, dan persaingan merebut kendali'
  },
  Si: {
    element: 'Si',
    publicName: 'Kenyamanan fisik dan kualitas suasana',
    shortName: 'Kenyamanan',
    theme: 'mengatur ritme badan, memulihkan energi, menjaga mood dari suhu atau rasa, dan memastikan suasana nyaman dinikmati',
    signals: ['peka pada rasa tidak nyaman sekecil apa pun', 'paham kapan tubuh butuh istirahat', 'pintar membuat suasana jadi lebih santai'],
    notThis: ['sekadar pemalas', 'cuma memikirkan makanan enak', 'takut keluar dari zona nyaman'],
    resultLanguage: 'cara kepalamu menjaga ritme, kualitas suasana, dan memulihkan energi badan'
  },
  Te: {
    element: 'Te',
    publicName: 'Efektivitas dan bukti nyata',
    shortName: 'Efektivitas',
    theme: 'mencari data yang bisa dipakai, mengejar hasil, membuat sistem berjalan, menghemat waktu, dan memberi bukti konkret',
    signals: ['mencari cara yang sudah terbukti berhasil', 'mengukur segala sesuatu dari hasilnya', 'pintar mencari akal agar hemat tenaga dan modal'],
    notThis: ['sekadar rajin kerja', 'kaku seperti robot', 'cuma gila harta atau jabatan'],
    resultLanguage: 'cara kepalamu mencari bukti nyata, hasil yang bisa dipakai langsung, dan cara kerja paling efisien'
  },
  Ti: {
    element: 'Ti',
    publicName: 'Struktur dan konsistensi logika',
    shortName: 'Struktur',
    theme: 'memegang prinsip, mengatur definisi, membuat aturan main di kepala, mengelompokkan hal, dan memastikan semuanya masuk akal',
    signals: ['suka merapikan kategori di kepala', 'mencari pola aturan yang konsisten', 'mudah melihat benang merah antar masalah'],
    notThis: ['pasti pintar matematika', 'kaku tidak bisa kompromi', 'tidak punya perasaan'],
    resultLanguage: 'cara kepalamu merapikan definisi, memilah konsep, dan mencari benang merah logikanya'
  },
  Fe: {
    element: 'Fe',
    publicName: 'Atmosfer emosi dan energi kelompok',
    shortName: 'Atmosfer',
    theme: 'menghangatkan atau mendinginkan suasana, mengatur ekspresi, membaca mood kelompok, dan menghidupkan energi kebersamaan',
    signals: ['mudah merasakan mood ruangan berubah', 'pintar mengatur raut muka', 'bisa mengikuti atau mengubah ritme obrolan'],
    notThis: ['pasti baik hati', 'selalu tersenyum ramah', 'cuma cari perhatian saja'],
    resultLanguage: 'cara kepalamu membaca mood ruangan, mengatur ekspresi, dan membawa energi untuk kelompok'
  },
  Fi: {
    element: 'Fi',
    publicName: 'Jarak batin dan nilai personal',
    shortName: 'Jarak batin',
    theme: 'mengatur seberapa dekat dengan orang, menarik batas, mengukur rasa percaya, kesetiaan, dan pantas tidaknya sebuah hubungan',
    signals: ['peka pada siapa yang benar-benar bisa dipercaya', 'tegas menarik batas personal', 'membaca tanda bahaya dalam hubungan dengan halus'],
    notThis: ['sekadar cengeng', 'pasti pendiam', 'selalu bertutur lembut'],
    resultLanguage: 'cara kepalamu mengukur jarak batin, rasa percaya, kesetiaan, dan batas personal dengan orang lain'
  }
};
