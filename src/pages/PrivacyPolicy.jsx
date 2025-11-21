import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Privacy Policy</h1>
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '20px' }}><strong>DORMDROP LLC</strong><br /><strong>PRIVACY POLICY (PUBLIC DISCLOSURE)</strong></p>
                    <p style={{ marginBottom: '20px' }}><strong>Effective Date: Oct 26, 2025</strong></p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop LLC ("DormDrop," "we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website (https://www.dormdrop.us), and related services (collectively, the "Services").
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        By using DormDrop, you consent to the practices described in this Privacy Policy. Please read this document carefully to understand our policies regarding your data and how we handle it in compliance with applicable state, federal, and international privacy laws, including the Arizona Revised Statutes (A.R.S.), the California Consumer Privacy Act (CCPA), and, when applicable, the General Data Protection Regulation (GDPR).
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop LLC is a student-founded, Arizona-registered Limited Liability Company operating independently from Grand Canyon University (GCU). DormDrop is not affiliated with or endorsed by GCU, and all data collected is managed solely by DormDrop LLC.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>2. Information We Collect</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop collects only the minimum amount of data necessary to operate our Services effectively and securely. The types of information we collect include:
                    </p>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>A. Personal Identifiable Information (PII)</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Full name</li>
                        <li>GCU email address (used for student verification)</li>
                        <li>Phone number</li>
                        <li>Delivery location (campus area only)</li>
                        <li>Payment and transaction identifiers (processed via Stripe)</li>
                        <li>Device identifiers (limited, for app security and authentication)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>B. Order Information</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Restaurant name, order time, and total price</li>
                        <li>Order number and QR code (from uploaded screen recordings)</li>
                        <li>Drop-off details and delivery notes</li>
                        <li>Order timestamps and verification events</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>C. Courier Information (Independent Contractors)</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Legal name</li>
                        <li>Contact information</li>
                        <li>Government-issued ID (verified by Stripe, not DormDrop)</li>
                        <li>Tax documentation (W-9/1099 through Stripe)</li>
                        <li>Arizona Food Handler Card number and expiration date</li>
                        <li>Stripe Connect account information for payouts</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>D. Technical and Usage Information</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>IP address, device type, and operating system</li>
                        <li>Login timestamps and session tokens</li>
                        <li>GPS location (active only during delivery operations for safety and logistics)</li>
                        <li>Crash reports and performance logs</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>E. Communications and Ratings</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>In-app chat messages (monitored for safety and dispute resolution)</li>
                        <li>Delivery feedback, star ratings, and support tickets</li>
                        <li>Emails or support requests sent to DormDrop support</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop does not collect academic, medical, or biometric data under any circumstances.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>3. How We Collect Data</h2>
                    <p style={{ marginBottom: '20px' }}>We collect data in the following ways:</p>
                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li style={{ marginBottom: '10px' }}><strong>Directly from you</strong> – when you create an account, upload an order screen recording, make a payment, or communicate with support.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Automatically</strong> – via app interactions, GPS (for couriers), and Firebase analytics for system performance.</li>
                        <li style={{ marginBottom: '10px' }}><strong>Through third parties</strong> – Stripe (for payments and verification) and Google Firebase (for hosting and AI processing).</li>
                    </ol>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop does not purchase, sell, or acquire user data from third parties.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>4. How We Use Your Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop uses collected information solely for the purpose of operating, improving, and securing our Services. Specifically, we may use your data to:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Process orders, payments, and deliveries.</li>
                        <li>Verify user identity (via GCU email and Stripe verification).</li>
                        <li>Communicate order status updates and delivery confirmations.</li>
                        <li>Maintain platform safety and compliance with health and food handling laws.</li>
                        <li>Prevent fraud, abuse, or misuse of the app.</li>
                        <li>Resolve disputes, provide customer support, and enforce Terms of Service.</li>
                        <li>Improve functionality, design, and reliability through aggregate analytics.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        We do not use personal data for advertising, marketing, or resale purposes.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>5. Legal Bases for Processing (GDPR Compliance)</h2>
                    <p style={{ marginBottom: '20px' }}>When GDPR applies, DormDrop processes data on the following legal grounds:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li><strong>Contractual necessity</strong> – data processing required to perform delivery and payment services.</li>
                        <li><strong>Consent</strong> – user consent for data collection during onboarding and app usage.</li>
                        <li><strong>Legitimate interests</strong> – operational security, fraud prevention, and service improvement.</li>
                        <li><strong>Legal obligations</strong> – compliance with applicable tax, food safety, or payment laws.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>6. Data Sharing and Disclosure</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop does not sell, rent, or trade personal information. We share limited data only with trusted service providers to facilitate the core functionality of our Services:
                    </p>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>A. Third-Party Service Providers</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li><strong>Stripe, Inc.</strong> – manages payment processing, tax forms, and identity verification. DormDrop never stores credit/debit card information.</li>
                        <li><strong>Google Cloud / Firebase</strong> – provides secure data storage, authentication, and AI order extraction.</li>
                        <li><strong>Apple App Store & Google Play</strong> – app distribution and analytics (device-level, anonymized).</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        All third parties are contractually bound by confidentiality and data protection agreements that meet or exceed U.S. and EU privacy standards.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '20px', marginBottom: '10px' }}>B. Legal Compliance and Safety</h3>
                    <p style={{ marginBottom: '20px' }}>DormDrop may disclose user data if required to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>Comply with legal obligations, subpoenas, or court orders.</li>
                        <li>Protect the safety, property, or rights of users, DormDrop, or the public.</li>
                        <li>Investigate or prevent fraud, misconduct, or violations of law.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop will always seek to notify users of such disclosures unless prohibited by law.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>7. Data Storage and Security</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop employs strong encryption and cybersecurity controls to safeguard data.
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li><strong>Encryption:</strong> AES-256 encryption at rest; TLS 1.2+ in transit.</li>
                        <li><strong>Access Controls:</strong> Role-based access within Firebase; administrative logs for all data actions.</li>
                        <li><strong>Authentication:</strong> Firebase OAuth and password hashing.</li>
                        <li><strong>Payment Security:</strong> PCI DSS Level 1 certification through Stripe.</li>
                        <li><strong>Monitoring:</strong> Continuous intrusion detection and vulnerability scanning.</li>
                        <li><strong>Backups:</strong> Encrypted backups stored within U.S.-based Google Cloud servers.</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        No system can guarantee absolute security; however, DormDrop actively audits and updates its practices to ensure industry-standard protection.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>8. Data Retention and Deletion</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop retains personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy.
                    </p>
                    <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '10px' }}>Data Type</th>
                                    <th style={{ textAlign: 'left', padding: '10px' }}>Retention Period</th>
                                    <th style={{ textAlign: 'left', padding: '10px' }}>Deletion Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '10px' }}>Screen recordings</td>
                                    <td style={{ padding: '10px' }}>Deleted immediately after order data extraction</td>
                                    <td style={{ padding: '10px' }}>Automatic Firebase deletion script</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '10px' }}>Order details</td>
                                    <td style={{ padding: '10px' }}>12 months (for dispute resolution and tax purposes)</td>
                                    <td style={{ padding: '10px' }}>Permanent deletion from Firestore</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '10px' }}>Account data</td>
                                    <td style={{ padding: '10px' }}>Until user requests deletion or after 12 months of inactivity</td>
                                    <td style={{ padding: '10px' }}>Secure erasure through Firebase console</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>Payment records</td>
                                    <td style={{ padding: '10px' }}>Retained by Stripe per financial law compliance</td>
                                    <td style={{ padding: '10px' }}>Stripe handles deletion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginBottom: '20px' }}>
                        Users may delete their accounts or request data removal anytime by contacting <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a>.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>9. User Rights</h2>
                    <p style={{ marginBottom: '20px' }}>Depending on your jurisdiction, you may have the following rights:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                        <li><strong>Access:</strong> Obtain a copy of the data DormDrop holds about you.</li>
                        <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information.</li>
                        <li><strong>Deletion:</strong> Request permanent deletion of personal data.</li>
                        <li><strong>Restriction:</strong> Limit DormDrop’s use of your information.</li>
                        <li><strong>Data Portability:</strong> Request transfer of data to another service where technically possible.</li>
                        <li><strong>Withdraw Consent:</strong> Revoke consent at any time (this may affect service functionality).</li>
                    </ul>
                    <p style={{ marginBottom: '20px' }}>
                        Requests can be made via email to <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a>. DormDrop will verify identity and respond within 30 days.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>10. Cookies and Analytics</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop does not use third-party advertising cookies. Minimal usage data may be collected through Firebase Analytics for performance optimization and error detection. These analytics are anonymized and cannot be linked to individual users.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        You may disable analytics collection in your mobile device settings at any time.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>11. Children’s Privacy</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop’s Services are restricted to users aged 18 and older. We do not knowingly collect data from minors. If it is discovered that a user under 18 has registered, DormDrop will immediately delete their account and data.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>12. Data Transfers Outside the U.S.</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop primarily stores and processes data within the United States. If any data is processed in other regions (such as via Google Cloud or Stripe’s global servers), it is handled under privacy frameworks that ensure adequate protection, such as Standard Contractual Clauses (SCCs).
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>13. Changes to This Privacy Policy</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DormDrop may update this Privacy Policy periodically to reflect operational or legal changes. All updates will be published on https://www.dormdrop.us/privacy and within the app. The date of the latest revision will always appear at the top of the document.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Users will be notified of significant policy changes via email or in-app notice prior to implementation.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>14. Contact Information</h2>
                    <p style={{ marginBottom: '20px' }}>
                        For questions, data requests, or complaints regarding this Privacy Policy or DormDrop’s data handling practices, please contact:
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        <strong>DormDrop LLC</strong><br />
                        Attn: Privacy Officer<br />
                        Email: <a href="mailto:support@dormdrop.us" style={{ color: 'var(--primary-color)' }}>support@dormdrop.us</a><br />
                        Website: <a href="https://www.dormdrop.us" style={{ color: 'var(--primary-color)' }}>https://www.dormdrop.us</a><br />
                        Phoenix, Arizona
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '30px', marginBottom: '16px' }}>15. Acceptance of Policy</h2>
                    <p style={{ marginBottom: '20px' }}>
                        By creating an account, using the DormDrop app, or submitting any personal information, you confirm that you have read and understood this Privacy Policy and agree to its terms.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        If you do not agree with this Policy, please do not use the DormDrop platform or its related services.
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

export default PrivacyPolicy;
