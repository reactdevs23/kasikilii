import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import "./style.css";

const MyDatePicker = ({ date, setDate, label }) => {
  return (
    <div className={styles.myInput}>
      <p className={styles.label}>{label}:</p>
      <DatePicker
        className="dddd"
        selected={date}
        onChange={(date) => setDate(date)}
      ></DatePicker>
    </div>
  );
};

export default MyDatePicker;
