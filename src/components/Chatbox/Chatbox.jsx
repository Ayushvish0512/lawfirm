import React, { useState } from 'react';
import styles from './Chatbox.module.css';

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ phone: '', query: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://n8n.laiqa.ai/webhook/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Thank you! We will get back to you soon.');
      setFormData({ phone: '', query: '' });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send. Please try again later.');
    }
  };

  return (
    <div className={styles.chatboxContainer}>
      <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Chat with us'}
      </button>
      {isOpen && (
        <form className={styles.chatForm} onSubmit={handleSubmit}>
          <input
            className={styles.inputField}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <textarea
            className={styles.inputField}
            placeholder="Your Query"
            value={formData.query}
            onChange={(e) => setFormData({ ...formData, query: e.target.value })}
            required
          />
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      )}
    </div>
  );
}
