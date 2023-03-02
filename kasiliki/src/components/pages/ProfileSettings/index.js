import React, { useState } from "react";
import { Button, Title } from "../../common.styled";
import Input from "../../Input/Input";
import CheckBox from "./CheckBox/Checkbox";
import styles from "./styles.module.css";

const ProfileSetting = () => {
  const [userTab, setUserTab] = useState(false);
  const [distributorTab, setDistributorTab] = useState(false);
  const [appManagement, setAppManagement] = useState(false);
  const [values, setValues] = useState({
    oldpassword: "",
    newpassword: "",
    name: "",
    surname: "",
    email: "",
    mobilenumber: "",
  });
  const headingData = [
    { key: "ADMIN NAME:", value: "LLEWELLYN MOTINGA" },
    { key: "TAB ACCESS:", value: "USER ; DISTRIBUTOR ; APP MANAGEMNET " },
  ];
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
      <form className={styles.inputWrapper}>
        <div>
          {passwordInputs.map((el, i) => (
            <div className={styles.inputContainer} key={i}>
              <Input {...el} value={values[el.name]} onChange={onChange} />
            </div>
          ))}
          <Button onClick={handleSubmit} width="100%" type="submit">
            CHANGE PASSWORD
          </Button>
        </div>
        <div>
          {detailsInput.map((el, i) => (
            <div className={styles.inputContainer} key={i}>
              <Input {...el} value={values[el.name]} onChange={onChange} />
            </div>
          ))}
        </div>
        <div>
          <h4 className={styles.title}>LEVEL ( TAB) ACCESS</h4>
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
              label="APP MANAGEMENT"
              checked={appManagement}
              setChecked={setAppManagement}
            />
          </div>
          <Button onClick={handleSubmit} width="100%">
            CREATE ADMIN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
