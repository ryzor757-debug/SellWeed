
import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Clock, ShieldCheck, Database, Globe, Zap, ArrowUpRight, Activity, Terminal } from 'lucide-react';

const BlueHarvestExchange: React.FC = () => {
  const [prices, setPrices] = useState({
    agar: 2450.80,
    bioplastic: 1820.45,
    carbon: 42.12
  });
  
  const [logs, setLogs] = useState<any[]>([]);

  // Simulated live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        agar: prev.agar + (Math.random() - 0.45) * 5,
        bioplastic: prev.bioplastic + (Math.random() - 0.5) * 3,
        carbon: prev.carbon + (Math.random() - 0.48) * 0.1
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulated transaction logs
  useEffect(() => {
    const addLog = () => {
      const types = ['CONTRACT_EXEC', 'MINT_EVENT', 'LIQUIDITY_ADD', 'TRADE_FINALIZED'];
      const batchIds = ['#BH-902', '#BH-411', '#BH-029', '#BH-772'];
      const randomLog = {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        batch: batchIds[Math.floor(Math.random() * batchIds.length)],
        volume: (Math.random() * 500 + 100).toFixed(1) + 'kg',
        hash: '0x' + Math.random().toString(16).substr(2, 10),
        time: new Date().toLocaleTimeString()
      };
      setLogs(prev => [randomLog, ...prev.slice(0, 7)]);
    };

    const interval = setInterval(addLog, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#000D0E] min-h-screen text-[#00F2FF] font-mono pt-32 pb-24 px-6 overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* Bloomberg Terminal Background Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Top Ticker Bar */}
        <div className="w-full bg-black/40 border-y border-cyan-500/20 py-3 mb-12 flex overflow-hidden whitespace-nowrap">
           <div className="animate-ticker flex gap-12 items-center">
              <TickerItem label="AGAR/USD" value={prices.agar.toFixed(2)} trend={+1.2} />
              <TickerItem label="PLST/USD" value={prices.bioplastic.toFixed(2)} trend={-0.4} />
              <TickerItem label="CRBN/USD" value={prices.carbon.toFixed(2)} trend={+2.8} />
              <TickerItem label="BENGAL_SHELF_INDEX" value="8,920.4" trend={+0.5} />
              <TickerItem label="GIGGER_YIELD_AVG" value="94.2%" trend={+0.1} />
              {/* Duplicate for infinite loop */}
              <TickerItem label="AGAR/USD" value={prices.agar.toFixed(2)} trend={+1.2} />
              <TickerItem label="PLST/USD" value={prices.bioplastic.toFixed(2)} trend={-0.4} />
              <TickerItem label="CRBN/USD" value={prices.carbon.toFixed(2)} trend={+2.8} />
           </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 px-4">
           <div>
              <div className="flex items-center gap-2 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                <Globe className="w-3 h-3" />
                Sovereign Commodity Terminal // v2.4
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.85] mb-4">
                BlueHarvest <br />
                <span className="text-gradient">Exchange.</span>
              </h1>
              <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xl">
                 Real-time institutional liquidity portal for verified seaweed biomass and ecosystem assets. Every trade is anchored to the Bengal Benthic Ledger.
              </p>
           </div>

           <div className="flex gap-4">
              <div className="bg-white/5 border border-cyan-500/20 p-6 rounded-2xl min-w-[200px]">
                 <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Platform Volume (24h)</p>
                 <p className="text-3xl font-black text-white">$4.2M</p>
                 <div className="text-[10px] text-emerald-400 font-bold mt-1">▲ 12.4% vs prev</div>
              </div>
              <div className="bg-white/5 border border-cyan-500/20 p-6 rounded-2xl min-w-[200px]">
                 <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Total Value Locked</p>
                 <p className="text-3xl font-black text-white">$128.5M</p>
                 <div className="text-[10px] text-cyan-400 font-bold mt-1">● 1024 Active Contracts</div>
              </div>
           </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           
           {/* Price Cards - Main Center */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <PriceBoardCard 
                label="Seaweed Agar (AA)" 
                ticker="AGAR" 
                value={prices.agar.toFixed(2)} 
                trend={+0.42} 
                unit="USD / TON"
                icon={<TrendingUp className="w-4 h-4" />}
              />
              <PriceBoardCard 
                label="Bioplastic Biomass" 
                ticker="PLST" 
                value={prices.bioplastic.toFixed(2)} 
                trend={-0.12} 
                unit="USD / TON"
                icon={<Activity className="w-4 h-4" />}
              />
              <PriceBoardCard 
                label="Carbon Offset Credits" 
                ticker="CRBN" 
                value={prices.carbon.toFixed(2)} 
                trend={+1.14} 
                unit="USD / CO2e"
                icon={<Zap className="w-4 h-4" />}
              />

              {/* Central Capacity Visualization */}
              <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-12 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="flex-grow">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                       <Database className="w-5 h-5 text-[#C2B280]" />
                       Global Demand vs Supply
                    </h3>
                    
                    <div className="space-y-8">
                       <CapacityBar label="Global Market Demand" current={840} max={1000} color="bg-cyan-400" sub="9.2M Metric Tons Required" />
                       <CapacityBar label="BlueHarvest Production" current={320} max={1000} color="bg-emerald-400" sub="Verified Inventory Available" />
                       <CapacityBar label="Gigger Workforce Capacity" current={610} max={1000} color="bg-[#C2B280]" sub="12.4k Registered Nodes" />
                    </div>
                 </div>

                 <div className="md:w-64 bg-black/40 p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between">
                    <div>
                       <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Market Sentiment</p>
                       <h4 className="text-2xl font-black text-emerald-400">BULLISH</h4>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] text-white/40 leading-relaxed italic">
                         "Supply scarcity in biotech-grade agar driving price floors up 4% quarterly."
                       </p>
                       <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#C2B280] transition-all">
                          Trade Desk
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Live Sales Log - Sidebar Right */}
           <div className="lg:col-span-4 bg-[#001B1E] border border-cyan-500/20 rounded-[2.5rem] p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-lg font-black text-white flex items-center gap-3 uppercase">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    Ledger Stream
                 </h3>
                 <span className="text-[9px] font-black text-emerald-400 animate-pulse uppercase tracking-widest">Live Sync</span>
              </div>

              <div className="flex-grow space-y-4 overflow-hidden">
                 {logs.map(log => (
                    <div key={log.id} className="bg-white/5 border-l-2 border-cyan-500 p-4 rounded-r-xl group hover:bg-white/10 transition-all animate-in fade-in slide-in-from-right-4">
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">{log.type}</span>
                          <span className="text-[9px] text-white/20">{log.time}</span>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <p className="text-xs font-bold text-white mb-1">Batch {log.batch} Sold</p>
                             <p className="text-[9px] font-mono text-white/30 truncate max-w-[150px]">{log.hash}</p>
                          </div>
                          <p className="text-sm font-black text-emerald-400">{log.volume}</p>
                       </div>
                    </div>
                 ))}
                 
                 {/* Empty state filler */}
                 {logs.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-white/10 opacity-50">
                       <Database className="w-12 h-12 mb-4" />
                       <p className="text-[10px] uppercase font-bold tracking-widest">Connecting to nodes...</p>
                    </div>
                 )}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Network Health: 100% Secure</span>
                 </div>
                 <button className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-all group">
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Full Block Explorer</span>
                 </button>
              </div>
           </div>

        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
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

const TickerItem: React.FC<{ label: string, value: string, trend: number }> = ({ label, value, trend }) => (
  <div className="flex items-center gap-2 font-black text-[10px] uppercase">
    <span className="text-white/40">{label}</span>
    <span className="text-white">{value}</span>
    <span className={trend > 0 ? 'text-emerald-400' : 'text-rose-400'}>
      {trend > 0 ? '▲' : '▼'} {Math.abs(trend)}%
    </span>
  </div>
);

const PriceBoardCard: React.FC<{ label: string, ticker: string, value: string, trend: number, unit: string, icon: React.ReactNode }> = ({ label, ticker, value, trend, unit, icon }) => {
  const isUp = trend > 0;
  return (
    <div className={`bg-white/5 border rounded-[2rem] p-8 transition-all hover:bg-white/10 ${isUp ? 'border-emerald-500/20' : 'border-rose-500/20'} relative group overflow-hidden`}>
       <div className={`absolute top-0 right-0 p-8 opacity-5 transition-transform duration-700 group-hover:scale-125 ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
          {icon}
       </div>
       <div className="flex justify-between items-start mb-6">
          <div>
             <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">{label}</p>
             <h4 className="text-sm font-bold text-white">{ticker}</h4>
          </div>
          <span className={`text-[10px] font-black px-3 py-1 rounded-lg ${isUp ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-rose-400/10 text-rose-400 border border-rose-400/20'}`}>
             {isUp ? '+' : ''}{trend}%
          </span>
       </div>
       
       <div className="space-y-1">
          <p className="text-4xl font-black text-white tracking-tighter leading-none">${value}</p>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{unit}</p>
       </div>
       
       <div className="mt-8 h-12 w-full flex items-end gap-1">
          {Array.from({length: 12}).map((_, i) => (
             <div 
               key={i} 
               className={`flex-1 rounded-sm opacity-20 ${isUp ? 'bg-emerald-400' : 'bg-rose-400'}`} 
               style={{ height: `${20 + Math.random() * 80}%` }}
             ></div>
          ))}
       </div>
    </div>
  );
};

const CapacityBar: React.FC<{ label: string, current: number, max: number, color: string, sub: string }> = ({ label, current, max, color, sub }) => (
  <div className="space-y-3">
     <div className="flex justify-between items-end">
        <span className="text-[10px] font-black text-white uppercase tracking-widest">{label}</span>
        <span className="text-[10px] font-mono text-white/40">{current}/{max}</span>
     </div>
     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out`} 
          style={{ width: `${(current/max)*100}%` }}
        ></div>
     </div>
     <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest">{sub}</p>
  </div>
);

export default BlueHarvestExchange;
