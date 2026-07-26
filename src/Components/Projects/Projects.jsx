import React from 'react';
import whiteboard_app from '../../images/whiteboard_app.png';
import expense_tracker from '../../images/expense_tracker.png';
import biogenHoldings from '../../images/biogenHoldings.png';

const projectList = [
  {
    num: "01",
    stack: ["React", "Spring Boot", "MSSQL"],
    title: "BioGenHoldings Inventory Management System",
    desc: "A real-time inventory management system developed for BioGenHoldings Pvt Ltd. Implements product and supplier management, sales representative sales tracking, and automatic inventory updates based on sales. Features analytical dashboards for both sales representatives and administrators, enabling data-driven business decisions.",
    link: [
      "https://github.com/WaruniGunasena/BioGenInventoryManagementSystem-frontend",
      "https://github.com/WaruniGunasena/BioGenInventoryManagementSystem-backend",
    ],
    image: biogenHoldings,
    color: "hsl(200, 85%, 60%)",
  },
  {
    num: "02",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
    title: "ExpenseTracker",
    desc: "A simple yet powerful web application that helps users record, categorize, and manage their daily expenses with ease. Featuring an intuitive interface, visual insights through charts, and the ability to add, edit, or delete transactions, it provides a clear overview of spending habits. Built with a modular full-stack architecture, the app is responsive, user-friendly, and designed for scalability.",
    link: "https://github.com/WaruniGunasena/ExpenseTracker",
    image: expense_tracker,
    color: "hsl(322, 85%, 65%)",
  },
  {
    num: "03",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Socket.io", "React.js"],
    title: "Real‑time Whiteboard Sharing App",
    desc: "A dynamic collaboration tool designed for interactive presentations and remote learning. A single user can draw or annotate on a shared whiteboard while multiple viewers watch the updates in real time, ensuring clear and synchronized visual communication. The built-in chat feature allows viewers to ask questions or provide feedback instantly, creating an engaging and interactive environment.",
    link: "https://github.com/WaruniGunasena/Real-time-whiteboard-sharing-App",
    image: whiteboard_app,
    color: "hsl(270, 85%, 65%)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <span className="section-eyebrow">04 // Code</span>
        <h2 className="section-title">Featured Projects<span>.</span></h2>

        <div className="projects-grid">
          {projectList.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.num}
                className={`project-card ${isEven ? 'project-even' : 'project-odd'}`}
                style={{ '--proj-color': project.color }}
              >
                {/* Image Panel */}
                <div className="project-img-container">
                  <a
                    href={Array.isArray(project.link) ? project.link[0] : project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-img-link"
                  >
                    <div className="project-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                      <div className="project-img-overlay" />
                    </div>
                  </a>
                </div>

                {/* Info Panel */}
                <div className="project-content">
                  <span className="project-number">{project.num}</span>
                  <h3 className="project-title">
                    <a
                      href={Array.isArray(project.link) ? project.link[0] : project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="project-desc-card">
                    <p className="project-desc">{project.desc}</p>
                  </div>

                  <div className="project-tags">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="project-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {Array.isArray(project.link) ? (
                      project.link.map((url, i) => (
                        <a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label={`View ${i === 0 ? 'Frontend' : 'Backend'} Source for ${project.title}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          {i === 0 ? 'Frontend' : 'Backend'}
                        </a>
                      ))
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        aria-label={`View Source for ${project.title} on GitHub`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
