
import React, { useEffect, useRef, useState } from 'react';
import { Compass, Shield, Users, Zap, Star, ChevronDown } from 'lucide-react';

const BlueMission: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  
  // Ref for scroll-triggered animations
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
        }
      });
    }, observerOptions);

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden selection:bg-[#C2B280] selection:text-black">
      
      {/* Sacred Geometry Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="sacred-geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="rgba(194,178,128,0.2)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,242,255,0.1)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#sacred-geo)" className="animate-[pulse_10s_ease-in-out_infinite]" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#004B50]/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero / Introduction */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C2B280]/30 bg-[#C2B280]/5 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.6em]">
            <Compass className="w-3 h-3" />
            Orientation
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
            The North <br />
            <span className="text-gradient">Star.</span>
          </h1>
          <p className="text-white/40 text-xl font-medium tracking-widest uppercase">
            Our commitment to the Bengal Basin & The Planet
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#C2B280]/40 animate-bounce">
          <span className="text-[10px] font-black uppercase tracking-widest">Descend to Truth</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* The Mission Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-40 z-10">
        <div 
          ref={missionRef}
          className="max-w-5xl text-center transition-all duration-1000 ease-out opacity-0 translate-y-20"
        >
          <span className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">The Mission</span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
            To formalize the Blue Economy through <br />
            <span className="shimmer-water italic">verified data</span> and gig-work.
          </h2>
          <div className="h-px w-32 bg-[#C2B280]/30 mx-auto mt-20"></div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-40 z-10 bg-white/5 backdrop-blur-sm">
        <div 
          ref={visionRef}
          className="max-w-5xl text-center transition-all duration-1000 ease-out opacity-0 translate-y-20"
        >
          <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">The Vision 2030</span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
            To make Bangladesh the <br />
            <span className="text-white">global capital</span> of high-quality, <br />
            traceable seaweed.
          </h2>
          <div className="h-px w-32 bg-cyan-400/30 mx-auto mt-20"></div>
        </div>
      </section>

      {/* The Values Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-40 z-10">
        <div 
          ref={valuesRef}
          className="max-w-7xl w-full transition-all duration-1000 ease-out opacity-0 translate-y-20"
        >
          <div className="text-center mb-24">
            <span className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.8em] mb-8 block">The Values</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Our Moral Tech-Stack.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="w-8 h-8 text-cyan-400" />}
              title="Integrity"
              subtitle="The Truth Layer"
              desc="We believe trust is a math problem. By verifying every gram on-chain, we ensure that Bangladeshi quality is undeniable on the global stage."
            />
            <ValueCard 
              icon={<Users className="w-8 h-8 text-[#C2B280]" />}
              title="Inclusion"
              subtitle="The Blue Giggers"
              desc="Technology is meaningless if it leaves the coast behind. Our mission is to transform displacement into a digital-first livelihood."
            />
            <ValueCard 
              icon={<Zap className="w-8 h-8 text-emerald-400" />}
              title="Innovation"
              subtitle="The Tech Stack"
              desc="From Benthic Lidar to AI node calibration, we bring the world's most advanced marine science to the hands of the delta workers."
            />
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-40 px-6 text-center relative z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
          <Star className="w-12 h-12 text-[#C2B280] mx-auto animate-pulse" />
          <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Will you sail <br /> with us?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#C2B280] text-[#001B1E] px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
              Partner with the Delta
            </button>
            <button className="glass text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all border-white/10">
              Join the Gigger Hub
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
        .shimmer-water {
          background: linear-gradient(to right, #C2B280 20%, #FFFFFF 40%, #FFFFFF 60%, #C2B280 80%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, desc: string }> = ({ icon, title, subtitle, desc }) => (
  <div className="glass p-12 rounded-[3.5rem] border-white/5 hover:bg-white/5 transition-all group">
    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-3xl font-black text-white tracking-tight mb-2">{title}</h3>
    <p className="text-[10px] font-black text-[#C2B280] uppercase tracking-widest mb-6">{subtitle}</p>
    <p className="text-white/40 text-lg font-light leading-relaxed">{desc}</p>
  </div>
);

export default BlueMission;
