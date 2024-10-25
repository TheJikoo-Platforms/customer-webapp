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
import { format, isValid, parse, parseISO } from "date-fns";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  formatDate,
  formatDateForDisplay,
  formatDateForSubmission,
  getFieldClassName,
} from "@/lib/utils";
import {
  registerUser,
  updateUserDob,
  updateUserEmail,
  updateUserName,
} from "@/api/requests";
import { useMutation } from "@tanstack/react-query";
import { MdCancel } from "react-icons/md";
import BorderedDiv from "../auth/bordered-div";
import { NGFlag } from "../auth/ui/icons";
import { useTransitionRouter } from "next-view-transitions";
import { UnstyledInput } from "../ui/unstyled-input";
import { useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";
import axiosInstance from "@/api/axios-client";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be more than 3 characters" })
    .max(20, { message: "First name must be less than 20 characters" })
    .regex(/^[A-Za-z]+$/, {
      message: "First name must only contain alphabets",
    }),

  lastName: z
    .string()
    .min(3, { message: "Last name must be more than 3 characters" })
    .max(20, { message: "Last name must be less than 20 characters" })
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

export const ProfileForm = React.memo(
  ({
    isUpdating,
    setIsUpdating,
  }: {
    isUpdating: boolean;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const { toast } = useToast();
    const router = useTransitionRouter();
    const ref = useRef<HTMLDivElement>(null);
    const [isCalendarFocused, setIsCalendarFocused] = useState(false);
    const user = useAppSelector((state: RootState) => state.user.user);
    // console.log(user);
    const profileForm = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      mode: "onTouched",
      defaultValues: {
        firstName: user?.firstname || "",
        lastName: user?.lastname || "",
        email: user?.email || "",
        phoneNumber: user?.phone || "",
        dob: user?.dob || "",
      },
    });
    useEffect(() => {
      // This will reset the form when user data is loaded
      profileForm.reset({
        firstName: user?.firstname || "",
        lastName: user?.lastname || "",
        email: user?.email || "",
        phoneNumber: user?.phone.slice(-10) || "",
        dob: user?.dob || "",
      });
    }, [user, profileForm.reset]);
    const errors = profileForm.formState.errors;
    const handleCalendarFocusOutside = () => {
      // setIsCalendarFocused(false);
    };
    useOnClickOutside(ref, handleCalendarFocusOutside);

    const {
      mutate: updateMutation,
      isLoading,
      isError,
      data,
    } = useMutation(
      async (values: any) => {
        const promises = [];
        // Check if fields are updated and push corresponding requests
        if (
          values.firstname !== user?.firstname ||
          values.lastname !== user?.lastname
        ) {
          promises.push(updateUserName(values.firstname, values.lastname));
        }

        if (values.email !== user?.email) {
          promises.push(updateUserEmail(values.email));
        }

        if (values.dob !== formatDate(user?.dob)) {
          promises.push(updateUserDob(values.dob));
        }

        // Add more checks for other fields as necessary
        if (promises.length === 0) {
          // Return a rejected promise to prevent onSuccess from being called
          return Promise.reject(new Error("Nothing was changed"));
        }

        // Execute all promises in parallel
        return Promise.all(promises);
      },
      {
        onSuccess: (response: any) => {
          console.log(response);
          toast({
            title: "Profile updated successfully!",
            icon: (
              <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
                <FaCircleCheck className="text-state-success-600" />
              </div>
            ),
          });
        },
        onError: (error: any) => {
          console.error("Error during update:", error);
          toast({
            title: "Update failed",
            description: error.message || "An unexpected error occurred.",
            variant: "error",
            icon: (
              <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
                <MdCancel className="text-state-error-500" />
              </div>
            ),
          });
        },
      }
    );

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
      // console.log({ ...values, dob: formatDate(values.dob) });
      updateMutation({
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        phone: "+234" + values.phoneNumber,
        dob: formatDate(values.dob),
      });
    };

    return (
      <>
        <Form {...profileForm}>
          <form
            onSubmit={profileForm.handleSubmit(handleSubmit)}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <FormField
                control={profileForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          !isUpdating && "bg-[#F7F9FC]"
                        }${getFieldClassName(
                          profileForm.formState,
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
                control={profileForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2 ${
                          !isUpdating && "bg-[#F7F9FC]"
                        }${getFieldClassName(
                          profileForm.formState,
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
              control={profileForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        !isUpdating && "bg-[#F7F9FC]"
                      }${getFieldClassName(
                        profileForm.formState,
                        errors,
                        "email"
                      )}`}
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
              control={profileForm.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        !isUpdating && "bg-[#F7F9FC]"
                      } ${getFieldClassName(
                        profileForm.formState,
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
                control={profileForm.control}
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
                              profileForm.formState,
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

                              {field.value && field.value !== "" ? (
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
                                console.log(date);
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
                control={profileForm.control}
                name="dob"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <BorderedDiv
                          className={`items-center gap-2  ${
                            !isUpdating && "bg-[#F7F9FC]"
                          }`}
                        >
                          <div className="flex gap-2 flex-1">
                            <CiCalendar className="text-xl text-grey-400" />
                            <span className="text-grey-400 font-normal text-sm">
                              {field.value && field.value !== "" ? (
                                <span className="text-grey-400 font-normal text-sm">
                                  {format(new Date(field.value), "PPP")}
                                </span>
                              ) : (
                                <span className="text-grey-400 font-normal text-sm">
                                  Birthday
                                </span>
                              )}
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
                disabled={profileForm.formState.isSubmitting}
                className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                  profileForm.formState.isSubmitting &&
                  "opacity-65 transition-all"
                }`}
              >
                {profileForm.formState.isSubmitting
                  ? "Saving..."
                  : "Save changes"}
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
      </>
    );
  }
);
