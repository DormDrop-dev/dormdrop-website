import React from 'react';

const StepCard = ({ number, title, description }) => (
    <div style={{
        background: 'var(--surface-color)',
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        flex: 1,
        transition: 'transform 0.2s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(82, 35, 152, 0.2)';
            e.currentTarget.style.borderColor = 'var(--primary-color)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--border-color)';
        }}
    >
        <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--primary-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: 'white'
        }}>
            {number}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section id="how-it-works" style={{ padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>How It Works</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Get your food in 3 simple steps</p>
                </div>

                <div className="steps-grid" style={{
                    display: 'flex',
                    gap: '32px',
                    flexWrap: 'wrap'
                }}>
                    <StepCard
                        number="1"
                        title="Place an Order"
                        description="Select a restaurant, choose your dorm building, and add any special requests in the DormDrop app."
                    />
                    <StepCard
                        number="2"
                        title="Get Matched"
                        description="A deliverer accepts your order, confirms the details, and picks it up for you."
                    />
                    <StepCard
                        number="3"
                        title="Track & Receive"
                        description="Follow live updates as your food makes its way to your dorm."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
