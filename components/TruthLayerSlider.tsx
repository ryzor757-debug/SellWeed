
import React, { useState, useRef, useEffect } from 'react';
import { Scan, Database, MapPin, ShieldCheck } from 'lucide-react';

const TruthLayerSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isResizing.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  useEffect(() => {
    const endResize = () => (isResizing.current = false);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', endResize);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', endResize);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', endResize);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', endResize);
    };
  }, []);

  return (
    <section className="py-32 px-6 bg-[#001B1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center reveal">
          <h2 className="text-[#C2B280] font-black tracking-[0.4em] uppercase text-[10px] mb-6">Transparency Protocol</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tightest leading-none mb-8">See Through the Data.</h3>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Drag to reveal how we turn physical biomass into high-fidelity digital assets.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize group"
          onMouseDown={() => (isResizing.current = true)}
          onTouchStart={() => (isResizing.current = true)}
        >
          {/* Digital Twin View (Bottom Layer) */}
          <div className="absolute inset-0 bg-black">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(cyan_1px,transparent_1px),linear-gradient(90deg,cyan_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             <div className="absolute inset-0 flex items-center justify-center p-20">
                <div className="w-full h-full border-2 border-cyan-400/30 rounded-[2rem] relative p-12">
                   <div className="absolute top-12 left-12 space-y-4">
                      <DataNode label="NODE_ID" value="BH-ST-9021" color="text-cyan-400" />
                      <DataNode label="LAT_LNG" value="21.42N / 91.97E" color="text-cyan-400" />
                      <DataNode label="BIOMASS_DENSITY" value="1.42kg/m²" color="text-emerald-400" />
                   </div>
                   <div className="absolute bottom-12 right-12 flex items-center gap-4">
                      <ShieldCheck className="w-12 h-12 text-emerald-400" />
                      <div className="text-right">
                         <p className="text-[10px] font-black text-white/30">STATUS</p>
                         <p className="text-lg font-black text-emerald-400 uppercase tracking-widest">Verified on Polygon</p>
                      </div>
                   </div>
                   {/* Center Scan Circle */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/20 rounded-full animate-pulse flex items-center justify-center">
                      <div className="w-48 h-48 border border-cyan-400/40 rounded-full flex items-center justify-center">
                         <Scan className="w-12 h-12 text-cyan-400" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Physical Photo (Top Layer) */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale-[20%]"
              alt="Physical Harvest"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
               <h4 className="text-4xl font-black text-white tracking-tight">Physical Asset</h4>
               <p className="text-white/60 font-medium">St. Martin Cluster // Batch #902</p>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white/50 backdrop-blur-md cursor-ew-resize group-hover:w-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Scan size={24} className="text-[#001B1E]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataNode: React.FC<{ label: string, value: string, color: string }> = ({ label, value, color }) => (
  <div>
    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">{label}</p>
    <p className={`text-xl font-mono font-bold ${color}`}>{value}</p>
  </div>
);

export default TruthLayerSlider;
