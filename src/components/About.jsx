import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import './About.css';

// Animasi gambar portofolio ditempatkan di section About (section kosong di kiri)
const ANIM_IMAGES = [
  { src: `${import.meta.env.BASE_URL}assets/animasi/kristal tb 1.PNG`, className: 'anim-kristal-1' },
  { src: `${import.meta.env.BASE_URL}assets/animasi/saturnus tb 1.PNG`, className: 'anim-saturnus-1' },
  { src: `${import.meta.env.BASE_URL}assets/animasi/awan cuco tb.PNG`, className: 'anim-awan' },
];

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  const tags = language === 'id'
    ? ['Desainer Grafis', 'Web Developer', 'Kepala Departemen', 'Fast Learner', 'BNSP Certified']
    : ['Graphic Designer', 'Web Developer', 'Department Head', 'Fast Learner', 'BNSP Certified'];

  return (
    <section className="section about-section" id="about">
      {/* Animated decoration images — tempatnya di About, bukan Hero */}
      {ANIM_IMAGES.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          alt=""
          aria-hidden="true"
          className={`about-anim-img ${img.className}`}
          animate={{
            y: [0, -25, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
            opacity: [0.55, 0.9, 0.55],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

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

        {/* Main About Grid */}
        <div className="about-content">
          {/* ===== KIRI: Profile Card dengan animasi unik ===== */}
          <motion.div
            className="about-profile-card"
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Animated glowing orb */}
            <div className="profile-glow-orb" />

            {/* Big Initials */}
            <motion.div
              className="profile-monogram"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              YQ
            </motion.div>

            {/* Name & role */}
            <h3 className="profile-name">Yuniar Qonita</h3>
            <p className="profile-role">{t.role ?? (language === 'id' ? 'Desainer Grafis & Web Developer' : 'Graphic Designer & Web Developer')}</p>

            {/* Animated skill bars */}
            <div className="profile-skills-visual">
              {[
                { label: 'Graphic Design', pct: 90, color: 'var(--accent-purple)' },
                { label: 'Web Development', pct: 78, color: 'var(--accent-color)' },
                { label: 'Communication', pct: 92, color: 'var(--accent-pink)' },
              ].map((s, i) => (
                <div key={i} className="mini-skill">
                  <div className="mini-skill-label">
                    <span>{s.label}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="mini-skill-track">
                    <motion.div
                      className="mini-skill-fill"
                      style={{ background: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badge floating */}
            <motion.div
              className="about-badge glass-panel"
              animate={{ y: [-5, 5, -5], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="badge-icon">🌟</span>
              <div>
                <span className="badge-num">Fresh</span>
                <span className="badge-text">Graduate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ===== KANAN: Teks Biodata ===== */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="about-lead">{t.p1}</p>
            <p className="about-body">{t.p2}</p>

            <div className="personal-info glass-panel">
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">📧 {t.email}</span>
                  <span className="info-value">yuniarqonita@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📱 {t.phone}</span>
                  <span className="info-value">+62 895-2673-4638</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">📍 {t.location}</span>
                  <span className="info-value">Tegal, Jawa Tengah, Indonesia</span>
                </div>
                <div className="info-item">
                  <span className="info-label">🎓 {language === 'id' ? 'Pendidikan' : 'Degree'}</span>
                  <span className="info-value">{language === 'id' ? 'S1 Pendidikan Matematika' : 'B.Ed. Mathematics Education'}</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">🏫 {t.university}</span>
                  <span className="info-value">Universitas Pancasakti Tegal</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📊 {t.gpa}</span>
                  <span className="info-value">3.64</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">📅 {t.period}</span>
                  <span className="info-value">Jul 2021 – Aug 2025</span>
                </div>
                <div className="info-item">
                  <span className="info-label">⭐ {t.plp}</span>
                  <span className="info-value">90.83 / Grade A</span>
                </div>
              </div>
            </div>

            <div className="about-tags">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="about-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
