import React from "react";
import { AmountBox, Heading, Tagline } from "../../../common.styled";
import { distributorDetails } from "../../../../assets/data";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const DistributorDetails = () => {
  const { id } = useParams();
  const heading = ["DATE", "AMOUNTS(NS)", "RECIPIENT", "ACTIVITY"];

  return (
    <div className={styles.distributorWrapper}>
      <div className={styles.distributorInfo}>
        <div className={styles.details}>
          <Heading className={styles.headingAndTagline}>
            <span>FULL NAME</span> <span className={styles.clone}>:</span>{" "}
            <span>LUKAS KONDJENI</span>
          </Heading>
          <Tagline className={styles.headingAndTagline}>
            <span>MOBILE</span> <span className={styles.clone}>:</span>{" "}
            <span>081 808 2569</span>
          </Tagline>
          <Tagline className={styles.headingAndTagline}>
            CODE <span className={styles.clone}>:</span> XG45896
          </Tagline>
          <Tagline className={styles.headingAndTagline}>
            EMAIL <span className={styles.clone}>:</span> LUKAS@GMAIL.COM
          </Tagline>
          <Tagline className={styles.headingAndTagline}>
            REGION <span className={styles.clone}>:</span> KHOMAS
          </Tagline>
        </div>
        <div>
          <Tagline className={styles.tagline}>BALANCE</Tagline>
          <AmountBox>18 000</AmountBox>
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
      <div className={`${styles.tableContainer} ${styles.tableContainer2}`}>
        {distributorDetails.map((el, i) => (
          <>
            <p className={`${styles.title} ${styles.value}`}>{el.date}</p>{" "}
            <p className={`${styles.title} ${styles.value}`}>{el.amount}</p>
            <p className={`${styles.title} ${styles.value}`}>{el.recipient}</p>
            <p className={`${styles.title} ${styles.value}`}>{el.activity}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default DistributorDetails;
