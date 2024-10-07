// app/providers.tsx
"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
    // defaultTheme="system"
    // enableSystem
    // disableTransitionOnChange
    // attribute="class"
    >
      {/* <GoogleOAuthProvider clientId="571663138133-cgdom5evgpkd44q8oiijuqsr2h6hs1dm.apps.googleusercontent.com"> */}
      {children}
      {/* </GoogleOAuthProvider> */}
    </ThemeProvider>
  );
}
