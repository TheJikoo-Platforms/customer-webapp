import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.png";

import { Button } from "@/components/ui/button";
import { MobileSheet } from "@/components/mobile-sheet";
import { Nav } from "@/components/nav";
import { WishlistButton } from "@/components/wishlist-button";
// import { BagButton } from "@/components/bag-button";
import { ScrollWrapper } from "@/components/scroll-shadow";
// import { AnnouncementBanner } from "@/components/announcement-banner";
import { Wallet } from "@/components/wallet";
// import { auth } from "@/auth";
// import { AccountDropdown } from "@/components/account-dropdown";
import { Suspense } from "react";
import { ToggleTheme } from "./toggle-theme";
import { PromoBanner } from "./home/promo-banner";

export const Header = async () => {
  // const session = await auth();
  return (
    <>
      <ScrollWrapper asChild>
        <header className=" py-4 bg-primary-foreground fixed top-0 z-30 w-full left-0">
          <div className="container flex items-center justify-between md:gap-4 xl:gap-5">
            <div className="flex items-center gap-5">
              <div className="lg:hidden">
                <MobileSheet />
              </div>
              <Link href={"/"} className="">
                <Image
                  alt="logo"
                  height={Logo.height}
                  width={Logo.width}
                  src={Logo.src}
                  className=" h-[22px] sm:h-[26.5px] w-auto"
                  quality={100}
                  priority
                />
              </Link>
              <div className="max-lg:hidden ml-[69px]">
                <Nav />
              </div>
            </div>
            <div className="flex items-center gap-2 xl:gap-5 max-sm:ml-auto">
              <div className="max-lg:hidden">
                <ToggleTheme />
              </div>
              {/* {session?.user && (
                <div className="flex gap-5 md:gap-6 items-center">
                  <Wallet />
                  <Link href={"/wishlist"}>
                    <WishlistButton />
                  </Link>
                  <Suspense>
                    <AccountDropdown />
                  </Suspense>
                  <Link href={"/cart"} className="max-sm:hidden">
                  <BagButton />
                </Link>
                </div>
              )}
              {!session?.user && (
                <div className=" flex items-center">
                  <Button variant={"link"} asChild className="text-sm">
                    <Link href={'/login'}>
                      LOGIN
                    </Link>
                  </Button>
                  <Button variant={"link"} asChild className="">
                    <Link href={"/login"}>LOGIN</Link>
                  </Button>
                  <Button className="max-sm:hidden " asChild>
                    <Link href={"/register"} className="">
                      REGISTER
                    </Link>
                  </Button>
                  <Button
                    className=" p-2.5 tracking-[10%] max-sm:rounded"
                    asChild
                  >
                    <Link
                      href={'/register'}
                      // className="sm:hidden"
                    >
                      REGISTER
                    </Link>
                  </Button>
                  <Wallet />
                </div>
              )} */}
            </div>
          </div>
        </header>
      </ScrollWrapper>
    </>
  );
};
