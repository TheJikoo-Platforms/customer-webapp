"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { CiCalendar, CiMail, CiUser } from "react-icons/ci";
import { FaChevronDown, FaChevronUp, FaCircleCheck } from "react-icons/fa6";
import { Calendar } from "@/components/ui/new-calendar";
import { format } from "date-fns";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeftIcon } from "@/components/ui/icons";
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { HidePasswordIcon, PasswordKey, ShowPasswordIcon } from "../ui/icons";
import { Button } from "@/components/ui/button";

export interface StepFourFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
}

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name must be more than 3 characters" })
      .max(50, { message: "First name must be less than 20 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First name must only contain alphabets",
      }),

    lastName: z
      .string()
      .min(3, { message: "Last name must be more than 3 characters" })
      .max(50, { message: "Last name must be less than 20 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "Last name must only contain alphabets",
      }),
    email: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email"
      )
      .email("Please enter a valid email"),
    password: z
      .string()
      .length(6, { message: "Password must be exactly 6 digits" })
      .regex(/^\d{6}$/, { message: "Password must contain only digits" }),

    // .regex(/[a-z]/, {
    //   message: "Password must contain at least one lowercase letter",
    // })
    // .regex(/[A-Z]/, {
    //   message: "Password must contain at least one uppercase letter",
    // })
    // .regex(/\d/, { message: "Password must contain at least one number" })
    // .regex(/[\W_]/, {
    //   message: "Password must contain at least one special character",
    // }),
    confirmPassword: z
      .string()
      .length(6, { message: "Confirm Password must be exactly 6 digits" })
      .regex(/^\d{6}$/, {
        message: "Confirm Password must contain only digits",
      }),
    dob: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

interface StepFourProps {
  stepTwoData: string;
  onSubmit: (data: StepFourFormData) => void;
  handleNextStep: (num: number) => void;
}

export const StepFourForm: React.FC<StepFourProps> = React.memo(
  ({ onSubmit, handleNextStep, stepTwoData }) => {
    const { toast } = useToast();
    const ref = useRef<HTMLDivElement>(null);
    const [isCalendarFocused, setIsCalendarFocused] = useState(false);
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
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      mode: "onTouched",
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
      },
    });

    const errors = form.formState.errors;

    const handleCalendarFocusOutside = () => {
      setIsCalendarFocused(false);
    };

    useOnClickOutside(ref, handleCalendarFocusOutside);

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast({
        title: "OTP Sent",
        icon: (
          <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
            <FaCircleCheck className="text-state-success-600" />
          </div>
        ),
      });
      console.log(values);
      onSubmit(values);
      handleNextStep(5);
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
          text={"Complete your profile"}
          className="w-[250px] mx-auto"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          form.formState.touchedFields.firstName &&
                          !errors.firstName
                            ? "bg-grey-75"
                            : ""
                        }`}
                      >
                        <CiUser className="text-2xl text-grey-400" />
                        <UnstyledInput
                          type="text"
                          placeholder="First Name"
                          className="placeholder:text-grey-400 text-grey-900 font-normal"
                          {...field}
                        />
                      </BorderedDiv>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          form.formState.touchedFields.lastName &&
                          !errors.lastName
                            ? "bg-grey-75"
                            : ""
                        }`}
                      >
                        <CiUser className="text-2xl text-grey-400" />
                        <UnstyledInput
                          type="text"
                          placeholder="Last Name"
                          className="placeholder:text-grey-400 text-grey-900 font-normal"
                          {...field}
                        />
                      </BorderedDiv>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        form.formState.touchedFields.email && !errors.email
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <CiMail className="text-2xl text-grey-400" />
                      <UnstyledInput
                        type="text"
                        placeholder="Email address"
                        className="placeholder:text-grey-400 text-grey-900 font-normal"
                        {...field}
                      />
                    </BorderedDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        form.formState.touchedFields.password &&
                        !errors.password
                          ? "bg-grey-75"
                          : ""
                      }`}
                    >
                      <PasswordKey />
                      <UnstyledInput
                        type={
                          passwordVisibility.password ? "number" : "password"
                        }
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
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        form.formState.touchedFields.confirmPassword &&
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

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => {
                const { ref: fieldRef, ...fieldProps } = field;
                return (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <BorderedDiv
                          className={`items-center gap-2 ${
                            form.formState.touchedFields.dob && !errors.dob
                              ? "bg-grey-75"
                              : ""
                          } ${isCalendarFocused && "border-state-success-200"}`}
                          onClick={() =>
                            setIsCalendarFocused(!isCalendarFocused)
                          }
                        >
                          <div className="flex gap-2 flex-1">
                            <CiCalendar className="text-xl text-grey-400" />
                            {field.value ? (
                              <span className="text-grey-400 font-normal text-sm">
                                {format(new Date(field.value), "PPP")}
                              </span>
                            ) : (
                              <span className="text-grey-400 font-normal text-sm">
                                Birthday
                              </span>
                            )}
                          </div>
                          {isCalendarFocused ? (
                            <FaChevronUp className="text-sm text-grey-400" />
                          ) : (
                            <FaChevronDown className="text-sm text-grey-400" />
                          )}
                        </BorderedDiv>
                        <Calendar
                          // ref={ref}
                          mode="single"
                          captionLayout="dropdown-buttons"
                          className={`bg-white absolute bottom-14 left-1/2 -translate-x-1/2 shadow rounded invisible opacity-0 ${
                            isCalendarFocused &&
                            "opacity-100 visible transition-opacity duration-200"
                          }`}
                          fromYear={1990}
                          toYear={2024}
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            if (date) {
                              const formattedDate = format(date, "yyyy-MM-dd");
                              field.onChange(formattedDate);
                            }
                          }}
                          {...fieldProps}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                form.formState.isSubmitting && "opacity-65 transition-all"
              }`}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Continue"}
            </Button>
          </form>
        </Form>
      </div>
    );
  }
);
