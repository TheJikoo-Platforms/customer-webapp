export interface AddressProps {
  address: string;
  area: string;
}

export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  dob: string | null;
  image: string | null;
  [key: string]: any;
}

export interface ICategoriesData {
  _id: string;
  description: string;
  image: string;
  name: string;
  [key: string]: any;
}

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  [key: string]: any;
}

export interface IOption {
  name: string;
  price: number;
}

// Define the type for the main object in the `extra` array
export interface IExtraItem {
  _id: string;
  groupName: string;
  options: IOption[];
}

export interface IProductItem {
  extra: IExtraItem[];
  _id: string;
  name: string;
  description: string;
  store: IStore;
  image: string;
  category: ICategory[];
  subCategory: string;
  price: number;
  discount: number;
  user: IUser;
  isPreOrder: boolean;
  status: string;
  stockStatus: string;
  sold: number;
  cookingTime: string;
  avgRating: number;
}
interface IOpeningTime {
  days: string;
  time: {
    hour: string;
    minute: string;
  };
}

export interface IStore {
  _id: string;
  name: string;
  description: string;
  email: string;
  location: string;
  state: string;
  photo: string;
  lat: number;
  log: number;
  isRegistered: boolean;
  openingDays: string[];
  openingHour: string;
  closingHour: string;
  openingTime: IOpeningTime[];
  storeOwner: string;
  zone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
