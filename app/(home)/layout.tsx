import { Header } from "@/components/header";
import { BottomNav } from "@/components/mobile-nav";
import { NormalWrapper } from "@/components/wrappers";
import {
  AuthNotification,
  CartNotification,
} from "@/components/fixed-notification";
import Backdrops from "@/components/backdrops";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Backdrops />
      <div className="min-h-dvh">
        <Header />
        <main className="flex flex-col flex-1 mb-16 lg:mb-6">{children}</main>
        <div className="sm:hidden">
          <AuthNotification />
          {/* <CartNotification /> */}
          <BottomNav />
        </div>
      </div>
    </>
  );
}
