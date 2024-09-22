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
import { useRouter } from "next/navigation";
import { CiCalendar, CiMail, CiUser } from "react-icons/ci";
import { FaChevronDown, FaCircleCheck } from "react-icons/fa6";
import { Calendar } from "@/components/ui/new-calendar";
import { format } from "date-fns";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useToast } from "../ui/use-toast";
import AuthHeading from "./auth-heading";
import Spinner from "../ui/spinner";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { BackButton } from "../back-button";
import { ArrowLeft } from "lucide-react";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<RegistrationFormData | null>(null);

  const handleFormSubmit = (data: RegistrationFormData) => {
    setUserData(data);
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <RegistrationForm onSubmit={handleFormSubmit} />}
      {step === 2 && userData && (
        <OtpForm phoneNumber={userData.email} setStep={setStep} />
      )}
      {step === 3 && <AccountCreated />}
    </div>
  );
}

// const stepOneFormSchema = z.object({
//   phoneNumber: z
//     .string()
//     .min(10, "Phone number must be at least 10 digits")
//     .regex(/^\d+$/, "Phone number must only contain numbers"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// const StepOneForm = () => {
//   const router = useRouter();
//   const form = useForm<z.infer<typeof stepOneFormSchema>>({
//     resolver: zodResolver(formSchema),
//     mode: "onTouched",
//     defaultValues: {
//       phoneNumber: "",
//     },
//   });

//   const errors = form.formState.errors;

//   // Submit handler
//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     await new Promise((resolve, reject) => setTimeout(resolve, 1000));
//     router.push("/");
//     console.log(values);
//   };

//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
//           <FormField
//             control={form.control}
//             name="phoneNumber"
//             render={({ field }) => (
//               <FormItem className="space-y-0">
//                 <FormControl>
//                   <BorderedDiv
//                     className={`items-center gap-2 ${
//                       form.formState.touchedFields.phoneNumber &&
//                       !errors.phoneNumber &&
//                       "bg-grey-75"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">
//                       <NGFlag />
//                       <span className="font-normal dark:text-white text-sm text-grey-400">
//                         +234
//                       </span>
//                     </div>
//                     <UnstyledInput
//                       type="text"
//                       placeholder="Enter phone number"
//                       className="placeholder:text-grey-400 font-normal"
//                       {...field}
//                     />
//                   </BorderedDiv>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//         </form>
//       </Form>
//     </div>
//   );
// };

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name must be more than 3 characters" })
      .max(50, { message: "First name must be less than 50 characters" })
      .regex(/^[A-Za-z]+$/, {
        message: "First name must only contain alphabets",
      }),

    lastName: z
      .string()
      .min(3, { message: "Last name must be more than 3 characters" })
      .max(50, { message: "Last name must be less than 50 characters" })
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
    dob: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegistrationForm = ({
  onSubmit,
}: {
  onSubmit: (data: RegistrationFormData) => void;
}) => {
  const { toast } = useToast();
  const ref = useRef<HTMLDivElement>(null);
  const [isCalendarFocused, setIsCalendarFocused] = useState(false);
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
  };

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
        text={"Complete your profile"}
        className="w-[250px] mx-auto"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
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
                      form.formState.touchedFields.password && !errors.password
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

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative" ref={ref}>
                    <BorderedDiv
                      className={`items-center gap-2 ${
                        form.formState.touchedFields.dob && !errors.dob
                          ? "bg-grey-75"
                          : ""
                      } ${isCalendarFocused && "border-state-success-200"}`}
                      onClick={() => setIsCalendarFocused(!isCalendarFocused)}
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
                      <FaChevronDown className="text-sm text-grey-400" />
                    </BorderedDiv>
                    <Calendar
                      mode="single"
                      captionLayout="dropdown-buttons"
                      className={`bg-white absolute bottom-14 left-1/2 -translate-x-1/2 shadow rounded invisible opacity-0 ${
                        isCalendarFocused &&
                        "opacity-100 visible transition-opacity duration-200"
                      }`}
                      fromYear={1990}
                      toYear={2024}
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => {
                        if (date) {
                          const formattedDate = format(date, "yyyy-MM-dd"); // Format the date as 'YYYY-MM-DD'
                          field.onChange(formattedDate); // Return the formatted string
                        }
                      }}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
              form.formState.isSubmitting && "opacity-65 transition-all"
            }`}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Continue"}
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
  const { toast } = useToast();

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    mode: "onTouched",
  });

  const handleOtpSubmit = async (values: z.infer<typeof otpSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      variant: "fade",
      title: "We sent you a verification link",
      description: "Check your email to verify your email",
    });
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
      <AuthHeading
        text={"Paste OTP Sent to your email address"}
        className="w-[250px] mx-auto"
      />
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
                    />
                  </BorderedDiv>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit OTP button */}
          <Button
            type="submit"
            disabled={otpForm.formState.isSubmitting}
            className={`bg-primary w-full uppercase rounded-md font-semibold mt-4 ${
              otpForm.formState.isSubmitting && "opacity-65 transition-all"
            }`}
          >
            {otpForm.formState.isSubmitting ? "Loading..." : "Confirm Email"}
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

const AccountCreated = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-80px)] md:h-[calc(100dvh-200px)]">
      <div className="text-center text-grey-900">
        <Spinner />
        <h2 className="text-lg font-bold">Account set up completed</h2>
        <p className="text-[10.5px] ">Getting you the best deal</p>
      </div>
    </div>
  );
};
