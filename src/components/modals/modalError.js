import React from 'react';
import styles from "./modals.module.css"

const ErrorModal = ({ errorMessage, onClose }) => (
  <div className={styles.modalBackground}>
    <div className={styles.modalContent}>
      <div className={styles.errorIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <p>{errorMessage}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  </div>
);

export default ErrorModal;
