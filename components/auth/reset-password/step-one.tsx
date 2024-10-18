"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  emailSchema,
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
import { FaCircleCheck } from "react-icons/fa6";
import { useToast } from "@/components/ui/use-toast";
import { BackButton } from "@/components/back-button";
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { sendOtpToMail } from "@/api/requests";
import { MdCancel } from "react-icons/md";
interface StepOneProps {
  onSubmit: (data: string) => void;
  handleNextStep: (num: number) => void;
}

export const StepOneForm = React.memo(
  ({ onSubmit, handleNextStep }: StepOneProps) => {
    const { toast } = useToast();

    const mailForm = useForm<z.infer<typeof emailSchema>>({
      resolver: zodResolver(emailSchema),
      mode: "onTouched",
      defaultValues: {
        mail: "",
      },
    });

    const {
      mutate: sendOtp,
      isLoading,
      isError,
      data,
    } = useMutation(sendOtpToMail, {
      onSuccess: (response) => {
        toast({
          title: "OTP Sent",
          icon: (
            <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
              <FaCircleCheck className="text-state-success-600" />
            </div>
          ),
        });
        setTimeout(() => {
          handleNextStep(2);
        }, 1000);
      },
      onError: (error: any) => {
        console.error(
          "Error during registration:",
          error.response?.data || error.response?.data.message
        );
        const errorMessage = !error.response
          ? "Network error: Please check your internet connection."
          : error.response.data.errors ||
            error.response.data.message ||
            "An unexpected error occurred.";

        toast({
          title: errorMessage,
          variant: "error",
          icon: (
            <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
              <MdCancel className="text-state-error-500" />
            </div>
          ),
        });
      },
    });

    const handleMailSubmit = (values: z.infer<typeof emailSchema>) => {
      sendOtp(values.mail);
      console.log("OTP submitted: ", values);
      onSubmit(values.mail);
    };

    const errors = mailForm.formState.errors;
    console.log(errors);
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
        <AuthHeading
          text="Enter your email address"
          className="w-[250px] mx-auto"
        />
        <Form {...mailForm}>
          <form
            onSubmit={mailForm.handleSubmit(handleMailSubmit)}
            className="space-y-3"
          >
            <FormField
              control={mailForm.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        mailForm.formState.touchedFields.mail && !errors.mail
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <UnstyledInput
                        type="text"
                        placeholder="Email Address"
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
              disabled={isLoading}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                isLoading && "opacity-65 transition-all"
              }`}
            >
              {isLoading ? "Confirming..." : "Confirm email"}
            </Button>
          </form>
        </Form>
      </div>
    );
  }
);
