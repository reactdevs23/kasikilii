import React, { useState } from "react";
import { Button, Title } from "../../common.styled";
import Input from "../../Input/Input";
import CheckBox from "./CheckBox/Checkbox";
import styles from "./styles.module.css";

const ProfileSetting = () => {
  const [userTab, setUserTab] = useState(false);
  const [distributorTab, setDistributorTab] = useState(false);
  const [popConfirmation, setPopConfirmation] = useState(false);
  const [appManagement, setAppManagement] = useState(false);
  const [tickUpdate, setTickUpdate] = useState(false);
  const [downloadExcel, setDownloadExcel] = useState(false);
  const [popTransfer, setPopTransfer] = useState(false);

  const [values, setValues] = useState({
    oldpassword: "",
    newpassword: "",
    name: "",
    surname: "",
    email: "",
    mobilenumber: "",
    staffcode: "",
  });
  // const headingData = [
  //   { key: "ADMIN NAME:", value: "LLEWELLYN MOTINGA" },
  //   { key: "TAB ACCESS:", value: "USER ; DISTRIBUTOR ; APP MANAGEMNET " },
  // ];
  const passwordInputs = [
    {
      type: "password",
      placeholder: "Old Password",
      name: "oldpassword",
    },
    {
      type: "password",
      placeholder: "New Password",
      name: "newpassword",
    },
  ];
  const detailsInput = [
    {
      type: "text",
      placeholder: "Name",
      name: "name",
    },
    {
      type: "text",
      placeholder: "SURNAME",
      name: "surname",
    },
    {
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      type: "text",
      placeholder: "MOBILE NUMBER",
      name: "mobilenumber",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const headingData = [
    { key: "AGENT CODE:", value: "XP48585" },
    { key: "AGENT NAME:", value: "XLLEWELLYN MOTINGA" },
    { key: "ACCESS:", value: "KEETMANSHOOP" },
  ];
  return (
    <div>
      {" "}
      <div className={styles.header}>
        {headingData.map((el, i) => (
          <p className={styles.keyValue} key={i}>
            <span>{el.key}</span>
            <span className={styles.value}>{el.value}</span>
          </p>
        ))}
      </div>
      <h2 className={styles.heading}>PROFILE SETTINGS</h2>
      <div className={styles.infoContainer}>
        <div className={styles.keyContainer}>
          <Title>Name</Title> <Title>SURNAME</Title>{" "}
          <Title>EMAIL ADDRESS</Title> <Title>Name</Title>
        </div>
        <div>
          <Title fontWeight="500" fontFamily="'Quicksand'">
            LLEWELLYN
          </Title>{" "}
          <Title fontWeight="500" fontFamily="'Quicksand'">
            MOTINGA
          </Title>{" "}
          <Title fontWeight="500" fontFamily="'Quicksand'">
            llewellyn@mwaikange.com
          </Title>{" "}
          <Title fontWeight="500" fontFamily="'Quicksand'">
            +264 81 808 3704
          </Title>
        </div>
      </div>
      <div className={styles.staffCodeContainer}>
        <div></div>
        <div></div>
        <Input
          type="text"
          placeholder="STAFF CODE"
          value={values["staffcode"]}
          onChange={onChange}
        />
      </div>
      <form className={styles.inputWrapper}>
        <div className={styles.inputElement}>
          <div>
            {passwordInputs.map((el, i) => (
              <div className={styles.inputContainer} key={i}>
                <Input {...el} value={values[el.name]} onChange={onChange} />
              </div>
            ))}
            <Button
              onClick={handleSubmit}
              width="100%"
              type="submit"
              fontSize="16px"
            >
              CHANGE PASSWORD
            </Button>
          </div>
          <div>
            {detailsInput.map((el, i) => (
              <div className={styles.inputContainer} key={i}>
                <Input {...el} value={values[el.name]} onChange={onChange} />
              </div>
            ))}
            <Button onClick={handleSubmit} width="100%" fontSize="16px">
              CREATE STAFF ACCOUNT
            </Button>
          </div>
        </div>
        <div className={styles.levelTabAccess}>
          <h4 className={styles.title}>LEVEL ( TAB) ACCESS</h4>
          <div className={styles.checkBoxWrapper}>
            <div className={styles.checkboxContainer}>
              <CheckBox
                checked={userTab}
                setChecked={setUserTab}
                label="USER  TAB"
              />
              <CheckBox
                label="DISTRIBUTOR  TAB"
                checked={distributorTab}
                setChecked={setDistributorTab}
              />
              <CheckBox
                label="PoP CONFIRMATONS"
                checked={popConfirmation}
                setChecked={setPopConfirmation}
              />
              <CheckBox
                label="APP MANAGEMENT"
                color="#E53535"
                paddingTop="30px"
                checked={appManagement}
                setChecked={setAppManagement}
              />
            </div>
            <div className={styles.checkboxContainer}>
              {" "}
              <CheckBox
                checked={tickUpdate}
                setChecked={setTickUpdate}
                label="TICK UPDATE"
              />
              <CheckBox
                label="DOWNLOAD EXCEL"
                checked={downloadExcel}
                setChecked={setDownloadExcel}
              />
              <CheckBox
                label="PoP - TRANSFER"
                checked={popTransfer}
                setChecked={setPopTransfer}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              onClick={handleSubmit}
              width="100%"
              padding="12px 14px"
              fontSize="14px"
            >
              UPDATE PRIVILEGES
            </Button>
            <Button
              onClick={handleSubmit}
              width="100%"
              background="#E63535"
              padding="12px 5px"
              fontSize="14px"
              boxShadow="0px 0px 25px #E63535"
            >
              FREEZE STAFF ACCOUNT
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
