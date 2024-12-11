import { useAppSelector } from "@/redux-store/hooks";
import { TopUpOptionsModal } from "./top-up-modal";
import { AmountModal } from "./amount-modal";
import Backdrop from "@/components/ui/backdrop";
import { slideUp } from "@/variants";

export const WalletOverlay = () => {
  const { showTopUpModal, showAmountModal } = useAppSelector(
    (state) => state.topUp
  );

  if (!showTopUpModal && !showAmountModal) return null;

  return (
    <Backdrop variants={slideUp}>
      {showTopUpModal && <TopUpOptionsModal />}
      {showAmountModal && <AmountModal />}
    </Backdrop>
  );
};
