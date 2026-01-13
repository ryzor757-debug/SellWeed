
import React, { useState } from 'react';
import { 
  Package, 
  ShieldCheck, 
  FileText, 
  Globe, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  MapPin, 
  Database,
  Award,
  ArrowRight,
  Info,
  // Added missing Ship icon import
  Ship
} from 'lucide-react';

const BlueExportHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'verification' | 'compliance'>('catalog');

  const products = [
    {
      id: 'BH-AG-01',
      name: 'Premium Dry Seaweed (Agar-Grade)',
      category: 'Food & Biotech',
      price: '250,000 BDT',
      unit: 'per Metric Ton',
      image: 'https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=800&auto=format&fit=crop',
      purity: '98.5%',
      moisture: '< 12%'
    },
    {
      id: 'BH-BP-02',
      name: 'Bioplastic Precursor Biomass',
      category: 'Sustainable Materials',
      price: '180,000 BDT',
      unit: 'per Metric Ton',
      image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800&auto=format&fit=crop',
      purity: '92.0%',
      moisture: '< 15%'
    },
    {
      id: 'BH-CS-03',
      name: 'Cosmetic-Grade Seaweed Extract',
      category: 'Luxury Skincare',
      price: '4,500 BDT',
      unit: 'per Liter (Concentrate)',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
      purity: '99.9%',
      moisture: 'N/A'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Hub Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 mb-16 border-b border-slate-200 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004B50]/10 text-[#004B50] text-[10px] font-black uppercase tracking-[0.5em] mb-6">
              Global B2B Marketplace // Verified Sourcing
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              The BlueHarvest <br />
              <span className="text-[#004B50]">Export Hub.</span>
            </h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              Access Bangladesh’s premier repository of verified marine biomass. Enterprise-grade quality for global cosmetic, pharmaceutical, and sustainable material industries.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 min-w-[280px]">
               <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Inventory</p>
                  <Package className="w-4 h-4 text-[#004B50]" />
               </div>
               <p className="text-4xl font-black text-slate-900 tracking-tighter">1,240 <span className="text-lg text-slate-400">Tons</span></p>
               <p className="text-[10px] font-bold text-[#2E8B57] uppercase tracking-widest mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] animate-pulse"></span>
                  Ready for Shipment
               </p>
            </div>
          </div>
        </div>

        {/* Interface Navigation */}
        <div className="flex gap-8 mb-16 overflow-x-auto no-scrollbar">
           <HubNavBtn active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')} label="Product Catalog" />
           <HubNavBtn active={activeTab === 'verification'} onClick={() => setActiveTab('verification')} label="The Truth Certificate" />
           <HubNavBtn active={activeTab === 'compliance'} onClick={() => setActiveTab('compliance')} label="Global Compliance" />
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in duration-700">
          
          {activeTab === 'catalog' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
               {products.map(product => (
                 <div key={product.id} className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="relative h-72">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <div className="absolute bottom-6 left-6">
                          <span className="px-3 py-1 rounded-full bg-[#004B50] text-white text-[9px] font-black uppercase tracking-widest">
                             {product.category}
                          </span>
                       </div>
                    </div>
                    <div className="p-10">
                       <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-black text-slate-900 tracking-tight max-w-[200px]">{product.name}</h3>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">{product.id}</span>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Purity</p>
                             <p className="text-lg font-black text-slate-900">{product.purity}</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Moisture</p>
                             <p className="text-lg font-black text-slate-900">{product.moisture}</p>
                          </div>
                       </div>

                       <div className="mb-10">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contract Price</p>
                          <p className="text-3xl font-black text-[#004B50] tracking-tighter">{product.price}</p>
                          <p className="text-[10px] font-medium text-slate-400">{product.unit}</p>
                       </div>

                       <div className="flex gap-4">
                          <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#004B50] transition-all">
                             Inquiry / Quote
                          </button>
                          <button className="px-6 bg-slate-100 text-slate-400 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 hover:text-slate-900 transition-all">
                             Sample
                          </button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'verification' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
               <div className="lg:col-span-4 bg-white rounded-[3rem] border border-slate-200 p-12 shadow-xl shadow-slate-200/50">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Asset Traceability.</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-12">
                     Transparency is not a buzzword; it’s our infrastructure. Scan any shipment to view its entire lifecycle.
                  </p>
                  
                  <div className="space-y-6">
                     <TraceStep icon={<MapPin className="w-5 h-5" />} title="GPS Seeding" date="Nov 12, 2024" loc="ST-MARTIN-A1" />
                     <TraceStep icon={<Database className="w-5 h-5" />} title="On-Chain Minting" date="Jan 10, 2025" loc="Polygon Ledger" />
                     <TraceStep icon={<CheckCircle2 className="w-5 h-5" />} title="Student Audit" date="Feb 02, 2025" loc="CU Marine Bio Lab" />
                     <TraceStep icon={<ShieldCheck className="w-5 h-5" />} title="Quality Seal" date="Feb 14, 2025" loc="Export Terminal" />
                  </div>
               </div>

               <div className="lg:col-span-8 bg-slate-900 rounded-[3rem] p-16 text-white relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
                  
                  <div className="relative z-10">
                     <div className="flex justify-between items-start mb-20">
                        <div>
                           <div className="flex items-center gap-2 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                              <ShieldCheck className="w-4 h-4" />
                              Official Truth Certificate
                           </div>
                           <h2 className="text-5xl font-black tracking-tighter">Verified Export <br />Asset #TX-902</h2>
                        </div>
                        <div className="w-40 h-40 bg-white p-4 rounded-3xl shadow-2xl animate-float">
                           <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                             <rect x="0" y="0" width="30" height="30" />
                             <rect x="0" y="70" width="30" height="30" />
                             <rect x="70" y="0" width="30" height="30" />
                             <rect x="40" y="40" width="20" height="20" />
                             <rect x="10" y="10" width="10" height="10" fill="white" />
                             <rect x="80" y="80" width="10" height="10" />
                           </svg>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                           <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Batch ID</p>
                           <p className="text-xl font-bold font-mono">BH-2025-04</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Agar Yield</p>
                           <p className="text-xl font-bold font-mono">22.4%</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Auditor ID</p>
                           <p className="text-xl font-bold font-mono">ORA-CU-99</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Ledger Hash</p>
                           <p className="text-xl font-bold font-mono truncate">0x92f...1a2</p>
                        </div>
                     </div>
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 pt-20">
                     <p className="text-white/40 text-xs font-medium max-w-md italic">
                        "Project BlueHarvest certifies the structural integrity and biological purity of this batch based on tri-nodal verification data."
                     </p>
                     <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C2B280] transition-all shadow-2xl">
                        Verify Full Metadata
                     </button>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="max-w-5xl mx-auto space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ComplianceCard 
                     icon={<Award className="w-8 h-8 text-[#004B50]" />}
                     title="BSTI Quality Standards"
                     desc="Fully certified under the Bangladesh Standards and Testing Institution protocols for processed biomass export."
                  />
                  <ComplianceCard 
                     icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />}
                     title="AML / CFT Compliance"
                     desc="Adherence to Bangladesh Bank AML guidelines. All transactions are screened for Anti-Money Laundering & Terrorist Financing."
                  />
                  <ComplianceCard 
                     icon={<Globe className="w-8 h-8 text-blue-600" />}
                     title="EU Taxonomy Aligned"
                     desc="Reporting architecture compliant with European Union sustainability disclosure requirements for sustainable aquaculture."
                  />
                  <ComplianceCard 
                     icon={<FileText className="w-8 h-8 text-[#C2B280]" />}
                     title="IFC / World Bank ESG"
                     desc="Social and environmental impact measurement aligned with International Finance Corporation performance standards."
                  />
               </div>

               <div className="bg-[#004B50] p-12 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-12 mt-20 relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 opacity-10">
                     <Ship className="w-64 h-64" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-4xl font-black tracking-tight mb-4">Enterprise Partnerships.</h4>
                     <p className="text-white/60 text-lg font-medium leading-relaxed">
                        Are you a global buyer looking for recurring, high-volume sourcing contracts? Our enterprise desk handles custom logistics, bulk pricing, and dedicated lab reports.
                     </p>
                  </div>
                  <button className="bg-white text-[#004B50] px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-[#C2B280] hover:text-[#001B1E] transition-all shadow-2xl">
                     Speak with Trade Desk
                  </button>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const HubNavBtn: React.FC<{ active: boolean, onClick: () => void, label: string }> = ({ active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all border-2 ${
      active 
        ? 'bg-[#004B50] text-white border-[#004B50] shadow-xl' 
        : 'bg-white text-slate-400 border-slate-200 hover:border-[#004B50]/30 hover:text-slate-900'
    }`}
  >
    {label}
  </button>
);

const TraceStep: React.FC<{ icon: React.ReactNode, title: string, date: string, loc: string }> = ({ icon, title, date, loc }) => (
  <div className="flex gap-4 group">
     <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#004B50] group-hover:bg-[#004B50] group-hover:text-white transition-all">
           {icon}
        </div>
        <div className="w-px flex-grow bg-slate-100 my-2"></div>
     </div>
     <div className="pb-8">
        <h5 className="text-slate-900 font-bold text-sm mb-1">{title}</h5>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{date}</p>
        <div className="flex items-center gap-1 text-[10px] font-black text-[#004B50] uppercase tracking-widest">
           <MapPin className="w-3 h-3" />
           {loc}
        </div>
     </div>
  </div>
);

const ComplianceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group flex flex-col justify-between">
     <div>
        <div className="mb-6 transform group-hover:scale-110 transition-transform">
           {icon}
        </div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight mb-4">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{desc}</p>
     </div>
     <button className="flex items-center gap-2 text-[10px] font-black text-[#004B50] uppercase tracking-widest border-b-2 border-[#004B50] w-fit pb-1 hover:gap-4 transition-all">
        View Documents <ChevronRight className="w-4 h-4" />
     </button>
  </div>
);

export default BlueExportHub;
