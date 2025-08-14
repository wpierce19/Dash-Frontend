import {create} from 'zustand';

export const useThemeStore = create((set) => ({
    isDarkMode: (() => {
        const stored = localStorage.getItem('darkMode');
        return stored !== null
            ? stored === 'true'
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
    })(),
    toggleTheme: () => 
        set((state) => {
            const next = !state.isDarkMode;
            localStorage.setItem('darkMode', String(next));
            document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
            const root = document.documentElement;
            root.setAttribute('data-theme', next ? 'dark' : 'light');
            root.classList.toggle('dark', next);
            return {isDarkMode: next};
        }),
}));