import type { QuestionItem } from '../types/questions';
import { CORE_QUESTIONS } from './coreQuestions';

const holdoutSource = [
  'Ketika suasana mendadak berubah, aku memperhatikan bagian yang tidak ikut dikatakan orang.',
  'Saat teman meminta saran, aku lebih percaya contoh nyata daripada kalimat yang terdengar indah.',
  'Jika ada konflik kecil, aku melihat batas mana yang harus dijaga agar tidak melebar.',
  'Ketika tugas terasa kabur, aku mencari pola urutan yang membuat langkah berikutnya masuk akal.',
  'Saat tubuh mulai lelah, aku sadar kualitas keputusan ikut turun dan perlu jeda.',
  'Ketika semua orang terlalu serius, aku menangkap cara kecil untuk mengendurkan ruangan.',
  'Jika aturan terasa saling tabrak, aku ingin menemukan garis yang membuat semuanya konsisten.',
  'Saat rencana terlihat tertutup, aku masih mencari pintu samping yang belum dicoba.',
  'Ketika seseorang menekan terlalu cepat, aku memperhatikan apakah tekanannya perlu dilawan atau dilewati.',
  'Saat hubungan terasa berubah, aku membaca jarak baru sebelum banyak bicara.',
  'Jika ada banyak pilihan, aku melihat mana yang punya hasil paling bisa dipakai.',
  'Ketika keputusan harus menunggu, aku memperhatikan apakah momen itu memang belum matang.',
  'Saat berada di tempat asing, detail kecil seperti cahaya, suara, dan posisi duduk cepat memengaruhiku.',
  'Ketika kelompok tegang, aku sadar nada suara bisa mengubah arah pembicaraan.',
  'Jika seseorang memakai istilah longgar, aku ingin tahu batas maknanya dulu.',
  'Saat keadaan terlalu sempit, aku mencari cara baru agar orang tidak merasa terkunci.',
  'Ketika diminta mengambil alih, aku memperhatikan siapa benar-benar punya ruang untuk bergerak.',
  'Saat orang memberiku bantuan praktis, aku lebih mudah melanjutkan daripada menerima motivasi panjang.',
  'Jika kedekatan terasa dipaksa, aku perlu mundur sedikit untuk menilai ulang.',
  'Ketika masa depan terasa ramai, aku mencari satu benang arah yang paling mungkin berkembang.',
  'Saat rutinitas berantakan, aku mulai dari hal yang membuat tubuh kembali stabil.',
  'Ketika suasana datar, aku bisa mengubah ritme kecil agar percakapan hidup lagi.',
  'Jika sebuah sistem terasa ganjil, aku sulit tenang sebelum tahu bagian yang tidak cocok.',
  'Saat orang menutup jalan terlalu cepat, aku melihat kemungkinan yang masih belum diberi nama.',
  'Ketika batasku diuji, aku lebih suka posisi jelas daripada sindiran panjang.',
  'Saat seseorang tulus, aku sering merasakannya dari cara ia menjaga hal kecil.',
  'Jika banyak cara ditawarkan, aku cepat mencari mana yang paling hemat tenaga.',
  'Ketika semua orang ingin cepat, aku memperhatikan apakah waktunya memang tepat.',
  'Saat hari terlalu padat, aku butuh mengembalikan ritme sebelum memaksa diri.',
  'Ketika emosi orang naik, aku menangkap perubahan atmosfer sebelum topiknya jelas.',
  'Jika penjelasan terlalu meloncat, aku ingin mengurutkan bagian-bagiannya dahulu.',
  'Saat kesempatan kecil muncul, aku sering melihat potensi yang belum disadari orang.'
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
