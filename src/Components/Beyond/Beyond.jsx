import React from 'react';

export default function Beyond() {
  const interestsList = [
    {
      title: "UI/UX & Visual Art",
      desc: "Exploring minimalist layouts, typography spacing rules, and color psychology. Drawing inspiration from physical architecture designs.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: "Technical Writing",
      desc: "Authoring detailed structural design patterns guides, React hooks explainers, and CSS container queries tutorials on Medium and dev.to.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      title: "Hiking & Travel",
      desc: "Recharging by climbing mountain peaks, exploring nature trails, and taking photography walks around historical landscapes.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 22 22 22" />
          <polygon points="12 10 7 20 17 20" />
        </svg>
      )
    }
  ];

  return (
    <section id="beyond" className="reveal">
      <div className="container">
        <span className="section-eyebrow">06 // Interests</span>
        <h2 className="section-title">Beyond the Code<span>.</span></h2>

        <div className="beyond-grid">
          {interestsList.map((interest, index) => (
            <div className="beyond-card" key={index}>
              <div className="beyond-img-container">
                {interest.icon}
                <div className="beyond-img-overlay"></div>
              </div>
              <div className="beyond-content">
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
