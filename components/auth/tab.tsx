import React from "react";

export interface ITabOptions {
  option: string;
  text: string;
}

export interface ITab {
  authOption: string;
  setAuthOption: (option: string) => void;
  tabOptions: ITabOptions[];
}

const Tab = ({ authOption, setAuthOption, tabOptions }: ITab) => {
  return (
    <div className="grid grid-cols-2 w-full mb-3 border-b border-b-grey-200">
      {tabOptions.map((item) => (
        <button
          onClick={() => setAuthOption(item.option)}
          className={`text-sm font-medium text-center transition-all py-4 relative after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:transition-all after:content-[''] after:duration-300 ${
            item.option === authOption
              ? "text-jikoo-brand-green after:bg-jikoo-brand-green after:w-full"
              : "text-grey-700 after:bg-grey-200 after:w-0"
          }`}
          key={item.option}
          type="button"
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default Tab;
