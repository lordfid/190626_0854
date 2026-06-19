import type { ElementDescription, SocionicsElement } from '../types/socionics';

export const ELEMENT_DESCRIPTIONS: Record<SocionicsElement, ElementDescription> = {
  Ne: {
    element: 'Ne',
    publicName: 'Kemungkinan dan alternatif',
    shortName: 'Alternatif',
    theme: 'melihat celah, opsi, potensi tersembunyi, dan cara lain saat situasi belum selesai',
    signals: ['cepat membuka opsi', 'peka pada peluang yang belum jelas', 'mudah melihat jalur samping'],
    notThis: ['sekadar lucu', 'sekadar mudah bosan', 'asal berbeda tanpa arah'],
    resultLanguage: 'pola membaca kemungkinan, celah, dan jalur lain yang masih bisa dicoba'
  },
  Ni: {
    element: 'Ni',
    publicName: 'Arah waktu dan momentum',
    shortName: 'Arah',
    theme: 'membaca perkembangan, timing, urutan konsekuensi, dan kematangan keadaan',
    signals: ['peka pada arah perubahan', 'melihat konsekuensi berantai', 'menunggu momen yang pas'],
    notThis: ['ramalan mistis', 'cemas masa depan', 'ambisi kosong'],
    resultLanguage: 'pola membaca arah, momentum, dan konsekuensi yang pelan-pelan terbentuk'
  },
  Se: {
    element: 'Se',
    publicName: 'Tekanan nyata dan batas kekuatan',
    shortName: 'Daya dorong',
    theme: 'mengambil ruang, menekan keputusan, menghadapi batas, dan merespons konfrontasi',
    signals: ['membaca kekuatan nyata', 'berani mengambil posisi', 'cepat merespons tekanan langsung'],
    notThis: ['kasar', 'suka ribut', 'harus atletis'],
    resultLanguage: 'pola menghadapi tekanan nyata, batas, dorongan, dan perebutan ruang'
  },
  Si: {
    element: 'Si',
    publicName: 'Kenyamanan tubuh dan kualitas pengalaman',
    shortName: 'Kenyamanan',
    theme: 'ritme tubuh, pemulihan, kestabilan sensasi, rasa, suhu, dan kualitas pengalaman',
    signals: ['peka pada kenyamanan kecil', 'membaca ritme tubuh', 'menjaga pengalaman tetap enak dihuni'],
    notThis: ['malas', 'hanya suka makanan', 'menghindari tantangan'],
    resultLanguage: 'pola menjaga ritme, kenyamanan, kualitas rasa, dan pemulihan tubuh'
  },
  Te: {
    element: 'Te',
    publicName: 'Efektivitas dan bukti kerja',
    shortName: 'Efektivitas',
    theme: 'data berguna, output, prosedur yang bekerja, efisiensi, sumber daya, dan hasil nyata',
    signals: ['mencari cara yang terbukti jalan', 'mengukur hasil', 'menghemat tenaga dan sumber daya'],
    notThis: ['sekadar rajin', 'dingin', 'hanya uang atau kerja kantor'],
    resultLanguage: 'pola mencari bukti kerja, hasil yang bisa dipakai, dan cara yang efisien'
  },
  Ti: {
    element: 'Ti',
    publicName: 'Struktur dan konsistensi logis',
    shortName: 'Struktur',
    theme: 'prinsip, definisi, aturan internal, klasifikasi, dan konsistensi sistem',
    signals: ['merapikan kategori', 'mencari aturan yang konsisten', 'melihat hubungan antarbagian'],
    notThis: ['pintar matematika', 'kaku', 'tidak punya emosi'],
    resultLanguage: 'pola merapikan definisi, batas konsep, dan konsistensi antarbagian'
  },
  Fe: {
    element: 'Fe',
    publicName: 'Atmosfer emosi dan ekspresi kolektif',
    shortName: 'Atmosfer',
    theme: 'menaikkan atau menurunkan suasana, ekspresi, ritme sosial, dan daya hidup kelompok',
    signals: ['peka pada perubahan suasana', 'bisa mengatur ekspresi', 'membaca ritme kelompok'],
    notThis: ['baik hati', 'selalu ramah', 'cari perhatian saja'],
    resultLanguage: 'pola membaca suasana, ekspresi, ritme sosial, dan energi kelompok'
  },
  Fi: {
    element: 'Fi',
    publicName: 'Jarak relasional dan nilai personal',
    shortName: 'Jarak batin',
    theme: 'kedekatan, batas personal, kepercayaan, loyalitas, dan rasa pantas dalam hubungan',
    signals: ['peka pada jarak batin', 'menjaga batas personal', 'membaca kepercayaan dengan halus'],
    notThis: ['sentimental saja', 'pendiam', 'selalu lembut'],
    resultLanguage: 'pola membaca jarak batin, kepercayaan, loyalitas, dan batas personal'
  }
};
