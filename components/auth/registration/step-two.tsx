"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  emailSchema,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  phoneSchema,
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
import { NGFlag } from "../ui/icons";
import { FaCircleCheck } from "react-icons/fa6";

interface StepTwoProps {
  onSubmit: (data: string) => void;
  handleNextStep: (num: number) => void;
}

export const StepTwoForm = React.memo(
  ({ onSubmit, handleNextStep }: StepTwoProps) => {
    const { toast } = useToast();
    const stepTwoForm = useForm<z.infer<typeof phoneSchema>>({
      resolver: zodResolver(phoneSchema),
      mode: "onTouched",
      defaultValues: {
        phoneNumber: "", // Initialize with an empty string
      },
    });
    const handlestepTwoSubmit = async (values: z.infer<typeof phoneSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "OTP Sent",
        icon: (
          <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
            <FaCircleCheck className="text-state-success-600" />
          </div>
        ),
      });
      console.log("stepTwo submitted: ", values);
      handleNextStep(3);
      onSubmit(values.phoneNumber);
    };
    const errors = stepTwoForm.formState.errors;

    return (
      <div className="flex flex-col min-h-[calc(100dvh-100px)] md:min-h-[initial]">
        <div className="flex-1">
          <div className="flex items-center justify-center relative">
            <button
              type="button"
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
            text={"Enter your phone number or email"}
            className="w-[280px] mx-auto"
          />
          <Form {...stepTwoForm}>
            <form
              onSubmit={stepTwoForm.handleSubmit(handlestepTwoSubmit)}
              className="space-y-3"
            >
              <FormField
                control={stepTwoForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          stepTwoForm.formState.touchedFields.phoneNumber &&
                          !errors.phoneNumber
                            ? "bg-grey-75"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <NGFlag />
                          <span className="font-normal dark:text-white text-sm text-grey-400">
                            +234
                          </span>
                        </div>

                        <UnstyledInput
                          type="number"
                          placeholder=""
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
                disabled={stepTwoForm.formState.isSubmitting}
                className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                  stepTwoForm.formState.isSubmitting &&
                  "opacity-65 transition-all"
                }`}
              >
                {stepTwoForm.formState.isSubmitting
                  ? "Submitting..."
                  : "Sign in"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-center flex gap-2 justify-center mt-4">
          <p className="text-center text-[#475467] text-xs mt-[100px] md:mt-[58px] w-[230px] mx-auto md:w-full md:mx-0">
            Creating an account means you have agree to our{" "}
            <Link href={""} className="underline underline-offset-4">
              Terms and Privacy policy
            </Link>
          </p>
        </div>
      </div>
    );
  }
);
