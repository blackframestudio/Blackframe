
import React, { useState } from 'react';
import Modal, { ClientHQContent, BrandBookContent, LegalContent } from './IntelligenceModals.tsx';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'hq' | 'brand' | 'legal' | null>(null);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="bg-brandBlack pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-5 mb-8 cursor-pointer group" onClick={scrollToTop}>
                <div className="w-12 h-16 border border-brandGold/30 flex items-center justify-center bg-brandSoftBlack/40 p-2 group-hover:border-brandGold transition-colors">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-brandGold opacity-80">
                    <path fill="currentColor" d="M20,55 L45,45 L75,30 L85,45 L65,55 L55,75 L45,85 L48,65 L20,55 Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl italic text-brandGold leading-none">Black Frame</span>
                  <span className="text-[9px] tracking-[0.5em] uppercase text-textMuted font-bold">Studio</span>
                </div>
              </div>
              <p className="text-textMuted max-w-sm font-light leading-relaxed text-sm">
                Premium podcast post-production for elite founders and creators. We convert conversations into high-retention cinematic assets.
              </p>
            </div>
            
            <div>
              <h4 className="text-brandGold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Studio</h4>
              <ul className="space-y-4 text-sm text-textMuted font-light">
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brandGold transition-colors cursor-pointer">Services</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-brandGold transition-colors cursor-pointer">Portfolio</a></li>
                <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-brandGold transition-colors cursor-pointer">Investment</a></li>
                <li><a href="#onboarding" onClick={(e) => scrollToSection(e, 'onboarding')} className="hover:text-brandGold transition-colors cursor-pointer">Onboarding</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brandGold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Intelligence</h4>
              <ul className="space-y-4 text-sm text-textMuted font-light">
                <li><button onClick={() => setActiveModal('hq')} className="hover:text-brandGold transition-colors">Client HQ</button></li>
                <li><button onClick={() => setActiveModal('brand')} className="hover:text-brandGold transition-colors">Brand Book</button></li>
                <li><button onClick={() => setActiveModal('legal')} className="hover:text-brandGold transition-colors">Legal</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] text-textMuted/60 uppercase tracking-[0.3em] font-medium">
              © 2024 Black Frame Studio. Collective Excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brandGold transition-all">
                <span className="sr-only">X</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brandGold transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brandGold transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brandGold transition-all">
                <span className="sr-only">YouTube</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-brandGold transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Modal isOpen={activeModal === 'hq'} onClose={() => setActiveModal(null)} title="Client HQ">
        <ClientHQContent />
      </Modal>
      <Modal isOpen={activeModal === 'brand'} onClose={() => setActiveModal(null)} title="Brand Book">
        <BrandBookContent />
      </Modal>
      <Modal isOpen={activeModal === 'legal'} onClose={() => setActiveModal(null)} title="Legal">
        <LegalContent />
      </Modal>
    </>
  );
};

export default Footer;
