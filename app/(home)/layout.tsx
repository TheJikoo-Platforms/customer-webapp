import { Footer } from "@/components/footer";
import { EnterLocation, Header } from "@/components/header";
import { PromoBanner } from "@/components/home/promo-banner";
import { BottomNav } from "@/components/mobile-nav";
import { NormalWrapper } from "@/components/wrappers";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-[68px] xl:mt-[72px]">
        <PromoBanner />
      </div>
      <div className="">
        <EnterLocation className="flex md:hidden py-6 px-[18px]" />
      </div>
      <NormalWrapper>
        <main className="flex flex-col flex-1 mb-16 lg:mb-6">{children}</main>
      </NormalWrapper>
      {/* <Footer /> */}
      <div className="sm:hidden">
        <BottomNav />
      </div>
    </>
  );
}
