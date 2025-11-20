import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
