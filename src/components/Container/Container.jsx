import React from 'react';
import styles from './Container.module.css';

export function Container({ children, className = '', ...props }) {
  return (
    <div className={`${styles.container} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
