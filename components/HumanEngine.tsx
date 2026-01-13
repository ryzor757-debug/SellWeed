import React from 'react';
import { Users, Microscope, Scissors, ArrowUpRight, Share2 } from 'lucide-react';

const HumanEngine: React.FC = () => {
  const workers = [
    {
      title: 'The Blue Giggers',
      banglaTitle: 'ব্লু গিগাস (সাগরিকা গিগ কর্মী)',
      subtitle: 'Earn with the Tides',
      description: 'Displaced coastal workers transitioning into the digital ocean economy through micro-tasking and seasonal harvest logistics.',
      image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=800&auto=format&fit=crop',
      icon: <Users className="w-5 h-5" />,
      tag: 'Field Operations',
      accent: 'border-cyan-500/20'
    },
    {
      title: 'The Blue Verifiers',
      banglaTitle: 'ব্লু ভেরিফায়ার্স (সত্যতা যাচাইকারী)',
      subtitle: 'Guided by Science',
      description: 'Local university students acting as decentralized Oracles. Using mobile spectral analysis to verify seaweed quality and carbon data.',
      image: 'https://images.unsplash.com/photo-1523240715632-6103498a3590?q=80&w=800&auto=format&fit=crop',
      icon: <Microscope className="w-5 h-5" />,
      tag: 'Scientific Audit',
      accent: 'border-[#C2B280]/20'
    },
    {
      title: 'The Blue Artisans',
      banglaTitle: 'ব্লু কারিগর (তীরবর্তী শিল্পী)',
      subtitle: 'Crafting the Coast',
      description: 'Coastal women leading the value-addition chain. Turning raw seaweed into refined agar and sustainable bioplastic precursors.',
      image: 'https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=800&auto=format&fit=crop',
      icon: <Scissors className="w-5 h-5" />,
      tag: 'Value Addition',
      accent: 'border-[#2E8B57]/20'
    }
  ];

  const handleShare = (worker: any) => {
    if (navigator.share) {
      navigator.share({
        title: `Project BlueHarvest: ${worker.title}`,
        text: `Check out the ${worker.title} powering Bangladesh's blue economy.`,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden contain-paint">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#52B788]/5 rounded-full blur-[120px] pointer-events-none gpu-accelerated"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <h2 className="text-[#52B788] font-bold tracking-[0.2em] uppercase text-[10px] mb-6">The Collective Workforce</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1E293B] mb-8">
            The Human Engine.
          </h3>
          <p className="max-w-2xl mx-auto text-[#1E293B]/60 text-lg font-light leading-relaxed">
            Our technology is only as strong as the people who power it. We bridge the gap between rural labor and global digital markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workers.map((worker, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col glass-card rounded-[2.5rem] overflow-hidden gpu-accelerated`}
            >
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={worker.image} 
                  alt={worker.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-[9px] font-bold uppercase tracking-wider text-[#1E293B]">
                    {worker.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 pt-0 relative z-20 flex-grow flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl glass border-white/20 flex items-center justify-center text-[#52B788] group-hover:bg-[#52B788] group-hover:text-white transition-all duration-300 shadow-sm">
                    {worker.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleShare(worker)}
                      className="p-2 rounded-lg bg-transparent hover:bg-[#52B788]/10 text-slate-400 hover:text-[#52B788] transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#52B788] transition-colors" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-[#1E293B] mb-1">{worker.title}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">{worker.banglaTitle}</p>
                <p className="text-[#52B788] font-medium text-sm mb-4 tracking-tight">{worker.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {worker.description}
                </p>

                <div className="mt-auto pt-8 border-t border-[#1E293B]/5 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
                         <img 
                          src={`https://i.pravatar.cc/100?u=${worker.title}${i}`} 
                          alt="Avatar" 
                          loading="lazy" 
                          className="w-full h-full object-cover" 
                         />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">+ 1.2k Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanEngine;