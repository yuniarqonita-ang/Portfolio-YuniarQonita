import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiInstagram, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].contact;

  const socials = [
    { icon: <FiInstagram />, href: 'https://www.instagram.com/4n6_q0n1t4', label: 'Instagram', color: '#e1306c' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/yuniarqonita', label: 'LinkedIn', color: 'var(--accent-color)' },
    { icon: <FiGithub />, href: 'https://github.com/yuniarqonita-ang', label: 'GitHub', color: 'var(--text-color)' },
  ];

  return (
    <section className="section contact-section" id="contact">
      {/* Decorative Space Animation Elements */}
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/kristal tb 1.PNG`}
        alt=""
        aria-hidden="true"
        className="contact-anim-kristal"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.img
        src={`${import.meta.env.BASE_URL}assets/animasi/awan cuco tb.PNG`}
        alt=""
        aria-hidden="true"
        className="contact-anim-awan"
        animate={{
          x: [-15, 15, -15],
          y: [0, -10, 0],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
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

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-orb"></div>
            <h3 className="contact-tagline">
              {t.tagline}
            </h3>
            <p className="contact-body">
              {t.body}
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon"><FiMail /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">yuniarqonita@gmail.com</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><FiPhone /></div>
                <div>
                  <span className="detail-label">{language === 'id' ? 'Telepon' : 'Phone'}</span>
                  <span className="detail-value">+62 895-2673-4638</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><FiMapPin /></div>
                <div>
                  <span className="detail-label">{language === 'id' ? 'Lokasi' : 'Location'}</span>
                  <span className="detail-value">Tegal, Jawa Tengah, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.label}
                  style={{ '--s-color': s.color }}
                  whileHover={{ y: -4, scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper glass-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder=" " required />
                <label htmlFor="name">{t.name}</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email">{t.email}</label>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder=" " rows="5" required></textarea>
                <label htmlFor="message">{t.message}</label>
              </div>
              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiSend /> {t.send}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
