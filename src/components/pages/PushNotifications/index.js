import React, { useState } from "react";
import { AmountBox, Title } from "../../common.styled";
import DropDownComponent from "../../DropDownComponent/DropDownComponent";
import Input from "../../Input/Input";
import styles from "./styles.module.css";

import Table from "./Table/Table";
import MyDatePicker from "../../DatePicker/DatePicker";

const PushNotifications = () => {
  const [criteria, setCriteria] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  const [message, setMessage] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [scheduled, setScheduled] = useState(true);

  const [day, setDay] = useState("");

  const criterias = [
    "All Users",
    "No Cash-in History",
    "Cash-in History Only",
    "No Cashout History",
    "Cashout History Only",
    "Incentive History",
    "No Incentive History",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const searchFunction = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className={styles.header}></div>
      <div className={styles.searchDatesTotal}>
        <div className={styles.contentBox}>
          <DropDownComponent
            title="Search Criteria"
            items={criterias}
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

          <h2 className={styles.title}>FROM</h2>

          <MyDatePicker date={startDate} setDate={setStartDate} label="Date" />
          <MyDatePicker
            label="Time"
            date={startTime}
            type="time"
            setDate={setStartTime}
          />
        </div>
        <div className={[styles.contentBox, styles.onceOfContainer].join(" ")}>
          {" "}
          <button className={styles.sendProcessButton}>SEND/ PROCESS</button>
          <div className={styles.spaceBetween}>
            <p className={styles.text}>ONCE OFF / NOW </p>
            <div
              onClick={() => setScheduled(false)}
              className={[
                styles.circle,
                !scheduled && styles.activeCircle,
              ].join(" ")}
            ></div>
          </div>
          <h2 className={styles.title}>To</h2>
          <MyDatePicker date={endDate} setDate={setEndDate} label="Date" />
          <MyDatePicker
            label="Time"
            date={endTime}
            type="time"
            setDate={setEndTime}
          />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.totalAmount}>
            <Title className={styles.amountTitle}>
              TOTAL NOTIFICATIONS IN QUEUE
            </Title>
            <AmountBox minWidth="100%">32</AmountBox>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.text}>SCHEDULED </p>
            <div
              onClick={() => setScheduled(true)}
              className={[styles.circle, scheduled && styles.activeCircle].join(
                " "
              )}
            ></div>
          </div>
          <h2 className={styles.title}>EVERY</h2>
          <div>
            <DropDownComponent
              title="CHOOSE DAY OF THE WEEK ( 4 WEEKS)"
              items={days}
              value={day}
              setValue={setDay}
            />
          </div>
          <MyDatePicker
            label="Time"
            date={scheduleTime}
            type="time"
            setDate={setScheduleTime}
          />
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.campaingBox}>
          <div className={styles.campaignNameContainer}>
            <label htmlFor="campaingname" className={styles.campaignName}>
              CAMPAIGN NAME
            </label>
            <input
              type="text"
              name="campaingname"
              id="campaingname"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className={styles.input}
            />
          </div>
          <textarea
            name="message"
            placeholder="Type message (320 characters)"
            rows="11"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textArea}
          ></textarea>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default PushNotifications;
