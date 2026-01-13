
import React from 'react';
import { Wind, ShieldCheck, Leaf } from 'lucide-react';

const CarbonSink: React.FC = () => {
  // Generate random properties for bubble animations
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 4,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${Math.random() * 10 + 10}s`,
    opacity: Math.random() * 0.3 + 0.1
  }));

  // Generate seaweed strands
  const strands = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${(i * 9) + 2}%`,
    height: `${Math.random() * 40 + 60}%`,
    delay: `${Math.random() * 4}s`
  }));

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#001B1E]">
      {/* Background Zen Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001B1E] via-[#003438] to-[#001B1E] opacity-60"></div>

      {/* Seaweed Animation Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {strands.map((strand) => (
          <div
            key={strand.id}
            className="absolute bottom-0 w-px bg-gradient-to-t from-[#2E8B57]/40 to-transparent"
            style={{
              left: strand.left,
              height: strand.height,
              filter: 'blur(1px)',
              animation: `sway ${6 + Math.random() * 4}s ease-in-out infinite alternate`,
              animationDelay: strand.delay,
              transformOrigin: 'bottom center'
            }}
          >
            {/* Artistic Leaf Nodes */}
            <div className="absolute top-0 -left-1 w-2 h-8 bg-[#2E8B57]/20 rounded-full"></div>
            <div className="absolute top-20 -left-1 w-2 h-12 bg-[#2E8B57]/10 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Carbon Bubbles Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute bottom-[-20px] rounded-full bg-white/40 border border-white/20 blur-[0.5px]"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              opacity: bubble.opacity,
              animation: `rise ${bubble.duration} linear infinite`,
              animationDelay: bubble.delay
            }}
          ></div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[4rem] border-white/5 backdrop-blur-2xl text-center relative group">
          {/* Subtle Corner Accents */}
          <div className="absolute top-8 left-8 text-[#C2B280]/30"><Wind className="w-5 h-5" /></div>
          <div className="absolute bottom-8 right-8 text-[#2E8B57]/30"><Leaf className="w-5 h-5" /></div>

          <div className="mb-10 flex justify-center">
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#C2B280] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] animate-pulse"></span>
              Negative Emission Ecosystem
            </div>
          </div>

          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
            10,000 Tons of <span className="text-gradient">Blue Carbon.</span>
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-white/40 text-sm md:text-lg font-light tracking-wide italic">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C2B280]" />
              Sequestered
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block"></span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C2B280]" />
              Verified
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block"></span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C2B280]" />
              Traceable
            </span>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center">
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em] mb-4">Powered by Nature. Audited by Silicon.</p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#C2B280]/20 to-transparent"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-800px) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes sway {
          0% {
            transform: rotate(-3deg) skewX(2deg);
          }
          100% {
            transform: rotate(3deg) skewX(-2deg);
          }
        }
      `}</style>
    </section>
  );
};

export default CarbonSink;
