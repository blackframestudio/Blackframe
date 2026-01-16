
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brandBlack/95 backdrop-blur-md border-b border-brandGold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-12 border border-brandGold/30 flex items-center justify-center bg-brandSoftBlack relative overflow-hidden">
               <svg viewBox="0 0 100 100" className="w-8 h-8 text-brandGold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                 <path fill="currentColor" d="M25,55 Q45,45 65,35 L85,40 Q65,50 55,65 L50,80 Q40,65 25,55 Z M50,80 L60,90 L55,65" />
                 <path fill="currentColor" d="M65,35 L80,25 L85,40" opacity="0.6"/>
               </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-brandGold tracking-tight leading-none italic">Black Frame</span>
            <span className="text-[8px] tracking-[0.5em] uppercase text-textMuted font-bold">Studio</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] tracking-[0.25em] uppercase font-bold">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-textLight hover:text-brandGold transition-colors">Services</a>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-textLight hover:text-brandGold transition-colors">Portfolio</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-textLight hover:text-brandGold transition-colors">Investment</a>
          <a 
            href="#onboarding" 
            onClick={(e) => scrollToSection(e, 'onboarding')}
            className="px-6 py-2 border border-brandGold text-brandGold hover:bg-brandGold hover:text-brandBlack transition-all duration-300"
          >
            Claim Slot
          </a>
        </div>

        <button className="md:hidden text-brandGold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
