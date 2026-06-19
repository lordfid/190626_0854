import type { Quadra, QuadraProfile } from '../types/socionics';

export const QUADRA_PROFILES: Record<Quadra, QuadraProfile> = {
  Alpha: {
    quadra: 'Alpha',
    types: ['ILE', 'SEI', 'ESE', 'LII'],
    valuedElements: ['Ne', 'Ti', 'Fe', 'Si'],
    climate: 'Suka lingkungan yang terbuka untuk ide apa saja, suasananya ringan (tidak kaku), dan paling seru kalau obrolannya bisa melompat liar tapi tetap punya dasar logika (misalnya, berdebat santai soal teori konspirasi atau ide bisnis fiktif sambil mengopi).',
    socialMood: 'Hangat, penuh rasa penasaran, suka diskusi panjang, dan biasanya diakhiri dengan mencari makan enak atau sekadar santai bersama setelah puas bertukar pikiran.',
    strengths: ['menggali kemungkinan dan ide baru', 'merapikan konsep yang berantakan', 'menghidupkan suasana tongkrongan', 'menjaga kenyamanan perut dan badan'],
    cautions: ['kadang terlalu lama menghindari konflik atau tekanan hidup yang keras', 'bisa tidak sengaja menabrak batas privasi orang karena suasana yang kelewat santai']
  },
  Beta: {
    quadra: 'Beta',
    types: ['EIE', 'LSI', 'SLE', 'IEI'],
    valuedElements: ['Ni', 'Fe', 'Se', 'Ti'],
    climate: 'Suasananya intens, punya arah yang jelas, sangat peka pada momentum, dan lebih hidup kalau ada struktur, peran yang tegas, serta luapan emosi yang lepas (misalnya, *vibes* rapat panitia yang berapi-api lalu diakhiri dengan yel-yel kebersamaan).',
    socialMood: 'Sangat ekspresif, punya daya dorong tinggi, loyal pada kubunya, dan sama sekali tidak takut untuk adu mulut atau konfrontasi kalau memang situasinya menuntut.',
    strengths: ['membaca momentum yang paling pas', 'membakar emosi dan semangat kelompok', 'berani mengambil posisi di depan', 'menjaga aturan main tetap tegak'],
    cautions: ['bisa terasa terlalu mengintimidasi atau "panas" bagi orang luar', 'terkadang menyepelekan rasa lelah fisik atau kenyamanan kecil demi mencapai tujuan']
  },
  Gamma: {
    quadra: 'Gamma',
    types: ['SEE', 'ILI', 'LIE', 'ESI'],
    valuedElements: ['Se', 'Fi', 'Te', 'Ni'],
    climate: 'Sangat pragmatis, pilih-pilih teman (*circle* kecil), selalu melihat dampak jangka panjang, dan lebih suka hubungan dengan batas jelas yang menghasilkan sesuatu yang konkret (misalnya, obrolan dua sahabat yang langsung membahas strategi investasi atau progres proyek tanpa banyak basa-basi).',
    socialMood: 'Tegas, menjaga privasi lingkar dalam, realistis, dan jauh lebih menghargai bukti tindakan (misalnya membantu saat susah) daripada sekadar keramaian atau kata-kata manis.',
    strengths: ['mengeksekusi langkah nyata tanpa ragu', 'menjaga kesetiaan pada lingkar terdekat', 'fokus pada hasil akhir yang terukur', 'memperkirakan konsekuensi jauh ke depan'],
    cautions: ['bisa terlihat terlalu keras, dingin, atau menghakimi dari luar', 'terkadang cepat muak dan tidak sabaran menghadapi drama sosial atau basa-basi yang dangkal']
  },
  Delta: {
    quadra: 'Delta',
    types: ['IEE', 'SLI', 'LSE', 'EII'],
    valuedElements: ['Ne', 'Fi', 'Te', 'Si'],
    climate: 'Mencari ruang yang sehat untuk saling berkembang, menjaga hubungan yang benar-benar tulus, dan menyukai cara kerja yang efisien tapi badannya tetap bisa beristirahat (misalnya, rekan kerja yang saling *support* bekerja cepat supaya bisa pulang tepat waktu mengurus keluarga/hobi).',
    socialMood: 'Tenang, suportif, sangat membumi, dan memberi ruang bebas untuk orang mau menjadi apa saja tanpa ada paksaan harus ikut arus mayoritas.',
    strengths: ['membuka peluang pengembangan diri secara personal', 'sangat peka menjaga batas nyaman sebuah hubungan', 'mengoptimalkan cara kerja yang praktis', 'menjaga keseimbangan ritme hidup dan kerja'],
    cautions: ['bisa terlalu lama menahan diri dari ledakan konflik sampai masalahnya menumpuk', 'terkadang terlalu lama menunggu momen atau ruang yang "benar-benar aman" sampai telat bertindak']
  }
};
    strengths: ['membuka peluang pengembangan diri secara personal', 'sangat peka menjaga batas nyaman sebuah hubungan', 'mengoptimalkan cara kerja yang praktis', 'menjaga keseimbangan ritme hidup dan kerja'],
    cautions: ['bisa terlalu lama menahan diri dari ledakan konflik sampai masalahnya menumpuk', 'terkadang terlalu lama menunggu momen atau ruang yang "benar-benar aman" sampai telat bertindak']
  }
};
