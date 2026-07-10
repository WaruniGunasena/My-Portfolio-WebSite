import React, { useEffect, useRef } from 'react';
import profileImage from '../../images/profile.png';
import './Hero.css'; // Make sure to add the CSS below

export default function Hero() {
  const canvasRef = useRef(null);

  // Interactive Constellation Background logic (Kept exactly as you had it)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseColor = '322';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.baseColor}, 80%, 70%, 0.6)`;
        ctx.fill();
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 1.2;
            this.y -= (dy / distance) * force * 1.2;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 11000), 100);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();
    window.addEventListener('resize', initParticles);

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            const opacity = ((120 - dist) / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(322, 85%, 65%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" aria-label="Hero Banner">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div id="hero-mesh-overlay"></div>

      <div className="container hero-layout">
        {/* Left: Text content */}
        <div className="hero-content">
          <p className="eyebrow fade-in-up">Full Stack Software Engineer</p>
          <h1 className="reveal-text">
            <span className="line-1">Waruni</span>
            <br />
            <span className="line-2">Gunasena</span>
          </h1>
          <p className="tagline fade-in-up delay-3">React &middot; .NET &middot; AWS</p>

          <div className="hero-cta-group fade-in-up delay-4">
            <a href="#contact" className="btn hero-btn-primary">
              <span>Get In Touch</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
            <a href="#projects" className="btn hero-btn-secondary">
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="hero-image-wrapper fade-in">
          <div className="hero-image-frame">
            <div className="hero-image-glow"></div>
            <div className="hero-image-ring hero-image-ring-outer"></div>
            <div className="hero-image-ring hero-image-ring-inner"></div>
            <img
              src={profileImage}
              alt="Waruni Gunasena - Full Stack Software Engineer"
              className="hero-profile-img"
            />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down to Profile section">
        <span>SCROLL</span>
      </a>
    </section>
  );
}