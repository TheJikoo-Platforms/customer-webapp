import { AuthModal } from "@/components/auth/auth-modal";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PromoBanner } from "@/components/home/promo-banner";
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
      <div className="mt-[68px] xl:mt-[72px]">
        <PromoBanner />
      </div>
      <main className="flex flex-col flex-1 pb-[68px]  ">
        {children}
      </main>
      <div className="max-sm:hidden">
        <Footer />
      </div>
      <div className="sm:hidden">
        <BottomNav />
      </div>
    </>
  );
}
