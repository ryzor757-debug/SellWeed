
import React from 'react';
import { ShieldCheck, Cpu, Satellite, BookOpen, Fingerprint, Activity } from 'lucide-react';

const TruthEngine: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 relative overflow-hidden bg-transparent contain-paint">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none gpu-accelerated" style={{ backgroundImage: 'radial-gradient(circle, #1E293B 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-32 reveal">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-[#52B788]/20 bg-[#52B788]/5 text-[#52B788] text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-xl">
            <Fingerprint className="w-4 h-4" />
            Verification Protocol // v4.2
          </div>
          <h2 className="fluid-h2 font-black tracking-tightest text-[#1E293B] mb-6">The Truth Engine.</h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-xl font-light leading-relaxed">
            Moving beyond trust to mathematical certainty. We compute quality at the atomic level across three independent delta-nodes.
          </p>
        </div>

        {/* HUD Mainframe Responsive Grid */}
        <div className="glass rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative border-white/30 shadow-[0_50px_100px_rgba(0,0,0,0.08)] overflow-hidden group contain-paint">
          <div className="scan-line"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
            {/* Column 1: Nodes */}
            <div className="lg:col-span-4 space-y-4 md:space-y-8 gpu-accelerated">
              <NodeFeed icon={<BookOpen className="w-5 h-5" />} title="Field Samples" subtitle="Oracle Node" color="text-cyan-600" />
              <NodeFeed icon={<Cpu className="w-5 h-5" />} title="Neural Scan" subtitle="Computer Vision" color="text-[#52B788]" />
              <NodeFeed icon={<Satellite className="w-5 h-5" />} title="Lidar Tracking" subtitle="Remote Sensing" color="text-blue-600" />
            </div>

            {/* Column 2: Central Viz */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-10 md:py-12 contain-paint">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 transition-opacity duration-1000 gpu-accelerated">
                <svg className="w-full h-full max-w-[300px] md:max-w-[400px]" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#52B788" strokeWidth="0.5" strokeDasharray="10 20" className="animate-[spin_60s_linear_infinite]" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="5 5" className="animate-[spin_40s_linear_infinite_reverse]" />
                </svg>
              </div>

              <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full glass border-white shadow-2xl flex flex-col items-center justify-center btn-ripple gpu-accelerated">
                <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-[#52B788] mb-2 md:mb-4" />
                <span className="text-[#1E293B] font-black text-3xl md:text-5xl tracking-tightest">98.4</span>
                <span className="text-[9px] text-slate-400 font-black tracking-widest uppercase mt-1 md:mt-2 text-center px-4 leading-none">Aggregate Quality</span>
              </div>
            </div>

            {/* Column 3: Asset Ledger */}
            <div className="lg:col-span-4 w-full max-w-md mx-auto lg:max-w-none gpu-accelerated">
              <div className="bg-white/40 border border-white/40 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:border-[#52B788]/40 hover:bg-white/60">
                <div className="flex justify-between items-start mb-10">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Registry ID</p>
                      <p className="text-xs md:text-sm font-mono text-cyan-600">BH-TX-9021-X-4</p>
                   </div>
                   <Activity className="w-5 h-5 text-slate-300" />
                </div>

                <div className="space-y-6 md:space-y-8">
                   <CardRow label="Origin" value="Saint Martin's" />
                   <CardRow label="Depth" value="14.2m" />
                   <CardRow label="Carbon" value="-12.4t CO2e" />
                   <CardRow label="Purity" value="A++ Surgical" highlight />
                </div>

                <div className="mt-10 md:mt-12 flex items-center gap-5 pt-10 border-t border-slate-100">
                   <div className="w-12 h-12 bg-slate-900 rounded-xl p-2 opacity-90 shadow-lg">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-white"><rect x="0" y="0" width="30" height="30"/><rect x="70" y="0" width="30" height="30"/><rect x="0" y="70" width="30" height="30"/><rect x="35" y="35" width="30" height="30"/></svg>
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Signed On-Chain</p>
                      <p className="text-xs font-bold text-slate-600">Harvest Core v4</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NodeFeed: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, color: string }> = ({ icon, title, subtitle, color }) => (
  <div className="p-5 md:p-8 rounded-2xl md:rounded-[2rem] glass-card hover:bg-white/60 transition-all duration-500 group relative overflow-hidden gpu-accelerated">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl glass border-white/60 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-[#1E293B] text-base md:text-lg font-black tracking-tightest leading-tight">{title}</h4>
        <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] ${color}`}>{subtitle}</p>
      </div>
    </div>
  </div>
);

const CardRow: React.FC<{ label: string, value: string, highlight?: boolean }> = ({ label, value, highlight }) => (
  <div className="flex justify-between items-end border-b border-[#1E293B]/5 pb-2">
    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{label}</span>
    <span className={`text-xs md:text-sm font-bold ${highlight ? 'text-[#52B788]' : 'text-slate-700'}`}>{value}</span>
  </div>
);

export default TruthEngine;
