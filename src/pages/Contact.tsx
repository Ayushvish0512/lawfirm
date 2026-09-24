import React from 'react';
import { Container } from '../components/Container/Container';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { siteConfig } from '../config/site';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <main className={styles.contact}>
      <section className={styles.info}>
        <Container className={styles.infoContent}>
          <h1>Contact Us</h1>
          <p className={styles.description}>
            Have a legal question? Reach out to us and we'll get back to you promptly.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <strong>Email</strong>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>

            <div className={styles.detailItem}>
              <strong>Phone</strong>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
            </div>

            <div className={styles.detailItem}>
              <strong>Location</strong>
              <span>{siteConfig.city}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container className={styles.formContent}>
          <h2>Send Us a Message</h2>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}

export default Contact;
