import React from 'react';

export default function Experience() {
  const jobs = [
    {
      date: "Jan 2026 — Present",
      company: "Self-Employed",
      role: "Freelance Software Engineer",
      desc: "Delivering high-quality software development services as a freelancer, providing clients with robust, custom solutions tailored to their specific business needs. Specializing in full-stack development with a focus on modern technologies and best practices.",
      tags: ["React", "Springboot", "MySQL", "RESTful APIs", "GIT"]
    },
    {
      date: "Mar 2024 — Dec 2024",
      company: "Agrithmics",
      role: "Software Engineer Intern",
      desc: "Developed and optimized RESTful APIs for report generation across multiple screens, improving data processing efficiency. Led the payroll module development cycle, coordinating feature releases and ensuring functionality validation with RabbitMQ.Designed and implemented responsive front-end interfaces, resolving critical bugs and enhancing UI/UX. Improved software reliability by conducting unit testing, debugging, and refining core application logic.",
      tags: [".NET", "React.js", "MySQL", "Tailwind CSS", "GIT", "RabbitMQ", "GitHub Actions"]
    }
  ];

  return (
    <section id="experience" className="reveal">
      <div className="container">
        <h2 className="section-title">Professional Experience<span>.</span></h2>

        <div className="timeline">
          {jobs.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <span className="timeline-date">{job.date}</span>
                <span className="timeline-company">{job.company}</span>
              </div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <p>{job.desc}</p>
                <div className="timeline-tags">
                  {job.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
