import { CopyIcon } from "@/components/ui/icons";
import { IoCopyOutline } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";

export interface PaymentConfirmationProps {
  fee: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
}

const PaymentConfirmation = ({ data }: { data: PaymentConfirmationProps }) => {
  const { fee, accountNumber, accountName, bankName } = data;
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // alert("Account number copied to clipboard");
  };

  return (
    <>
      <div className="flex justify-between items-center border-b pb-6 mb-6 font-medium text-sm">
        <span className="text-grey-500">Fee</span>
        <span className="">{fee}</span>
      </div>

      <div className="flex justify-between items-center border-b pb-6 mb-6 font-medium text-sm">
        <span className="text-grey-500">Account number</span>
        <div className="flex items-center space-x-2">
          <span className="text-jikoo-brand-green">{accountNumber}</span>
          <span
            className="cursor-pointer"
            onClick={() => copyToClipboard(accountNumber)}
          >
            <CopyIcon className="text-jikoo-brand-green" />
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center border-b pb-6 mb-6 font-medium text-sm">
        <span className="text-grey-500">Account name</span>
        <span className="">{accountName}</span>
      </div>

      <div className="flex justify-between items-center border-b pb-6 mb-6 font-medium text-sm">
        <span className="text-grey-500">Bank</span>
        <span className="">{bankName}</span>
      </div>

      <p className="text-xs text-gray-500 mt-4 mb-6 flex items-center gap-2">
        <PiWarningCircle className="text-xl" />
        The {fee} fee is a non-refundable fee required by NIBSS to verify your
        account.
      </p>
    </>
  );
};

export default PaymentConfirmation;
