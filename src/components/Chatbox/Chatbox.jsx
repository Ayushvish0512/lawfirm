import React, { useState } from 'react';
import styles from './Chatbox.module.css';

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ phone: '', query: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      await fetch('https://n8n.laiqa.ai/webhook/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('success');
      setFormData({ phone: '', query: '' });
      setTimeout(() => {
        setIsOpen(false);
        setStatus(null);
      }, 1800);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.cbWrapper}>
      {isOpen && (
        <div className={styles.cbPanel} role="dialog" aria-label="Chat with us">
          <div className={styles.cbHeader}>
            <button
              type="button"
              className={styles.cbClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className={styles.cbHeaderContent}>
              <div className={styles.cbAvatar}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a2540" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className={styles.cbHeaderText}>
                <h3>How can we help?</h3>
                <p>Share your query and we'll get back to you shortly.</p>
                <div className={styles.cbOnline}>
                  <span className={styles.cbOnlineDot} />
                  We typically reply within minutes
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.cbBody}>
              {status === 'success' && (
                <div className={`${styles.cbStatus} ${styles.cbStatusSuccess}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Thank you! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.cbStatus} ${styles.cbStatusError}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Failed to send. Please try again.
                </div>
              )}

              <div className={styles.cbField}>
                <label className={styles.cbLabel} htmlFor="cb-phone">Phone Number</label>
                <div className={styles.cbInputWrap}>
                  <span className={styles.cbInputIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <input
                    id="cb-phone"
                    className={styles.cbInput}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className={styles.cbField}>
                <label className={styles.cbLabel} htmlFor="cb-query">Your Query</label>
                <div className={`${styles.cbInputWrap} ${styles.cbTextareaWrap}`}>
                  <span className={styles.cbInputIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <textarea
                    id="cb-query"
                    className={styles.cbTextarea}
                    placeholder="Tell us how we can help you..."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    required
                    rows="4"
                  />
                </div>
              </div>
            </div>

            <div className={styles.cbFooter}>
              <button type="submit" className={styles.cbSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className={styles.cbSpinner} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className={styles.cbPowered}>
            Powered by <span>LAIQA</span>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`${styles.cbTrigger} ${isOpen ? styles.cbTriggerOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className={styles.cbBadge} />
          </>
        )}
      </button>
    </div>
  );
}
