import React, { useEffect, useRef } from 'react';
import { ArrowRight, Waves, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Volumetrics - Biotech Light theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-[#E0F2FE] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[30vw] h-[30vw] bg-[#52B788]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center stagger-reveal active">
        <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2 rounded-full glass border-[#1E293B]/10 text-[#52B788] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl">
          <Waves className="w-3.5 h-3.5" />
          Delta Intelligence Protocol
        </div>

        <h1 className="fluid-h1 font-black tracking-tightest leading-[0.9] mb-8 md:mb-12">
          <span className="block text-[#1E293B]">The Ocean is Our Office.</span>
          <span className="block text-gradient">Truth is Our Currency.</span>
        </h1>

        <p className="max-w-2xl mx-auto fluid-p text-[#1E293B]/60 font-light leading-relaxed mb-12 md:mb-16 px-4">
          Bangladesh’s first tri-nodal gig-platform turning seaweed into <span className="text-[#1E293B] italic">verified global assets</span>. Empowering coastal artisans with decentralized blockchain transparency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-md mx-auto sm:max-w-none mb-20">
          <button className="w-full sm:w-auto group relative px-10 py-5 md:px-12 md:py-6 bg-[#52B788] text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] btn-ripple shadow-xl shadow-[#52B788]/20">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore the Blue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 glass text-[#1E293B] rounded-full font-black text-[11px] uppercase tracking-[0.2em] border-[#1E293B]/10 hover:bg-[#1E293B]/5 transition-all">
            Watch the Harvest
          </button>
        </div>

        {/* Feature 1: Blue Carbon Live Pulse */}
        <div className="relative w-full max-w-4xl mx-auto px-4 mt-8 reveal">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#52B788] animate-ping"></div>
                 <span className="text-[9px] font-black text-[#52B788] uppercase tracking-widest">Live Sequestration Pulse</span>
              </div>
              <span className="text-[10px] font-mono text-[#1E293B]/40">1.2kg CO2e / sec</span>
           </div>
           <div className="h-16 w-full glass rounded-2xl border-[#52B788]/20 overflow-hidden relative group">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                 <path d="M0,32 Q50,10 100,32 T200,32 T300,32 T400,32 T500,32 T600,32 T700,32 T800,32" fill="none" stroke="rgba(82, 183, 136, 0.4)" strokeWidth="2" className="animate-pulse-wave" />
                 <path d="M0,32 Q50,20 100,32 T200,32 T300,32 T400,32 T500,32 T600,32 T700,32 T800,32" fill="none" stroke="rgba(82, 183, 136, 0.2)" strokeWidth="1" className="animate-pulse-wave-slow" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#52B788]/5 backdrop-blur-sm">
                 <p className="text-[9px] font-black text-[#52B788] uppercase tracking-[0.4em]">Currently absorbing 10.4k Tons across our network</p>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center text-[#1E293B]/30 font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] gap-6 md:gap-12">
          <StatNode label="Active Nodes" value="1,240" />
          <div className="hidden lg:block h-px w-20 bg-[#1E293B]/10"></div>
          <StatNode label="CO2 Sequestered" value="10.4k T" />
          <div className="hidden lg:block h-px w-20 bg-[#1E293B]/10"></div>
          <StatNode label="Verified Giggers" value="5.2k+" />
          <div className="hidden lg:block h-px w-20 bg-[#1E293B]/10"></div>
          <StatNode label="Export Volume" value="$4.2M" />
        </div>
      </div>

      <style>{`
        @keyframes pulse-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-400px); }
        }
        .animate-pulse-wave {
          animation: pulse-wave 4s linear infinite;
          stroke-dasharray: 40, 10;
        }
        .animate-pulse-wave-slow {
          animation: pulse-wave 8s linear infinite reverse;
          stroke-dasharray: 20, 20;
        }
      `}</style>
    </section>
  );
};

const StatNode: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center md:items-start gap-1 group cursor-default text-[#1E293B]">
    <span className="text-[#52B788] text-sm md:text-xl tracking-tightest group-hover:text-[#1E293B] transition-colors duration-500 leading-none">{value}</span>
    <span className="opacity-60">{label}</span>
  </div>
);

export default Hero;