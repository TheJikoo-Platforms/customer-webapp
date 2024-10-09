export interface FoodItemOptionItem {
  name: string;
  price: string;
}

export interface FoodItemOption {
  name: string;
  isOptional: boolean;
  items: FoodItemOptionItem[];
}

export interface IFoodItem {
  name: string;
  imageUrl: string;
  description: string;
  store: string;
  storeLogo: string;
  numberSold: string;
  stars: string;
  cookingTime: string;
  ridingTime: string;
  discountPrice: string;
  originalPrice: string;
  options: FoodItemOption[] | null;
  addedToCart: boolean;
}
