"use client";
import React, { useState } from "react";
import { SettingsHome } from "./settings-home";
import { Profile } from "./profile";

const Settings = () => {
  const [activeScreen, setActiveScreen] = useState("home");
  const handleActiveScreen = (screen: string) => {
    setActiveScreen(screen);
  };
  return (
    <div className="bg-white min-h-screen pb-[125px]">
      {activeScreen === "home" && (
        <SettingsHome handleActiveScreen={handleActiveScreen} />
      )}
      {activeScreen === "profile" && (
        <Profile handleActiveScreen={handleActiveScreen} />
      )}
    </div>
  );
};

export default Settings;
