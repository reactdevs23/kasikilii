import React from "react";
import styles from "./styles.module.css";

const ConfirmationPopup = ({ setPopup }) => {
  return (
    <>
      <div className={styles.modal}>
        <h3 className={styles.title}>ALERT !!</h3>
        <p className={styles.text}>
          Are you sure you have received the actual funds for this transaction
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => setPopup(false)}
          >
            Cancel
          </button>
          <button
            className={`${styles.button} ${styles.proceed}`}
            onClick={() => setPopup(false)}
          >
            Proceed
          </button>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => setPopup(false)}></div>
    </>
  );
};

export default ConfirmationPopup;
