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

    const shapes = [];
    const numShapes = 45; // Subtle floating objects

    const colors = [
      'rgba(148, 163, 184, 0.3)', // slate-400
      'rgba(99, 102, 241, 0.2)',  // indigo-500
      'rgba(156, 163, 175, 0.25)' // gray-400
    ];

    // Initialize shapes
    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 35 + 15,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.015,
        sides: Math.floor(Math.random() * 3) + 3, // Triangles, squares, pentagons
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const drawPolygon = (ctx, x, y, radius, sides, rotation) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = rotation + (i * 2 * Math.PI) / sides;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach(shape => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.vRot;

        // Wrap around screen edges smoothly
        if (shape.x < -shape.size * 2) shape.x = width + shape.size * 2;
        if (shape.x > width + shape.size * 2) shape.x = -shape.size * 2;
        if (shape.y < -shape.size * 2) shape.y = height + shape.size * 2;
        if (shape.y > height + shape.size * 2) shape.y = -shape.size * 2;

        drawPolygon(ctx, shape.x, shape.y, shape.size, shape.sides, shape.rotation);
        
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

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
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default Universe;
