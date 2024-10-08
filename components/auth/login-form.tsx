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

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [isEnteringNumber, setIsEnteringNumber] = useState(false);

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

  const formSchema = isEnteringNumber
    ? phoneAndPasswordSchema
    : emailAndPasswordSchema;
  const combinedDefaultValues = isEnteringNumber
    ? { phoneNumber: "", password: "" }
    : { mail: "", password: "" };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: combinedDefaultValues,
  });

  const errors = form.formState.errors;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Check if the first character is a number
    if (value.length > 0) {
      setIsEnteringNumber(/^\d/.test(value));
    }
  };
  // Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
    router.push("/");
    if ("phoneNumber" in values) {
      // Handle phone number submission
      console.log(values.phoneNumber, values.password);
    } else {
      // Handle email submission
      console.log(values.mail, values.password);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name={isEnteringNumber ? "phoneNumber" : "mail"}
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-sm font-medium">
                  Email/Phone number
                </FormLabel>
                <FormControl>
                  <BorderedDiv
                    // React Form Library Error.
                    className={`items-center gap-2 ${
                      isEnteringNumber
                        ? // @ts-ignore
                          form.formState.touchedFields?.phoneNumber &&
                          // @ts-ignore
                          !errors?.phoneNumber &&
                          "bg-grey-75"
                        : // @ts-ignore
                          form.formState.touchedFields?.mail &&
                          // @ts-ignore
                          !errors?.mail &&
                          "bg-grey-75"
                    }`}
                  >
                    {isEnteringNumber && (
                      <div className="flex items-center gap-2">
                        <NGFlag />
                        <span className="font-normal dark:text-white text-sm text-grey-400">
                          +234
                        </span>
                      </div>
                    )}
                    <UnstyledInput
                      type="text"
                      placeholder=""
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Keep the form field updated
                        handleInputChange(e); // Check input type
                      }}
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
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      form.formState.touchedFields.password &&
                      !errors.password &&
                      "bg-grey-75"
                    }`}
                  >
                    <PasswordKey />
                    <UnstyledInput
                      type={showPassword ? "number" : "password"}
                      placeholder="Confirm password"
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

          <Link
            href={"/reset-password"}
            className="font-inter text-sm font-normal text-[10px] sm:text-sm text-primary underline-offset-4 underline py-0"
            type="button"
          >
            Reset Password
          </Link>

          <div className="flex flex-col space-y-3">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                form.formState.isSubmitting && "opacity-65 transition-all"
              }`}
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
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
    </div>
  );
};

export default LoginForm;
