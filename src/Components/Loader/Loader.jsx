import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Small timeout for visual flow
      setTimeout(() => {
        setFadeOut(true);
        // Remove from DOM after transition completes (0.6s in style.css)
        setTimeout(() => setVisible(false), 600);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div id="loader" className={fadeOut ? 'fade-out' : ''} aria-hidden="true">
      <div className="loader-content">
        <div className="orb-wrapper">
          <svg className="tech-orb" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Spinning Circle */}
            <circle className="orb-outer" cx="50" cy="50" r="42" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="10 30" strokeLinecap="round" />
            
            {/* Inner Opposing Spinning Circle */}
            <circle className="orb-inner" cx="50" cy="50" r="28" stroke="var(--accent-secondary)" strokeWidth="1" strokeDasharray="5 15" strokeLinecap="round" style={{ animation: 'rotateOrb 6s linear infinite reverse' }} />
            
            {/* Core Pulsing Glow Orb */}
            <circle className="orb-core" cx="50" cy="50" r="7" />
          </svg>
        </div>
        <div className="loader-logo">WARUNI<span>_</span></div>
      </div>
    </div>
  );
}
