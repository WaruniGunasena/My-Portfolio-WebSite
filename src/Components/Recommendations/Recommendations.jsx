import React from 'react';

export default function Recommendations() {
  const testimonials = [
    {
      text: "Waruni is an exceptionally skilled engineer who brings critical problem-solving skills to the team. She built our main client dashboard pipeline, decreasing UI rendering cycles and drastically cutting API bundle loading lags.",
      name: "Nihal Perera",
      role: "Lead System Architect · InnovateTech Labs",
      initials: "NP"
    },
    {
      text: "A pleasure to work with in sprints. Waruni demonstrates solid backend logic capability and bridges design grids easily. Her attention to clean semantic syntax sets a great standard for development.",
      name: "Sarah Jenkins",
      role: "Lead Project Manager · CloudSolutions Corp",
      initials: "SJ"
    }
  ];

  return (
    <section id="recommendations" className="reveal">
      <div className="container">
        <span className="section-eyebrow">07 // Endorsements</span>
        <h2 className="section-title">Testimonials<span>.</span></h2>

        <div className="recommendations-slider">
          {testimonials.map((item, index) => (
            <div className="rec-card" key={index}>
              <svg className="rec-quote-icon" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="rec-text">{item.text}</p>
              <div className="rec-author">
                <div className="rec-avatar">{item.initials}</div>
                <div className="rec-author-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
