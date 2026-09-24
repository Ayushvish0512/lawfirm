import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { Button } from '../components/Button/Button';
import { siteConfig } from '../config/site';
import styles from './About.module.css';

export function About() {
  return (
    <main className={styles.about}>
      <section className={styles.intro}>
        <Container className={styles.introContent}>
          <h1>KNPLaw Firm</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>

          <p className={styles.description}>{siteConfig.description}</p>

          <p className={styles.history}>
            Established in {siteConfig.established}, our firm has served individuals and
            businesses across {siteConfig.city}, delivering practical legal solutions
            with clear advice and reliable support.
          </p>

          <p className={styles.contactInfo}>
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            Phone: <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
          </p>

          <div className={styles.actions}>
            <Button to="/contact2" variant="accent">
              Book a Consultation
            </Button>
            <Link to="/services2" className={styles.servicesLink}>
              View Our Services
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;
