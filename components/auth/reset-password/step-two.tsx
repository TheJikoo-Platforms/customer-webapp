"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  emailSchema,
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
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";

interface StepTwoProps {
  stepOneData: string;
  handleNextStep: (num: number) => void;
}

export const StepTwoForm = React.memo(
  ({ stepOneData, handleNextStep }: StepTwoProps) => {
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
      handleNextStep(3);
    };

    const errors = otpForm.formState.errors;

    return (
      <div>
        <div className="flex items-center justify-center relative">
          <button
            onClick={() => handleNextStep(1)}
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
          text="Set new password"
          className="w-[250px] mx-auto mb-8"
        />

        <p className="text-grey-500 text-sm leading-[20.3px] mb-4">
          Enter the 6-digit code sent to your email address to reset your
          password
        </p>
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
                        type="text"
                        placeholder="Enter 6-digits code"
                        className="placeholder:text-grey-400 font-normal"
                        {...field}
                        {...otpForm.register("otp")}
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
              {otpForm.formState.isSubmitting ? "Submitting..." : "Confirm"}
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
