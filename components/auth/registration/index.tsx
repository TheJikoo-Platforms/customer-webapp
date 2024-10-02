"use client";
import React, { useCallback, useState } from "react";
import { StepOneForm } from "./step-one";
import { StepFourForm, StepFourFormData } from "./step-four";
import { StepTwoForm } from "./step-two";
import { StepThreeForm } from "./step-three";
import { StepFiveForm } from "./step-five";
import { AccountCreated } from "./account-created";

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);
  const handleNextStep = useCallback((nextStep: number) => {
    setStep(nextStep);
  }, []);
  const [stepTwoData, setStepTwoData] = useState("");
  const [stepFourData, setStepFourData] = useState<StepFourFormData | null>(
    null
  );

  const submitStepTwo = useCallback((data: string) => {
    setStepTwoData(data);
  }, []);
  const submitStepFour = useCallback((data: StepFourFormData) => {
    setStepFourData(data);
  }, []);

  return (
    <div>
      {step === 1 && <StepOneForm handleNextStep={handleNextStep} />}
      {step === 2 && (
        <StepTwoForm handleNextStep={handleNextStep} onSubmit={submitStepTwo} />
      )}
      {step === 3 && (
        <StepThreeForm
          handleNextStep={handleNextStep}
          stepTwoData={stepTwoData}
        />
      )}
      {step === 4 && (
        <StepFourForm
          handleNextStep={handleNextStep}
          stepTwoData={stepTwoData}
          onSubmit={submitStepFour}
        />
      )}
      {step === 5 && stepFourData && (
        <StepFiveForm
          handleNextStep={handleNextStep}
          stepFourData={stepFourData}
        />
      )}
      {step === 6 && <AccountCreated />}
    </div>
  );
}
