import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const canvasRef = useRef(null);
  
  // Typewriter effect logic
  useEffect(() => {
    const l1Target = "Waruni";
    const l2Target = "Gunasena";
    let index1 = 0;
    let index2 = 0;
    let t1, t2;
    
    // Start typing after loader finishes fading out
    const startTimeout = setTimeout(() => {
      t1 = setInterval(() => {
        if (index1 < l1Target.length) {
          setLine1(prev => prev + l1Target.charAt(index1));
          index1++;
        } else {
          clearInterval(t1);
          setTimeout(() => {
            t2 = setInterval(() => {
              if (index2 < l2Target.length) {
                setLine2(prev => prev + l2Target.charAt(index2));
                index2++;
              } else {
                clearInterval(t2);
              }
            }, 120);
          }, 350);
        }
      }, 120);
    }, 1400); // wait for loader delay + transition

    return () => {
      clearTimeout(startTimeout);
      if (t1) clearInterval(t1);
      if (t2) clearInterval(t2);
    };
  }, []);
  
  // Interactive Constellation Background logic
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
        this.baseColor = '322'; // Orchid Pink hue
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.baseColor}, 80%, 70%, 0.6)`;
        ctx.fill();
      }

      update() {
        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Hover repulsion
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
    // Re-initialize particles count on resize
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

      <div className="container">
        <div className="hero-content">
          <p className="eyebrow">Full Stack Software Engineer</p>
          <h1>
            <span className="line-1">{line1}</span>
            <br />
            <span className="line-2">{line2}</span>
            <span className="cursor">_</span>
          </h1>
          <p className="tagline">React &middot; Node.js &middot; Cloud Infrastructure</p>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down to Profile section">
        <span>SCROLL</span>
      </a>
    </section>
  );
}
