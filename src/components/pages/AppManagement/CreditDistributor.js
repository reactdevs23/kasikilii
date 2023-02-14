import React, { useState } from "react";
import { Button, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

const CreditDistributor = () => {
  const [region, setRegion] = useState("");
  const [values, setValues] = useState({
    mobileNumber: "",
    email: "",
    surname: "",
    NAME: "",
    distributorCode: "",
  });
  const inputs = [
    {
      title: "MOBILE NUMBER",
      type: "text",
      name: "mobilenumber",
    },
    {
      title: "EMAIL",
      type: "email",
      name: "email",
    },
    {
      title: "SURNAME",
      type: "text",
      name: "surname",
    },
    {
      title: "NAME",
      type: "text",
      name: "name",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const dropDownItems = [
    "Zambezi",
    "Erongo",
    "Hardap",
    "Karas",
    "Kavango West",
    "Kavango East",
    "Khomas",
    "Kunene",
    "Ohangwena",
    "Omaheke",
    "Otjozondjupa",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <h4 className={styles.title}>CREATE DISTRIBUTOR </h4>

      <div>
        {inputs.map((el, i) => (
          <div key={i}>
            <Title>{el.title}</Title>
            <Input {...el} value={values[el.name]} onChange={onChange} />
          </div>
        ))}
        <DropDownComponent
          title="REGION"
          items={dropDownItems}
          value={region}
          setValue={setRegion}
        />
        <Button onClick={(e) => handleSubmit(e)}>CREATE</Button>
        <div className={styles.inputContainer}>
          <Title>DISTRIBUTOR CODE</Title>
          <Input
            name="distributorCode"
            value={values["distributorCode"]}
            type="text"
            onChange={onChange}
          ></Input>
        </div>
        <Button onClick={(e) => handleSubmit(e)}>Reset Disto Pass</Button>
      </div>
    </form>
  );
};

export default CreditDistributor;
