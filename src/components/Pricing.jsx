import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '100px 0', background: 'var(--surface-color)' }}>
            <div className="container">
                <div className="pricing-grid">
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Simple Pricing</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                            We keep it affordable for students. No hidden service fees, just a simple delivery fee.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary-color)' }}>✓</span> No subscription required
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary-color)' }}>✓</span> Pay directly in the app
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary-color)' }}>✓</span> Support fellow students
                            </li>
                        </ul>
                    </div>

                    <div style={{
                        flex: 1,
                        background: 'var(--bg-color)',
                        padding: '40px',
                        borderRadius: '24px',
                        border: '1px solid var(--border-color)',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Delivery Fee Formula</div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            background: 'var(--surface-color)',
                            padding: '24px',
                            borderRadius: '16px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Meal Price</span>
                                <span style={{ fontWeight: 'bold' }}>15%</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Base Fee</span>
                                <span style={{ fontWeight: 'bold' }}>$3.00</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: 'var(--text-secondary)' }}>Tip</span>
                                <span style={{ fontWeight: 'bold' }}>Your Choice</span>
                            </div>
                        </div>

                        <div style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            background: 'rgba(82, 35, 152, 0.1)',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid rgba(82, 35, 152, 0.2)'
                        }}>
                            <span style={{ marginRight: '6px' }}>ℹ️</span>
                            Meal price is paid for separately outside of DormDrop
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
