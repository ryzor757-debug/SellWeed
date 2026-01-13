
import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Thermometer, Waves, Wind, AlertTriangle, Zap, Network, Activity, ShieldCheck, ChevronRight, Cpu } from 'lucide-react';

const PredictiveHarvest: React.FC = () => {
  const [activeSite, setActiveSite] = useState<number>(0);
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  // Simulated Neural Network background dots
  const nodes = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: `${Math.random() * 5}s`
  }));

  const sites = [
    { name: "Terminal-Alpha", region: "Saint Martin", yield: 92.4, status: "Optimal" },
    { name: "Node-Gamma", region: "Cox's Bazar", yield: 78.1, status: "Advisory" },
    { name: "Delta-Zeta", region: "Kuakata", yield: 84.5, status: "Harvesting" },
  ];

  return (
    <div className="bg-[#000D0E] min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black overflow-hidden relative">
      
      {/* Background Neural Network Viz */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        {nodes.map(node => (
          <div 
            key={node.id}
            className="absolute bg-cyan-400 rounded-full blur-[1px] animate-pulse"
            style={{
              top: node.top,
              left: node.left,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: node.delay
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full stroke-cyan-400/10 stroke-[0.5] fill-none">
           <path d="M0,0 L1000,1000" />
           <path d="M1000,0 L0,1000" />
           <circle cx="50%" cy="50%" r="300" />
           <circle cx="50%" cy="50%" r="500" />
        </svg>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 border-b border-white/5 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6 border border-cyan-500/20">
              <Brain className="w-3 h-3" />
              Machine Learning Core // v4.2.0
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Harvest <br />
              <span className="text-gradient">Intelligence.</span>
            </h1>
            <p className="text-white/40 text-xl font-medium leading-relaxed">
              Leveraging benthic sensor fusion and 14-day climate forecasting to eliminate yield uncertainty and optimize the blue economy value chain.
            </p>
          </div>

          <div className="flex gap-4">
             <div className="glass p-8 rounded-[2.5rem] border-white/5 min-w-[240px]">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">ML Model Accuracy</p>
                <div className="flex items-end gap-3">
                   <span className="text-5xl font-black text-white tracking-tighter">98.4<span className="text-xl text-cyan-400">%</span></span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-[#2E8B57] uppercase">
                   <div className="w-2 h-2 rounded-full bg-[#2E8B57] animate-ping"></div>
                   Retraining Real-time
                </div>
             </div>
          </div>
        </div>

        {/* Main Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* AI Forecasting Widget */}
          <div className="lg:col-span-8 glass rounded-[3rem] p-12 border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-12 relative z-10">
               <div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">14-Day Yield Projection</h3>
                  <p className="text-white/40 text-sm">Predictive biomass growth vs. historical benthic mean.</p>
               </div>
               <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">Expected</button>
                  <button className="px-4 py-2 rounded-xl bg-cyan-500/10 text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/20">Actual</button>
               </div>
            </div>

            <div className="h-72 w-full relative mb-12 z-10">
               {/* Custom SVG Line Chart */}
               <svg viewBox="0 0 800 200" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  {[0, 1, 2, 3, 4].map(i => (
                    <line key={i} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}

                  {/* Prediction Line */}
                  <path 
                    d="M0,150 Q100,120 200,140 T400,100 T600,60 T800,40" 
                    className="stroke-white/10 stroke-[2] fill-none" 
                    strokeDasharray="4 4"
                  />
                  
                  {/* Actual Line (Animated) */}
                  <path 
                    d="M0,160 Q100,140 200,150 T400,120 T600,80 T800,50" 
                    className="stroke-cyan-400 stroke-[4] fill-none drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                  />
                  
                  <path 
                    d="M0,160 Q100,140 200,150 T400,120 T600,80 T800,50 V200 H0 Z" 
                    fill="url(#areaGrad)" 
                  />

                  {/* Interaction Points */}
                  <circle cx="400" cy="120" r="6" className="fill-cyan-400 animate-pulse" />
                  <text x="410" y="110" className="fill-white text-[10px] font-mono">Current Efficiency: 89.2%</text>
               </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 z-10 relative">
               <ForecastMeta icon={<Thermometer className="w-4 h-4" />} label="Avg Temp" value="26.4°C" status="Stable" />
               <ForecastMeta icon={<Waves className="w-4 h-4" />} label="Salinity" value="34.2 ppt" status="Optimal" />
               <ForecastMeta icon={<Wind className="w-4 h-4" />} label="Tidal Flow" value="1.2 m/s" status="Rising" />
               <ForecastMeta icon={<Zap className="w-4 h-4" />} label="Solar Rad" value="840 W/m²" status="Optimal" />
            </div>
          </div>

          {/* Risk Heatmap Widget */}
          <div className="lg:col-span-4 glass rounded-[3rem] p-10 border-white/5 flex flex-col justify-between">
             <div className="mb-8">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-xl font-black tracking-tight">Risk Heatmap</h3>
                   <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-white/40 text-xs leading-relaxed mb-8">
                   AI assessment of pathogenic and climate risks across the St. Martin cluster.
                </p>

                {/* Heatmap Grid */}
                <div className="grid grid-cols-5 gap-2 mb-8">
                   {Array.from({ length: 25 }).map((_, i) => {
                     const risk = Math.random();
                     return (
                       <div 
                         key={i}
                         onMouseEnter={() => setHoveredZone(i)}
                         onMouseLeave={() => setHoveredZone(null)}
                         className={`aspect-square rounded-lg border transition-all duration-300 cursor-crosshair ${
                           risk > 0.8 ? 'bg-rose-500/60 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]' :
                           risk > 0.6 ? 'bg-amber-500/40 border-amber-500' :
                           'bg-cyan-500/10 border-cyan-500/20'
                         } ${hoveredZone === i ? 'scale-110 z-10' : ''}`}
                       ></div>
                     );
                   })}
                </div>

                <div className="space-y-4">
                   <RiskLegend color="bg-rose-500" label="Pathogenic Advisory" count={2} />
                   <RiskLegend color="bg-amber-500" label="Tidal Anomaly" count={5} />
                   <RiskLegend color="bg-cyan-500" label="Optimal Conditions" count={18} />
                </div>
             </div>

             <button className="w-full bg-white/5 py-5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C2B280] hover:text-black transition-all">
                View Rerouting Logic
             </button>
          </div>
        </div>

        {/* Optimization Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           <OptimizationCard 
              icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
              label="Profit Optimization"
              value="+22.4%"
              desc="Reduction in harvest loss through predictive storm mitigation."
           />
           <OptimizationCard 
              icon={<Zap className="w-6 h-6 text-amber-400" />}
              label="Waste Reduction"
              value="-14.8%"
              desc="Precise logistics scheduling matching biomass maturation cycles."
           />
           <OptimizationCard 
              icon={<Network className="w-6 h-6 text-cyan-400" />}
              label="Energy Efficiency"
              value="+35% "
              desc="Autonomous sensor sleep-cycles based on benthic activity."
           />
        </div>

        {/* Bottom Strategic Section */}
        <div className="bg-[#001B1E] rounded-[4rem] p-12 md:p-20 border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Cpu className="w-64 h-64 text-cyan-400" />
           </div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                    Model <br />
                    <span className="text-cyan-400">Autonomous.</span>
                 </h2>
                 <p className="text-white/40 text-lg font-medium leading-relaxed mb-12">
                    Our neural network doesn't just predict; it acts. Autonomous raft adjustments and SMS-payout rerouting are triggered instantly by ML logic.
                 </p>
                 <div className="flex gap-4">
                    <button className="bg-white text-black px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-2xl">
                       API Documentation
                    </button>
                    <button className="glass px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-all border border-white/10">
                       Whitepaper
                    </button>
                 </div>
              </div>

              <div className="space-y-6">
                 <StatusItem label="Neural Nodes Active" value="1,024" status="Syncing" />
                 <StatusItem label="Data Ingress Speed" value="45 GB/s" status="Optimal" />
                 <StatusItem label="Decision Latency" value="12ms" status="Excellent" />
                 <StatusItem label="Sovereign Ledger Sync" value="Verified" status="Secure" />
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
        }
        .text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #00F2FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

const ForecastMeta: React.FC<{ icon: React.ReactNode, label: string, value: string, status: string }> = ({ icon, label, value, status }) => (
  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-4">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-0.5">{label}</p>
      <div className="flex items-center gap-2">
         <span className="text-sm font-bold text-white">{value}</span>
         <span className="text-[7px] font-black text-[#2E8B57] uppercase">{status}</span>
      </div>
    </div>
  </div>
);

const RiskLegend: React.FC<{ color: string, label: string, count: number }> = ({ color, label, count }) => (
  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-white/40">{label}</span>
    </div>
    <span className="text-white">{count} Zones</span>
  </div>
);

const OptimizationCard: React.FC<{ icon: React.ReactNode, label: string, value: string, desc: string }> = ({ icon, label, value, desc }) => (
  <div className="glass p-10 rounded-[3rem] border-white/5 hover:border-cyan-500/20 transition-all group">
     <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">{label}</p>
     <h4 className="text-5xl font-black text-white tracking-tighter mb-4">{value}</h4>
     <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StatusItem: React.FC<{ label: string, value: string, status: string }> = ({ label, value, status }) => (
  <div className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
     <span className="text-white/60 font-medium text-sm">{label}</span>
     <div className="text-right">
        <p className="text-white font-black text-lg tracking-tight group-hover:text-cyan-400 transition-colors">{value}</p>
        <span className="text-[8px] font-black text-[#2E8B57] uppercase tracking-widest">{status}</span>
     </div>
  </div>
);

export default PredictiveHarvest;
