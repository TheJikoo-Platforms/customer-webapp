import { BackButton } from "@/components/back-button";
import { DealsSection } from "@/components/deals/deals-section";
import InnerHeader from "@/components/inner-page-header-mobile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals of the day",
  description: "Deals of the day",
};

export default async function Deals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return (
    <div className="bg-white min-h-screen lg:bg-transparent">
      <div className="bg-white py-3 px-6 mt-[57px] md:mt-0 lg:mb-4 lg:rounded-xl items-center gap-2 hidden lg:flex">
        <BackButton />
        <span className="text-lg text-[#1E1E1E] font-bold tracking-[-0.4px]">
          Deals of the day
        </span>
      </div>

      <InnerHeader text="Deals of the day" className="block lg:hidden" />

      <div className="bg-white lg:rounded-xl p-6 pb-[125px] lg:pb-6">
        <DealsSection />
      </div>
    </div>
  );
}
