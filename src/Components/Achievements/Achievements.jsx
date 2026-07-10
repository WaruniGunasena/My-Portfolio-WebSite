import React from 'react';

export default function Achievements() {
  const achievementsList = [
    {
      title: "Winner (Best UI/UX Design Category)",
      desc: "Awarded first place among 60 teams for accessibility standards compliance and stellar interface interactions.",
      issuer: "National Hackathon 2025",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: "AWS Certified Cloud Practitioner",
      desc: "Validation of cloud security, core computing services, VPC structures, serverless architecture, and cost models.",
      issuer: "Amazon Web Services",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Top 5% Contributor Award",
      desc: "Acknowledged for contributing highly stable component designs and documentation refactoring patches.",
      issuer: "Open Source Hackfest",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="reveal">
      <div className="container">
        <span className="section-eyebrow">05 // Recognition</span>
        <h2 className="section-title">Certifications &amp; Awards<span>.</span></h2>

        <div className="achievements-container">
          {achievementsList.map((item, index) => (
            <div className="achievement-row" key={index}>
              <div className="achievement-info">
                <div className="achievement-icon-wrapper">
                  {item.icon}
                </div>
                <div className="achievement-details">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
              <span className="achievement-issuer">{item.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
