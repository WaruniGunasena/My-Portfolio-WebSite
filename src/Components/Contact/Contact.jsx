import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: connect to email backend later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <span className="section-eyebrow">07 // Connection</span>
        <h2 className="section-title">Reach me<span>.</span></h2>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="contact-info-block">
            <p>
              Hey! Thank you so much for your time!
              <br></br>
              <br></br>
              Feel free to drop me an email through this form if you want to contact me on any occassion.
            </p>

            <div className="contact-links">
              {/* Email */}
              <a href="warunigunasena12@gmail.com" className="contact-link-item" aria-label="Send an email to Waruni Gunasena">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="contact-label">Email</span>
                <span className="contact-value">warunigunasena12@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/warunigunasena/" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="Visit Waruni Gunasena's LinkedIn profile">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="contact-label">Linkedin</span>
                <span className="contact-value">/in/warunigunasena</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/WaruniGunasena" target="_blank" rel="noopener noreferrer" className="contact-link-item" aria-label="Visit Waruni Gunasena's GitHub profile">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <span className="contact-label">Github</span>
                <span className="contact-value">/WaruniGunasena</span>
              </a>
            </div>
          </div>

          {/* Form panel */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Project collaboration inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Describe your project requirements or thoughts here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" id="form-submit">
              <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
              {!submitted && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
