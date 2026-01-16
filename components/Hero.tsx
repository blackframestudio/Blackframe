
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brandBlack via-transparent to-brandBlack opacity-95"></div>
        <img 
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-10" 
          alt="Studio environment"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* LOGO AREA */}
        <div className="mb-14 inline-block relative animate-fade-in">
          <div className="w-40 h-52 border-[1.5px] border-brandGold/40 p-6 flex items-center justify-center bg-brandBlack relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
             <div className="absolute inset-0 border border-brandGold/10 m-[2px]"></div>
             <svg viewBox="0 0 100 100" className="w-full h-full text-brandGold drop-shadow-[0_10px_20px_rgba(212,175,55,0.4)]">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#B8962E" />
                  </linearGradient>
                </defs>
                <path fill="url(#goldGrad)" d="M20,55 L45,45 L75,30 L85,45 L65,55 L55,75 L45,85 L48,65 L20,55 Z" />
                <path fill="rgba(0,0,0,0.1)" d="M45,45 L75,30 L65,55 Z" />
                <path fill="rgba(0,0,0,0.2)" d="M48,65 L45,85 L55,75 Z" />
             </svg>
          </div>
          <div className="mt-8">
            <h2 className="font-serif text-5xl md:text-6xl text-brandGold italic tracking-tight font-medium drop-shadow-md">
              Black Frame
            </h2>
          </div>
        </div>

        <h2 className="text-brandGold font-bold tracking-[0.6em] uppercase text-[9px] mb-8 block opacity-70">
          Cinematic Post-Production
        </h2>
        
        <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight italic text-textLight">
          The Gold Standard for <br />
          <span className="gold-gradient not-italic font-bold">Podcast Logistics.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a 
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-16 py-5 border border-brandGold/30 text-textLight font-bold text-xs tracking-[0.3em] uppercase hover:border-brandGold hover:bg-brandGold/5 transition-all duration-500"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
