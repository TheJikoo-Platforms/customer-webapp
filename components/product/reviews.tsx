import { ReviewList } from "@/components/product/review-list";

export const Reviews = () => {
  return (
    <div>
      <h1 className="font-medium text-sm sm:text-base md:text-xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 ">
        Top reviews of this product
      </h1>
      <ReviewList />
    </div>
  );
};
