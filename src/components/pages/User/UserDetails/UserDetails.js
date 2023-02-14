import React from "react";
import { AmountBox, Heading, Tagline } from "../../../common.styled";
import { userDetails } from "../../../../assets/data";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const heading = ["DATE", "AMOUNTS(NS)", "DISTRIBUTORS", "ACTIVITY"];

  return (
    <div className={styles.distributorWrapper}>
      <div className={styles.distributorInfo}>
        <div className={styles.details}>
          <Tagline className={styles.headingAndTagline}>
            <span>MOBILE</span> <span className={styles.clone}>:</span>{" "}
            <span>081 808 2569</span>
          </Tagline>

          <Tagline className={styles.headingAndTagline}>
            REGION <span className={styles.clone}>:</span> KHOMAS
          </Tagline>
        </div>
        <div>
          <Tagline className={styles.tagline}>BALANCE</Tagline>
          <AmountBox center>645</AmountBox>
        </div>
      </div>
      <h3 className={styles.historyTitle}>
        HISTORY : (Last fifteen (15) transactions only)
      </h3>
      <div className={styles.tableContainer}>
        {heading.map((el, i) => (
          <h3 className={styles.title} key={i}>
            {el}
          </h3>
        ))}
      </div>

      {userDetails.map((el, i) => (
        <div
          className={`${styles.tableContainer} ${styles.tableContainer2}`}
          key={i}
        >
          <p className={`${styles.title} ${styles.value}`}>{el.date}</p>{" "}
          <p className={`${styles.title} ${styles.value}`}>{el.amount}</p>
          <p className={`${styles.title} ${styles.value}`}>{el.distributor}</p>
          <p className={`${styles.title} ${styles.value}`}>{el.activity}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
