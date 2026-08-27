import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { siteConfig } from '../../config/site';
import { navigationConfig } from '../../config/navigation';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Link to="/" className={styles.logo}>
          {siteConfig.name}
        </Link>
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <line x1="18" y1="6" x2="6" y2="18" />
            ) : (
              <line x1="3" y1="6" x2="21" y2="6" />
            )}
            {isMenuOpen ? (
              <line x1="6" y1="6" x2="18" y2="18" />
            ) : (
              <line x1="3" y1="12" x2="21" y2="12" />
            )}
            {isMenuOpen ? null : (
              <line x1="3" y1="18" x2="21" y2="18" />
            )}
          </svg>
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navigationConfig.header.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button to="/contact" variant="accent" onClick={() => setIsMenuOpen(false)}>
            Book a Consultation
          </Button>
        </nav>
      </Container>
    </header>
  );
}
