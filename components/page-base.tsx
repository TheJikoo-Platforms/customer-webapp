import { PageTitle } from "@/components/page-title";
import { cn } from "@/lib/utils";

export const PageBase = ({
  title,
  children,
  pageAction,
  className
}: {
  title: string;
  pageAction?: React.ReactNode;
    children: React.ReactNode;
  className?:string
}) => {
  return (
    // <div className="container mb-10">
    <div className={cn(" bg-white dark:bg-secondary-foreground pt-3 p-6", className)}>
      <PageTitle title={title} children={pageAction} />
      {children}
    </div>
    // {/* </div> */}
  );
};
