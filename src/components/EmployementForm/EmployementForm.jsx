import React, { useState } from "react";
import styles from "./EmployementForm.module.css";

const INTIALDATA = {
  companyname: "",
  position: "",
  expirence: "",
  skills: "",
};

// const NO_OF_FIELDS = Object.keys(INTIALDATA).length;

export default function EmployementForm({ setStepperDataHandler, allData }) {
  const [enteredEmployementData, setEnteredEmployementData] = useState(
    Object.keys(allData).includes("employementData") &&
      Object.values(allData.employementData).length > 0
      ? allData.employementData
      : INTIALDATA
  );

  const onChangeHandler = (e) => {
    const enteredObj = {
      ...enteredEmployementData,
      [e.target.name]: e.target.value,
    };
    setEnteredEmployementData(enteredObj);
    setStepperDataHandler("employementData", enteredObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <label htmlFor="companyname">Company Name</label>
        <input
          type="text"
          name="companyname"
          placeholder="Enter Company Name"
          value={enteredEmployementData.companyname}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          placeholder="Enter Position/Department"
          value={enteredEmployementData.position}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="expirence">Expirence</label>
        <select
          name="expirence"
          placeholder="Select Expirence"
          value={enteredEmployementData.expirence}
          onChange={onChangeHandler}
        >
          <option value="0-3">0-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="skills">Required Skills</label>
        <textarea
          name="skills"
          placeholder="Enter Skills"
          rows={5}
          value={enteredEmployementData.skills}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
