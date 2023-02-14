import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Input/Input";

import styles from "./styles.module.css";
const Login = ({ setLogin }) => {
  const [values, setValues] = useState({
    mobile: "",
    email: "",
    password: "",
    stateoftheassest: "",
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
      type: "password",
      name: "password",

      placeholder: " Password",
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
        <h2 className={styles.title}>Login</h2>
        <p className={styles.text}>Login to manage payouts</p>
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
              Login
            </button>
          </div>
          <div to="#" className={styles.forgotPassword}>
            <span> Forgot your password?</span>
            {"  "}
            <Link to="/forgotPassword" className={styles.link}>
              {"  "}
              Click Here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
