import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useStore = create((set) => ({
  text: '',
  bob: '',
  bobnum: 0,

  setText: (t) => set({ text: t }),
  setBob: t => set({ bob: t }),
  setBobNum: t => set({ bobnum: t }),
  getAsyncItem: async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value
  },
  setAsyncItem: async (key, data) => { await AsyncStorage.setItem(key, data) },
  delAsyncItem: async (key) => { await AsyncStorage.removeItem(key) }
}));

export default useStore;