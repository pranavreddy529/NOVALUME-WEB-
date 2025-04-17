import React, { useEffect, useRef, useState } from 'react';

const NovalumeParticleSystem = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Color palette from the image
  const colors = [
    'rgba(240,239,231,0.5)',   // F4F7E7 - Off-white
    'rgba(235,162,171,0.4)',   // EBA2A3 - Soft Pink
    'rgba(192,134,137,0.4)',   // C08689 - Muted Rose
    'rgba(175,137,123,0.3)',   // AF897B - Warm Taupe
    'rgba(101,64,33,0.4)'      // 674041 - Deep Brown
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouseX = null;
    let mouseY = null;

    // Resize handler
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      setDimensions({ width: innerWidth, height: innerHeight });

      // Recreate particles on resize
      particles = createParticles(innerWidth, innerHeight);
    };

    // Create particles
    const createParticles = (width, height) => {
      const particleCount = Math.floor(width / 10);
      return Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    };

    // Mouse move tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    // Draw connecting lines between nearby particles
    const drawConnections = (particle) => {
      if (mouseX === null || mouseY === null) return;

      particles.forEach(otherParticle => {
        // Check distance between particles
        const dx = otherParticle.x - particle.x;
        const dy = otherParticle.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check distance to mouse
        const mouseDistance = Math.sqrt(
          (particle.x - mouseX) ** 2 + 
          (particle.y - mouseY) ** 2
        );

        // Draw lines if particles are close and mouse is nearby
        if (distance < 100 && mouseDistance < 200) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          
          // Gradient line based on distance
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y, 
            otherParticle.x, otherParticle.y
          );
          gradient.addColorStop(0, 'rgba(192,134,137,0.2)');
          gradient.addColorStop(1, 'rgba(175,137,123,0.2)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 - (distance / 100);
          ctx.stroke();
        }
      });
    };

    // Animation update
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Basic movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        drawConnections(particle);
      });

      animationFrameId = requestAnimationFrame(update);
    };

    // Setup event listeners and start animation
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    resizeCanvas();
    update();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Grain effect using inline styles
  const grainStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), 
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
    `,
    opacity: 0.05,
    zIndex: 2
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
      />
      <div style={grainStyle} />
    </div>
  );
};

export default NovalumeParticleSystem;