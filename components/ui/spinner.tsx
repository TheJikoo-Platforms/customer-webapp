import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="lds-ring inline-block relative w-20 h-20 text-[#379E66]">
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
      <div className="lds-ring-child"></div>
    </div>
  );
};

export default Spinner;
