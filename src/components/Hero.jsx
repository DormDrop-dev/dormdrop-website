import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '160px 0 80px',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(82, 35, 152, 0.2) 0%, rgba(10, 10, 10, 0) 70%)',
                zIndex: -1
            }} />

            <div className="container hero-grid" style={{
                display: 'grid',
                gap: '60px',
                alignItems: 'center'
            }}>
                <div className="animate-fade-in">
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        background: 'linear-gradient(to right, #fff, #a1a1aa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Food from campus,<br />
                        delivered to your dorm.
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        maxWidth: '500px'
                    }}>
                        Get food from your favorite on-campus restaurants delivered straight to your door. Created for GCU students.
                    </p>

                    <div className="mobile-center" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="https://apps.apple.com/us/app/dormdrop-food-delivery/id6749652518" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="Download on the App Store"
                                style={{ height: '50px' }}
                            />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.mycompany.dormdrop" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                style={{ height: '50px' }}
                            />
                        </a>
                    </div>
                </div>

                <div style={{ position: 'relative' }} className="animate-fade-in">
                    <style>
                        {`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
              }
            `}
                    </style>
                    <div style={{ animation: 'float 6s ease-in-out infinite' }}>
                        <img
                            src="https://dormdrop.carrd.co/assets/images/image01.jpg?v=fb0f2a9e"
                            alt="DormDrop App Interface"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                borderRadius: '24px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                border: '1px solid var(--border-color)',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                        {/* Floating Element */}
                        <div className="floating-card" style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-20px',
                            background: 'var(--surface-color)',
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--primary-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}>🚀</div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Fast Delivery</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Straight to your dorm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
