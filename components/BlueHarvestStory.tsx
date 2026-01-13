
import React, { useEffect, useState } from 'react';
import { Waves, Zap, ShieldCheck, Microscope, ArrowDown, Quote, Linkedin, Twitter, Globe } from 'lucide-react';

const BlueHarvestStory: React.FC = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 500, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#C2B280] selection:text-black">
      
      {/* Hero Section: The Narrative Hook */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=2000&auto=format&fit=crop" 
            alt="Coastal Mist" 
            className="w-full h-full object-cover opacity-60 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
             <div className="h-px w-12 bg-[#C2B280]"></div>
             <span className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em]">The Long Form</span>
             <div className="h-px w-12 bg-[#C2B280]"></div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12">
            The Delta <br />
            <span className="text-gradient">Manifesto.</span>
          </h1>
          
          <p className="font-serif italic text-xl md:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            "We were born from the realization that the Bay of Bengal wasn't a problem to be solved, but a sovereign asset waiting for its truth to be told."
          </p>
          
          <div className="flex flex-col items-center gap-4 text-white/30">
            <span className="text-[10px] font-black uppercase tracking-widest">Read the Story</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Chapter 1: The Catalyst (Black & White Cinema) */}
      <section className="py-40 px-6 relative bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#004B50] mb-6 block">Chapter 01 // The Disruption</span>
              <h2 className="font-serif italic text-5xl md:text-8xl font-light mb-8 leading-tight">The <span className="not-italic font-black">Vanishing</span> <br />Shoreline.</h2>
              <div className="h-px w-24 bg-[#004B50] mb-10"></div>
              <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed mb-8">
                For centuries, the coastal communities of Saint Martin’s and Kuakata lived in harmony with the tides. But as industrial fishing depleted the shelves and the climate crisis forced the water higher, the people began to vanish.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Displaced workers flooded the urban slums of Dhaka, leaving behind ancestral knowledge and a pristine environment that was rapidly turning into an ecological ghost town. The crisis wasn't just environmental; it was a crisis of human agency.
              </p>
            </div>
            
            <div className="glass bg-slate-50 p-10 rounded-[3rem] border-slate-100 italic font-serif text-xl text-slate-600 relative overflow-hidden group">
               <Quote className="absolute -top-4 -left-4 w-20 h-20 text-slate-100" />
               <p className="relative z-10">
                 "We saw a generation of master mariners and divers becoming day laborers in garments factories. We knew the ocean had more to offer if we could just verify its value."
               </p>
               <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase">Hasan Rahman</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Co-Founder, BlueHarvest</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
             <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-[3/4] group">
                <img 
                  src="https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Coastal Crisis" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Transition: The Shift to Color (The Innovation) */}
      <section className="py-40 px-6 bg-[#001B1E] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
             <span className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Chapter 02 // The Pivot</span>
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12">The Truth <span className="text-gradient">Engine.</span></h2>
             <div className="h-20 w-px bg-gradient-to-b from-[#C2B280] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StoryBlock 
              icon={<Microscope className="w-8 h-8 text-cyan-400" />}
              title="Spectral Integrity"
              desc="We realized that trust couldn't be requested—it had to be computed. We developed the first mobile spectral analysis protocol for coastal workers."
            />
            <StoryBlock 
              icon={<Zap className="w-8 h-8 text-emerald-400" />}
              title="The Gigger Protocol"
              desc="By formalizing 'blue jobs' through blockchain-backed identities, we turned seasonal labor into a permanent, bankable financial asset."
            />
            <StoryBlock 
              icon={<ShieldCheck className="w-8 h-8 text-[#C2B280]" />}
              title="Sovereign Ledger"
              desc="Every gram of seaweed exported is a verified story of restoration. We built the bridge between the delta and the global biotech market."
            />
          </div>

          <div className="mt-40 relative rounded-[4rem] overflow-hidden min-h-[600px] border border-white/5 shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=1500&auto=format&fit=crop" 
               alt="Innovation" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#001B1E] via-[#001B1E]/60 to-transparent"></div>
             <div className="absolute inset-0 flex items-center p-12 md:p-24">
                <div className="max-w-xl">
                   <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">Turning Biomass <br />into Data.</h3>
                   <p className="text-white/60 text-xl font-light leading-relaxed mb-10">
                      Our innovation wasn't just the seaweed. It was the ability to prove that this seaweed was grown sustainably, by a verified worker, with a specific carbon footprint.
                   </p>
                   <button className="bg-[#C2B280] text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                      View Technology Roadmap
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Team (Minimalist Tech) */}
      <section className="py-40 px-6 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-slate-100 pb-12">
            <div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#004B50] mb-6 block">Chapter 03 // The Architects</span>
               <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">The Blue <br />Leadership.</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed italic">
              "A multidisciplinary collective of marine biologists, blockchain architects, and delta nationalists."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <TeamMember 
               name="Dr. Anika Sayeed"
               role="Chief Marine Scientist"
               img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
               desc="Ex-UNESCO researcher with 15 years in benthic ecosystem modeling."
            />
            <TeamMember 
               name="Zahir Ahmed"
               role="Head of Blockchain"
               img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
               desc="Architect of the Bengal Benthic Ledger. Focused on tri-nodal verification."
            />
            <TeamMember 
               name="Rafiul Islam"
               role="Field Operations"
               img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
               desc="Spearheading the Gigger onboarding across 12 coastal terminals."
            />
            <TeamMember 
               name="Farhana K."
               role="Govt Relations"
               img="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop"
               desc="Liaison for Smart Bangladesh 2041 and national sandbox compliance."
            />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-40 px-6 text-center bg-black relative">
         <div className="max-w-4xl mx-auto relative z-10">
            <Waves className="w-12 h-12 text-[#C2B280] mx-auto mb-12 opacity-50" />
            <h2 className="font-serif italic text-4xl md:text-7xl font-light mb-16 leading-tight">
               "The ocean doesn't need to be saved; it needs to be <span className="not-italic font-black text-gradient">listened to."</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C2B280] transition-all shadow-2xl">
                  Support our Mission
               </button>
               <button className="glass border-white/10 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                  Join the Team
               </button>
            </div>
         </div>
         {/* Background Glow */}
         <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#004B50]/20 to-transparent"></div>
      </section>

      <style>{`
        .text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #C2B280 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

const StoryBlock: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="glass p-12 rounded-[3.5rem] border-white/5 hover:bg-white/5 transition-all group">
     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <h4 className="text-2xl font-black text-white tracking-tight mb-4">{title}</h4>
     <p className="text-white/40 text-lg font-light leading-relaxed">{desc}</p>
  </div>
);

const TeamMember: React.FC<{ name: string, role: string, img: string, desc: string }> = ({ name, role, img, desc }) => (
  <div className="group">
     <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="flex gap-3">
              <Linkedin className="w-4 h-4 text-white hover:text-[#C2B280] cursor-pointer" />
              <Twitter className="w-4 h-4 text-white hover:text-[#C2B280] cursor-pointer" />
           </div>
           <Globe className="w-4 h-4 text-white hover:text-[#C2B280] cursor-pointer" />
        </div>
     </div>
     <h4 className="text-xl font-black text-slate-900 tracking-tight mb-1">{name}</h4>
     <p className="text-[10px] font-black text-[#004B50] uppercase tracking-widest mb-4">{role}</p>
     <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default BlueHarvestStory;
