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

export interface IStore {
  _id: string;
  storeOwner: string;
  name: string;
  email: string;
  photo: string;
  description: string;
  openingTime: {
    days: string;
    time: {
      hour: string;
      minute: string;
    };
    _id: string;
  }[];
  [key: string]: any;
}

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  [key: string]: any;
}

export interface IProductItem {
  extra: any[]; // Adjust the type based on what extra represents
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
}
