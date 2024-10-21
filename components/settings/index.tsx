"use client";
import React, { useEffect, useState } from "react";
import { SettingsHome } from "./settings-home";
import { Profile } from "./profile";
import { useMediaQuery } from "react-responsive";
import { Address } from "./address";
import { Promo } from "./promo";
import { DeleteAccount } from "./delete-account";

const Settings = () => {
  const [activeScreen, setActiveScreen] = useState("home");
  const handleActiveScreen = (screen: string) => {
    setActiveScreen(screen);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  useEffect(() => {
    if (isMobile) {
      setActiveScreen("home");
    } else {
      setActiveScreen("profile");
    }
  }, [isMobile]);
  return (
    <div className="bg-white min-h-screen md:min-h-[700px] pb-[125px] md:grid md:grid-cols-2 md:gap-4 md:bg-transparent md:mt-6 md:px-6 max-w-[972px] justify-center lg:grid-cols-[468px,480px] mx-auto">
      <div
        className={`${
          isMobile && activeScreen === "home" ? "block" : "hidden md:block"
        }`}
      >
        <SettingsHome handleActiveScreen={handleActiveScreen} />
      </div>
      <div className={`${activeScreen === "profile" ? "block" : "hidden"}`}>
        <Profile handleActiveScreen={handleActiveScreen} />
      </div>
      <div className={`${activeScreen === "addresses" ? "block" : "hidden"}`}>
        <Address handleActiveScreen={handleActiveScreen} />
      </div>
      <div className={`${activeScreen === "promo codes" ? "block" : "hidden"}`}>
        <Promo handleActiveScreen={handleActiveScreen} />
      </div>
      <div className={`${activeScreen === "delete" ? "block" : "hidden"}`}>
        <DeleteAccount handleActiveScreen={handleActiveScreen} />
      </div>
    </div>
  );
};

export default Settings;
