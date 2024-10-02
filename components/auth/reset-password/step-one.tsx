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

    const handleMailSubmit = async (values: z.infer<typeof emailSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "OTP Sent",
        icon: (
          <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
            <FaCircleCheck className="text-state-success-600" />
          </div>
        ),
      });
      console.log("OTP submitted: ", values);
      onSubmit(values.mail);
      handleNextStep(2);
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
              disabled={mailForm.formState.isSubmitting}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                mailForm.formState.isSubmitting && "opacity-65 transition-all"
              }`}
            >
              {mailForm.formState.isSubmitting
                ? "Confirming..."
                : "Confirm email"}
            </Button>
          </form>
        </Form>
      </div>
    );
  }
);
