"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "./toggle-theme";
import { WideWrapper } from "./wrappers";
import { Nav } from "./nav";
import {
  ArrowDownIcon,
  BellIcon,
  WishListIconFilled,
  WishListIconStroke,
} from "./ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { setShowNotificationsOverlay } from "@/redux-store/slices/backdrop/notifications";
import { RootState } from "@/redux-store/store";
import { EnterLocation } from "./location/enter-location-button";
import { NavAccountIcon } from "./ui/icons/avatar";
import { usePathname } from "next/navigation";
import { TbSettings } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";
import { useTransitionRouter } from "next-view-transitions";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleShowNotifications = () => {
    dispatch(setShowNotificationsOverlay(true));
  };
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [isAccountDropped, setIsAccountDropped] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(mainRef, () => setIsAccountDropped(false));
  const pathname = usePathname();
  const activePath = pathname.slice(1).split("/").at(0);
  const router = useTransitionRouter();
  return (
    <header className="py-4 bg-jikoo-dark-green md:bg-primary-foreground fixed top-0 z-20 w-full left-0">
      <WideWrapper>
        <div className="flex items-center justify-between gap-3 md:gap-4 xl:gap-5">
          <div className="flex items-center gap-10">
            <Link href={"/"} className="hidden md:block">
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
            <EnterLocation className="flex rounded-full" />
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
              <div className="flex gap-5 items-center">
                <Link href="/wishlist" className="mt-0.5">
                  {activePath === "wishlist" ? (
                    <WishListIconFilled />
                  ) : (
                    <WishListIconStroke strokeFill=" fill-white md:fill-[#141414]" />
                  )}
                </Link>
                <button
                  onClick={handleShowNotifications}
                  type="button"
                  className="flex items-center relative"
                >
                  <BellIcon strokeFill=" fill-white md:fill-[#141414]" />
                  <div className="bg-[#BA3337] px-2 flex items-center rounded-full text-white text-[10px] font-medium absolute -top-1 -right-2">
                    2
                  </div>
                </button>

                <button
                  type="button"
                  className="hidden lg:flex items-center gap-0.5 text-grey-600 relative cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAccountDropped((prev) => !prev);
                  }}
                >
                  <NavAccountIcon />
                  <ArrowDownIcon />
                  {isAccountDropped && (
                    <div
                      ref={mainRef}
                      className="bg-white p-4 space-y-2 w-[150px] rounded-md absolute top-[56px] right-0 shadow-soft-large"
                    >
                      <Link
                        className="flex gap-3 text-sm text-grey-900 items-center"
                        href="/settings"
                      >
                        <TbSettings className="text-xl text-grey-500" />
                        Settings
                      </Link>

                      <button
                        type="button"
                        className="flex items-center gap-3 text-state-error-400 text-sm py-2"
                        onClick={() => {
                          localStorage.clear();
                          router.push("/login");
                        }}
                      >
                        <GoSignOut className="text-lg" />
                        Log out
                      </button>
                    </div>
                  )}
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
                    className="px-4 py-2 tracking-[1px] text-[10px] font-bold uppercase text-white md:text-jikoo-brand-green"
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
  );
};
