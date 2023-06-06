import React, { useState } from "react";
import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

import Table from "./Table/Table";
import MyDatePicker from "../../DatePicker/DatePicker";

const Referrals = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [criteria, setCriteria] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dropDownItems = [
    "Mobile no",
    "Status",
    "Region",
    "Request Status",
    "List From Highest Balance",
    "List From Lowest Balance",
  ];

  const searchFunction = (e) => {
    setSearchValue(e.target.value);
  };

  const data = [
    { title: "TOTAL  BALANCE - USERS", value: "65000" },
    { title: "NUMBER OF  REGISTERED USERS", value: "2000" },
    { title: "TOTAL CASH OUT REQUEST  - N$", value: "2880" },
    { title: "TOTAL USER S CASHING OUT ", value: "32" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.heading}>REFERRAL DISTRIBUTOR CODE: D_XHR014</h3>
      </div>
      <div className={styles.searchDatesTotal}>
        <div className={`${styles.search} `}>
          <div className={styles.contentBox}>
            <DropDownComponent
              title="Search Criteria"
              items={dropDownItems}
              value={criteria}
              setValue={setCriteria}
            />

            <Input
              name="search"
              placeholder="Type reference"
              label="Search Reference"
              value={searchValue}
              onChange={searchFunction}
            />
          </div>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
          <button className={styles.downLoadExcelButton}>Download Excel</button>
          <div className={styles.totalAmount}>
            <Title>Referral / Incentive Account Balance</Title>
            <AmountBox minWidth="100%">10 000</AmountBox>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <MyDatePicker
              label="Date From"
              date={startDate}
              setDate={setStartDate}
            />

            <MyDatePicker date={endDate} setDate={setEndDate} label="Date To" />
          </div>

          <div className={styles.totalAmountContainer}>
            {" "}
            <div className={styles.totalAmount}>
              <Title>TOTAL REFERRALS PAID</Title>
              <AmountBox minWidth="100%">32</AmountBox>
            </div>
            <div className={styles.totalAmount}>
              <Title>Referral / Incentive Account Balance</Title>
              <AmountBox minWidth="100%">10 000</AmountBox>
            </div>
          </div>
        </div>
        <div className={styles.TotalAmout}>
          {data.map((el, i) => (
            <div key={i} className={styles.totalAmount}>
              <Title>{el.title}</Title>
              <AmountBox minWidth="240px">{el.value}</AmountBox>
            </div>
          ))}
        </div>
      </div>{" "}
      <Table />
    </div>
  );
};

export default Referrals;
