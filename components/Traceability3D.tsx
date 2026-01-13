
import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Fingerprint, Database, MapPin, Calendar, Users, CloudRain, Anchor, Hexagon, Info } from 'lucide-react';

const Traceability3D: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  // Constants for stages
  const STAGES = [
    { label: 'Seeding', progress: 0.1, id: 'seed' },
    { label: 'Growth Audit', progress: 0.4, id: 'growth' },
    { label: 'Verification', progress: 0.7, id: 'verify' },
    { label: 'Minting', progress: 0.95, id: 'mint' },
  ];

  const getActiveStage = () => {
    // Replaced findLast with [...STAGES].reverse().find to ensure compatibility with older ES environments
    return [...STAGES].reverse().find(s => scrollProgress >= s.progress) || STAGES[0];
  };

  const activeStage = getActiveStage();

  // 3D strands data
  const strands = Array.from({ length: 32 }).map((_, i) => ({
    id: i,
    angle: (i / 32) * Math.PI * 2,
    offset: Math.random() * 20,
    speed: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar bg-black"
    >
      {/* 3D Hologram Stage (Fixed) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none perspective-[2000px]">
        {/* Environment Glow */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          activeStage.id === 'seed' ? 'bg-[#001B1E]/40' :
          activeStage.id === 'growth' ? 'bg-[#003438]/40' :
          activeStage.id === 'verify' ? 'bg-cyan-950/40' :
          'bg-black'
        }`}></div>

        {/* Central Bundle Container */}
        <div 
          className="relative w-[500px] h-[700px] preserve-3d transition-transform duration-700 ease-out"
          style={{ 
            transform: `rotateY(${scrollProgress * 720}deg) rotateX(${10 + scrollProgress * 20}deg)`,
            scale: `${0.8 + scrollProgress * 0.4}`
          }}
        >
          {/* Strands */}
          {strands.map(strand => (
            <div
              key={strand.id}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 transition-all duration-700 ${
                scrollProgress > 0.6 ? 'bg-cyan-400' : 'bg-[#2E8B57]'
              }`}
              style={{
                height: `${400 + strand.offset}px`,
                transform: `rotateY(${strand.angle * 180 / Math.PI}deg) translateZ(60px) skewX(${Math.sin(scrollProgress * 10 + strand.id) * 5}deg)`,
                opacity: 0.2 + (scrollProgress * 0.6),
                boxShadow: scrollProgress > 0.5 ? '0 0 15px rgba(34, 211, 238, 0.4)' : 'none',
                filter: `blur(${Math.max(0, 1 - scrollProgress * 2)}px)`
              }}
            >
              {/* Glowing Nodes on Strands */}
              {scrollProgress > 0.2 && (
                <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-white animate-pulse"></div>
              )}
              {scrollProgress > 0.5 && (
                <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              )}
              {scrollProgress > 0.8 && (
                <div className="absolute top-3/4 left-0 w-2 h-2 rounded-full bg-[#C2B280] animate-pulse"></div>
              )}
            </div>
          ))}

          {/* Central Core Pulse */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#C2B280]/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(80deg)] opacity-20"></div>
      </div>

      {/* Interface Overlays */}
      
      {/* Sidebar: Digital Passport (Fixed) */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50 w-80">
        <div className="glass p-8 rounded-[2.5rem] border-white/5 shadow-2xl backdrop-blur-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C2B280]/10 to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Hexagon className="w-6 h-6 text-[#C2B280]" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Batch Registry</p>
                <p className="text-sm font-bold text-white font-mono">#BH-TX-9021</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
               <PassportStat label="Total Carbon Sink" value="12.4t" sub="Verified CO2e" icon={<CloudRain className="w-4 h-4" />} />
               <PassportStat label="Purity Index" value="98.5%" sub="Spectral Grade" icon={<Fingerprint className="w-4 h-4" />} />
               <PassportStat label="Audit Status" value="Locked" sub="Ledger Signed" icon={<ShieldCheck className="w-4 h-4" />} />
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-white/5">
                    <img src="https://i.pravatar.cc/100?u=Gigger" alt="Worker" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Assigned Gigger</p>
                    <p className="text-xs font-bold text-white">Hasan Ali (ID: 201)</p>
                 </div>
              </div>
              <button className="w-full py-4 rounded-2xl bg-[#C2B280] text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                 Verify Full Asset Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Timeline (Fixed) */}
      <div className="fixed left-12 top-1/2 -translate-y-1/2 z-50 space-y-12">
        {STAGES.map((s, i) => (
          <div key={s.id} className="flex items-center gap-6 group">
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
              scrollProgress >= s.progress ? 'bg-cyan-400 border-cyan-400 scale-150 shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'border-white/20'
            }`}></div>
            <span className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all ${
              scrollProgress >= s.progress ? 'text-white opacity-100' : 'text-white/20'
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Scrollable Content Sections */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-24 pointer-events-none">
        <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C2B280]/10 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <Calendar className="w-3 h-3" />
              Jan 12, 2025 // Initial Seeding
           </div>
           <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
             The Life <br />
             <span className="text-gradient">of a Batch.</span>
           </h2>
           <p className="text-white/40 text-xl font-medium leading-relaxed">
             Track the atomic journey of a single seaweed bundle from the Saint Martin shelf to the global ledger.
           </p>
        </div>
      </section>

      <section className="h-screen w-full snap-start flex flex-col justify-center px-24 pointer-events-none">
        <div className="max-w-xl">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <MapPin className="w-3 h-3" />
              Saint Martin A1 // Benthic Shelf
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             Seeded by <br />
             <span className="text-cyan-400">Worker #201.</span>
           </h2>
           <p className="text-white/40 text-lg leading-relaxed">
             Worker NID linked and verified via biometrics. Initial biomass density: 1.2kg/m². Seeding depth: 12 meters.
           </p>
        </div>
      </section>

      <section className="h-screen w-full snap-start flex flex-col justify-center px-24 pointer-events-none">
        <div className="max-w-xl">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <ShieldCheck className="w-3 h-3" />
              Verified by Student #88
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             The Truth <br />
             <span className="text-blue-400">Oracle Node.</span>
           </h2>
           <p className="text-white/40 text-lg leading-relaxed">
             In-situ spectral analysis confirms agar quality at 98.2%. Data hashed and committed to the temporary buffer for final audit.
           </p>
        </div>
      </section>

      <section className="h-screen w-full snap-start flex flex-col justify-center px-24 pointer-events-none">
        <div className="max-w-xl">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <Database className="w-3 h-3" />
              Polygon Network // Block #88210
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
             Minted as <br />
             <span className="text-purple-400">Asset #9021.</span>
           </h2>
           <p className="text-white/40 text-lg leading-relaxed">
             The batch is now a verified digital asset. Global buyers can trace this exact bundle to the gigger, the student, and the exact GPS coordinate.
           </p>
        </div>
      </section>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

const PassportStat: React.FC<{ label: string, value: string, sub: string, icon: React.ReactNode }> = ({ label, value, sub, icon }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#C2B280] transition-colors">
      {icon}
    </div>
    <div className="flex-grow">
      <p className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-lg font-black text-white leading-none">{value}</p>
        <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{sub}</span>
      </div>
    </div>
  </div>
);

export default Traceability3D;
