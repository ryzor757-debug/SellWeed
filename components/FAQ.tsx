import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Anchor, Zap } from 'lucide-react';

interface FAQItem {
  question: string;
  banglaQuestion: string;
  answer: string;
  category: 'Platform' | 'Technology' | 'Economic' | 'Impact';
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'Platform',
      question: "What exactly is Project BlueHarvest?",
      banglaQuestion: "প্রজেক্ট ব্লুহার্ভেস্ট আসলে কী?",
      answer: "Project BlueHarvest is a tri-nodal gig-platform designed to formalize Bangladesh's seaweed industry. We connect coastal farmers (Giggers), student verifiers (Oracles), and global buyers through a blockchain-backed ledger, ensuring every gram of seaweed is a verified, high-quality asset."
    },
    {
      category: 'Technology',
      question: "How does the blockchain 'Truth Engine' work?",
      banglaQuestion: "ব্লকচেইন 'ট্রুথ ইঞ্জিন' কিভাবে কাজ করে?",
      answer: "Every harvest is verified through three independent data points: GPS-tagged spectral analysis by student oracles, automated computer vision assessments, and satellite LIDAR monitoring. This 'composite truth' is then hashed and minted on the Polygon network, creating an immutable record of quality and origin."
    },
    {
      category: 'Economic',
      question: "How does this benefit coastal farmers financially?",
      banglaQuestion: "এটি উপকূলীয় কৃষকদের অর্থনৈতিকভাবে কিভাবে উপকৃত করে?",
      answer: "We turn manual labor into 'Blue Credit'. By documenting a farmer's harvest history and reliability on-chain, we create a digital financial identity. This allows unbanked workers to access micro-loans, insurance, and premium global market prices, typically increasing their income by over 400%."
    },
    {
      category: 'Impact',
      question: "What is 'Blue Carbon' and why is it important?",
      banglaQuestion: "'ব্লু কার্বন' কী এবং কেন এটি গুরুত্বপূর্ণ?",
      answer: "Seaweed is one of nature's most efficient carbon sinks, sequestering CO2 up to 20 times faster than land forests. Our platform tracks this sequestration in real-time, allowing us to mint high-fidelity carbon credits that fund coastal restoration while helping global companies meet their Net-Zero goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-40 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border-[#52B788]/20 bg-[#52B788]/5 text-[#52B788] text-[10px] font-black uppercase tracking-[0.5em]">
            <HelpCircle className="w-4 h-4" />
            Knowledge Base
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-[#1E293B] tracking-tighter leading-none mb-8">
            Curious <br />
            <span className="text-gradient">Waters.</span>
          </h2>
          <p className="text-slate-400 text-xl font-light max-w-xl mx-auto">
            Everything you need to know about the sovereign blue economy.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 border-white/40 ${
                activeIndex === index ? 'bg-white/60 shadow-xl' : 'hover:bg-white/50'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-10 flex items-start justify-between gap-8 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] font-black text-[#52B788] uppercase tracking-[0.4em] px-3 py-1 rounded-full bg-[#52B788]/10">
                      {faq.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-[#1E293B] tracking-tight mb-2 leading-tight">
                    {faq.question}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                    {faq.banglaQuestion}
                  </p>
                </div>
                <div className={`mt-2 flex-shrink-0 w-12 h-12 rounded-full glass border-white/40 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-[#52B788] text-white rotate-180 shadow-[0_0_15px_rgba(82,183,136,0.5)]' : 'text-slate-400 group-hover:text-[#52B788]'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  activeIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10 pb-12">
                  <div className="h-px w-full bg-[#1E293B]/5 mb-10"></div>
                  <p className="text-slate-500 text-lg leading-relaxed font-light mb-10">
                    {faq.answer}
                  </p>
                  
                  <div className="flex gap-4">
                    <div className="px-5 py-2.5 rounded-2xl glass border-white/60 text-[10px] font-black text-cyan-600 uppercase tracking-widest flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4" /> Polygon POS Verified
                    </div>
                    <div className="px-5 py-2.5 rounded-2xl glass border-white/60 text-[10px] font-black text-[#52B788] uppercase tracking-widest flex items-center gap-3">
                      <Anchor className="w-4 h-4" /> Benthic Sync Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <button className="flex items-center gap-4 text-[#1E293B] font-black text-sm uppercase tracking-widest mx-auto group">
             Explore Documentation 
             <Zap className="w-5 h-5 text-[#52B788] group-hover:scale-125 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;