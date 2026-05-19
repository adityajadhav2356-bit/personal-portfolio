import React, { useEffect, useRef } from 'react';

const Universe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 800; // lots of stars for a dense universe

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width * 2 - width,
        y: Math.random() * height * 2 - height,
        z: Math.random() * 2000,
      });
    }

    const draw = () => {
      // Clear canvas with a slight trail effect (slate-50 color)
      ctx.fillStyle = 'rgba(248, 250, 252, 0.4)'; 
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        
        star.z -= 4; // speed of moving through the universe

        if (star.z <= 0) {
          star.x = Math.random() * width * 2 - width;
          star.y = Math.random() * height * 2 - height;
          star.z = 2000;
        }

        const k = 256.0 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / 2000) * 3;
          const opacity = 1 - star.z / 2000;
          
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          
          // Color mix of indigo and purple for light theme
          if (i % 3 === 0) {
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`; // purple-500
          } else if (i % 3 === 1) {
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`; // blue-500
          } else {
            ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`; // indigo-500
          }
          
          ctx.fill();
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
    />
  );
};

export default Universe;
