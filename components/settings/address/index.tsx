import React, { useState } from "react";
import { SavedAddress } from "./saved";
import { AddAddress } from "./add";

export const Address = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const [currentScreen, setCurrentScreen] = useState("saved");
    const handleCurrentScreen = (screen: string) => {
      setCurrentScreen(screen);
    };
    return (
      <>
        {currentScreen === "saved" && (
          <SavedAddress
            handleCurrentScreen={handleCurrentScreen}
            handleActiveScreen={handleActiveScreen}
          />
        )}
        {currentScreen === "add" && (
          <AddAddress handleCurrentScreen={handleCurrentScreen} />
        )}
      </>
    );
  }
);
