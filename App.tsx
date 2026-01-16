import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import OnboardingSection from './components/OnboardingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const handleCtaClick = () => {
    const element = document.getElementById('onboarding');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brandGold selection:text-brandBlack bg-brandBlack text-textLight">
      <Navbar />
      <main>
        <Hero onCtaClick={handleCtaClick} />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Pricing onCtaClick={handleCtaClick} />
        <OnboardingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
