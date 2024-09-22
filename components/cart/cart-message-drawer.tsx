"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DrawerCard } from "@/components/drawer-card";
import { removeQueryParams } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { useValidSearchParam } from "@/hooks/use-valid-searchParams";

export const CartMessageDrawer = () => {
  const edit = useValidSearchParam({
    name: "message",
    validArr: ["cart"],
  });
  const open = !!edit;

  return (
    <Drawer open={open} onClose={() => removeQueryParams(["message"])} modal>
      <DrawerOverlay onClick={() => removeQueryParams(["message"])} />
      <DrawerContent
        className="bg-white dark:bg-secondary-foreground z-[100] "
        aria-modal
      >
        <CartMessageForm />
      </DrawerContent>
    </Drawer>
  );
};

const formSchema = z.object({
  message: z.string().min(1, "Please fill a valid email"),
});
export const CartMessageForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <DrawerCard
      title="Message for the Vendor"
      cancel
      cancelAction={() => removeQueryParams(["message"])}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type an important message for the vendor"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-primary w-full rounded-full">
            Add message
          </Button>
        </form>
      </Form>
    </DrawerCard>
  );
};
