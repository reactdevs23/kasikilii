import React, { useState } from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ label, disabled, data, index }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        disabled={disabled}
        value={checked}
        onChange={() => setChecked((prev) => !prev)}
        className={styles.myCheckBox}
      />
      <span className={styles.checkmark}></span> {label}
    </label>
  );
};

export default CheckBox;
