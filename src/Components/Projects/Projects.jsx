import React from 'react';

export default function Projects() {
  const projectList = [
    {
      num: "01",
      stack: "Next.js · Chart.js · Tailwind",
      title: "FinTech Wallet Dashboard",
      desc: "An interactive, responsive financial analytics application visualizing real-time bank transfers, budget limits, card details, and multi-currency exchange charts.",
      link: "https://github.com/WaruniG"
    },
    {
      num: "02",
      stack: "Node.js · WebSockets · Redis",
      title: "CollabSpace API",
      desc: "A robust, secure real-time collaboration server supporting document state changes, chat lobby partitions, document locking, and automated session expiry caching.",
      link: "https://github.com/WaruniG"
    },
    {
      num: "03",
      stack: "React · MongoDB · Express",
      title: "Echo Learn Platform",
      desc: "An AI-assisted learning platform supporting responsive student login paths, courses scheduling grids, and personalized recommendation workflows.",
      link: "https://github.com/WaruniG"
    }
  ];

  return (
    <section id="projects" className="reveal">
      <div className="container">
        <span className="section-eyebrow">04 // Code</span>
        <h2 className="section-title">Featured Projects<span>.</span></h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-header">
                <span className="card-number">{project.num}</span>
                <span className="card-stack">{project.stack}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-link" 
                aria-label={`View Source for ${project.title} on GitHub`}
              >
                View Source
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
