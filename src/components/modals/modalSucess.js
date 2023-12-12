import React from 'react';
import styles from "./modals.module.css"

const SuccessModal = ({ message, onClose }) => (
  <div className={styles.modalBackground}>
    <div className={styles.modalContent}>
      <div className={styles.successIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p>{message}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  </div>
);

export default SuccessModal;
