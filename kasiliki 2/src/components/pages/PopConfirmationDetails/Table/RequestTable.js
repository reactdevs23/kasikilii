import React, { useState } from "react";
import RequestConfirmation from "./PopUp/RequestConfirmation";
import { Title } from "../../../common.styled";

import styles from "./styles.module.css";

const RequestTable = ({ heading, tableData }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className={styles.myTable}>
        <div className={` ${styles.headingContainer}`}>
          {heading.map((el, i) => (
            <Title
              className={styles.heading}
              key={i}
              fontFamily=" 'Quicksand', sans-serif"
              padding="15px 0"
            >
              {el}
            </Title>
          ))}
        </div>

        <div className={styles.table}>
          {tableData.map((el, i) => (
            <div key={i} className={styles.tableContainer}>
              <Title
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.payDate}
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
                {el.region}
              </Title>{" "}
              <Title
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.paymentType}
              </Title>
              <Title
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.amountPaid}
              </Title>{" "}
              <Title
                center
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.paymentRef}
              </Title>{" "}
              <Title
                center
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.creditBought}
              </Title>{" "}
              <Title
                center
                padding="12px 0"
                fontFamily=" 'Quicksand', sans-serif"
                className={styles.title}
                mobileFontSize="15px"
              >
                {el.distrocode}
              </Title>{" "}
              <button className={styles.docButton}>{el.pop}</button>
              <button
                className={styles.actionButton}
                onClick={() => setPopup(true)}
              >
                {el.action}
              </button>
            </div>
          ))}
        </div>
      </div>
      {popup && <RequestConfirmation setPopup={setPopup} />}
    </>
  );
};

export default RequestTable;
