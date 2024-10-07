import {
  AccountIcon,
  BasketIcon,
  HomeIcon,
  ExploreIcon,
  CartIcon,
  NotificationIcon,
  WalletIcon,
  NavAccountIcon,
} from "@/components/ui/icons/nav-icons";

export const NAVLIST = [
  { name: "Home", path: "/", icon: HomeIcon, label: "" },
  { name: "Search", path: "/search", icon: ExploreIcon, label: "search" },
  { name: "My Orders", path: "/orders", icon: CartIcon, label: "orders" },
  {
    name: "Wallet",
    path: "/wallet",
    icon: WalletIcon,
    label: "wallet",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: NavAccountIcon,
    label: "profile",
  },
];
