import React, { useState } from "react";

import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";
import Table from "./Table/Table";
import MyDatePicker from "../../DatePicker/DatePicker";

const Distributor = () => {
  const [criteria, setCriteria] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
    { title: "TOTAL  BALANCE - DISTRIBUTORS", value: 200000 },
    { title: "NUMBER OF  DISTRIBUTORS", value: 120 },
  ];
  const handleSearch = () => {
    // handle search
  };

  return (
    <div>
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
        </div>

        <div>
          <MyDatePicker
            label="Date From"
            date={startDate}
            setDate={setStartDate}
          />

          <MyDatePicker date={endDate} setDate={setEndDate} label="Date To" />
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

export default Distributor;
