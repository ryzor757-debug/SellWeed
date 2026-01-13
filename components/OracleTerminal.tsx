
import React, { useState } from 'react';
import { 
  FlaskConical, 
  Microscope, 
  ShieldCheck, 
  GraduationCap, 
  Activity, 
  Send, 
  ChevronRight, 
  Award,
  Database,
  Search,
  CheckCircle2,
  Clock
} from 'lucide-react';

const OracleTerminal: React.FC = () => {
  const [formData, setFormData] = useState({
    ph: '',
    salinity: '',
    biomass: '',
    nodeId: 'ST-MARTIN-A1'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const badges = [
    { name: 'Master Auditor', icon: <ShieldCheck className="w-8 h-8" />, desc: '100+ Verified Nodes', color: 'blue' },
    { name: 'Bio-Security Expert', icon: <FlaskConical className="w-8 h-8" />, desc: 'Elite Pathogen Screen', color: 'cyan' },
    { name: 'Truth Oracle', icon: <Search className="w-8 h-8" />, desc: '99% Accuracy Rating', color: 'indigo' },
    { name: 'Deshi Champion', icon: <CheckCircle2 className="w-8 h-8" />, desc: 'Local Impact Leader', color: 'emerald' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6 font-sans">
      {/* High-Tech Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Terminal Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-slate-200 pb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              <Database className="w-3 h-3" />
              Oracle Protocol v2.4.12 // Field Research Node
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-4">
              The Oracle <span className="text-blue-600">Terminal.</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
              Decentralized field verification for institutional-grade biomass assets. Scientific auditing for a sustainable Bengal delta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Academic Status</p>
              <p className="text-slate-900 font-bold text-xl">UGC-Aligned Credit ID</p>
            </div>
            <div className="h-10 w-px bg-slate-100"></div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Earned Credits</p>
              <p className="text-blue-600 font-black text-2xl tracking-tighter">12 / 20</p>
            </div>
          </div>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submission Portal */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Microscope className="w-64 h-64 text-blue-600" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Data Submission Portal</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField 
                      label="Field pH Level" 
                      placeholder="e.g. 8.1" 
                      value={formData.ph} 
                      onChange={(e) => setFormData({...formData, ph: e.target.value})}
                      unit="pH"
                      icon={<FlaskConical className="w-4 h-4" />}
                    />
                    <InputField 
                      label="Salinity Concentration" 
                      placeholder="e.g. 32.5" 
                      value={formData.salinity} 
                      onChange={(e) => setFormData({...formData, salinity: e.target.value})}
                      unit="ppt"
                      icon={<Activity className="w-4 h-4" />}
                    />
                    <InputField 
                      label="Biomass Density Index" 
                      placeholder="e.g. 1.42" 
                      value={formData.biomass} 
                      onChange={(e) => setFormData({...formData, biomass: e.target.value})}
                      unit="kg/m²"
                      icon={<Microscope className="w-4 h-4" />}
                    />
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Calibration Node</label>
                      <select 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-900 font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                        value={formData.nodeId}
                        onChange={(e) => setFormData({...formData, nodeId: e.target.value})}
                      >
                        <option value="ST-MARTIN-A1">Saint Martin A1 // Deep Reef</option>
                        <option value="COX-TERMINAL-9">Cox Terminal 9 // Coastal Hub</option>
                        <option value="KUAKATA-DELTA">Kuakata Delta // Estuary</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1">Immutable Ledger Commitment</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        By submitting this data, you affirm that the measurements were taken in-situ according to protocol BH-2025-V1. Data will be hashed and signed with your Oracle Private Key.
                      </p>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-6 rounded-2xl font-black text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl ${
                      isSubmitting 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-95 shadow-blue-500/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-6 h-6 animate-spin" />
                        Encrypting & Signing...
                      </>
                    ) : (
                      <>
                        Sign & Push to Ledger
                        <ChevronRight className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar: Badges & Credit Tracking */}
          <div className="lg:col-span-4 space-y-8">
            {/* Credit Progress Bar */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-slate-900 font-black tracking-tight mb-8">UGC Credit Progress</h3>
              <div className="space-y-6">
                <div className="relative pt-1">
                  <div className="flex mb-4 items-center justify-between">
                    <div>
                      <span className="text-xs font-black inline-block py-1 px-3 uppercase rounded-full text-blue-600 bg-blue-100 tracking-widest">
                        Field Auditor (Level 2)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black inline-block text-blue-600 uppercase tracking-widest">
                        60%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-slate-100">
                    <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 animate-pulse-slow"></div>
                  </div>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center">
                  8 Credits remaining for University Degree Elective
                </p>
              </div>
            </div>

            {/* Badge Gallery */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-slate-900 font-black tracking-tight">Holographic Credentials</h3>
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, i) => (
                  <div key={i} className="group relative flex flex-col items-center p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-blue-200 transition-all cursor-default">
                    {/* Holographic Shimmer Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none holographic-shimmer-light"></div>
                    
                    <div className={`w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500 z-10 text-${badge.color}-600`}>
                      {badge.icon}
                    </div>
                    <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1 text-center relative z-10">{badge.name}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest text-center relative z-10">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Feed Simulator */}
            <div className="bg-slate-900 rounded-[3rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Activity className="w-12 h-12 text-blue-400" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-blue-400">Ledger Feed // Live</h4>
              <div className="space-y-4 font-mono text-[10px]">
                <div className="flex gap-3 opacity-60">
                  <span className="text-emerald-400">[OK]</span>
                  <span>MINTING_ID: 0x92b...c1a</span>
                </div>
                <div className="flex gap-3 opacity-60">
                  <span className="text-blue-400">[SCN]</span>
                  <span>LIDAR_SAT: BATCH_88_MATCH</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-yellow-400">[WRN]</span>
                  <span>NODE_21: SALINITY_DROP_2.1%</span>
                </div>
                <div className="flex gap-3 text-emerald-400">
                  <span className="animate-pulse">●</span>
                  <span>ORACLE_READY: WAITING_FOR_SIG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .holographic-shimmer-light {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0) 0%,
            rgba(59, 130, 246, 0.1) 25%,
            rgba(34, 211, 238, 0.15) 50%,
            rgba(99, 102, 241, 0.1) 75%,
            rgba(59, 130, 246, 0) 100%
          );
          background-size: 200% 200%;
          animation: holographic-move 4s ease infinite;
        }

        @keyframes holographic-move {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

const InputField: React.FC<{ 
  label: string, 
  placeholder: string, 
  value: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  unit: string,
  icon: React.ReactNode
}> = ({ label, placeholder, value, onChange, unit, icon }) => (
  <div className="space-y-3 group">
    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600">
        {icon}
      </div>
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-20 text-slate-900 font-bold outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-slate-300"
      />
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
        {unit}
      </div>
    </div>
  </div>
);

export default OracleTerminal;
