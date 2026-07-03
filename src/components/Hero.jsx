import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

// Fixed positions for space elements (so they don't re-randomize on re-render)
const SPACE_ELEMENTS = [
  { emoji: '🪐', left: 4, top: 14, size: 34, dur: 7, delay: 0 },
  { emoji: '🌙', left: 94, top: 10, size: 28, dur: 5, delay: 0.5 },
  { emoji: '✨', left: 7, top: 82, size: 18, dur: 4, delay: 1 },
  { emoji: '🌌', left: 92, top: 78, size: 34, dur: 8, delay: 0.3 },
  { emoji: '🚀', left: 76, top: 6, size: 24, dur: 6, delay: 0.8 },
  { emoji: '☄️', left: 3, top: 50, size: 22, dur: 5.5, delay: 1.5 },
  { emoji: '🛸', left: 95, top: 43, size: 28, dur: 7, delay: 0.2 },
  { emoji: '🌍', left: 50, top: 92, size: 28, dur: 9, delay: 0.7 },
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

      {/* Fixed-position Space Elements — tidak random tiap render */}
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

      <div className="hero-container container">
        {/* Sticker — di pojok kanan bawah section hero, tidak nutupin teks */}
        <motion.div
          className="hero-sticker"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/1_20260613_204618_0000.png`}
            alt="Yuniar Sticker"
          />
        </motion.div>

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
              <span className="stat-label">Proyek Desain</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">Sertifikat</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">3.64</span>
              <span className="stat-label">IPK</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="image-ring-outer">
            <div className="image-ring-inner">
              <div className="image-blob">
                <img
                  src={`${import.meta.env.BASE_URL}assets/Pas Foto YuniarQonita.png`}
                  alt="Yuniar Qonita"
                  className="hero-image"
                />
              </div>
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
