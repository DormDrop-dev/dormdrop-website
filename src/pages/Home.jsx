import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <HowItWorks />
            <Pricing />
            <FAQ />
        </div>
    );
};

export default Home;
