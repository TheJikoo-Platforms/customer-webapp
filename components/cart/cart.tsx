"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { useState } from "react";
import { CartList } from "./cart-list";
import { DeliveryOption } from "./delivery-option";

const STEPS = [
  {
    id: "step 1",
    name: "Basket",
    complete: false,
  },
  {
    id: "step 2",
    name: "Delivery Options",
    complete: false,
  },
  {
    id: "step 3",
    name: "Payment",
    complete: false,
  },
];

export const Cart = () => {
  const router = useRouter();
  const [steps, setSteps] = useState(STEPS);
  const [currentStep, setCurrentStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const delta = currentStep - prevStep;

  const next = async () => {
    if (currentStep < STEPS.length - 1) {
      // if(currentStep === STEPS.length - 1)
      setSteps((prev) => {
        const state = [...prev];
        state[currentStep].complete = true;
        return [...state];
      });
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) {
      // if(currentStep === STEPS.length - 1)
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = () => {
    router.push("/profile");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-[10px] text-[8px] sm:text-xs md:text-base lg:text-xl  py-6">
        {steps.map((el, i) => (
          <div
            role="button"
            onClick={() => {
              setCurrentStep(i);
              setPrevStep(currentStep);
            }}
            className={` shadow-[2px_-2px_1px_0px_rgba(0,0,0,0.15)]  ${
              currentStep !== i
                ? !el.complete
                  ? "text-black/50 dark:text-[#8A8A8B]"
                  : "text-primary"
                : "text-black dark:text-white text-[10px] sm:text-sm md:text-lg lg:text-[22px] -translate-y-2"
            }`}
          >
            <div
              className={`${
                currentStep !== i
                  ? !el.complete
                    ? "bg-black/50 dark:bg-[#8A8A8B]"
                    : "bg-primary"
                  : "bg-jikoo-red"
              } h-[3px]`}
            />
            <h2 className="text-center py-1">
              {i + 1}.{el.name}
            </h2>
          </div>
        ))}
      </div>
      {currentStep === 0 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CartList next={next} />
        </motion.div>
      )}
      {currentStep === 1 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <DeliveryOption next={next} />
        </motion.div>
      )}
    </>
  );
};
