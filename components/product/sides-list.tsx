import { SideItem } from "./side-item";

export const SideList = () => {
  return (
    <ul className="grid grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 sm:flex sm:overflow-x-auto">
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
      <li>
        <SideItem />
      </li>
    </ul>
  );
};
