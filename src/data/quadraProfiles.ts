import type { Quadra, QuadraProfile } from '../types/socionics';

export const QUADRA_PROFILES: Record<Quadra, QuadraProfile> = {
  Alpha: {
    quadra: 'Alpha',
    types: ['ILE', 'SEI', 'ESE', 'LII'],
    valuedElements: ['Ne', 'Ti', 'Fe', 'Si'],
    climate: 'Terbuka pada ide baru, ingin suasana cukup ringan, dan suka ketika obrolan bisa bermain tanpa kehilangan struktur.',
    socialMood: 'Hangat, penasaran, diskursif, dan cenderung mencari kenyamanan bersama setelah ide diuji.',
    strengths: ['membuka kemungkinan', 'merapikan konsep', 'menghidupkan suasana', 'menjaga pengalaman tetap nyaman'],
    cautions: ['dapat menghindari tekanan keras terlalu lama', 'bisa menyepelekan batas personal yang tidak diucapkan']
  },
  Beta: {
    quadra: 'Beta',
    types: ['EIE', 'LSI', 'SLE', 'IEI'],
    valuedElements: ['Ni', 'Fe', 'Se', 'Ti'],
    climate: 'Intens, terarah, peka pada momentum, dan lebih hidup ketika ada posisi, ritme emosi, serta struktur yang jelas.',
    socialMood: 'Dramatis secukupnya, berdaya dorong, loyal pada arah, dan tidak terlalu takut pada konfrontasi yang perlu.',
    strengths: ['membaca momentum', 'menggerakkan suasana', 'mengambil posisi', 'menjaga struktur'],
    cautions: ['dapat terasa terlalu intens', 'bisa menekan ritme tubuh atau kenyamanan kecil']
  },
  Gamma: {
    quadra: 'Gamma',
    types: ['SEE', 'ILI', 'LIE', 'ESI'],
    valuedElements: ['Se', 'Fi', 'Te', 'Ni'],
    climate: 'Pragmatis, selektif, melihat konsekuensi, dan menghargai hubungan yang jelas batas serta hasil yang nyata.',
    socialMood: 'Tegas, personal, realistis, dan sering lebih percaya bukti tindakan daripada suasana yang terlalu ramai.',
    strengths: ['mengambil langkah nyata', 'menjaga loyalitas personal', 'membaca hasil', 'memperkirakan konsekuensi'],
    cautions: ['bisa terlihat keras', 'kadang kurang sabar dengan permainan sosial yang terlalu ringan']
  },
  Delta: {
    quadra: 'Delta',
    types: ['IEE', 'SLI', 'LSE', 'EII'],
    valuedElements: ['Ne', 'Fi', 'Te', 'Si'],
    climate: 'Mencari ruang manusiawi untuk tumbuh, menjaga hubungan yang tulus, dan menyukai cara kerja yang praktis tanpa mengorbankan kenyamanan.',
    socialMood: 'Tenang, suportif, realistis, dan memberi ruang bagi alternatif tanpa memaksa semua orang tampil sama.',
    strengths: ['membuka peluang personal', 'membaca batas hubungan', 'meningkatkan kerja nyata', 'menjaga ritme hidup'],
    cautions: ['bisa menghindari ledakan konflik', 'kadang terlalu lama menunggu ruang yang terasa aman']
  }
};
