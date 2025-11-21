import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <main style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '80vh' }}>
            <div className="container">
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--primary-color)',
                    marginBottom: '20px',
                    textDecoration: 'none',
                    fontWeight: '500'
                }}>
                    ← Back to Home
                </Link>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Terms of Service</h1>
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '20px' }}><strong>DORMDROP LLC</strong><br /><strong>TERMS OF SERVICE (CUSTOMER AGREEMENT)</strong></p>
                    <p style={{ marginBottom: '20px' }}><strong>Effective Date: Oct 26, 2025</strong></p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Welcome to DormDrop LLC ("DormDrop," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the DormDrop mobile application, website (https://www.dormdrop.us), and related services (collectively, the "Services").
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        By creating an account, accessing, or using DormDrop, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop LLC is a student-founded, Arizona-registered Limited Liability Company that operates independently and is not affiliated with or endorsed by Grand Canyon University (GCU).
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>2. Eligibility</h2>
                    <p style={{ marginBottom: '20px' }}>DormDrop’s Services are available exclusively to individuals who:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Are 18 years of age or older;</li>
                        <li>Hold a valid my.gcu.edu email address; and</li>
                        <li>Are currently located within the Grand Canyon University campus boundaries.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        By using DormDrop, you represent that all registration information you provide is accurate and current.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>3. Description of Service</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop facilitates on-campus food deliveries between student customers ("Customers") and independent student couriers ("Deliverers"). DormDrop itself does not prepare or sell food — all food orders originate from GCU’s existing mobile ordering system or participating campus vendors.
                    </p>
                    <p style={{ marginBottom: '20px' }}>The DormDrop platform allows Customers to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Upload a screen recording of a mobile food order from GCU’s ordering app;</li>
                        <li>Pay a delivery fee and tip through Stripe;</li>
                        <li>Match with a Deliverer who will pick up and deliver the order; and</li>
                        <li>Communicate securely with the Deliverer through the in-app chat.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>4. Independent Relationship</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Deliverers on DormDrop are independent contractors, not employees, agents, or representatives of DormDrop. DormDrop solely facilitates connections between Customers and Deliverers and does not assume responsibility for the actions or conduct of Deliverers.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>5. Payments and Fees</h2>
                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Delivery Fees:</strong> Customers agree to pay a $3 base delivery fee plus 15% of the total food order, as calculated by DormDrop’s system.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Tips:</strong> Tips are optional and go directly to Deliverers. DormDrop does not retain or redistribute tips.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Payment Processing:</strong> All payments are handled by Stripe, a PCI-DSS Level 1 compliant payment processor. DormDrop never stores credit or debit card information.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Authorization:</strong> By submitting a payment, you authorize DormDrop (through Stripe) to charge your selected payment method once a Deliverer accepts your order.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Taxes:</strong> Delivery fees include applicable taxes where required by law.</li>
                    </ol>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>6. Order Cancellations and Refunds</h2>
                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Before Acceptance:</strong> You may cancel your order at any time before a Deliverer accepts it; no payment will be processed.</li>
                        <li style={{ marginBottom: '10px' }}><strong>After Acceptance:</strong> Once a Deliverer accepts your order, cancellation requests will not guarantee a refund.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Refunds:</strong> DormDrop will issue refunds for undelivered, late, or incorrect orders consistent with its Refund and Dispute Resolution Policy.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Process:</strong> Refund requests must be submitted within 24 hours through the DormDrop app or by emailing <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a>.</li>
                    </ol>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>7. Customer Responsibilities</h2>
                    <p style={{ marginBottom: '20px' }}>Customers agree to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Provide accurate pickup and delivery information;</li>
                        <li>Be available at the designated drop-off point at the estimated delivery time;</li>
                        <li>Inspect all food items upon receipt;</li>
                        <li>Report any safety or quality concerns within 24 hours;</li>
                        <li>Refrain from sharing DormDrop accounts or impersonating other users;</li>
                        <li>Treat Deliverers respectfully and comply with campus safety policies.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        Customers acknowledge that Deliverers cannot enter residence halls or restricted areas under any circumstance.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>8. Food Safety Disclaimer</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop is not responsible for the preparation, packaging, or temperature of food items. All food is prepared and handled by third-party restaurants or GCU’s food service providers. DormDrop and its Deliverers act only as couriers transporting food from vendors to Customers.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        If an order is not delivered within one (1) hour when the outdoor temperature exceeds 90°F or within two (2) hours otherwise, the order will be canceled and refunded for safety reasons.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>9. Account Security</h2>
                    <p style={{ marginBottom: '20px' }}>
                        You are responsible for maintaining the confidentiality of your login credentials. You agree to notify DormDrop immediately at <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a> if you suspect unauthorized account use. DormDrop is not liable for losses resulting from your failure to secure your account.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>10. Prohibited Conduct</h2>
                    <p style={{ marginBottom: '20px' }}>Customers may not:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Interfere with the operation of the DormDrop app or servers;</li>
                        <li>Engage in fraudulent or abusive behavior toward Deliverers or DormDrop staff;</li>
                        <li>Circumvent payment systems or charge unauthorized fees;</li>
                        <li>Create multiple accounts or impersonate others;</li>
                        <li>Use DormDrop outside GCU campus boundaries or for illegal activities.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        Violation of these terms may result in immediate account suspension or termination.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>11. Dispute Resolution</h2>
                    <p style={{ marginBottom: '20px' }}>
                        All disputes arising from these Terms or your use of DormDrop are governed by DormDrop’s Refund and Dispute Resolution Policy.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        If disputes cannot be resolved through DormDrop support, both parties agree to binding arbitration in Phoenix, Arizona, under the rules of the American Arbitration Association (AAA). Each party shall bear its own costs unless otherwise decided by the arbitrator.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>12. Limitation of Liability</h2>
                    <p style={{ marginBottom: '20px' }}>
                        To the maximum extent permitted by law, DormDrop LLC, its members, and affiliates shall not be liable for:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Indirect, incidental, special, or consequential damages;</li>
                        <li>Loss of data, income, or goodwill; or</li>
                        <li>Any harm resulting from third-party food preparation or delivery.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop’s total liability for any claim arising from the Services shall not exceed the total amount paid by the Customer for the disputed order.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>13. Indemnification</h2>
                    <p style={{ marginBottom: '20px' }}>
                        You agree to indemnify and hold harmless DormDrop LLC, its officers, contractors, and affiliates from any claim, loss, or damage resulting from your misuse of the Services, breach of these Terms, or violation of applicable law.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>14. Privacy and Data Use</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop collects and processes user data in accordance with its Privacy Policy, available at <a href="https://www.dormdrop.us/privacy" style={{ color: 'var(--primary-color)' }}>https://www.dormdrop.us/privacy</a>. By using DormDrop, you consent to DormDrop’s collection, storage, and use of information as described therein.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>15. Modifications to the Service and Terms</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop reserves the right to modify or discontinue any aspect of the Services without notice. Updated Terms will be posted within the app and on the website. Continued use after updates constitutes acceptance of the revised Terms.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>16. Governing Law</h2>
                    <p style={{ marginBottom: '20px' }}>
                        These Terms are governed by the laws of the State of Arizona, without regard to conflict-of-law principles. Any legal action arising from these Terms shall be brought exclusively in Maricopa County, Arizona.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>17. Contact Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        <strong>DormDrop LLC</strong><br />
                        Email: <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a><br />
                        Website: <a href="https://www.dormdrop.us" style={{ color: 'var(--primary-color)' }}>https://www.dormdrop.us</a><br />
                        Phoenix, Arizona
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>18. Acknowledgment and Acceptance</h2>
                    <p style={{ marginBottom: '20px' }}>
                        By creating a DormDrop account, placing an order, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>

                    <div style={{ marginTop: '40px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                        <p><strong>DormDrop LLC</strong></p>
                        <p>By: _____________________</p>
                        <p>Brady Newton</p>
                        <p>Founder & Managing Member</p>
                        <p>Date: Oct 26, 2025</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TermsOfService;
