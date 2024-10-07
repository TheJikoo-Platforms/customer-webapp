import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";

import { Instagram, Youtube } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import LogoSmallWhite from "@/public/logo-small-white.png";
import LogoWhite from "@/public/logo-white.png";

export const Footer = () => {
  return (
    <>
      <div className="">
        <BackToTop />
      </div>
      <footer className="bg-jikoo-footer text-white text-[10px] sm:text-sm">
        <div className="container space-y-12 pt-6 pb-16 px-6">
          <Link href={"/"} className="ml-5">
            <Image
              alt="logo"
              {...LogoWhite}
              className=" h-[22px] md:h-9 w-auto"
            />
          </Link>
          <div className="md:flex space-y-12  ">
            <div className="flex  gap-16">
              <ul className="space-y-4 md:space-y-5">
                <li key={"1"}>
                  <Link href={"/"}>Jikoo</Link>
                </li>
                <li key={"2"}>
                  <Link href={"/about"}>About</Link>
                </li>
                <li key={3}>
                  <Link href={"vendors.jikoo.ng"}>Vendors</Link>
                </li>
                <li key={4}>
                  <Link href={"/track-order"}>Orders Tracker</Link>
                </li>
              </ul>
              <ul className="space-y-4 md:space-y-5">
                <li key={5}>
                  <Link href={"/contact"}>Contact us</Link>
                </li>
                <li key={6}>
                  <Link href={"/about"}>Help Center</Link>
                </li>
                <li key={7}>
                  <Link href={"vendors.jikoo.ng"}>Jikoo community</Link>
                </li>
                <li key={8}>
                  <Link href={"/advertise"}>Advertisement</Link>
                </li>
              </ul>
            </div>
            <div className=" md:grow sm:ml-32">
              <p className="text-sm max-sm:w-[181px] font-medium">
                Stay up to date with our latest news and products.
              </p>
              <form action="" className="flex mt-4 sm:mt-6 gap-3 sm:gap-10">
                <Input
                  className="grow border-none bg-[#343e39] text-[10px] text-[#98a1b2] rounded-sm px-3 py-2 h-auto"
                  placeholder="Enter email"
                />{" "}
                <Button className="py-2 px-3 text-[10px]">SUBSCRIBE</Button>
              </form>
            </div>
          </div>
          <div>
            <Separator className="mb-3  bg-[#343E39]" />
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <p>Terms Of Service</p>
                <p>Privacy Policy</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://youtube.com/@jikoohq?si=Y7IT7Mhd7xdzYEo3"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559398426459&mibextid=LQQJ4d"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@jikoohq?_t=8mMAqQbIfOI&_r=1"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://www.instagram.com/jikoohq?igsh=b3M5cmlkMmFiN2Zw&utm_source=qr"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaeI5jI9WtC4om9pnV3k"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <FaWhatsapp size={18} />
                </a>

                {/* <a
                  href="https://x.com/jikoohq?s=21"
                  target="_blank"
                  className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                >
                  <FaXTwitter size={18} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
