import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/back-to-top";
import { Instagram, Youtube } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa6";
import LogoWhite from "@/public/logo-white.png";
import { WideWrapper } from "./wrappers";

// Navigation links
const navLinks = [
  [
    { label: "Blog", href: "/" },
    { label: "About", href: "/about" },
    { label: "Vendors", href: "vendors.jikoo.ng" },
    { label: "Orders Tracker", href: "/track-order" },
  ],
  [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/about" },
    { label: "Jikoo Community", href: "vendors.jikoo.ng" },
    { label: "Advertisement", href: "/advertise" },
  ],
];

// Social media links
const socialMediaLinks = [
  // {
  //   icon: <Youtube size={18} />,
  //   href: "https://youtube.com/@jikoohq?si=Y7IT7Mhd7xdzYEo3",
  // },
  // {
  //   icon: <FaFacebook size={18} />,
  //   href: "https://www.facebook.com/profile.php?id=61559398426459&mibextid=LQQJ4d",
  // },
  // {
  //   icon: <FaTiktok size={18} />,
  //   href: "https://www.tiktok.com/@jikoohq?_t=8mMAqQbIfOI&_r=1",
  // },
  {
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/jikoohq",
  },
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/+2347075103023",
  },
];

export const Footer = () => {
  return (
    <div className="mt-10 md:mt-20">
      <BackToTop />
      <footer className="bg-jikoo-footer  pb-[125px] lg:pb-0 text-white text-sm">
        <WideWrapper>
          <div className="space-y-12 py-10">
            <div className="md:flex space-y-10 lg:space-y-0">
              {/* Logo and Navigation Links */}
              <div className="space-y-16">
                <Link href="/">
                  <Image
                    alt="Jikoo Logo"
                    src={LogoWhite}
                    width={LogoWhite.width}
                    height={LogoWhite.height}
                    className="h-auto w-[90px]"
                  />
                </Link>
                <div className="flex items-start gap-16">
                  {navLinks.map((group, index) => (
                    <ul key={index} className="space-y-4 md:space-y-5">
                      {group.map((link, idx) => (
                        <li key={idx}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              {/* Newsletter and Social Media Links */}
              <div className="lg:grow md:ml-32 space-y-16">
                <div>
                  <p className="text-sm font-bold">
                    Stay up to date with our latest news and products.
                  </p>
                  <form className="flex mt-4 sm:mt-6 gap-3 sm:gap-4">
                    <Input
                      className="w-full max-w-[375px] border-none bg-[#343e39] text-[10px] text-[#98A2B3] rounded-sm px-3 py-2 h-auto"
                      placeholder="Enter email"
                    />
                    <Button className="py-2 px-4 text-[10px] tracking-[0.8px] rounded">
                      SUBSCRIBE
                    </Button>
                  </form>
                </div>
                <div>
                  <Separator className="mb-3 bg-[#343E39]" />
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-5">
                    <div className="flex gap-4 mr-6 text-xs lg:text-sm">
                      <p>Terms of Service</p>
                      <p>Privacy Policy</p>
                    </div>
                    <div className="flex gap-2">
                      {socialMediaLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="size-[25px] grid place-content-center rounded-full bg-white text-black"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WideWrapper>
      </footer>
    </div>
  );
};
