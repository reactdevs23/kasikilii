import React from "react";
import styles from "./styles.module.css";
import "./style.css";
import { logout } from "../../assets/image/images";

const Header = ({ login, setLogin }) => {
  return (
    <section className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {" "}
          {login && (
            <img
              src={logout}
              alt="#"
              className={styles.logOut}
              onClick={() => setLogin(false)}
            />
          )}
          <h2 className={styles.logo}>KASIKILI</h2>
          <p className={styles.tagline}>DIGITAL BERGMANN JACKPOTS</p>
        </div>
        <div className={styles.barContainer}>
          {[...new Array(4)].map((_, i) => (
            <div
              key={i}
              className={`bar${i + 1} ${styles.bar} ${
                i % 2 === 0 ? styles.evenBar : styles.oddBar
              }`}
            ></div>
          ))}
        </div>
      </header>
    </section>
  );
};

export default Header;
