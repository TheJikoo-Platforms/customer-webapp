import React from "react";

interface customTabProps {
  label: string;
  amount?: string | number;
  active: boolean;
}

export const CustomTab = ({
  label,
  amount,
  active,
  ...props
}: customTabProps) => {
  return (
    <div
      className={`p-4 border-b ${
        active ? "border-primary" : "border-[#E4E7EC]"
      } flex-row items-center gap-2 `}
      {...props}
    >
      <p
        className={`text-sm font-dmsan-bold  ${
          active ? "text-primary" : "text-[#344054]"
        }`}
      >
        {label}
      </p>

      {amount && (
        <div
          className={`px-2  ${
            active ? "bg-primary " : "bg-[#F0F2F5]"
          } rounded-l-full rounded-r-full justify-center`}
        >
          <span
            className={`text-xs font-dmsans-regular ${
              active ? "text-white" : ""
            } `}
          >
            {amount}
          </span>
        </div>
      )}
    </div>
  );
};

// export  custom-tab
