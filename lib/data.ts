// import { IFoodItem } from "@/components/types";

export const FOODITEMS = [
  {
    name: "Chicken Pasta and salad indomie",
    imageUrl: "/handpicked/1.png",
    description:
      "Mixed with vegetables with avocado and cilantro, served with lemon herb",
    store: "Chicken Republic",
    storeLogo: "/vendors/hardy-foods.png",
    numberSold: "234",
    stars: "4.5",
    cookingTime: "20-30mins",
    ridingTime: "₦3,500",
    discountPrice: "₦32,500",
    originalPrice: "₦34,500",
    addedToCart: false,
    options: [
      {
        name: "Soup",
        isOptional: false,
        items: [
          {
            name: "Pepper",
            price: "+ ₦200",
          },
          {
            name: "Veggies",
            price: "+ ₦200",
          },
          {
            name: "Efo riro",
            price: "+ ₦200",
          },
        ],
      },
      {
        name: "Extra side",
        isOptional: true,
        items: [
          {
            name: "Ewedu",
            price: "",
          },
          {
            name: "Afang",
            price: "",
          },
        ],
      },
    ],
  },
  {
    name: "Chicken Pasta and beef",
    imageUrl: "/handpicked/4.png",
    description:
      "Mixed with vegetables with avocado and cilantro, served with lemon herb",
    store: "Chicken Republic",
    storeLogo: "/vendors/kilimajiro.png",
    numberSold: "234",
    stars: "4.5",
    cookingTime: "20-30mins",
    ridingTime: "₦1,500",
    discountPrice: "₦12,500",
    originalPrice: "₦10,050",
    options: null,
    addedToCart: false,
  },
  {
    name: "Spicy BBQ Chicken",
    imageUrl: "/handpicked/5.png",
    description:
      "Grilled chicken served with BBQ sauce, fries, and a side of coleslaw",
    store: "KFC",
    storeLogo: "/vendors/chicken-repubilc.png",
    numberSold: "150",
    stars: "4.7",
    cookingTime: "15-20mins",
    ridingTime: "₦2,500",
    discountPrice: "₦15,500",
    originalPrice: "₦16,500",
    addedToCart: false,
    options: null,
  },
  {
    name: "Vegetarian Pizza",
    imageUrl: "/handpicked/2.png",
    description:
      "Topped with a variety of fresh vegetables, including bell peppers, onions, and mushrooms",
    store: "Domino's Pizza",
    storeLogo: "/vendors/dominos.png",
    numberSold: "189",
    stars: "4.6",
    cookingTime: "25-30mins",
    ridingTime: "₦4,200",
    discountPrice: "₦10,000",
    originalPrice: "₦12,000",
    addedToCart: false,
    options: [
      {
        name: "Extra Toppings",
        isOptional: true,
        items: [
          {
            name: "Cheese",
            price: "+ ₦300",
          },
          {
            name: "Olives",
            price: "+ ₦200",
          },
        ],
      },
    ],
  },
  {
    name: "Grilled Fish and Chips",
    imageUrl: "/handpicked/6.png",
    description: "Delicious grilled fish served with crispy golden fries",
    store: "Fish Delight",
    storeLogo: "/vendors/kilimajiro.png",
    numberSold: "75",
    stars: "4.3",
    cookingTime: "20-25mins",
    ridingTime: "₦2,800",
    discountPrice: "₦5,000",
    originalPrice: "₦5,500",
    addedToCart: false,
    options: null,
  },
  {
    name: "Tandoori Chicken",
    imageUrl: "/handpicked/7.png",
    description:
      "Spicy, marinated chicken cooked in a traditional clay oven, served with naan",
    store: "Spice Kitchen",
    storeLogo: "/vendors/hardy-foods.png",
    numberSold: "212",
    stars: "4.9",
    cookingTime: "30-35mins",
    ridingTime: "₦3,800",
    discountPrice: "₦14,500",
    originalPrice: "₦16,000",
    addedToCart: false,
    options: [
      {
        name: "Bread",
        isOptional: true,
        items: [
          {
            name: "Naan",
            price: "+ ₦250",
          },
          {
            name: "Paratha",
            price: "+ ₦300",
          },
        ],
      },
    ],
  },
  {
    name: "Jollof Rice and Fried Plantain",
    imageUrl: "/handpicked/8.png",
    description:
      "Classic Nigerian dish with seasoned jollof rice, served with fried plantains and chicken",
    store: "Buka Hut",
    storeLogo: "/vendors/chicken-repubilc.png",
    numberSold: "300",
    stars: "4.8",
    cookingTime: "25-30mins",
    ridingTime: "₦2,000",
    discountPrice: "₦5,800",
    originalPrice: "₦6,500",
    addedToCart: false,
    options: null,
  },
];
