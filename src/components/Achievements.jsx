import React from 'react';
import { 
  Award, 
  Terminal, 
  Sparkles, 
  HeartHandshake, 
  Trophy, 
  CheckCircle, 
  Layout, 
  Database,
  Quote,
  UserCheck
} from 'lucide-react';
import { trainingAndCertifications, activitiesAndLeadership, personalInfo } from '../data/portfolioData';

const activityIconMap = {
  'terminal': Terminal,
  'sparkles': Sparkles,
  'heart-handshake': HeartHandshake,
  'trophy': Trophy
};

const certIconMap = {
  'layout': Layout,
  'database': Database,
  'award': Award,
  'check-circle': CheckCircle
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Award size={14} />
          <span>Certifications & Leadership</span>
        </div>
        <h2 className="section-title">
          Achievements & <span className="gradient-text">Activities</span>
        </h2>
        <p className="section-subtitle">
          Verified technical certifications, workshop engagements, competitive hackathons,
          and community service through NSS.
        </p>
      </div>

      {/* Part 1: Official Certifications & Training */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Award color="var(--primary-cyan)" size={22} />
          <span>Professional Training & Certifications</span>
        </h3>

        <div className="cert-grid">
          {trainingAndCertifications.map((item, idx) => {
            const IconComp = certIconMap[item.icon] || Award;
            return (
              <div key={idx} className="glass-card cert-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="cert-icon">
                    <IconComp size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(6, 182, 212, 0.12)',
                      color: 'var(--primary-cyan)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <div>
                  <h4 className="cert-title">{item.title}</h4>
                  <div className="cert-focus">{item.focus}</div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Co-Curricular & Extracurricular Activities */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Trophy color="var(--primary-purple)" size={22} />
          <span>Co-Curricular & Extracurricular Leadership</span>
        </h3>

        <div className="cert-grid">
          {activitiesAndLeadership.map((act, idx) => {
            const IconComp = activityIconMap[act.icon] || Sparkles;
            return (
              <div key={idx} className="glass-card cert-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    className="cert-icon"
                    style={{
                      background: 'rgba(236, 72, 153, 0.15)',
                      color: 'var(--primary-pink)'
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(236, 72, 153, 0.12)',
                      color: 'var(--primary-pink)'
                    }}
                  >
                    {act.category}
                  </span>
                </div>

                <div>
                  <h4 className="cert-title">{act.title}</h4>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {act.role}
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {act.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 3: Academic Endorsement & Department Reference */}
      <div
        className="glass-card"
        style={{
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          borderLeft: '5px solid var(--primary-cyan)',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-cyan)',
            flexShrink: 0
          }}
        >
          <Quote size={30} />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary-cyan)', fontWeight: 700, letterSpacing: '0.05em' }}>
            Academic Reference
          </div>
          <h4 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', margin: '0.3rem 0' }}>
            {personalInfo.reference.name}
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
            {personalInfo.reference.designation} • {personalInfo.reference.institution}
          </p>
          <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            "An enterprising student demonstrating solid programming acumen, disciplined academics, and commendable teamwork throughout computer science initiatives."
          </p>
        </div>
      </div>
    </section>
  );
}
