import React from 'react';
import uomPhoto from '../../images/uom.jpeg';
import schoolPhoto from '../../images/schoolPhoto.jpeg';

export default function About() {
  const educationList = [
    {
      title: "University of Moratuwa",
      desc: (
        <>
          I hold a B.Sc. (Hons) in Information Technology with a Second Class Upper division from the Faculty of IT,{" "}
          <a
            href="https://uom.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-link"
          >
            University of Moratuwa, Sri Lanka
          </a>
          , Alongside my studies, I served as the Batch Representative for Batch '20 in both my first and final years, leading student initiatives and coordinating with university administration. Additionally, I actively participated in university sports, representing Moratuwa in competitive athletics throughout my undergraduate journey.
        </>
      ),
      image: uomPhoto,
      alt: "University of Moratuwa Graduates",
      reverse: false
    },
    {
      title: "Sivali Central College",
      desc: (
        <>
          I did my A/Ls in the Biological Science stream at{" "}
          <a
            href="https://sivalicc.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-link"
          >
            Sivali Central College, Ratnapura
          </a>
          . Achieved A, B, and C passes in Chemistry, Biology, and Physics during my G.C.E. Advanced Level studies. Alongside my academic focus in the Science stream, I was an active participant in school sports, building strong discipline and teamwork skills.
        </>
      ),
      image: schoolPhoto,
      alt: "Sivali Central College",
      reverse: true
    }
  ];

  return (
    <section id="about" className="reveal">
      <div className="container">
        {/* <span className="section-eyebrow">01 // Profile</span> */}
        <h2 className="section-title">About Me<span>.</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a results-driven Full Stack Software Engineer passionate about transforming ideas into innovative digital experiences through clean code, thoughtful design, and continuous learning.
            </p>
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
          </div>
        </div>

        {/* Education Subsection */}
        <div className="education-subsection">
          <h3 className="education-title">Education</h3>
          <div className="education-grid">
            {educationList.map((edu, index) => (
              <div
                className={`education-card ${edu.reverse ? 'reverse' : ''}`}
                key={index}
              >
                <div className="education-img-container">
                  <img
                    src={edu.image}
                    alt={edu.alt}
                    className="education-img"
                  />
                </div>
                <div className="education-content">
                  <h3>{edu.title}</h3>
                  <p>{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
