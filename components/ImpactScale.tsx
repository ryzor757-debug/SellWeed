import React from 'react';
import { CloudRain, Users, TrendingUp, GraduationCap } from 'lucide-react';

const ImpactScale: React.FC = () => {
  const stats = [
    {
      label: 'Carbon Sequestered',
      value: '10,000+',
      suffix: 'Tons',
      icon: <CloudRain className="w-6 h-6" />,
      subtext: 'Removing industrial footprints from our atmosphere.'
    },
    {
      label: 'Workers Onboarded',
      value: '5,000+',
      suffix: 'Souls',
      icon: <Users className="w-6 h-6" />,
      subtext: 'Direct livelihoods created across the Bay of Bengal.'
    },
    {
      label: 'Global Opportunity',
      value: '$30B',
      suffix: 'Market',
      icon: <TrendingUp className="w-6 h-6" />,
      subtext: 'The untapped potential of the blue bio-economy.'
    },
    {
      label: 'Student Oracles',
      value: '1,000+',
      suffix: 'Brains',
      icon: <GraduationCap className="w-6 h-6" />,
      subtext: 'The next generation of environmental auditors.'
    }
  ];

  return (
    <section className="py-40 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center reveal">
          <h2 className="text-[#52B788] font-black tracking-[0.4em] uppercase text-[10px] mb-8">ESG Impact Performance</h2>
          <h3 className="text-5xl md:text-8xl font-black text-[#1E293B] tracking-tighter leading-none mb-8">Large-Scale <br />Restoration.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group glass-card p-10 rounded-[3rem] border-white/60">
              <div className="mb-8 p-4 rounded-2xl glass border-white/40 group-hover:bg-[#52B788]/10 group-hover:text-[#52B788] transition-all shadow-sm">
                {stat.icon}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-[#1E293B]">
                  {stat.value}
                </div>
                <div className="text-[#52B788] font-black text-xl tracking-widest uppercase">
                  {stat.suffix}
                </div>
              </div>

              <div className="h-px w-12 bg-[#1E293B]/10 mb-8 mx-auto lg:mx-0"></div>

              <div>
                <h4 className="text-[#1E293B] font-black text-xs mb-3 uppercase tracking-widest">{stat.label}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto lg:mx-0">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Partnership Badge */}
        <div className="mt-32 p-12 md:p-20 glass rounded-[4rem] border-white/60 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-white/40 to-transparent shadow-2xl">
          <div className="max-w-md">
            <h4 className="text-3xl font-black text-[#1E293B] tracking-tight mb-4 leading-tight">Institutional Ready.</h4>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Our architecture is compliant with EU taxonomy for sustainable activities and TNFD reporting standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000">
            <div className="font-black italic text-3xl text-slate-900">UNESCO</div>
            <div className="font-serif text-3xl font-bold text-slate-900">World Bank</div>
            <div className="font-sans text-3xl font-black tracking-tighter text-slate-900">IUCN</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactScale;