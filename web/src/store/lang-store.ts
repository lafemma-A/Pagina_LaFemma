import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreLang = 'ES' | 'EN';

interface LangState {
    lang: StoreLang;
    setLang: (lang: StoreLang) => void;
    toggleLang: () => void;
}

export const useLangStore = create<LangState>()(
    persist(
        (set) => ({
            lang: 'ES',
            setLang: (lang) => set({ lang }),
            toggleLang: () => set((state) => ({ lang: state.lang === 'ES' ? 'EN' : 'ES' })),
        }),
        {
            name: 'lafemma-lang-storage',
        }
    )
);
