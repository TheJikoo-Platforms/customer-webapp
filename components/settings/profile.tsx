"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoSignOut } from "react-icons/go";
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
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { getFieldClassName } from "@/lib/utils";
import { registerUser } from "@/api/requests";
import { useMutation } from "@tanstack/react-query";
import { MdCancel } from "react-icons/md";
import BorderedDiv from "../auth/bordered-div";
import { NGFlag } from "../auth/ui/icons";
import InnerHeader from "../inner-page-header-mobile";
import UploadImage from "./upload-image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useTransitionRouter } from "next-view-transitions";

const formSchema = z.object({
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
  phoneNumber: z
    .string()
    .length(10, "Phone number must be at exactly 10 digits")
    .regex(/^\d+$/, "Phone number must only contain numbers")
    .regex(
      /^[789][01]\d{8}$/,
      "Invalid phone number. Must begin with 7, 8, or 9 then 0 or 1"
    ),
  dob: z.string().min(6, { message: "Enter date of birth" }),
});

export const Profile = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const { toast } = useToast();
    const router = useTransitionRouter();
    const ref = useRef<HTMLDivElement>(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isCalendarFocused, setIsCalendarFocused] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      mode: "onTouched",
      defaultValues: {
        firstName: "John",
        lastName: "Does",
        email: "johndoe@gmail.com",
        phoneNumber: "",
        dob: "Sept 17, 1997",
      },
    });
    const errors = form.formState.errors;
    const handleCalendarFocusOutside = () => {
      // setIsCalendarFocused(false);
    };
    useOnClickOutside(ref, handleCalendarFocusOutside);
    const handleGoBack = () => {
      if (isUpdating) {
        setIsUpdating(false);
      } else {
        handleActiveScreen("home");
      }
    };

    // const {
    //   mutate: updateMutation,
    //   form.formState.isSubmitting,
    //   isError,
    //   data,
    // } = useMutation(registerUser, {
    //   onSuccess: (response) => {
    //     toast({
    //       title: "",
    //       icon: (
    //         <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
    //           <FaCircleCheck className="text-state-success-600" />
    //         </div>
    //       ),
    //     });
    //   },
    //   onError: (error: any) => {
    //     console.error("Error during registration:", error);
    //     const errorMessage = !error.response
    //       ? "Network error: Please check your internet connection."
    //       : error.response.data.errors ||
    //         error.response.data.message ||
    //         "An unexpected error occurred.";

    //     toast({
    //       title: errorMessage,
    //       variant: "error",
    //       icon: (
    //         <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
    //           <MdCancel className="text-state-error-500" />
    //         </div>
    //       ),
    //     });
    //   },
    // });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      console.log(values);
      //   updateMutation({
      //     firstname: values.firstName,
      //     lastname: values.lastName,
      //     email: values.email,
      //     phone: "+234" + values.phoneNumber,
      //     dob: values.dob,
      //   });
    };

    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={handleGoBack}
          text={isUpdating ? "Update profile" : "Profile"}
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          {!isUpdating ? (
            <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block pt-1 pb-[36px]">
              Profile
            </h3>
          ) : (
            <button
              onClick={() => setIsUpdating(false)}
              type="button"
              className="flex items-center gap-2 pt-1 pb-[36px]"
            >
              <ArrowLeftIcon />
              <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block">
                Update profile
              </h3>
            </button>
          )}

          {isUpdating ? (
            <UploadImage />
          ) : (
            <Image
              src="/avatar.png"
              height={100}
              width={100}
              alt="User Picture"
              className="w-16 h-16 rounded-full object-cover mx-auto mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(<path-to-image>)",
                backgroundColor: "#D4AFBD",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

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
                            !isUpdating && "bg-[#F7F9FC]"
                          }${getFieldClassName(
                            form.formState,
                            errors,
                            "firstName"
                          )}`}
                        >
                          <CiUser className="text-2xl text-grey-400" />
                          <UnstyledInput
                            disabled={!isUpdating}
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
                            !isUpdating && "bg-[#F7F9FC]"
                          }${getFieldClassName(
                            form.formState,
                            errors,
                            "lastName"
                          )}`}
                        >
                          <CiUser className="text-2xl text-grey-400" />
                          <UnstyledInput
                            disabled={!isUpdating}
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
                          !isUpdating && "bg-[#F7F9FC]"
                        }${getFieldClassName(form.formState, errors, "email")}`}
                      >
                        <CiMail className="text-2xl text-grey-400" />
                        <UnstyledInput
                          disabled={!isUpdating}
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          !isUpdating && "bg-[#F7F9FC]"
                        } ${getFieldClassName(
                          form.formState,
                          errors,
                          "phoneNumber"
                        )}`}
                      >
                        <div className="flex items-center gap-2">
                          <NGFlag />
                          <span className="font-normal dark:text-white text-sm text-grey-400">
                            +234
                          </span>
                        </div>

                        <UnstyledInput
                          disabled={!isUpdating}
                          type="text"
                          placeholder="9100000000"
                          className="placeholder:text-grey-400 font-normal text-grey-900"
                          {...field}
                        />
                      </BorderedDiv>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isUpdating && (
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
                                !isUpdating && "bg-[#F7F9FC]"
                              }${getFieldClassName(
                                form.formState,
                                errors,
                                "dob"
                              )} ${
                                isCalendarFocused && "border-state-success-200"
                              }`}
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
                              ref={ref}
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
                                  const formattedDate = format(
                                    date,
                                    "yyyy-MM-dd"
                                  );
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
              )}

              {!isUpdating && (
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <BorderedDiv
                            className={`items-center gap-2  ${
                              !isUpdating && "bg-[#F7F9FC]"
                            } `}
                          >
                            <div className="flex gap-2 flex-1">
                              <CiCalendar className="text-xl text-grey-400" />
                              <span className="text-grey-400 font-normal text-sm">
                                {format(new Date(field.value), "PPP")}
                              </span>
                            </div>
                            <FaChevronDown className="text-sm text-grey-400" />
                          </BorderedDiv>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              )}

              {isUpdating && (
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                    form.formState.isSubmitting && "opacity-65 transition-all"
                  }`}
                >
                  {form.formState.isSubmitting ? "Saving..." : "Save changes"}
                </Button>
              )}

              {!isUpdating && (
                <Button
                  type="button"
                  className={`bg-primary w-full rounded-md font-semibold mt-4`}
                  onClick={() => setIsUpdating(true)}
                >
                  Update profile
                </Button>
              )}
            </form>
          </Form>

          {!isUpdating && (
            <div className="mt-6">
              <button
                type="button"
                className="flex items-center gap-2 text-black text-xs py-4"
                onClick={() => router.push("/login")}
              >
                <GoSignOut /> Sign out
              </button>
              <button
                type="button"
                onClick={() => handleActiveScreen("delete")}
                className="flex items-center gap-2 text-state-error-300 text-xs py-4"
              >
                <RiDeleteBinLine /> Delete account
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
);
