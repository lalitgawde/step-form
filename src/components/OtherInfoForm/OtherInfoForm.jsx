import React, { useState } from "react";
import styles from "./OtherInfoForm.module.css";

const INTIALDATA = {
  phoneNumber: "",
  birthDay: "",
  address: "",
};

// const NO_OF_FIELDS = Object.keys(INTIALDATA).length;

export default function OtherInfoForm({
  onCancel,
  allData,
  setStepperDataHandler,
}) {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [enteredOtherInfoData, setEnteredOtherInfoData] = useState(
    Object.keys(allData).includes("otherInfo") &&
      Object.values(allData.otherInfo).length > 0
      ? allData.otherInfo
      : INTIALDATA
  );

  const onChangeHandler = (e) => {
    const enteredObj = {
      ...enteredOtherInfoData,
      [e.target.name]: e.target.value,
    };
    setEnteredOtherInfoData(enteredObj);
    setStepperDataHandler("otherInfo", enteredObj);
  };

  const onSubmitHandler = () => {
    console.log("allData", allData);
  };
  return (
    <div className={styles.container}>
      <div className={styles.otherInfoFormRow}>
        <div className={styles.subContainer} style={{ width: "50%" }}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={enteredOtherInfoData.phoneNumber}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.subContainer} style={{ width: "50%" }}>
          <label htmlFor="birthDay">BirthDay</label>
          <input
            type="date"
            name="birthDay"
            placeholder="Enter BirthDay"
            value={enteredOtherInfoData.birthDay}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className={styles.subContainer}>
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          placeholder="Enter Address"
          rows={5}
          value={enteredOtherInfoData.address}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.terms}>
        <input
          type="checkbox"
          name="terms"
          checked={isTermsChecked}
          onChange={() => setIsTermsChecked(!isTermsChecked)}
        />
        &nbsp;
        <label htmlFor="terms">
          I agree to the Terms and Conditions and Privacy Policy
        </label>
      </div>
      <div className={styles.actions} style={{ textAlign: "left" }}>
        <button className={styles.cancleButton} onClick={onCancel}>
          Cancel
        </button>
        <button
          className={styles.submitButton}
          disabled={
            !(
              isTermsChecked &&
              !Object.values(enteredOtherInfoData).filter(
                (val) => val.trim() === ""
              ).length > 0
            )
          }
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
