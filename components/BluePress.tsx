
import React, { useState } from 'react';
import { Newspaper, Download, Share2, ArrowRight, ExternalLink, Calendar, Info, FileText, Camera, PlayCircle, MessageSquare, User, Send, X, Clock } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  date: string;
  text: string;
  role?: string;
}

interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  img: string;
}

const BluePress: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<PressRelease | null>(null);
  const [comments, setComments] = useState<Record<string, Comment[]>>({
    "1": [
      { id: "c1", author: "Dr. Selim Reza", date: "2 hours ago", text: "This partnership is a game-changer for the Bay of Bengal. Scientific oversight ensures the sustainability of our benthic ecosystems.", role: "Marine Biologist" },
      { id: "c2", author: "Hanna Müller", date: "5 hours ago", text: "As a global buyer, this transparency in governance is exactly what we need to see before committing to long-term contracts.", role: "Global Sourcing Lead" }
    ]
  });
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const pressReleases: PressRelease[] = [
    {
      id: "1",
      title: "BlueHarvest Secures Strategic Partnership with Dept. of Fisheries",
      date: "March 15, 2025",
      category: "Partnership",
      excerpt: "A landmark agreement to scale seaweed mariculture across 1,200km of the Bengal coastline.",
      content: "Dhaka, Bangladesh — Project BlueHarvest is proud to announce a historic Memorandum of Understanding (MoU) with the Department of Fisheries (DoF). This partnership establishes a framework for the sustainable expansion of seaweed farming across the nation's exclusive economic zone. The collaboration focuses on three key pillars: regulatory alignment for deep-sea 'Blue Gigs', community training programs, and the establishment of a national certification standard for marine biomass exports. This move is expected to unlock significant economic potential for coastal districts while ensuring the protection of marine biodiversity.",
      img: "https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "The Benthic Ledger: Verifying 10,000 Tons of Blue Carbon",
      date: "February 28, 2025",
      category: "Sustainability",
      excerpt: "First successful deployment of Polygon-minted carbon credits in the South Asian market.",
      content: "Project BlueHarvest has achieved a major milestone in environmental finance with the verification of 10,000 metric tons of CO2 sequestered through its coastal seaweed clusters. Using proprietary benthic sensor technology, the platform provided real-time data to verify the absorption rates, which were then minted as high-fidelity carbon credits on the Polygon blockchain. This marks the first time such an asset has been created and verified entirely within the Bangladesh delta, providing a scalable model for the Global South.",
      img: "https://images.unsplash.com/photo-1544333323-537f3af44209?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "How Project BlueHarvest is Reversing Rural Brain-Drain",
      date: "January 14, 2025",
      category: "Social Impact",
      excerpt: "Empowering 5,000+ coastal gig-workers with high-fidelity digital livelihoods.",
      content: "The trend of youth migration from coastal villages to Dhaka's urban slums is showing the first signs of reversal. Project BlueHarvest's 'Blue Gigger' protocol provides competitive, digital-first livelihoods that allow young Bangladeshis to stay in their ancestral homes. By providing training through the Blue Academy and facilitating bankable credit scores, we are not just providing jobs—we are providing a future. Over 5,000 workers have already joined the platform, reporting an average income increase of 400% compared to traditional artisanal fishing.",
      img: "https://images.unsplash.com/photo-1518005020250-68594f21cb37?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "The Future of Packaging: Seaweed-Based Bioplastics are Here",
      date: "December 05, 2024",
      category: "Innovation",
      excerpt: "BlueHarvest pilots export of biotech-grade biomass to European material labs.",
      content: "Seaweed from the Cox's Bazar cluster is finding its way into the laboratories of Europe's most innovative material science startups. Project BlueHarvest recently completed its first export of high-purity biomass intended for bioplastic research. This pilot proves that Bangladeshi seaweed meets the rigorous quality standards of the pharmaceutical and biotech industries. As the world shifts away from petroleum-based plastics, the Bay of Bengal stands ready to become a primary supplier of the raw materials for a sustainable future.",
      img: "https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const handleAddComment = (articleId: string) => {
    if (!newComment.trim() || !userName.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: userName,
      date: "Just now",
      text: newComment,
      role: "Community Member"
    };

    setComments(prev => ({
      ...prev,
      [articleId]: [...(prev[articleId] || []), comment]
    }));
    setNewComment("");
  };

  const fastFacts = [
    { label: "CO2 Absorption", value: "50kg", sub: "Per Standard Raft / Mo" },
    { label: "Worker Premium", value: "+400%", sub: "Above Local Mean Income" },
    { label: "Data Integrity", value: "100%", sub: "On-Chain Verification" },
    { label: "Species Tracked", value: "12", sub: "Native Bengal Varieties" }
  ];

  return (
    <div className="bg-[#001B1E] min-h-screen text-white font-sans overflow-hidden selection:bg-[#C2B280] selection:text-black">
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#004B50]/10 blur-[200px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.6em] mb-8 animate-in fade-in duration-700">
            <Newspaper className="w-3 h-3" />
            Official Press & Media Hub
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            The Delta <br />
            <span className="text-gradient">Newsroom.</span>
          </h1>
          <p className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-12">
            Resources for journalists, researchers, and global partners. Access verified data, high-fidelity brand assets, and the latest from the blue frontier.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#C2B280] text-[#001B1E] px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center gap-3">
              <Download className="w-4 h-4" />
              Download Media Kit
            </button>
            <button className="glass border-white/10 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-3">
              <Share2 className="w-4 h-4" />
              Connect with Press Office
            </button>
          </div>
        </div>
      </section>

      {/* Fast Facts for Journalists */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Quick Reference</p>
              <h2 className="text-4xl font-black tracking-tight text-white">Fast Facts.</h2>
            </div>
            <Info className="w-8 h-8 text-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fastFacts.map((fact, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border-white/5 bg-gradient-to-br from-white/5 to-transparent text-center group hover:bg-white/5 transition-all">
                <p className="text-[10px] font-black text-[#C2B280] uppercase tracking-[0.2em] mb-4">{fact.label}</p>
                <h3 className="text-5xl font-black text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform">{fact.value}</h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{fact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-32 px-6 relative z-10 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div>
              <p className="text-[#004B50] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Timeline of Impact</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">Latest <br />Features.</h2>
            </div>
            <button className="flex items-center gap-3 text-slate-400 font-black text-xs uppercase tracking-widest hover:text-slate-900 transition-colors group">
              View Press Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pressReleases.map((release, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setSelectedArticle(release)}>
                <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                  <img src={release.img} alt={release.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-[#004B50] px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                      {release.category}
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Calendar className="w-3 h-3" />
                    {release.date}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-4 group-hover:text-[#004B50] transition-colors">{release.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-8">
                    {release.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-black text-[#004B50] uppercase tracking-[0.2em] group/link">
                      Read Full Release <ExternalLink className="w-3 h-3 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2 text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                      <MessageSquare className="w-3 h-3" />
                      {(comments[release.id]?.length || 0)} Comments
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(194,178,128,0.2)]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-8 right-8 z-[160] w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#C2B280] transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Article Content Area */}
            <div className="flex-1 overflow-y-auto p-12 md:p-20 no-scrollbar">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 text-[#004B50] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                  <Clock className="w-3 h-3" />
                  4 Min Read // {selectedArticle.category}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">{selectedArticle.title}</h2>
                <div className="flex items-center gap-6 mb-12 py-6 border-y border-slate-100">
                   <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#004B50] flex items-center justify-center text-white">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Press Officer</p>
                        <p className="text-xs font-bold text-slate-900">Arif Choudhury</p>
                      </div>
                   </div>
                   <div className="w-px h-8 bg-slate-100"></div>
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-bold text-slate-400">{selectedArticle.date}</span>
                   </div>
                </div>
                <div className="aspect-video rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
                  <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-600 text-xl leading-relaxed font-medium mb-8">
                  {selectedArticle.content}
                </p>
                <div className="space-y-6 text-slate-500 leading-relaxed">
                  <p>As Project BlueHarvest continues to integrate advanced Machine Learning into its benthic monitoring systems, the accuracy of our environmental impact reports has reached an industry-leading 98.4%. This enables us to provide unprecedented levels of assurance to our institutional partners and the global scientific community.</p>
                  <p>Our commitment remains steadfast: to use the highest fidelity data to protect the Bengal coastline and empower the workers who serve as its primary stewards. We invite further dialogue and collaboration as we build this national sovereign blue infrastructure.</p>
                </div>
              </div>
            </div>

            {/* Comment Sidebar */}
            <div className="w-full md:w-[400px] bg-slate-50 border-l border-slate-100 flex flex-col">
               <div className="p-10 border-b border-slate-100 bg-white">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#004B50]" />
                    Community Talk
                  </h3>
               </div>
               
               {/* Comments List */}
               <div className="flex-grow overflow-y-auto p-10 space-y-8 no-scrollbar">
                  {(comments[selectedArticle.id] || []).length === 0 ? (
                    <div className="text-center py-20 opacity-20">
                      <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                      <p className="text-[10px] font-black uppercase tracking-widest">No discussions yet</p>
                    </div>
                  ) : (
                    (comments[selectedArticle.id] || []).map((comment) => (
                      <div key={comment.id} className="animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-black text-slate-900">{comment.author}</p>
                          <span className="text-[9px] font-bold text-slate-400 uppercase">{comment.date}</span>
                        </div>
                        <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
                          <p className="text-slate-500 text-sm leading-relaxed">{comment.text}</p>
                          {comment.role && (
                             <p className="mt-3 text-[8px] font-black text-[#004B50] uppercase tracking-widest">{comment.role}</p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
               </div>

               {/* New Comment Input */}
               <div className="p-8 bg-white border-t border-slate-100 space-y-4">
                  <div className="space-y-3">
                    <input 
                      type="text"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-6 text-sm font-bold text-slate-900 outline-none focus:ring-4 focus:ring-[#004B50]/10 transition-all"
                    />
                    <div className="relative">
                      <textarea 
                        placeholder="Add to the discussion..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] py-4 px-6 pr-14 text-sm font-medium text-slate-600 outline-none focus:ring-4 focus:ring-[#004B50]/10 transition-all resize-none h-24"
                      ></textarea>
                      <button 
                        onClick={() => handleAddComment(selectedArticle.id)}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#004B50] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-xl"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-[8px] text-center font-bold text-slate-300 uppercase tracking-widest">Community guidelines apply</p>
               </div>
            </div>

          </div>
        </div>
      )}

      {/* Media Kit Detail Section */}
      <section className="py-40 px-6 relative z-10 bg-[#001B1E] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 space-y-12">
              <div>
                <p className="text-[#C2B280] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Ready Assets</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">The Media Kit.</h2>
                <div className="h-px w-24 bg-[#C2B280]/30 mt-8 mb-12"></div>
                <p className="text-white/40 text-lg leading-relaxed">
                  We maintain a comprehensive library of brand assets, high-resolution photography of the Bengal coastline, and technical diagrams for use in editorial coverage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <KitButton icon={<Camera className="w-5 h-5" />} label="Hi-Res Images" count="45 Files" />
                <KitButton icon={<FileText className="w-5 h-5" />} label="Technical Specs" count="12 PDF" />
                <KitButton icon={<PlayCircle className="w-5 h-5" />} label="B-Roll Video" count="4K Assets" />
                <KitButton icon={<Share2 className="w-5 h-5" />} label="Brand Identity" count="Full Pack" />
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="glass p-4 rounded-[4rem] border-white/10 shadow-2xl relative overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=1200&auto=format&fit=crop" className="w-full rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Coastline" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001B1E] via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <p className="text-white font-serif italic text-xl leading-relaxed">
                     "Transparent, accurate, and timely information for a rising delta nation."
                   </p>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Call to Action */}
      <section className="py-24 px-6 text-center bg-black relative">
        <div className="max-w-2xl mx-auto space-y-8">
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Press Inquiries Only</p>
           <h3 className="text-4xl font-black text-white tracking-tighter">Media Relations.</h3>
           <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto">
             For interview requests with our scientific team or data verification desk, please reach out to our dedicated press office.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="mailto:press@blueharvest.bd" className="bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C2B280] transition-all">
               Email Press Desk
             </a>
             <button className="glass border-white/10 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
               Schedule Briefing
             </button>
           </div>
        </div>
      </section>

      <style>{`
        .text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #C2B280 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const KitButton: React.FC<{ icon: React.ReactNode, label: string, count: string }> = ({ icon, label, count }) => (
  <div className="flex items-center gap-4 p-6 glass rounded-3xl border-white/5 hover:bg-white/5 transition-all cursor-pointer group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C2B280] group-hover:bg-[#C2B280] group-hover:text-[#001B1E] transition-all">
      {icon}
    </div>
    <div>
      <p className="text-white font-bold text-sm mb-0.5">{label}</p>
      <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">{count}</p>
    </div>
  </div>
);

export default BluePress;
