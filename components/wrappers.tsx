export interface ChildrenProps {
  children: React.ReactNode;
}

export const WideWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="px-5 lg:px-6 w-full 2xl:max-w-[1440px] 2xl:mx-auto">
      {children}
    </div>
  );
};

export const NormalWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="lg:px-6 xl:max-w-[1200px] 2xl:max-w-[1220px] xl:mx-auto">
      {children}
    </div>
  );
};
