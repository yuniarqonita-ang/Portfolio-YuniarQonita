import os
import time
import subprocess
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUT_DIR = r"public\assets\03_Proyek_Website_PPID_PKTJ"
os.makedirs(OUT_DIR, exist_ok=True)

PAGES = [
    ("01_Beranda_Portal_PPID_PKTJ.jpg", "https://ppid.pktj.ac.id", "Beranda Portal Utama PPID PKTJ"),
    ("02_Profil_PPID.jpg", "https://ppid.pktj.ac.id/profil-ppid.html", "Profil PPID PKTJ"),
    ("03_Visi_dan_Misi.jpg", "https://ppid.pktj.ac.id/profil-visi-misi.html", "Visi dan Misi"),
    ("04_Struktur_Organisasi.jpg", "https://ppid.pktj.ac.id/profil-struktur-organisasi.html", "Struktur Organisasi"),
    ("05_Tugas_dan_Tanggung_Jawab.jpg", "https://ppid.pktj.ac.id/profil-tugas-tanggung-jawab.html", "Tugas dan Tanggung Jawab"),
    ("06_Regulasi_Acuan_PPID.jpg", "https://ppid.pktj.ac.id/profil-regulasi.html", "Regulasi Acuan PPID"),
    ("07_Kontak_PPID.jpg", "https://ppid.pktj.ac.id/profil-kontak.html", "Kontak Resmi PPID"),
    ("08_Layanan_Informasi_Menu.jpg", "https://ppid.pktj.ac.id/halaman/layanan-informasi-menu", "Menu Layanan Informasi"),
    ("09_Maklumat_Pelayanan.jpg", "https://ppid.pktj.ac.id/layanan-informasi/maklumat", "Maklumat Pelayanan Informasi"),
    ("10_Daftar_Informasi_Publik.jpg", "https://ppid.pktj.ac.id/layanan-informasi/daftar", "Daftar Informasi Publik (DIP)"),
    ("11_Laporan_Pelayanan_Informasi.jpg", "https://ppid.pktj.ac.id/layanan-informasi/laporan", "Laporan Pelayanan Informasi"),
    ("12_Laporan_Akses_Informasi.jpg", "https://ppid.pktj.ac.id/layanan-informasi/laporan-akses", "Laporan Akses Layanan Informasi"),
    ("13_Laporan_Survey_Kepuasan.jpg", "https://ppid.pktj.ac.id/layanan-informasi/laporan-survey", "Laporan Survey Kepuasan Masyarakat"),
    ("14_Informasi_Berkala.jpg", "https://ppid.pktj.ac.id/informasi-publik/berkala", "Informasi Publik Berkala"),
    ("15_Informasi_Serta_Merta.jpg", "https://ppid.pktj.ac.id/informasi-publik/serta-merta", "Informasi Publik Serta Merta"),
    ("16_Informasi_Setiap_Saat.jpg", "https://ppid.pktj.ac.id/informasi-publik/setiap-saat", "Informasi Publik Setiap Saat"),
    ("17_Informasi_Dikecualikan.jpg", "https://ppid.pktj.ac.id/informasi-publik/dikecualikan", "Informasi Publik Dikecualikan"),
    ("18_Permohonan_Informasi_Online.jpg", "https://ppid.pktj.ac.id/permohonan-informasi", "Formulir Permohonan Informasi Publik"),
    ("19_SOP_Permintaan_Informasi.jpg", "https://ppid.pktj.ac.id/prosedur/sop-permintaan", "SOP Prosedur Permintaan Informasi"),
    ("20_SOP_Pengajuan_Keberatan.jpg", "https://ppid.pktj.ac.id/prosedur/sop-keberatan", "SOP Prosedur Pengajuan Keberatan"),
    ("21_SOP_Penyelesaian_Sengketa.jpg", "https://ppid.pktj.ac.id/prosedur/sop-sengketa", "SOP Penyelesaian Sengketa Informasi"),
    ("22_FAQ_Pusat_Bantuan.jpg", "https://ppid.pktj.ac.id/faq", "FAQ / Pertanyaan Umum"),
    ("23_Berita_Sosialisasi_PPID.jpg", "https://ppid.pktj.ac.id/berita", "Portal Berita & Publikasi Kegiatan"),
    ("24_Formulir_Cetak_Permohonan.jpg", "https://ppid.pktj.ac.id/dokumen/formulir-permohonan-cetak", "Formulir Cetak Permohonan Fisik"),
]

print(f"Capturing live screenshots for {len(PAGES)} pages...")

captured_files = []
for filename, url, title in PAGES:
    out_file = os.path.join(OUT_DIR, filename)
    png_tmp = out_file.replace('.jpg', '_tmp.png')
    
    cmd = [
        EDGE_PATH,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1600,1000",
        f"--screenshot={png_tmp}",
        "--virtual-time-budget=4000",
        url
    ]
    
    print(f"Capturing: {title} ({url}) -> {filename} ...")
    try:
        subprocess.run(cmd, check=True, timeout=25, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if os.path.exists(png_tmp):
            img = Image.open(png_tmp)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            # Save as high quality JPG
            img.save(out_file, 'JPEG', quality=92)
            os.remove(png_tmp)
            captured_files.append(out_file)
            print(f"  [OK] Saved {filename} ({os.path.getsize(out_file)} bytes)")
        else:
            print(f"  [WARN] Temporary PNG not generated for {url}")
    except Exception as e:
        print(f"  [ERROR] {e}")

print(f"\nTotal live screenshots captured: {len(captured_files)}")

# Now generate PDF
if captured_files:
    pdf_path = os.path.join(OUT_DIR, "Dokumentasi_Lengkap_Portal_PPID_PKTJ.pdf")
    pdf_images = [Image.open(f) for f in captured_files]
    pdf_images[0].save(pdf_path, save_all=True, append_images=pdf_images[1:], resolution=100.0, quality=90)
    print(f"\nGenerated live PDF documentation: {pdf_path} ({os.path.getsize(pdf_path)} bytes)")
