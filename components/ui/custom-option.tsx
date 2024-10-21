import Image from "next/image";
import React from "react";
import { components } from "react-select";

// Custom Option component
export const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center">
        <img
          src={props.data.src}
          alt={props.data.label}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        {props.data.label}
      </div>
    </components.Option>
  );
};

export const CustomSingleValue = (props: any) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center">
        <img
          src={props.data.src}
          alt={props.data.label}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        {props.data.label}
      </div>
    </components.SingleValue>
  );
};

export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: "8px",
    borderColor: "#D0D5DD",
    borderRadius: "6px",
    boxShadow: "none",
    textAlign: "left",
    "&:hover": {
      borderColor: "#D0D5DD99",
    },
  }),
  //   option: (provided: any) => ({
  //     ...provided,
  //     padding: "16px",
  //   }),
};
