import React from 'react';
import { FiInstagram, FiLinkedin, FiGithub, FiHeart, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <FiMail />,
      href: 'mailto:yuniarqonita@gmail.com',
      label: 'Email',
      ariaLabel: 'Send Email',
      color: '#00f0ff',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/4n6_q0n1t4',
      label: 'Instagram',
      ariaLabel: 'Instagram',
      color: '#e1306c',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/yuniarqonita',
      label: 'LinkedIn',
      ariaLabel: 'LinkedIn',
      color: '#0077b5',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/yuniarqonita-ang',
      label: 'GitHub',
      ariaLabel: 'GitHub',
      color: '#f5f5f5',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <motion.div
              className="footer-logo"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Yuniar<span className="logo-accent">.</span>
            </motion.div>

            <motion.div
              className="footer-socials"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.ariaLabel}
                  className="footer-social-link"
                  style={{ '--s-color': s.color }}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  title={s.label}
                >
                  <span className="footer-social-icon">{s.icon}</span>
                  <span className="footer-social-label">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {currentYear} Yuniar Qonita. All Rights Reserved.
            </p>
            <p className="footer-made">
              Made with <FiHeart className="heart-icon" /> in Tegal, Indonesia
            </p>
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Elegant peeking transparent profile photo at the bottom right */}
      <motion.div 
        className="footer-profile-peek"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img src={`${import.meta.env.BASE_URL}assets/Foto_Bottom_Transparent.png`} alt="Yuniar Qonita" />
      </motion.div>
    </footer>
  );
};

export default Footer;
