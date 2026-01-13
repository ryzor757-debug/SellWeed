
import React from 'react';
import { ShieldCheck, Gavel, Landmark, Database, Lock, Globe, FileText, ChevronRight, CheckCircle2, Award, History } from 'lucide-react';

const BlueGovernance: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900 font-sans pb-32">
      {/* Formal Header Section */}
      <section className="relative pt-48 pb-24 px-6 bg-[#001B1E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C2B280]/5 blur-[200px] rounded-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-8">
            <ShieldCheck className="w-4 h-4" />
            Sovereign Compliance Framework // v3.1
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            Governance & <br />
            <span className="text-gradient">Compliance.</span>
          </h1>
          <p className="text-white/40 text-xl font-medium max-w-2xl leading-relaxed">
            Ensuring the integrity of the blue economy through rigorous adherence to national regulatory standards and academic oversight.
          </p>
        </div>
      </section>

      {/* National Alignment: Vision 2041 */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="w-16 h-16 rounded-3xl bg-[#004B50]/10 flex items-center justify-center text-[#004B50] shadow-xl shadow-[#004B50]/5">
              <Landmark className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
              National <br />Alignment.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Project BlueHarvest is strategically aligned with the "Smart Bangladesh 2041" vision, focusing on rural empowerment and sustainable marine resource management.
            </p>
            <div className="space-y-4">
               <AlignmentItem text="Sovereign Digital Infrastructure" />
               <AlignmentItem text="Regenerative Coastal Wealth" />
               <AlignmentItem text="Formalization of Informal Labor" />
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
               <p className="text-[10px] font-black text-[#004B50] uppercase tracking-widest mb-4">Strategic Goal 01</p>
               <h4 className="text-xl font-black mb-4">Digital Delta</h4>
               <p className="text-slate-400 text-sm leading-relaxed italic">
                 "Reducing the digital divide by integrating blockchain-based identities for every coastal citizen."
               </p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
               <p className="text-[10px] font-black text-[#004B50] uppercase tracking-widest mb-4">Strategic Goal 02</p>
               <h4 className="text-xl font-black mb-4">Blue Economy</h4>
               <p className="text-slate-400 text-sm leading-relaxed italic">
                 "Developing 100+ deep-sea nodes to transform seaweed into a primary export asset for the nation."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Sandbox Roadmap */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-4">The Sandbox Roadmap.</h2>
            <p className="text-slate-400 font-medium">Navigating through institutional verification and academic vetting.</p>
          </div>

          <div className="relative">
             {/* Line */}
             <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 hidden md:block"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <RoadmapNode 
                  phase="Phase 01"
                  title="Fintech Sandbox"
                  institution="Bangladesh Bank"
                  desc="Trialing bKash & Binimoy integration for automated gigger payouts under AML/CFT protocols."
                  status="Active Trial"
                  icon={<History className="w-6 h-6" />}
                />
                <RoadmapNode 
                  phase="Phase 02"
                  title="Academic Node"
                  institution="CU & NSTU"
                  desc="Scientific curriculum validation and student oracle auditing for biomass verification."
                  status="Implementation"
                  icon={<Globe className="w-6 h-6" />}
                />
                <RoadmapNode 
                  phase="Phase 03"
                  title="Market Launch"
                  institution="Ministry of Commerce"
                  desc="Formalizing the export corridor for verified seaweed assets to global biotech hubs."
                  status="Q4 2025"
                  icon={<Award className="w-6 h-6" />}
                />
             </div>
          </div>
        </div>
      </section>

      {/* Data Sovereignty Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="bg-[#001B1E] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-[#C2B280]/5 to-transparent"></div>
           <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:scale-110 transition-transform duration-1000">
              <Database className="w-96 h-96" />
           </div>

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C2B280] mb-8">
                    <Database className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                    Data <br />
                    <span className="text-[#C2B280]">Sovereignty.</span>
                  </h2>
                  <p className="text-white/40 text-xl font-medium leading-relaxed mb-12">
                    We adhere to the strictest local data residency laws. All Project BlueHarvest data is locally hosted at the Tier IV National Data Center.
                  </p>
                  
                  <div className="space-y-6">
                    <SovereigntyFact title="Residency" text="All citizen and worker data hosted at the NDC in Kaliakoir." />
                    <SovereigntyFact title="Encryption" text="AES-256 sovereign keys managed within local server clusters." />
                    <SovereigntyFact title="Access" text="Strict API gateway protocols for government and academic audit." />
                  </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/10">
                 <div className="flex justify-between items-center mb-12">
                   <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/30">Compliance Status</h4>
                   <span className="text-[10px] font-black text-[#2E8B57] bg-[#2E8B57]/10 px-4 py-1.5 rounded-full border border-[#2E8B57]/20 uppercase">Operational</span>
                 </div>
                 
                 <div className="space-y-8">
                    <StatusLine label="National Data Center (NDC)" status="LOCKED" />
                    <StatusLine label="ICT Division Protocol" status="CERTIFIED" />
                    <StatusLine label="Cyber Security Act 2023" status="ALIGNED" />
                    <StatusLine label="Personal Data Protection" status="COMPLIANT" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Legal Footer */}
      <section className="py-20 px-6 text-center border-t border-slate-100">
         <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">For Official Inquiry</p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Legal & Governance Desk.</h3>
            <div className="flex justify-center gap-8 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
               <a href="#" className="hover:text-[#004B50] transition-colors border-b-2 border-transparent hover:border-[#004B50] pb-1">Compliance Documents</a>
               <a href="#" className="hover:text-[#004B50] transition-colors border-b-2 border-transparent hover:border-[#004B50] pb-1">UGC Guidelines</a>
               <a href="#" className="hover:text-[#004B50] transition-colors border-b-2 border-transparent hover:border-[#004B50] pb-1">NDC Hosting Certificate</a>
            </div>
         </div>
      </section>

    </div>
  );
};

const AlignmentItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 text-slate-900 font-bold tracking-tight">
    <CheckCircle2 className="w-5 h-5 text-[#2E8B57]" />
    {text}
  </div>
);

const RoadmapNode: React.FC<{ phase: string, title: string, institution: string, desc: string, status: string, icon: React.ReactNode }> = ({ phase, title, institution, desc, status, icon }) => (
  <div className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group flex flex-col justify-between h-full relative">
    <div>
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#004B50] group-hover:bg-[#004B50] group-hover:text-white transition-all">
          {icon}
        </div>
        <span className="text-[9px] font-black text-white bg-[#004B50] px-3 py-1 rounded-full uppercase tracking-widest">{phase}</span>
      </div>
      <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{title}</h4>
      <p className="text-[10px] font-black text-[#C2B280] uppercase tracking-widest mb-6">{institution}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-8">{desc}</p>
    </div>
    <div className="flex items-center gap-2 text-[10px] font-black text-[#2E8B57] uppercase tracking-widest">
      <div className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] animate-pulse"></div>
      {status}
    </div>
  </div>
);

const SovereigntyFact: React.FC<{ title: string, text: string }> = ({ title, text }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
       <div className="w-1.5 h-1.5 rounded-full bg-[#C2B280] mt-2"></div>
       <div className="w-px flex-grow bg-white/10 my-2"></div>
    </div>
    <div>
       <h5 className="text-white font-bold text-sm mb-1">{title}</h5>
       <p className="text-white/40 text-xs font-medium leading-relaxed">{text}</p>
    </div>
  </div>
);

const StatusLine: React.FC<{ label: string, status: string }> = ({ label, status }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-4">
    <span className="text-white/60 text-sm font-medium">{label}</span>
    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#C2B280]/20 transition-all">
      {status}
    </span>
  </div>
);

export default BlueGovernance;
