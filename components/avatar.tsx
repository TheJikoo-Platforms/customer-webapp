import { cn } from "@/lib/utils";
import React from "react";

interface AvatarProps {
  firstname: string;
  lastname: string;
  className: string;
}

const Avatar: React.FC<AvatarProps> = ({ firstname, lastname, className }) => {
  const initials = `${firstname.charAt(0).toUpperCase()}${lastname
    .charAt(0)
    .toUpperCase()}`;

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-jikoo-brand-green text-white rounded-full border-2 border-white font-semibold lg:font-black",
        className
      )}
    >
      {initials}
    </div>
  );
};

export default Avatar;
