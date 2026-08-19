import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

// Fixed positions for floating background stars
const SPACE_ELEMENTS = [
  { emoji: '🪐', left: 4, top: 12, size: 36, dur: 7, delay: 0 },
  { emoji: '🌙', left: 93, top: 8, size: 28, dur: 5, delay: 0.5 },
  { emoji: '✨', left: 16, top: 78, size: 22, dur: 4, delay: 1 },
  { emoji: '🚀', left: 58, top: 6, size: 26, dur: 6, delay: 0.8 },
  { emoji: '☄️', left: 2, top: 48, size: 24, dur: 5.5, delay: 1.5 },
  { emoji: '🛸', left: 89, top: 42, size: 32, dur: 7, delay: 0.2 },
  { emoji: '⭐', left: 28, top: 18, size: 18, dur: 4.5, delay: 2 },
  { emoji: '✨', left: 52, top: 60, size: 20, dur: 3.5, delay: 1.2 },
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
        delay: i * 0.18,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="hero" id="home">
      {/* Background Animated Neon Orbs */}
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>

      {/* Floating Emoji Stars */}
      {SPACE_ELEMENTS.map((el, i) => (
        <motion.div
          key={i}
          className="floating-star"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            fontSize: `${el.size}px`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.4, 0.85, 0.4],
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

      {/* Decorative Space Animation Elements (Placed in background corners) */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/saturnus tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="hero-anim-saturnus"
        animate={{
          y: [0, -22, 0],
          rotate: [0, 6, -6, 0],
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
          y: [0, 18, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <div className="hero-container container">
        {/* Left: Introduction & Typography */}
        <div className="hero-content">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            Available for Work & Projects
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
            className="name"
          >
            <span className="name-white">YUNIAR</span>
            <br />
            <span className="name-glow">QONITA</span>
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
            className="hero-stats glass-panel"
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
              <span className="stat-label">IPK / GPA</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Pas Foto with Cyberpunk / Neon Glass Ring */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="photo-ring-outer">
            <div className="photo-ring-inner">
              <div className="photo-frame">
                <img
                  src={`${import.meta.env.BASE_URL}assets/Pas Foto YuniarQonita.png`}
                  alt="Yuniar Qonita"
                  className="hero-photo-img"
                />
              </div>
            </div>
          </div>

          {/* Floating Neon Badges */}
          <motion.div
            className="floating-badge badge-design"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🎨 Graphic Designer
          </motion.div>
          <motion.div
            className="floating-badge badge-web"
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            💻 Web Developer
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
