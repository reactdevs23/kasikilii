import React from "react";
import styles from "./styles.module.css";

const SuccessPopup = ({ setModal }) => {
  return (
    <div>
      <div className={styles.popup}>
        <p className={styles.message}>Update is succesfull</p>{" "}
      </div>{" "}
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </div>
  );
};

export default SuccessPopup;
