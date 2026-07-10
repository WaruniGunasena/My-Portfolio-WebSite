import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-copy">
          &copy; {year} Waruni Gunasena. All rights reserved.
        </div>
        <div className="footer-credit">
          Built with React &amp; Vite. Deployed on{' '}
          <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
