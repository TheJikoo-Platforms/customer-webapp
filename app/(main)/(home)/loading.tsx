// 'use client'
import Image from "next/image";
// import loading from '@/public/loader.svg'
import loading from "@/public/loop2.gif";
// import Lottie from "lottie-react";

// import loadingLoop from '@/public/ss2.json'
export default function Loading() {
  return (
    <div className="bg-white dark:bg-primary-foreground shadow grid place-content-center h-screen overflow-y-hidden">
      <Image alt="" {...loading} className="h-40 md:h-64 w-auto" unoptimized />
      {/* <object data="/loader.svg" type="image/svg+xml"></object> */}

      {/* <Lottie className='md:h-64' animationData={loadingLoop} loop={false} /> */}
    </div>
  );
}
