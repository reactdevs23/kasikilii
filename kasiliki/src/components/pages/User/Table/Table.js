import React, { useEffect } from "react";
import { Title } from "../../../common.styled";

import CheckBox from "../../../Checkbox/CheckBox";
import styles from "./styles.module.css";
import { userData } from "../../../../assets/data";
import { Link } from "react-router-dom";
const Table = () => {
  const heading = [
    "REG  DATE",
    "MOBILE NO.",
    "STATUS",
    "REGION",
    "BALANCE",
    "REQUEST",
    "AMOUNT",
    "HISTORY",
    "",
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
        {userData.map((el, i) => (
          <div key={i} className={styles.tableContainer}>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.regDate}
            </Title>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.mobileNo}
            </Title>
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.status}
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
              {el.balance}
            </Title>{" "}
            <Title
              padding="12px 0"
              fontFamily=" 'Quicksand', sans-serif"
              className={styles.title}
              mobileFontSize="15px"
            >
              {el.request ? el.request : "-"}
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
            <CheckBox
              disabled={userData[i].request === ""}
              index={i}
              data={userData}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
