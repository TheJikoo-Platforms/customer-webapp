"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  otpSchema,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";

interface StepThreeProps {
  stepTwoData: string;
  handleNextStep: (num: number) => void;
}

export const StepThreeForm = React.memo(
  ({ stepTwoData, handleNextStep }: StepThreeProps) => {
    const { toast } = useToast();
    const otpForm = useForm<z.infer<typeof otpSchema>>({
      resolver: zodResolver(otpSchema),
      mode: "onTouched",
      defaultValues: {
        otp: "",
      },
    });

    const handleOtpSubmit = async (values: z.infer<typeof otpSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //   toast({
      //     variant: "fade",
      //     title: "We sent you a verification link",
      //     description: "Check your email to verify your email",
      //   });
      console.log("OTP submitted: ", values);
      handleNextStep(4);
    };

    const errors = otpForm.formState.errors;

    return (
      <div>
        <div className="flex items-center justify-center relative">
          <button
            type="button"
            onClick={() => handleNextStep(2)}
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
          text={"Paste OTP sent to your phone number"}
          className="mx-auto"
        />
        <Form {...otpForm}>
          <form
            onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
            className="space-y-3"
          >
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        otpForm.formState.touchedFields.otp && !errors.otp
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <UnstyledInput
                        type="number"
                        placeholder="Enter 6-digits code"
                        className="placeholder:text-grey-400 font-normal"
                        {...field}
                      />
                    </BorderedDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={otpForm.formState.isSubmitting}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                otpForm.formState.isSubmitting && "opacity-65 transition-all"
              }`}
            >
              {otpForm.formState.isSubmitting
                ? "Loading..."
                : "Confirm phone number"}
            </Button>
          </form>
        </Form>
        <div className="text-center flex gap-2 justify-center mt-8">
          <span className="text-sm text-grey-500 ">Didn’t receive?</span>
          <button type="button" className="text-[#036B26] text-sm font-medium">
            Resend
          </button>
        </div>
      </div>
    );
  }
);
