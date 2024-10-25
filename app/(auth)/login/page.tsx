import AuthHeading from "@/components/auth/auth-heading";
import LoginForm from "@/components/auth/login-form";
import { BackButton } from "@/components/back-button";
import { Metadata } from "next";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default async function LoginPage() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return (
    <div>
      <div className="flex items-center justify-center relative">
        <BackButton className="absolute left-0" />
        <Link href={"/"} className="">
          <Image
            alt="logo"
            height={Logo.height}
            width={Logo.width}
            src={Logo.src}
            className=" h-[18px] sm:h-[22.5px] w-auto"
            quality={100}
            priority
          />
        </Link>
      </div>

      <AuthHeading text="Login to your account" />
      <LoginForm />
    </div>
  );
}
