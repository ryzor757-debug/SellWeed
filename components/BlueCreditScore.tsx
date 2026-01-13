import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Wallet, TrendingUp, UserCheck, Hexagon } from 'lucide-react';

const BlueCreditScore: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Constants based on Golden Ratio logic
  const cardX = Math.max(0, (1 - scrollProgress * 2.5) * 120);
  const cardRotateY = (1 - scrollProgress) * 160;
  const cardScale = 0.6 + Math.min(scrollProgress * 1.4, 0.4);
  const holoPos = scrollProgress * 200;

  return (
    <section ref={sectionRef} className="py-40 px-6 bg-[#001B1E] relative overflow-hidden min-h-screen flex items-center">
      {/* Background Volumetric Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/5 blur-[180px] rounded-full layer-back"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#C2B280]/5 blur-[160px] rounded-full layer-back"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 w-full items-center">
        
        {/* Editorial Text Layer */}
        <div className="lg:col-span-6 space-y-12 stagger-reveal active">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.6em]">
            Human Dignity Protocol
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tightest leading-[0.85]">
            The Blue <br />
            <span className="text-gradient">Identity.</span>
          </h2>
          
          <div className="space-y-12">
             <p className="text-white/40 text-xl font-light leading-[1.618] max-w-xl">
              We bridge the digital divide by transforming "informal coastal labor" into "institutional digital assets."
            </p>
            
            <div className={`transition-all duration-1000 transform ${scrollProgress > 0.3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="p-10 glass border-[#C2B280]/20 rounded-[3rem] bg-gradient-to-r from-[#C2B280]/10 to-transparent flex items-start gap-6 group">
                <UserCheck className="w-10 h-10 text-[#C2B280] group-hover:scale-110 transition-transform" />
                <p className="text-white font-serif italic text-2xl leading-tight">
                  "From an informal laborer to a <span className="text-[#C2B280] not-italic font-black uppercase text-sm tracking-[0.3em]">verified global artisan</span>."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <Feature icon={<ShieldCheck className="w-5 h-5 text-cyan-400" />} title="On-Chain NID" desc="Linked to national identity records." />
            <Feature icon={<TrendingUp className="w-5 h-5 text-[#2E8B57]" />} title="Credit Score" desc="Alternative collateral for micro-loans." />
          </div>
        </div>

        {/* 3D Visual Hub */}
        <div className="lg:col-span-6 relative w-full flex justify-center perspective-[2500px] h-[700px]">
          
          {/* Smartphone Mockup - 3D Base */}
          <div className="relative w-[340px] h-[680px] bg-black rounded-[4rem] border-[10px] border-white/5 shadow-[0_80px_160px_rgba(0,0,0,0.9)] overflow-hidden transform rotate-x-6">
            <div className="h-full w-full flex flex-col p-8 pt-16 space-y-10 opacity-20">
               <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/10"></div>
                     <div className="space-y-2"><div className="w-20 h-2 bg-white/20 rounded"></div><div className="w-12 h-2 bg-white/10 rounded"></div></div>
                  </div>
                  <Hexagon className="w-6 h-6 text-white/20" />
               </div>
               <div className="w-full h-40 bg-white/5 rounded-[2.5rem]"></div>
               <div className="grid grid-cols-2 gap-4"><div className="h-24 bg-white/5 rounded-2xl"></div><div className="h-24 bg-white/5 rounded-2xl"></div></div>
               <div className="flex-grow bg-white/5 rounded-3xl"></div>
            </div>
          </div>

          {/* THE HOLOGRAPHIC CARD - 3D Floated Layer */}
          <div 
            className="absolute z-50 pointer-events-none layer-front"
            style={{
              transform: `translateX(${cardX}px) translateY(${150 - (scrollProgress * 150)}px) rotateY(${cardRotateY}deg) scale(${cardScale})`,
              top: '25%',
              width: '360px',
              height: '220px',
              transition: 'transform 0.1s linear, opacity 0.8s ease-out',
              opacity: Math.min(scrollProgress * 3, 1)
            }}
          >
            <div className="w-full h-full rounded-[2.5rem] glass noise-bg p-10 border-white/30 shadow-[0_60px_120px_rgba(0,0,0,0.6)] relative overflow-hidden group/card">
              {/* Complex Holographic Foil Layer */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50 mix-blend-color-dodge"
                style={{
                  background: `linear-gradient(${110 + scrollProgress * 60}deg, transparent 0%, rgba(0, 242, 255, 0.4) ${holoPos - 40}%, rgba(194, 178, 128, 0.6) ${holoPos}%, rgba(255, 0, 234, 0.4) ${holoPos + 40}%, transparent 100%)`,
                  backgroundSize: '200% 200%'
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-2">Project BlueHarvest</p>
                    <p className="text-sm font-black text-[#C2B280] uppercase tracking-[0.2em]">Master Artisan</p>
                  </div>
                  <ShieldCheck className="w-10 h-10 text-[#C2B280] drop-shadow-[0_0_20px_rgba(194,178,128,0.6)]" />
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[11px] font-mono text-white/60 tracking-[0.3em]">NODE_ID: 0x9021_HASAN</p>
                    <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" style={{ width: `${Math.min(scrollProgress * 150, 100)}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Valid Since</p>
                      <p className="text-xs font-bold text-white uppercase tracking-widest">Oct 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Trust Tier</p>
                      <p className="text-xs font-black text-white uppercase italic tracking-[0.2em]">A++ Verified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internal HUD Scan Line */}
              <div className="scan-line" style={{ animationDuration: '3s', opacity: 0.3 }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-5 p-6 rounded-[2rem] glass border-white/5 hover:bg-white/5 transition-all group">
    <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-black text-sm mb-1 tracking-tightest uppercase">{title}</h4>
      <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">{desc}</p>
    </div>
  </div>
);

export default BlueCreditScore;