import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      padding: '20px 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to="/">
            <img
              src="https://dormdrop.carrd.co/assets/images/image03.png?v=fb0f2a9e"
              alt="DormDrop Logo"
              style={{ height: '40px', width: 'auto', maxWidth: '100%' }}
            />
          </Link>
        </div>
        <nav className="mobile-nav-hidden">
          <a href="/#how-it-works" style={{ marginLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>How it Works</a>
          <a href="/#pricing" style={{ marginLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Pricing</a>
          <a href="/#contact" style={{ marginLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
