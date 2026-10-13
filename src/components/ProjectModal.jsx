import React from 'react';
import { X, CheckCircle, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--primary-cyan)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Project Deep Dive
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)', marginTop: '0.2rem' }}>
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="btn-icon-only"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {project.fullDesc}
          </p>

          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--primary-cyan)" />
            <span>Key Features & Innovations</span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {project.features.map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={18} color="var(--primary-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{feature}</span>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="var(--primary-purple)" />
            <span>Technologies & Tools Employed</span>
          </h4>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-pill)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-heading)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#interactive-playground"
            onClick={onClose}
            className="btn btn-primary"
            style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
          >
            <span>Try Live Interactive Lab</span>
            <ExternalLink size={16} />
          </a>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
