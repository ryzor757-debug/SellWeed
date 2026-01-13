
import React, { useState } from 'react';
import { Microscope, Database, ShieldCheck, Activity, Search, ChevronRight } from 'lucide-react';

const MicroScienceGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const samples = [
    {
      title: "Cellular Agar Density",
      img: "https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=800&auto=format&fit=crop",
      stats: { purity: "99.8%", density: "High", heavyMetals: "0.0%" },
      desc: "Microscopic analysis of red algae structure post-osmosis treatment."
    },
    {
      title: "Benthic Root Anchoring",
      img: "https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800&auto=format&fit=crop",
      stats: { strength: "12N", carbon: "14.2kg", depth: "14m" },
      desc: "Visual verification of structural integrity on natural benthic substrate."
    },
    {
      title: "Spectral Chlorophyll",
      img: "https://images.unsplash.com/photo-1495433334492-45245de18243?q=80&w=800&auto=format&fit=crop",
      stats: { abs: "92%", uv: "Resistant", health: "Optimal" },
      desc: "Satellite-sync data showing peak photosynthesis performance."
    }
  ];

  return (
    <section className="py-40 px-6 bg-[#001B1E] relative overflow-hidden contain-paint">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.6em] mb-8">
              <Microscope className="w-4 h-4" />
              Authority Bias // Scientific Proof
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">The Oracle <br /><span className="text-gradient">Audit.</span></h2>
            <p className="text-white/40 text-xl font-light leading-relaxed">
              We don't ask for trust. We provide the microscope. Access institutional-grade lab results for every batch on our network.
            </p>
          </div>
          <div className="flex gap-4">
             <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#C2B280] transition-all">
               Access Lab Portal
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           {/* Microscope Viewport */}
           <div className="lg:col-span-7 relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-full border-[1.5rem] border-white/5 shadow-2xl overflow-hidden glass group gpu-accelerated">
                 <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                 {/* Internal HUD */}
                 <div className="absolute inset-10 rounded-full border border-blue-400/20 animate-[spin_30s_linear_infinite] z-20 pointer-events-none"></div>
                 <div className="absolute inset-20 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse] z-20 pointer-events-none"></div>
                 
                 <img 
                    src={samples[activeItem].img} 
                    alt="Micro Sample" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-120 grayscale-[20%]"
                 />
                 
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-40">
                    <Search className="w-16 h-16 text-white" />
                 </div>

                 {/* Corner Overlay stats */}
                 <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest whitespace-nowrap">
                   Verified by CU Marine Science Lab
                 </div>
              </div>

              {/* Float Tech-Line */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-400/30 rounded-tr-[3rem] hidden lg:block"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-400/30 rounded-bl-[3rem] hidden lg:block"></div>
           </div>

           {/* Stats Side */}
           <div className="lg:col-span-5 space-y-8">
              {samples.map((sample, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveItem(i)}
                  className={`w-full text-left p-8 rounded-[2.5rem] border transition-all duration-500 group ${
                    activeItem === i ? 'glass border-[#C2B280]/40 bg-white/5' : 'bg-transparent border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className={`text-xl font-black transition-colors ${activeItem === i ? 'text-white' : 'text-white/30'}`}>{sample.title}</h4>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeItem === i ? 'text-[#C2B280] rotate-90' : 'text-white/10'}`} />
                  </div>
                  
                  {activeItem === i && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                       <p className="text-white/40 text-sm font-light leading-relaxed">{sample.desc}</p>
                       <div className="grid grid-cols-3 gap-4">
                          {Object.entries(sample.stats).map(([key, val]) => (
                            <div key={key}>
                               <p className="text-[8px] font-black text-[#C2B280] uppercase tracking-widest mb-1">{key}</p>
                               <p className="text-sm font-bold text-white">{val as string}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                  )}
                </button>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default MicroScienceGallery;
