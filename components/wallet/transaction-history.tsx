import React from "react";
import { HiXMark } from "react-icons/hi2";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { GrRefresh } from "react-icons/gr";
import Image from "next/image";
interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "refund" | "failed";
  title: string;
  amount: number;
  date: string;
  time: string;
}

const TransactionIcon = ({ type }: { type: Transaction["type"] }) => {
  switch (type) {
    case "deposit":
      return (
        <div className="bg-[#E5F5EB] rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <GoArrowDown className="text-jikoo-brand-green text-xl" />
        </div>
      );
    case "withdrawal":
      return (
        <div className="bg-[#E4E7EC] rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <GoArrowUp className="text-black text-xl" />
        </div>
      );
    case "refund":
      return (
        <div className="bg-[#FBE2B7] rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <GrRefresh className="text-state-warning-100 text-xl" />
        </div>
      );
    case "failed":
      return (
        <div className="bg-[#F5E0E1] rounded-full w-[30px] h-[30px] flex items-center justify-center">
          <HiXMark className="text-state-error-600 text-xl" />
        </div>
      );
  }
};

const TransactionAmount = ({
  type,
  amount,
}: {
  type: Transaction["type"];
  amount: number;
}) => {
  const prefix = type === "withdrawal" ? "- " : "";
  const color = {
    deposit: "text-jikoo-brand-green",
    withdrawal: "text-black",
    refund: "text-state-warning-100",
    failed: "text-state-error-600",
  }[type];

  return (
    <p className={`font-bold text-sm ${color}`}>
      {prefix}₦ {amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
    </p>
  );
};

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="flex items-center justify-between py-4 bg-white rounded-sm p-2">
      <div className="flex items-center gap-3">
        <TransactionIcon type={transaction.type} />
        <div>
          <p className="text-[#242E25] font-medium text-xs">
            {transaction.title}
          </p>
          <p className="text-[#98A2B3] text-[10px]">
            {transaction.date} {transaction.time}
          </p>
        </div>
      </div>
      <TransactionAmount type={transaction.type} amount={transaction.amount} />
    </div>
  );
};

const MonthSection = ({
  month,
  transactions,
}: {
  month: string;
  transactions: Transaction[];
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-[#101928] font-medium text-xs mb-4">{month}</h3>
      <div className="space-y-2 bg-[#F7F9FC] rounded-sm p-2.5">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export const TransactionHistory = () => {
  const transactions = {
    "October 2024": [
      {
        id: "1",
        type: "deposit",
        title: "Naira Deposit Successful",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "2",
        type: "failed",
        title: "Naira Deposit Failed",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "3",
        type: "refund",
        title: "Refund Issued",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "4",
        type: "withdrawal",
        title: "Order 8HG2F Deducted",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
    ],
    "November 2024": [
      {
        id: "5",
        type: "deposit",
        title: "150 USDT Deposit Successful",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "6",
        type: "failed",
        title: "150 USDT Deposit Failed",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "7",
        type: "refund",
        title: "Partial Refund Issued",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
      {
        id: "8",
        type: "withdrawal",
        title: "Order 8HG2F Deducted",
        amount: 500000.0,
        date: "Nov 23, 2024",
        time: "4:35 PM",
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="pb-12">
        <Image
          width={1000}
          height={1000}
          quality={100}
          src="/empty/empty-state-transaction.svg"
          alt="Empty Wallet"
          className="w-[200px] h-auto mx-auto"
        />

        <p className="text-3xl text-black font-bold text-center">
          No Transactions Found
        </p>
        <p className="text-center text-[#667185] text-sm">
          Your transaction history is currently empty.
        </p>
      </div>
      {/* <div className="p-4">
        {Object.entries(transactions).map(([month, monthTransactions]) => (
          <MonthSection
            key={month}
            month={month}
            transactions={monthTransactions as Transaction[]}
          />
        ))}
      </div> */}
    </React.Fragment>
  );
};
