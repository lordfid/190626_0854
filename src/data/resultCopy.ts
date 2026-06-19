import type { ModelASlot } from '../types/socionics';

export const DISCLAIMER = 'Ini cuma hasil pemetaan dari pola jawabanmu, bukan vonis psikolog apalagi patokan mutlak soal siapa dirimu sebenarnya (ibarat membaca ulasan karakter di artikel, silakan ambil yang pas dan jadikan bahan evaluasi santai saja).';

export const SLOT_RESULT_NOTES: Record<ModelASlot, string> = {
  base: 'Berjalan layaknya mode autopilot: paling cepat menyala, tidak butuh usaha, dan selalu jadi senjata utama saat kamu menghadapi situasi apa pun (misalnya, ibarat bernapas, kamu memproses informasi di area ini secara otomatis tanpa perlu disuruh).',
  creative: 'Berfungsi layaknya kotak perkakas serbaguna: kamu luwes memakainya untuk memecahkan masalah, tapi tidak menjadikannya sebagai harga mati atau identitas diri (misalnya, kamu pintar menawar barang di pasar untuk berhemat, tapi tidak lantas merasa harus berprofesi jadi pedagang).',
  role: 'Muncul sebagai topeng sosialmu: kamu bisa pura-pura memakainya biar terlihat wajar di mata orang, walau rasanya melelahkan seperti sedang berakting (misalnya, memaksakan diri tersenyum ramah dan berbasa-basi saat kumpul keluarga besar, padahal aslinya lelah dan ingin menepi).',
  vulnerable: 'Menjadi titik buta atau area rawanmu: kalau kamu didesak memakai cara ini, otakmu langsung nge-blank, cemas, atau mencari alasan untuk kabur (misalnya, mendadak ditodong memimpin rapat dadakan atau disuruh merapikan dokumen dengan aturan birokrasi yang rumit tanpa persiapan).',
  suggestive: 'Menjadi area di mana kamu butuh diselamatkan: kamu sangat lega dan diam-diam bersyukur kalau ada orang lain yang mau mengambil alih urusan ini (misalnya, kamu yang kebingungan merakit perabot rumah lalu ada teman yang datang memandu dan membacakan buku petunjuknya sampai selesai).',
  mobilizing: 'Menjadi area pamer terselubung: kamu sebenarnya belum selalu stabil di sini, tapi punya dorongan kuat untuk berkembang dan diakui (misalnya, kamu baru belajar meracik musik atau menulis cerita, lalu diam-diam berharap ada teman yang mengapresiasi karyamu walau kamu masih ragu-ragu menunjukkannya).',
  ignoring: 'Berjalan sebagai fitur yang sengaja kamu senyapkan (mute): kamu sebenarnya sangat mampu melakukannya, tapi merasa itu buang-buang energi dan tidak penting (misalnya, kamu paham betul cara membalas sindiran atau berdebat panjang, tapi memilih diam karena malas memperpanjang urusan).',
  demonstrative: 'Berjalan otomatis di balik layar: kamu diam-diam sangat ahli di area ini untuk mendukung keputusanmu, tapi tidak pernah merasa perlu pamer (misalnya, tanpa banyak bicara kamu selalu memastikan semua pintu terkunci dan barang bawaan teman-teman aman sebelum meninggalkan ruangan).'
};

export const METHODOLOGY_COPY = {
  measured: 'Tes ini membedah pola jawabanmu lewat 8 lensa informasi Socionics dan bagaimana mereka bekerja di otakmu (Model A). Hasilnya berupa peta kecenderungan karaktermu yang dicocokkan dengan 16 tipe, murni sebagai cermin evaluasi diri.',
  top3: 'Kenapa ada opsi Top 3? Biar hasilnya tetap realistis. Kadang skor antar tipe beda tipis, dan kita sadar kalau mood atau kondisi pikiran saat mengisi tes bisa berubah (misalnya, jawabanmu saat sedang santai bisa agak bergeser dibanding saat pikiranmu sedang tegang mengurus pendaftaran kerja atau tugas).',
  confidence: 'Angka Confidence cuma buat melihat seberapa rapi dan konsisten kamu menjawab selama sesi ini (apakah jawabanmu banyak yang tumpang tindih atau tidak). Ini murni alat ukur internal sistem kami, bukan persentase tingkat keakuratan mutlak secara ilmiah.',
  privacy: 'Semua jawabanmu diproses langsung di perangkatmu sendiri dan disembunyikan rapat di dalam memori peramban (browser). Kami tidak mengintip, dan kamu juga tidak perlu repot-repot membuat akun atau masuk (login).'
};
