import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { MobileSheet } from "@/components/mobile-sheet";
import { ScrollWrapper } from "@/components/scroll-shadow";
import { ToggleTheme } from "./toggle-theme";
import { IoLocationOutline } from "react-icons/io5";
import { UnstyledInput } from "./ui/unstyled-input";
import { cn } from "@/lib/utils";
import { WideWrapper } from "./wrappers";
import { Nav } from "./nav";
import { ArrowDownIcon, BellIcon } from "./ui/icons";

export const Header = async () => {
  return (
    <>
      <ScrollWrapper asChild>
        <header className=" py-4 bg-primary-foreground fixed top-0 z-30 w-full left-0">
          <WideWrapper>
            <div className="flex items-center justify-between gap-3 md:gap-4 xl:gap-5">
              <div className="lg:hidden">
                <MobileSheet />
              </div>

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

                <EnterLocation className="hidden md:flex rounded-full" />
              </div>

              <div className="max-lg:hidden">
                <Nav />
              </div>

              <div className="flex lg:gap-5">
                <div className="max-lg:hidden">
                  <ToggleTheme />
                </div>

                <button type="button" className="flex items-center">
                  <BellIcon />
                  <div className="bg-jikoo-brand-green px-2 flex items-center rounded-full text-white text-[10px] font-medium font-inter">
                    2
                  </div>
                </button>

                <button
                  type="button"
                  className="hidden lg:flex items-center gap-0.5"
                >
                  <Image
                    src="/avatar.png"
                    alt="User Image"
                    width={640}
                    height={640}
                    className="w-[38px] h-[38px] rounded-full border-[2.363px] border-white bg-[#FFE7CC]"
                  />
                  <ArrowDownIcon />
                </button>

                {/* Auth - Mobile and Desktop */}
                {/* <div className="md:hidden">
                  <Button variant={"link"} asChild className="">
                    <Link href={"/login"}>LOGIN</Link>
                  </Button>
                  <Button
                    className=" p-2.5 tracking-[10%] max-sm:rounded"
                    asChild
                  >
                    <Link href={"/register"}>REGISTER</Link>
                  </Button>
                </div>

                <div className="hidden md:block">
                  <Button
                    className=" px-4 py-2 tracking max-sm:rounded"
                    asChild
                  >
                    <Link href={"/login"}>Login</Link>
                  </Button>
                </div> */}
              </div>
            </div>
          </WideWrapper>
        </header>
      </ScrollWrapper>
    </>
  );
};

{
  /* {session?.user && (
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
              )} */
}

{
  /* <div className=" flex items-center">
  <Button variant={"link"} asChild className="text-sm">
    <Link href={"/login"}>LOGIN</Link>
  </Button>
  <Button variant={"link"} asChild className="">
    <Link href={"/login"}>LOGIN</Link>
  </Button>
  <Button className="max-sm:hidden " asChild>
    <Link href={"/register"} className="">
      REGISTER
    </Link>
  </Button>

  <Wallet />
</div>; */
}

export const EnterLocation = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "bg-white pl-3 pr-1 py-2 max-h-[36px] items-center gap-2",
        className
      )}
    >
      <IoLocationOutline className="text-jikoo-brand-green" />
      <UnstyledInput
        type="search"
        name="location"
        id=""
        placeholder="Enter your location"
        className="placeholder:text-grey-900 font-normal "
      />
    </div>
  );
};
