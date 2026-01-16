
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Upload Raw Audio/Video",
    desc: "Use our private Frame.io or Dropbox link to drop your raw files. No messy email threads."
  },
  {
    num: "02",
    title: "Expert Crafting",
    desc: "Our team of 3 editors goes to work. We sync, cut, clean, and grade to studio standards."
  },
  {
    num: "03",
    title: "Review & Refine",
    desc: "Review the full episode and clips. Request revisions with pixel-perfect timestamping."
  },
  {
    num: "04",
    title: "Platform Dominance",
    desc: "Download your assets and publish. We provide the captions, thumbnails, and descriptions."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-brandSoftBlack">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl italic mb-20 text-center">Seamless Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <span className="text-6xl font-serif text-brandGold/10 absolute -top-10 -left-4 group-hover:text-brandGold/20 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-brandGold font-medium mb-4">{step.title}</h3>
                <p className="text-textMuted text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
