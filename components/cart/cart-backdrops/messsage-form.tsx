import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/redux-store/hooks";
import { setShowCartOverlay } from "@/redux-store/slices/backdrop/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .max(25, "Message must be 25 words or less")
    .refine((val) => val.split(/\s+/).length <= 25, {
      message: "Message must be 25 words or less",
    }),
});

export const MessageForm = () => {
  const dispatch = useAppDispatch();
  const handleCloseOverlay = () => {
    dispatch(setShowCartOverlay({ activeItem: "", showOverlay: false }));
  };
  const form = useForm({
    resolver: zodResolver(messageSchema),
    mode: "onChange",
    defaultValues: { message: "" },
  });

  const handleSubmit = async (values: z.infer<typeof messageSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(values);
  };

  const message = form.watch("message");

  return (
    <div className=" bg-white w-full sm500:max-w-[420px] px-6 py-4 flex flex-col rounded-t-2xl sm500:rounded-2xl self-end sm500:self-center flex-1 pb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full max-w-lg space-y-4"
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-medium tracking-[-0.4px]">
              Message for the vendor
            </h2>
            <button
              onClick={handleCloseOverlay}
              type="button"
              className="text-sm text-gray-600"
            >
              Cancel
            </button>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full h-24 px-4 py-2 border rounded-sm resize-none focus-within:border focus-within:border-state-success-200 transition-all"
                    placeholder="Add a message for the vendor"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Word count */}
          {message.split(/\s+/).length < 25 && (
            <p className="text-sm text-right text-gray-500">
              {25 - message.split(" ").length + " words remaining"}
            </p>
          )}

          <Button
            type="submit"
            className="w-full text-white py-4 rounded-lg font-bold"
          >
            Add message
          </Button>
        </form>
      </Form>
    </div>
  );
};
