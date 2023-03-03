import React, { useState } from "react";
import {
  requestTableData,
  denialsTableData,
  confirmationsTableData,
  processedTableData,
} from "../../../assets/data";
import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

import MyDatePicker from "../../DatePicker/DatePicker";
import RequestTable from "./Table/RequestTable";
import DanialsTable from "./Table/DanialsTable";
import ConfirmationTable from "./Table/ConfirmationsTable";
import ProcessedTable from "./Table/ProcessedTable";

const PopConfirmation = () => {
  const [criteria, setCriteria] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [activeTable, setActiveTable] = useState(0);
  const dropDownItems = [
    "Mobile no",

    "Region",
    "Payment Type",
    "List From Highest : Amount Paid",
    "List From Highest : Credit Bought",
    "List From Lowest: Amount Paid",
    "List From Lowest:Credit Bought",
  ];

  const searchFunction = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // handle search
  };
  const heading = [
    "Pay Date",
    "Mobile No.",
    "Region",
    "Payment Type",
    "Amount Paid",
    "Payment Ref.",
    "Credits Bought",
    "Distro Code",
    "PoP",
    "ACTION",
  ];
  const denialsAndProcessHeading = [
    "Pay Date",
    "Mobile No.",
    "Region",
    "Payment Type",
    "Amount Paid",
    "Payment Ref.",
    "Credits Bought",
    "Distro Code",
    "PoP",
    "",
  ];
  const buttons = ["Request", "Denials", "Confirmations", "Processed"];
  const tables = [
    <RequestTable heading={heading} tableData={requestTableData} />,
    <DanialsTable
      heading={denialsAndProcessHeading}
      tableData={denialsTableData}
    />,
    <ConfirmationTable heading={heading} tableData={confirmationsTableData} />,
    <ProcessedTable
      heading={denialsAndProcessHeading}
      tableData={processedTableData}
    />,
  ];
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
          <div className={styles.totalAmount}>
            <Title>TOTAL CREDITS - REQUESTED VS PROCESSED</Title>
            <div className={styles.amountBoxContainer}>
              <AmountBox minWidth="200px">85 200</AmountBox>
              <AmountBox minWidth="200px">85 200</AmountBox>
            </div>
          </div>
          <div className={styles.totalAmount}>
            <Title>TOTAL CASH VALUE - REQUESTED VS PROCESSED</Title>
            <div className={styles.amountBoxContainer}>
              <AmountBox minWidth="200px">85 200</AmountBox>
              <AmountBox minWidth="200px">85 200</AmountBox>
            </div>
          </div>
          <div className={styles.totalAmount}>
            <Title>No. of Request</Title>
            <div className={styles.amountBoxWrapper}>
              <AmountBox minWidth="250px">13</AmountBox>
            </div>
            <Title>No. of Processed</Title>
            <div className={styles.amountBoxWrapper}>
              <AmountBox minWidth="250px">13</AmountBox>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={styles.buttonContainer}>
        {buttons.map((el, i) => (
          <button
            className={`${styles.button} ${
              i === activeTable && styles.activeButton
            }`}
            key={i}
            onClick={() => setActiveTable(i)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className={styles.bar}></div>
      {tables[activeTable]}
    </div>
  );
};

export default PopConfirmation;
