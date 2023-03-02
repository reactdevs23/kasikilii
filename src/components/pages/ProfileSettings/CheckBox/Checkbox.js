import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ label, checked, setChecked, color, paddingTop }) => {
  return (
    <div style={{ paddingTop: paddingTop }}>
      <label className={styles.container} style={{ color: color }}>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((prev) => !prev)}
          className={styles.myCheckBox}
        />
        <span className={styles.checkmark}></span> {label}
      </label>
    </div>
  );
};

export default CheckBox;
