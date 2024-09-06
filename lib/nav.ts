import { NavAccountIcon } from "@/components/nav-account-icon";
import {
  AccountIcon,
  BasketIcon,
  HomeIcon,
  ExploreIcon,
  CartIcon,
  NotificationIcon,
} from "@/components/ui/icons/nav-icons";

export const NAVLIST = [
  { name: "Home", path: "/", icon: HomeIcon, label: "" },
  {
    name: "Explore",
    path: "/explore",
    icon: ExploreIcon,
    label: "explore",
  },
  { name: "My Orders", path: "/orders", icon: CartIcon, label: "orders" },
  {
    name: "Notifications",
    path: "/notifications",
    icon: NotificationIcon,
    label: "notifications",
  },
  {
    name: "",
    path: "/account",
    icon: NavAccountIcon,
    label: "Account",
  },
];
