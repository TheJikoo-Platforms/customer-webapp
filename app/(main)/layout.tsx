import { AuthModal } from "@/components/auth/auth-modal";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/mobile-nav";
import { WalletModal } from "@/components/wallet/wallet-modal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WalletModal />
      <AuthModal />
      <Header />
      <div className="sm:container">
        <main className="flex flex-col flex-1 pt-[68px] xl:pt-[72px] pb-[68px] dark:bg-primary-foreground bg-white max-w-[576px] sm:mt-6  ">
          {children}
        </main>
      </div>
      <div className="hidden">
        <Footer />
      </div>
      <div className="sm:hidden">
        <BottomNav />
      </div>
    </>
  );
}
