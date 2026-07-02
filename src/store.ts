import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockHadiths } from './data';

interface AppState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  textSize: number;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  dailyHadithId: string | null;
  setDailyHadith: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: 'en' | 'fr';
  toggleLanguage: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id) 
          ? state.favorites.filter(f => f !== id) 
          : [...state.favorites, id]
      })),
      textSize: 22,
      increaseTextSize: () => set((state) => ({ textSize: Math.min(state.textSize + 2, 40) })),
      decreaseTextSize: () => set((state) => ({ textSize: Math.max(state.textSize - 2, 14) })),
      dailyHadithId: null,
      setDailyHadith: () => {
        const randomId = mockHadiths[Math.floor(Math.random() * mockHadiths.length)].id;
        set({ dailyHadithId: randomId });
      },
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      language: 'en',
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'fr' : 'en' })),
    }),
    {
      name: 'authentic-hadith-storage',
    }
  )
);

