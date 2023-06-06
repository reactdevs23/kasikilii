import React, { useState } from "react";

import styles from "./styles.module.css";

const MyDatePicker = ({ date, setDate, label, type }) => {
  return (
    <div className={styles.myInput}>
      <p className={styles.label}>{label}:</p>
      <input
        selected={date}
        onChange={(date) => setDate(date)}
        type={type ? type : "date"}
        className={styles.input}
      />
    </div>
  );
};

export default MyDatePicker;
