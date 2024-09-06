import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { SearchSelect } from "../ui/search-select";


const ISSUES = [
  "Order Accuracy",
  "Late Delivery",
  "Food Quality",
  "Riders Experience",
  "Payment Issues",
  "Technical Glitches while ordering",
  "Missing Items in Order",
  "Issues with Promotional Offers or Discounts",
  "Packaging Quality",
  "Misleading photos or descriptions",
  "Excessive Packaging",
  "Misuse of Personal information",
  "Language barrier with the Rider",
  "Delivery Address Issues",
  "Vendors Incompetence",
  "Unsatisfactory Presentation of Food",
  "Food Temperature Upon Delivery",
  "Unresponsive Customer Service",
  "Overcharging or Incorrect Billing",
  "Difficulty in Tracking Order",
  "Inadequate Portion Sizes",
  "Food Allergy Concerns",
  "Poor Hygiene Standards",
  "Limited Menu Options",
  "Overall Experience",
];

export const ReportModal = ({ trigger }: { trigger: React.ReactNode }) => {
  const handleChange = (value: string|null) => {};
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[330px] z-[100] sm:max-w-3xl bg-white rounded-dm md:px-8">
        <DialogHeader className="font-medium md:font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl mb-1 sm:mb-2 md:mb-3 lg:mb-5 sm:text-center">
          Report Order
        </DialogHeader>
        <div>
          <form action="">
            <div className="text-xs sm:text-base md:text-lg space-y-4 md:space-y-6 lg:space-y-7">
              <div className="grid grid-cols-[100px,auto] md:grid-cols-[150px,auto] items-center">
                <label htmlFor="type" className="font-medium">
                  Report Type
                </label>

                <SearchSelect
                  value={""}
                  options={ISSUES}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2.5 md:gap-5">
                <label htmlFor="" className="font-medium">
                  Description
                </label>
                <Textarea placeholder="Enter a description" />
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12">
              <Button className="w-full">SUBMIT</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
