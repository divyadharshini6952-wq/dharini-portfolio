import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  CheckCircle, 
  GraduationCap, 
  Code,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, projects, skills } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'formatted'

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
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
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '900px', height: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <FileText size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                {personalInfo.name} — Curriculum Vitae
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Official Resume & Job Application Document
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="interactive-tabs" style={{ marginRight: '0.5rem' }}>
              <button
                onClick={() => setViewMode('pdf')}
                className={`tab-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('formatted')}
                className={`tab-btn ${viewMode === 'formatted' ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
              >
                Structured View
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
              id="resume-modal-download-btn"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="btn-icon-only"
              style={{ width: '38px', height: '38px' }}
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ padding: viewMode === 'pdf' ? '0' : '2rem', flex: 1, height: '100%' }}>
          {viewMode === 'pdf' ? (
            <div style={{ width: '100%', height: '100%', minHeight: '520px', background: '#1e293b' }}>
              <iframe
                src={`${personalInfo.resumePdfUrl}#view=FitH`}
                title="Dharini Shrii S Resume PDF"
                style={{ width: '100%', height: '100%', minHeight: '520px', border: 'none' }}
              />
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Header section in structured view */}
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heading)' }}>{personalInfo.name}</h2>
                <div style={{ color: 'var(--primary-cyan)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {personalInfo.degree} • {personalInfo.college}
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                  <span>📧 {personalInfo.email}</span>
                  <span>📱 {personalInfo.phone}</span>
                  <span>📍 {personalInfo.address}</span>
                </div>
              </div>

              {/* Career Objective */}
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-cyan)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Career Objective
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {personalInfo.careerObjective}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-cyan)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Educational Qualifications
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {educationList.map((edu) => (
                    <div key={edu.id} style={{ padding: '1rem', background: 'var(--bg-pill)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: 'var(--text-heading)' }}>{edu.course}</strong>
                        <span style={{ fontWeight: 700, color: '#10b981' }}>{edu.score}</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{edu.institution} ({edu.board})</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-cyan)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Projects Completed
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {projects.map((p) => (
                    <div key={p.id} style={{ padding: '1rem', background: 'var(--bg-pill)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{p.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--primary-purple)', margin: '0.2rem 0' }}>{p.techStack.join(' • ')}</div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{p.shortDesc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <a
            href={personalInfo.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            <ExternalLink size={15} />
            <span>Open in Full Tab</span>
          </a>
          <button
            onClick={handleDownload}
            className="btn btn-primary"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
          >
            <Download size={15} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
