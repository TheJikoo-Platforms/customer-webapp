import { BackButton } from "@/components/back-button";

export const PageTitle = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex items-center gap-3">
        <BackButton />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};
