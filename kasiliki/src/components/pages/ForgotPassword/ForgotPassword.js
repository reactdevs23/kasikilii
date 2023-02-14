import React, { useState } from "react";

import Input from "../../Input/Input";

import styles from "./styles.module.css";
const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    newpassword: "",
    retypepassword: "",
  });

  const inputs = [
    {
      type: "email",
      name: "email",
      placeholder: "Email Address",
    },
    {
      type: "password",
      name: "newpassword",

      placeholder: " Password",
    },
    {
      type: "password",
      name: "retypepassword",
      placeholder: " Password",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitFunction = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.loginWrapper}>
      <div className={styles.logIn}>
        <h2 className={styles.title}>Forgot Password</h2>

        <form className={styles.form}>
          {" "}
          <div className={styles.inputContainer}>
            {inputs.map((input, i) => (
              <Input
                {...input}
                key={i}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.button}
              onClick={(e) => submitFunction(e)}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
