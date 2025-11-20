import React, { useState } from 'react';

const PricingCalculator = () => {
    const [mealPrice, setMealPrice] = useState(15);
    const [tip, setTip] = useState(2);

    const deliveryFee = (mealPrice * 0.15) + 3 + parseFloat(tip);

    return (
        <div className="mobile-card-padding" style={{
            marginTop: '40px',
            background: 'var(--surface-color)',
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            maxWidth: '500px',
            margin: '40px auto 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>Fee Calculator</h3>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    Meal Price ($)
                </label>
                <input
                    type="number"
                    value={mealPrice}
                    onChange={(e) => setMealPrice(Math.max(0, parseFloat(e.target.value) || 0))}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--surface-color)',
                        color: 'white',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    Tip ($)
                </label>
                <input
                    type="number"
                    value={tip}
                    onChange={(e) => setTip(Math.max(0, parseFloat(e.target.value) || 0))}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--surface-color)',
                        color: 'white',
                        fontSize: '1rem'
                    }}
                />
            </div>

            <div style={{
                background: 'var(--surface-color)',
                padding: '20px',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>Estimated Delivery Fee</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    ${deliveryFee.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default PricingCalculator;
