import type { Metadata } from "next";
import Link from 'next/link';
import Image from "next/image";
import NoData from "@/public/empty/no-data.png";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  // Export a metadata variable
  title: "404 - Page you are looking for does not exist",
};

export default function NotFound() {
  return (
    <div className="max-md:py-20">
      <div className="text-center flex flex-col items-center gap-2 md:gap-5">
        <div>
          <Image
            alt=""
            src={NoData}
            width={NoData.width}
            height={NoData.height}
            className="max-w-48 md:max-w-sm"
          />
        </div>
        <h1 className="font-bold text-[28px]/[32px] sm:text-3xl md:text-4xl  lg:text-6xl leading-none tracking-tighter ">
          404 - Page Not Found
        </h1>
        <Button asChild><Link href={'/'}>Back to Home</Link></Button>
      </div>
    </div>
  );
}
