"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClockIcon, CircleAlert } from "lucide-react";
import { CheckCircleIcon, PhoneIcon } from "../ui/icons";
import Image from "next/image";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   ExclamationCircleIcon,
// } from "@heroicons/react/solid";

const steps = [
  { time: "8:00am", status: "Order Received", state: "finished" },
  { time: "8:10am", status: "Food Packaged", state: "finished" },
  { time: "8:20am", status: "Order Picked Up", state: "finished" },
  {
    time: "8:30am",
    status: "Delivery En-route",
    state: "ongoing",
    content: (
      <div className="flex items-start">
        <Image alt="" src="/avatar.png" className="block shrink-0 rounded-full border border-gray-300" width={32} height={32} quality={100} />
        <div className="text-[#344053] text-xs/5 grow ml-3 mr-1.5 ">
          Obayemi John has received your order
        </div>
        <div className="bg-[#5fc381] size-10 grid place-content-center rounded-full shrink-0">
          <PhoneIcon className="text-white size-[22.5px]" />
        </div>
      </div>
    ),
  },
  {  status: "Delivered", state: "pending", content: <p className="text-xs">23, Ajekota Enerhen Ph.</p> },
];

const GetStatusIcon = ({ state }: { state: string }) => {
  switch (state) {
    case "finished":
      return <CheckCircleIcon className=" text-primary" />;
    case "ongoing":
      return <div className="size-2.5 bg-primary" />;
    case "pending":
      return (
        <div className="size-[18px] border border-[#D0D5DD] rounded-full" />
      );
    default:
      return null;
  }
};

export const Timeline = () => {
  return (
    <div className="space-y-2.5">
      {steps.map((step, index) => (
        <div key={index} className="relative  min-h-[50px] flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-1 "
          >
            <div className="text-[#475467] w-[53px] shrink-0 mr-4 text-xs">
              {step?.time}
            </div>
            <div className="relative w-[18px]">
              <div className="size-[18px] flex justify-center items-center">
                {<GetStatusIcon state={step.state} />}
              </div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "calc(100% - 18px)" }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 top-[18px] w-px bg-gray-300"
                />
              )}
            </div>
            <div
              className={`ml-2 grow  ${
                step.state === "pending" ? "text-[#98A2B3]" : "text-[#101828]"
              }`}
            >
              <p className=" text-sm font-medium">{step.status}</p>
              <div className={`mt-2.5`}>{step?.content}</div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
