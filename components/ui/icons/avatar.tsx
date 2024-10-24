"use client";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import Image from "next/image";
import Avatar from "@/components/avatar";
import { cn } from "@/lib/utils";

export const NavAccountIcon = ({
  className = "w-6 h-6 lg:w-[38px] lg:h-[38px] text-sm",
}: {
  className?: string;
}) => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const user = useAppSelector((state: RootState) => state.user.user);

  return isAuthenticated ? (
    user?.image ? (
      <Image
        src={user.image}
        alt="User Image"
        width={640}
        height={640}
        className={cn(
          "rounded-full border-[2.363px] border-white bg-[#FFE7CC]",
          className
        )}
      />
    ) : (
      <Avatar
        className={className}
        firstname={user?.firstname || ""}
        lastname={user?.lastname || ""}
      />
    )
  ) : (
    <UserIcon />
  );
};

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <g clip-path="url(#clip0_18542_19180)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1992 3C9.43779 3 7.19922 5.23858 7.19922 8C7.19922 10.7614 9.43779 13 12.1992 13C14.9606 13 17.1992 10.7614 17.1992 8C17.1992 5.23858 14.9606 3 12.1992 3ZM9.19922 8C9.19922 6.34315 10.5424 5 12.1992 5C13.8561 5 15.1992 6.34315 15.1992 8C15.1992 9.65685 13.8561 11 12.1992 11C10.5424 11 9.19922 9.65685 9.19922 8Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1992 12C24.1992 18.6274 18.8266 24 12.1992 24L12.1833 24C5.56317 23.9914 0.199219 18.6221 0.199219 12C0.199219 5.37258 5.5718 0 12.1992 0C18.8266 0 24.1992 5.37258 24.1992 12ZM2.19922 12C2.19922 6.47715 6.67637 2 12.1992 2C17.7221 2 22.1992 6.47715 22.1992 12C22.1992 14.387 21.3629 16.5786 19.9673 18.2979C19.9262 18.2032 19.8793 18.1084 19.8266 18.0136C18.4705 15.5774 15.6509 13 12.1961 13C8.74139 13 5.92178 15.5774 4.56571 18.0136C4.51384 18.1068 4.46779 18.2001 4.42737 18.2932C3.03403 16.5747 2.19922 14.3848 2.19922 12ZM7.66765 20.8306C9.02764 21.5567 10.9084 21.9985 12.1896 22L12.1961 22C13.4816 22 15.3728 21.5661 16.7361 20.8442C17.4231 20.4804 17.8636 20.1019 18.0679 19.7742C18.2273 19.5187 18.2538 19.3003 18.0791 18.9864C16.9204 16.9048 14.6535 15 12.1961 15C9.73882 15 7.47191 16.9048 6.31323 18.9864C6.14761 19.2839 6.16991 19.4959 6.33231 19.7546C6.53886 20.0836 6.98142 20.4642 7.66765 20.8306Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_18542_19180">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.199219)"
        />
      </clipPath>
    </defs>
  </svg>
);
