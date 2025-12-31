import React, { useState } from "react";
import Step from "./components/Step/Step";
import PersonalForm from "./components/PersonalForm/PersonalForm";
import EducationForm from "./components/EducationForm/EducationForm";
import EmployementForm from "./components/EmployementForm/EmployementForm";
import OtherInfoForm from "./components/OtherInfoForm/OtherInfoForm";

function App() {
  const [allData, setAllData] = useState({});
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState([1]);

  const onPreviousHandler = () => {
    if (!(step < 2)) {
      const newActiveStep = [...activeStep];
      newActiveStep.pop();
      setStep((step) => step - 1);
      setActiveStep(newActiveStep);
    }
  };

  const onNextHandler = () => {
    if (!(step > stepArray.length - 1)) {
      setStep((step) => step + 1);
      setActiveStep((activeStep) => [...activeStep, step + 1]);
    }
  };

  const onCancel = () => {
    setStep(1);
    setActiveStep([1]);
    setAllData({});
  };

  const setStepperDataHandler = (name, Data) => {
    setAllData((allData) => ({
      ...allData,
      [name]: Data,
    }));
  };

  const stepArray = [
    {
      stepCount: 1,
      stepName: "Personal Info",
      value: "personalData",
      component: (
        <PersonalForm
          setStepperDataHandler={setStepperDataHandler}
          allData={allData}
        />
      ),
    },
    {
      stepCount: 2,
      stepName: "Education Info",
      value: "educationData",
      component: (
        <EducationForm
          setStepperDataHandler={setStepperDataHandler}
          allData={allData}
        />
      ),
    },
    {
      stepCount: 3,
      stepName: "Employment Info",
      value: "employementData",
      component: (
        <EmployementForm
          setStepperDataHandler={setStepperDataHandler}
          allData={allData}
        />
      ),
    },
    {
      stepCount: 4,
      stepName: "Other Info",
      value: "otherInfo",
      component: (
        <OtherInfoForm
          setStepperDataHandler={setStepperDataHandler}
          allData={allData}
          onCancel={onCancel}
        />
      ),
    },
  ];

  let isNextEnabled =
    allData?.hasOwnProperty(stepArray[step - 1].value) &&
    Object.values(allData[stepArray[step - 1].value]).every(
      (value) => value.trim() !== ""
    );

  console.log("isNextEnabled", isNextEnabled);

  return (
    <div className="container">
      <div className="numbers">
        {stepArray.map((stepItem) => {
          return (
            <Step
              key={stepItem.stepName}
              stepCount={stepItem.stepCount}
              stepName={stepItem.stepName}
              activeStep={activeStep}
              totalStep={stepArray.length}
            />
          );
        })}
      </div>
      <div className="numbers" style={{ margin: "20px 0px 0px 0px" }}>
        {stepArray.map((stepItem) => {
          return <div key={stepItem.stepName}>{stepItem.stepName}</div>;
        })}
      </div>
      <div className="content">{stepArray[step - 1].component}</div>
      <div className="actions">
        <button onClick={onPreviousHandler} disabled={step < 2}>
          Previous
        </button>
        <button onClick={onNextHandler} disabled={step > 3 || !isNextEnabled}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
