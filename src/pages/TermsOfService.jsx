import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="app">
            <Header />
            <main style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '80vh' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Terms of Service</h1>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        <p style={{ marginBottom: '20px' }}>Last updated: November 20, 2025</p>
                        <p style={{ marginBottom: '20px' }}>
                            Please read these Terms of Service carefully before using the DormDrop website and mobile application.
                        </p>
                        <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                        <p style={{ marginBottom: '20px' }}>
                            By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                        </p>
                        <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>2. Use of Service</h2>
                        <p style={{ marginBottom: '20px' }}>
                            DormDrop is a platform that connects students with delivery runners. We are not a restaurant and do not prepare food.
                        </p>
                        <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>3. User Accounts</h2>
                        <p style={{ marginBottom: '20px' }}>
                            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.
                        </p>
                        <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>4. Termination</h2>
                        <p style={{ marginBottom: '20px' }}>
                            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
