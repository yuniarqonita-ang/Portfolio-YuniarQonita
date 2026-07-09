import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience;

  // Floating experience icons
  const expIcons = ['💼', '🎓', '🏆', '📚', '🚀', '⭐'];
  const expIconPositions = [
    { left: 4, top: 12, size: 20, duration: 3.2, delay: 0 },
    { left: 94, top: 16, size: 20, duration: 3.6, delay: 0.4 },
    { left: 5, top: 45, size: 18, duration: 3.0, delay: 0.8 },
    { left: 95, top: 48, size: 18, duration: 3.4, delay: 1.2 },
    { left: 8, top: 84, size: 20, duration: 3.8, delay: 1.6 },
    { left: 92, top: 84, size: 20, duration: 3.3, delay: 0.6 },
  ];

  const experiences = [
    {
      title: 'Penata Kelola Sistem dan Teknologi Informasi (Magang)',
      org: 'Politeknik Keselamatan Transportasi Jalan (PKTJ) Tegal',
      date: 'Nov 2025 – Mei 2026',
      tags: ['IT Support', 'Back Office'],
      desc: 'Melakukan identifikasi masalah, analisis penyebab, serta tindakan perbaikan terhadap kerusakan pada sistem operasi komputer. Memberikan dukungan teknis kepada pengguna sistem dalam penyelesaian permasalahan IT. Merancang dan mengembangkan aplikasi portal PPID PKTJ bagian Back Office. Menyelesaikan program pemagangan dengan predikat SANGAT BAIK — Sertifikat No. MN.033.027419.02.2025.',
      color: 'var(--accent-color)',
    },
    {
      title: 'Program Pengenalan Lapangan Persekolahan (PLP)',
      org: 'SMP Negeri 3 Brebes',
      date: 'Okt – Des 2024',
      tags: ['Teaching', 'Education'],
      desc: 'Menyelesaikan 336 jam program praktik mengajar meliputi orientasi, penyusunan perangkat, praktik mengajar, refleksi, dan penyusunan laporan. Memperoleh nilai akhir 90,83 (Kategori A) atas seluruh komponen yang dinilai.',
      color: 'var(--accent-purple)',
    },
    {
      title: 'Petugas Survei Zona Nilai Tanah dan PTSL',
      org: 'ATR BPN Kabupaten Brebes',
      date: 'Agu – Des 2023',
      tags: ['Survey', 'Data Analysis'],
      desc: 'Melaksanakan survei dan pengumpulan data zona nilai tanah di wilayah Kabupaten Brebes. Melakukan pengolahan dan analisis data untuk keperluan administrasi pertanahan. Berpartisipasi dalam Program Sertifikasi Tanah (PTSL) untuk pencetakan buku tanah dan pemetaan.',
      color: 'var(--accent-pink)',
    },
    {
      title: 'Kampus Mengajar — Program Merdeka Belajar Kampus Merdeka (MBKM)',
      org: 'SD Negeri Margadana 01, Tegal',
      date: 'Feb – Jul 2023',
      tags: ['Teaching', 'MBKM'],
      desc: 'Mengajar dan memberikan bimbingan kepada siswa sekolah dasar dalam bidang literasi dan numerasi; uang saku Rp1.200.000/bulan. Mengembangkan materi pembelajaran dan mengelola dokumentasi kegiatan melalui media sosial sekolah. Mendukung program komunikasi dengan orang tua dan masyarakat sekitar.',
      color: '#00e5ff',
    },
  ];

  const organizations = [
    {
      title: 'Anggota Dewan Pendamping',
      org: 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2024 – 2025',
      tags: ['Organization'],
      desc: 'Memberikan arahan dan pendampingan dalam pelaksanaan kegiatan program kerja organisasi. Memastikan berjalannya administrasi dan dokumentasi kegiatan organisasi.',
      color: 'var(--accent-color)',
    },
    {
      title: 'Kepala Departemen Kemuslimahan',
      org: 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2023 – 2024',
      tags: ['Leadership', 'Organization'],
      desc: 'Memimpin dan mengelola seluruh program departemen kemuslimahan secara strategis dan terstruktur. Bertanggung jawab atas perencanaan, evaluasi kegiatan, dan pengelolaan anggaran departemen. Memperoleh Piagam Penghargaan atas kinerja kepemimpinan yang baik.',
      color: 'var(--accent-purple)',
    },
    {
      title: 'Sekretaris Departemen Kemuslimahan',
      org: 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2022 – 2024',
      tags: ['Administration'],
      desc: 'Mengelola administrasi dan pengelolaan kegiatan departemen serta bertanggung jawab atas pengelolaan dana dan anggaran kegiatan.',
      color: '#00e5ff',
    },
    {
      title: 'Koordinator Divisi Sponsor — Pancasakti Mathematics Competition (PMC) XIV',
      org: 'Himpunan Mahasiswa Program Studi Pendidikan Matematika, UPS Tegal',
      date: '2024',
      tags: ['Fundraising', 'Event'],
      desc: 'Mengkoordinasikan seluruh kegiatan sponsorship PMC XIV — Sertifikat No. 012/PMC-XIV/HMPS.PMAT-JL/2024.',
      color: 'var(--accent-pink)',
    },
  ];

  const educations = [
    {
      title: 'Sarjana Pendidikan Matematika (S1)',
      org: 'Universitas Pancasakti Tegal',
      date: 'Jul 2021 – Agu 2025',
      tags: ['University'],
      desc: 'Nilai PLP: 90,83 / Predikat A | 336 jam praktik mengajar | IPK: 3,64',
      color: 'var(--accent-color)',
    },
    {
      title: 'Sekolah Menengah Atas — Program IPA',
      org: 'SMA Negeri 5 Kota Tegal',
      date: '2018 – 2021',
      tags: ['High School'],
      desc: 'Program IPA dengan fokus pada sains dan matematika.',
      color: 'var(--accent-purple)',
    },
  ];

  const academic = [
    {
      title: 'Peserta Program Pertukaran Mahasiswa Merdeka (PMM) Batch 4',
      org: 'Universitas Syiah Kuala',
      date: 'Jan – Jun 2024',
      tags: ['National Program'],
      desc: 'Terpilih dalam program pertukaran mahasiswa tingkat nasional yang kompetitif; mengembangkan kemampuan akademik dan adaptasi lintas budaya. Berpartisipasi aktif dalam kegiatan akademik dan kemahasiswaan antardaerah.',
      color: 'var(--accent-pink)',
    },
  ];

  const renderTimeline = (data, icon, heading) => (
    <div className="timeline-col">
      <h3 className="timeline-heading">
        <span className="heading-icon">{icon}</span>
        {heading}
      </h3>
      <div className="timeline">
        {data.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="tl-dot" 
              style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <div className="tl-card glass-panel">
              <div className="tl-top">
                <span className="tl-date">{item.date}</span>
                <div className="tl-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tl-tag" style={{ borderColor: item.color, color: item.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="tl-title">{item.title}</h4>
              <h5 className="tl-org">{item.org}</h5>
              <p className="tl-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section experience-section" id="experience">
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

        {/* Floating Experience Icons */}
        {expIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="exp-floating-icon"
            style={{
              left: `${expIconPositions[i].left}%`,
              top: `${expIconPositions[i].top}%`,
              fontSize: `${expIconPositions[i].size}px`,
            }}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: expIconPositions[i].duration,
              repeat: Infinity,
              delay: expIconPositions[i].delay,
            }}
          >
            {icon}
          </motion.div>
        ))}
        <div className="experience-grid">
          {renderTimeline(experiences, <FiBriefcase />, t.work)}
          {renderTimeline(organizations, <FiBriefcase />, t.org)}
          {renderTimeline(educations, <FiBook />, t.edu)}
          {renderTimeline(academic, <FiBook />, t.academic)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
