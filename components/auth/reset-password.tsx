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
import { UnstyledInput } from "../ui/unstyled-input";
import BorderedDiv from "./bordered-div";
import { HidePasswordIcon, PasswordKey, ShowPasswordIcon } from "./ui/icons";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import AuthHeading from "./auth-heading";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ArrowLeft } from "lucide-react";
import { BackButton } from "../back-button";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<string | null>(null);

  const handleFormSubmit = (email: string) => {
    setUserData(email);
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <MailForm onSubmit={handleFormSubmit} />}
      {step === 2 && userData && (
        <OtpForm phoneNumber={userData} setStep={setStep} />
      )}
      {step === 3 && userData && <PasswordForm setStep={setStep} />}
    </div>
  );
}

const mailSchema = z.object({
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    )
    .email("Please enter a valid email"),
});

const MailForm = ({ onSubmit }: { onSubmit: (email: string) => void }) => {
  const { toast } = useToast();

  const mailForm = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  const handleMailSubmit = async (values: z.infer<typeof mailSchema>) => {
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
    onSubmit(values.email);
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      mailForm.formState.touchedFields.email && !errors.email
                        ? "bg-grey-75"
                        : ""
                    }`}
                  >
                    <UnstyledInput
                      type="text"
                      placeholder="Email Address"
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
                      {...mailForm.register("email")}
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
            className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
              mailForm.formState.isSubmitting && "opacity-65 transition-all"
            }`}
          >
            {mailForm.formState.isSubmitting
              ? "Confirming..."
              : "Confirm Email"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be exactly 6 digits" }) // Ensures length of 6
    .regex(/^\d{6}$/, { message: "OTP must contain only digits" }), // Ensures it is numeric
});

const OtpForm = ({
  phoneNumber,
  setStep,
}: {
  phoneNumber: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    mode: "onTouched",
  });

  const handleOtpSubmit = async (values: z.infer<typeof otpSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("OTP submitted: ", values);
    setStep(3);
  };

  const errors = otpForm.formState.errors;

  return (
    <div>
      <div className="flex items-center justify-center relative">
        <button
          onClick={() => setStep(1)}
          className={
            "cursor-pointer p-1.5 rounded border border-[#E4E7EC] absolute left-0"
          }
        >
          <ArrowLeft className="size-3" />
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
      <AuthHeading text="Set new password" className="w-[250px] mx-auto mb-8" />

      <p className="text-grey-500 text-sm leading-[20.3px] mb-4">
        Enter the 6-digit code sent to your email address to reset your password
      </p>
      <Form {...otpForm}>
        <form
          onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
          className="space-y-3"
        >
          <FormField
            control={otpForm.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <BorderedDiv
                    className={`items-center gap-2 ${
                      otpForm.formState.touchedFields.otp && !errors.otp
                        ? "bg-grey-75"
                        : ""
                    }`}
                  >
                    <UnstyledInput
                      type="text"
                      placeholder="Enter 6-digits code"
                      className="placeholder:text-grey-400 font-normal"
                      {...field}
                      {...otpForm.register("otp")}
                    />
                  </BorderedDiv>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={otpForm.formState.isSubmitting}
            className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
              otpForm.formState.isSubmitting && "opacity-65 transition-all"
            }`}
          >
            {otpForm.formState.isSubmitting ? "Submitting..." : "Confirm"}
          </Button>
        </form>
      </Form>
      <div className="text-center flex gap-2 justify-center mt-8">
        <span className="text-sm text-grey-500 ">Didn’t receive?</span>
        <button type="button" className="text-[#036B26] text-sm font-medium">
          Resend
        </button>
      </div>
    </div>
  );
};

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(50, { message: "Password must be less than 50 characters" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Confirm Password must be at least 6 characters long",
      })
      .max(50, { message: "Confirm Password must be less than 50 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const PasswordForm = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const router = useRouter();
  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    mode: "onTouched",
  });
  const handleOtpSubmit = async (values: z.infer<typeof passwordSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("OTP submitted: ", values);
    router.push("/");
  };

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
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
          onClick={() => setStep(2)}
          className={
            "cursor-pointer p-1.5 rounded border border-[#E4E7EC] absolute left-0"
          }
        >
          <ArrowLeft className="size-3" />
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
                        passwordVisibility.confirmPassword ? "text" : "password"
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
            className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
              passwordForm.formState.isSubmitting && "opacity-65 transition-all"
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
};
