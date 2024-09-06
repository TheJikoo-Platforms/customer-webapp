"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

export const NextThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
};
