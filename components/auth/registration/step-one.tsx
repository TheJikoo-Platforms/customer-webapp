import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import GOOGLEICON from "@/public/google-icon.svg";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";

interface StepOneFormProps {
  handleNextStep: (num: number) => void;
}

export const StepOneForm: React.FC<StepOneFormProps> = React.memo(
  ({ handleNextStep }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleGoToNextPage = () => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleNextStep(2);
      }, 1000);
    };

    return (
      <div>
        <div className="hidden md:flex items-center justify-center relative">
          {/* <BackButton className="absolute left-0" /> */}
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

        <div className="md:hidden w-full">
          <Image
            className="w-full rounded-[30px] object-cover h-full"
            src="/auth/auth-mobile.png"
            width={358}
            height={280}
            alt="jikoo onboarding image"
          />
          <div className="max-w-[220px] mx-auto text-[#1E1E1E] text-center mt-[52px]">
            <h1 className="font-semibold text-3xl tracking-[-1.82px] leading-[32.76px]">
              Deal With Your Food Cravings
            </h1>
            <p className="text-[10px] font-dm-sans tracking-[0.05px] leading-[12.76px] mt-4">
              Enjoy the true taste of 9ja delicacies when you order from Jikoo’s
              top tested vendors.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 mt-10 md:mt-20">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary w-full rounded-md font-semibold text-base mt-4 ${
              isSubmitting && "opacity-65 transition-all"
            }`}
            onClick={handleGoToNextPage}
          >
            {isSubmitting ? "Preparing..." : "Get Started"}
          </Button>

          <p
            // href={"/"}
            className="rounded-sm justify-center gap-4 border-[1.5px] border-[#D0D5DD] tracking-normal inline-flex items-center py-[15px] h-auto whitespace-nowrap text-[10px] text-sm font-semibold"
          >
            <Image
              src={GOOGLEICON}
              alt="google icon"
              width={GOOGLEICON.width}
              height={GOOGLEICON.height}
              className="w-5 h-5"
            />
            <span className="text-base text-grey-700">
              Continue with Google
            </span>
          </p>
        </div>

        <div className="text-center flex gap-2 justify-center mt-6">
          <span className="text-sm text-grey-500">
            Already have an account?
          </span>
          <Link href={"/login"} className="text-[#036B26] text-sm font-medium">
            Login
          </Link>
        </div>
      </div>
    );
  }
);
