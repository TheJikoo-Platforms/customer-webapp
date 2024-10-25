"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { MobileSheet } from "@/components/mobile-sheet";
import { ScrollWrapper } from "@/components/scroll-shadow";
import { ToggleTheme } from "./toggle-theme";
import { WideWrapper } from "./wrappers";
import { Nav } from "./nav";
import { ArrowDownIcon, BellIcon } from "./ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowNotificationsOverlay } from "@/redux-store/slices/backdrop/notifications";
import { RootState } from "@/redux-store/store";
import { EnterLocation } from "./location/enter-location-button";
import { NavAccountIcon } from "./ui/icons/avatar";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleShowNotifications = () => {
    dispatch(setShowNotificationsOverlay(true));
  };
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      <ScrollWrapper asChild>
        <header className=" py-4 bg-primary-foreground fixed top-0 z-20 w-full left-0">
          <WideWrapper>
            <div className="flex items-center justify-between gap-3 md:gap-4 xl:gap-5">
              {/* <div className="lg:hidden">
                <MobileSheet />
              </div> */}

              <div className="flex items-center gap-10">
                <Link href={"/"} className="">
                  <Image
                    alt="logo"
                    height={Logo.height}
                    width={Logo.width}
                    src={Logo.src}
                    className=" h-[20px] sm:h-[24.5px] w-auto"
                    quality={100}
                    priority
                  />
                </Link>
                <EnterLocation className="hidden lg:flex rounded-full" />
              </div>

              <div className="hidden md:block">
                <Nav />
              </div>

              <div className="flex lg:gap-5">
                <div className="max-lg:hidden">
                  <ToggleTheme />
                </div>

                {/* Decide what to display base on authentication */}

                {isAuthenticated ? (
                  <div className="flex gap-5">
                    <button
                      onClick={handleShowNotifications}
                      type="button"
                      className="flex items-center"
                    >
                      <BellIcon />
                      <div className="bg-jikoo-brand-green px-2 flex items-center rounded-full text-white text-[10px] font-medium">
                        2
                      </div>
                    </button>

                    <button
                      type="button"
                      className="hidden lg:flex items-center gap-0.5 text-grey-600"
                    >
                      <NavAccountIcon />
                      <ArrowDownIcon />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="hidden md:block">
                      <Button className="px-4 py-2 rounded-md">
                        <Link href={"/login"}>Login</Link>
                      </Button>
                    </div>
                    <div className="block md:hidden">
                      <Link
                        className="px-4 py-2 tracking-[1px] text-[10px] font-bold uppercase text-jikoo-brand-green"
                        href={"/login"}
                      >
                        Login
                      </Link>

                      <Button
                        className=" p-2.5 tracking-[1px] rounded text-[10px]"
                        asChild
                      >
                        <Link href={"/register"}>REGISTER</Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </WideWrapper>
        </header>
      </ScrollWrapper>
    </>
  );
};
