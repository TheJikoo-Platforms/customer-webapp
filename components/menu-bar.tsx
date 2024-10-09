// import { InfoBar } from "./home/info-bar";
import { Menu } from "./menu";

export const MenuBar = () => {
  return (
    <div className="container mb-[30px]">
      <div className="sm:grid grid-cols-[304px,auto] gap-4 lg:gap-5 max-w-full">
        <div className=" shrink-0 flex justify-between items-center bg-white dark:bg-secondary-foreground rounded-dm md:py-5 md:px-7  max-sm:hidden text-lg lg:text-[22px] font-bold ">
          <Menu />
          Menu
        </div>
        <div className=" min-w-0 space-y-5">{/* <InfoBar /> */}</div>
      </div>
    </div>
  );
};
