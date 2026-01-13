
import React, { useState } from 'react';
import { 
  Briefcase, 
  Wallet, 
  User, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Plus,
  ArrowDownToLine,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const GiggerHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'wallet' | 'profile'>('tasks');
  const [reliabilityScore, setReliabilityScore] = useState(82);

  const tasks = [
    { id: 1, title: "Seeding at St. Martin's", bangla: "সেন্ট মার্টিনে বীজ বপন", payout: 1200, location: "Deep Sea Node A1", type: "Seeding" },
    { id: 2, title: "Drying at Cox's Bazar", bangla: "কক্সবাজারে শৈবাল শুকানো", payout: 850, location: "Main Hub", type: "Drying" },
    { id: 3, title: "Raft Repair Hub", bangla: "ভেলা মেরামত", payout: 1500, location: "Kuakata Terminal", type: "Maintenance" },
    { id: 4, title: "Biomass Loading", bangla: "শৈবাল লোডিং", payout: 900, location: "Hatiya Hub", type: "Logistics" },
  ];

  return (
    <div className="min-h-screen bg-[#001B1E] flex flex-col font-sans pb-32">
      {/* Top Header Section */}
      <header className="pt-24 px-6 pb-12 bg-gradient-to-b from-[#003438] to-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Briefcase className="w-32 h-32 text-[#C2B280]" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-2">Coastal Opportunity Hub</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
              The Gigger <span className="text-[#C2B280]">Hub.</span>
            </h1>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
              সাগরিকার সাথে আয় করুন
            </p>
          </div>

          {/* Reliability Gauge */}
          <div className="glass px-8 py-6 rounded-[2.5rem] border-[#C2B280]/20 flex items-center gap-6 shadow-2xl relative overflow-hidden">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full rotate-[-90deg]">
                <circle cx="32" cy="32" r="28" className="stroke-white/5 fill-none" strokeWidth="6" />
                <circle 
                  cx="32" cy="32" r="28" 
                  className="stroke-[#C2B280] fill-none" 
                  strokeWidth="6" 
                  strokeDasharray="175" 
                  strokeDashoffset={175 - (175 * reliabilityScore) / 100} 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">{reliabilityScore}%</span>
            </div>
            <div>
              <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">Blue Credit Score</p>
              <p className="text-white font-black text-xl leading-none">Excellent</p>
              <p className="text-[#C2B280] text-[10px] font-bold uppercase mt-1">বিশ্বাসযোগ্য কর্মী</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-6 flex-grow">
        {activeTab === 'tasks' && (
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight uppercase">Available Gigs</h2>
              <span className="text-[10px] font-bold text-[#C2B280] uppercase tracking-widest bg-[#C2B280]/10 px-3 py-1 rounded-full">4 Nearby</span>
            </div>
            
            {tasks.map(task => (
              <div key={task.id} className="group bg-white/5 border border-white/5 p-6 rounded-[2rem] hover:border-[#C2B280]/40 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#C2B280]/10 flex items-center justify-center text-[#C2B280]">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white tracking-tight">{task.title}</h3>
                      <p className="text-sm font-medium text-white/60 mb-1">{task.bangla}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-1">Instant Payout</span>
                    <span className="text-2xl font-black text-[#C2B280] tracking-tighter">৳{task.payout}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin className="w-3 h-3" />
                    {task.location}
                  </div>
                  <div className="flex items-center gap-2 text-[#2E8B57] text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Work
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            <div className="glass rounded-[3rem] p-8 border-[#C2B280]/20 shadow-2xl relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Wallet className="w-24 h-24 text-white" />
              </div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Total Balance</p>
              <div className="flex items-end gap-3 mb-8">
                <h3 className="text-6xl font-black text-white tracking-tighter">৳4,250</h3>
                <span className="text-[#C2B280] text-sm font-bold mb-3">BDT</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-bold text-white/30 uppercase mb-1">Pending</p>
                  <p className="text-white font-bold">৳1,200</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-bold text-white/30 uppercase mb-1">Withdrawn</p>
                  <p className="text-white font-bold">৳24,500</p>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#C2B280] text-[#001B1E] py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ArrowDownToLine className="w-6 h-6" />
                Withdraw to bKash
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] px-2">Recent Payouts</h4>
              <TransactionItem label="Harvest at Hatiya" date="Yesterday" amount="+ ৳1,450" status="Success" />
              <TransactionItem label="Quality Bonus" date="2 days ago" amount="+ ৳200" status="Success" />
              <TransactionItem label="Withdrawal" date="5 days ago" amount="- ৳5,000" status="Success" />
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-24 h-24 rounded-full border-4 border-[#C2B280] overflow-hidden">
                <img src="https://i.pravatar.cc/200?u=HasanAli" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-2">Hasan Ali</h3>
                <p className="text-[#C2B280] font-bold text-sm uppercase tracking-widest">Master Gigger</p>
                <div className="flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3 text-[#2E8B57]" />
                  NID Verified
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ProfileStat label="Completed Gigs" value="142" />
              <ProfileStat label="Member Since" value="Oct 2024" />
            </div>

            <div className="space-y-4 pt-6">
              <ProfileLink label="Linked Accounts" value="bKash / Binimoy" icon={<ExternalLink className="w-4 h-4" />} />
              <ProfileLink label="Skill Badges" value="6 Earned" icon={<ChevronRight className="w-4 h-4" />} />
              <ProfileLink label="Help & Support" value="Contact Desk" icon={<ChevronRight className="w-4 h-4" />} />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-8 left-6 right-6 z-[100] glass border-white/10 rounded-full p-2 shadow-2xl flex justify-between items-center max-w-xl mx-auto backdrop-blur-3xl">
        <NavIconButton 
          active={activeTab === 'tasks'} 
          onClick={() => setActiveTab('tasks')} 
          icon={<Briefcase className="w-6 h-6" />} 
          label="Gigs"
          bangla="কাজ"
        />
        <NavIconButton 
          active={activeTab === 'wallet'} 
          onClick={() => setActiveTab('wallet')} 
          icon={<Wallet className="w-6 h-6" />} 
          label="Wallet"
          bangla="ওয়ালেট"
        />
        <NavIconButton 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
          icon={<User className="w-6 h-6" />} 
          label="Profile"
          bangla="প্রোফাইল"
        />
      </nav>

      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

const NavIconButton: React.FC<{ active: boolean, onClick: () => void, icon: React.ReactNode, label: string, bangla: string }> = ({ active, onClick, icon, label, bangla }) => (
  <button 
    onClick={onClick}
    className={`flex-1 flex flex-col items-center py-3 rounded-full transition-all gap-1 ${
      active ? 'bg-white text-[#001B1E] shadow-xl' : 'text-white/40 hover:text-white'
    }`}
  >
    {icon}
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
      <span className="text-[8px] font-medium leading-none">{bangla}</span>
    </div>
  </button>
);

const TransactionItem: React.FC<{ label: string, date: string, amount: string, status: string }> = ({ label, date, amount, status }) => (
  <div className="flex justify-between items-center p-5 bg-white/5 border border-white/5 rounded-2xl">
    <div>
      <p className="text-white font-bold text-sm tracking-tight">{label}</p>
      <p className="text-[10px] text-white/30 uppercase tracking-widest">{date}</p>
    </div>
    <div className="text-right">
      <p className={`text-sm font-black ${amount.startsWith('+') ? 'text-[#2E8B57]' : 'text-white/40'}`}>{amount}</p>
      <p className="text-[9px] text-[#2E8B57] font-bold uppercase tracking-widest">{status}</p>
    </div>
  </div>
);

const ProfileStat: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-xl font-black text-white tracking-tight">{value}</p>
  </div>
);

const ProfileLink: React.FC<{ label: string, value: string, icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-3xl group hover:border-[#C2B280]/40 cursor-pointer transition-all">
    <div>
      <p className="text-white font-bold tracking-tight">{label}</p>
      <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{value}</p>
    </div>
    <div className="text-white/20 group-hover:text-[#C2B280] transition-colors">
      {icon}
    </div>
  </div>
);

export default GiggerHub;
