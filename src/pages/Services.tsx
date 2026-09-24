import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { Button } from '../components/Button/Button';
import styles from './Services.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'corporate',
    title: 'Corporate Law',
    description:
      'Legal counsel for businesses on company formation, compliance, contracts, and corporate governance.',
  },
  {
    id: 'litigation',
    title: 'Civil Litigation',
    description:
      'Representation in civil disputes including property matters, contracts, and commercial disagreements.',
  },
  {
    id: 'family',
    title: 'Family Law',
    description:
      'Assistance with matrimonial matters, custody, adoption, and domestic legal issues.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Law',
    description:
      'Property transactions, land disputes, and conveyancing services for individuals and businesses.',
  },
];

export function Services() {
  return (
    <main className={styles.services}>
      <section className={styles.header}>
        <Container className={styles.headerContent}>
          <h1>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive legal solutions tailored to your needs.
          </p>
        </Container>
      </section>

      <section className={styles.list}>
        <Container className={styles.serviceGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className={styles.cta}>
        <Container className={styles.ctaContent}>
          <h2>Need legal assistance?</h2>
          <p>
            Contact us today to discuss your case. We offer free initial consultations.
          </p>
          <Button to="/contact2" variant="accent">
            Get in Touch
          </Button>
        </Container>
      </section>
    </main>
  );
}

export default Services;
