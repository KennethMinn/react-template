import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type AuthStore = {
  user: User | null;
  setAuth: (user: User | null) => void;
};

export const useAuth = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      setAuth: (user) => set({ user }),
    }),
    { name: "user", storage: createJSONStorage(() => localStorage) }
  )
);
