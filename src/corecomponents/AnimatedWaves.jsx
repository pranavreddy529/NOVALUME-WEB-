import { useEffect, useRef } from 'react';

export default function AnimatedWaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Wave parameters with opacity - slower speeds for vertical movement
    const waves = [
      { 
        colorStart: 'rgba(245, 241, 230, 0.4)', // #F5F1E6 with opacity
        colorEnd: 'rgba(245, 241, 230, 0.2)',
        amplitude: 15, 
        frequency: 0.01, 
        speed: 0.008, // slower speed
        offset: 0,
        phase: 0 // for vertical movement
      },
      { 
        colorStart: 'rgba(245, 241, 230, 0.5)',
        colorEnd: 'rgba(245, 241, 230, 0.3)',
        amplitude: 10, 
        frequency: 0.02, 
        speed: 0.01, // slower speed
        offset: 0,
        phase: Math.PI * 0.5 // offset phase
      },
      { 
        colorStart: 'rgba(235, 163, 164, 0.6)', // #EBA3A4 with opacity
        colorEnd: 'rgba(235, 163, 164, 0.3)',
        amplitude: 20, 
        frequency: 0.008, 
        speed: 0.007, // slower speed
        offset: 0,
        phase: Math.PI // offset phase
      },
      { 
        colorStart: 'rgba(235, 163, 164, 0.7)',
        colorEnd: 'rgba(235, 163, 164, 0.4)',
        amplitude: 15, 
        frequency: 0.015, 
        speed: 0.009, // slower speed
        offset: 0,
        phase: Math.PI * 1.5 // offset phase
      },
    ];
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // For each wave, starting from the bottom (last wave is drawn first)
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, wave.colorStart);
        gradient.addColorStop(1, wave.colorEnd);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        // Draw the wave path
        for (let x = 0; x <= canvas.width; x += 5) {
          // Base wave position
          const baseY = canvas.height - 100;
          
          // Calculate vertical movement based on time
          const verticalOffset = Math.sin(wave.phase + wave.offset) * wave.amplitude;
          
          // Combine the fixed wave shape with the vertical movement
          const y = baseY - Math.sin(x * wave.frequency) * wave.amplitude + verticalOffset;
          
          ctx.lineTo(x, y);
        }
        
        // Complete the path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        
        // Update the wave offset for animation (vertical movement)
        wave.offset += wave.speed;
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute w-full bottom-0 -z-10">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
}