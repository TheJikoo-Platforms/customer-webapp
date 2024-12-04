"use client";
import React, { useState } from "react";
import {
  emailSchema,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  passwordSchema,
  phoneSchema,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UnstyledInput } from "../ui/unstyled-input";
import BorderedDiv from "./bordered-div";
import {
  HidePasswordIcon,
  NGFlag,
  PasswordKey,
  ShowPasswordIcon,
} from "./ui/icons";
import { Button } from "../ui/button";
import Image from "next/image";

import GOOGLEICON from "@/public/google-icon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginUserMail, loginUserNumber } from "@/api/requests";
import { getFieldClassName } from "@/lib/utils";
import { MdCancel } from "react-icons/md";
import { useToast } from "../ui/use-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { useAppDispatch } from "@/redux-store/hooks";
import { setIsAuthenticated } from "@/redux-store/slices/authslice";
import AnimatePresenceContainer from "./ui/AnimatePresenceContainer";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(true);
  const [isUsingNumber, setIsUsingNumber] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  // Combined schemas
  const emailAndPasswordSchema = emailSchema.merge(passwordSchema);
  const phoneAndPasswordSchema = phoneSchema.merge(passwordSchema);

  // Union type of the combined schemas
  type CombinedSchema =
    | z.infer<typeof emailAndPasswordSchema>
    | z.infer<typeof phoneAndPasswordSchema>;

  const formSchema = isUsingNumber
    ? phoneAndPasswordSchema
    : emailAndPasswordSchema;
  const combinedDefaultValues = isUsingNumber
    ? { phoneNumber: "", password: "" }
    : { mail: "", password: "" };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: combinedDefaultValues,
  });
  const errors = form.formState.errors;
  const {
    mutate: loginMutation,
    isLoading,
    isError,
  } = useMutation(
    (values: z.infer<typeof formSchema>) => {
      if ("phoneNumber" in values) {
        return loginUserMail({
          emailOrPhone: "+234" + values.phoneNumber,
          password: values.password,
        });
      } else {
        return loginUserMail({
          emailOrPhone: values.mail,
          password: values.password,
        });
      }
    },
    {
      onSuccess: (response) => {
        console.log("Login successful:", response);
        toast({
          title: response?.message,
          icon: (
            <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
              <FaCircleCheck className="text-state-success-600" />
            </div>
          ),
        });
        if (response.data.accessToken) {
          localStorage.setItem("token", response?.data.accessToken);
          dispatch(setIsAuthenticated(true));
          setTimeout(() => {
            router.push("/");
          }, 500);
        }
      },
      onError: (error: any) => {
        console.error(
          "Error during login:",
          error.response?.data || error.message
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
    }
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    loginMutation(values);
  };

  return (
    <AnimatePresenceContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name={isUsingNumber ? "phoneNumber" : "mail"}
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-sm font-medium mb-1 transition-all">
                  {isUsingNumber ? "Phone" : "Email"}
                </FormLabel>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      isUsingNumber
                        ? getFieldClassName(
                            form.formState,
                            errors,
                            "phoneNumber"
                          )
                        : getFieldClassName(form.formState, errors, "mail")
                    }`}
                  >
                    {isUsingNumber && (
                      <div className="flex items-center gap-2">
                        <NGFlag />
                        <span className="font-normal dark:text-white text-sm text-grey-400">
                          +234
                        </span>
                      </div>
                    )}
                    <UnstyledInput
                      type={!isUsingNumber ? "text" : "number"}
                      // type="text"
                      placeholder={
                        isUsingNumber ? "09100000000" : "Enter email address"
                      }
                      className="placeholder:text-grey-400 font-normal placeholder:transition-all"
                      {...field}
                      // onChange={(e) => {
                      //   field.onChange(e);
                      //   handleInputChange(e);
                      // }}
                    />
                  </BorderedDiv>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium mb-1">
                  Password
                </FormLabel>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${getFieldClassName(
                      form.formState,
                      errors,
                      "password"
                    )}`}
                  >
                    <PasswordKey />
                    <UnstyledInput
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer"
                    >
                      {showPassword ? (
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

          <div className="flex justify-between">
            <Link
              href={"/reset-password"}
              className="text-sm font-normal text-[10px] sm:text-sm text-primary underline-offset-4 underline py-0"
              type="button"
            >
              Reset Password
            </Link>

            <button
              onClick={() => setIsUsingNumber((prev) => !prev)}
              className="text-sm text-grey-500 font-bold transition-all mr-1"
              type="button"
            >
              {isUsingNumber ? "Use Email" : "Use Phone"}
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              type="submit"
              disabled={isLoading}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                isLoading && "opacity-65 transition-all"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <p
              // href={"/"}
              className="rounded-sm justify-center gap-4 border-[1.5px] border-[#D0D5DD] tracking-normal inline-flex items-center py-[15px] h-auto whitespace-nowrap text-[10px] sm:text-sm font-semibold"
            >
              <Image
                src={GOOGLEICON}
                alt="google icon"
                width={GOOGLEICON.width}
                height={GOOGLEICON.height}
                className="w-5 h-5"
              />
              <span className="text-base text-grey-700">
                Continue with Google
              </span>
            </p>
          </div>
        </form>
      </Form>
      <div className="text-center flex gap-2 justify-center mt-6">
        <span className="text-sm text-grey-500 ">Are you new here?</span>
        <Link href={"/register"} className="text-[#036B26] text-sm font-medium">
          Create Account
        </Link>
      </div>

      <p className="text-center text-[#475467] text-xs mt-[100px] md:mt-[58px] w-[230px] mx-auto md:w-full md:mx-0">
        Creating an account means you have agree to our{" "}
        <Link href={""} className="underline underline-offset-4">
          Terms and Privacy policy
        </Link>
      </p>
    </AnimatePresenceContainer>
  );
};

export default LoginForm;
