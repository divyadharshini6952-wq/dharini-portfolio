import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ExternalLink,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
      showToast('Message sent successfully! Dharini will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <MessageSquare size={14} />
          <span>Contact & Collaboration</span>
        </div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle">
          Interested in discussing internship opportunities, engineering projects, or technical collaboration?
          I am eager to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Info Cards */}
        <div className="contact-info-list">
          {/* Email Card */}
          <div className="glass-card contact-method-card">
            <div className="contact-method-left">
              <div className="contact-icon-circle">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-label">Email Address</div>
                <div className="contact-val">{personalInfo.email}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="btn-icon-only"
                title="Copy Email Address"
                aria-label="Copy Email"
                id="copy-email-btn"
              >
                {copiedField === 'Email' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              </button>
              <a
                href={`mailto:${personalInfo.email}?subject=Opportunity Inquiry`}
                className="btn-icon-only"
                title="Open Mail Client"
                id="mail-to-link"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card contact-method-card">
            <div className="contact-method-left">
              <div className="contact-icon-circle" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-label">Phone / WhatsApp</div>
                <div className="contact-val">{personalInfo.phone}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="btn-icon-only"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
                id="copy-phone-btn"
              >
                {copiedField === 'Phone' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              </button>
              <a
                href={`tel:${personalInfo.rawPhone}`}
                className="btn-icon-only"
                title="Call Directly"
                id="call-phone-link"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card contact-method-card">
            <div className="contact-method-left">
              <div className="contact-icon-circle" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--primary-purple)' }}>
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-val">Trichy, Tamil Nadu, India</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{personalInfo.address}</div>
              </div>
            </div>
          </div>

          {/* Resume Quick Access Banner */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(99, 102, 241, 0.12))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '1.05rem' }}>
                Need a physical or PDF copy?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Download Dharini's verified resume and curriculum vitae.
              </div>
            </div>
            <button
              onClick={onOpenResume}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
              id="contact-resume-preview-btn"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="glass-card contact-form">
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-heading)' }}>
            Send a Message
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Fill out the form below to initiate communication or schedule an interview.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe / Hiring Manager"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. yourname@company.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Web Developer Role / Internship Opportunity"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Dharini, we reviewed your portfolio and would like to connect regarding..."
                className="form-textarea"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
              id="submit-contact-form-btn"
            >
              <Send size={18} />
              <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
