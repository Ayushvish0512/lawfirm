import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  to,
  href,
  className = '',
  fullWidth = false,
  ...props
}) {
  const buttonClass = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} {...props}>
      {children}
    </button>
  );
}
