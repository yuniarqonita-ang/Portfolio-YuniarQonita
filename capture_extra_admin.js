import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, 'public', 'assets', '03_Proyek_Website_PPID_PKTJ');

const EXTRA_ADMIN = [
  { file: '33_Admin_Daftar_Permohonan_Informasi.jpg', url: 'https://ppid.pktj.ac.id/admin/permohonan', title: 'Data Permohonan Informasi Publik' },
  { file: '34_Admin_Pesan_Kontak.jpg', url: 'https://ppid.pktj.ac.id/admin/pesan-kontak', title: 'Kotak Masuk Pesan & Kontak' },
  { file: '35_Admin_Laporan_Bulanan.jpg', url: 'https://ppid.pktj.ac.id/admin/permohonan/report', title: 'Laporan Rekapitulasi Permohonan' },
  { file: '36_Admin_Kelola_Berita.jpg', url: 'https://ppid.pktj.ac.id/admin/berita', title: 'Manajemen Berita & Artikel' },
  { file: '37_Admin_Manajemen_User.jpg', url: 'https://ppid.pktj.ac.id/admin/user-management', title: 'Manajemen Hak Akses & User' },
  { file: '38_Admin_Kelola_Menu_Navigasi.jpg', url: 'https://ppid.pktj.ac.id/admin/menu', title: 'Kelola Menu Navigasi Portal' },
  { file: '39_Admin_Edit_Hero_Banner.jpg', url: 'https://ppid.pktj.ac.id/admin/dashboard/edit', title: 'Pengaturan Hero Banner & Beranda' },
];

async function captureExtraAdmin() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Logging in to capture extra admin modules...');
  await page.goto('https://ppid.pktj.ac.id/login', { waitUntil: 'networkidle2' });
  await page.type('input[name="email"]', 'admin@pktj.ac.id');
  await page.type('input[name="password"]', 'ppidpktj2026');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]'),
  ]);

  console.log('Logged in successfully. Now capturing modules...');

  for (const item of EXTRA_ADMIN) {
    const target = path.join(OUT_DIR, item.file);
    console.log(`Capturing: ${item.title} (${item.url}) -> ${item.file}`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 25000 });
      await new Promise((r) => setTimeout(r, 1200));
      await page.screenshot({ path: target, type: 'jpeg', quality: 92 });
      console.log(`  -> OK: ${item.file}`);
    } catch (e) {
      console.log(`  -> Fail: ${e.message}`);
    }
  }

  await browser.close();
  console.log('Finished capturing all extra admin pages!');
}

captureExtraAdmin();
