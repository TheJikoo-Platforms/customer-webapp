"use client";
export interface ChildrenProps {
  children: React.ReactNode;
}

export const WideWrapper = ({ children }: ChildrenProps) => {
  return (
    <section className="px-6 w-full 2xl:max-w-[1440px] 2xl:mx-auto">
      {children}
    </section>
  );
};

export const NormalWrapper = ({ children }: ChildrenProps) => {
  return (
    <section className="lg:px-6 xl:max-w-[1200px] 2xl:max-w-[1240px] xl:mx-auto ">
      {children}
    </section>
  );
};
