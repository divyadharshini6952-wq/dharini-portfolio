import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <GraduationCap size={14} />
          <span>Academic Milestones</span>
        </div>
        <h2 className="section-title">
          Education & <span className="gradient-text">Qualifications</span>
        </h2>
        <p className="section-subtitle">
          A track record of academic consistency from secondary schooling to degree engineering
          at premier institutions.
        </p>
      </div>

      <div className="timeline">
        {educationList.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-dot">
              <GraduationCap size={13} color="var(--primary-cyan)" />
            </div>

            <div className="glass-card timeline-card">
              <div className="timeline-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span className="timeline-year">{edu.duration}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: edu.status === 'In Progress' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-pill)',
                      color: edu.status === 'In Progress' ? '#10b981' : 'var(--text-muted)'
                    }}
                  >
                    {edu.badge}
                  </span>
                </div>

                <div className="timeline-score">
                  <span>Score: </span>
                  <strong>{edu.score}</strong>
                </div>
              </div>

              <h3 className="timeline-title">{edu.course}</h3>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-cyan)', marginBottom: '0.4rem' }}>
                {edu.specialization}
              </div>

              <div className="timeline-institution">
                {edu.institution}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BookOpen size={14} />
                  <span>Affiliation: {edu.board}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </span>
              </div>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
