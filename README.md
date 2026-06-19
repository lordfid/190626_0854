# Socionics Dalam Diriku

Aplikasi web statis untuk eksplorasi Socionics berbasis Model A. Aplikasi ini berjalan di browser, menyimpan sesi di `localStorage`, tidak memakai login, tidak memakai database, dan tidak mengirim jawaban ke server.

## Cara menjalankan

```bash
npm install
npm run dev
npm run check
npm run audit
npm run build
```

## Fitur utama

- Mode Ringkas, Standar, dan Mendalam.
- Bank item berbasis 8 unsur informasi × 8 kanal pengalaman.
- Perhitungan 16 TIM, ranking unsur informasi, peta 8 posisi Model A, pola nilai, catatan bias, kontradiksi, coverage, dan confidence.
- Autosave lokal, restore session, skip, kembali, reset.
- Kartu hasil bergaya identitas dengan nickname, foto lokal, tema, orientasi, unduh PNG, dan bagikan bila browser mendukung.

## Catatan metodologis

Hasil adalah interpretasi tipologi berbasis jawaban, bukan diagnosis klinis, bukan kebenaran final, dan bukan angka akurasi ilmiah. Confidence adalah kualitas bukti internal sesi: cakupan, konsistensi, jarak kandidat, bias respons, dan dukungan holdout.

## Deployment Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20 atau 22

File `public/_redirects` sudah tersedia untuk SPA refresh.
