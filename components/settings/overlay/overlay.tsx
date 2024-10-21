"use client";
import { useAppSelector } from "@/redux-store/hooks";
import Backdrop from "../../ui/backdrop";
import { RootState } from "@/redux-store/store";
import { slideUp } from "@/variants";
import { DeleteAddress } from "./delete-address";
import { RuleOfUse } from "./rule-of-use";

export default function SettingsOverlay() {
  const activeScreen = useAppSelector(
    (state: RootState) => state.settingsOverlay.activeScreen
  );
  return (
    <Backdrop variants={slideUp}>
      <div className="h-full flex w-full justify-center items-center ">
        {activeScreen === "delete" && <DeleteAddress />}
        {activeScreen === "promo" && <RuleOfUse />}
      </div>
    </Backdrop>
  );
}
