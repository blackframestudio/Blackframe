
import React from 'react';

const Portfolio: React.FC = () => {
  const samples = [
    // Updated URLs to ensure they are high-quality and active
    "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559131397-f94da358f7ca?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="portfolio" className="py-32 bg-brandBlack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 italic">Visual Proof</h2>
            <p className="text-textMuted font-light">
              Our edits have generated over 50M+ impressions for founders and top-tier content creators. We maintain a private vault for client privacy, but here is a glimpse of our aesthetic.
            </p>
          </div>
          <button className="text-brandGold tracking-widest text-xs uppercase border-b border-brandGold/30 pb-2 hover:border-brandGold transition-all">
            Request Full Vault
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {samples.map((url, i) => (
            <div key={i} className="relative aspect-[9/16] overflow-hidden group border border-white/5 bg-brandSoftBlack">
              <img 
                src={url} 
                alt={`Portfolio sample ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1478737270239-2fccd2c78623?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs tracking-widest uppercase font-bold text-brandGold">Showcase 0{i+1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
