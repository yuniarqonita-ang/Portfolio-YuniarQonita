import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, 'public', 'assets', '01_CV_Sertifikat_Ijazah_KTP');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const htmlEnglish = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4;
    margin: 10mm 15mm 10mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    color: #111;
    line-height: 1.28;
    font-size: 9.5pt;
    background: #fff;
  }
  .header {
    text-align: center;
    margin-bottom: 6pt;
    border-bottom: 1.2pt solid #800000;
    padding-bottom: 4pt;
  }
  .name {
    font-size: 17pt;
    font-weight: bold;
    letter-spacing: 1.2pt;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 2pt;
  }
  .contact-info {
    font-size: 9pt;
    color: #333;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: bold;
    text-transform: uppercase;
    color: #800000;
    border-bottom: 0.8pt solid #800000;
    margin-top: 6pt;
    margin-bottom: 3pt;
    padding-bottom: 1pt;
    letter-spacing: 0.4pt;
  }
  .item {
    margin-bottom: 4.5pt;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 9.5pt;
  }
  .item-sub {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 9pt;
    color: #222;
    margin-bottom: 1pt;
  }
  ul {
    margin-left: 13pt;
    margin-top: 1pt;
  }
  li {
    margin-bottom: 1pt;
    text-align: justify;
    font-size: 9pt;
  }
  .skills-category {
    margin-bottom: 2.5pt;
    font-size: 9pt;
    text-align: justify;
  }
  .skills-category strong {
    font-size: 9pt;
  }
  .page-break {
    page-break-before: always;
  }
</style>
</head>
<body>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="header">
    <div class="name">YUNIAR QONITA</div>
    <div class="contact-info">
      Tegal, Central Java, Indonesia &nbsp;|&nbsp; +62 895-2673-4638 &nbsp;|&nbsp; yuniarqonita@gmail.com
    </div>
  </div>

  <div class="section-title">EDUCATION</div>

  <div class="item">
    <div class="item-header">
      <span>Bachelor of Mathematics Education (S1)</span>
      <span>Jul 2021 – Aug 2025</span>
    </div>
    <div class="item-sub">
      <span>Universitas Pancasakti Tegal — Tegal, Central Java</span>
      <span>GPA: 3.64 / 4.00</span>
    </div>
    <ul>
      <li>Completed comprehensive academic curriculum with focus on analytical problem-solving and educational methodology.</li>
      <li>Teaching Practicum (PLP) Score: <strong>90.83 / Grade A</strong> (336 practicum hours).</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Senior High School — Science & Mathematics (IPA)</span>
      <span>2018 – 2021</span>
    </div>
    <div class="item-sub">
      <span>SMA Negeri 5 Kota Tegal — Tegal, Central Java</span>
      <span>Final Score: 80.00</span>
    </div>
  </div>

  <div class="section-title">PROFESSIONAL EXPERIENCE</div>

  <div class="item">
    <div class="item-header">
      <span>PPID Content & Portal Officer (Contract)</span>
      <span>Jul 2026 – Present</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) — Ministry of Transportation RI</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Managed and maintained all layout modules and digital information content on the official PKTJ PPID web portal.</li>
      <li>Reviewed, edited, and sanitized public documents in strict compliance with public information disclosure regulations.</li>
      <li>Documented institutional events and official activities using professional photography equipment.</li>
      <li>Designed official publication media assets (banners, event posters, social media feeds, frame soumed) via Canva & CorelDRAW along with official narrative captions.</li>
      <li>Drafted, verified, and published official activity news articles on the institution's main portal.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>IT Systems & Technology Governance Intern</span>
      <span>Nov 2025 – May 2026</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) — Ministry of Transportation RI</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Diagnosed and resolved OS-level technical issues; delivered responsive IT technical support to internal academic and administrative personnel.</li>
      <li>Engineered and implemented the PPID PKTJ Back Office web portal application from design to production deployment.</li>
      <li>Awarded Graduate Internship Distinction: <strong>Predikat SANGAT BAIK (Very Good)</strong> — Certificate No. MN.033.027419.02.2025.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Teaching Practicum — School Field Introduction Program (PLP)</span>
      <span>Oct – Dec 2024</span>
    </div>
    <div class="item-sub">
      <span>SMP Negeri 3 Brebes</span>
      <span>Brebes, Central Java</span>
    </div>
    <ul>
      <li>Completed a 336-hour teaching practicum encompassing lesson planning, classroom instruction, reflection, and reporting.</li>
      <li>Earned a final practicum evaluation score of <strong>90.83 (Grade A)</strong> across all pedagogical competencies.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Field Survey Officer — Land Value Zone (ZNT) & PTSL</span>
      <span>Aug – Dec 2023</span>
    </div>
    <div class="item-sub">
      <span>Kantor Pertanahan (ATR / BPN) Kabupaten Brebes</span>
      <span>Brebes, Central Java</span>
    </div>
    <ul>
      <li>Conducted field surveys for Land Value Zone (ZNT) data collection and geospatial mapping across Brebes Regency.</li>
      <li>Processed land administrative archives and supported the PTSL Land Registration Program including land book printing.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Campus Teaching Volunteer — Kampus Mengajar (MBKM Program)</span>
      <span>Feb – Jul 2023</span>
    </div>
    <div class="item-sub">
      <span>SD Negeri Margadana 01 — Kemendikbudristek RI</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Spearheaded numeracy and literacy reinforcement programs for elementary students; awarded MBKM scholarship stipend.</li>
      <li>Developed interactive instructional materials, structured worksheets, and managed institutional social media communications.</li>
    </ul>
  </div>

  <div class="section-title">ACADEMIC & EXCHANGE EXPERIENCE</div>

  <div class="item">
    <div class="item-header">
      <span>National Student Exchange — Pertukaran Mahasiswa Merdeka (PMM) Batch 4</span>
      <span>Jan – Jun 2024</span>
    </div>
    <div class="item-sub">
      <span>Universitas Syiah Kuala — Kemendikbudristek RI</span>
      <span>Banda Aceh, Aceh</span>
    </div>
    <ul>
      <li>Selected through competitive national merit selection for cross-island academic student mobility program.</li>
      <li>Enriched academic capabilities and cross-cultural adaptability; engaged in inter-regional research and Nusantara Module activities.</li>
    </ul>
  </div>

  <!-- ==================== PAGE BREAK ==================== -->
  <div class="page-break"></div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="section-title" style="margin-top: 0;">LEADERSHIP & ORGANIZATIONAL EXPERIENCE</div>

  <div class="item">
    <div class="item-header">
      <span>Advisory Board Member (Dewan Pertimbangan Organisasi - DPO)</span>
      <span>2024 – 2025</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Mentored executive committees on strategic leadership, program execution, and organizational compliance.</li>
      <li>Audited administrative reports, organizational documentation, and guided succession planning.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Head of Islamic Affairs & Outreach Department</span>
      <span>2023 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Directed all departmental initiatives with full accountability over annual strategic planning, budget management, and execution.</li>
      <li>Conferred with the <strong>Award of Excellence</strong> for exemplary leadership performance and successful program deliveries.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Department Secretary</span>
      <span>2022 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Managed centralized secretariat operations, formal correspondence, archival filings, and financial accountability reports.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Sponsorship Division Coordinator — Pancasakti Mathematics Competition (PMC) XIV</span>
      <span>2024</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Led sponsorship acquisition campaigns, pitch proposals, and partnership contracts with corporate and institutional sponsors.</li>
      <li>Certificate of Appointment No. 012/PMC-XIV/HMPS.PMAT-JL/2024.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Event Committee Member — Pancasakti Mathematics Competition (PMC) XIII</span>
      <span>2023</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Coordinated logistical execution and participant registration for regional mathematics competition — Certificate No. 002/PMC.XIII/HMPS.PMAT/V/2023.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Education & Technology Department Member</span>
      <span>2022 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Central Java</span>
    </div>
    <ul>
      <li>Contributed to academic workshop programs and digital media content creation for mathematics student community.</li>
    </ul>
  </div>

  <div class="section-title">CERTIFICATIONS & PROFESSIONAL TRAINING</div>

  <div class="item">
    <div class="item-header">
      <span>Junior Graphic Designer — National Competency Certificate (BNSP)</span>
      <span>Oct – Nov 2025</span>
    </div>
    <div class="item-sub">
      <span>BNSP & LSP BBPVP Semarang, Ministry of Manpower (Kemnaker RI)</span>
      <span>Valid: 2025 – 2028</span>
    </div>
    <ul>
      <li>Certificate No. 58190 2166 0039333 2025 | Registration No. DKV 712 00031 2025.</li>
      <li>Competent across 7 essential units: Design Brief, Design Principles, Typography, Color Harmony, Vector & Raster Software, Output Production.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Vocational Training Certificate — Junior Graphic Designer (260 Hours)</span>
      <span>Oct – Nov 2025</span>
    </div>
    <div class="item-sub">
      <span>BBPVP Semarang, Ministry of Manpower (Kemnaker RI)</span>
      <span>Certificate No. 2601066C25FF15</span>
    </div>
    <ul>
      <li>Completed 260 hours of intensive practical studio training; passed all examination units with distinction.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Graduate Internship Completion Certificate — IT Systems Governance</span>
      <span>May 2026</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) / Kemnaker RI</span>
      <span>Certificate No. MN.033.027419.02.2025</span>
    </div>
    <ul>
      <li>Completed official Ministry internship program with predicate <strong>SANGAT BAIK (Very Good)</strong>.</li>
    </ul>
  </div>

  <div class="section-title">SKILLS & COMPETENCIES</div>

  <div class="skills-category">
    <strong>Design & Creative:</strong> Canva, CorelDRAW, Adobe Photoshop, Graphic Design, Brand Identity & Logo Design, Packaging Design, Social Media Feeds, Banner & Poster Design, Merchandise Design.
  </div>
  <div class="skills-category">
    <strong>IT & Systems Governance:</strong> Web Back Office Development, IT Troubleshooting, OS Diagnostics & Maintenance, Technical Support, Portal Content Management System (CMS).
  </div>
  <div class="skills-category">
    <strong>Data Processing & Productivity:</strong> Microsoft Office (Word, Excel, PowerPoint), Google Workspace, SmartPLS, ANATES, Statistical Data Analysis, Field Survey Methodologies.
  </div>
  <div class="skills-category">
    <strong>Leadership & Soft Skills:</strong> Strategic Planning, Organization Management, Effective Communication, Problem Solving, Time Management, Team Collaboration & Mentoring.
  </div>
  <div class="skills-category">
    <strong>Languages:</strong> Indonesian — Native / Fluent (10/10).
  </div>

</body>
</html>
`;

const htmlIndonesian = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4;
    margin: 10mm 15mm 10mm 15mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    color: #111;
    line-height: 1.28;
    font-size: 9.5pt;
    background: #fff;
  }
  .header {
    text-align: center;
    margin-bottom: 6pt;
    border-bottom: 1.2pt solid #800000;
    padding-bottom: 4pt;
  }
  .name {
    font-size: 17pt;
    font-weight: bold;
    letter-spacing: 1.2pt;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 2pt;
  }
  .contact-info {
    font-size: 9pt;
    color: #333;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: bold;
    text-transform: uppercase;
    color: #800000;
    border-bottom: 0.8pt solid #800000;
    margin-top: 6pt;
    margin-bottom: 3pt;
    padding-bottom: 1pt;
    letter-spacing: 0.4pt;
  }
  .item {
    margin-bottom: 4.5pt;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 9.5pt;
  }
  .item-sub {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 9pt;
    color: #222;
    margin-bottom: 1pt;
  }
  ul {
    margin-left: 13pt;
    margin-top: 1pt;
  }
  li {
    margin-bottom: 1pt;
    text-align: justify;
    font-size: 9pt;
  }
  .skills-category {
    margin-bottom: 2.5pt;
    font-size: 9pt;
    text-align: justify;
  }
  .skills-category strong {
    font-size: 9pt;
  }
  .page-break {
    page-break-before: always;
  }
</style>
</head>
<body>

  <!-- ==================== HALAMAN 1 ==================== -->
  <div class="header">
    <div class="name">YUNIAR QONITA</div>
    <div class="contact-info">
      Tegal, Jawa Tengah, Indonesia &nbsp;|&nbsp; +62 895-2673-4638 &nbsp;|&nbsp; yuniarqonita@gmail.com
    </div>
  </div>

  <div class="section-title">PENDIDIKAN FORMAL</div>

  <div class="item">
    <div class="item-header">
      <span>Sarjana Pendidikan Matematika (S1)</span>
      <span>Jul 2021 – Agu 2025</span>
    </div>
    <div class="item-sub">
      <span>Universitas Pancasakti Tegal — Tegal, Jawa Tengah</span>
      <span>IPK: 3.64 / 4.00</span>
    </div>
    <ul>
      <li>Menyelesaikan studi kesarjanaan dengan fokus pada penalaran analitis, statistika, dan metodologi instruksional.</li>
      <li>Nilai Praktik Pengenalan Lapangan Persekolahan (PLP): <strong>90.83 / Nilai A</strong> (336 jam praktik).</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Sekolah Menengah Atas — Matematika dan Ilmu Pengetahuan Alam (MIPA)</span>
      <span>2018 – 2021</span>
    </div>
    <div class="item-sub">
      <span>SMA Negeri 5 Kota Tegal — Tegal, Jawa Tengah</span>
      <span>Nilai Rata-rata Ujian: 80.00</span>
    </div>
  </div>

  <div class="section-title">PENGALAMAN KERJA & PROFESIONAL</div>

  <div class="item">
    <div class="item-header">
      <span>Pelaksana PPID (Kontrak) — Pengelola Konten & Portal</span>
      <span>Jul 2026 – Sekarang</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) — Kementerian Perhubungan RI</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mengelola dan memperbarui tata letak serta konten informasi pada web portal resmi PPID PKTJ secara berkala.</li>
      <li>Melakukan penyuntingan dan sanitasi dokumen publik sesuai regulasi keterbukaan informasi publik (UU KIP).</li>
      <li>Mendokumentasikan kegiatan instansi menggunakan peralatan kamera dan fotografi profesional.</li>
      <li>Merancang aset media digital (banner, poster, ucapan hari besar, frame soumed) via Canva & CorelDRAW beserta narasi rilis resminya.</li>
      <li>Menyusun, memverifikasi, dan menerbitkan artikel berita publikasi pada situs web utama instansi.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Staf Tata Kelola Sistem & TI (Magang Lulusan Perguruan Tinggi)</span>
      <span>Nov 2025 – Mei 2026</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) — Kementerian Perhubungan RI</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mendiagnosis dan menyelesaikan permasalahan teknis OS serta memberikan dukungan teknis IT bagi pengguna di lingkungan institusi.</li>
      <li>Merancang dan mengembangkan aplikasi web portal Back Office PPID PKTJ secara menyeluruh (end-to-end).</li>
      <li>Lulus program pemagangan dengan predikat <strong>SANGAT BAIK</strong> — Sertifikat No. MN.033.027419.02.2025.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Praktik Pengalaman Lapangan — Pengenalan Lapangan Persekolahan (PLP)</span>
      <span>Okt – Des 2024</span>
    </div>
    <div class="item-sub">
      <span>SMP Negeri 3 Brebes</span>
      <span>Brebes, Jawa Tengah</span>
    </div>
    <ul>
      <li>Menyelesaikan 336 jam praktik keguruan terstruktur mencakup penyusunan RPP/Modul Ajar, pelaksanaan pembelajaran di kelas, refleksi, dan laporan akhir.</li>
      <li>Meraih nilai evaluasi akhir praktik sebesar <strong>90.83 (Nilai A)</strong> pada seluruh kompetensi pedagogik dan profesional.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Petugas Survei Lapangan — Zona Nilai Tanah (ZNT) & PTSL</span>
      <span>Agu – Des 2023</span>
    </div>
    <div class="item-sub">
      <span>Kantor Pertanahan (ATR / BPN) Kabupaten Brebes</span>
      <span>Brebes, Jawa Tengah</span>
    </div>
    <ul>
      <li>Melaksanakan survei Zona Nilai Tanah (ZNT) dan pengumpulan data geospasial pertanahan secara sistematis di wilayah Kab. Brebes.</li>
      <li>Mengolah data administrasi pertanahan dan mendukung Program Pendaftaran Tanah Sistematis Lengkap (PTSL) termasuk pencetakan buku tanah.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Relawan Pengajar Kampus Mengajar (Program MBKM)</span>
      <span>Feb – Jul 2023</span>
    </div>
    <div class="item-sub">
      <span>SD Negeri Margadana 01 — Kemendikbudristek RI</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mendampingi peningkatan literasi dan numerasi siswa sekolah dasar; menerima apresiasi dan insentif resmi program MBKM Kemendikbudristek.</li>
      <li>Merancang bahan ajar interaktif, lembar kerja terstruktur, serta mengelola dokumentasi media sosial sekolah dan komunikasi orang tua.</li>
    </ul>
  </div>

  <div class="section-title">PENGALAMAN AKADEMIK & PERTUKARAN</div>

  <div class="item">
    <div class="item-header">
      <span>Pertukaran Mahasiswa Merdeka (PMM) Batch 4</span>
      <span>Jan – Jun 2024</span>
    </div>
    <div class="item-sub">
      <span>Universitas Syiah Kuala — Kemendikbudristek RI</span>
      <span>Banda Aceh, Aceh</span>
    </div>
    <ul>
      <li>Lolos seleksi nasional program mobilitas mahasiswa lintas pulau untuk pengembangan kompetensi akademik dan wawasan kebhinekaan.</li>
      <li>Mengikuti perkuliahan akademik lintas universitas, program Modul Nusantara, serta kolaborasi riset dan pengabdian masyarakat.</li>
    </ul>
  </div>

  <!-- ==================== PEMBATAS HALAMAN ==================== -->
  <div class="page-break"></div>

  <!-- ==================== HALAMAN 2 ==================== -->
  <div class="section-title" style="margin-top: 0;">PENGALAMAN KEPEMIMPINAN & ORGANISASI</div>

  <div class="item">
    <div class="item-header">
      <span>Dewan Pertimbangan Organisasi (DPO)</span>
      <span>2024 – 2025</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mendampingi dan memberikan masukan strategis dalam pelaksanaan program kerja serta memastikan tertib administrasi dan suksesi kepengurusan organisasi.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Ketua Departemen Syiar & Kemuslimahan</span>
      <span>2023 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Memimpin pelaksanaan program kerja departemen dengan tanggung jawab penuh atas perencanaan strategis, penyusunan anggaran, dan evaluasi berkala.</li>
      <li>Dianugerahi penghargaan <strong>Award of Excellence</strong> atas kepemimpinan dan kinerja program terbaik di tingkat universitas.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Sekretaris Departemen Kemuslimahan</span>
      <span>2022 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mengelola administrasi persuratan resmi, pengarsipan berkas, serta menyusun laporan pertanggungjawaban kegiatan dan keuangan.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Koordinator Divisi Sponsor — Pancasakti Mathematics Competition (PMC) XIV</span>
      <span>2024</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Memimpin penggalangan dana dan kerja sama sponsor dengan instansi eksternal — SK No. 012/PMC-XIV/HMPS.PMAT-JL/2024.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Panitia Pelaksana — Pancasakti Mathematics Competition (PMC) XIII</span>
      <span>2023</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mengkoordinasikan kebutuhan teknis acara dan registrasi peserta kompetisi matematika tingkat regional — Sertifikat No. 002/PMC.XIII/HMPS.PMAT/V/2023.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Anggota Departemen Pendidikan & IPTEK</span>
      <span>2022 – 2024</span>
    </div>
    <div class="item-sub">
      <span>Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Matematika</span>
      <span>Tegal, Jawa Tengah</span>
    </div>
    <ul>
      <li>Mendukung pelaksanaan workshop akademik, pelatihan teknologi, dan publikasi media edukatif mahasiswa.</li>
    </ul>
  </div>

  <div class="section-title">SERTIFIKASI & PELATIHAN PROFESIONAL</div>

  <div class="item">
    <div class="item-header">
      <span>Sertifikat Kompetensi Kerja BNSP — Desainer Grafis Muda</span>
      <span>Okt – Nov 2025</span>
    </div>
    <div class="item-sub">
      <span>BNSP & LSP BBPVP Semarang, Kementerian Ketenagakerjaan RI</span>
      <span>Masa Berlaku: 2025 – 2028</span>
    </div>
    <ul>
      <li>Sertifikat No. 58190 2166 0039333 2025 | No. Reg. DKV 712 00031 2025.</li>
      <li>Dinyatakan KOMPETEN pada seluruh 7 unit kompetensi: Prinsip Dasar Desain, Prinsip Komunikasi, Brief Desain, Tipografi, Warna, Pengoperasian Perangkat Lunak, dan Karya Desain.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Sertifikat Pelatihan Vokasi — Desainer Grafis Muda (260 Jam Pelatihan)</span>
      <span>Okt – Nov 2025</span>
    </div>
    <div class="item-sub">
      <span>BBPVP Semarang, Kementerian Ketenagakerjaan RI</span>
      <span>Sertifikat No. 2601066C25FF15</span>
    </div>
    <ul>
      <li>Menyelesaikan 260 jam pelatihan praktik intensif di studio desain grafis dan lulus dengan predikat memuaskan.</li>
    </ul>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Sertifikat Pemagangan Lulusan Perguruan Tinggi — Tata Kelola Sistem & TI</span>
      <span>Mei 2026</span>
    </div>
    <div class="item-sub">
      <span>Politeknik Keselamatan Transportasi Jalan (PKTJ) / Kemnaker RI</span>
      <span>Sertifikat No. MN.033.027419.02.2025</span>
    </div>
    <ul>
      <li>Menyelesaikan program pemagangan resmi instansi pemerintah dengan predikat <strong>SANGAT BAIK</strong>.</li>
    </ul>
  </div>

  <div class="section-title">KEAHLIAN & KOMPETENSI</div>

  <div class="skills-category">
    <strong>Desain & Kreatif:</strong> Canva, CorelDRAW, Adobe Photoshop, Graphic Design, Desain Logo & Brand Identity, Desain Kemasan Produk, Feed Media Sosial, Desain Banner & Poster, Desain Merchandise.
  </div>
  <div class="skills-category">
    <strong>Tata Kelola TI & Sistem:</strong> Pengembangan Web Back Office, IT Troubleshooting, Diagnosis & Pemeliharaan OS, Technical Support, Pengelolaan CMS Portal Web.
  </div>
  <div class="skills-category">
    <strong>Pengolahan Data & Produktivitas:</strong> Microsoft Office (Word, Excel, PowerPoint), Google Workspace, SmartPLS, ANATES, Analisis Data Statistik, Metodologi Survei Lapangan.
  </div>
  <div class="skills-category">
    <strong>Kepemimpinan & Soft Skills:</strong> Perencanaan Strategis, Manajemen Organisasi, Komunikasi Efektif, Problem Solving, Manajemen Waktu, Kolaborasi Tim & Mentoring.
  </div>
  <div class="skills-category">
    <strong>Kemampuan Bahasa:</strong> Bahasa Indonesia (Penutur Asli / Lancar - 10/10).
  </div>

</body>
</html>
`;

async function generatePDFs() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Generate English PDF
  console.log('Rendering English CV...');
  await page.setContent(htmlEnglish, { waitUntil: 'domcontentloaded' });
  const enPdfPath = path.join(OUT_DIR, 'CV_Yuniar_Qonita_EN.pdf');
  await page.pdf({
    path: enPdfPath,
    format: 'A4',
    printBackground: true,
  });
  console.log(`  -> Saved: ${enPdfPath}`);

  // Generate Indonesian PDF
  console.log('Rendering Indonesian CV...');
  await page.setContent(htmlIndonesian, { waitUntil: 'domcontentloaded' });
  const idPdfPath = path.join(OUT_DIR, 'CV_Yuniar_Qonita_ID.pdf');
  await page.pdf({
    path: idPdfPath,
    format: 'A4',
    printBackground: true,
  });
  console.log(`  -> Saved: ${idPdfPath}`);

  // Copy to default
  fs.copyFileSync(idPdfPath, path.join(OUT_DIR, 'CV_Yuniar_Qonita.pdf'));
  console.log('Updated default CV_Yuniar_Qonita.pdf');

  await browser.close();
  console.log('Finished generating both CV PDFs!');
}

generatePDFs();
