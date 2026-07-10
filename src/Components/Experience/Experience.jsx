import React from 'react';

export default function Experience() {
  const jobs = [
    {
      date: "Jan 2025 — Present",
      company: "InnovateTech Labs",
      role: "Associate Software Engineer",
      desc: "Responsible for designing secure, high-throughput Node.js microservices and building interactive analytics dashboards. Integrated core financial payment gateways and restructured app state management patterns resulting in 25% performance improvements.",
      tags: ["React", "Node.js", "Redux", "AWS Lambda", "PostgreSQL"]
    },
    {
      date: "Jul 2024 — Dec 2024",
      company: "CloudSolutions Corp",
      role: "Software Engineer Intern",
      desc: "Collaborated in an agile team of 6 engineers to maintain client-facing React web platforms. Implemented reusable responsive UI widgets, optimized nested SQL queries, and configured automatic deployment lint checks on GitHub Actions pipelines.",
      tags: ["JavaScript", "React", "Tailwind CSS", "GitHub Actions", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="reveal">
      <div className="container">
        <span className="section-eyebrow">03 // Milestones</span>
        <h2 className="section-title">Professional Journey<span>.</span></h2>

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
