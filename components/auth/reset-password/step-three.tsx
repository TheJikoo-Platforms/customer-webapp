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

interface StepThreeProps {
  stepOneData: string;
  handleNextStep: (num: number) => void;
}

const passwordSchema = z.object({
  password: z
    .string()
    .length(6, { message: "Password must be exactly 6 digits" })
    .regex(/^\d{6}$/, { message: "Password must contain only digits" }),

  confirmPassword: z
    .string()
    .length(6, { message: "Confirm Password must be exactly 6 digits" })
    .regex(/^\d{6}$/, {
      message: "Confirm Password must contain only digits",
    }),
});

export const StepThreeForm = React.memo(
  ({ stepOneData, handleNextStep }: StepThreeProps) => {
    const passwordForm = useForm<z.infer<typeof passwordSchema>>({
      resolver: zodResolver(passwordSchema),
      mode: "onTouched",
      defaultValues: {
        password: "",
        confirmPassword: "",
      },
    });
    const handleOtpSubmit = async (values: z.infer<typeof passwordSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Password Submitted: ", values);
      handleNextStep(4);
    };

    const [passwordVisibility, setPasswordVisibility] = useState({
      password: false,
      confirmPassword: false,
    });

    const togglePasswordVisibility = (
      field: "password" | "confirmPassword"
    ) => {
      setPasswordVisibility((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

    const errors = passwordForm.formState.errors;

    return (
      <div>
        <div className="flex items-center justify-center relative">
          <button
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
        <AuthHeading text="Set new password" className="w-[250px] mx-auto" />

        <Form {...passwordForm}>
          <form
            onSubmit={passwordForm.handleSubmit(handleOtpSubmit)}
            className="space-y-3"
          >
            <FormField
              control={passwordForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        passwordForm.formState.touchedFields.password &&
                        !errors.password
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <PasswordKey />
                      <UnstyledInput
                        type={passwordVisibility.password ? "text" : "password"}
                        placeholder="Create a password"
                        className="placeholder:text-grey-400 font-normal"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("password")}
                        className="cursor-pointer"
                      >
                        {passwordVisibility.password ? (
                          <HidePasswordIcon />
                        ) : (
                          <ShowPasswordIcon />
                        )}
                      </button>
                    </BorderedDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={passwordForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        passwordForm.formState.touchedFields.confirmPassword &&
                        !errors.confirmPassword
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <PasswordKey />

                      <UnstyledInput
                        type={
                          passwordVisibility.confirmPassword
                            ? "number"
                            : "password"
                        }
                        placeholder="Confirm your password"
                        className="placeholder:text-grey-400 font-normal"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                        className="cursor-pointer"
                      >
                        {passwordVisibility.confirmPassword ? (
                          <HidePasswordIcon />
                        ) : (
                          <ShowPasswordIcon />
                        )}
                      </button>
                    </BorderedDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={passwordForm.formState.isSubmitting}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                passwordForm.formState.isSubmitting &&
                "opacity-65 transition-all"
              }`}
            >
              {passwordForm.formState.isSubmitting
                ? "Submitting..."
                : "Change password"}
            </Button>
          </form>
        </Form>
      </div>
    );
  }
);
