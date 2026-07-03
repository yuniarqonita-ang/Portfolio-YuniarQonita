import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  return (
    <section className="section about-section" id="about">
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

        {/* Main About Grid: Foto Kiri, Teks Kanan */}
        <div className="about-content">
          {/* ===== KIRI: Foto Full Body Transparent ===== */}
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="about-img-glow"></div>
            <div className="about-avatar-container">
              <img
                src={`${import.meta.env.BASE_URL}assets/Foto_FullBody_Transparent.png`}
                alt="Yuniar Qonita"
                className="about-avatar-img"
              />
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
                  <span className="info-label">🎓 Pendidikan</span>
                  <span className="info-value">S1 Pendidikan Matematika</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">🏫 {t.university}</span>
                  <span className="info-value">Universitas Pancasakti Tegal</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📊 {t.gpa}</span>
                  <span className="info-value">3,64</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">📅 {t.period}</span>
                  <span className="info-value">Jul 2021 – Agu 2025</span>
                </div>
                <div className="info-item">
                  <span className="info-label">⭐ {t.plp}</span>
                  <span className="info-value">90,83 / Predikat A</span>
                </div>
              </div>
            </div>

            <div className="about-tags">
              {['Desainer Grafis', 'Web Developer', 'Kepala Departemen', 'Fast Learner'].map((tag, i) => (
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
