import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";

import styles from "./styles.module.css";
const ForgotPassword = ({ setLogin }) => {
  const [values, setValues] = useState({
    mobile: "",
    email: "",
    staffcode: "",
  });

  const inputs = [
    {
      type: "phone",
      name: "mobile",
      placeholder: "John Doe",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email Address",
    },
    {
      type: "text",
      name: "staffcode",

      placeholder: "Staff Code",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitFunction = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  return (
    <section className={styles.loginWrapper}>
      <div className={styles.logIn}>
        <h2 className={styles.title}>Forget Password</h2>
        <p className={styles.text}>Enter credentials</p>
        <form className={styles.form}>
          {" "}
          <div className={styles.inputContainer}>
            {inputs.map((input, i) => (
              <div className={styles.inputWrapper}>
                <Input
                  {...input}
                  key={i}
                  value={values[input.name]}
                  onChange={onChange}
                />
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.button}
              onClick={(e) => submitFunction(e)}
            >
              Login
            </button>
          </div>
          <div to="#" className={styles.forgotPassword}>
            <span> Back to Login ? </span>
            {"  "}
            <Link to="/login" className={styles.link}>
              {"  "}
              Click Here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
