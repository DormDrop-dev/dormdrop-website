import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <img
                                src="https://dormdrop.carrd.co/assets/images/image03.png?v=fb0f2a9e"
                                alt="DormDrop Logo"
                                style={{ height: '32px', width: 'auto' }}
                            />
                        </div>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            Created for GCU students, but not affiliated with GCU.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="https://www.instagram.com/dormdropco/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
                            <a href="https://www.linkedin.com/company/108979117" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                            <a href="mailto:support@dormdrop.us" style={{ color: 'var(--text-secondary)' }}>Support</a>
                            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link>
                            <Link to="/terms-of-service" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Download</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="https://apps.apple.com/us/app/dormdrop-food-delivery/id6749652518" style={{ color: 'var(--text-secondary)' }}>App Store</a>
                            <a href="https://play.google.com/store/apps/details?id=com.mycompany.dormdrop" style={{ color: 'var(--text-secondary)' }}>Google Play</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: '32px',
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} DormDrop LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
