import React from "react";
import AuthImageSection from "@/components/auth-image-section";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-[100dvh] bg-white">
        <div className="flex">
          <AuthImageSection className="invisible" />
          <AuthImageSection className="fixed" />
          <div className="p-6 max-w-[400px] mx-auto py-10 md:py-[100px] w-full md:w-1/2">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
