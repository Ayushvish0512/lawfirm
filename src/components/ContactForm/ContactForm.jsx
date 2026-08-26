import React from 'react';
import styles from './ContactForm.module.css';
import { Button } from '../Button/Button';

export function ContactForm() {
  return (
    <form className={styles.formContainer}>
      <h3 className={styles.whatsappNote}>Available on WhatsApp</h3>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Name</label>
        <input type="text" className={styles.input} required />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input type="email" className={styles.input} required />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Phone Number</label>
        <div className={styles.phoneWrapper}>
          <span className={styles.phonePrefix}>+91</span>
          <input 
            type="tel" 
            className={styles.phoneInput} 
            pattern="[0-9]{10}" 
            maxLength="10" 
            placeholder="9876543210"
            required 
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Legal Requirement</label>
        <textarea className={styles.textarea} placeholder="Describe your requirement..." required></textarea>
      </div>

      <Button type="submit" fullWidth>Submit Enquiry</Button>
    </form>
  );
}
