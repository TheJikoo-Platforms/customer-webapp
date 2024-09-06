import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    display: "flex",
    height: "2.5rem", // h-10
    width: "100%", // w-full
    fontFamily: "inherit", // font-medium
    borderRadius: "0.625rem", // rounded
    borderWidth: "1px", // border
    borderColor: "rgba(0, 0, 0, 0.6)", // border-black/60
    backgroundColor: "var(--primary)", // bg-background
    // padding: "0.75rem 1rem", // px-3 py-2
    outline: "none",
    fontSize: "0.875rem", // text-xs
    boxShadow: "0 0 0 2px var(--ring), 0 0 0 4px var(--background)", // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "inherit", // file:font-medium
    fontSize: "0.875rem", // file:text-sm
    color: state.isSelected ? "#fff" : "#000", // placeholder:text-muted-foreground
    backgroundColor: state.isSelected ? "rgba(var(--primary))" : "", // cover file:bg-transparent
    borderWidth: "0 0 1px 0", // file:border-0
    // border: '0'
  }),
};

export interface SearchSelectProps {
  options: string[];
  value: string | null;
  onChange: (value: string) => void;
}

export const SearchSelect: React.FC<SearchSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  // Map strings to objects
  const mappedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  // Find the selected option object
  const selectedOption =
    mappedOptions.find((option) => option.value === value) || null;

  // Handle change event
  const handleChange = (option: any) => {
    onChange(option ? option.value : null);
  };
  return (
    <div className="[&_span]:hidden">
      <Select
        options={mappedOptions}
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        defaultValue={mappedOptions[0]}
        placeholder=""
      />
    </div>
  );
};
