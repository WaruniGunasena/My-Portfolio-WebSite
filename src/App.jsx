import React, { useEffect } from 'react';
import './index.css';

import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Achievements from './Components/Achievements/Achievements';
import Beyond from './Components/Beyond/Beyond';
import Recommendations from './Components/Recommendations/Recommendations';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export default function App() {
  // ── Active nav highlight on scroll ──────────────────────────────────────
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('#nav ul li a');

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            links.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => navObserver.observe(s));
    return () => navObserver.disconnect();
  }, []);

  // ── Scroll-reveal for .reveal sections ──────────────────────────────────
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    reveals.forEach((r) => revealObserver.observe(r));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Loader />
      <Navbar />

      <Hero />

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Beyond />
        <Recommendations />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
