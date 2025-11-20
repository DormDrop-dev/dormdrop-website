import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '16px'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '16px 0',
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                }}
            >
                {question}
                <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--primary-color)'
                }}>
                    ▼
                </span>
            </button>
            <div style={{
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
            }}>
                <p style={{ paddingBottom: '24px' }}>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How do I pay for the meal?",
            answer: "You pay for the meal separately through the restaurant's own payment system or meal plan. DormDrop only charges for the delivery service."
        },
        {
            question: "What is the service fee?",
            answer: "Our fee is calculated as 15% of the meal price + a $3.00 base fee. This covers the cost of coordinating and delivering your order."
        },
        {
            question: "Can I order from any restaurant?",
            answer: "We currently support select on-campus restaurants. Check the app for the full list of available locations."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery times vary based on demand and restaurant wait times, but we aim to get your food to you as quickly as possible."
        }
    ];

    return (
        <section id="faq" style={{ padding: '100px 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
