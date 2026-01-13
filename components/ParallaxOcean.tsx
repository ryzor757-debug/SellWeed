import React from 'react';

interface ParallaxOceanProps {
  scrollY: number;
  mousePos: { x: number; y: number };
}

const ParallaxOcean: React.FC<ParallaxOceanProps> = ({ scrollY, mousePos }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden contain-paint">
      {/* Base theme gradient already handled by body, but keeping this for layer stacking */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Level 2: Distant Coast - Using Midnight Navy */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[400px] opacity-10 gpu-accelerated"
        style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
      >
        <svg viewBox="0 0 1440 200" className="absolute bottom-0 w-full h-auto fill-[#001D3D]/60" preserveAspectRatio="none">
          <path d="M0,100L120,80C240,60,480,20,720,40C960,60,1200,140,1320,180L1440,220V320H0Z"></path>
        </svg>
      </div>

      {/* Level 3: Mid-depth Assets */}
      <div 
        className="absolute inset-0 gpu-accelerated flex items-center justify-around opacity-5"
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
      >
        <FloatingAsset size="w-48 h-48" />
        <FloatingAsset size="w-72 h-72" />
        <FloatingAsset size="w-32 h-32" />
      </div>

      {/* Level 4: Close Bubbles */}
      <div 
        className="absolute inset-0 gpu-accelerated"
        style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10 rounded-full blur-[1px] animate-pulse"
            style={{
              width: `${6 + (i % 3) * 2}px`,
              height: `${6 + (i % 3) * 2}px`,
              top: `${(i * 15) % 100}%`,
              left: `${(i * 27) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Level 5: Optimized God Rays - Adjusted for Abyss contrast */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-10 gpu-accelerated"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(226, 232, 240, 0.05) 0%, transparent 50%)`
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gradient-to-b from-white/5 to-transparent blur-[80px] origin-top gpu-accelerated"
              style={{
                width: '120px',
                height: '150vh',
                left: `${15 + i * 25}%`,
                top: '-20vh',
                transform: `rotate(${((mousePos.x / window.innerWidth) - 0.5) * 15}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingAsset: React.FC<{ size: string }> = ({ size }) => (
  <div className={`${size} border border-white/5 rounded-full flex items-center justify-center animate-pulse gpu-accelerated`}>
    <div className="w-1/2 h-1/2 bg-white/5 rounded-full blur-2xl" />
  </div>
);

export default ParallaxOcean;