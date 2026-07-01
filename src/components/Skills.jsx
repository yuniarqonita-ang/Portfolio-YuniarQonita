import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { FiPenTool, FiCpu, FiDatabase, FiUsers, FiGlobe } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].skills;

  // Floating skill icons
  const skillIcons = ['⚡', '🎯', '💪', '🧠', '🎨', '🔧', '📊', '🌟'];

  const skillCategories = [
    {
      title: t.design,
      icon: <FiPenTool />,
      color: 'var(--accent-purple)',
      skills: ['Canva', 'CorelDRAW', 'Desain Grafis', 'Desain Logo', 'Desain Kemasan', 'Desain Banner & Poster', 'Desain Merchandise'],
    },
    {
      title: t.web,
      icon: <FiCpu />,
      color: 'var(--accent-color)',
      skills: ['Troubleshooting IT', 'Diagnosa Sistem Operasi', 'Pengembangan Aplikasi Back Office', 'Dukungan Teknis Pengguna'],
    },
    {
      title: t.uiux,
      icon: <FiDatabase />,
      color: '#00e5ff',
      skills: ['Microsoft Office (Word, Excel, PowerPoint)', 'Google Forms', 'SmartPLS', 'ANATES', 'Pengolahan Data Statistik', 'Survei Lapangan'],
    },
    {
      title: t.soft,
      icon: <FiUsers />,
      color: 'var(--accent-pink)',
      skills: ['Kepemimpinan', 'Komunikasi Efektif', 'Perencanaan Strategis', 'Manajemen Organisasi', 'Pemecahan Masalah', 'Manajemen Waktu', 'Kerja Tim'],
    },
    {
      title: 'Bahasa',
      icon: <FiGlobe />,
      color: '#ff6b35',
      skills: ['Bahasa Indonesia — Native/Fasih (10/10)'],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
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

        {/* Floating Skill Icons */}
        {skillIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="skill-floating-icon"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: `${Math.random() * 15 + 18}px`,
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 20, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              drag="x"
              dragConstraints={{ left: -10, right: 10 }}
              dragElastic={0.1}
            >
              <div className="skill-icon-wrapper" style={{ '--icon-color': category.color }}>
                {category.icon}
              </div>
              <h3 className="skill-title" style={{ color: category.color }}>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                  >
                    <span className="skill-dot" style={{ background: category.color }}></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
