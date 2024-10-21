import React from "react";

export interface Transaction {
  description: string;
  date: string;
  amount: string;
  type: string;
  status?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  handleActiveScreen: (screen: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  handleActiveScreen,
}) => {
  return (
    <ul className="space-y-4">
      {transactions.map((transaction, index) => (
        <li
          key={index}
          className="flex justify-between items-center text-sm border-b border-b-grey-100 pb-4 mb-4 cursor-pointer"
          onClick={() => handleActiveScreen("details")}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-grey-100 flex items-center justify-center">
              {transaction.type === "credit" ? (
                <SuccesStateIcon />
              ) : (
                <FailedStateIcon />
              )}
            </span>
            <div>
              <p className="text-grey-900">{transaction.description}</p>
              <p className="text-grey-500 text-xs mt-1">{transaction.date}</p>
            </div>
          </div>
          <div
            className={`flex items-end flex-col ${
              transaction.type === "credit"
                ? "text-state-success-300"
                : "text-state-error-300"
            }`}
          >
            <p className="text-sm">{transaction.amount}</p>
            {transaction.status && (
              <span className="ml-1 text-xs text-state-error-300">
                {transaction.status}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;

const FailedStateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clip-path="url(#clip0_18092_58414)">
      <path
        opacity="0.4"
        d="M5.83203 11.6665H9.9987"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M5.83203 8.3335H12.4987"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16797 1.6665H13.3346C16.1096 1.8165 17.5013 2.8415 17.5013 6.65817V13.3332"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5.0083V13.3167C2.5 16.6583 3.33333 18.3333 7.5 18.3333H10C10.1417 18.3333 12.3667 18.3333 12.5 18.3333"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 13.3335L12.5 18.3335V15.8335C12.5 14.1668 13.3333 13.3335 15 13.3335H17.5Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="4.16667"
        cy="3.33317"
        rx="4.16667"
        ry="4.16667"
        fill="#F0F2F5"
      />
      <path
        d="M5.83203 4.96631L2.70703 1.84131"
        stroke="#D42620"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.80078 1.875L2.67578 5"
        stroke="#D42620"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_18092_58414">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SuccesStateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      opacity="0.4"
      d="M5.83203 12.1665H9.9987"
      stroke="black"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M5.83203 8.8335H12.4987"
      stroke="black"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16797 2.1665H13.3346C16.1096 2.3165 17.5013 3.3415 17.5013 7.15817V13.8332"
      stroke="black"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5.5083V13.8167C2.5 17.1583 3.33333 18.8333 7.5 18.8333H10C10.1417 18.8333 12.3667 18.8333 12.5 18.8333"
      stroke="black"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 13.8335L12.5 18.8335V16.3335C12.5 14.6668 13.3333 13.8335 15 13.8335H17.5Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
