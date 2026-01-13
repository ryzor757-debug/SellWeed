
import React from 'react';
import { Compass, Users, Globe, Shield, ArrowDown, Leaf } from 'lucide-react';

const BlueVision: React.FC = () => {
  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center">
        {/* HD Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=2000&auto=format&fit=crop" 
            alt="Bangladesh Coast" 
            className="w-full h-full object-cover opacity-40 grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B1E] via-transparent to-[#001B1E]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
             <div className="h-px w-12 bg-[#C2B280]"></div>
             <span className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em]">The Blue Manifesto</span>
             <div className="h-px w-12 bg-[#C2B280]"></div>
          </div>
          
          <h1 className="font-serif italic text-6xl md:text-9xl font-light tracking-tight leading-[0.85] mb-12 animate-float">
            Our Vision <br />
            <span className="text-white not-italic font-black">for 2041.</span>
          </h1>
          
          <p className="font-serif italic text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            "We aren't just farming seaweed; we are building the digital backbone of a sovereign, regenerative marine economy for the Bengal Basin."
          </p>
          
          <div className="flex flex-col items-center gap-4 text-white/20">
            <span className="text-[10px] font-black uppercase tracking-widest">Scroll to Begin</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Triple Bottom Line Sections */}
      
      {/* 1. Coastal Resilience: People */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[800px]">
                <img 
                  src="https://images.unsplash.com/photo-1518005020250-68594f21cb37?q=80&w=1200&auto=format&fit=crop" 
                  alt="Coastal Worker" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <p className="font-serif italic text-white/80 text-xl leading-relaxed">
                     "By 2041, the movement from sea to city will reverse. Wealth will flow where the water meets the shore."
                   </p>
                </div>
             </div>
          </div>
          <div className="lg:col-span-6 space-y-12 order-1 lg:order-2">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-serif italic text-5xl md:text-7xl font-light mb-8">Coastal <span className="not-italic font-black text-white">Resilience.</span></h2>
              <div className="h-px w-24 bg-[#C2B280] mb-8"></div>
              <p className="font-serif italic text-xl text-white/50 leading-relaxed mb-8">
                Bangladesh is on the frontlines of climate change. For decades, the story of our coast has been one of retreat and loss. Project BlueHarvest changes that narrative.
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                By creating high-value gig-work in the deep sea, we stop the forced migration of rural families to urban slums. We are establishing nodes of prosperity where people can thrive in their ancestral homes, powered by the very tides that once threatened them.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-4xl font-black text-white tracking-tighter mb-1">90%</p>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Reduced Urban Migration</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter mb-1">4.5M</p>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Coastal Livelihoods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ocean Health: Planet */}
      <section className="py-40 px-6 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-xl shadow-emerald-500/10">
              <Leaf className="w-8 h-8" />
            </div>
            <h2 className="font-serif italic text-5xl md:text-8xl font-light mb-8 text-slate-900">Ocean <span className="not-italic font-black">Health.</span></h2>
            <div className="h-px w-32 bg-emerald-200 mx-auto mb-12"></div>
            <p className="font-serif italic text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              "Seaweed is the silent lung of the ocean. Our goal is to sequester a billion tons of carbon by the centennial of our nation."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-4 bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6">Restoration</h4>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  Every raft we deploy acts as an artificial reef, inviting biodiversity back to the benthic shelf. We are healing the scars of industrial fishing.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200">
                <span className="text-5xl font-black text-slate-900 tracking-tighter">1.2B</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Grams of CO2 removed daily</p>
              </div>
            </div>

            <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=1200&auto=format&fit=crop" 
                alt="Underwater Garden" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent"></div>
              <div className="absolute bottom-12 left-12 max-w-md">
                 <h5 className="text-white text-3xl font-bold tracking-tight mb-4">Carbon Sequestration as a Global Asset.</h5>
                 <p className="text-white/80 text-sm font-medium leading-relaxed">
                    By making the unseen benefits of the ocean visible through data, we turn restoration into a profitable commodity for the world.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Digital Bangladesh: Profit & Formalization */}
      <section className="py-40 px-6 relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-cyan-500/5 blur-[200px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
               <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C2B280]/10 border border-[#C2B280]/20 flex items-center justify-center text-[#C2B280] mb-8">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif italic text-5xl md:text-7xl font-light mb-8">Digital <span className="not-italic font-black text-white">Sovereignty.</span></h2>
                  <div className="h-px w-24 bg-[#C2B280] mb-8"></div>
                  <p className="font-serif italic text-xl text-white/50 leading-relaxed mb-8">
                    The informal economy is the greatest hurdle to systemic wealth. By integrating NID, Biometrics, and Blockchain, we are formalizing the labor of the coast.
                  </p>
                  <p className="text-white/40 text-lg font-light leading-relaxed">
                    By 2041, every gigger will have a verified financial identity that global banks recognize. We are not just giving jobs; we are giving people their place in the global financial system.
                  </p>
               </div>
               
               <div className="glass p-10 rounded-[3rem] border-white/5 bg-gradient-to-br from-[#C2B280]/5 to-transparent">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    Blockchain-First Economy
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">
                    Our platform ensures that a buyer in London can trust a farmer in Kuakata. No intermediaries, no hidden fees, just pure, verified value exchange.
                  </p>
                  <button className="bg-white text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#C2B280] transition-all">
                    View Technical Roadmap
                  </button>
               </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative z-10 glass rounded-[4rem] p-1 border-white/10 overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop" 
                    alt="Digital Tech" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 rounded-full glass border-white/20 flex items-center justify-center animate-pulse">
                        <Compass className="w-10 h-10 text-white" />
                     </div>
                  </div>
               </div>
               {/* Decorative Circles */}
               <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
               <div className="absolute -bottom-12 -left-12 w-96 h-96 border border-white/5 rounded-full animate-[spin_60s_linear_infinite] delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Close */}
      <section className="py-40 px-6 text-center bg-black relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="h-20 w-px bg-gradient-to-b from-[#C2B280] to-transparent mx-auto mb-12"></div>
          <h2 className="font-serif italic text-5xl md:text-8xl font-light mb-12 leading-tight">
            We are the <br />
            <span className="not-italic font-black text-gradient">Blue Frontier.</span>
          </h2>
          <p className="font-serif italic text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-16">
            Join the movement. From the Bay of Bengal to the global stage, we are redefining what it means to be a modern delta nation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#C2B280] text-[#001B1E] px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl">
              Support the Vision
            </button>
            <button className="glass text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
              Download Manifesto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlueVision;
