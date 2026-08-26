import React from 'react';
import styles from './Maintenance.module.css';
import maintenanceIcon from '../../assets/icons/maintenance.svg';

export function Maintenance() {
  return (
    <div className={styles.container}>
      <img src={maintenanceIcon} alt="Under Maintenance" className={styles.icon} />
      <h1 className={styles.title}>Site Under Maintenance</h1>
      <p className={styles.description}>
        We are currently updating our website to provide you with a better experience. 
        Please check back soon.
      </p>
    </div>
  );
}
