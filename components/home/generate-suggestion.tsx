import Image from "next/image";
import Food from "@/public/store/2.png";
import { Button } from "../ui/button";

export const GenerateSuggestion = () => {
  return (
    <div className="text-center items-center flex flex-col mx-auto max-w-[500px]">
      <div>
        <Image
          alt=""
          {...Food}
          className="aspect-[15/10] object-cover rounded sm:rounded-dm"
        />
      </div>
      <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-7">
        Chicken Pasta, Turkey{" "}
      </p>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">₦ 3,500</h2>
      <div className="flex gap-3 justify-between mt-7 sm:mt-12 md:mt-14 lg:mt-16 ">
        <Button className="md:px-16">ORDER NOW</Button>
        <Button variant={"outline"} className="md:px-16">
          RETRY
        </Button>
      </div>
    </div>
  );
};
