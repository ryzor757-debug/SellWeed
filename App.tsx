import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HumanEngine from './components/HumanEngine';
import TruthEngine from './components/TruthEngine';
import TruthLayerSlider from './components/TruthLayerSlider';
import ValueChainScroll from './components/ValueChainScroll';
import MicroScienceGallery from './components/MicroScienceGallery';
import GlobalReachMap from './components/GlobalReachMap';
import ImmutableLedger from './components/ImmutableLedger';
import BlueCreditScore from './components/BlueCreditScore';
import ImpactScale from './components/ImpactScale';
import BlueAcademy from './components/BlueAcademy';
import BlueFrontierMap from './components/BlueFrontierMap';
import CarbonSink from './components/CarbonSink';
import BentoGrid from './components/BentoGrid';
import FAQ from './components/FAQ';
import GrandFinale from './components/GrandFinale';
import Footer from './components/Footer';
import InvestorDashboard from './components/InvestorDashboard';
import OracleTerminal from './components/OracleTerminal';
import GiggerHub from './components/GiggerHub';
import JourneyOfTruth from './components/JourneyOfTruth';
import BlueVision from './components/BlueVision';
import BlueAcademyPage from './components/BlueAcademyPage';
import BlueImpact from './components/BlueImpact';
import BlueExportHub from './components/BlueExportHub';
import BlueGovernance from './components/BlueGovernance';
import PredictiveHarvest from './components/PredictiveHarvest';
import Traceability3D from './components/Traceability3D';
import BlueHarvestExchange from './components/BlueHarvestExchange';
import BlueHarvestStory from './components/BlueHarvestStory';
import BlueMission from './components/BlueMission';
import BlueAlliance from './components/BlueAlliance';
import BlueSDGs from './components/BlueSDGs';
import BluePress from './components/BluePress';
import BlueDigitalTwin from './components/BlueDigitalTwin';
import BlueRoadmap from './components/BlueRoadmap';
import ParallaxOcean from './components/ParallaxOcean';

export type AppView = 'landing' | 'dashboard' | 'oracle' | 'gigger' | 'journey' | 'vision' | 'academy' | 'impact' | 'export' | 'governance' | 'predictive' | 'traceability' | 'exchange' | 'story' | 'mission' | 'alliance' | 'sdgs' | 'press' | 'twin' | 'roadmap';

const LiquidReveal: React.FC<{ children: React.ReactNode; stagger?: boolean }> = ({ children, stagger = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`${stagger ? "stagger-reveal" : "reveal"} contain-paint`}>{children}</div>;
};

const WaveDivider: React.FC<{ flipped?: boolean; color?: string; className?: string }> = ({ flipped = false, color = "fill-[#F8FAFC]", className = "" }) => (
  <div className={`relative w-full overflow-hidden leading-[0] contain-paint ${className} ${flipped ? 'rotate-180' : ''}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,46.29V0Z" className={color}></path>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ticking = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrollY(currentY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  const darkViews: AppView[] = ['traceability', 'twin', 'exchange'];

  return (
    <div className={`min-h-screen selection:bg-[#52B788] selection:text-white transition-colors duration-700 ${
      darkViews.includes(view) ? 'bg-[#001B1E]' : 'bg-[#F8FAFC]'
    }`}>
      <Navbar setView={setView} currentView={view} />
      
      {view === 'landing' && (
        <main className="relative overflow-x-hidden">
          <ParallaxOcean scrollY={scrollY} mousePos={mousePos} />
          
          <div className="relative z-10 gpu-accelerated">
            <Hero />
            <LiquidReveal><HumanEngine /></LiquidReveal>
            <WaveDivider color="fill-[#F8FAFC]" className="mt-[-1px] z-20" />
            
            <LiquidReveal><TruthLayerSlider /></LiquidReveal>
            
            <LiquidReveal><TruthEngine /></LiquidReveal>
            
            <ValueChainScroll />

            <LiquidReveal><MicroScienceGallery /></LiquidReveal>

            <WaveDivider color="fill-[#F8FAFC]" flipped className="mt-[-1px] z-20" />
            <LiquidReveal><ImmutableLedger /></LiquidReveal>
            <LiquidReveal><BlueCreditScore /></LiquidReveal>
            <LiquidReveal><ImpactScale /></LiquidReveal>
            <LiquidReveal><BlueAcademy /></LiquidReveal>
            <LiquidReveal><BlueFrontierMap /></LiquidReveal>
            <LiquidReveal><CarbonSink /></LiquidReveal>
            <LiquidReveal><BentoGrid /></LiquidReveal>
            
            <LiquidReveal><GlobalReachMap /></LiquidReveal>

            <LiquidReveal><FAQ /></LiquidReveal>
            <LiquidReveal><GrandFinale /></LiquidReveal>
            <Footer />
          </div>
        </main>
      )}

      {view !== 'landing' && (
        <main className="animate-in fade-in duration-500 gpu-accelerated">
           {view === 'dashboard' && <><InvestorDashboard /><Footer /></>}
           {view === 'oracle' && <><OracleTerminal /><Footer /></>}
           {view === 'gigger' && <GiggerHub />}
           {view === 'journey' && <JourneyOfTruth />}
           {view === 'vision' && <><BlueVision /><Footer /></>}
           {view === 'academy' && <><BlueAcademyPage /><Footer /></>}
           {view === 'impact' && <><BlueImpact /><Footer /></>}
           {view === 'export' && <><BlueExportHub /><Footer /></>}
           {view === 'governance' && <><BlueGovernance /><Footer /></>}
           {view === 'predictive' && <><PredictiveHarvest /><Footer /></>}
           {view === 'traceability' && <Traceability3D />}
           {view === 'exchange' && <><BlueHarvestExchange /><Footer /></>}
           {view === 'story' && <><BlueHarvestStory /><Footer /></>}
           {view === 'mission' && <><BlueMission /><Footer /></>}
           {view === 'alliance' && <><BlueAlliance /><Footer /></>}
           {view === 'sdgs' && <><BlueSDGs /><Footer /></>}
           {view === 'press' && <><BluePress /><Footer /></>}
           {view === 'twin' && <><BlueDigitalTwin /><Footer /></>}
           {view === 'roadmap' && <><BlueRoadmap /><Footer /></>}
        </main>
      )}
    </div>
  );
};

export default App;