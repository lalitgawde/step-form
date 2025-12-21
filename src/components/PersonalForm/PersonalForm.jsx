import React, { useState } from "react";
import styles from "./PersonalForm.module.css";
import eyeIcon from "../../assets/eye.png";
import hiddenEyeIcon from "../../assets/hidden.png";

const INTIALDATA = {
  fullName: "",
  email: "",
  gender: "",
  password: "",
};

// const NO_OF_FIELDS = Object.keys(INTIALDATA).length;

export default function PersonalForm({ setStepperDataHandler, allData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [enteredData, setEnteredData] = useState(
    Object.keys(allData).includes("personalData") &&
      Object.values(allData.personalData).length > 0
      ? allData.personalData
      : INTIALDATA
  );

  const onChangeHandler = (e) => {
    const enteredObj = {
      ...enteredData,
      [e.target.name]: e.target.value,
    };
    setEnteredData(enteredObj);
    setStepperDataHandler("personalData", enteredObj);
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          onChange={onChangeHandler}
          value={enteredData.fullName}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="email">Email ID</label>
        <input
          type="text"
          name="email"
          placeholder="Enter Email ID"
          onChange={onChangeHandler}
          value={enteredData.email}
        />
      </div>
      <div className={styles.subContainer} style={{ position: "relative" }}>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          onChange={onChangeHandler}
          value={enteredData.password}
        />
        <img
          src={showPassword ? hiddenEyeIcon : eyeIcon}
          onClick={() => setShowPassword(!showPassword)}
          className={styles.showpassword}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          placeholder="Select Gender"
          onChange={onChangeHandler}
          value={enteredData.gender}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}
