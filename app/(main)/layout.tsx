"use client";
import useAuthCheck from "@/hooks/use-auth";
import React from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthCheck();
  return <React.Fragment>{children}</React.Fragment>;
}
