import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { siteConfig } from '../../config/site';
import { navigationConfig } from '../../config/navigation';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Link to="/" className={styles.logo}>
          {siteConfig.name}
        </Link>
        <nav className={styles.nav}>
          {navigationConfig.header.map((item) => (
            <Link key={item.path} to={item.path} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <Button to="/contact" variant="accent">
            Book a Consultation
          </Button>
        </nav>
      </Container>
    </header>
  );
}
