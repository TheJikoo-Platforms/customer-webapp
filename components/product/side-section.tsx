import { Info } from "lucide-react";
import { SideList } from "./sides-list";

export const SideSection = () => {
  return (
    <div className=" mt-5 sm:mt-10 md:mt-12">
      <div className="flex items-center ">
        <div className="w-1 h-5 md:w-2 md:h-10 bg-primary mr-2.5 md:mr-4" />
        <h1 className="text-2xl md:text-4xl mr-2 md:mr-2.5 font-bold">
          Available Sides
        </h1>
        <Info className="size-[17px] md:size-5" />
          </div>
          <div className="mt-5 sm:mt-6 md:mt-7">
              <SideList/>
          </div>
    </div>
  );
};
