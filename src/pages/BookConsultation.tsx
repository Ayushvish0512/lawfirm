import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { siteConfig } from '../config/site';
import styles from './BookConsultation.module.css';

export function BookConsultation() {
  const navigate = useNavigate();

  return (
    <main className={styles.booking}>
      <section className={styles.intro}>
        <Container className={styles.introContent}>
          <Link to="/home2" className={styles.backLink}>
            &larr; Back to Home
          </Link>
          <h1>Book a Free Consultation</h1>
          <p className={styles.subtitle}>
            Fill out the form below and we'll get back to you within one business day.
          </p>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container className={styles.formContent}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
            </p>
            <p>
              <strong>Location:</strong> {siteConfig.city}
            </p>
          </div>

          <div className={styles.formWrapper}>
            <h2>Send Your Details</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}

export default BookConsultation;
