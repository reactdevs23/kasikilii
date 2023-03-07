import React, { useState } from "react";
import { AmountBox, Button, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

const DistributorBlock = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [distorBlockEnable, setDistorBlockEnable] = useState("");
  const [gameStatusEnable, setgameStatusEnable] = useState("");
  const [values, setValues] = useState({
    mobileNumber: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const distorBlockDrropDownItems = ["Enable", "Disable"];
  const gameStatusDownItems = ["Enable", "Disable"];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div>
        <h4 className={styles.title}>DISTRIBUTOR BLOCK </h4>

        <Title>MOBILE NUMBER</Title>
        <Input
          name="mobileNumber"
          value={values["mobileNumber"]}
          onChange={onChange}
        />

        <DropDownComponent
          title="ENABLE / DISABLE"
          items={distorBlockDrropDownItems}
          value={distorBlockEnable}
          setValue={setDistorBlockEnable}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleSubmit}>Process</Button>
        </div>
      </div>
      <div>
        <h4 className={styles.title}>GAME STATUS </h4>

        <DropDownComponent
          title="ENABLE / DISABLE"
          items={gameStatusDownItems}
          value={gameStatusEnable}
          setValue={setgameStatusEnable}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleSubmit}>Process</Button>
        </div>
      </div>
      <Title>TOTAL BALANCE - DISTRIBUTORS</Title>
      <AmountBox>200 000</AmountBox>
    </form>
  );
};

export default DistributorBlock;
