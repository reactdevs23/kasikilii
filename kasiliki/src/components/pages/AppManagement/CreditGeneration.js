import React, { useState } from "react";
import { Title, Button, AmountBox } from "../../common.styled";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

const CreditGeneration = () => {
  const [values, setValues] = useState({
    creditGenerationamount: "",
    distributorcode: "",
    creditTransferAmount: "",
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <h3 className={styles.title}>CREDIT GENERATION</h3>
      <div className={styles.generateAmount}>
        <Title>TYPE AMOUNT</Title>
        <Input
          type="text"
          name="creditGenerationamount"
          value={values["creditGenerationamount"]}
          onChange={onChange}
        />
        <Button onClick={handleSubmit}>GENERATE</Button>
      </div>
      <div className={styles.availableContainer}>
        <h3 className={styles.title}>AVAILABLE CREDITS</h3>
        <AmountBox>15 000 000</AmountBox>
      </div>
      <h3 className={styles.title}>CREDIT TRANSFERS</h3>
      <div className={styles.inputContainer}>
        <Title padding="0 0">DISTRIBUTOR CODE</Title>
        <Input
          type="text"
          name="distributorcode"
          value={values["distributorcode"]}
          onChange={onChange}
        />
      </div>{" "}
      <div className={styles.inputContainer}>
        <Title padding="0 0">TYPE AMOUNT </Title>
        <Input
          type="text"
          name="creditTransferAmount"
          value={values["creditTransferAmount"]}
          onChange={onChange}
        />
      </div>
      <Button onClick={handleSubmit}>TRANSFER</Button>
    </form>
  );
};

export default CreditGeneration;
