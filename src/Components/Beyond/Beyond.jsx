import React, { useState, useEffect } from 'react';
import sportsPhoto from '../../images/SP.jpeg'
import modelingPhoto from '../../images/modelingPhoto.jpeg'
import hikingPhoto from '../../images/hikingPhoto.jpeg'


export default function Beyond() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  // Lock scroll and listen for ESC key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isModalOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const sportsAchievements = [
    {
      title: "Provincial Netball Captain",
      event: "Sabaragamuwa Province Netball Team",
      desc: "Captained the provincial netball team, directing court strategies, fostering peak team synergy, and leading squad executions during high-pressure tournament matches.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        </svg>
      )
    },
    {
      title: "University Colors",
      event: "University of Moratuwa Netball Team",
      desc: "Awarded University Colors alongside top individual honors: Best Defensive Player at SLUG 2023 and Best Netball Player at the 2024 Inter-University Games.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    },
    {
      title: "National level ",
      event: "Netball",
      desc: " National Youth Netball Tournament 2026, National Sports Festival-(2020-2025), Inter Club National Tournament for the RDNA Trophy-2022",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "School Level",
      event: "Team & Individual Competitions",
      desc: "Games Captain in the School , Player of volleyball, throwball, Criket, Elle and Track & Field(100m, 200m, 400m, 110m hurdles, long jump, triple jump) upto provincial level",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  const interestsList = [
    {
      title: "Sport Person",
      desc: "A versatile national-level athlete, provincial netball captain, and University of Moratuwa colors winner. Bringing court strategy, discipline, and competitive execution from netball, volleyball, throwball, and track events directly into every challenge.",
      image: sportsPhoto,
      alt: "sport person",
      objectPosition: "center 20%",
      clickable: true
    },
    {
      title: "Model",
      desc: "Exploring creative expression, runway and modeling. Collaborating with photographers to bring unique fashion concepts and apparel designs to life.",
      image: modelingPhoto,
      alt: "Modeling portfolio photoshoot",
      objectPosition: "top center"
    },
    {
      title: "Hiking & Travel",
      desc: "Recharging by climbing mountain peaks, exploring nature trails, and capturing breathtaking landscapes through photography.",
      image: hikingPhoto,
      alt: "Climbing a mountain peak during a hike",
      objectPosition: "center"
    }
  ];

  return (
    <section id="beyond" className="reveal">
      <div className="container">
        <span className="section-eyebrow">05 // Interests</span>
        <h2 className="section-title">Beyond the Code<span>.</span></h2>

        <div className="beyond-grid">
          {interestsList.map((interest, index) => (
            <div
              className={`beyond-card ${interest.clickable ? 'clickable' : ''}`}
              key={index}
              onClick={() => interest.clickable && setIsModalOpen(true)}
            >
              <div className="beyond-img-container">
                {/* 3. Swap out the SVG for a standard img tag */}
                <img
                  src={interest.image}
                  alt={interest.alt}
                  className="beyond-photo"
                  style={{ objectPosition: interest.objectPosition }}
                />
                <div className="beyond-img-overlay"></div>
              </div>
              <div className="beyond-content">
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
                {interest.clickable && (
                  <span className="beyond-card-badge">
                    View Achievements
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Achievements Modal */}
      <div
        className={`sports-modal-overlay ${isModalOpen ? 'active' : ''}`}
        onClick={closeModal}
      >
        <div
          className="sports-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sports-modal-header">
            <div>
              <span className="sports-modal-eyebrow">Athletic Profile</span>
              <h3 className="sports-modal-title">Sports Achievements</h3>
            </div>
            <button
              className="sports-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="sports-modal-body">
            <div className="sports-timeline">
              {sportsAchievements.map((item, index) => (
                <div className="sports-achievement-item" key={index}>
                  <div className="sports-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="sports-achievement-details">
                    <h4>{item.title}</h4>
                    <span className="sports-achievement-event">{item.event}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}