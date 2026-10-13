import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle, 
  Award, 
  HeartHandshake, 
  Target,
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "Strong Academic Record",
      desc: "Achieved 85% aggregate up to the 3rd semester in Computer Science Engineering at K. Ramakrishnan College of Technology.",
      icon: Award,
      color: "var(--primary-cyan)"
    },
    {
      title: "Certified in C++ & Java",
      desc: "Comprehensive understanding of Object-Oriented Programming (OOP), Data Structures, and algorithm formulation.",
      icon: CheckCircle,
      color: "var(--primary-purple)"
    },
    {
      title: "Web & Python Developer",
      desc: "Hands-on experience developing student collaboration systems, expense management platforms, and cybersecurity tools.",
      icon: Sparkles,
      color: "var(--primary-pink)"
    },
    {
      title: "Team Spirit & Social Impact",
      desc: "Dedicated volunteer in the College NSS Unit and active football player, cultivating resilience and team collaboration.",
      icon: HeartHandshake,
      color: "var(--primary-emerald)"
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} />
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Driven by <span className="gradient-text">Curiosity & Innovation</span>
        </h2>
        <p className="section-subtitle">
          A dedicated Computer Science Engineer equipped with software engineering fundamentals,
          web development skills, and a commitment to lifelong learning.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Narrative & Objective */}
        <div className="glass-card about-card">
          <h3 className="about-lead">
            Aspiring Software Developer striving to create high-impact digital solutions.
          </h3>
          
          <p>
            I am a Computer Science Engineering student at{' '}
            <strong style={{ color: 'var(--text-heading)' }}>K. Ramakrishnan College of Technology (KRCT), Trichy</strong>,
            affiliated with Anna University. My journey in technology is centered on creating intuitive web interfaces,
            writing clean, efficient backend scripts in Python, and solving computational problems using C++ and Java.
          </p>

          <p>
            Beyond academia, I thrive in collaborative environments — actively participating in hackathons, departmental coding
            contests, and emerging tech workshops. As an active football player and college NSS volunteer, I bring discipline,
            adaptability, and strong communication skills to every endeavor.
          </p>

          <div className="objective-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontWeight: 700, color: 'var(--text-heading)' }}>
              <Target size={18} color="var(--primary-indigo)" />
              <span>Career Objective</span>
            </div>
            "{personalInfo.careerObjective}"
          </div>
        </div>

        {/* Right Column: Quick Facts & Core Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="info-cards-grid">
            <div className="info-pill-card">
              <GraduationCap className="info-pill-icon" size={24} />
              <div>
                <div className="info-pill-title">Degree</div>
                <div className="info-pill-val">B.E. Computer Science</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Anna University (2025–2029)</div>
              </div>
            </div>

            <div className="info-pill-card">
              <MapPin className="info-pill-icon" size={24} />
              <div>
                <div className="info-pill-title">Location</div>
                <div className="info-pill-val">Trichy, Tamil Nadu</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Valady, Lalgudi</div>
              </div>
            </div>

            <div className="info-pill-card">
              <Mail className="info-pill-icon" size={24} />
              <div>
                <div className="info-pill-title">Email</div>
                <div className="info-pill-val" style={{ fontSize: '0.85rem' }}>{personalInfo.email}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Contact</div>
              </div>
            </div>

            <div className="info-pill-card">
              <Phone className="info-pill-icon" size={24} />
              <div>
                <div className="info-pill-title">Phone</div>
                <div className="info-pill-val">{personalInfo.phone}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call or WhatsApp</div>
              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)' }}>Key Strengths & Highlights</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: item.color
                    }}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>{item.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
