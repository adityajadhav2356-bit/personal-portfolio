import React from 'react';

const Universe = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        {/* Video Background matching cortec.in */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-h-[110vh] min-w-[195vh] opacity-[0.08] grayscale">
          <iframe
            className="w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/kwmHaXUAa0M?autoplay=1&mute=1&loop=1&playlist=kwmHaXUAa0M&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Gradients to fade out top and bottom edges smoothly */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>
      
      {/* Grain Overlay */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </>
  );
};

export default Universe;
