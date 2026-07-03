import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import './Certificates.css';

const Certificates = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].certificates;

  // Floating certificate icons
  const certIcons = ['🏆', '🎖️', '📜', '⭐', '🎓', '💎'];
  const certIconPositions = [
    { left: 4, top: 12, size: 20, duration: 3.2, delay: 0 },
    { left: 94, top: 16, size: 20, duration: 3.6, delay: 0.4 },
    { left: 5, top: 45, size: 18, duration: 3.0, delay: 0.8 },
    { left: 95, top: 48, size: 18, duration: 3.4, delay: 1.2 },
    { left: 8, top: 84, size: 20, duration: 3.8, delay: 1.6 },
    { left: 92, top: 84, size: 20, duration: 3.3, delay: 0.6 },
  ];
  const [hoveredId, setHoveredId] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Sertifikat Kompetensi BNSP - Desainer Grafis',
      img: 'Sertifikat_Kompetensi_BNSP_Desainer_Grafis.jpg',
      img2: 'Daftar_Unit_Kompetensi_BNSP.jpg',
      issuer: 'BNSP / LSP BBPVP Semarang',
      color: 'var(--accent-color)',
      desc: 'Sertifikat Kompetensi BNSP No. 58190 2166 0039333 2025. Dilengkapi dengan daftar unit kompetensi yang telah dinyatakan kompeten.',
      isDouble: true
    },
    {
      id: 2,
      title: 'Sertifikat Pelatihan - Desainer Grafis Muda (260 Jam)',
      img: 'Sertifikat_Pelatihan_Desainer_Grafis_260Jam.jpg',
      img2: 'Daftar_Unit_Kompetensi_Pelatihan_260Jam.jpg',
      issuer: 'BBPVP Semarang',
      color: 'var(--accent-purple)',
      desc: 'Pelatihan intensif selama 260 jam. Dilengkapi transkrip nilai kelulusan pada seluruh unit kompetensi.',
      isDouble: true
    },
    {
      id: 3,
      title: 'Sertifikat Kampus Mengajar Angkatan 5',
      img: 'Sertifikat_Kampus_Mengajar_Angkatan5_1.jpg',
      img2: 'Sertifikat_Kampus_Mengajar_Angkatan5_2_DaftarKegiatan.jpg',
      issuer: 'Kemendikbudristek',
      color: '#00e5ff',
      desc: 'Program Merdeka Belajar Kampus Merdeka (MBKM) untuk meningkatkan literasi dan numerasi di sekolah dasar.',
      isDouble: true
    },
    {
      id: 4,
      title: 'Sertifikat PLP & Praktik Mengajar',
      img: 'Sertifikat_PLP_Praktik_Mengajar.jpg',
      img2: 'Nilai_PLP_Praktik_Mengajar.jpg',
      issuer: 'Universitas Pancasakti Tegal',
      color: 'var(--accent-pink)',
      desc: 'Pengenalan Lapangan Persekolahan dan Praktik Mengajar. Dilengkapi dengan transkrip nilai hasil evaluasi.',
      isDouble: true
    },
    {
      id: 5,
      title: 'Piagam Penghargaan Magang ATR BPN',
      img: 'Piagam_Penghargaan_ATR_BPN_Brebes.jpg',
      img2: 'Lembar_Penilaian_Magang_ATR_BPN.jpg',
      issuer: 'Kantor Pertanahan Kab. Brebes',
      color: 'var(--accent-color)',
      desc: 'Piagam penghargaan atas kinerja selama magang. Dilengkapi dengan lembar penilaian evaluasi.',
      isDouble: true
    },
    {
      id: 6,
      title: 'Sertifikat Kelulusan Pemagangan - PKTJ Tegal',
      img: 'Sertifikat_Kelulusan_Magang_PKTJ.jpg',
      issuer: 'Politeknik Keselamatan Transportasi Jalan',
      color: 'var(--accent-purple)',
      desc: 'Pemagangan Lulusan Perguruan Tinggi dengan predikat SANGAT BAIK di bidang Penata Kelola Sistem & TI.',
    },
    {
      id: 7,
      title: 'Pertukaran Mahasiswa Merdeka (PMM) Batch 4',
      img: 'Sertifikat_PMM_Pertukaran_Mahasiswa_Merdeka.jpg',
      issuer: 'Kemendikbudristek',
      color: 'var(--accent-color)',
      desc: 'Program pertukaran mahasiswa tingkat nasional untuk pengembangan kemampuan akademik dan adaptasi lintas budaya.',
    },
    {
      id: 8,
      title: 'Panitia PMC XIII',
      img: 'Sertifikat_Panitia_PMC_XIII.jpg',
      issuer: 'HMPS Pendidikan Matematika, UPS Tegal',
      color: 'var(--accent-pink)',
      desc: 'Pancasakti Mathematics Competition (PMC) XIII.',
    },
    {
      id: 9,
      title: 'Koordinator Divisi Sponsor PMC XIV',
      img: 'Sertifikat_Koordinator_Divisi_Sponsor_PMC_XIV.jpg',
      issuer: 'HMPS Pendidikan Matematika, UPS Tegal',
      color: '#00e5ff',
      desc: 'Pancasakti Mathematics Competition (PMC) XIV.',
    },
    {
      id: 10,
      title: 'Kepala Departemen Kemuslimahan',
      img: 'Sertifikat_Kepala_Dept_Kemuslimahan_UKMI.jpg',
      issuer: 'UKMI UPS Tegal',
      color: 'var(--accent-purple)',
      desc: 'Kepengurusan aktif dalam organisasi kemahasiswaan tingkat universitas.',
    },
    {
      id: 11,
      title: 'Sekretaris Departemen Kemuslimahan',
      img: 'Sertifikat_Sekretaris_Dept_Kemuslimahan_UKMI.jpg',
      issuer: 'UKMI UPS Tegal',
      color: 'var(--accent-color)',
      desc: 'Pengurus departemen kemuslimahan UKMI.',
    },
    {
      id: 12,
      title: 'Anggota Departemen Pendidikan & IPTEK',
      img: 'Sertifikat_Anggota_Dept_Pendidikan_IPTEK_HMPS.jpg',
      issuer: 'HMPS Pendidikan Matematika, UPS Tegal',
      color: 'var(--accent-pink)',
      desc: 'Kepengurusan Himpunan Mahasiswa Program Studi.',
    }
  ];

  return (
    <section className="section certificates-section" id="certificates">
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

        {/* Floating Certificate Icons */}
        {certIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="cert-floating-icon"
            style={{
              left: `${certIconPositions[i].left}%`,
              top: `${certIconPositions[i].top}%`,
              fontSize: `${certIconPositions[i].size}px`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 25, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: certIconPositions[i].duration,
              repeat: Infinity,
              delay: certIconPositions[i].delay,
            }}
          >
            {icon}
          </motion.div>
        ))}

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <motion.div
              className={`cert-card ${cert.isDouble ? 'double-sided' : ''}`}
              key={cert.id}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: cert.isDouble ? 1 : 1.02 }}
              onClick={() => cert.isDouble && setFlippedCard(flippedCard === cert.id ? null : cert.id)}
            >
              <div className={`cert-card-inner ${flippedCard === cert.id ? 'flipped' : ''}`}>
                <div className="cert-card-front">
                  <div className="cert-img-wrapper" style={{ '--cert-color': cert.color }}>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/01_CV_Sertifikat_Ijazah_KTP/${cert.img}`}
                      alt={cert.title}
                    />
                    <div className="cert-img-shine"></div>
                  </div>
                  <div className="cert-body glass-panel">
                    <span className="cert-issuer" style={{ color: cert.color }}>
                      {cert.issuer}
                    </span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-desc">{cert.desc}</p>
                    {cert.isDouble && (
                      <motion.span 
                        className="flip-hint"
                        style={{ display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}
                        animate={{ rotate: flippedCard === cert.id ? 180 : 0 }}
                      >
                        🔄 Klik untuk lihat sisi belakang
                      </motion.span>
                    )}
                  </div>
                </div>
                {cert.isDouble && (
                  <div className="cert-card-back">
                    <div className="cert-img-wrapper" style={{ '--cert-color': cert.color }}>
                      <img
                        src={`${import.meta.env.BASE_URL}assets/01_CV_Sertifikat_Ijazah_KTP/${cert.img2}`}
                        alt={`${cert.title} - Belakang`}
                      />
                    </div>
                    <div className="cert-body glass-panel">
                      <span className="cert-issuer" style={{ color: cert.color }}>
                        {cert.issuer}
                      </span>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-desc">{cert.desc}</p>
                      <motion.span 
                        className="flip-hint"
                        style={{ display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}
                        animate={{ rotate: flippedCard === cert.id ? 0 : 180 }}
                      >
                        🔄 Klik untuk kembali
                      </motion.span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
