import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-copy">
          &copy; {year} Waruni Gunasena. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
