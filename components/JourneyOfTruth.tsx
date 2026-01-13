
import React, { useState, useEffect, useRef } from 'react';
import { Anchor, Microscope, Box, ChevronDown, Waves, Wind, ShieldCheck, Globe } from 'lucide-react';

const JourneyOfTruth: React.FC = () => {
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

  // Determine stage based on progress (0.0 - 1.0)
  const getStage = () => {
    if (scrollProgress < 0.33) return 1;
    if (scrollProgress < 0.66) return 2;
    return 3;
  };

  const stage = getStage();

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      {/* Sticky Background & Map Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        {/* Dynamic Map Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <path 
            d={`M500,1000 Q${500 + (scrollProgress * 200)},500 500,0`} 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00F2FF" />
              <stop offset="100%" stopColor="#C2B280" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Overlays per Stage */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B1E] via-[#003438] to-black"></div>
          {/* Animated Rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,242,255,0.1),transparent_70%)] animate-pulse"></div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-[#001214]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
          {/* Laboratory Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B1E] to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(194,178,128,0.1),transparent_70%)]"></div>
        </div>

        {/* Floating Icons that travel with progress */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out z-20"
          style={{ top: `${(1 - scrollProgress) * 100}%` }}
        >
          <div className="w-16 h-16 rounded-full glass border-[#C2B280]/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,242,255,0.3)] animate-float">
             <Anchor className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Stage 1: The Ocean (Seeding) */}
      <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border-[#C2B280]/20">
            <Waves className="w-4 h-4 text-[#C2B280]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Stage 01: Deep Seeding</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Where the <br />
            <span className="text-gradient">Truth Begins.</span>
          </h2>
          <div className="relative aspect-video max-w-2xl mx-auto rounded-[3rem] overflow-hidden glass border-white/5 shadow-2xl group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse">
                  <Anchor className="w-8 h-8 text-white" />
               </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Location: Saint Martin's Shelf</p>
              <p className="text-white font-medium leading-relaxed">Artisanal gig-workers planting the next generation of verified biomass assets.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll into Verification</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </section>

      {/* Stage 2: The University (Verification) */}
      <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-blue-500/20">
              <Microscope className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Stage 02: Scientific Audit</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              The <span className="text-blue-400">Oracle</span> <br />
              Node.
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Every harvest is audited by local marine biology students. Spectral data is analyzed, geofenced, and locked onto the ledger before it ever leaves the coast.
            </p>
            <div className="flex gap-4">
              <div className="glass p-4 rounded-2xl border-blue-500/10 flex-1">
                 <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Consistency</p>
                 <p className="text-xl font-bold text-white">99.8%</p>
              </div>
              <div className="glass p-4 rounded-2xl border-blue-500/10 flex-1">
                 <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Audit Log</p>
                 <p className="text-xl font-bold text-white">Live</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square glass rounded-[3rem] border-blue-500/20 shadow-2xl overflow-hidden flex items-center justify-center p-12">
            {/* Visual representation of microscopic verification */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240715632-6103498a3590?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative w-full h-full border border-blue-400/30 rounded-full flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border border-blue-400/10 animate-[spin_20s_linear_infinite]"></div>
               <div className="relative z-10 flex flex-col items-center">
                 <ShieldCheck className="w-16 h-16 text-blue-400 mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                 <span className="text-white font-mono text-xs tracking-widest">VERIFYING_METADATA...</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: The Export (Global Asset) */}
      <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl w-full relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border-[#C2B280]/20">
            <Box className="w-4 h-4 text-[#C2B280]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Stage 03: Global Export</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-[0.85]">
            From Coast to <br />
            <span className="text-gradient">Commerce.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="glass p-10 rounded-[2.5rem] border-white/5 text-left flex flex-col justify-between">
              <div>
                <Wind className="w-8 h-8 text-[#C2B280] mb-6" />
                <h4 className="text-xl font-bold text-white mb-2">Sealed Quality</h4>
                <p className="text-white/40 text-sm font-light">Vacuum-sealed at source to preserve agar purity and structural integrity.</p>
              </div>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-[#C2B280]/30 shadow-[0_0_40px_rgba(194,178,128,0.1)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Anchor className="w-12 h-12 text-[#C2B280]" />
               </div>
               <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 p-4 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                     {/* Simulated QR Code */}
                     <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                       <rect x="0" y="0" width="30" height="30" />
                       <rect x="0" y="70" width="30" height="30" />
                       <rect x="70" y="0" width="30" height="30" />
                       <rect x="40" y="40" width="20" height="20" />
                       <rect x="10" y="10" width="10" height="10" fill="white" />
                       <rect x="80" y="80" width="10" height="10" />
                     </svg>
                  </div>
                  <h4 className="text-white font-bold mb-1">Asset Passport</h4>
                  <p className="text-[10px] font-bold text-[#C2B280] uppercase tracking-widest">Scan to Verify Ledger</p>
               </div>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-white/5 text-left flex flex-col justify-between">
               <div>
                  <Globe className="w-8 h-8 text-emerald-400 mb-6" />
                  <h4 className="text-xl font-bold text-white mb-2">Global Transit</h4>
                  <p className="text-white/40 text-sm font-light">Ready for global biotech hubs, with real-time temperature and location tracking.</p>
               </div>
            </div>
          </div>
          
          <button className="mt-16 bg-white text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-[#C2B280] transition-all active:scale-95 shadow-2xl">
            Order Certified Batch
          </button>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-50">
        <ProgressDot active={stage === 1} label="01" />
        <ProgressDot active={stage === 2} label="02" />
        <ProgressDot active={stage === 3} label="03" />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const ProgressDot: React.FC<{ active: boolean, label: string }> = ({ active, label }) => (
  <div className="flex items-center justify-end gap-4 group">
    <span className={`text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'text-white opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-40'}`}>
      Stage {label}
    </span>
    <div className={`w-3 h-3 rounded-full border transition-all duration-500 ${active ? 'bg-[#C2B280] border-[#C2B280] scale-150 shadow-[0_0_15px_rgba(194,178,128,0.5)]' : 'border-white/20 bg-transparent'}`}></div>
  </div>
);

export default JourneyOfTruth;
