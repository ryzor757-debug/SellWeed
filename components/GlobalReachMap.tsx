
import React from 'react';
import { Globe, Ship, Zap, ArrowRight, Anchor } from 'lucide-react';

const GlobalReachMap: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-[#000D0E] relative overflow-hidden contain-paint">
      {/* Dark Map Base */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale invert">
         <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/10">
            {/* Minimalist World Outline - Placeholder representation */}
            <path d="M100,200 L150,150 L200,180 L250,100 L300,150 L350,120 L400,200 L450,250 L500,200 L600,220 L700,180 L800,250 L900,200 L950,250 L1000,300" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
           <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-10">
              <Globe className="w-4 h-4" />
              Sovereign Global Transit Hub
           </div>
           <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-none mb-12">Global <br /><span className="text-gradient">Reach.</span></h2>
        </div>

        {/* The Map Visualization */}
        <div className="relative aspect-[21/9] w-full glass rounded-[4rem] border-white/5 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 bg-[#001B1E]/60 backdrop-blur-3xl"></div>
           
           {/* Center Focal Point: Bangladesh */}
           <div className="absolute left-[70%] top-[45%] z-20">
              <div className="relative">
                 <div className="absolute -inset-8 bg-[#C2B280]/20 rounded-full animate-ping"></div>
                 <div className="w-4 h-4 bg-[#C2B280] rounded-full shadow-[0_0_20px_#C2B280]"></div>
                 <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 px-3 py-1 rounded border border-white/10">
                    <p className="text-[10px] font-black text-white uppercase">Origin: Bangladesh</p>
                 </div>
              </div>
           </div>

           {/* Supply Lines: Animated SVGs */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                 <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C2B280" stopOpacity="0" />
                    <stop offset="50%" stopColor="#C2B280" stopOpacity="1" />
                    <stop offset="100%" stopColor="#C2B280" stopOpacity="0" />
                 </linearGradient>
              </defs>
              
              {/* Lines to Hubs */}
              <path d="M700,225 Q500,100 200,150" className="stroke-[#C2B280]/20 stroke-2 fill-none" /> {/* Europe */}
              <path d="M700,225 Q800,150 900,100" className="stroke-[#C2B280]/20 stroke-2 fill-none" /> {/* Tokyo */}
              <path d="M700,225 Q750,350 850,400" className="stroke-[#C2B280]/20 stroke-2 fill-none" /> {/* Singapore */}

              {/* Flow Particles */}
              <circle r="2" fill="#C2B280">
                 <animateMotion dur="6s" repeatCount="indefinite" path="M700,225 Q500,100 200,150" />
              </circle>
              <circle r="2" fill="#C2B280">
                 <animateMotion dur="4s" repeatCount="indefinite" path="M700,225 Q800,150 900,100" />
              </circle>
              <circle r="2" fill="#C2B280">
                 <animateMotion dur="5s" repeatCount="indefinite" path="M700,225 Q750,350 850,400" />
              </circle>
           </svg>

           {/* Hub Labels */}
           <HubMarker x="20%" y="30%" label="Rotterdam" status="Transit" />
           <HubMarker x="90%" y="20%" label="Tokyo" status="Arriving" />
           <HubMarker x="85%" y="80%" label="Singapore" status="Docked" />
        </div>

        {/* Global Logistics Ticker */}
        <div className="mt-12 glass rounded-3xl border-white/5 overflow-hidden py-6 flex">
           <div className="animate-ticker flex gap-20 whitespace-nowrap px-10 items-center">
              <TickerLog label="Batch #BH-902" dest="Rotterdam, NL" status="In Transit" />
              <TickerLog label="Batch #BH-411" dest="Tokyo, JP" status="Processing" />
              <TickerLog label="Batch #BH-029" dest="Singapore, SG" status="Completed" />
              <TickerLog label="Batch #BH-882" dest="Hamburg, DE" status="Awaiting Lab" />
              {/* Dupe for loop */}
              <TickerLog label="Batch #BH-902" dest="Rotterdam, NL" status="In Transit" />
              <TickerLog label="Batch #BH-411" dest="Tokyo, JP" status="Processing" />
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const HubMarker: React.FC<{ x: string, y: string, label: string, status: string }> = ({ x, y, label, status }) => (
  <div className="absolute z-20 group" style={{ left: x, top: y }}>
    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 min-w-[120px]">
       <p className="text-[10px] font-black text-white uppercase leading-none mb-1">{label}</p>
       <p className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest">{status}</p>
    </div>
  </div>
);

const TickerLog: React.FC<{ label: string, dest: string, status: string }> = ({ label, dest, status }) => (
  <div className="flex items-center gap-4 group">
     <Ship className="w-4 h-4 text-white/20 group-hover:text-[#C2B280] transition-colors" />
     <div className="flex flex-col">
        <span className="text-[10px] font-black text-white uppercase">{label}</span>
        <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Dest: {dest} // {status}</span>
     </div>
  </div>
);

export default GlobalReachMap;
