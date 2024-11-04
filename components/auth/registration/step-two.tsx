"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  emailSchema,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  passwordSchema,
  phoneSchema,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { useToast } from "@/components/ui/use-toast";
import AuthHeading from "../auth-heading";
import BorderedDiv from "../bordered-div";
import { UnstyledInput } from "@/components/ui/unstyled-input";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { NGFlag } from "../ui/icons";
import { FaCircleCheck } from "react-icons/fa6";
import { getFieldClassName } from "@/lib/utils";
import Tab, { ITabOptions } from "../tab";
import { useMutation } from "@tanstack/react-query";
import { verifyMail } from "@/api/requests";

interface StepTwoProps {
  onSubmit: (data: string) => void;
  handleNextStep: (num: number) => void;
}

export const StepTwoForm = React.memo(
  ({ onSubmit, handleNextStep }: StepTwoProps) => {
    const { toast } = useToast();
    const [authOption, setAuthOption] = useState("mail");
    // Combined schemas

    const formSchema = authOption === "phone" ? phoneSchema : emailSchema;
    const combinedDefaultValues = authOption
      ? { phoneNumber: "", password: "" }
      : { mail: "", password: "" };
    const stepTwoForm = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      mode: "onTouched",
      defaultValues: combinedDefaultValues,
    });
    const errors = stepTwoForm.formState.errors;
    // const {
    //   mutate: verifyMutation,
    //   isLoading,
    //   isError,
    // } = useMutation(
    //   (values: z.infer<typeof formSchema>) => {
    //     if ("phoneNumber" in values) {
    //       return loginUserNumber({
    //         phone: "+234" + values.phoneNumber,
    //         password: values.password,
    //       });
    //     } else {
    //       return verifyMail({ email: values.mail });
    //     }
    //   },
    //   {
    //     onSuccess: (response) => {
    //       console.log("Login successful:", response);
    //       toast({
    //         title: response?.message,
    //         icon: (
    //           <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
    //             <FaCircleCheck className="text-state-success-600" />
    //           </div>
    //         ),
    //       });
    //     },
    //     onError: (error: any) => {
    //       console.error(
    //         "Error during login:",
    //         error.response?.data || error.message
    //       );
    //       const errorMessage = !error.response
    //         ? "Network error: Please check your internet connection."
    //         : error.response.data.errors ||
    //           error.response.data.message ||
    //           "An unexpected error occurred.";

    //       toast({
    //         title: errorMessage,
    //         variant: "error",
    //         icon: (
    //           <div className="w-6 h-6 bg-state-error-50 border border-state-error-75 flex items-center justify-center rounded">
    //             <MdCancel className="text-state-error-500" />
    //           </div>
    //         ),
    //       });
    //     },
    //   }
    // );

    const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
      onSubmit("");
    };

    return (
      <div className="flex flex-col min-h-[calc(100dvh-100px)] md:min-h-[initial]">
        <div className="flex-1">
          <div className="flex items-center justify-center relative">
            <button
              type="button"
              onClick={() => handleNextStep(1)}
              className="cursor-pointer absolute left-0"
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
          <AuthHeading text="Create your account" className="my-14" />

          <Form {...stepTwoForm}>
            <form
              onSubmit={stepTwoForm.handleSubmit(handleFormSubmit)}
              className="space-y-3"
            >
              <FormField
                control={stepTwoForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <BorderedDiv
                        className={`items-center gap-2  ${getFieldClassName(
                          stepTwoForm.formState,
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
                          // type="text"
                          type="number"
                          // placeholder="jondoe@mail.com"
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

              <Button
                type="submit"
                disabled={stepTwoForm.formState.isSubmitting}
                className={`bg-primary w-full rounded-md font-semibold mt-4 ${
                  stepTwoForm.formState.isSubmitting &&
                  "opacity-65 transition-all"
                }`}
              >
                {stepTwoForm.formState.isSubmitting
                  ? "Submitting..."
                  : "Proceed"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-center flex gap-2 justify-center mt-4">
          <p className="text-center text-[#475467] text-xs mt-[100px] md:mt-[58px] w-[230px] mx-auto md:w-full md:mx-0">
            Creating an account means you have agree to our{" "}
            <Link href={""} className="underline underline-offset-4">
              Terms and Privacy policy
            </Link>
          </p>
        </div>
      </div>
    );
  }
);
