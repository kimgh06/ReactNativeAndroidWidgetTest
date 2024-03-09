import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useStore = create((set) => ({
  text: '',
  bob: '',
  bobnum: 0,
  date: new Date(),

  setText: (t) => set({ text: t }),
  setBob: t => set({ bob: t }),
  setBobNum: t => set({ bobnum: t }),
  setDate: d => set({ date: d })
}));

export default useStore;