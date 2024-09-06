import React from 'react';

interface customTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  amount?: string | number;
  active: boolean;
}

export const CustomTab = ({ label, amount, active, ...props }: customTabProps) => {
  return (
    <button
      className={`p-4 border-b ${
        active ? "border-primary" : "border-[#E4E7EC]"
      } flex items-center gap-2 `}
      {...props}
    >
      <span
        className={`text-sm font-bold  ${
          active ? "text-primary" : "text-[#344054]"
        }`}
      >
        {label}
      </span>

      {amount && (
        <div
          className={`px-2  ${
            active ? "bg-primary text-white" : "bg-[#F0F2F5]"
          } rounded-l-full rounded-r-full justify-center text-xs `}
        >
            {amount}
        </div>
      )}
    </button>
  );
};

// export  custom-tab
