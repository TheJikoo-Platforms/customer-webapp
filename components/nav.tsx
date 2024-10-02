"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVLIST = [
  { name: "Home", path: "/", label: "" },
  {
    name: "Explore",
    path: "/explore",
    label: "explore",
  },
  { name: "Wallet", path: "/wallet", label: "wallet" },
  { name: "My Orders", path: "/orders", label: "orders" },
  { name: "Contact", path: "/contact", label: "contact" },
];

const SUPPORT = [
  { label: "", name: "Reach Us", path: "/contact" },
  { label: "", name: "Help Topics", path: "/help-topics" },
  { label: "", name: "FAQs", path: "/faqs" },
];

export const Nav = () => {
  const pathname = usePathname();
  const currPath = pathname.slice(1).split("/").at(0);
  return (
    <nav className="max-sm:hidden">
      <ul className="flex gap-6">
        {NAVLIST.map((el) => (
          <li key={el.name}>
            <Link
              className={`font-bold text-[10px]  tracking-[1.1px] uppercase flex items-center gap-0.5  ${
                currPath === el.label ? "text-primary" : "text-grey-900"
              }  `}
              href={el.path}
            >
              {el.name}
              {el.label === "orders" && (
                <div className="bg-jikoo-brand-green px-2 flex items-center rounded-full text-white text-[10px] font-medium font-inter">
                  2
                </div>
              )}
            </Link>
          </li>
        ))}
        {/* <li><NavItemDropdown pathname={pathname} /></li> */}
      </ul>
    </nav>
  );
};

const NavItemDropdown = ({ pathname }: { pathname: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="ffont-bold text-[10px]  tracking-[11%]  uppercase h-auto p-0 hover:bg-none bg-none text-black ">
            Support
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#F0F0F0] dark:hover:bg-secondary-foreground dark:bg-primary-foreground dark:border-white/25">
            <ul className="w-40">
              {SUPPORT.map((el) => (
                <li key={el.name} className="p-1 hover:brightness-75">
                  <Link
                    className={`font-bold text-[10px]  tracking-[11%] uppercase  ${
                      pathname.startsWith(el.path)
                        ? "text-primary"
                        : "text-black"
                    }  `}
                    href={el.path}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
