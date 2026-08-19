import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiExternalLink, FiX, FiFileText, FiCheckCircle } from 'react-icons/fi';
import './CVModal.css';

const CVModal = ({ isOpen, onClose, language = 'id' }) => {
  const isID = language === 'id';

  const baseUrl = import.meta.env.BASE_URL;
  const cvIdUrl = `${baseUrl}assets/01_CV_Sertifikat_Ijazah_KTP/CV_Yuniar_Qonita_ID.pdf`;
  const cvEnUrl = `${baseUrl}assets/01_CV_Sertifikat_Ijazah_KTP/CV_Yuniar_Qonita_EN.pdf`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cv-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-modal-content glass-panel"
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="cv-modal-close" onClick={onClose} aria-label="Close modal">
              <FiX />
            </button>

            {/* Modal Header */}
            <div className="cv-modal-header">
              <div className="cv-modal-icon">
                <FiFileText />
              </div>
              <h3 className="cv-modal-title">
                {isID ? 'Unduh Curriculum Vitae (CV)' : 'Download Curriculum Vitae (CV)'}
              </h3>
              <p className="cv-modal-desc">
                {isID
                  ? 'Format ATS Harvard Profesional (Lengkap 2 Halaman). Silakan pilih versi bahasa yang Anda butuhkan:'
                  : 'Professional Harvard ATS Standard (Complete 2 Pages). Please choose your preferred language:'}
              </p>
            </div>

            {/* Options Grid */}
            <div className="cv-options-grid">
              {/* Option 1: Bahasa Indonesia */}
              <div className="cv-option-card cv-option-id">
                <div className="cv-card-top">
                  <span className="cv-flag">🇮🇩</span>
                  <span className="cv-badge">
                    <FiCheckCircle /> ATS Harvard
                  </span>
                </div>
                <h4 className="cv-card-title">Bahasa Indonesia</h4>
                <p className="cv-card-subtitle">
                  {isID
                    ? 'Versi lengkap dengan seluruh riwayat pendidikan, pekerjaan di PPID PKTJ, magang, organisasi, dan keahlian.'
                    : 'Complete version with education, current work at PPID PKTJ, internship, leadership, and skill sets.'}
                </p>
                <div className="cv-card-meta">
                  <span>📄 2 Halaman</span>
                  <span>⚡ ATS Friendly</span>
                </div>
                <div className="cv-card-actions">
                  <a
                    href={cvIdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-btn-view"
                  >
                    <FiExternalLink /> {isID ? 'Lihat Online' : 'Preview'}
                  </a>
                  <a
                    href={cvIdUrl}
                    download="CV_Yuniar_Qonita_ID.pdf"
                    className="cv-btn-download"
                  >
                    <FiDownload /> {isID ? 'Unduh PDF' : 'Download'}
                  </a>
                </div>
              </div>

              {/* Option 2: English Version */}
              <div className="cv-option-card cv-option-en">
                <div className="cv-card-top">
                  <span className="cv-flag">🇬🇧</span>
                  <span className="cv-badge">
                    <FiCheckCircle /> Harvard ATS
                  </span>
                </div>
                <h4 className="cv-card-title">English Version</h4>
                <p className="cv-card-subtitle">
                  {isID
                    ? 'Versi bahasa Inggris standar profesional internasional, ideal untuk rekrutmen global dan korporasi multinasional.'
                    : 'International professional standard English version, optimized for global recruitment and multinational firms.'}
                </p>
                <div className="cv-card-meta">
                  <span>📄 2 Pages</span>
                  <span>⚡ ATS Friendly</span>
                </div>
                <div className="cv-card-actions">
                  <a
                    href={cvEnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-btn-view"
                  >
                    <FiExternalLink /> {isID ? 'Lihat Online' : 'Preview'}
                  </a>
                  <a
                    href={cvEnUrl}
                    download="CV_Yuniar_Qonita_EN.pdf"
                    className="cv-btn-download"
                  >
                    <FiDownload /> {isID ? 'Unduh PDF' : 'Download'}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
