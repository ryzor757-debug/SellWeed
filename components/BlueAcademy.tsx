
import React, { useRef } from 'react';
import { Play, Lock, ChevronLeft, ChevronRight, BookOpenCheck, Clock } from 'lucide-react';

const BlueAcademy: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      id: 1,
      title: 'Sustainable Seeding',
      duration: '14 min',
      image: 'https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=800&auto=format&fit=crop',
      category: 'Foundation'
    },
    {
      id: 2,
      title: 'Spectral Verification',
      duration: '22 min',
      image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800&auto=format&fit=crop',
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'Post-Harvest Logistics',
      duration: '18 min',
      image: 'https://images.unsplash.com/photo-1495433334492-45245de18243?q=80&w=800&auto=format&fit=crop',
      category: 'Operations'
    },
    {
      id: 4,
      title: 'Digital Wallet Mastery',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
      category: 'Fintech'
    },
    {
      id: 5,
      title: 'Regenerative Ocean Law',
      duration: '35 min',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      category: 'Governance'
    },
    {
      id: 6,
      title: 'AI Node Calibration',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
      category: 'Advanced'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#001B1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-[#C2B280] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Blue Economy Upskilling</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Blue Academy.</h3>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Netflix-style Horizontal Scroll */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] no-scrollbar pb-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {modules.map((module) => (
          <div 
            key={module.id} 
            className="flex-none w-[300px] md:w-[400px] group cursor-pointer"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 glass border-white/5 shadow-2xl">
              <img 
                src={module.image} 
                alt={module.title}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 transition-transform">
                <div className="w-16 h-16 rounded-full bg-white text-[#001B1E] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Quiz Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/10 border-white/20 text-[9px] font-bold text-white uppercase tracking-widest backdrop-blur-md">
                  <BookOpenCheck className="w-3 h-3 text-[#C2B280]" />
                  Quiz to Unlock
                </div>
              </div>

              {/* Duration Tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/70 text-[10px] font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
                <Clock className="w-3 h-3" />
                {module.duration}
              </div>
            </div>

            <div className="px-2">
              <p className="text-[#C2B280] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{module.category}</p>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#C2B280] transition-colors">
                Module {module.id}: {module.title}
              </h4>
              <div className="flex items-center gap-4">
                <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C2B280]/20 w-0 group-hover:w-[15%] transition-all duration-1000"></div>
                </div>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">0% Completed</span>
              </div>
            </div>
          </div>
        ))}

        {/* Locked Placeholder */}
        <div className="flex-none w-[300px] md:w-[400px] flex flex-col justify-center items-center glass rounded-3xl border-dashed border-white/10 opacity-40">
           <Lock className="w-12 h-12 text-white/20 mb-4" />
           <p className="text-white/40 font-bold text-xs uppercase tracking-[0.2em]">Next-Gen Curricula</p>
           <p className="text-white/20 text-[10px] mt-1 italic">Coming Monsoon 2025</p>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BlueAcademy;
