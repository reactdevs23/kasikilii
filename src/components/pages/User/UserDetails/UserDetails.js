import React from "react";
import { AmountBox, Heading, Tagline } from "../../../common.styled";
import { userDetails } from "../../../../assets/data";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./styles.module.css";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const heading = [
    "DATE",
    "TRANS ID",
    "AMOUNTS(NS)",
    "DISTRIBUTORS",
    "ACTIVITY",
  ];

  const details = [
    { key: "MOBILE", value: "081 808 2569" },
    { key: " REGION", value: " KHOMAS" },
    { key: "UIN", value: "U205" },
  ];

  return (
    <div className={styles.distributorWrapper}>
      <FaLongArrowAltLeft
        className={styles.icon}
        onClick={() => navigate(-1)}
      />

      <div className={styles.distributorInfo}>
        <div className={styles.details}>
          {details.map((el, i) => (
            <Tagline className={styles.headingAndTagline} key={i}>
              {el.key} <span className={styles.clone}>:</span> {el.value}
            </Tagline>
          ))}
        </div>
        <div className={styles.cashInCashOutContainer}>
          <div className={styles.cashInCashOut}>
            <p className={styles.text}>Total Cash-in </p>
            <p className={styles.amountBox}>645</p>
          </div>
          <div className={styles.cashInCashOut}>
            <p className={styles.text}>Total Cash-out </p>
            <p className={styles.amountBox}>645</p>
          </div>
          <div className={styles.cashInCashOut}>
            <p className={styles.text}>Profit /Loss </p>
            <p className={styles.amountBox}>645</p>
          </div>
          <div className={styles.cashInCashOut}>
            <p className={styles.text}>Referrals </p>
            <p className={styles.amountBox}>645</p>
          </div>
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
          <p className={`${styles.title} ${styles.value}`}>{el.transId}</p>
          <p className={`${styles.title} ${styles.value}`}>{el.amount}</p>
          <p className={`${styles.title} ${styles.value}`}>{el.distributor}</p>
          <p className={`${styles.title} ${styles.value}`}>{el.activity}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
