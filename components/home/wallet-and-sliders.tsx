import React from "react";
import WalletCard from "./wallet-card";
import SliderCard from "./slider-card";

const WalletAndSlider = () => {
  return (
    <div className="pl-6 pt-3 flex gap-4">
      <WalletCard />
      <SliderCard />
    </div>
  );
};

export default WalletAndSlider;
