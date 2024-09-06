"use client";

import { Text } from "@/components/ui/text";

export const DrawerCard = ({
  title,
  children,
  cancel,
  cancelAction,
}: {
  title: string;
  cancel?: boolean;
  children: React.ReactNode;
  cancelAction?: () => void;
}) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Text>{title}</Text>
        <button
          className="text-sm text-[#475367] tracking-[-2.5%] "
          onClick={() => cancelAction && cancelAction()}
        >
          Cancel
        </button>
      </div>
      {children}
    </div>
  );
};
