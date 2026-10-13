import React, { useState } from 'react';
import { 
  FolderGit2, 
  Users, 
  Wallet, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUpRight, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import InteractiveWidgets from './InteractiveWidgets';
import ProjectModal from './ProjectModal';

const projectIconMap = {
  'users': Users,
  'wallet': Wallet,
  'shield-check': ShieldCheck
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <FolderGit2 size={14} />
          <span>Portfolio Works</span>
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications combining responsive web design, object-oriented software engineering,
          and algorithmic utilities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tab-filter">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          id="project-filter-all"
        >
          All Works ({projects.length})
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          id="project-filter-web"
        >
          Web Development
        </button>
        <button
          onClick={() => setFilter('python')}
          className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
          id="project-filter-python"
        >
          Python Systems
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filtered.map((proj) => {
          const IconComp = projectIconMap[proj.icon] || FolderGit2;
          return (
            <div key={proj.id} className="glass-card project-card">
              <div className="project-card-header">
                <div
                  className="project-icon-box"
                  style={{
                    background: proj.category === 'web'
                      ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                      : 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                  }}
                >
                  <IconComp size={26} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: proj.category === 'web' ? 'var(--primary-cyan)' : 'var(--primary-purple)'
                  }}
                >
                  {proj.category === 'web' ? 'Frontend Web' : 'Python Utility'}
                </span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.shortDesc}</p>

                <div className="project-tech-tags">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  id={`view-details-${proj.id}`}
                >
                  <Info size={15} />
                  <span>View Details</span>
                </button>

                <a
                  href="#interactive-playground"
                  className="btn btn-outline"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  title="Try live prototype in the Interactive Lab below"
                >
                  <span>Interactive Lab</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Lab Widget */}
      <InteractiveWidgets />

      {/* Deep-dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
