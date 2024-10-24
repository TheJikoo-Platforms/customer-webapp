"use client";
import React, { useState } from "react";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";

export const LinkAccount = React.memo(
  ({
    handleCurrentScreen,
  }: {
    handleCurrentScreen: (screen: string) => void;
  }) => {
    const [currentStep, setCurrentStep] = useState("one");
    const handleCurrentStep = (step: string) => {
      setCurrentStep(step);
    };
    return (
      <>
        {currentStep === "one" && (
          <StepOne
            handleCurrentStep={handleCurrentStep}
            handleCurrentScreen={handleCurrentScreen}
          />
        )}
        {currentStep === "two" && (
          <StepTwo handleCurrentStep={handleCurrentStep} />
        )}
        {currentStep === "three" && (
          <StepThree handleCurrentStep={handleCurrentStep} />
        )}
        {currentStep === "four" && <StepFour />}
      </>
    );
  }
);
