import React, { useState } from "react";
import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";
import SuccessPopup from "./SuccessPopup/SuccessPopup";
import Table from "./Table/Table";

const User = () => {
  const [criteria, setCriteria] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dropDownItems = ["Mobile no", "Status", "Region", "Request Status"];
  const [file, setFile] = useState("");
  const [modal, setModal] = useState(false);

  const searchFunction = (e) => {
    setSearchValue(e.target.value);
  };

  const [values, setValues] = useState({
    dateFrom: "",
    dateTo: "",
  });

  const datesInput = [
    {
      label: "Date From:",
      type: "date",
      name: "dateFrom",
      placeholder: "dd-mm-yyyy",
      pattern: "d{1,2}-d{1,2}-d{4}",
    },
    {
      label: "Date To:",
      type: "date",
      name: "dateTo",
      placeholder: "dd-mm-yyyy",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const data = [
    { title: "TOTAL  BALANCE - USERS", value: "65000" },
    { title: "NUMBER OF  REGISTERED USERS", value: "2000" },
    { title: "TOTAL CASH OUT REQUEST  - N$", value: "2880" },
    { title: "TOTAL USER S CASHING OUT ", value: "32" },
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

        <div className={styles.details}>
          {datesInput.map((input, i) => (
            <Input
              {...input}
              key={i}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <div className={styles.updateBox}>
            <label for="file" className={styles.fileLabel}>
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
              <label for="file" className={styles.upDateButton}>
                MASS UPDATE
              </label>{" "}
              <button
                onClick={() => setModal((prev) => !prev)}
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
      {modal && <SuccessPopup setModal={setModal} />}
    </div>
  );
};

export default User;
