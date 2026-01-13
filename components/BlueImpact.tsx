
import React from 'react';
import { Leaf, Users, ShieldCheck, Globe, Database, TrendingUp, ArrowRight, Shield, Anchor } from 'lucide-react';

const BlueImpact: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 font-sans pb-24">
      {/* Hero: Annual Report Aesthetic */}
      <section className="relative pt-48 pb-32 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-[10px] font-black uppercase tracking-[0.5em]">
              Annual Impact Report // 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">
              The Blue <br />
              <span className="text-[#2E8B57]">Footprint.</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">
              Measuring the tangible shift from extractive economies to regenerative coastal abundance in the Bengal Basin.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#2E8B57] transition-all">
                Download PDF Report
              </button>
              <button className="bg-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">
                Methodology
              </button>
            </div>
          </div>
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white group">
               <img 
                 src="https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=1200&auto=format&fit=crop" 
                 alt="Drone view of coast" 
                 className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white font-serif italic text-2xl leading-relaxed">
                    "Healing the ocean by empowering those who live on its edge."
                  </p>
               </div>
            </div>
            {/* Float Element: Verification Badge */}
            <div className="absolute -bottom-10 -left-10 glass bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border-slate-100 shadow-xl max-w-[200px] animate-float">
               <ShieldCheck className="w-10 h-10 text-[#2E8B57] mb-4" />
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Audit Score</p>
               <p className="text-2xl font-black text-slate-900 tracking-tight">AAA+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metric 1: Livelihood Tracker */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-500/10">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-slate-900">Livelihood <br />Transition.</h2>
            <div className="h-px w-24 bg-blue-200"></div>
            <p className="text-slate-500 text-lg leading-relaxed">
              We focus on workers displaced by climate migration and industrial fishery decline. By providing "Blue Gigs," we formalize their labor into a digital ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 bg-blue-50 rounded-3xl border border-blue-100">
                <div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Active Giggers</p>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">5,412</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-[#2E8B57] uppercase tracking-widest mb-1">Retained</p>
                  <p className="text-xl font-bold text-slate-900">92%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
             <div className="flex justify-between items-center mb-12">
               <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Worker Transition Journey</h4>
               <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">REAL-TIME DATA</span>
             </div>
             
             <div className="space-y-12">
               <TransitionStep label="Step 01: Identification & NID Link" progress={100} status="Verified" />
               <TransitionStep label="Step 02: Blue Academy Training" progress={85} status="In-Progress" />
               <TransitionStep label="Step 03: First Verified Harvest" progress={42} status="Growing" />
               <TransitionStep label="Step 04: Financial Sovereignty (Credit Score)" progress={15} status="Initial" />
             </div>

             <div className="mt-16 pt-12 border-t border-slate-50 flex justify-between items-center">
                <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Collaborating with local NGOs for field vetting</p>
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100"></div>)}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Metric 2: Carbon Dashboard (Blockchain) */}
      <section className="py-40 px-6 bg-[#001B1E] text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6">
                <Globe className="w-3 h-3" />
                Global Net-Zero Protocol
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                The Carbon <br />
                <span className="text-gradient">Dashboard.</span>
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 text-right">
               <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Polygon Minted Assets</p>
               <p className="text-6xl font-black text-white tracking-tighter">10,450.2<span className="text-cyan-400 text-xl ml-2">t</span></p>
               <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-2">Verified CO2 Sequestered</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CarbonCard 
              label="Benthic Monitoring" 
              value="24/7" 
              desc="Real-time ocean floor telemetry via underwater IoT sensors." 
              icon={<Database className="w-5 h-5" />} 
            />
            <CarbonCard 
              label="Polygon Proof" 
              value="Immutable" 
              desc="Metadata-rich hash stored on-chain for every sequestration event." 
              icon={<ShieldCheck className="w-5 h-5" />} 
            />
            <CarbonCard 
              label="Market Liquidity" 
              value="$12M+" 
              desc="Asset value ready for institutional carbon credit trading." 
              icon={<TrendingUp className="w-5 h-5" />} 
            />
          </div>

          {/* Interactive Chart Visual (CSS/SVG) */}
          <div className="mt-20 h-64 glass rounded-[3rem] border-white/5 relative overflow-hidden flex items-end px-12 pb-8 gap-4">
             {Array.from({length: 24}).map((_, i) => (
               <div 
                 key={i} 
                 className="flex-1 bg-gradient-to-t from-cyan-500/40 to-cyan-500/10 rounded-t-xl transition-all duration-1000 group hover:from-cyan-400 hover:to-cyan-400/20" 
                 style={{ height: `${20 + Math.random() * 80}%` }}
               >
                 <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-cyan-400">
                    {Math.floor(Math.random() * 1000)}t
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Metric 3: The Blue Credit Story */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Anchor className="w-64 h-64 text-slate-900" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 rounded-3xl bg-[#C2B280]/10 flex items-center justify-center text-[#C2B280] mb-12 shadow-xl shadow-[#C2B280]/10">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-none">
              Financial <br />
              <span className="text-[#C2B280]">Identities.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">
              The informal economy is invisible to global finance. We make it visible. Every seaweed batch is a transaction on a worker's personal "Blue Credit" ledger.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-4">Banking Partnerships</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    We are integrating with top-tier financial institutions to enable micro-loans for giggers, using harvest reliability scores as alternative collateral.
                  </p>
                  <div className="flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                     <div className="font-black text-xl italic">BRAC Bank</div>
                     <div className="font-serif font-black text-xl">The City Bank</div>
                  </div>
               </div>
               <div>
                  <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-4">Capital Injection</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Workers can now leverage their "Blue Credit" to upgrade equipment, repair rafts, or fund their children's education in the Blue Academy.
                  </p>
                  <button className="flex items-center gap-3 text-[#2E8B57] font-black text-xs uppercase tracking-widest group/btn">
                    Read Gigger Stories 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="py-20 px-6 text-center">
         <div className="max-w-xl mx-auto space-y-8">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Be Part of the Solution</p>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Invest in Regeneration.</h3>
            <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-[#2E8B57] transition-all shadow-2xl">
              Apply for Private Tier 1 Access
            </button>
         </div>
      </section>

    </div>
  );
};

const TransitionStep: React.FC<{ label: string, progress: number, status: string }> = ({ label, progress, status }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-end">
      <h5 className="text-slate-900 font-bold tracking-tight">{label}</h5>
      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{status}</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const CarbonCard: React.FC<{ label: string, value: string, desc: string, icon: React.ReactNode }> = ({ label, value, desc, icon }) => (
  <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 group hover:border-cyan-500/30 transition-all">
    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
      {icon}
    </div>
    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">{label}</p>
    <h4 className="text-3xl font-black text-white tracking-tighter mb-4">{value}</h4>
    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default BlueImpact;
