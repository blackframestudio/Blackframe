
import React from 'react';

const serviceList = [
  {
    title: "Full Episode Editing",
    desc: "Seamless pacing, multi-cam switching, and dynamic color grading designed for the premium viewer.",
    icon: "🎬"
  },
  {
    title: "Short-Form Mastery",
    desc: "We extract 3-5 high-impact clips per episode, optimized for TikTok, Reels, and YouTube Shorts.",
    icon: "✨"
  },
  {
    title: "Retentive Captions",
    desc: "Custom-designed kinetic typography that keeps eyes glued to the screen during silent scrolls.",
    icon: "✍️"
  },
  {
    title: "Surgical Audio",
    desc: "Studio-grade cleanup. Removing 'umms', deep breaths, and background noise for a crisp finish.",
    icon: "🎙️"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brandSoftBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 italic">The Studio Standards</h2>
          <div className="h-1 w-20 bg-brandGold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, i) => (
            <div 
              key={i} 
              className="group p-8 border border-white/5 bg-brandBlack hover:border-brandGold/30 transition-all duration-500 gold-glow"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif mb-4 text-brandGold">{service.title}</h3>
              <p className="text-textMuted font-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
