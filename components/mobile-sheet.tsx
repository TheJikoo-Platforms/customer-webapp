import { Menu, X, ExternalLink } from "lucide-react";
import { RiMenu5Fill } from "react-icons/ri";

import Image from "next/image";

import Logo from "@/public/logo.png";
import { Instagram, Youtube } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SideBar } from "./home/side-bar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { signOut } from "@/auth";
import { OpenAndClose } from "./opening-and-closing";
// import { LogoutButton } from "./auth/logout-button";
import { redirect } from "next/navigation";
import { ToggleTheme } from "./toggle-theme";

const LIST = [
  { imageUrl: "/home/hot-deal.png", title: "Deals", url: "/deals" },
  {
    imageUrl: "/home/location.png",
    title: "Order Tracker",
    url: "/track-order",
  },
  {
    imageUrl: "/home/inventory.png",
    title: "Bulk Order",
    url: "/bulk-order",
  },
  {
    imageUrl: "/home/megaphone.png",
    title: "Advertise With Us",
    url: "/advert",
  },
  {
    imageUrl: "/home/time2.png",
    title: "Group Orders",
    url: "/orders/group-orders",
  },
  { imageUrl: "/home/share.png", title: "Tell A Friend", url: "/share" },
  { imageUrl: "/home/new_glass.png", title: "Support", url: "/contact" },
];

const SUPPORT = [
  { imageUrl: "", title: "Reach Us", url: "/contact" },
  { imageUrl: "", title: "Help Topics", url: "/" },
  { imageUrl: "", title: "FAQs", url: "/faqs" },
];

export const MobileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RiMenu5Fill size={24} className="dark:text-white" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-white dark:bg-primary-foreground [&_.close]:hidden flex flex-col dark:border-white/25"
      >
        <SheetHeader className="pb-4 border-b border-b-black/20">
          <div className="flex item-center gap-6">
            <SheetClose>
              <X />
            </SheetClose>
            <div className="grow flex justify-between items-center">
              <Image
                alt="logo"
                height={Logo.height}
                width={Logo.width}
                src={Logo.src}
                className="h-[22px] w-auto"
                quality={100}
                priority
              />
              <OpenAndClose />
            </div>
          </div>
        </SheetHeader>
        <div className="overflow-y-auto overflow-x-hidden flex-1 scrollbar-none flex flex-col">
          <div className="py-4 text-[#7E7E86] ">
            <ul className="space-y-4">
              {LIST.map((el) => (
                <li key={el.title}>
                  <Link
                    href={el.url}
                    className=" font-medium text-sm flex gap-4 items-center"
                  >
                    <div>
                      <img
                        alt={el.title.toLowerCase()}
                        src={el.imageUrl}
                        className="max-h-[22px] w-auto"
                      />
                    </div>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-4">
            <div className="p-4 bg-primary-foreground dark:bg-secondary rounded-[4px] mb-10 ">
              <h2 className="text-sm font-bold">Become a Jikoo Vendor</h2>
              <p className="text-xs mt-2 mb-5">
                Reach a larger audience, grow your food business, make more
                sales and earn more.
              </p>
              <div>
                <Link
                  href={"https://vendors.jikoo.ng"}
                  target="_blank"
                  className="bg-primary rounded text-[10px]/[13px] tracking-widest w-full flex justify-between items-center text-white p-2"
                >
                  BECOME A VENDOR <ExternalLink className="size-4" />
                </Link>
              </div>
            </div>
            <div className="pt-5  border-t border-t-black/20 sticky bottom-0 bg-white dark:bg-primary-foreground">
              <div className="flex justify-between pt-4 pb-3 mb-5">
                <a
                  href="https://www.instagram.com/jikoohq?igsh=b3M5cmlkMmFiN2Zw&utm_source=qr"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaeI5jI9WtC4om9pnV3k"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559398426459&mibextid=LQQJ4d"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://youtube.com/@jikoohq?si=Y7IT7Mhd7xdzYEo3"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@jikoohq?_t=8mMAqQbIfOI&_r=1"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://x.com/jikoohq?s=21"
                  target="_blank"
                  className="p-2 rounded-full bg-primary/35 text-primary"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
              {/* <form
                action={async () => {
                  "use server";
                  await signOut();
                  redirect('', )
                  // revalidatePath("/", "layout");
                }}
              >
                <LogoutButton />
              </form> */}
              <div className="">
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
