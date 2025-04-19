import React, { useEffect, useRef, useState } from 'react';

const BulbsBG = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const bulbsRef = useRef([]);
  
  // Initialize bulbs
  useEffect(() => {
    const initializeBulbs = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Make canvas fullscreen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create bulbs
      const numberOfBulbs = 80; // Increased number for better coverage
      const bulbs = [];

      // Divide the screen into cells and place one bulb in each cell
      const cellsHorizontal = 10;
      const cellsVertical = 6;
      const cellWidth = canvas.width / cellsHorizontal;
      const cellHeight = canvas.height / cellsVertical;
      
      for (let y = 0; y < cellsVertical; y++) {
        for (let x = 0; x < cellsHorizontal; x++) {
          // If we've reached our bulb limit, stop creating bulbs
          if (bulbs.length >= numberOfBulbs) break;
          
          // Calculate position within this cell (with random offset)
          const posX = (x * cellWidth) + (Math.random() * 0.8 + 0.1) * cellWidth;
          const posY = (y * cellHeight) + (Math.random() * 0.8 + 0.1) * cellHeight;
          
          // Determine if this bulb will eventually go off (30% chance)
          const willTurnOff = Math.random() < 0.3;
          
          // If it will turn off, set a random time for it to start dimming
          const turnOffTime = willTurnOff ? 300 : null;
          
          bulbs.push({
            x: posX,
            y: posY,
            size: Math.random() * 10 + 20,
            brightness: 100,
            willTurnOff: willTurnOff,
            turnOffTime: willTurnOff ? 300 : null,
            dimStarted: false,
            velocityX: 0,
            velocityY: 0,
            homeX: posX,
            homeY: posY,
            // Add these new properties:
            dimDuration: Math.random() * 2000 + 1000, // Random duration between 1-3 seconds
            dimStartTimestamp: null // Will store when dimming started
          });
          
        }
      }
      
      bulbsRef.current = bulbs;
    };
    
    initializeBulbs();
    
    // Handle window resize
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeBulbs(); // Reinitialize bulbs on resize
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animation loop
  useEffect(() => {
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.fillStyle = '#121212'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Mouse collision radius
      const mouseRadius = 60;
      
      // Update and draw each bulb
      bulbsRef.current.forEach(bulb => {
        // Check if it's time to start dimming
        if (bulb.willTurnOff && bulb.turnOffTime && elapsedTime > bulb.turnOffTime && !bulb.dimStarted) {
            bulb.dimStarted = true;
            bulb.dimStartTimestamp = timestamp; // Record when dimming started
        }
          
          // Calculate brightness with smooth transition
        if (bulb.dimStarted && bulb.brightness > 0) {
            const dimProgress = (timestamp - bulb.dimStartTimestamp) / bulb.dimDuration;
            
            // Use easeOutCubic for a natural dimming effect
            // This creates a smooth curve that starts fast and slows down
            if (dimProgress < 1) {
                const easeOut = 1 - Math.pow(1 - dimProgress, 3);
                bulb.brightness = 100 * (1 - easeOut);
            } else {
                bulb.brightness = 0; // Ensure it reaches zero
            }
        }

        // Add this inside the bulb update logic
        if (bulb.dimStarted && bulb.brightness > 20) {
        // Add subtle random flickering during the early dimming phase
        bulb.brightness += (Math.random() * 2 - 1) * Math.min(10, bulb.brightness * 0.1);
        }
  
        
        // Calculate distance to mouse
        const dx = mousePosition.x - bulb.x;
        const dy = mousePosition.y - bulb.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        // Check for mouse collision
        if (distanceToMouse < mouseRadius + bulb.size) {
          // Calculate repulsion angle
          const angle = Math.atan2(dy, dx);
          
          // Strength of repulsion (stronger when closer)
          const repulsionForce = 2 * (1 - distanceToMouse / (mouseRadius + bulb.size));
          
          // Apply force in opposite direction from mouse
          bulb.velocityX -= Math.cos(angle) * repulsionForce;
          bulb.velocityY -= Math.sin(angle) * repulsionForce;
        }
        
        // Apply slight force back toward original position
        const homeForceX = (bulb.homeX - bulb.x) * 0.01;
        const homeForceY = (bulb.homeY - bulb.y) * 0.01;
        
        bulb.velocityX += homeForceX;
        bulb.velocityY += homeForceY;
        
        // Apply friction
        bulb.velocityX *= 0.95;
        bulb.velocityY *= 0.95;
        
        // Update position
        bulb.x += bulb.velocityX;
        bulb.y += bulb.velocityY;
        
        // Draw the bulb
        drawBulb(ctx, bulb);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);
  
  // Function to draw a single bulb
  const drawBulb = (ctx, bulb) => {
    const { x, y, size, brightness } = bulb;
    
    ctx.save();
    
    // Translate to bulb center
    ctx.translate(x, y);
    
    // Calculate color based on brightness
    const bulbColor = '#EBA3A4'; // Pink color as requested
    const intensityFactor = brightness / 100;
    
    // Glow effect for bright bulbs
    if (brightness > 0) {
      ctx.shadowColor = bulbColor;
      // Scale the shadow blur based on brightness
      ctx.shadowBlur = 20 * (intensityFactor > 0.2 ? intensityFactor : 0.2);
    }
    
    // Bulb glass - always draw the outline
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    
    // Draw the bulb with gradient that persists even when dimmed
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    
    // Always have some minimum opacity for the outline
    const minOpacity = 0.15;
    const opacity = Math.max(minOpacity, intensityFactor * 0.8);
    
    // The inner color transitions from bright white to transparent
    gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0.1, 0.9 * intensityFactor)})`);
    // The middle color maintains the pink hue but dims
    gradient.addColorStop(0.7, `rgba(235, 163, 164, ${Math.max(0.15, 0.8 * intensityFactor)})`);
    // The outer edge maintains some opacity for the glassy look
    gradient.addColorStop(1, `rgba(235, 163, 164, ${opacity})`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Always draw the outline with a minimum opacity
    ctx.strokeStyle = `rgba(235, 163, 164, ${Math.max(0.3, intensityFactor * 0.5)})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Filament - always visible with minimum opacity
    const filamentOpacity = Math.max(0.2, intensityFactor);
    ctx.beginPath();
    ctx.moveTo(-size/3, -size/4);
    ctx.lineTo(-size/6, -size/2);
    ctx.lineTo(size/6, -size/6);
    ctx.lineTo(size/3, -size/3);
    
    // Adjust filament color based on brightness
    if (brightness > 10) {
      // Brighter filament for lit bulbs (warm yellow/orange)
      ctx.strokeStyle = `rgba(255, 220, 175, ${filamentOpacity})`;
    } else {
      // Cooler color for dimmed filaments (grayish)
      ctx.strokeStyle = `rgba(200, 180, 160, ${filamentOpacity})`;
    }
    
    // Adjust filament thickness based on brightness
    const filamentThickness = Math.max(size/25, (size/15) * intensityFactor);
    ctx.lineWidth = filamentThickness;
    ctx.stroke();
    
    ctx.restore();
  };
  
  return (
    <canvas
      ref={canvasRef} 
      className="absolute -z-10 top-0 left-0 w-full h-full bg-gray-900 absolute overflow-hidden"
    />
  );
};

export default BulbsBG;