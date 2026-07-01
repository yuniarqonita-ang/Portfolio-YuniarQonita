import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { FiSun, FiMoon, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.experience, href: '#experience' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="logo">
          Yuniar<span>.</span>
        </a>

        <div className="nav-controls-desktop">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <button onClick={toggleLanguage} className="icon-btn" aria-label="Toggle Language">
              <FiGlobe /> <span>{language.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme">
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <button onClick={toggleLanguage} className="icon-btn">
            <FiGlobe /> <span>{language === 'id' ? 'English' : 'Bahasa Indonesia'}</span>
          </button>
          <button onClick={toggleTheme} className="icon-btn">
            {theme === 'light' ? <><FiMoon /> Dark Mode</> : <><FiSun /> Light Mode</>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
