export const DeliveryServiceItem = () => {
  return (
    <div className="flex justify-between p-2 sm:p-3 md:py-4">
      <div className="flex gap-3 items-center">
        <div className="dot sm:hidden" />
        <div className="space-y-2 md:space-y-3 lg:space-y-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold">
              Standard Delivery
            </h1>
            <div className="dot max-sm:hidden" />
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-black/60">Great value fast delivery
          </p>
        </div>
      </div>
      <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">N1,500</h2>
    </div>
  );
};
