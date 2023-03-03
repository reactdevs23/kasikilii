import React from "react";
import styles from "./styles.module.css";

const TransferConfirmation = ({ setPopup }) => {
  return (
    <>
      <div className={styles.modal}>
        <h3 className={styles.title}>ALERT !!</h3>
        <p className={styles.text}>
          Are you sure you have received the actual funds for this transaction
          BECAUSE tokens will now be transferred to distributor
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

export default TransferConfirmation;
