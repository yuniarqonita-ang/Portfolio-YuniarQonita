import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

// Fixed positions for floating emoji elements — no real photos here
const SPACE_ELEMENTS = [
  { emoji: '🪐', left: 5, top: 12, size: 38, dur: 7, delay: 0 },
  { emoji: '🌙', left: 92, top: 8, size: 30, dur: 5, delay: 0.5 },
  { emoji: '✨', left: 18, top: 75, size: 22, dur: 4, delay: 1 },
  { emoji: '🚀', left: 60, top: 5, size: 28, dur: 6, delay: 0.8 },
  { emoji: '☄️', left: 3, top: 45, size: 26, dur: 5.5, delay: 1.5 },
  { emoji: '🛸', left: 88, top: 40, size: 34, dur: 7, delay: 0.2 },
  { emoji: '⭐', left: 30, top: 20, size: 18, dur: 4.5, delay: 2 },
  { emoji: '✨', left: 55, top: 55, size: 20, dur: 3.5, delay: 1.2 },
  { emoji: '💫', left: 75, top: 78, size: 24, dur: 6, delay: 0.6 },
  { emoji: '🌟', left: 45, top: 88, size: 20, dur: 4, delay: 1.8 },
];

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].hero;

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="hero" id="home">
      {/* Animated Background Orbs */}
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>

      {/* Floating Emoji Space Elements */}
      {SPACE_ELEMENTS.map((el, i) => (
        <motion.div
          key={i}
          className="floating-star"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            fontSize: `${el.size}px`,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: el.dur,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          {el.emoji}
        </motion.div>
      ))}

      {/* Floating Space Animation Elements (Saturnus & Kristal) in empty areas */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/saturnus tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="hero-anim-saturnus"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 6, -6, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/kristal tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="hero-anim-kristal"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            Available for Work
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="greeting"
          >
            {t.greeting}
          </motion.p>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="name custom-unique-font"
          >
            <motion.span
              animate={{
                rotate: [0, -3, 3, -3, 0],
                scale: [1, 1.04, 1, 1.04, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              YUNIAR
            </motion.span>
            <br />
            <motion.span
              className="name-glow"
              animate={{
                rotate: [0, 3, -3, 3, 0],
                scale: [1, 1.06, 1, 1.06, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              QONITA
            </motion.span>
          </motion.h1>

          <motion.h2
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="role"
          >
            {t.role}
          </motion.h2>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="description"
          >
            {t.description}
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-actions"
          >
            <a
              href={`${import.meta.env.BASE_URL}assets/01_CV_Sertifikat_Ijazah_KTP/CV_Yuniar_Qonita.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiDownload /> {t.downloadCV}
            </a>
            <a href="#contact" className="btn-outline">
              <FiMail /> {t.contactMe}
            </a>
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">{language === 'id' ? 'Proyek Desain' : 'Design Works'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">{language === 'id' ? 'Sertifikat' : 'Certificates'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">3.64</span>
              <span className="stat-label">GPA</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Right: Animated Name Card instead of photo */}
        <motion.div
          className="hero-namecard-wrapper"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero-namecard glass-panel">
            <motion.div
              className="namecard-orb"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="namecard-initials">YQ</div>
            <div className="namecard-title">Yuniar Qonita</div>
            <div className="namecard-subtitle">{t.role}</div>
            <div className="namecard-badges">
              <span className="namecard-badge">🎨 Graphic Designer</span>
              <span className="namecard-badge">💻 Web Developer</span>
              <span className="namecard-badge">✅ BNSP Certified</span>
            </div>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className="floating-badge badge-design"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🎨 Graphic Designer
          </motion.div>
          <motion.div
            className="floating-badge badge-web"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            💻 Web Developer
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
