import React from 'react';

export default function Recommendations() {
  const testimonials = [
    {
      text: "\"It is my absolute pleasure to recommend Waruni, whom I had the privilege of mentoring during her Level 2 project at the Faculty of IT, University of Moratuwa. Waruni's teamwork skills are truly outstanding. Throughout the project, she seamlessly collaborated with her team members, fostering a positive and productive working environment. Her ability to listen, communicate effectively, and value diverse perspectives significantly contributed to the success of the project. Waruni consistently demonstrated her dedication to teamwork by actively engaging in discussions, respecting others' ideas, and finding common ground to overcome challenges. Her exceptional interpersonal skills and the ease with which she builds strong working relationships make her an invaluable asset in any team setting.\"",
      name: "Nishan Wickramarathna",
      role: "Associate Technical Lead · Xeynergy",
      initials: "NP"
    }
  ];

  return (
    <section id="recommendations" className="reveal">
      <div className="container">
        <span className="section-eyebrow">06 // Endorsements</span>
        <h2 className="section-title">Testimonials<span>.</span></h2>
        <div className="recommendations-slider">
          {testimonials.map((item, index) => (
            <div className="rec-card" key={index}>
              <svg className="rec-quote-icon" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
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
