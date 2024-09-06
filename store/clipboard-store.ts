import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


export type ClipboardItem = {
  id: string;
  time: Date;
  type: "order" | "item";
};

interface ClipboardStore {
  clipboard: ClipboardItem[] | [];
  addToClipboard: (item: ClipboardItem ) => void;
  deleteFromClipboard: (id: string) => void;
  clearClipboard: () => void;
}

export const useClipboardStore = create<ClipboardStore>()(
  devtools(
    persist(
      (set, get) => ({
        clipboard: [],
        addToClipboard(item) {
          set((state) => {
            const existingItem = state.clipboard.find(el=>el.id===item.id)
            if (!!existingItem) {
              return state
            }
            return { clipboard: [...state.clipboard, item] }
          });
        },

        clearClipboard() {
          set(() => ({ clipboard: [] }));
        },
        deleteFromClipboard(id) {
             set((state) => ({ clipboard: state.clipboard.filter(el=>el.id != id) }));
        },
      }),
      { name: "clipboard" }
    )
  )
);
