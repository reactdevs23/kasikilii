import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AmountBox, Heading, Tagline } from "../../../common.styled";
import { distributorDetails } from "../../../../assets/data";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./styles.module.css";

const DistributorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const heading = ["DATE", "TRANS ID", "AMOUNTS(NS)", "RECIPIENT", "ACTIVITY"];

  const details = [
    { key: "MOBILE", value: "081 808 2569" },
    { key: "CODE", value: "XG45896" },
    { key: "EMAIL", value: "LUKAS@GMAIL.COM" },
    { key: "MOBILE", value: "081 808 2569" },
    { key: "REGION", value: "KHOMAS" },
  ];

  return (
    <div className={styles.wrapper}>
      <FaLongArrowAltLeft
        className={styles.icon}
        onClick={() => navigate(-1)}
      />
      <div className={styles.distributorWrapper}>
        <div className={styles.distributorInfo}>
          <div className={styles.details}>
            <Heading className={styles.headingAndTagline}>
              <span>FULL NAME</span> <span className={styles.clone}>:</span>{" "}
              <span>LUKAS KONDJENI</span>
            </Heading>

            {details.map((el, i) => (
              <Tagline className={styles.headingAndTagline} key={i}>
                <span>{el.key}</span> <span className={styles.clone}>:</span>{" "}
                <span>{el.value}</span>
              </Tagline>
            ))}
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

        {distributorDetails.map((el, i) => (
          <div
            className={`${styles.tableContainer} ${styles.tableContainer2}`}
            key={i}
          >
            <p className={`${styles.title} ${styles.value}`}>{el.date}</p>{" "}
            <p className={`${styles.title} ${styles.value}`}>{el.transId}</p>
            <p className={`${styles.title} ${styles.value}`}>{el.amount}</p>
            <p className={`${styles.title} ${styles.value}`}>{el.recipient}</p>
            <p className={`${styles.title} ${styles.value}`}>{el.activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributorDetails;
