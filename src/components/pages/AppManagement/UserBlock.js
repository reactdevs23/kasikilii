import React, { useState } from "react";
import { AmountBox, Button, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

const UserBlock = () => {
  const [userBlockEnable, setUserBlockEnable] = useState("");
  const [userUnings, setUserUnings] = useState("");

  const [values, setValues] = useState({
    mobileNumber: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const userBlockDropDownItems = ["Enable", "Disable"];

  const userUningsDropDownItems = ["10%", "20%", "70%"];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div>
        <h4 className={styles.title}>USER BLOCK </h4>

        <form action="">
          <Title>MOBILE NUMBER</Title>
          <Input
            name="mobileNumber"
            value={values["mobileNumber"]}
            onChange={onChange}
          />

          <DropDownComponent
            title="ENABLE / DISABLE"
            items={userBlockDropDownItems}
            value={userBlockEnable}
            setValue={setUserBlockEnable}
          />
          <div className={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Process</Button>
          </div>
        </form>
      </div>
      <div>
        <h4 className={styles.title}>SET PROBABILTY </h4>

        <DropDownComponent
          title="USER WINING ODDS"
          items={userUningsDropDownItems}
          value={userUnings}
          setValue={setUserUnings}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleSubmit}>Process</Button>
        </div>
      </div>
      <Title>TOTAL BALANCE - USERS</Title>
      <AmountBox>80 000</AmountBox>
    </form>
  );
};

export default UserBlock;
