import type { Metadata } from "next";
import type { Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ReduxProviders } from "@/redux-store/providers";

const APP_NAME = "Jikoo";
const APP_DEFAULT_TITLE = "Jikoo";
const APP_TITLE_TEMPLATE = "%s - Jikoo";
const APP_DESCRIPTION = "Jikoo";
const APP_IMAGES = [
  "https://jikoo.vercel.app/_next/image?url=%2Ficon-512.png&w=640&q=100",
];

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: APP_IMAGES,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: APP_IMAGES,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    // userScalable: false
    interactiveWidget: "resizes-content",
  },
};

export function generateViewport() {
  return {
    themeColor: "#009933",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProviders>
      <ViewTransitions>
        <html lang="en" suppressHydrationWarning>
          {/* <body className={dmSans.className + " min-h-dvh flex flex-col"}> */}
          <body className={"min-h-dvh flex flex-col"}>
            {/* <PWAInstallPrompt/> */}
            <Providers>
              {children}
              <Toaster />
            </Providers>
          </body>
        </html>
      </ViewTransitions>
    </ReduxProviders>
  );
}
