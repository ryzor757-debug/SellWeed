
import React, { useEffect, useRef, useState } from 'react';
import { Anchor, Database, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

const ValueChainScroll: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stages = [
    { label: "Harvested", icon: <Anchor />, progress: 0, color: "text-[#2E8B57]", desc: "Coastal artisanal harvest on Saint Martin shelf. Manual curation for maximum quality." },
    { label: "Verified", icon: <Database />, progress: 0.5, color: "text-cyan-400", desc: "Spectral data and GPS coordinates locked onto Polygon blockchain. Instant mathematical proof." },
    { label: "Paid", icon: <Wallet />, progress: 1, color: "text-[#C2B280]", desc: "Instant BDT payout via digital delta-ledger. Real-time wealth distribution to the coast." }
  ];

  const currentStage = scrollProgress < 0.4 ? 0 : scrollProgress < 0.8 ? 1 : 2;

  return (
    <section ref={sectionRef} className="h-[300vh] bg-[#000D0E] relative contain-paint">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Progress Background Text */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-5 select-none pointer-events-none">
           <h2 className="text-[20vw] font-black text-white leading-none uppercase gpu-accelerated" style={{ transform: `translateY(${(scrollProgress - 0.5) * 100}px)` }}>
             {stages[currentStage].label}
           </h2>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20 relative z-10">
          
          {/* Morphing Visual Hub */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 gpu-accelerated">
               {/* Orbital Rings */}
               <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute inset-4 rounded-full border border-[#C2B280]/10 animate-[spin_10s_linear_infinite_reverse]"></div>
               
               {/* Core Morphing Element */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-48 h-48 md:w-64 md:h-64 rounded-[3.5rem] glass flex items-center justify-center transition-all duration-1000 shadow-2xl ${
                    currentStage === 0 ? 'bg-[#2E8B57]/10 border-[#2E8B57]/30 rotate-0 scale-100' :
                    currentStage === 1 ? 'bg-cyan-500/10 border-cyan-400/30 rotate-90 scale-105' :
                    'bg-[#C2B280]/10 border-[#C2B280]/30 rotate-180 scale-110 shadow-[0_0_80px_rgba(194,178,128,0.2)]'
                  }`}>
                     <div className={`transition-all duration-700 ${stages[currentStage].color}`}>
                        {React.cloneElement(stages[currentStage].icon as React.ReactElement, { 
                          className: "w-20 h-20 md:w-32 md:h-32"
                        })}
                     </div>
                  </div>
               </div>

               {/* Particle Accents */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white] animate-pulse"></div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C2B280] shadow-[0_0_15px_#C2B280] animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Text Descriptions */}
          <div className="lg:col-span-6 space-y-10">
             <div className="space-y-4">
                <span className={`text-[10px] font-black uppercase tracking-[0.5em] transition-colors ${stages[currentStage].color}`}>
                  Value-Chain Protocol // Phase 0{currentStage + 1}
                </span>
                <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
                  {stages[currentStage].label}.
                </h3>
             </div>
             
             <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-xl transition-opacity duration-500">
               {stages[currentStage].desc}
             </p>

             <div className="flex items-center gap-8 pt-6">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#000D0E] bg-white/5 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="avatar" className="w-full h-full object-cover" />
                   </div>)}
                </div>
                <div className="h-px w-20 bg-white/10"></div>
                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${stages[currentStage].color}`}>
                   <ShieldCheck className="w-4 h-4" />
                   Chain Security: HIGH
                </div>
             </div>
          </div>
        </div>

        {/* Scroll Progress Indicator Vertical */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center">
           {stages.map((_, i) => (
             <div key={i} className={`w-1 transition-all duration-700 rounded-full ${currentStage === i ? 'h-12 bg-white' : 'h-3 bg-white/10'}`}></div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChainScroll;
