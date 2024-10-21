"use client";
import { useAppSelector } from "@/redux-store/hooks";
import Backdrop from "../../ui/backdrop";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { Filter } from "./filter";
import { TopUp } from "./top-up";

export default function WalletOverlay() {
  const activeScreen = useAppSelector(
    (state: RootState) => state.walletOverlay.activeScreen
  );
  return (
    <Backdrop variants={slideUp}>
      <div className="h-full flex w-full justify-center items-center">
        {activeScreen === "filter" && <Filter />}
        {activeScreen === "topUp" && <TopUp />}
      </div>
    </Backdrop>
  );
}
