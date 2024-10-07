"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { HidePasswordIcon, PasswordKey, ShowPasswordIcon } from "../ui/icons";
import { useTransitionRouter } from "next-view-transitions";

interface StepFourProps {
  handleNextStep: (num: number) => void;
}

export const StepFourForm = React.memo(({ handleNextStep }: StepFourProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useTransitionRouter();
  const handleGoToLoginPage = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/login");
    }, 1000);
  };
  return (
    <div>
      <div className="flex items-center justify-center relative">
        <button
          onClick={() => handleNextStep(3)}
          className={"cursor-pointer absolute left-0"}
        >
          <ArrowLeftIcon />
        </button>
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
      <AuthHeading
        text="Password changed successfuly"
        className="w-[250px] mx-auto"
      />

      <p className="text-grey-500 text-sm leading-[20.3px] mb-4">
        Your password have changed successfully. Continue to login to your
        account.
      </p>
      <Button
        type="submit"
        disabled={isSubmitting}
        onClick={handleGoToLoginPage}
        className={`bg-primary w-full rounded-md font-semibold mt-4 ${
          isSubmitting && "opacity-65 transition-all"
        }`}
      >
        {isSubmitting ? "Preparing..." : "Login"}
      </Button>
    </div>
  );
});
