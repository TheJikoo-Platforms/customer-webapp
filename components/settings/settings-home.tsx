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
    const handleNavigate = (linkName: string) => {
      if (
        linkName.toLowerCase() === "support" ||
        linkName.toLowerCase() === "about us"
      ) {
        console.log("Coming Soon");
      } else {
        handleActiveScreen(linkName.toLowerCase());
      }
    };
    return (
      <section className="bg-white rounded-xl md:pb-20 h-full">
        <InnerHeaderMain text="Account" className="md:hidden" />
        <h2 className="text-black text-xl font-bold tracking-[-0.48px] hidden md:block px-5 pt-4">
          Settings
        </h2>
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
          <div className="px-5 py-4 md:pt-5">
            <div className="md:flex md:items-center gap-4">
              <Image
                src="/avatar.png"
                height={100}
                width={100}
                alt="User Picture"
                className="w-16 h-16 rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
                  backgroundColor: "",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="">
                <p className="text-xl md:text-base text-black font-bold tracking-[-0.4px] md:tracking-normal mt-6 md:mt-0 uppercase md:capitalize">
                  Adewale Adedamola
                </p>
                <p className="hidden md:block text-grey-500 text-sm">
                  adewale@gmail.com
                </p>
                <p className="text-black mb-5 md:mb-0 md:text-grey-500 md:text-sm">
                  +2348103567483
                </p>
              </div>
            </div>

            <div className="md:mt-8">
              {LINKS.map((link, index) => (
                <button
                  type="button"
                  onClick={() => {
                    handleNavigate(link.name);
                  }}
                  className="text-black text-sm flex items-center gap-2 px-1.5 py-[9px]"
                  key={index}
                >
                  <span className="text-grey-400">{link.icon}</span> {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
);
