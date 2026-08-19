import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiDownload } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].projects;
  const [activeTab, setActiveTab] = useState('design');
  const [flippedCard, setFlippedCard] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null); // lightbox

  // === DESIGN PROJECTS — semua gambar yang ada di folder ===
  const designProjects = [
    {
      id: 1,
      title: 'Cover Portofolio Desain',
      img: 'Cover Portfolio.PNG',
      desc: 'Halaman cover portofolio desain grafis profesional.',
      tag: 'Portfolio Cover',
    },
    {
      id: 2,
      title: 'Media Sosial & Skill',
      img: 'MediaSosial Portfolio.PNG',
      desc: 'Desain konten media sosial dan visualisasi skill chart.',
      tag: 'Social Media Design',
    },
    {
      id: 3,
      title: 'Notes / Buku Catatan',
      img: '03_Notes_Buku_Catatan.jpg',
      desc: 'Desain cover buku catatan dengan estetika modern.',
      tag: 'Print Design',
    },
    {
      id: 4,
      title: 'Logo Toko Online Skincare',
      img: '04_Logo_Toko_Online_Skincare.jpg',
      desc: 'Brand identity & logo untuk toko online skincare.',
      tag: 'Brand Identity',
    },
    {
      id: 5,
      title: 'Kemasan Bakso Goreng (Basreng)',
      img: '05_Kemasan_Bakso_Goreng.jpg',
      desc: 'Desain kemasan produk snack basreng yang menarik dan eye-catching.',
      tag: 'Packaging Design',
    },
    {
      id: 6,
      title: 'Poster Sumpah Pemuda',
      img: '06_Poster_Sumpah_Pemuda.jpg',
      img2: '07_Poster_Sumpah_Pemuda_Detail.jpg',
      desc: 'Desain poster Hari Sumpah Pemuda dengan estetika bold dan penuh semangat kebangsaan.',
      tag: 'Event Poster',
      isDouble: true,
    },
    {
      id: 7,
      title: 'X-Banner FnB & Transportasi',
      img: 'x banner biru.jpg',
      img2: 'x banner oranye.jpg',
      desc: 'Dua varian desain X-Banner untuk promosi bisnis FnB dan transportasi — varian biru & oranye.',
      tag: 'Banner Design',
      isDouble: true,
      hideSideLabels: true,
    },
    {
      id: 8,
      title: 'Poster Promosi',
      img: 'Poster Promosi Ang.png',
      desc: 'Desain poster promosi dengan warna vibrant dan komposisi modern.',
      tag: 'Promotional Poster',
    },
    {
      id: 9,
      title: 'Cover Notebook (Depan & Belakang)',
      img: 'Notebook Portfolio.PNG',
      img2: 'Cover Belakang Notebook.jpg',
      desc: 'Desain cover notebook bolak-balik — depan & belakang.',
      tag: 'Print Design',
      isDouble: true,
    },
    {
      id: 10,
      title: 'Undangan (Luar & Dalam)',
      img: 'Undangan bagian Luar.jpg',
      img2: 'Undangan bagian Dalam.jpg',
      desc: 'Desain undangan elegan — bagian luar & dalam.',
      tag: 'Invitation Design',
      isDouble: true,
    },
    {
      id: 11,
      title: 'Id Card Panitia',
      img: 'Id Card.jpg',
      desc: 'Desain ID card profesional untuk keperluan kepanitiaan.',
      tag: 'Corporate ID Card',
    },
    {
      id: 12,
      title: 'Sablon Kaos (Depan & Belakang)',
      img: 'Sablon Ang.png',
      img2: 'Sablon Ang belakang.png',
      desc: 'Desain sablon kaos kreatif untuk merchandise & event — tampilan depan & belakang.',
      tag: 'Merchandise Design',
      isDouble: true,
    },

    {
      id: 14,
      title: 'Banner Promosi',
      img: 'Banner.jpg',
      desc: 'Desain banner digital untuk kebutuhan promosi.',
      tag: 'Digital Banner',
    },
  ];

  const webProjects = [
    { id: 1, title: '01. Beranda Portal Utama PPID', img: '01_Beranda_Portal_PPID_PKTJ.jpg' },
    { id: 2, title: '02. Profil PPID PKTJ', img: '02_Profil_PPID.jpg' },
    { id: 3, title: '03. Visi dan Misi', img: '03_Visi_dan_Misi.jpg' },
    { id: 4, title: '04. Struktur Organisasi', img: '04_Struktur_Organisasi.jpg' },
    { id: 5, title: '05. Tugas dan Tanggung Jawab', img: '05_Tugas_dan_Tanggung_Jawab.jpg' },
    { id: 6, title: '06. Regulasi Acuan PPID', img: '06_Regulasi_Acuan_PPID.jpg' },
    { id: 7, title: '07. Kontak Resmi PPID', img: '07_Kontak_PPID.jpg' },
    { id: 8, title: '08. Menu Layanan Informasi', img: '08_Layanan_Informasi_Menu.jpg' },
    { id: 9, title: '09. Maklumat Pelayanan', img: '09_Maklumat_Pelayanan.jpg' },
    { id: 10, title: '10. Daftar Informasi Publik (DIP)', img: '10_Daftar_Informasi_Publik.jpg' },
    { id: 11, title: '11. Laporan Pelayanan Informasi', img: '11_Laporan_Pelayanan_Informasi.jpg' },
    { id: 12, title: '12. Laporan Akses Layanan', img: '12_Laporan_Akses_Informasi.jpg' },
    { id: 13, title: '13. Laporan Survey Kepuasan', img: '13_Laporan_Survey_Kepuasan.jpg' },
    { id: 14, title: '14. Informasi Publik Berkala', img: '14_Informasi_Berkala.jpg' },
    { id: 15, title: '15. Informasi Serta Merta', img: '15_Informasi_Serta_Merta.jpg' },
    { id: 16, title: '16. Informasi Setiap Saat', img: '16_Informasi_Setiap_Saat.jpg' },
    { id: 17, title: '17. Informasi Dikecualikan', img: '17_Informasi_Dikecualikan.jpg' },
    { id: 18, title: '18. Form Permohonan Informasi', img: '18_Permohonan_Informasi_Online.jpg' },
    { id: 19, title: '19. SOP Permintaan Informasi', img: '19_SOP_Permintaan_Informasi.jpg' },
    { id: 20, title: '20. SOP Pengajuan Keberatan', img: '20_SOP_Pengajuan_Keberatan.jpg' },
    { id: 21, title: '21. SOP Penyelesaian Sengketa', img: '21_SOP_Penyelesaian_Sengketa.jpg' },
    { id: 22, title: '22. FAQ & Pusat Bantuan', img: '22_FAQ_Pusat_Bantuan.jpg' },
    { id: 23, title: '23. Portal Berita PPID', img: '23_Berita_Sosialisasi_PPID.jpg' },
    { id: 24, title: '24. Formulir Cetak Permohonan', img: '24_Formulir_Cetak_Permohonan.jpg' },
    { id: 25, title: '25. Login Page Admin Panel', img: '25_Login_Page_Admin.jpg' },
    { id: 26, title: '26. Dashboard Utama Admin Panel', img: '26_Admin_Dashboard.jpg' },
    { id: 27, title: '27. Admin - Kelola Profil PPID', img: '27_Admin_Profil_PPID.jpg' },
    { id: 28, title: '28. Admin - Kelola Tugas & Tanggung Jawab', img: '28_Admin_Tugas___Tanggung_Jawab.jpg' },
    { id: 29, title: '29. Admin - Kelola Visi & Misi', img: '29_Admin_Visi___Misi.jpg' },
    { id: 30, title: '30. Admin - Kelola Struktur Organisasi', img: '30_Admin_Struktur_Organisasi.jpg' },
    { id: 31, title: '31. Admin - Kelola Regulasi', img: '31_Admin_Regulasi.jpg' },
    { id: 32, title: '32. Admin - Kelola Kontak', img: '32_Admin_Kontak_Kami.jpg' },
    { id: 33, title: '33. Admin - Data Permohonan Informasi', img: '33_Admin_Daftar_Permohonan_Informasi.jpg' },
    { id: 34, title: '34. Admin - Kotak Masuk Pesan Kontak', img: '34_Admin_Pesan_Kontak.jpg' },
    { id: 35, title: '35. Admin - Laporan Rekapitulasi', img: '35_Admin_Laporan_Bulanan.jpg' },
    { id: 36, title: '36. Admin - Manajemen Berita & Publikasi', img: '36_Admin_Kelola_Berita.jpg' },
    { id: 37, title: '37. Admin - Manajemen Hak Akses User', img: '37_Admin_Manajemen_User.jpg' },
    { id: 38, title: '38. Admin - Kelola Menu Navigasi', img: '38_Admin_Kelola_Menu_Navigasi.jpg' },
    { id: 39, title: '39. Admin - Pengaturan Hero Banner', img: '39_Admin_Edit_Hero_Banner.jpg' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
    }),
  };

  return (
    <section className="section projects-section" id="projects">
      {/* Decorative Space Animation Elements */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/awan cuco tb.PNG`}
        alt=""
        aria-hidden="true"
        className="proj-anim-awan"
        animate={{
          x: [-20, 20, -20],
          y: [0, -15, 0],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/saturnus tb 2.PNG`}
        alt=""
        aria-hidden="true"
        className="proj-anim-saturnus"
        animate={{
          y: [0, -22, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container">
        <motion.div
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t.title}</h2>
        </motion.div>

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            {t.designTab}
          </button>
          <button
            className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            {t.webTab}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'design' && (
            <motion.div
              key="design"
              className="gallery-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {designProjects.map((project, index) => (
                <motion.div
                  className={`gallery-item ${project.isDouble ? 'double-sided' : ''}`}
                  key={project.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -8, scale: project.isDouble ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => project.isDouble && setFlippedCard(flippedCard === project.id ? null : project.id)}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        if (project.isDouble) {
                          setSelectedImg({
                            title: project.title,
                            img1: `${import.meta.env.BASE_URL}assets/02_Portofolio_Desain/${project.img}`,
                            img2: `${import.meta.env.BASE_URL}assets/02_Portofolio_Desain/${project.img2}`,
                            hideSideLabels: project.hideSideLabels
                          });
                        } else {
                          setSelectedImg({
                            title: project.title,
                            img1: `${import.meta.env.BASE_URL}assets/02_Portofolio_Desain/${project.img}`
                          });
                        }
                      }}
                >
                  <div className={`gallery-card-inner ${flippedCard === project.id ? 'flipped' : ''}`}>
                    {/* FRONT */}
                    <div className="gallery-card-front">
                      <div className="gallery-img-wrapper">
                        <img
                          src={`${import.meta.env.BASE_URL}assets/02_Portofolio_Desain/${project.img}`}
                          alt={project.title}
                          loading="lazy"
                        />
                        <div className="img-zoom-hint">
                          {project.isDouble ? '🖱️ Klik 2x untuk lihat kedua sisi' : '🖱️ Klik 2x untuk perbesar'}
                        </div>
                      </div>
                      <div className="gallery-info">
                        <span className="gallery-tag">{project.tag}</span>
                        <h4 className="gallery-title">{project.title}</h4>
                        <p className="gallery-desc">{project.desc}</p>
                        {project.isDouble && (
                          <motion.span
                            className="flip-hint"
                            animate={{ rotate: flippedCard === project.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            🔄 Klik 1x untuk flip | Klik 2x untuk zoom
                          </motion.span>
                        )}
                      </div>
                    </div>

                    {/* BACK (untuk isDouble) */}
                    {project.isDouble && (
                      <div className="gallery-card-back">
                        <div className="gallery-img-wrapper">
                          <img
                            src={`${import.meta.env.BASE_URL}assets/02_Portofolio_Desain/${project.img2}`}
                            alt={`${project.title} - Belakang`}
                            loading="lazy"
                          />
                          <div className="img-zoom-hint">🖱️ Klik 2x untuk lihat kedua sisi</div>
                        </div>
                        <div className="gallery-info">
                          <span className="gallery-tag">{project.tag}</span>
                          <h4 className="gallery-title">{project.title}</h4>
                          <p className="gallery-desc">{project.desc}</p>
                          <motion.span
                            className="flip-hint"
                            animate={{ rotate: flippedCard === project.id ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            🔄 Klik 1x untuk flip | Klik 2x untuk zoom
                          </motion.span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'web' && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="web-project-card glass-panel">
                <div className="web-project-header">
                  <div className="web-project-badge">Web Development</div>
                  <h3 className="web-project-title">
                    PPID PKTJ
                    <span> — Politeknik Keselamatan Transportasi Jalan</span>
                  </h3>
                  <p className="web-project-desc">
                    {language === 'id'
                      ? 'Berperan utama dalam pengembangan Admin Panel untuk pengelolaan permohonan informasi publik. Juga melakukan revisi besar dan finishing tampilan halaman publik (Frontend) agar lebih modern dan informatif.'
                      : 'Main role in developing the Admin Panel for public information request management. Also performed major revisions and finishing on the public portal frontend to make it more modern and informative.'}
                  </p>
                  <div className="web-project-links">
                    <a href="https://ppid.pktj.ac.id" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <FiExternalLink /> Live Website
                    </a>
                    <a
                      href={`${import.meta.env.BASE_URL}assets/03_Proyek_Website_PPID_PKTJ/Dokumentasi_Lengkap_Portal_PPID_PKTJ.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ background: 'linear-gradient(135deg, #00f0ff 0%, #0088ff 100%)', boxShadow: '0 8px 25px rgba(0, 240, 255, 0.4)' }}
                    >
                      <FiDownload /> {language === 'id' ? 'Dokumentasi PDF Lengkap (39 Hal)' : 'Full PDF Documentation (39 Pgs)'}
                    </a>
                    <a href="https://github.com/yuniarqonita-ang/PPID-PKTJ.git" target="_blank" rel="noopener noreferrer" className="btn-outline">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>

                <div className="web-project-gallery">
                  {webProjects.map((img, index) => (
                    <motion.div
                      className="web-gallery-img"
                      key={img.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setSelectedImg({
                        title: img.title,
                        img1: `${import.meta.env.BASE_URL}assets/03_Proyek_Website_PPID_PKTJ/${img.img}`
                      })}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}assets/03_Proyek_Website_PPID_PKTJ/${img.img}`}
                        alt={img.title}
                        loading="lazy"
                      />
                      <div className="web-img-label">{img.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className={`lightbox-content ${selectedImg.img2 ? 'dual-layout' : 'single-layout'}`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
              <div className="lightbox-title-bar">{selectedImg.title}</div>
              <div className="lightbox-images-container">
                <div className="lightbox-image-wrapper">
                  {selectedImg.img2 && !selectedImg.hideSideLabels && <div className="lightbox-side-label">SISI DEPAN / BAGIAN 1</div>}
                  <img src={selectedImg.img1} alt="Preview Front" />
                </div>
                {selectedImg.img2 && (
                  <div className="lightbox-image-wrapper">
                    {!selectedImg.hideSideLabels && <div className="lightbox-side-label">SISI BELAKANG / BAGIAN 2</div>}
                    <img src={selectedImg.img2} alt="Preview Back" />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
