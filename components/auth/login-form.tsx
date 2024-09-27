"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must only contain numbers"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const errors = form.formState.errors;

  // Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
    router.push("/");
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-sm font-medium">
                  Email/Phone number
                </FormLabel>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      form.formState.touchedFields.phoneNumber &&
                      !errors.phoneNumber &&
                      "bg-grey-75"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <NGFlag />
                      <span className="font-normal dark:text-white text-sm text-grey-400">
                        +234
                      </span>
                    </div>
                    <UnstyledInput
                      type="text"
                      placeholder="Enter phone number"
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
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
                      type={showPassword ? "text" : "password"}
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
              className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
                form.formState.isSubmitting && "opacity-65 transition-all"
              }`}
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            <p
              // href={"/"}
              className="rounded-sm justify-center gap-4 border-[1.5px] border-[#D0D5DD] tracking-normal inline-flex items-center py-3.5 h-auto whitespace-nowrap text-[10px] sm:text-sm font-bold"
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
