import { ReviewItem } from "./review-item";

export const ReviewList = () => {
  return (
      <ul className="space-y-3 md:space-y-4 lg:space-y-8">
          <li>
              <ReviewItem/>
          </li>
          <li>
              <ReviewItem/>
          </li>
          <li>
              <ReviewItem/>
          </li>
    </ul>
  );
};
