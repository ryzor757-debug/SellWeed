
import React from 'react';
import { Milestone, Target, Globe, Shield, Anchor, CheckCircle2 } from 'lucide-react';

const BlueRoadmap: React.FC = () => {
  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden selection:bg-[#C2B280] selection:text-black pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative">
      
      {/* Background Waves */}
      <div className="absolute top-0 right-0 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-emerald-500/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C2B280]/10 text-[#C2B280] text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-8 border border-[#C2B280]/20">
            <Milestone className="w-3 h-3" />
            Project Lifecycle // v1.0
          </div>
          <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[1.0] md:leading-[0.8] mb-8 md:mb-12">
            The Delta <br />
            <span className="text-gradient">Timeline.</span>
          </h1>
          <p className="text-white/40 text-base md:text-2xl font-medium tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
            Our strategic journey from COX cluster pilots to a national sovereign blue economy.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-16 md:space-y-32">
           <RoadmapItem 
              year="2024"
              title="Genesis"
              desc="Successful deployment of first benthic nodes in Saint Martin’s. Protocol established with CU."
              milestones={['12 Active Nodes', 'Academic Vetted', '500+ Giggers']}
              status="COMPLETE"
              color="emerald-400"
              icon={<Anchor className="w-6 h-6" />}
           />
           <RoadmapItem 
              year="2025"
              title="Exchange"
              desc="Launching B2B Global Hub. Integrating Polygon carbon offset minting and liquidity desk."
              milestones={['B2B Live', 'On-Chain Ledger', '10k Tons Seq.']}
              status="ACTIVE"
              color="cyan-400"
              icon={<Globe className="w-6 h-6" />}
           />
           <RoadmapItem 
              year="2027"
              title="Scale"
              desc="Full integration of Benthic-Lidar arrays. Autonomous raft adjustment enabled via Neural Net v2."
              milestones={['Neural v2', '100+ Coastal Hubs', 'NDC Sync']}
              status="PLANNED"
              color="purple-400"
              icon={<Target className="w-6 h-6" />}
           />
           <RoadmapItem 
              year="2041"
              title="Wealth"
              desc="Bangladesh becomes the global capital for traceable marine biomass. National blue layer."
              milestones={['Blue Credit', '4.5M Lives', 'Net-Zero Bengal']}
              status="LONG-TERM"
              color="[#C2B280]"
              icon={<Shield className="w-6 h-6" />}
           />
        </div>

        {/* Closing Invitation */}
        <div className="mt-24 md:mt-40 p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] glass border-white/5 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-[#C2B280]/5 to-transparent opacity-50"></div>
           <h3 className="text-3xl md:text-7xl font-black tracking-tight mb-8">Ready to <br className="md:hidden" /> sail?</h3>
           <button className="w-full md:w-auto bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#C2B280] transition-all shadow-2xl active:scale-95">
             Partner with BlueHarvest
           </button>
        </div>
      </div>
    </div>
  );
};

const RoadmapItem: React.FC<{ year: string, title: string, desc: string, milestones: string[], status: string, color: string, icon: React.ReactNode }> = ({ year, title, desc, milestones, status, color, icon }) => (
  <div className="relative md:grid md:grid-cols-12 gap-10 md:gap-12 group">
    {/* Year Marker */}
    <div className="md:col-span-3 text-left md:text-right pb-4 md:pb-0">
       <span className={`text-4xl md:text-7xl font-black text-${color} tracking-tighter opacity-50 group-hover:opacity-100 transition-all`}>{year}</span>
       <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest text-${color} mt-1 md:mt-2`}>{status}</p>
    </div>
    
    {/* Content Card */}
    <div className="md:col-span-9 relative pt-2">
       {/* Dot Connector - repositioned for mobile border-l */}
       <div className={`absolute -left-[31px] md:-left-[61px] top-6 w-4 h-4 rounded-full bg-[#001B1E] border-[3px] border-${color} z-10`}></div>
       
       <div className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-white/5 group-hover:bg-white/5 transition-all">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-${color} mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
             {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6" })}
          </div>
          <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 md:mb-4 leading-none">{title}</h4>
          <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">{desc}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
             {milestones.map((m, i) => (
               <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-3.5 h-3.5 text-${color} opacity-40`} />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60">{m}</span>
               </div>
             ))}
          </div>
       </div>
    </div>
  </div>
);

export default BlueRoadmap;
