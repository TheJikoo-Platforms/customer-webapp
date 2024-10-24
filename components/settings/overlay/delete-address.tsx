"use client";
import { Button } from "../../ui/button";
import { setShowSettingsOverlay } from "@/redux-store/slices/settings-slice";
import { removeAddress } from "@/redux-store/slices/saved-address";
import { useToast } from "@/components/ui/use-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { ToastAction, ToastClose } from "../../ui/toast";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { RootState } from "@/redux-store/store";

export const DeleteAddress = () => {
  const currentAddress = useAppSelector(
    (state: RootState) => state.savedAddress.addressState.currentAddress
  );
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(
      setShowSettingsOverlay({ showSettingsOverlay: false, activeScreen: "" })
    );
  };
  const { toast } = useToast();
  const handleRemoveAddress = () => {
    if (currentAddress) {
      dispatch(removeAddress(currentAddress.area));
      handleClose();
      toast({
        title: "Address deleted",
        icon: (
          <div className="w-6 h-6 bg-state-success-50 border border-state-success-75 flex items-center justify-center rounded">
            <FaCircleCheck className="text-state-success-600" />
          </div>
        ),

        action: (
          <ToastClose
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-md p-1 text-foreground/50 opacity-100 lg:hidden" // Make it always visible
          >
            <X className="h-4 w-4 text-black" />
          </ToastClose>
        ),
        duration: Infinity,
      });
    }
  };
  return (
    <div className="bg-white p-6 flex flex-col self-end sm500:self-center w-full rounded-t-3xl sm500:rounded-2xl pb-10 text-center max-w-[550px] sm500:max-w-[450px]">
      <h2 className="text-grey-900 text-xl font-medium tracking-[-0.4px]">
        Delete address
      </h2>

      <p className="text-grey-400 text-xs mt-6">
        Are you sure you want to delete this address
      </p>
      <p className="text-grey-900 text-xs mt-1">{currentAddress?.address}</p>

      <Button
        type="button"
        variant="destructive"
        className="mt-6 bg-state-error-400"
        onClick={handleRemoveAddress}
      >
        Delete
      </Button>

      <button
        type="button"
        className="text-gray-700 w-full tracking-normal mt-8"
        onClick={handleClose}
      >
        Cancel
      </button>
    </div>
  );
};
