'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-white text-slate-700 transition-colors hover:bg-blue-50 dark:border-slate-600 dark:bg-slate-800 dark:text-amber-100 dark:hover:bg-slate-700"
        >
            {mounted ? (
                theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
            ) : (
                <Moon size={18} className="opacity-40" />
            )}
        </button>
    );
}
