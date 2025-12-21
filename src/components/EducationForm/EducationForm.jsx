import React, { useState } from "react";
import styles from "./EducationForm.module.css";

const INTIALDATA = {
  qualification: "",
  department: "",
  institute: "",
  grade: "",
};

// const NO_OF_FIELDS = Object.keys(INTIALDATA).length;

export default function EducationForm({ setStepperDataHandler, allData }) {
  const [enteredEducationData, setEnteredEducationData] = useState(
    Object.keys(allData).includes("educationData") &&
      Object.values(allData.educationData).length > 0
      ? allData.educationData
      : INTIALDATA
  );

  const onChangeHandler = (e) => {
    const enteredObj = {
      ...enteredEducationData,
      [e.target.name]: e.target.value,
    };
    setEnteredEducationData(enteredObj);
    setStepperDataHandler("educationData", enteredObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <label htmlFor="qualification">Highest Qualification</label>
        <select
          name="qualification"
          placeholder="Select Highest Qualification"
          onChange={onChangeHandler}
          value={enteredEducationData.qualification}
        >
          <option value="PostGraduation">Post Graduation</option>
          <option value="Graduation">Graduation</option>
          <option value="Diploma">Diploma</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="department">Department</label>
        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={enteredEducationData.department}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="institute">Institute Name</label>
        <input
          type="text"
          name="institute"
          placeholder="Enter Institute Name"
          value={enteredEducationData.institute}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="grade">Grade / Percentage</label>
        <input
          type="text"
          name="grade"
          placeholder="Enter Grade"
          value={enteredEducationData.grade}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
