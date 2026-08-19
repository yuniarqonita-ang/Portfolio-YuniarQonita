import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  const tags = language === 'id'
    ? ['Desainer Grafis', 'Web Developer', 'Kepala Departemen', 'Fast Learner', 'BNSP Certified']
    : ['Graphic Designer', 'Web Developer', 'Department Head', 'Fast Learner', 'BNSP Certified'];

  return (
    <section className="section about-section" id="about">
      {/* Decorative Space Animation Elements in Background */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/kristal tb 2.PNG`}
        alt=""
        aria-hidden="true"
        className="about-anim-kristal"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/saturnus tb 2.PNG`}
        alt=""
        aria-hidden="true"
        className="about-anim-saturnus"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -6, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
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

        {/* Main About Grid */}
        <div className="about-content">
          {/* ===== KIRI: Foto Full Body Tanpa Latar Belakang (Standing Clean with Neon Aura) ===== */}
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Ambient Neon Back-Glow */}
            <div className="photo-neon-aura"></div>
            
            <div className="photo-figure">
              <img
                src={`${import.meta.env.BASE_URL}assets/Foto FullBody YuniarQonita tanpa background.PNG`}
                alt="Yuniar Qonita Full Body"
                className="about-fullbody-img"
              />
            </div>

            {/* Floating Glass Badge */}
            <motion.div
              className="about-badge glass-panel"
              animate={{ y: [-5, 5, -5] }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
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
                  <span className="info-value">{language === 'id' ? 'Jul 2021 – Agu 2025' : 'Jul 2021 – Aug 2025'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">⭐ {t.plp}</span>
                  <span className="info-value">{language === 'id' ? '90,83 / Predikat A' : '90.83 / Grade A'}</span>
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
                  transition={{ delay: 0.25 + i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
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
