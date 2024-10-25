"use client";
import React, { useCallback } from "react";
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
import { MdCancel } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { sendOtpToMail, validateOtp, verifyMail } from "@/api/requests";
import { useToast } from "@/components/ui/use-toast";
import { FaCircleCheck } from "react-icons/fa6";

interface StepTwoProps {
  stepOneData: string;
  handleNextStep: (num: number) => void;
}

export const StepTwoForm = React.memo(
  ({ stepOneData, handleNextStep }: StepTwoProps) => {
    const { toast } = useToast();
    const otpForm = useForm<z.infer<typeof otpSchema>>({
      resolver: zodResolver(otpSchema),
      mode: "onTouched",
      defaultValues: {
        otp: "",
      },
    });

    // Helper function for showing toast notifications
    const showToast = (message: string, variant: any) => {
      toast({
        title: message,
        variant,
        icon: (
          <div
            className={`w-6 h-6 ${
              variant === "success"
                ? "bg-state-success-50"
                : "bg-state-error-50"
            } border ${
              variant === "success"
                ? "border-state-success-75"
                : "border-state-error-75"
            } flex items-center justify-center rounded`}
          >
            {variant === "success" ? (
              <FaCircleCheck className="text-state-success-600" />
            ) : (
              <MdCancel className="text-state-error-500" />
            )}
          </div>
        ),
      });
    };

    const { mutate: sendOtp, isLoading: isResendLoading } = useMutation(
      sendOtpToMail,
      {
        onSuccess: () => {
          showToast("OTP Sent", "success");
        },
        onError: (error: any) => {
          const errorMessage = !error.response
            ? "Network error: Please check your internet connection."
            : error.response.data.errors ||
              error.response.data.message ||
              "An unexpected error occurred.";

          showToast(errorMessage, "error");
        },
      }
    );

    const { mutate: verifyMailMutation, isLoading } = useMutation(validateOtp, {
      onSuccess: (response) => {
        showToast(response?.message, "success");
        setTimeout(() => {
          handleNextStep(3);
        }, 1000);
      },
      onError: (error: any) => {
        const errorMessage = !error.response
          ? "Network error: Please check your internet connection."
          : error.response.data.errors ||
            error.response.data.message ||
            "An unexpected error occurred.";

        showToast(errorMessage, "error");
      },
    });

    const handleOtpSubmit = (values: z.infer<typeof otpSchema>) => {
      if (stepOneData) {
        const otpData = {
          email: stepOneData,
          otp: values.otp,
        };
        verifyMailMutation(otpData);
      }
    };

    // Memoize the handleNextStep function
    const handleResendOtp = useCallback(() => {
      sendOtp(stepOneData);
    }, [stepOneData, sendOtp]);

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
              disabled={isLoading || isResendLoading}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                (otpForm.formState.isSubmitting ||
                  isLoading ||
                  isResendLoading) &&
                "opacity-65 transition-all"
              }`}
            >
              {isLoading ? "Submitting..." : "Confirm"}
            </Button>
          </form>
        </Form>
        <div className="text-center flex gap-2 justify-center mt-8">
          <span className="text-sm text-grey-500 ">Didn’t receive?</span>
          <button
            type="button"
            className={`${
              isLoading || isResendLoading ? "text-grey-500" : "text-[#036B26]"
            } text-sm font-medium transition-all`}
            onClick={handleResendOtp}
            disabled={isLoading || isResendLoading}
          >
            {isResendLoading ? "Resending..." : "Resend"}
          </button>
        </div>
      </div>
    );
  }
);
