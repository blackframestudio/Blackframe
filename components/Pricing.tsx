
import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const tiers = [
  {
    name: "Starter",
    price: "$299",
    features: [
      "2 Full Episodes / Mo",
      "4 Short-form Clips",
      "Standard Color Grade",
      "72hr Turnaround",
      "1 Revision Round"
    ]
  },
  {
    name: "Growth",
    price: "$499",
    features: [
      "4 Full Episodes / Mo",
      "12 Short-form Clips",
      "Premium Color Grade",
      "48hr Turnaround",
      "2 Revision Rounds",
      "Custom Graphic Overlay"
    ]
  },
  {
    name: "Pro",
    price: "$699",
    features: [
      "8 Full Episodes / Mo",
      "30 Short-form Clips",
      "Cinematic Polish",
      "Priority 24hr Delivery",
      "Unlimited Revisions",
      "Dedicated Editor Slack"
    ]
  }
];

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <section id="pricing" className="py-32 bg-brandBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 italic">Investment</h2>
          <p className="text-textMuted max-w-xl mx-auto font-light">
            Fixed monthly pricing. No hidden fees. No freelancer flakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className="p-10 border border-white/5 bg-brandSoftBlack relative flex flex-col hover:border-brandGold/30 transition-all duration-500 gold-glow"
            >
              <h3 className="font-serif text-2xl italic mb-4">{tier.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-brandGold">{tier.price}</span>
                <span className="text-textMuted ml-2 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="text-sm text-textMuted flex items-center">
                    <span className="w-1.5 h-1.5 bg-brandGold/40 rounded-full mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onCtaClick}
                className="w-full py-4 text-xs font-bold uppercase tracking-widest transition-all border border-brandGold/30 text-brandGold hover:bg-brandGold hover:text-brandBlack"
              >
                Secure Slot
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
