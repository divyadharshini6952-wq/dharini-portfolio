import React, { useState } from 'react';
import { 
  Code, 
  FileCode, 
  Atom, 
  Terminal, 
  Cpu, 
  Coffee, 
  Database, 
  GitBranch, 
  Binary, 
  Lightbulb, 
  Users,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { skills, skillCategories } from '../data/portfolioData';

// Map icon string to Lucide icon
const iconMap = {
  'code': Code,
  'file-code': FileCode,
  'atom': Atom,
  'terminal': Terminal,
  'cpu': Cpu,
  'coffee': Coffee,
  'database': Database,
  'git-branch': GitBranch,
  'binary': Binary,
  'lightbulb': Lightbulb,
  'users': Users
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Layers size={14} />
          <span>Technical Expertise</span>
        </div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Competencies</span>
        </h2>
        <p className="section-subtitle">
          A balanced technical skill set encompassing modern frontend development, certified object-oriented programming,
          scripting, and structured database management.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tab-filter">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            id={`skill-filter-${cat.id}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((sk, index) => {
          const IconComp = iconMap[sk.icon] || Code;
          return (
            <div key={index} className="glass-card skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap" style={{ color: sk.color }}>
                  <IconComp size={24} />
                </div>
                <span className="skill-badge">{sk.badge}</span>
              </div>

              <div>
                <div className="skill-name">{sk.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                    {sk.category}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                    {sk.level}%
                  </span>
                </div>
                <div className="skill-progress-bar-bg">
                  <div
                    className="skill-progress-bar-fill"
                    style={{
                      width: `${sk.level}%`,
                      background: `linear-gradient(90deg, ${sk.color}, var(--primary-cyan))`
                    }}
                  />
                </div>
              </div>

              <p className="skill-desc">{sk.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
