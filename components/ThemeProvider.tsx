'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'heartbeat-theme';

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (t: Theme) => void;
    toggleTheme: () => void;
    mounted: boolean;
} | null>(null);

function applyDomTheme(theme: Theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        let initial: Theme = 'light';
        if (stored === 'dark' || stored === 'light') {
            initial = stored;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            initial = 'dark';
        }
        setThemeState(initial);
        applyDomTheme(initial);
    }, []);

    const setTheme = useCallback((t: Theme) => {
        setThemeState(t);
        localStorage.setItem(STORAGE_KEY, t);
        applyDomTheme(t);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => {
            const next: Theme = prev === 'dark' ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEY, next);
            applyDomTheme(next);
            return next;
        });
    }, []);

    const value = useMemo(
        () => ({ theme, setTheme, toggleTheme, mounted }),
        [theme, setTheme, toggleTheme, mounted],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return ctx;
}
