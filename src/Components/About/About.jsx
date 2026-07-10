import React from 'react';

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container">
        <span className="section-eyebrow">01 // Profile</span>
        <h2 className="section-title">About Me<span>.</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a results-driven Full Stack Software Engineer passionate about developing high-performance, user-centric web applications and robust cloud microservices.
            </p>
            <p>
              With practical experience scaling secure RESTful APIs, implementing dynamic client-side state models, and configuring cloud deployment pipelines, I focus on writing clean, modular, and maintainable code.
            </p>
            <p>
              I thrive in agile cross-functional environments, bridging modern user-interface design systems with scalable server architectures. I leverage data-driven methodologies and emerging technologies to deliver production-grade products that solve real-world problems.
            </p>
            {/* <a href="assets/waruni-gunasena-cv.pdf" download className="btn" aria-label="Download Waruni Gunasena's CV">
              <span>Download CV</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a> */}
          </div>

          <div className="about-stats">
            <div className="stat-tile">
              <div className="stat-number">1.5+</div>
              <div className="stat-label">Years of Experience</div>
              <div className="stat-sub">Full Stack & API engineering</div>
            </div>
            <div className="stat-tile">
              <div className="stat-number">BSc(Hons)</div>
              <div className="stat-label">Information Technology </div>
              <div className="stat-sub">Second Upper | University of Moratuwa</div>
            </div>
            {/* <div className="stat-tile">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-sub">Deployed web, mobile & cloud apps</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
