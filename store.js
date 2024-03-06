import { create } from "zustand";

const useStore = create((set) => ({
  text: '',

  setText: (t) => set({ text: t }),
}));

export default useStore;