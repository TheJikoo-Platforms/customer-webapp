// import { InfoBar } from "@/components/home/info-bar";
import { Menu } from "@/components/menu";
import { MenuBar } from "@/components/menu-bar";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-md:hidden">{/* <MenuBar /> */}</div>
      {children}
    </>
  );
}
