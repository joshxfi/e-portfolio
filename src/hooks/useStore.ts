import create from "zustand";

interface Store {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => ({ ...state, darkMode: !state.darkMode })),
}));
