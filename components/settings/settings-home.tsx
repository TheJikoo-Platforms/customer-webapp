"use client";
import React from "react";
import { InnerHeaderMain } from "../inner-page-header-mobile";
import { TbInfoHexagon } from "react-icons/tb";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsQuestionCircle } from "react-icons/bs";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { PiGiftLight } from "react-icons/pi";

const LINKS = [
  {
    name: "Profile",
    icon: <CiUser />,
  },
  {
    name: "Addresses",
    icon: <CiLocationOn />,
  },
  {
    name: "Promo Codes",
    icon: <PiGiftLight />,
  },
  {
    name: "About Us",
    icon: <TbInfoHexagon />,
  },
  {
    name: "Support",
    icon: <BsQuestionCircle />,
  },
];
export const SettingsHome = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const isAuthenticated = useAppSelector(
      (state: RootState) => state.auth.isAuthenticated
    );
    console.log(isAuthenticated);
    return (
      <div className="">
        <InnerHeaderMain text="Account" />

        {isAuthenticated ? (
          <div className="px-5 py-4 h-[calc(100dvh-61px)] min-h-[420px] flex items-center">
            <div className="w-full space-y-5">
              <div>
                <Image
                  src="/avatar-settings.png"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Avatar"
                  className="w-16 h-16 mx-auto"
                />

                <p className="text-sm text-black mt-8 mb-6 text-center">
                  Login or create your account
                </p>

                <Button
                  type="button"
                  className="w-full flex py-4 px-6 text-base"
                >
                  Login
                </Button>
              </div>

              <>
                {LINKS.slice(-2).map((link, index) => (
                  <p
                    className="text-black text-sm flex items-center gap-2 px-1.5 py-[9px]"
                    key={index}
                  >
                    <span className="text-grey-400">{link.icon}</span>{" "}
                    {link.name}
                  </p>
                ))}
              </>
            </div>
          </div>
        ) : (
          <div className="px-5 py-4">
            <Image
              src="/avatar.png"
              height={100}
              width={100}
              alt="User Picture"
              className="w-16 h-16 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
                backgroundColor: "#D4AFBD",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />

            <p className="text-xl text-black font-bold tracking-[-0.4px] mt-6">
              ADEWALE ADEDAMOLA
            </p>
            <p className="text-black mb-5">+2348103567483</p>

            <>
              {LINKS.map((link, index) => (
                <button
                  type="button"
                  onClick={() => handleActiveScreen(link.name.toLowerCase())}
                  className="text-black text-sm flex items-center gap-2 px-1.5 py-[9px]"
                  key={index}
                >
                  <span className="text-grey-400">{link.icon}</span> {link.name}
                </button>
              ))}
            </>
          </div>
        )}
      </div>
    );
  }
);
