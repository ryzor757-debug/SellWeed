
import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Award, 
  Star, 
  Lock, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Microscope
} from 'lucide-react';

const BlueAcademyPage: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);

  const courses = [
    {
      id: 1,
      title: 'Sustainable Seeding',
      bangla: 'টেকসই বীজ বপন',
      duration: '14 min',
      image: 'https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=800&auto=format&fit=crop',
      locked: false,
      premium: '15%',
      badge: 'Master Seeder'
    },
    {
      id: 2,
      title: 'Biomass Optimization',
      bangla: 'বায়োমাস অপ্টিমাইজেশান',
      duration: '22 min',
      image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800&auto=format&fit=crop',
      locked: true,
      premium: '20%',
      badge: 'Biomass Expert'
    },
    {
      id: 3,
      title: 'Post-Harvest Logistics',
      bangla: 'ফসল-পরবর্তী রসদ',
      duration: '18 min',
      image: 'https://images.unsplash.com/photo-1495433334492-45245de18243?q=80&w=800&auto=format&fit=crop',
      locked: true,
      premium: '12%',
      badge: 'Logistics Pro'
    },
    {
      id: 4,
      title: 'Digital Wallet Security',
      bangla: 'ডিজিটাল ওয়ালেট নিরাপত্তা',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
      locked: true,
      premium: '10%',
      badge: 'Safe Gigger'
    }
  ];

  const badges = [
    { name: 'Master Seeder', icon: <Star className="w-8 h-8" />, desc: '+15% Gig Premium', color: 'emerald' },
    { name: 'Verified Expert', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Tier 1 Gigs Unlocked', color: 'blue' },
    { name: 'Oracle Apprentice', icon: <Microscope className="w-8 h-8" />, desc: 'Data Verification Rights', color: 'purple' },
    { name: 'Logistics Pro', icon: <Zap className="w-8 h-8" />, desc: '+12% Transport Bonus', color: 'yellow' },
  ];

  return (
    <div className="min-h-screen bg-[#000D0E] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C2B280]/5 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[200px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <div className="flex items-center gap-2 text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              <BookOpen className="w-3 h-3" />
              Empowering Coastal Talent // Academy Hub
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-4">
              The Blue <span className="text-gradient">Academy.</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Premium training for the next-gen blue economy. Pass verification quizzes to unlock high-premium coastal gigs.
            </p>
          </div>
          
          <div className="glass px-8 py-6 rounded-[2.5rem] border-white/5 flex items-center gap-6">
             <div className="text-center">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Badges Earned</p>
                <p className="text-3xl font-black text-white">02</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="text-center">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Course Status</p>
                <p className="text-sm font-black text-[#C2B280]">LEVEL 2 GIGGER</p>
             </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Course Library */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-2xl font-black tracking-tight">Course Library</h2>
               <button className="text-[10px] font-black uppercase tracking-widest text-[#C2B280]">See all modules</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map(course => (
                <div key={course.id} className="group relative bg-white/5 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all hover:border-[#C2B280]/40 shadow-2xl">
                  <div className="relative aspect-video">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    {!course.locked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-14 h-14 rounded-full bg-white text-[#001B1E] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </button>
                      </div>
                    )}

                    {course.locked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-2">
                           <Lock className="w-8 h-8 text-white/40" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Unlock with Quiz</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white">
                        {course.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-[#C2B280] text-[#001B1E] text-[9px] font-black uppercase tracking-widest">
                        +{course.premium} Earnings
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-black tracking-tight text-white mb-1">{course.title}</h3>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">{course.bangla}</p>
                    
                    <button 
                      onClick={() => !course.locked && setActiveQuiz(course.id)}
                      className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all ${
                        course.locked 
                        ? 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed' 
                        : 'bg-white text-[#001B1E] hover:bg-[#C2B280]'
                      }`}
                    >
                      {course.locked ? 'Module Locked' : 'Start Verification Quiz'}
                      {!course.locked && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Quiz UI Mockup (Overlay Mode) */}
            {activeQuiz && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-3xl">
                <div className="absolute inset-0 bg-black/60" onClick={() => setActiveQuiz(null)}></div>
                <div className="relative w-full max-w-xl glass p-12 rounded-[3.5rem] border-white/10 shadow-[0_0_100px_rgba(194,178,128,0.2)]">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h4 className="text-2xl font-black tracking-tight">Proof of Learning</h4>
                      <p className="text-[10px] font-black text-[#C2B280] uppercase tracking-widest">Question {quizStep + 1} of 3</p>
                    </div>
                    <button onClick={() => setActiveQuiz(null)} className="p-2 text-white/40 hover:text-white transition-colors">
                      ✕
                    </button>
                  </div>

                  <div className="space-y-8">
                    <h5 className="text-xl font-bold leading-relaxed">
                      What is the optimal water temperature for seeding BH-Type-X seaweed?
                      <br />
                      <span className="text-white/40 font-medium text-sm italic">সিডিং করার জন্য সবচেয়ে ভালো তাপমাত্রা কত?</span>
                    </h5>

                    <div className="space-y-4">
                      {['18°C - 22°C', '24°C - 28°C (Optimal)', 'Above 30°C'].map((opt, i) => (
                        <button key={i} className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-left font-bold hover:bg-white/10 transition-all flex justify-between items-center group">
                          {opt}
                          <div className="w-5 h-5 rounded-full border-2 border-white/10 group-hover:border-[#C2B280]"></div>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#C2B280]" style={{ width: '33%' }}></div>
                      </div>
                      <button 
                        onClick={() => {
                          if (quizStep < 2) setQuizStep(quizStep + 1);
                          else { setActiveQuiz(null); setQuizStep(0); }
                        }}
                        className="bg-[#C2B280] text-[#001B1E] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                      >
                        Next Question
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Badge Gallery & Career Path */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-10 rounded-[3rem] border-white/5 shadow-2xl">
              <h2 className="text-xl font-black tracking-tight mb-8">Professional Credentials</h2>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 text-${badge.color}-400`}>
                      {badge.icon}
                    </div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{badge.name}</h4>
                    <p className="text-[8px] font-bold text-[#C2B280] uppercase tracking-widest">{badge.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Award className="w-12 h-12 text-[#C2B280]" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-[#C2B280]">Career Unlock</h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                  Earn all 4 badges to qualify for the <span className="text-white">Blue Foreman</span> training and receive a company-issued smartphone.
                </p>
                <div className="mt-6 flex items-center justify-between">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-[#000d0e] bg-white/10"></div>)}
                   </div>
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">124 Qualified</span>
                </div>
              </div>
            </div>

            {/* Mobile Compatibility Note */}
            <div className="bg-[#C2B280] p-10 rounded-[3rem] text-[#001B1E] relative overflow-hidden group">
               <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Zap className="w-48 h-48" />
               </div>
               <h4 className="text-xl font-black tracking-tight mb-2">Optimized for Delta Life.</h4>
               <p className="text-sm font-medium leading-relaxed opacity-60 mb-8">
                  Data-efficient video streams. Works on Symbian, Android 4.4+, and low-bandwidth coastal networks.
               </p>
               <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b-2 border-[#001B1E] pb-1">
                  Download Offline Packs
                  <ChevronRight className="w-3 h-3" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlueAcademyPage;
