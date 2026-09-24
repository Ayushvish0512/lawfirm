import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { Button } from '../components/Button/Button';
import { siteConfig } from '../config/site';
import styles from './Home.module.css';

export function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <Container className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteConfig.name}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>{siteConfig.description}</p>
          <div className={styles.heroActions}>
            <Button to="/contact2" variant="accent" className={styles.heroBtn}>
              Book a Consultation
            </Button>
            <Link to="/services2" className={styles.secondaryLink}>
              Our Services
            </Link>
          </div>
        </Container>
      </section>

      <section className={styles.valueSection}>
        <Container className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Clear Advice</h3>
            <p>We explain your legal options in plain language—no legalese.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Reliable Support</h3>
            <p>Responsive counsel available whenever you need guidance.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Tailored Solutions</h3>
            <p>Custom strategies built around your unique situation.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
