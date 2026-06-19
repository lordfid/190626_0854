import type { QuestionItem } from '../types/questions';
import { CORE_QUESTIONS } from './coreQuestions';

const holdoutSource = [
  'Pas suasana mendadak berubah, aku malah memperhatikan detail-detail yang sengaja tidak dibahas orang-orang (misalnya, lirikan mata teman yang tiba-tiba diam saat nama seseorang disebut).',
  'Kalau teman minta saran, aku lebih percaya bukti nyata yang sudah kejadian daripada kalimat motivasi manis (misalnya, lebih mending memberi rekomendasi bengkel yang jelas bagus daripada sekadar bilang "yang sabar ya").',
  'Pas ada konflik kecil, aku refleks menarik batas mana yang perlu dijaga biar masalahnya tidak merembet (misalnya, memilih tidak ikut campur urusan pribadi mereka di grup kerja dan cuma membahas urusan kantor).',
  'Kalau instruksi tugasnya masih tidak jelas, aku akan mencari pola urutannya dulu biar langkah ke depannya masuk akal (misalnya, membuat draf kerangka poin dulu saat atasan cuma memberi arahan topik secara lisan).',
  'Pas badan mulai terasa lelah, aku sadar pikiran bakal ikutan lambat, jadi aku memilih berhenti sebentar (misalnya, memilih tidur siang 15 menit pas kepala mulai pusing daripada memaksakan ngetik tapi berujung banyak salah).',
  'Pas suasana ruangan sedang kaku sekali, aku bisa menemukan celah kecil untuk mencairkannya (misalnya, nyeletuk menawarkan camilan atau membahas hal ringan saat jeda rapat yang tegang).',
  'Kalau ada aturan yang rasanya tumpang tindih, aku penasaran ingin mencari benang merahnya biar semua masuk akal (misalnya, membongkar kenapa aturan cuti dan aturan potong gaji di kantor terasa seperti saling bertentangan).',
  'Pas semua jalan kelihatan buntu, mataku tetap mencari pintu samping atau celah yang belum dicoba (misalnya, saat kehabisan tiket resmi, refleks mencari celah lewat komunitas atau aplikasi pihak ketiga).',
  'Kalau ada yang tiba-tiba mendesak atau menekan, aku mengukur dulu apakah ini perlu dilawan balik atau dibiarkan lewat (misalnya, saat dikomplain klien yang emosi, memikirkan apakah harus adu argumen detik itu juga atau diam dulu menunggu dia tenang).',
  'Pas terasa ada yang beda dari sikap seseorang, aku otomatis mundur sedikit untuk membaca jarak baru sebelum banyak bicara (misalnya, saat teman membalas chat super singkat, aku tidak akan langsung curhat panjang lebar seperti biasanya).',
  'Kalau dihadapkan pada banyak opsi, mataku langsung mencari mana yang hasilnya paling nyata dan gampang dipakai (misalnya, lebih memilih format Excel yang sudah otomatis ada rumusnya daripada template cantik tapi harus hitung manual).',
  'Pas sebuah keputusan harus ditunda, aku bisa membaca apakah memang situasinya belum benar-benar matang untuk dieksekusi (misalnya, memilih menahan diri membahas rencana liburan karena melihat kondisi keuangan keluarga sedang banyak pengeluaran).',
  'Kalau lagi di tempat asing, detail kecil cepat sekali memengaruhi mood-ku (misalnya, langsung minta pindah kursi di kafe kalau AC-nya terlalu menyorot ke kepala atau kursinya tidak nyaman).',
  'Pas suasana kelompok sedang panas, aku paham betul kalau mengatur nada suara sedikit saja sudah bisa mengubah arah obrolan (misalnya, sengaja memelankan volume dan bicara santai saat teman mulai terbawa emosi).',
  'Kalau ada yang memakai istilah yang masih abu-abu, aku pasti ingin memastikan dulu batas artinya apa (misalnya, pas teman bilang "nanti kita ketemuan siang ya", aku langsung bertanya "siang itu jam 11 atau jam 2?").',
  'Pas situasi terasa sempit dan menekan, aku refleks mencari cara baru biar orang-orang tidak merasa terkunci (misalnya, mengusulkan pindah ke luar ruangan atau rehat ngopi saat rekan setim mulai suntuk dan buntu memikirkan ide).',
  'Kalau disuruh mengambil alih situasi, aku melihat dulu siapa sebenarnya yang paling punya ruang dan kebebasan untuk bergerak (misalnya, mengecek siapa anggota tim yang jadwalnya paling kosong sebelum membagi tugas dadakan).',
  'Aku lebih gampang melanjutkan pekerjaan kalau diberi bantuan praktis ketimbang cuma mendengar omongan panjang (misalnya, lebih butuh dikirimi file referensi ketimbang hanya disemangati "aku tahu kamu pasti bisa").',
  'Kalau ada kedekatan yang rasanya dipaksakan, aku otomatis mundur selangkah buat menilai ulang niat aslinya (misalnya, pas ada orang baru kenal yang tiba-tiba bersikap terlalu akrab atau meminjam barang, aku refleks menjaga jarak).',
  'Pas pilihan masa depan kelihatan terlalu rumit, aku fokus mencari satu benang merah yang peluangnya paling bertahan lama (misalnya, dari puluhan jurusan kuliah atau karier, aku memilah dan fokus mencari satu bidang yang kira-kira paling terpakai 10 tahun ke depan).',
  'Kalau rutinitas sehari-hari sedang berantakan parah, aku mulai membenahinya dari hal-hal yang bikin fisikku stabil lagi (misalnya, memastikan makan teratur dan beres-beres kamar dulu sebelum mencoba membereskan tumpukan pekerjaan yang telat).',
  'Pas obrolan sedang garing dan membosankan, aku bisa mengubah ritme kecil biar percakapannya hidup lagi (misalnya, tiba-tiba membelokkan topik ke hal yang sedang viral atau melempar pertanyaan iseng untuk memancing reaksi teman).',
  'Kalau ada alur kerja yang rasanya aneh, kepalaku sulit tenang sebelum ketemu di mana letak tidak logisnya (misalnya, merasa gatal ingin memperbaiki alur absensi atau formulir daring karena urutan isiannya sering membuat orang bingung).',
  'Pas orang-orang gampang menyerah menutup kemungkinan, mataku masih saja melihat peluang lain yang belum mereka sadari (misalnya, pas tempat makan tujuan ternyata tutup, sementara teman-teman mengajak pulang, aku langsung menyodorkan alternatif 3 tempat makan terdekat di area itu).',
  'Kalau batas kesabaranku sedang diuji, aku lebih suka orang bicara jujur dan jelas ketimbang melempar sindiran (misalnya, aku jauh lebih menghargai kalau ditegur "format tulisanmu salah di bagian ini" daripada disindir secara tidak langsung di status WhatsApp).',
  'Aku gampang merasakan ketulusan seseorang dari caranya memperhatikan dan menjaga hal-hal kecil di sekitarnya (misalnya, memperhatikan bagaimana cara dia merapikan kembali kursinya setelah berdiri atau nada suaranya saat berbicara kepada pelayan restoran).',
  'Kalau ada banyak cara yang ditawarkan, otakku otomatis mencari mana yang paling efisien dan hemat tenaga (misalnya, menghitung untung-rugi apakah lebih baik belanja daring dengan kupon gratis ongkos kirim atau keluar rumah tapi harus memakan waktu di jalan).',
  'Pas semua orang terburu-buru ingin cepat bergerak, aku malah menakar dulu apakah ini memang momen yang paling pas (misalnya, menahan diri untuk tidak ikut-ikutan tren yang sedang ramai karena merasa sesaat lagi tren tersebut akan basi dan tergantikan).',
  'Kalau jadwal sedang padat sekali, aku memilih mengambil jeda untuk mengembalikan ritme badanku ketimbang terus memaksa diri (misalnya, sengaja meluangkan 15 menit untuk mandi air hangat dan menikmati sarapan pelan-pelan sebelum menghadapi hari yang sangat sibuk).',
  'Pas emosi seseorang mulai naik, aku sudah bisa merasakan perubahan suhu ruangannya bahkan sebelum tahu apa topiknya (misalnya, baru masuk pintu rumah sudah tahu kalau situasinya sedang tidak enak hanya dari cara seseorang meletakkan barang atau helaan napasnya).',
  'Kalau penjelasan cerita alurnya melompat-lompat, aku pasti gatal ingin menyusun urutannya satu-satu biar gampang dicerna (misalnya, saat teman bercerita gosip dengan panik, aku akan memotong dan meminta, "Bentar, sebelum kejadian itu, awalnya bagaimana?").',
  'Begitu ada kesempatan kecil yang muncul, aku sering melihat potensi besar yang belum disadari sama orang lain (misalnya, saat melewati lahan kosong di pojok jalan, mataku otomatis membayangkan lahan itu akan laris manis jika dijadikan tempat cuci motor).'
];

export const HOLDOUT_QUESTIONS: QuestionItem[] = holdoutSource.map((statementCasual, index) => {
  const base = CORE_QUESTIONS[(index * 7) % CORE_QUESTIONS.length];
  return {
    ...base,
    id: `holdout_${String(index + 1).padStart(3, '0')}`,
    kind: 'holdout',
    statementOriginal: statementCasual, 
    statementCasual,
    responseFocus: `holdout:${base.context}:${base.channel}:${base.element}:${index + 1}`,
    psychometrics: {
      ...base.psychometrics,
      discrimination: Math.min(0.95, base.psychometrics.discrimination + 0.03),
      socialDesirability: Math.max(0.15, base.psychometrics.socialDesirability - 0.04)
    }
  };
});
