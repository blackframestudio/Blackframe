
import React from 'react';

const OnboardingSection: React.FC = () => {
  const handleApply = () => {
    // In a real scenario, this would open a Calendly or Typeform.
    // For this build, we will scroll to the top to start the journey or open the systems/contact flow.
    // Let's trigger a mailto as a professional default action or scroll to top.
    window.location.href = "mailto:hello@blackframestudio.com?subject=Complimentary Onboarding Request";
  };

  return (
    <section id="onboarding" className="py-32 bg-brandGold relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-brandBlack font-serif text-4xl md:text-6xl italic mb-8">
          The Complimentary <br /> Onboarding Experience.
        </h2>
        <p className="text-brandBlack/80 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
          We don't do "free trials." We provide a full-scale onboarding experience to see if we're a cultural and creative fit. One episode, five clips, and a strategy session—zero cost.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Full Edit", val: "1 Episode" },
            { label: "Short Clips", val: "5 Viral-Ready" },
            { label: "Turnaround", val: "48 Hours" }
          ].map((item, i) => (
            <div key={i} className="bg-brandBlack/5 border border-brandBlack/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brandBlack/50 mb-1">{item.label}</p>
              <p className="text-xl font-serif text-brandBlack">{item.val}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={handleApply}
          className="px-12 py-6 bg-brandBlack text-brandGold font-bold tracking-[0.2em] uppercase text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          Apply For Onboarding (3 Slots Left)
        </button>
      </div>
    </section>
  );
};

export default OnboardingSection;
