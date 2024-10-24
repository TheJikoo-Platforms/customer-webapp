import { VendorsContainer } from "../explore/vendors-list";

const RESTAURANTLIST = [
  { name: "Kinimajaro.", image: "/vendors/Kinimajaro.png" },
  { name: "Dominos Pizza", image: "/vendors/dominos.png" },
  { name: "Chicken Republic", image: "/vendors/chicken-repubilc.png" },
  { name: "Pizza Jungle", image: "/vendors/pizzaJungle.png" },
  { name: "Hardy Foodie", image: "/vendors/hardy-foods.png" },
  { name: "Kinimajaro", image: "/vendors/Kinimajaro.png" },
  { name: "Pizza Dominos ", image: "/vendors/dominos.png" },
  { name: "Republic Chicken ", image: "/vendors/chicken-repubilc.png" },
  { name: "Jungle Pizza ", image: "/vendors/pizzaJungle.png" },
  { name: "Foodie Hardy", image: "/vendors/hardy-foods.png" },
  // { name: "Market Square", image: "/vendors/marketSquare.png" },
];

export function VendorsList() {
  return <VendorsContainer data={RESTAURANTLIST} />;
}
