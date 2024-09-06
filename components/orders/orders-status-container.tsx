import { Copy } from "lucide-react";
import { FiAlertTriangle } from "react-icons/fi";
import { SquarePen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CopyToClipboard } from "../clipboard/copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { ReviewModal } from "./review-modal";
import { ReportModal } from "./report-modal";

export const OrdersStatusContainer = ({
  children,
  label,
  icon,
  status = "settled",
}: {
  children: React.ReactNode;
  label: string;
  icon: React.ReactNode;
  status?: "active" | "settled";
}) => {
  return (
    <div className="rounded-[10px] border border-black/25 dark:border-white/25">
      <div className="flex justify-between text-[10px] sm:text-base md:text-lg px-4 py-3 md:px-6 lg:px-10 md:py-5">
        <div className=" flex gap-1 md:gap-2 items-center">
          {icon}
          {label}
        </div>
        <div className="flex gap-2">
          <h3 className="max-md:hidden">Order Number:</h3>
          <CopyToClipboard
            className="text-jikoo-order dark:text-purple-400 flex gap-1 items-center"
            item={{ id: "WUB889", time: new Date(Date.now()), type: "order" }}
          >
            <Copy className="size-4 text-black dark:text-purple-400" />
            WUB889
          </CopyToClipboard>
        </div>
        <div className="flex gap-1 text-black/60 dark:text-white">
          <p>8:30</p>
          <p>8/2/2023</p>
        </div>
      </div>
      <Separator />
      {children}
      <div className="text-[11px] sm:text-sm md:text-lg lg:text-xl px-4 max-w-[600px] mx-auto">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-7 py-5 sm:py-7 md:py-8 lg:py-10">
          <div className="flex justify-between">
            <p className="text-black/60 dark:text-white">Subtotal</p>
            <h3 className=" font-bold">₦2,500</h3>
          </div>
          <div className="flex justify-between dark:text-white">
            <p className="text-black/60 dark:text-inherit">Standard Delivery</p>
            <h3 className=" font-bold">₦2,500</h3>
          </div>
        </div>
        <Separator />
        <div className="py-5 sm:py-7 md:py-8 lg:py-10">
          <div className="flex justify-between">
            <p className="text-black/60 dark:text-white">Grand Total</p>
            <h3 className=" font-bold">₦2,500</h3>
          </div>
          {status === "active" && (
            <div className="mt-[30px] flex justify-center ">
              <Button className="w-4/5 md:w-full mx-auto">
                Track this order
              </Button>
            </div>
          )}
          {status === "settled" && (
            <div className="flex justify-between gap-2.5 md:gap-4 mt-[30px]">
              <ReviewModal
                trigger={
                  <Button className="w-full gap-1.5 md:gap-3">
                    <SquarePen className="size-3 md:size-5" /> Write a Review
                  </Button>
                }
              />

              <ReportModal
                trigger={
                  <Button
                    className="w-full border-jikoo-red text-jikoo-red gap-1.5 md:gap-3"
                    variant={"outline"}
                  >
                    <FiAlertTriangle className="size-3 md:size-5" /> Report
                  </Button>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
