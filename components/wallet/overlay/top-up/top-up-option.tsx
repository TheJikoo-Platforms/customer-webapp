import React from "react";

export const TopUpOption = React.memo(
  ({
    label,
    icon,
    screenName,
    handleCurrentScreen,
    currentScreen,
  }: {
    label: string;
    screenName: string;
    icon: React.ReactNode;
    currentScreen: string;
    handleCurrentScreen: (screen: string) => void;
  }) => {
    return (
      <div
        onClick={() => handleCurrentScreen(screenName)}
        className="text-black text-sm cursor-pointer flex items-center justify-between border-b border-b-grey-100 py-5"
      >
        <div className="flex items-center gap-2">
          {icon}
          <p className="">{label}</p>
        </div>

        <span
          className={`w-5 h-5 border rounded-full flex justify-center items-center cursor-pointer transition-all ${
            currentScreen === screenName
              ? "border-jikoo-brand-green"
              : "border-grey-300"
          }`}
        >
          {currentScreen === screenName && (
            <span className="w-2.5 h-2.5 bg-jikoo-brand-green rounded-full"></span>
          )}
        </span>
      </div>
    );
  }
);
