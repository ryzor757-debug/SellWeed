
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Leaf, 
  Box, 
  ArrowUpRight, 
  Activity, 
  ShieldCheck, 
  Zap,
  Clock,
  Waves
} from 'lucide-react';

const InvestorDashboard: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState(0);

  const assets = [
    { id: 'R-402', name: 'St. Martin Deep Raft', status: 'Optimal', yield: '+24%', oxygen: '450g/h' },
    { id: 'R-109', name: 'Cox Terminal Node', status: 'Harvesting', yield: '+18%', oxygen: '380g/h' },
    { id: 'R-772', name: 'Kuakata Delta Grid', status: 'Growing', yield: '+12%', oxygen: '310g/h' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-[#000D0E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
              <ShieldCheck className="w-3 h-3" />
              Verified Portal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
              The Blue <span className="text-gradient">Ledger.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <StatSmall label="Portfolio" value="$124.5k" trend="+4.2%" />
            <StatSmall label="Offset" value="1.2k T" trend="+12%" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Asset Viewer: 3D Scene Simulator */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 relative overflow-hidden border-white/5 h-[400px] md:h-[600px] group">
              <div className="absolute top-6 md:top-10 left-6 md:left-10 z-20">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">Active Assets</h2>
                <p className="text-white/40 text-xs md:text-sm font-light">Real-time telemetry of your rafts.</p>
              </div>

              {/* 3D Scene - Relative scaling */}
              <div className="absolute inset-0 flex items-center justify-center pt-20">
                <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] scale-75 md:scale-100">
                  <div className="w-48 h-48 md:w-72 md:h-72 relative animate-[spin_15s_linear_infinite] preserve-3d">
                    <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-xl bg-emerald-400/5">
                      <div className="w-full h-full grid grid-cols-4 grid-rows-4 opacity-20">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="border border-emerald-400/10"></div>
                        ))}
                      </div>
                    </div>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="absolute h-32 md:h-48 w-px bg-gradient-to-t from-emerald-400 to-transparent"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, transform: `translateZ(${Math.random() * 40}px)`, animation: 'sway 4s ease-in-out infinite alternate' }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute bottom-10 left-0 right-0 h-40 opacity-10 pointer-events-none">
                    <Waves className="w-full h-full text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Asset Selector */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-20 flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-2">
                {assets.map((asset, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedAsset(i)}
                    className={`flex-shrink-0 px-4 md:px-6 py-3 md:py-4 rounded-2xl border transition-all text-left ${selectedAsset === i ? 'bg-emerald-400/10 border-emerald-400 text-white' : 'glass border-white/5 text-white/40 hover:bg-white/5'}`}
                  >
                    <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5">Batch {asset.id}</div>
                    <div className="text-xs md:text-sm font-bold whitespace-nowrap">{asset.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats row - Grid optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="glass rounded-[2rem] p-6 md:p-8 border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">ROI Projection</h3>
                </div>
                <div className="h-24 md:h-32 w-full relative">
                   <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">+$12,402</span>
                   <p className="text-[9px] md:text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Est. 60-Day Return</p>
                </div>
              </div>

              <div className="glass rounded-[2rem] p-6 md:p-8 border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">Oxygen Meter</h3>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">142<span className="text-lg opacity-40 ml-1">g/m²</span></span>
                  <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest text-right">CO2 Removal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel: Stacked on mobile */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 border-white/5 flex-grow">
              <h3 className="text-lg md:text-xl font-bold text-white mb-8 tracking-tight">System Logs</h3>
              <div className="space-y-4 md:space-y-6">
                <FeedItem time="14:02" title="Batch #902 Verified" desc="Ground data matching satellite scan." />
                <FeedItem time="Yesterday" title="Growth Peak" desc="Nutrient levels rising in St. Martin Hub." />
                <FeedItem time="2 days ago" title="Ledger Payout" desc="Q1 Carbon offsets distributed." />
              </div>
            </div>

            <button className="w-full bg-emerald-400 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-between group hover:bg-white transition-all active:scale-[0.98]">
              <div className="text-left">
                <h4 className="text-black font-black text-lg md:text-xl tracking-tight leading-none mb-1">Expand Assets</h4>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-widest">Next-Gen Rafts Available</p>
              </div>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-[1000px] { perspective: 1000px; }
        @keyframes sway { from { transform: rotate(-5deg); } to { transform: rotate(5deg); } }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

const StatSmall: React.FC<{ label: string, value: string, trend: string }> = ({ label, value, trend }) => (
  <div className="glass px-4 md:px-6 py-2 md:py-3 rounded-2xl border-white/5 min-w-[120px]">
    <p className="text-[8px] md:text-[9px] text-white/30 font-bold uppercase tracking-[0.2em] mb-0.5">{label}</p>
    <div className="flex items-center gap-2">
      <span className="text-base md:text-lg font-bold text-white">{value}</span>
      <span className="text-[9px] md:text-[10px] font-bold text-emerald-400">{trend}</span>
    </div>
  </div>
);

const FeedItem: React.FC<{ time: string, title: string, desc: string }> = ({ time, title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
      <div className="w-px flex-grow bg-white/10 my-1"></div>
    </div>
    <div className="pb-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[8px] md:text-[9px] font-bold text-white/20 uppercase tracking-widest">{time}</span>
        <h5 className="text-[11px] md:text-xs font-bold text-white/80">{title}</h5>
      </div>
      <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default InvestorDashboard;
