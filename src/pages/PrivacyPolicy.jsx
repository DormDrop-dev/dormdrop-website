import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '80vh' }}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Privacy Policy</h1>
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '20px' }}>Last updated: November 20, 2025</p>
                    <p style={{ marginBottom: '20px' }}>
                        At DormDrop, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We collect information you provide directly to us, such as when you create an account, place an order, or communicate with us. This may include your name, email address, phone number, and payment information.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We use your information to provide, maintain, and improve our services, process transactions, and communicate with you.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>3. Sharing of Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        We do not share your personal information with third parties except as described in this policy or with your consent.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>4. Contact Us</h2>
                    <p style={{ marginBottom: '20px' }}>
                        If you have any questions about this Privacy Policy, please contact us at support@dormdrop.us.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
