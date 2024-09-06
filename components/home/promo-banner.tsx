import { ChevronRight, ChevronLeft } from "lucide-react";

export const PromoBanner = () => {
  return (
    <div className="px-6 py-3 bg-[#004617] items-center gap-3 flex">
      <ChevronLeft size={16} className="text-white shrink-0" />
      <div className="grow py-3 text-sm text-center">
        <span className="text-white  font-bold leading-tight">
          Buy more, save more | Up to 30% off 3+ Items | Code: SAVEITEMS{" "}
        </span>
        <span className="text-[#f5b546]  font-normal underline leading-tight">
          Click here
        </span>
      </div>

      <ChevronRight size={16} className="text-white shrink-0" />
    </div>
  );
};
