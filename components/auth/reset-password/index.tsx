"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StepOneForm } from "./step-one";
import { StepTwoForm } from "./step-two";
import { StepThreeForm } from "./step-three";
import { StepFourForm } from "./step-four";
export default function ResetPasswordUI() {
  const [step, setStep] = useState(1);
  const handleNextStep = useCallback((nextStep: number) => {
    setStep(nextStep);
  }, []);
  const [stepOneData, setStepOneData] = useState("");

  const submitStepOne = useCallback((data: string) => {
    setStepOneData(data);
  }, []);

  return (
    <div>
      {step === 1 && (
        <StepOneForm handleNextStep={handleNextStep} onSubmit={submitStepOne} />
      )}
      {step === 2 && (
        <StepTwoForm
          handleNextStep={handleNextStep}
          stepOneData={stepOneData}
        />
      )}
      {step === 3 && (
        <StepThreeForm
          handleNextStep={handleNextStep}
          stepOneData={stepOneData}
        />
      )}
      {step === 4 && <StepFourForm handleNextStep={handleNextStep} />}
    </div>
  );
}
