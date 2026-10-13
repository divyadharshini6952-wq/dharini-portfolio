import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, FileText, Mail, Phone, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="nav-avatar-ring">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="nav-avatar-img"
                />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                  {personalInfo.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', fontWeight: 600 }}>
                  Computer Science Engineer • Web Developer
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button
                onClick={onOpenResume}
                style={{ color: 'var(--primary-cyan)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <FileText size={15} />
                <span>Resume</span>
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>Crafted with passion for engineering & modern web design</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top of page"
        id="back-to-top-btn"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
