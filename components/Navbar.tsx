import React, { useState, useEffect } from 'react';
import { 
  Anchor, Globe, X, LayoutGrid, ArrowRight, Compass, Book, 
  BarChart3, Cpu, Network, ShieldCheck, Microscope, Users, 
  Gem, Landmark, GraduationCap, Target, Newspaper, Milestone,
  History, ScanLine, Wallet, Briefcase
} from 'lucide-react';
import { AppView } from '../App';

interface NavbarProps {
  setView: (view: AppView) => void;
  currentView: AppView;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isHubOpen, setIsHubOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'EN' | 'BN'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleHub = () => {
    setIsHubOpen(!isHubOpen);
    if (!isHubOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  const categories = [
    {
      label: "Strategy",
      icon: <Compass className="w-4 h-4" />,
      items: [
        { id: 'vision', label: 'Vision', sub: 'The 2041 Manifesto', icon: <Target /> },
        { id: 'mission', label: 'Mission', sub: 'Our Core Purpose', icon: <Anchor /> },
        { id: 'story', label: 'Story', sub: 'The Delta Narrative', icon: <Book /> },
        { id: 'roadmap', label: 'Roadmap', sub: 'Strategic Timeline', icon: <Milestone /> },
        { id: 'press', label: 'Press', sub: 'Media & Newsroom', icon: <Newspaper /> },
      ]
    },
    {
      label: "Network",
      icon: <Network className="w-4 h-4" />,
      items: [
        { id: 'twin', label: 'Digital Twin', sub: 'Real-time Simulation', icon: <Cpu /> },
        { id: 'predictive', label: 'AI Harvest', sub: 'Predictive Modeling', icon: <ScanLine /> },
        { id: 'traceability', label: '3D Trace', sub: 'Benthic Lifecycle', icon: <History /> },
        { id: 'alliance', label: 'Alliance', sub: 'Sovereign Partners', icon: <Globe /> },
      ]
    },
    {
      label: "Economy",
      icon: <Gem className="w-4 h-4" />,
      items: [
        { id: 'exchange', label: 'Exchange', sub: 'B2B Asset Trading', icon: <BarChart3 /> },
        { id: 'dashboard', label: 'Investors', sub: 'Portfolio Ledger', icon: <Wallet /> },
        { id: 'gigger', label: 'Gigger Hub', sub: 'Coastal Work Portal', icon: <Briefcase /> },
        { id: 'oracle', label: 'Oracle Desk', sub: 'Scientific Auditing', icon: <Microscope /> },
      ]
    },
    {
      label: "Resilience",
      icon: <ShieldCheck className="w-4 h-4" />,
      items: [
        { id: 'impact', label: 'Impact', sub: 'ESG Performance', icon: <Users /> },
        { id: 'academy', label: 'Academy', sub: 'Skills Verification', icon: <GraduationCap /> },
        { id: 'sdgs', label: 'SDG Goals', sub: 'Global Compliance', icon: <Target /> },
        { id: 'governance', label: 'Governance', sub: 'Legal Frameworks', icon: <Landmark /> },
      ]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] px-4 py-4 md:px-8 md:py-8 pointer-events-none transition-all duration-700">
        <div className={`max-w-7xl mx-auto rounded-full px-5 py-3 md:px-10 md:py-4 flex items-center justify-between pointer-events-auto transition-all duration-700 ${
          isScrolled || isHubOpen ? 'glass shadow-2xl border-white/40' : 'bg-transparent border-transparent'
        }`}>
          {/* Brand */}
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => { setView('landing'); if(isHubOpen) toggleHub(); }}
          >
            <div className="w-9 h-9 rounded-xl bg-[#52B788]/10 text-[#52B788] flex items-center justify-center transition-all group-hover:bg-[#52B788] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(82,183,136,0.5)]">
              <Anchor className="w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase text-[#1E293B]">BlueHarvest</span>
          </div>
          
          {/* Central Shortcuts (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <QuickLink active={currentView === 'twin'} onClick={() => setView('twin')} label="Network" />
            <QuickLink active={currentView === 'exchange'} onClick={() => setView('exchange')} label="Exchange" />
            <QuickLink active={currentView === 'impact'} onClick={() => setView('impact')} label="Impact" />
          </div>

          {/* Hub Trigger */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
              className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1E293B]/40 hover:text-[#52B788] transition-all px-4"
            >
              <Globe className="w-3 h-3" />
              {lang === 'EN' ? 'বাংলা' : 'EN'}
            </button>
            
            <button 
              onClick={toggleHub}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-full transition-all active:scale-95 border ${
                isHubOpen 
                ? 'bg-[#1E293B] text-white border-[#1E293B] shadow-xl' 
                : 'bg-[#52B788]/10 text-[#52B788] border-[#52B788]/20 hover:bg-[#52B788] hover:text-white shadow-sm'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">
                {isHubOpen ? 'Close Hub' : 'Delta Hub'}
              </span>
              {isHubOpen ? <X size={18} /> : <LayoutGrid size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* The Benthic Hub Overlay */}
      <div className={`fixed inset-0 z-[180] transition-all duration-700 ease-in-out flex flex-col ${
        isHubOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-[#F8FAFC]/95 backdrop-blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#E0F2FE] blur-[200px] rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#52B788]/5 blur-[200px] rounded-full opacity-60"></div>

        <div className="relative z-10 flex-grow overflow-y-auto pt-32 pb-20 px-6 md:px-12 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            
            {/* Hub Welcome Header */}
            <div className="mb-16 border-b border-[#1E293B]/5 pb-12">
              <p className="text-[#52B788] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Central Operating System</p>
              <h2 className="text-5xl md:text-7xl font-black text-[#1E293B] tracking-tighter">Navigate the Blue.</h2>
            </div>

            {/* Hub Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center gap-3 border-b border-[#1E293B]/10 pb-4">
                    <div className="text-[#52B788] opacity-50">{cat.icon}</div>
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#1E293B]/40">{cat.label}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {cat.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => { setView(item.id as AppView); toggleHub(); }}
                        className={`group relative flex items-center gap-4 p-5 rounded-[2rem] transition-all border text-left overflow-hidden ${
                          currentView === item.id 
                          ? 'bg-[#52B788] border-[#52B788] shadow-xl' 
                          : 'bg-[#1E293B]/5 border-transparent hover:border-[#52B788]/30 hover:bg-white shadow-sm'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                          currentView === item.id ? 'bg-white/20 text-white' : 'bg-[#52B788]/10 text-[#52B788]'
                        }`}>
                          {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                        </div>
                        <div className="flex-grow">
                          <p className={`text-sm font-black tracking-tight leading-none mb-1 transition-colors ${
                            currentView === item.id ? 'text-white' : 'text-[#1E293B]'
                          }`}>{item.label}</p>
                          <p className={`text-[9px] font-bold uppercase tracking-widest leading-none transition-colors ${
                            currentView === item.id ? 'text-white/60' : 'text-[#1E293B]/30 group-hover:text-[#1E293B]/50'
                          }`}>{item.sub}</p>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-all ${
                          currentView === item.id ? 'text-white opacity-100' : 'text-[#1E293B]/10 group-hover:text-[#52B788] group-hover:translate-x-1'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Hub Footer */}
            <div className="mt-24 pt-12 border-t border-[#1E293B]/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-[#1E293B]/20">
              <p>Project BlueHarvest // Terminal OS v4.2.0_SeaFoam</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-[#1E293B] transition-colors">Documentation</a>
                <a href="#" className="hover:text-[#1E293B] transition-colors">Ledger Status</a>
                <a href="#" className="hover:text-[#1E293B] transition-colors">Ethics Protocol</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const QuickLink: React.FC<{ active: boolean, onClick: () => void, label: string }> = ({ active, onClick, label }) => (
  <button 
    onClick={onClick} 
    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${active ? 'text-[#1E293B]' : 'text-[#1E293B]/40 hover:text-[#1E293B]'}`}
  >
    {label}
    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#52B788] transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </button>
);

export default Navbar;