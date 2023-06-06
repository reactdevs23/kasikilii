import React, { useEffect } from "react";
import { Title } from "../../../common.styled";

import styles from "./styles.module.css";
import { referrals } from "../../../../assets/data";
import { Link } from "react-router-dom";
const Table = () => {
  const heading = [
    "PAID DATE",
    "REFERRER",
    "TOKENS",
    "REGION",
    "PLAYER",
    "REGION",
    "AMOUNT",
    "HISTORY",
  ];

  return (
    <div className={styles.myTable}>
      <div className={` ${styles.headingContainer}`}>
        {heading.map((el, i) => (
          <Title key={i} fontFamily=" 'Quicksand', sans-serif" padding="15px 0">
            {el}
          </Title>
        ))}
      </div>

      <div className={styles.table}>
        {referrals.map((el, i) => (
          <div key={i} className={styles.tableContainer}>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.paidDate}
            </Title>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.referrer}
            </Title>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.tokens}
            </Title>{" "}
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.region}
            </Title>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.player}
            </Title>{" "}
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.region ? el.region : "-"}
            </Title>{" "}
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.amount ? el.amount : "-"}
            </Title>
            <Link to={`/userDetails`} className={styles.viewButton}>
              VIEW NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
