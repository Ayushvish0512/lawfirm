import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { siteConfig } from '../../config/site';
import { navigationConfig } from '../../config/navigation';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>{siteConfig.name}</div>
            <p className={styles.description}>
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h4 className={styles.title}>Navigation</h4>
            {navigationConfig.footer.map((item) => (
              <Link key={item.path} to={item.path} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className={styles.title}>Contact</h4>
            <p className={styles.link}>{siteConfig.email}</p>
            <p className={styles.link}>{siteConfig.phone}</p>
            <p className={styles.link}>{siteConfig.city}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
