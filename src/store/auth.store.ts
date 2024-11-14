import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  authToken: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authToken: null,
      isAuthenticated: false,
      login: (token: string) => set({ authToken: token, isAuthenticated: true }),
      logout: () => set({ authToken: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage, 
    }
  )
);
