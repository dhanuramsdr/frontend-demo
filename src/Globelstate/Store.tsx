// stores/headerStore.ts
import { create } from "zustand";
import type {
  exprotButtonInterface,
  HeaderState,
  SidenavState,
  UserData,
  Userdatainterface,
} from "../interfaces/Zustand-interface/Zustand-interface";
import { object } from "zod";

export const useHeaderStore = create<HeaderState>((set) => ({
  header: false,
  setHeader: (value: boolean) => set({ header: value }),
  toggleHeader: () => set((state) => ({ header: !state.header })),
}));

export const useSideNaveStore = create<SidenavState>((set) => ({
  sidenav: false,
  setSidenav: (value: boolean) => set({ sidenav: value }),
  toggleHeader: () => set((state) => ({ sidenav: !state.sidenav })),
}));

//userDetails

export const useUserDetails = create<Userdatainterface>((set) => ({
  userDetails: null,
  setUserDetails: (value: UserData) => set({ userDetails: value }),
  clearData: () => set({ userDetails: null }),
}));

export const useExportButton = create<exprotButtonInterface>((set) => ({
  isRequired: false,
  setIsrequired: (value: boolean) => set({ isRequired: value }),
  toggleIsrequired: () => set((state) => ({ isRequired: !state.isRequired })),
}));
