import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthStore {
  auth: boolean;
  setAuth: (val:boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools((set, get) => ({
      auth: false,
      setAuth(val:boolean) {
        set(state=>({auth:val}))
      }
  }))
);
