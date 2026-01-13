
import React, { useState } from 'react';
import { Target, Radio, Waves, Activity, MapPin } from 'lucide-react';

interface HarvestSite {
  id: string;
  name: string;
  x: string;
  y: string;
  salinity: string;
  giggers: number;
  growth: string;
  status: 'Active' | 'Optimal' | 'Harvesting';
}

const BlueFrontierMap: React.FC = () => {
  const [activeSite, setActiveSite] = useState<HarvestSite | null>(null);

  const sites: HarvestSite[] = [
    {
      id: 'coxs-bazar',
      name: "Cox's Bazar Terminal",
      x: '78%',
      y: '65%',
      salinity: '31.2ppt',
      giggers: 142,
      growth: '+12.4%',
      status: 'Active'
    },
    {
      id: 'st-martins',
      name: "St. Martin's Deep Sea",
      x: '88%',
      y: '85%',
      salinity: '34.8ppt',
      giggers: 89,
      growth: '+18.1%',
      status: 'Optimal'
    },
    {
      id: 'kuakata',
      name: 'Kuakata Delta Node',
      x: '35%',
      y: '72%',
      salinity: '28.5ppt',
      giggers: 56,
      growth: '+9.2%',
      status: 'Harvesting'
    },
    {
      id: 'hatiya',
      name: 'Hatiya Island Hub',
      x: '55%',
      y: '55%',
      salinity: '29.1ppt',
      giggers: 74,
      growth: '+11.5%',
      status: 'Active'
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#001214] relative overflow-hidden">
      {/* Background Grid & Scan Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#001B1E] via-transparent to-[#001B1E]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div>
            <h2 className="text-[#C2B280] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Live Geofence Telemetry
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Blue Frontier.</h3>
          </div>
          <div className="lg:text-right">
            <p className="text-white/40 text-sm font-mono uppercase tracking-widest mb-2">Satellite Scan: 100% Operational</p>
            <div className="flex gap-4 lg:justify-end">
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                LAT: 21.4272° N
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                LNG: 91.9702° E
              </div>
            </div>
          </div>
        </div>

        {/* The Map Interface */}
        <div className="relative aspect-[21/9] w-full glass rounded-[3rem] border-white/5 overflow-hidden shadow-2xl bg-[#000d0e]">
          {/* Minimalist Coastline SVG Background */}
          <div className="absolute inset-0 z-0 opacity-20 scale-110">
            <svg viewBox="0 0 1000 400" className="w-full h-full fill-none stroke-[#00F2FF]/30 stroke-[0.5]" preserveAspectRatio="xMidYMid slice">
              {/* Stylized Bangladesh Southern Coastline */}
              <path d="M100,0 L120,50 L100,100 L150,150 L120,200 L180,250 L150,300 L250,320 L300,300 L350,350 L450,330 L500,380 L600,350 L700,370 L800,300 L850,380 L950,400 L1000,350" />
              <path d="M50,0 Q150,200 250,380" />
              <path d="M350,0 Q450,200 550,380" />
              <circle cx="880" cy="350" r="10" /> {/* St Martins */}
            </svg>
          </div>

          {/* Pulse Nodes */}
          {sites.map((site) => (
            <div 
              key={site.id}
              className="absolute z-20 cursor-pointer group"
              style={{ left: site.x, top: site.y }}
              onMouseEnter={() => setActiveSite(site)}
              onMouseLeave={() => setActiveSite(null)}
            >
              {/* Pulse Rings */}
              <div className="absolute -inset-4 bg-cyan-400/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -inset-2 bg-cyan-400/30 rounded-full animate-ping delay-75 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Core Node */}
              <div className={`relative w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${activeSite?.id === site.id ? 'bg-cyan-400 scale-125 shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'bg-transparent'}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              {/* Label */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                 <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {site.name}
                 </span>
              </div>
            </div>
          ))}

          {/* Hover Tooltip (Glassmorphism) */}
          {activeSite && (
            <div 
              className="absolute z-30 pointer-events-none transition-all duration-500 animate-in fade-in zoom-in-95"
              style={{ 
                left: `calc(${activeSite.x} + 2rem)`, 
                top: `calc(${activeSite.y} - 4rem)` 
              }}
            >
              <div className="glass p-6 rounded-2xl border-cyan-400/30 min-w-[240px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div>
                    <h5 className="text-white font-bold text-sm tracking-tight">{activeSite.name}</h5>
                    <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">{activeSite.status}</p>
                  </div>
                  <Target className="w-5 h-5 text-[#C2B280]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                      <Waves className="w-3 h-3" /> Salinity
                    </div>
                    <p className="text-white font-mono text-sm">{activeSite.salinity}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                      <Activity className="w-3 h-3" /> Growth
                    </div>
                    <p className="text-[#2E8B57] font-mono text-sm">{activeSite.growth}</p>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <div className="flex items-center gap-1.5 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                      <Radio className="w-3 h-3" /> Active Giggers
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-1 flex-grow bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-cyan-400" style={{ width: `${(activeSite.giggers/200)*100}%` }}></div>
                       </div>
                       <p className="text-white font-mono text-sm">{activeSite.giggers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compass Rose */}
          <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-20">
             <div className="w-px h-12 bg-white/50"></div>
             <span className="text-[10px] font-bold text-white tracking-[0.5em]">NORTH</span>
             <div className="w-px h-12 bg-white/50"></div>
          </div>
        </div>

        {/* Global Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12">
          <LegendItem icon={<Activity className="w-4 h-4" />} label="Real-time Photosynthesis" />
          <LegendItem icon={<Waves className="w-4 h-4" />} label="Benthic Current Tracking" />
          <LegendItem icon={<MapPin className="w-4 h-4" />} label="Asset Geofencing" />
        </div>
      </div>
    </section>
  );
};

const LegendItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-white/30 hover:text-white/60 transition-colors">
    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

export default BlueFrontierMap;
