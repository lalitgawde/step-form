import React from "react";
import tickMarkIcon from "../../assets/tick.png";

export default function Step({ stepCount, activeStep, totalStep }) {
  return (
    <div className={`step ${stepCount === totalStep ? "noGrow" : ""}`}>
      <div
        className={`circle ${activeStep.includes(stepCount) ? "active" : ""}`}
      >
        {stepCount >= Math.max(...activeStep) ? stepCount : null}
        {stepCount < Math.max(...activeStep) && (
          <img
            src={tickMarkIcon}
            alt="tick mark"
            style={{ width: "15px", height: "15px", color: "white" }}
          />
        )}
      </div>
      {stepCount < totalStep && (
        <div
          className={`line ${activeStep.includes(stepCount) ? "active" : ""}`}
        ></div>
      )}
    </div>
  );
}
