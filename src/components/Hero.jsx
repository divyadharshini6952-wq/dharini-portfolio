import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code, Cpu, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [currentSubtitleIdx, setCurrentSubtitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSubtitleIdx((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Dharini_Shrii_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section section-wrapper">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Available for Tech Opportunities & Internships</span>
          </div>

          <h1 className="hero-title">
            Hello, I'm <br />
            <span className="hero-highlight">{personalInfo.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <span>Specializing in</span>
            <span className="dynamic-role" key={currentSubtitleIdx}>
              {personalInfo.subtitles[currentSubtitleIdx]}
            </span>
          </div>

          <p className="hero-bio">
            Enterprising Computer Science Engineer from{' '}
            <strong style={{ color: 'var(--text-heading)' }}>K. Ramakrishnan College of Technology</strong>{' '}
            (Anna University) with an 85% academic record. Dedicated to building elegant web applications,
            mastering algorithms in C++ & Java, and solving practical real-world problems.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="hero-projects-btn">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button
              onClick={handleResumeDownload}
              className="btn btn-secondary"
              id="hero-download-resume-btn"
              title="Download Dharini's Resume (PDF)"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>

            <a href="#contact" className="btn btn-outline" id="hero-contact-btn">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-stats-row">
            {stats.map((st, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{st.value}</span>
                <span className="stat-label">{st.label}</span>
                <span className="stat-helper">{st.helper}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-column">
          <div className="hero-image-frame">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="hero-img"
              loading="eager"
            />

            {/* Floating Badges */}
            <div className="floating-badge badge-top-right animate-float">
              <div className="badge-icon" style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                <Code size={18} />
              </div>
              <div>
                <div style={{ color: 'var(--primary-cyan)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Expertise</div>
                <div>Web Dev & React</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="badge-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>
                <Award size={18} />
              </div>
              <div>
                <div style={{ color: 'var(--primary-purple)', fontSize: '0.72rem', textTransform: 'uppercase' }}>Certified</div>
                <div>C++, Java & Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
