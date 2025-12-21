import React from "react";

export default function Step({ stepCount, activeStep, totalStep }) {
  return (
    <div className={`step ${stepCount === totalStep ? "noGrow" : ""}`}>
      <div
        className={`circle ${activeStep.includes(stepCount) ? "active" : ""}`}
      >
        {stepCount}
      </div>
      {stepCount < totalStep && (
        <div
          className={`line ${activeStep.includes(stepCount) ? "active" : ""}`}
        ></div>
      )}
    </div>
  );
}
