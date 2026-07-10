import React from 'react';

export default function Skills() {
  const categories = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      name: "Frontend Systems",
      badges: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "HTML5 / CSS3", "Tailwind CSS"]
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      name: "Backend & Services",
      badges: ["Node.js", "Express.js", "RESTful APIs", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a6 6 0 0 0 0-12z"></path>
        </svg>
      ),
      name: "Cloud & Infrastructure",
      badges: ["AWS (S3, EC2, Lambda)", "Docker", "GitHub Actions CI/CD", "Vercel & Netlify", "Linux Systems", "Git / Version Control"]
    }
  ];

  return (
    <section id="skills" className="reveal">
      <div className="container">
        <span className="section-eyebrow">02 // Stack</span>
        <h2 className="section-title">Technical Expertise<span>.</span></h2>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <div className="skills-category" key={index}>
              <h3>
                {cat.icon}
                {cat.name}
              </h3>
              <div className="skills-list">
                {cat.badges.map((badge, i) => (
                  <span className="badge" key={i}>{badge}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
