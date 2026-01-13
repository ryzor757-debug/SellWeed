
import React, { useEffect, useState } from 'react';
import { Target, Users, TrendingUp, CloudRain, Waves, ShieldCheck, Globe, ArrowRight } from 'lucide-react';

const BlueSDGs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const goals = [
    {
      number: 1,
      title: "No Poverty",
      color: "#E5243B",
      icon: <Users className="w-10 h-10" />,
      metric: "Average Income",
      value: "+400%",
      subtext: "Compared to traditional small-scale artisanal fishing.",
      desc: "By formalizing coastal labor into a high-value biotech export chain, we move families from subsistence to sovereign wealth.",
      tags: ["Digital Payments", "Bankable Credit", "NID Identity"]
    },
    {
      number: 8,
      title: "Decent Work & Growth",
      color: "#A21942",
      icon: <TrendingUp className="w-10 h-10" />,
      metric: "Verified Blue Gigs",
      value: "5,412",
      subtext: "Digital-first coastal livelihoods created by 2025.",
      desc: "We provide master-seeder training and automated micro-payouts, ensuring safe, productive, and meaningful employment for the delta.",
      tags: ["Academy Training", "Fair Wage", "Workplace Safety"]
    },
    {
      number: 13,
      title: "Climate Action",
      color: "#3F7E44",
      icon: <CloudRain className="w-10 h-10" />,
      metric: "Carbon Sink",
      value: "10,450t",
      subtext: "CO2e sequestered and verified on-chain.",
      desc: "Seaweed is the ocean's most efficient carbon capture technology. Every hectare we farm actively heals our atmosphere.",
      tags: ["Emission Negative", "Polygon Minted", "Lidar Audited"]
    },
    {
      number: 14,
      title: "Life Below Water",
      color: "#0A97D9",
      icon: <Waves className="w-10 h-10" />,
      metric: "Shelf Restoration",
      value: "1,200ha",
      subtext: "Active benthic reef restoration across Cox's Bazar.",
      desc: "Our seaweed grids serve as nursery grounds for fish and crustaceans, reversing the damage of industrial trawling.",
      tags: ["Biodiversity Gain", "Reef Nursery", "Marine Protected"]
    }
  ];

  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden selection:bg-[#C2B280] selection:text-black">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#004B50]/10 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#2E8B57]/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.6em] mb-8">
            <Target className="w-3 h-3" />
            Global Framework Alignment
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
            The World's <br />
            <span className="text-gradient">Checklist.</span>
          </h1>
          <p className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
            BlueHarvest is engineered to meet the United Nations Sustainable Development Goals. Trust is our currency, and the planet is our ledger.
          </p>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, i) => (
            <SDGCard key={goal.number} goal={goal} />
          ))}
        </div>

        {/* Closing ESG Statement */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] glass border-white/5 bg-gradient-to-br from-white/5 to-transparent text-center">
           <Globe className="w-16 h-16 text-[#C2B280] mx-auto mb-10 opacity-50" />
           <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">Institutional <br />ESG Grade.</h3>
           <p className="text-white/40 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
             Our data architecture provides institutional investors with a real-time, auditable link to their ESG commitments. We transform "intent" into "immutable proof."
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C2B280] transition-all shadow-2xl">
                Download ESG Taxonomy
              </button>
              <button className="glass text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all border-white/10">
                Contact Ethics Desk
              </button>
           </div>
        </div>

      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #C2B280 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

const SDGCard: React.FC<{ goal: any }> = ({ goal }) => (
  <div className="group relative glass rounded-[3.5rem] p-12 border-white/5 hover:bg-white/5 transition-all overflow-hidden">
    {/* SDG Color Accent Background */}
    <div 
      className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-10 transition-opacity group-hover:opacity-20"
      style={{ backgroundColor: goal.color }}
    ></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-12">
        <div className="flex items-center gap-6">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110"
            style={{ backgroundColor: goal.color }}
          >
            {goal.icon}
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: goal.color }}>SDG {goal.number}</p>
            <h4 className="text-3xl font-black text-white tracking-tight leading-none">{goal.title}</h4>
          </div>
        </div>
        <div className="text-right">
           <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Impact Metric</p>
           <p className="text-4xl font-black text-white tracking-tighter">{goal.value}</p>
        </div>
      </div>

      <div className="flex-grow space-y-6">
        <p className="text-white/60 text-lg font-light leading-relaxed">
          {goal.desc}
        </p>
        
        <div className="flex flex-wrap gap-2">
           {goal.tags.map((tag: string) => (
             <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest">
               {tag}
             </span>
           ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{goal.metric} Tracking Active</span>
         <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group/btn" style={{ color: goal.color }}>
           View Verification <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
         </button>
      </div>
    </div>
  </div>
);

export default BlueSDGs;
