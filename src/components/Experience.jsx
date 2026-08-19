import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience;
  const isEN = language === 'en';

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
      title: isEN
        ? 'PPID Content & Portal Officer (Contract)'
        : 'Pelaksana PPID (Kontrak) — Pengelola Konten & Portal',
      org: 'Politeknik Keselamatan Transportasi Jalan (PKTJ) Tegal',
      date: isEN ? 'Jul 2026 – Present' : 'Jul 2026 – Sekarang',
      tags: isEN ? ['PPID Portal', 'Content & Media', 'Photography'] : ['Portal PPID', 'Konten & Media', 'Fotografi'],
      desc: isEN
        ? 'Managed and maintained the layout and digital content of the official PKTJ PPID web portal. Reviewed, edited, and sanitized public documents in compliance with public information disclosure regulations. Documented institutional activities using professional photography equipment. Designed official digital publication media (banners, posters, social media feeds, frame soumed) via Canva & CorelDRAW, and published official activity news articles on the main website.'
        : 'Bertanggung jawab mengelola tata letak dan konten informasi pada web portal resmi PPID PKTJ secara berkala. Melakukan penyuntingan dan sanitasi dokumen publik sesuai regulasi keterbukaan informasi publik (UU KIP). Mendokumentasikan kegiatan instansi dengan kamera fotografi profesional, merancang aset media publikasi digital (banner, poster, ucapan hari besar, frame soumed) via Canva & CorelDRAW, serta menyusun dan menerbitkan artikel berita publikasi.',
      color: '#00f0ff',
    },
    {
      title: isEN
        ? 'IT Systems & Information Management Intern'
        : 'Penata Kelola Sistem dan Teknologi Informasi (Magang)',
      org: 'Politeknik Keselamatan Transportasi Jalan (PKTJ) Tegal',
      date: isEN ? 'Nov 2025 – May 2026' : 'Nov 2025 – Mei 2026',
      tags: ['IT Support', 'Back Office'],
      desc: isEN
        ? 'Performed troubleshooting, root-cause analysis, and corrective action for computer OS failures. Provided technical support to system users. Designed and developed the PPID PKTJ Back Office portal application. Completed the internship program with an EXCELLENT assessment — Certificate No. MN.033.027419.02.2025.'
        : 'Melakukan identifikasi masalah, analisis penyebab, serta tindakan perbaikan terhadap kerusakan pada sistem operasi komputer. Memberikan dukungan teknis kepada pengguna sistem dalam penyelesaian permasalahan IT. Merancang dan mengembangkan aplikasi portal PPID PKTJ bagian Back Office. Menyelesaikan program pemagangan dengan predikat SANGAT BAIK — Sertifikat No. MN.033.027419.02.2025.',
      color: 'var(--accent-color)',
    },
    {
      title: isEN
        ? 'Teaching Practice Program (PLP)'
        : 'Program Pengenalan Lapangan Persekolahan (PLP)',
      org: 'SMP Negeri 3 Brebes',
      date: isEN ? 'Oct – Dec 2024' : 'Okt – Des 2024',
      tags: ['Teaching', 'Education'],
      desc: isEN
        ? 'Completed a 336-hour teaching practice program covering orientation, lesson planning, classroom instruction, reflection, and report writing. Achieved a final score of 90.83 (Grade A) across all assessment components.'
        : 'Menyelesaikan 336 jam program praktik mengajar meliputi orientasi, penyusunan perangkat, praktik mengajar, refleksi, dan penyusunan laporan. Memperoleh nilai akhir 90,83 (Kategori A) atas seluruh komponen yang dinilai.',
      color: 'var(--accent-purple)',
    },
    {
      title: isEN
        ? 'Land Value Zone & Land Certification Survey Officer'
        : 'Petugas Survei Zona Nilai Tanah dan PTSL',
      org: isEN ? 'ATR BPN, Brebes Regency' : 'ATR BPN Kabupaten Brebes',
      date: isEN ? 'Aug – Dec 2023' : 'Agu – Des 2023',
      tags: ['Survey', 'Data Analysis'],
      desc: isEN
        ? 'Conducted land value zone surveys and data collection in Brebes Regency. Processed and analyzed data for land administration purposes. Participated in the Land Certification Program (PTSL) for land book printing and mapping.'
        : 'Melaksanakan survei dan pengumpulan data zona nilai tanah di wilayah Kabupaten Brebes. Melakukan pengolahan dan analisis data untuk keperluan administrasi pertanahan. Berpartisipasi dalam Program Sertifikasi Tanah (PTSL) untuk pencetakan buku tanah dan pemetaan.',
      color: 'var(--accent-pink)',
    },
    {
      title: isEN
        ? 'Teaching Campus Program — MBKM (Kampus Mengajar)'
        : 'Kampus Mengajar — Program Merdeka Belajar Kampus Merdeka (MBKM)',
      org: isEN ? 'SD Negeri Margadana 01, Tegal' : 'SD Negeri Margadana 01, Tegal',
      date: isEN ? 'Feb – Jul 2023' : 'Feb – Jul 2023',
      tags: ['Teaching', 'MBKM'],
      desc: isEN
        ? 'Taught and mentored primary school students in literacy and numeracy skills. Developed learning materials and managed activity documentation via the school\'s social media. Supported parent and community communication programs.'
        : 'Mengajar dan memberikan bimbingan kepada siswa sekolah dasar dalam bidang literasi dan numerasi. Mengembangkan materi pembelajaran dan mengelola dokumentasi kegiatan melalui media sosial sekolah. Mendukung program komunikasi dengan orang tua dan masyarakat sekitar.',
      color: '#00e5ff',
    },
  ];

  const organizations = [
    {
      title: isEN ? 'Advisory Board Member' : 'Anggota Dewan Pendamping',
      org: isEN
        ? 'Islamic Student Activity Unit (UKMI), Universitas Pancasakti Tegal'
        : 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2024 – 2025',
      tags: ['Organization'],
      desc: isEN
        ? 'Provided direction and mentorship in the implementation of organizational work programs. Ensured smooth administration and documentation of organizational activities.'
        : 'Memberikan arahan dan pendampingan dalam pelaksanaan kegiatan program kerja organisasi. Memastikan berjalannya administrasi dan dokumentasi kegiatan organisasi.',
      color: 'var(--accent-color)',
    },
    {
      title: isEN ? 'Head of Islamic Affairs Department' : 'Kepala Departemen Kemuslimahan',
      org: isEN
        ? 'Islamic Student Activity Unit (UKMI), Universitas Pancasakti Tegal'
        : 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2023 – 2024',
      tags: ['Leadership', 'Organization'],
      desc: isEN
        ? 'Led and managed all department programs strategically and systematically. Responsible for planning, program evaluation, and budget management. Received a Certificate of Achievement for outstanding leadership performance.'
        : 'Memimpin dan mengelola seluruh program departemen kemuslimahan secara strategis dan terstruktur. Bertanggung jawab atas perencanaan, evaluasi kegiatan, dan pengelolaan anggaran departemen. Memperoleh Piagam Penghargaan atas kinerja kepemimpinan yang baik.',
      color: 'var(--accent-purple)',
    },
    {
      title: isEN ? 'Secretary of Islamic Affairs Department' : 'Sekretaris Departemen Kemuslimahan',
      org: isEN
        ? 'Islamic Student Activity Unit (UKMI), Universitas Pancasakti Tegal'
        : 'Unit Kegiatan Mahasiswa Islam (UKMI), Universitas Pancasakti Tegal',
      date: '2022 – 2024',
      tags: ['Administration'],
      desc: isEN
        ? 'Managed departmental administration and activity coordination, and handled financial and budget management for department events.'
        : 'Mengelola administrasi dan pengelolaan kegiatan departemen serta bertanggung jawab atas pengelolaan dana dan anggaran kegiatan.',
      color: '#00e5ff',
    },
    {
      title: isEN
        ? 'Sponsorship Division Coordinator — PMC XIV'
        : 'Koordinator Divisi Sponsor — Pancasakti Mathematics Competition (PMC) XIV',
      org: isEN
        ? 'Mathematics Education Student Association, UPS Tegal'
        : 'Himpunan Mahasiswa Program Studi Pendidikan Matematika, UPS Tegal',
      date: '2024',
      tags: ['Fundraising', 'Event'],
      desc: isEN
        ? 'Coordinated all sponsorship activities for PMC XIV — Certificate No. 012/PMC-XIV/HMPS.PMAT-JL/2024.'
        : 'Mengkoordinasikan seluruh kegiatan sponsorship PMC XIV — Sertifikat No. 012/PMC-XIV/HMPS.PMAT-JL/2024.',
      color: 'var(--accent-pink)',
    },
  ];

  const educations = [
    {
      title: isEN
        ? 'Bachelor of Mathematics Education (S1)'
        : 'Sarjana Pendidikan Matematika (S1)',
      org: 'Universitas Pancasakti Tegal',
      date: isEN ? 'Jul 2021 – Aug 2025' : 'Jul 2021 – Agu 2025',
      tags: ['University'],
      desc: isEN
        ? 'Teaching Practice Score: 90.83 / Grade A | 336 hours of teaching practice | GPA: 3.64'
        : 'Nilai PLP: 90,83 / Predikat A | 336 jam praktik mengajar | IPK: 3,64',
      color: 'var(--accent-color)',
    },
    {
      title: isEN
        ? 'Senior High School — Science Program'
        : 'Sekolah Menengah Atas — Program IPA',
      org: 'SMA Negeri 5 Kota Tegal',
      date: '2018 – 2021',
      tags: ['High School'],
      desc: isEN
        ? 'Science stream with a focus on mathematics and natural sciences.'
        : 'Program IPA dengan fokus pada sains dan matematika.',
      color: 'var(--accent-purple)',
    },
  ];

  const academic = [
    {
      title: isEN
        ? 'National Student Exchange Program (PMM) Batch 4'
        : 'Peserta Program Pertukaran Mahasiswa Merdeka (PMM) Batch 4',
      org: 'Universitas Syiah Kuala',
      date: isEN ? 'Jan – Jun 2024' : 'Jan – Jun 2024',
      tags: ['National Program'],
      desc: isEN
        ? 'Selected for a highly competitive national student exchange program; developed academic competencies and cross-cultural adaptation skills. Actively participated in inter-regional academic and student affairs activities.'
        : 'Terpilih dalam program pertukaran mahasiswa tingkat nasional yang kompetitif; mengembangkan kemampuan akademik dan adaptasi lintas budaya. Berpartisipasi aktif dalam kegiatan akademik dan kemahasiswaan antardaerah.',
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
      {/* Decorative Space Animation Elements */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/saturnus tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="exp-anim-saturnus"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/kristal tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="exp-anim-kristal"
        animate={{
          y: [0, 22, 0],
          rotate: [0, -12, 12, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
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
