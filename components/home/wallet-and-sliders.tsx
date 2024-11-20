import React from "react";
import WalletCard from "./wallet-card";
import SliderCard from "./slider-card";

const WalletAndSlider = () => {
  return (
    <div className="md:pl-6 md:pt-3 flex flex-col md:flex-row gap-4 overflow-hidden">
      <WalletCard />
      <SliderCard />
    </div>
  );
};

export default WalletAndSlider;
