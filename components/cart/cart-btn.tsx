import React from "react";

export const CartBtn = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className=" size-6 sm:size-7 md:size-9 hover:text-white bg-primary text-white overflow-hidden relative flex justify-center items-center rounded-full shadow transition-transform after:absolute after:inset-0 after:bg-black/30 after:scale-0 hover:after:scale-100 after:transition-transform after:rounded-full after:duration-300"
    >
      {children}
    </button>
  );
};
