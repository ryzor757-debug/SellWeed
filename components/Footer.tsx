
import React from 'react';
import { Anchor, Shield, Link, Database, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Security Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 pt-12">
          <div className="glass p-6 rounded-3xl flex items-center gap-4 border-slate-100 group hover:border-[#52B788]/30 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#52B788]/10 flex items-center justify-center text-[#52B788]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm">NID Verified</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">National Identity Secure</p>
            </div>
          </div>
          <div className="glass p-6 rounded-3xl flex items-center gap-4 border-slate-100 group hover:border-blue-500/30 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
              <Link className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm">Blockchain Traceable</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Immutable Ledger Audit</p>
            </div>
          </div>
          <div className="glass p-6 rounded-3xl flex items-center gap-4 border-slate-100 group hover:border-emerald-500/30 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-sm">National Data Center</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Sovereign Data Hosting</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 border-t border-slate-100 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Anchor className="text-[#52B788] w-6 h-6" />
              <span className="font-bold text-xl tracking-tighter text-slate-900 uppercase">BLUEHARVEST</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-[#52B788] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-[#52B788] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-[#52B788] transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Ecosystem</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Digital Ledger</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Carbon Credit Market</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Seaweed Logistics</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Oracle Network</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Resources</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">ESG Taxonomy</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Developer Docs</a></li>
              <li><a href="#" className="hover:text-[#52B788] transition-colors">Media Assets</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2 text-slate-900 font-medium"><Mail className="w-4 h-4 text-[#52B788]" /> hello@blueharvest.bd</li>
              <li className="mt-4 text-[10px] uppercase tracking-widest font-bold text-slate-300">Dhaka Headquarters</li>
              <li className="text-xs">Gulshan 2, Dhaka 1212, BD</li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          <p>© 2025 PROJECT BLUEHARVEST. DIGITAL SOVEREIGNTY FOR THE BENGAL BASIN.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Data Sovereignty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
