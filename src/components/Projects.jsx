import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
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
    { id: 1, title: 'Beranda Portal PPID', img: '01_Beranda_Portal_PPID_PKTJ.jpg' },
    { id: 2, title: 'Layanan & Klasifikasi', img: '02_Layanan_dan_Klasifikasi.jpg' },
    { id: 3, title: 'Admin Panel Permohonan', img: '24_Admin_Panel_Permohonan.jpg' },
    { id: 4, title: 'Form Identitas Pemohon', img: '23_Form_Data_Identitas_Pemohon.jpg' },
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
