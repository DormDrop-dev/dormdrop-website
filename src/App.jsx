import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PricingCalculator from './components/PricingCalculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <PricingCalculator />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
