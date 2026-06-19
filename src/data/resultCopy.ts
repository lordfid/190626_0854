import type { ModelASlot } from '../types/socionics';

export const DISCLAIMER = 'Ini adalah interpretasi tipologi berbasis jawabanmu, bukan diagnosis klinis atau kebenaran final tentang dirimu.';

export const SLOT_RESULT_NOTES: Record<ModelASlot, string> = {
  base: 'Kemungkinan muncul sebagai pusat otomatis: cepat aktif, mudah menjadi cara utama membaca situasi.',
  creative: 'Kemungkinan muncul sebagai alat luwes: membantu tujuan lain tanpa harus dijadikan identitas.',
  role: 'Kemungkinan muncul sebagai wajah sosial: bisa dilakukan, tetapi lebih mudah terasa performatif.',
  vulnerable: 'Kemungkinan menjadi area rawan: tuntutan langsung dapat memicu tegang, malu, freeze, atau menghindar.',
  suggestive: 'Kemungkinan menjadi kebutuhan lega: dukungan dari orang lain di area ini terasa menurunkan beban.',
  mobilizing: 'Kemungkinan menjadi dorongan tumbuh: ingin berkembang dan ingin diakui, tetapi belum selalu stabil.',
  ignoring: 'Kemungkinan menjadi kemampuan yang dilewati: mampu dipakai, tetapi sering tidak dianggap penting.',
  demonstrative: 'Kemungkinan berjalan di latar: membantu tanpa banyak drama dan sering tidak terasa spesial.'
};

export const METHODOLOGY_COPY = {
  measured: 'Tes ini membaca pola jawabanmu melalui 8 unsur informasi Socionics dan 8 cara unsur itu biasanya muncul dalam Model A. Hasilnya bukan diagnosis, melainkan peta kecenderungan yang dibandingkan dengan 16 TIM.',
  top3: 'Top 3 membantu menjaga hasil tetap jujur ketika beberapa kandidat masih dekat. Manusia tidak selalu menjawab stabil di semua konteks.',
  confidence: 'Confidence menunjukkan seberapa rapi bukti internal dalam sesi ini: cakupan jawaban, konsistensi, jarak kandidat, dan bias respons. Confidence bukan angka akurasi ilmiah.',
  privacy: 'Jawaban diproses di perangkatmu dan disimpan lokal di browser. Aplikasi ini tidak membutuhkan login.'
};
