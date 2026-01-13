
import React, { useState, useRef } from 'react';
import { ShieldCheck, Cpu, Database, Fingerprint, ExternalLink, Hexagon } from 'lucide-react';

const ImmutableLedger: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="py-32 px-6 bg-[#001B1E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-[#C2B280] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Blockchain Export Protocol</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
            The Immutable Ledger.
          </h3>
          <p className="text-white/40 text-lg font-light">
            Every gram of BlueHarvest seaweed is minted as a <span className="text-white font-medium">metadata-rich NFT</span> on the Polygon network for global export trust.
          </p>
        </div>

        {/* 3D Certificate Container */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            perspective: '1000px',
          }}
          className="w-full max-w-2xl group"
        >
          <div 
            style={{ 
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="relative w-full aspect-[1.6/1] bg-black/40 rounded-[2rem] p-[2px] holographic-border shadow-2xl overflow-hidden"
          >
            {/* Holographic Layer Overlay */}
            <div className="absolute inset-0 holographic-shimmer opacity-30 pointer-events-none"></div>

            <div className="relative w-full h-full glass-dark rounded-[calc(2rem-2px)] p-10 flex flex-col justify-between overflow-hidden">
              {/* Certificate Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Hexagon className="w-6 h-6 text-[#C2B280]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-tight text-xl uppercase italic">Batch Authenticity</h4>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Digital Export Asset</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-cyan-400 font-mono font-bold px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                    POLYGON MINTED
                  </span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-8 space-y-4">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <DataField label="Batch ID" value="#SEAW-2025-04" />
                    <DataField label="Harvest Weight" value="450.2 kg" />
                    <DataField label="Carbon Sequestered" value="5.8t CO2e" />
                    <DataField label="Purity Grade" value="A++ Surgical" />
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-white/5 flex items-center justify-center">
                         <img src="https://i.pravatar.cc/100?u=Anika" alt="Oracle" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Scientific Oracle Signature</p>
                        <p className="text-sm font-serif italic text-white/80">Anika Rahman — CU Marine Bio #2491</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="col-span-4 flex flex-col items-end gap-4">
                  <div className="w-32 h-32 p-3 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden group/qr">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover/qr:opacity-100 transition-opacity"></div>
                    {/* Simulated SVG QR */}
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-[#001B1E] relative z-10">
                      <rect x="0" y="0" width="30" height="30" />
                      <rect x="0" y="70" width="30" height="30" />
                      <rect x="70" y="0" width="30" height="30" />
                      <rect x="10" y="10" width="10" height="10" fill="white" />
                      <rect x="10" y="80" width="10" height="10" fill="white" />
                      <rect x="80" y="10" width="10" height="10" fill="white" />
                      <rect x="40" y="40" width="20" height="20" />
                      <rect x="50" y="10" width="10" height="10" />
                      <rect x="10" y="50" width="10" height="10" />
                      <rect x="80" y="50" width="10" height="20" />
                      <rect x="50" y="80" width="20" height="10" />
                    </svg>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-[#C2B280] transition-colors uppercase tracking-[0.2em]">
                    View on Explorer <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-4">
                <div className="flex items-center gap-6">
                  <MetaItem icon={<Fingerprint className="w-3 h-3" />} label="SHA-256" value="7e8f...2a1" />
                  <MetaItem icon={<Database className="w-3 h-3" />} label="Node" value="C-21" />
                  <MetaItem icon={<Cpu className="w-3 h-3" />} label="Gas" value="0.002 MATIC" />
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
                  <span className="text-[10px] font-black text-[#2E8B57] uppercase tracking-widest">Verified Assets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Note */}
        <div className="mt-16 text-center">
           <p className="text-[10px] font-mono text-white/20 tracking-widest leading-relaxed uppercase">
             Public Mint Address: 0x82f1...92a1 — Project BlueHarvest Core Protocol v1.4.2
           </p>
        </div>
      </div>

      <style>{`
        .holographic-border {
          background: linear-gradient(
            45deg,
            #00f2ff 0%,
            #7000ff 25%,
            #ff00ea 50%,
            #C2B280 75%,
            #00f2ff 100%
          );
          background-size: 300% 300%;
          animation: holographic-shift 10s linear infinite;
        }

        @keyframes holographic-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .holographic-shimmer {
          background: linear-gradient(
            105deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 80%
          );
          background-size: 200% 200%;
          animation: shimmer 6s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .glass-dark {
          background: rgba(0, 27, 30, 0.95);
          backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  );
};

const DataField: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div>
    <h5 className="text-[9px] text-white/30 uppercase tracking-widest mb-1 font-bold">{label}</h5>
    <p className="text-white font-mono text-sm tracking-tight">{value}</p>
  </div>
);

const MetaItem: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-2 text-white/40">
    {icon}
    <div className="flex flex-col">
       <span className="text-[8px] font-bold uppercase tracking-widest leading-none mb-0.5">{label}</span>
       <span className="text-[10px] font-mono font-bold text-white/60 leading-none">{value}</span>
    </div>
  </div>
);

export default ImmutableLedger;
