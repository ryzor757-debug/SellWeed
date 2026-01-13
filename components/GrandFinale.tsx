
import React, { useEffect, useState } from 'react';
import { ArrowRight, Waves } from 'lucide-react';

const GrandFinale: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out grayscale-[20%] opacity-60"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=2000&auto=format&fit=crop')",
          transform: `translateY(${(scrollY - 5000) * 0.15}px) scale(1.1)`,
        }}
      >
        {/* Deep Ocean Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B1E] via-[#001B1E]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12 animate-float">
            <Waves className="w-12 h-12 text-[#C2B280] mx-auto opacity-50" />
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
          The Future is <br />
          <span className="text-gradient">Liquid Gold.</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed">
          Own a piece of the blue frontier. Secure your spot in the ecosystem that turns coastal restoration into verified wealth.
        </p>

        {/* Elegant Minimalist Input */}
        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-[#C2B280]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative flex items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full p-2 pl-8 focus-within:border-[#C2B280]/50 transition-all shadow-2xl">
            <input 
              type="email" 
              placeholder="Join our Private Beta" 
              className="bg-transparent border-none outline-none text-white text-lg w-full placeholder:text-white/20 placeholder:font-light"
            />
            <button className="bg-[#C2B280] text-[#001B1E] p-4 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg group-hover:shadow-[#C2B280]/20">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Line */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] leading-relaxed">
            Collaborating with Marine Scientists from <br />
            <span className="text-white/40">CU — NSTU — GLOBAL CLIMATE FUNDS — UNESCO REDD+</span>
          </p>
        </div>
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001B1E] to-transparent"></div>
    </section>
  );
};

export default GrandFinale;
