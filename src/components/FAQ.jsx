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
            answer: "You pay for your food inside the GCU Mobile Ordering app like normal. Then you upload the screen recording into DormDrop so we can deliver it."
        },
        {
            question: "What is the service fee?",
            answer: "DormDrop charges a $3 flat delivery fee + 15% of your order total, plus whatever tip you choose. You’re only charged once a deliverer accepts your order."
        },
        {
            question: "Can I order from any restaurant?",
            answer: "Yes—any restaurant available in GCU Mobile Ordering works with DormDrop, since delivery is based on your existing mobile order."
        },
        {
            question: "How long does delivery take?",
            answer: "Most deliveries take 15–25 minutes, depending on restaurant wait times. Deliverers must meet food-safety timers (1–2 hours max depending on temperature)."
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
