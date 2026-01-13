
import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Thermometer, Waves, Wind, Box, ShieldCheck, Database, Zap, ArrowUpRight } from 'lucide-react';

const BlueDigitalTwin: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-mono pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Grid System */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Command Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 mb-12 border-b border-white/5 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-6 border border-cyan-500/20">
              <Cpu className="w-3 h-3" />
              Benthic Digital Twin // Node_Alpha_01
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] md:leading-none mb-4">
              Real-time <br className="hidden md:block" />
              <span className="text-gradient">Simulacrum.</span>
            </h1>
            <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Virtualizing Cox’s Bazar marine clusters. Synced to benthic IoT sensors for predictive harvest modeling and asset health verification.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full xl:w-auto">
             <LiveMetric label="Node Clock" value={time} />
             <LiveMetric label="Network" value="99.9%" />
             <LiveMetric label="Latency" value="12ms" />
             <LiveMetric label="Sync" value="Verified" accent="text-emerald-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main 3D Viz Simulator */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="glass aspect-square sm:aspect-video lg:h-[700px] rounded-[2rem] md:rounded-[3rem] border-white/10 relative overflow-hidden group perspective-[2000px]">
               {/* 3D Grid Perspective */}
               <div className="absolute inset-0 opacity-20 [transform:rotateX(60deg)] pointer-events-none">
                 <div className="w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 bg-[size:50px_50px] md:bg-[size:100px_100px] bg-[linear-gradient(cyan_1px,transparent_1px),linear-gradient(90deg,cyan_1px,transparent_1px)]"></div>
               </div>

               {/* Simulated Raft Nodes - Responsive Scaling */}
               <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                  <div className="relative w-full h-full flex items-center justify-center scale-[0.6] sm:scale-[0.8] md:scale-100">
                    <div className="grid grid-cols-3 gap-6 md:gap-12 transform -rotate-x-12 rotate-y-12">
                       {Array.from({ length: 9 }).map((_, i) => (
                         <div key={i} className="w-20 h-20 md:w-32 md:h-32 rounded-2xl glass border-cyan-400/30 flex flex-col items-center justify-center relative hover:scale-110 transition-transform cursor-crosshair group/node shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                           <Box className="w-6 h-6 md:w-8 md:h-8 text-cyan-400/40 mb-1 md:mb-2" />
                           <span className="text-[7px] md:text-[8px] font-bold text-white/40">R-0{i+1}</span>
                           
                           <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity bg-black p-2 rounded-lg border border-cyan-400/50 whitespace-nowrap z-20">
                             <p className="text-[7px] text-cyan-400 font-black">YIELD: {(Math.random() * 100).toFixed(1)}%</p>
                           </div>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>

               <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div className="space-y-2">
                    <p className="text-[9px] md:text-[10px] font-black text-cyan-400 uppercase tracking-widest">Environment Overlay</p>
                    <div className="flex gap-2">
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold">Spectral: ON</div>
                      <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/5 border border-white/10 text-[8px] md:text-[9px] font-bold">Lidar: 14.2m</div>
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-2xl active:scale-95">
                    Recalibrate All
                  </button>
               </div>
            </div>
          </div>

          {/* Side Telemetry Panels */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            {/* Live Telemetry Feed */}
            <div className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/10 flex-grow">
               <h3 className="text-lg md:text-xl font-black text-white mb-6 md:mb-8 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#C2B280]" />
                  Live Telemetry
               </h3>
               
               <div className="space-y-4 md:space-y-6">
                  <SensorRow icon={<Thermometer className="w-4 h-4" />} label="Ocean Temp" value="26.4°C" trend="Stable" color="text-cyan-400" />
                  <SensorRow icon={<Waves className="w-4 h-4" />} label="Salinity" value="34.1 ppt" trend="+0.2" color="text-blue-400" />
                  <SensorRow icon={<Wind className="w-4 h-4" />} label="Current" value="0.8 m/s" trend="Optimal" color="text-emerald-400" />
                  <SensorRow icon={<Zap className="w-4 h-4" />} label="Nutrients" value="High" trend="Peak" color="text-[#C2B280]" />
               </div>

               <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-white/5">
                 <h4 className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Neural Predictor</h4>
                 <div className="space-y-3 md:space-y-4 font-mono text-[8px] md:text-[9px]">
                    <div className="text-emerald-400 opacity-80">[OK] BATCH_901: READY</div>
                    <div className="text-white opacity-40">[INF] LIDAR_SCAN_CMPL</div>
                    <div className="text-cyan-400 animate-pulse">[ML] PROJECTING_ROI +2.1%</div>
                 </div>
               </div>
            </div>

            <div className="bg-cyan-500 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-black relative overflow-hidden group">
               <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <Database className="w-48 h-48 md:w-64 md:h-64" />
               </div>
               <h4 className="text-xl md:text-2xl font-black tracking-tight mb-3 md:mb-4 leading-none">Access <br />Node API.</h4>
               <p className="text-xs md:text-sm font-bold opacity-60 mb-6 md:mb-8 leading-relaxed">
                  Integrate real-time data into your protocol.
               </p>
               <button className="flex items-center gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:gap-6 transition-all">
                  Documentation Hub <ArrowUpRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveMetric: React.FC<{ label: string, value: string, accent?: string }> = ({ label, value, accent = "text-white" }) => (
  <div className="glass px-4 md:px-6 py-3 md:py-4 rounded-2xl border-white/5 text-center sm:text-left">
    <p className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-xs md:text-sm font-black truncate ${accent}`}>{value}</p>
  </div>
);

const SensorRow: React.FC<{ icon: React.ReactNode, label: string, value: string, trend: string, color: string }> = ({ icon, label, value, trend, color }) => (
  <div className="flex justify-between items-center p-4 md:p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-white/20 transition-all cursor-default">
     <div className="flex items-center gap-3 md:gap-4">
        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${color}`}>
           {icon}
        </div>
        <span className="text-[10px] md:text-xs text-white/60 font-bold">{label}</span>
     </div>
     <div className="text-right">
        <p className="text-xs md:text-sm font-black text-white">{value}</p>
        <span className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${color}`}>{trend}</span>
     </div>
  </div>
);

export default BlueDigitalTwin;
