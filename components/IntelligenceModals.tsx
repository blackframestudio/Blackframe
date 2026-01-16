
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-brandBlack/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-brandSoftBlack border border-brandGold/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h2 className="font-serif text-2xl text-brandGold italic">{title}</h2>
          <button onClick={onClose} className="text-textMuted hover:text-brandGold transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 text-textMuted font-light leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ClientHQContent = () => (
  <div className="space-y-6">
    <p>The <span className="text-brandGold">Black Frame Studio Portal</span> is our proprietary ecosystem for asset management and communication.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4 border border-white/5 bg-brandBlack/40">
        <h4 className="text-brandGold text-[10px] uppercase tracking-widest mb-2 font-bold">Asset Vault</h4>
        <p className="text-xs">Secure, high-speed delivery via Frame.io integration for frame-accurate feedback.</p>
      </div>
      <div className="p-4 border border-white/5 bg-brandBlack/40">
        <h4 className="text-brandGold text-[10px] uppercase tracking-widest mb-2 font-bold">Direct Pipeline</h4>
        <p className="text-xs">24/7 priority access to your dedicated lead editor via our encrypted Slack channels.</p>
      </div>
    </div>
    <p className="text-sm italic border-l-2 border-brandGold/30 pl-4">Note: This portal is currently invitation-only for active retainer clients.</p>
  </div>
);

export const BrandBookContent = () => (
  <div className="space-y-6">
    <p>Our aesthetic identity is defined by <span className="text-brandGold">Matte Luxury</span> and <span className="text-brandGold">Cinematic Precision</span>.</p>
    <div className="space-y-4">
      <div>
        <h4 className="text-brandGold text-xs uppercase tracking-widest mb-2">Typography</h4>
        <p className="text-sm">Headlines: Playfair Display (Serif, Italic for emphasis)<br/>Body: Inter (Sans-serif, Light weights only)</p>
      </div>
      <div>
        <h4 className="text-brandGold text-xs uppercase tracking-widest mb-2">Palette</h4>
        <p className="text-sm">#0B0E11 (Obsidian) | #D4AF37 (24k Gold) | #EDEDED (Silver Smoke)</p>
      </div>
      <div>
        <h4 className="text-brandGold text-xs uppercase tracking-widest mb-2">The "Black Frame" Rule</h4>
        <p className="text-sm">Every video asset must maintain a 15% negative space ratio to ensure focus on the subject while preserving high-end breathing room.</p>
      </div>
    </div>
  </div>
);

export const LegalContent = () => (
  <div className="space-y-6 text-sm">
    <section>
      <h4 className="text-brandGold uppercase tracking-widest mb-2">Service Level Agreement (SLA)</h4>
      <p>Standard turnaround for episodes is 48-72 hours. Revisions are addressed within 24 hours of receipt via the Frame.io feedback engine.</p>
    </section>
    <section>
      <h4 className="text-brandGold uppercase tracking-widest mb-2">Intellectual Property</h4>
      <p>Upon final payment, clients retain full ownership of edited master files. Black Frame Studio reserves the right to use short clips for studio showcase purposes unless otherwise negotiated.</p>
    </section>
    <section>
      <h4 className="text-brandGold uppercase tracking-widest mb-2">Confidentiality</h4>
      <p>All raw footage and non-published creative strategy remain strictly confidential under our standard mutual NDA included in every onboarding package.</p>
    </section>
  </div>
);

export default Modal;
