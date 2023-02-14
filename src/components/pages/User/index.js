import React, { useState } from "react";
import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";
import SuccessPopup from "./SuccessPopup/TickUpdatePopup";
import Table from "./Table/Table";
import MyDatePicker from "../../DatePicker/DatePicker";

const User = () => {
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
  const [file, setFile] = useState("");
  const [tickUpdate, setTickUpdate] = useState(false);
  const [massUpdate, setMassUpdate] = useState(false);

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

        <div className={styles.details}>
          <div>
            <MyDatePicker
              label="Date From"
              date={startDate}
              setDate={setStartDate}
            />

            <MyDatePicker date={endDate} setDate={setEndDate} label="Date To" />
          </div>

          <div className={styles.updateBox}>
            <label htmlFor="file" className={styles.fileLabel}>
              <input
                type="file"
                value={file}
                id="file"
                className={styles.fileInput}
                onChange={(e) => setFile(e.target.value)}
              />
              <p className={styles.fileText}>Choose File</p>
            </label>
            <div className={styles.buttonContainer}>
              <button
                className={styles.upDateButton}
                onClick={() => setMassUpdate((prev) => !prev)}
              >
                MASS UPDATE
              </button>{" "}
              <button
                onClick={() => setTickUpdate((prev) => !prev)}
                className={styles.upDateButton}
              >
                TICK UPDATE
              </button>
            </div>
            <Title>35 SUCCESSFULL UPDATES !!</Title>
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
      {tickUpdate && <SuccessPopup setModal={setTickUpdate} />}
      {massUpdate && <SuccessPopup setModal={setMassUpdate} />}
    </div>
  );
};

export default User;
