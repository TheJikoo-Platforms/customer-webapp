"use client";
import React from "react";
import InnerHeader from "../inner-page-header-mobile";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrPowerCycle } from "react-icons/gr";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { FormLabel } from "@mui/material";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTransitionRouter } from "next-view-transitions";
import { ArrowLeftIcon } from "../ui/icons";

const leavingSchema = z.object({
  reason: z.string().min(3, { message: "Please select a reason" }),
});

type LeavingFormValues = z.infer<typeof leavingSchema>;

export const DeleteAccount = React.memo(
  ({
    handleActiveScreen,
  }: {
    handleActiveScreen: (screen: string) => void;
  }) => {
    const form = useForm<LeavingFormValues>({
      resolver: zodResolver(leavingSchema),
      mode: "onTouched",
      defaultValues: {
        reason: "",
      },
    });

    const onSubmit = async (data: LeavingFormValues) => {
      await new Promise((resolve, reject) => setTimeout(resolve, 500));
      console.log("Form submitted with reason:", data.reason);
      handleDelete();
    };
    const router = useTransitionRouter();
    const handleDelete = () => {
      router.push("/register");
    };
    return (
      <>
        <InnerHeader
          className="md:hidden"
          onClick={() => handleActiveScreen("profile")}
          text="Delete account"
        />
        <div className="px-5 md:px-6 py-4 bg-white rounded-xl md:pb-20 h-full">
          <div className="">
            <button
              onClick={() => handleActiveScreen("profile")}
              type="button"
              className="flex items-center gap-2 pt-1 pb-5"
            >
              <ArrowLeftIcon />
              <h3 className="text-black font-bold tracking-[-0.48px] hidden md:block">
                Delete account
              </h3>
            </button>

            <div className="flex items-center gap-2.5 text-xs text-grey-900">
              <RiDeleteBinLine className="text-xl" />
              <p className="">
                Once deleted, all data will be permanently removed and cannot be
                recovered.
              </p>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-grey-900 mt-[14px]">
              <GrPowerCycle className="text-xl" />
              <p className="">
                To undo account deletion, you’ll need to create a new Jikoo
                account, as previous data cannot be recovered.
              </p>
            </div>

            <Form {...form}>
              <form
                className="border-t border-t-grey-100 mt-4 pt-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="text-grey-900 text-sm">
                  <h3 className="text-lg font-bold">Why are you leaving?</h3>

                  {/* Radio Options */}
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <div className="space-y-7 mt-5">
                        <FormItem>
                          <div className="flex items-center gap-3">
                            <FormLabel
                              htmlFor="no_service"
                              className="w-5 h-5 border border-grey-300 rounded-full flex justify-center items-center cursor-pointer"
                            >
                              {field.value === "no_service" && (
                                <div className="w-2.5 h-2.5 bg-grey-500 rounded-full"></div>
                              )}
                            </FormLabel>
                            <span>No longer using the service</span>
                          </div>
                          <FormControl>
                            <Input
                              type="radio"
                              value="no_service"
                              id="no_service"
                              checked={field.value === "no_service"}
                              onChange={field.onChange}
                              name={field.name}
                              className="hidden"
                            />
                          </FormControl>
                        </FormItem>

                        <FormItem>
                          <div className="flex items-center gap-3">
                            <FormLabel
                              htmlFor="privacy"
                              className="w-5 h-5 border border-grey-300 rounded-full flex justify-center items-center cursor-pointer"
                            >
                              {field.value === "privacy" && (
                                <div className="w-2.5 h-2.5 bg-grey-500 rounded-full"></div>
                              )}
                            </FormLabel>
                            <span>Privacy concerns</span>
                          </div>
                          <FormControl>
                            <Input
                              type="radio"
                              value="privacy"
                              id="privacy"
                              checked={field.value === "privacy"}
                              onChange={field.onChange}
                              name={field.name}
                              className="hidden"
                            />
                          </FormControl>
                        </FormItem>

                        <FormItem>
                          <div className="flex items-center gap-3">
                            <FormLabel
                              htmlFor="dissatisfied"
                              className="w-5 h-5 border border-grey-300 rounded-full flex justify-center items-center cursor-pointer"
                            >
                              {field.value === "dissatisfied" && (
                                <div className="w-2.5 h-2.5 bg-grey-500 rounded-full"></div>
                              )}
                            </FormLabel>
                            <span>Dissatisfied with the experience</span>
                          </div>

                          <FormControl>
                            <Input
                              type="radio"
                              checked={field.value === "dissatisfied"}
                              value="dissatisfied"
                              id="dissatisfied"
                              onChange={field.onChange}
                              name={field.name}
                              className="hidden"
                            />
                          </FormControl>
                        </FormItem>

                        <FormItem>
                          <div className="flex items-center gap-3">
                            <FormLabel
                              htmlFor="others"
                              className="w-5 h-5 border border-grey-300 rounded-full flex justify-center items-center cursor-pointer"
                            >
                              {field.value === "others" && (
                                <div className="w-2.5 h-2.5 bg-grey-500 rounded-full"></div>
                              )}
                            </FormLabel>
                            <span>Others</span>
                          </div>
                          <FormControl>
                            <Input
                              type="radio"
                              value="others"
                              id="others"
                              checked={field.value === "others"}
                              onChange={field.onChange}
                              name={field.name}
                              className="hidden"
                            />
                          </FormControl>
                        </FormItem>
                        <FormMessage />
                      </div>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="destructive"
                    className="mt-6 bg-state-error-400 w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Deleting"
                      : "Continue to delete account"}
                  </Button>
                </div>
              </form>
            </Form>

            <button
              type="button"
              className="text-gray-700 w-full tracking-normal mt-6 font-bold"
              onClick={() => handleActiveScreen("profile")}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }
);
