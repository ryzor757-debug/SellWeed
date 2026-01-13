
import React from 'react';
import { Leaf, Cpu, ShieldCheck, Globe, Anchor, ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[#52B788] font-black tracking-[0.6em] uppercase text-[10px] mb-8">Integrated Ecosystem</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tightest text-[#1E293B] leading-[0.85]">
              Regenerative design for a <span className="text-gradient">modern delta.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-xs text-lg font-light leading-[1.618] italic border-l border-[#52B788]/20 pl-8">
            "Connecting local heritage with high-fidelity digital capital."
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[340px]">
          
          {/* Main Card: Workforce */}
          <div className="md:col-span-8 glass-card rounded-[3.5rem] p-12 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
              <Anchor className="w-64 h-64 text-[#52B788]" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl glass border-white/40 flex items-center justify-center text-[#52B788] mb-10 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7" />
              </div>
              <h4 className="text-4xl font-black text-[#1E293B] mb-6 tracking-tightest">Deshi Centered.</h4>
              <p className="text-slate-500 max-w-lg text-xl font-light leading-[1.618]">
                Empowering master divers and coastal artisans with high-premium gig work. We turn ancestral wisdom into a global economic engine.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
              <span>01. Digital Livelihoods</span>
              <div className="w-12 h-[1px] bg-[#52B788]/20"></div>
              <span>Protocol v1.0</span>
            </div>
          </div>

          {/* Verification Node */}
          <div className="md:col-span-4 glass-card rounded-[3.5rem] p-10 flex flex-col justify-between bg-gradient-to-br from-[#52B788]/5 to-transparent group">
            <div className="w-14 h-14 rounded-2xl glass border-white/40 flex items-center justify-center text-[#52B788] group-hover:rotate-12 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#1E293B] mb-4 tracking-tightest">Truth Oracle.</h4>
              <p className="text-slate-500 text-base font-light leading-relaxed">Geofenced, spectral-scanned, and hashed on Polygon for total buyer confidence.</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse"></span>
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Verification Active</span>
            </div>
          </div>

          {/* Market Access */}
          <div className="md:col-span-4 glass-card rounded-[3.5rem] p-10 flex flex-col justify-between group">
             <div className="w-14 h-14 rounded-2xl glass border-white/40 flex items-center justify-center text-cyan-500 group-hover:-translate-y-2 transition-transform">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#1E293B] mb-4 tracking-tightest">Global Transit.</h4>
              <p className="text-slate-500 text-base font-light leading-relaxed">Direct links to global biotech hubs, pharmaceutical giants, and material labs.</p>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black text-cyan-600 uppercase tracking-widest hover:text-cyan-500 transition-colors">
              Access Trade Desk <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* AI Tech Integration */}
          <div className="md:col-span-8 glass-card rounded-[3.5rem] p-12 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] group-hover:scale-105 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl glass border-white/40 flex items-center justify-center text-[#1E293B] mb-10 group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <h4 className="text-4xl font-black text-[#1E293B] mb-6 tracking-tightest">Neural Optimization.</h4>
                <p className="text-slate-500 max-w-xl text-xl font-light leading-[1.618]">
                  Predicting harvest windows using 14-day climate modeling. Our neural nodes calibrate raft positioning for maximum agar concentration.
                </p>
              </div>
              <div className="flex gap-4">
                <Badge text="Benthic Lidar" />
                <Badge text="Neural Net v4" />
                <Badge text="Spectral ML" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-5 py-2 rounded-full glass border-white/40 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-[#1E293B] hover:border-[#52B788]/40 transition-all cursor-default">
    {text}
  </span>
);

export default BentoGrid;
