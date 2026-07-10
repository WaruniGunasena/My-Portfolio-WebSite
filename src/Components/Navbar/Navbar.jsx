import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id="nav" className={isOpen ? 'open' : ''}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" aria-label="Waruni Gunasena Home" onClick={closeMenu}>
          WARUNI<span>_</span>
        </a>
        
        {/* Mobile hamburger menu toggle */}
        <button 
          className="mobile-nav-toggle" 
          aria-label="Toggle navigation menu" 
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <ul>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#beyond" onClick={closeMenu}>Beyond the Code</a></li>
          <li><a href="#recommendations" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
