
import React, { useEffect, useState, useRef } from 'react';
import { Share2, Landmark, GraduationCap, Landmark as Bank, ShieldCheck, Database, Anchor, Globe, Globe2 } from 'lucide-react';

const BlueAlliance: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden selection:bg-[#C2B280] selection:text-black">
      
      {/* Neural Web Visualization Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Background Neural Web SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 242, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 242, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 242, 255, 0)" />
              </linearGradient>
            </defs>
            
            {/* Animated Connection Lines */}
            <NeuralLine x1={500} y1={500} x2={200} y2={300} delay="0s" />
            <NeuralLine x1={500} y1={500} x2={800} y2={300} delay="1s" />
            <NeuralLine x1={500} y1={500} x2={200} y2={700} delay="2s" />
            <NeuralLine x1={500} y1={500} x2={800} y2={700} delay="0.5s" />
            <NeuralLine x1={500} y1={500} x2={500} y2={200} delay="1.5s" />
            <NeuralLine x1={500} y1={500} x2={500} y2={800} delay="2.5s" />

            {/* Pulsing Dots */}
            <NeuralDot x={200} y={300} />
            <NeuralDot x={800} y={300} />
            <NeuralDot x={200} y={700} />
            <NeuralDot x={800} y={700} />
            <NeuralDot x={500} y={200} />
            <NeuralDot x={500} y={800} />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em]">
            <Share2 className="w-3 h-3" />
            The Blue Alliance
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12">
            The Delta <br />
            <span className="text-gradient">Ecosystem.</span>
          </h1>
          <p className="text-white/40 text-xl md:text-2xl font-medium tracking-wide max-w-3xl mx-auto">
            BlueHarvest is not a company. It is a sovereign collective effort. We are backed by the minds, capital, and governance of a rising nation.
          </p>
          
          <div className="pt-12 flex justify-center gap-8 opacity-40">
            <div className="w-16 h-px bg-white/20 my-auto"></div>
            <div className="font-serif italic text-2xl">Smart Bangladesh 2041</div>
            <div className="w-16 h-px bg-white/20 my-auto"></div>
          </div>
        </div>

        {/* Central Hub Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 rounded-full glass border-[#C2B280]/30 flex items-center justify-center shadow-[0_0_60px_rgba(194,178,128,0.2)] animate-pulse">
            <Anchor className="w-10 h-10 text-[#C2B280]" />
          </div>
        </div>
      </section>

      {/* Alliance Categories */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Category: Academic */}
          <AllianceCategory 
            icon={<GraduationCap className="w-12 h-12 text-cyan-400" />}
            title="Academic Architects"
            subtitle="The Minds Behind the Truth"
            desc="Our verification protocols are audited and developed alongside Bangladesh's leading marine research institutions."
            partners={[
              { name: "Chittagong University (CU)", role: "Marine Biology Research Node", desc: "Leading the benthic mapping and species classification protocols." },
              { name: "NSTU", role: "Fisheries Department", desc: "Co-developing the sustainable seeding and harvest guidelines for coastal giggers." }
            ]}
          />

          {/* Category: Financial */}
          <AllianceCategory 
            icon={<Bank className="w-12 h-12 text-[#C2B280]" />}
            title="The Credit Layer"
            subtitle="Financial Inclusion at Scale"
            desc="We bridge the gap between traditional banking and the informal blue economy."
            partners={[
              { name: "BRAC Bank", role: "Primary Financing Partner", desc: "Enabling micro-credit facilities for verified gigger identities." },
              { name: "City Bank", role: "Institutional Liquidity", desc: "Backing the trade finance for global seaweed export contracts." },
              { name: "Binimoy", role: "Interoperable Payouts", desc: "Providing the seamless digital bridge for instant gigger withdrawals." }
            ]}
          />

          {/* Category: Government */}
          <AllianceCategory 
            icon={<Landmark className="w-12 h-12 text-[#2E8B57]" />}
            title="Sovereign Shield"
            subtitle="Regulatory & Data Security"
            desc="Backed by the highest levels of national governance and data residency standards."
            partners={[
              { name: "Dept. of Fisheries", role: "Regulatory Oversight", desc: "Ensuring all blue-gigs comply with national aquaculture safety standards." },
              { name: "National Data Center", label: "NDC", role: "Sovereign Hosting", desc: "All sensitive worker and citizen data is hosted on local Tier IV infrastructure." }
            ]}
          />

        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-40 px-6 bg-white text-[#001B1E] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#004B50] mb-6 block">The Strength of Unity</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">United for the <br /> <span className="text-[#004B50]">Blue Frontier.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StatCard label="Institutional Partners" value="12+" desc="Universities and Govt bodies integrated into our protocol." />
            <StatCard label="Financial Nodes" value="03" desc="Tier-1 banks facilitating the Blue Credit Score." />
            <StatCard label="Data Integrity" value="100%" desc="Hosted on the National Data Center sovereign servers." />
          </div>
        </div>
      </section>

      {/* Final Call to Alliance */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Globe2 className="w-16 h-16 text-[#C2B280] mx-auto mb-12 opacity-50" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12">Join the <br /> National Consensus.</h2>
          <p className="text-white/40 text-xl font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            We are building a legacy that will define the next century of the Bengal Basin. Be part of the ecosystem that matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#C2B280] text-[#001B1E] px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
              Partner with BlueHarvest
            </button>
            <button className="glass text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Download Partnership Deck
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #C2B280 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes lineDash {
          to { stroke-dashoffset: -100; }
        }
        .neural-line {
          stroke-dasharray: 5, 5;
          animation: lineDash 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

const NeuralLine: React.FC<{ x1: number, y1: number, x2: number, y2: number, delay: string }> = ({ x1, y1, x2, y2, delay }) => (
  <line 
    x1={x1} y1={y1} x2={x2} y2={y2} 
    stroke="url(#lineGrad)" 
    strokeWidth="1.5" 
    className="neural-line"
    style={{ animationDelay: delay }}
  />
);

const NeuralDot: React.FC<{ x: number, y: number }> = ({ x, y }) => (
  <circle 
    cx={x} cy={y} r="4" 
    fill="#00F2FF" 
    className="animate-pulse"
  />
);

const AllianceCategory: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, desc: string, partners: any[] }> = ({ icon, title, subtitle, desc, partners }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
    <div className="lg:col-span-5 space-y-8">
      <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
        {icon}
      </div>
      <div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">{title}</h2>
        <p className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.4em] mb-8">{subtitle}</p>
        <p className="text-white/40 text-xl font-light leading-relaxed">{desc}</p>
      </div>
    </div>
    
    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
      {partners.map((partner, i) => (
        <div key={i} className="glass p-10 rounded-[3rem] border-white/5 hover:bg-white/5 transition-all group">
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-xl font-black text-white tracking-tight">{partner.name}</h4>
            {partner.label && <span className="text-[9px] font-black bg-white/10 px-2 py-0.5 rounded text-white/40 uppercase tracking-widest">{partner.label}</span>}
          </div>
          <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-4">{partner.role}</p>
          <p className="text-white/30 text-sm leading-relaxed font-medium">{partner.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const StatCard: React.FC<{ label: string, value: string, desc: string }> = ({ label, value, desc }) => (
  <div className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4">
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
    <p className="text-7xl font-black text-[#001B1E] tracking-tighter">{value}</p>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default BlueAlliance;
