import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, 'public', 'assets', '03_Proyek_Website_PPID_PKTJ');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const PAGES = [
  { file: '01_Beranda_Portal_PPID_PKTJ.jpg', url: 'https://ppid.pktj.ac.id', title: '01. Beranda Portal PPID' },
  { file: '02_Profil_PPID.jpg', url: 'https://ppid.pktj.ac.id/profil-ppid.html', title: '02. Profil PPID PKTJ' },
  { file: '03_Visi_dan_Misi.jpg', url: 'https://ppid.pktj.ac.id/profil-visi-misi.html', title: '03. Visi dan Misi' },
  { file: '04_Struktur_Organisasi.jpg', url: 'https://ppid.pktj.ac.id/profil-struktur-organisasi.html', title: '04. Struktur Organisasi' },
  { file: '05_Tugas_dan_Tanggung_Jawab.jpg', url: 'https://ppid.pktj.ac.id/profil-tugas-tanggung-jawab.html', title: '05. Tugas dan Tanggung Jawab' },
  { file: '06_Regulasi_Acuan_PPID.jpg', url: 'https://ppid.pktj.ac.id/profil-regulasi.html', title: '06. Regulasi Acuan PPID' },
  { file: '07_Kontak_PPID.jpg', url: 'https://ppid.pktj.ac.id/profil-kontak.html', title: '07. Kontak Resmi PPID' },
  { file: '08_Layanan_Informasi_Menu.jpg', url: 'https://ppid.pktj.ac.id/halaman/layanan-informasi-menu', title: '08. Menu Layanan Informasi' },
  { file: '09_Maklumat_Pelayanan.jpg', url: 'https://ppid.pktj.ac.id/layanan-informasi/maklumat', title: '09. Maklumat Pelayanan' },
  { file: '10_Daftar_Informasi_Publik.jpg', url: 'https://ppid.pktj.ac.id/layanan-informasi/daftar', title: '10. Daftar Informasi Publik' },
  { file: '11_Laporan_Pelayanan_Informasi.jpg', url: 'https://ppid.pktj.ac.id/layanan-informasi/laporan', title: '11. Laporan Pelayanan Informasi' },
  { file: '12_Laporan_Akses_Informasi.jpg', url: 'https://ppid.pktj.ac.id/layanan-informasi/laporan-akses', title: '12. Laporan Akses Layanan' },
  { file: '13_Laporan_Survey_Kepuasan.jpg', url: 'https://ppid.pktj.ac.id/layanan-informasi/laporan-survey', title: '13. Laporan Survey Kepuasan' },
  { file: '14_Informasi_Berkala.jpg', url: 'https://ppid.pktj.ac.id/informasi-publik/berkala', title: '14. Informasi Publik Berkala' },
  { file: '15_Informasi_Serta_Merta.jpg', url: 'https://ppid.pktj.ac.id/informasi-publik/serta-merta', title: '15. Informasi Serta Merta' },
  { file: '16_Informasi_Setiap_Saat.jpg', url: 'https://ppid.pktj.ac.id/informasi-publik/setiap-saat', title: '16. Informasi Setiap Saat' },
  { file: '17_Informasi_Dikecualikan.jpg', url: 'https://ppid.pktj.ac.id/informasi-publik/dikecualikan', title: '17. Informasi Dikecualikan' },
  { file: '18_Permohonan_Informasi_Online.jpg', url: 'https://ppid.pktj.ac.id/permohonan-informasi', title: '18. Form Permohonan Informasi' },
  { file: '19_SOP_Permintaan_Informasi.jpg', url: 'https://ppid.pktj.ac.id/prosedur/sop-permintaan', title: '19. SOP Permintaan Informasi' },
  { file: '20_SOP_Pengajuan_Keberatan.jpg', url: 'https://ppid.pktj.ac.id/prosedur/sop-keberatan', title: '20. SOP Pengajuan Keberatan' },
  { file: '21_SOP_Penyelesaian_Sengketa.jpg', url: 'https://ppid.pktj.ac.id/prosedur/sop-sengketa', title: '21. SOP Penyelesaian Sengketa' },
  { file: '22_FAQ_Pusat_Bantuan.jpg', url: 'https://ppid.pktj.ac.id/faq', title: '22. FAQ & Pusat Bantuan' },
  { file: '23_Berita_Sosialisasi_PPID.jpg', url: 'https://ppid.pktj.ac.id/berita', title: '23. Portal Berita PPID' },
  { file: '24_Formulir_Cetak_Permohonan.jpg', url: 'https://ppid.pktj.ac.id/dokumen/formulir-permohonan-cetak', title: '24. Formulir Cetak Permohonan' },
];

async function run() {
  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const captured = [];

  for (let i = 0; i < PAGES.length; i++) {
    const item = PAGES[i];
    const targetPath = path.join(OUT_DIR, item.file);
    console.log(`[${i + 1}/${PAGES.length}] Capturing ${item.title} (${item.url})...`);

    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Small pause for any CSS animations to settle
      await new Promise((r) => setTimeout(r, 1200));

      await page.screenshot({
        path: targetPath,
        type: 'jpeg',
        quality: 90,
        fullPage: false,
      });

      console.log(`  -> Saved: ${item.file}`);
      captured.push(targetPath);
    } catch (err) {
      console.error(`  -> Failed ${item.url}:`, err.message);
    }
  }

  await browser.close();
  console.log(`\nSuccessfully captured ${captured.length} live pages!`);
}

run();
