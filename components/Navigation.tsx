'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navItems = [
    {
        href: '/',
        label: 'Home',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        ),
    },
    {
        href: '/health',
        label: 'Health',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        href: '/dashboard',
        label: 'Dashboard',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
        ),
    },
    {
        href: '/tutorial',
        label: 'Tutorial',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
        ),
    },
    {
        href: '/diagnostics',
        label: 'Diagnostics',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
        ),
    },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 border-b border-[var(--border)]"
            style={{ background: 'var(--bg-nav)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FF3366] to-[#4F72FF] opacity-20 group-hover:opacity-30 transition-opacity" />
                            <svg viewBox="0 0 24 24" className="w-5 h-5 relative z-10 animate-heartbeat" fill="none">
                                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                                    fill="url(#heart-grad)" />
                                <defs>
                                    <linearGradient id="heart-grad" x1="1" y1="1" x2="23" y2="22">
                                        <stop offset="0%" stopColor="#FF3366" />
                                        <stop offset="100%" stopColor="#4F72FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="text-base font-semibold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                            <span className="text-gradient-main">Heartbeat</span>
                            <span className="text-[var(--text-secondary)] ml-1.5">Audio Analysis</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active
                                        ? 'bg-[#FF3366]/10 text-[#FF3366] border border-[#FF3366]/20'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <span className={active ? 'text-[#FF3366]' : 'text-[var(--text-muted)]'}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
                            aria-label="Toggle theme"
                            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        <Link
                            href="/diagnostics"
                            className="ml-3 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                                bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                                hover:from-[#FF4D7A] hover:to-[#E63060]
                                transition-all duration-200 hover:shadow-lg hover:shadow-[#FF3366]/25"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Start Analysis
                        </Link>
                    </div>

                    {/* Mobile: theme toggle + menu button */}
                    <div className="md:hidden flex items-center gap-1">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={1.5}>
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                    </div>
                </div>{/* end flex items-center justify-between h-16 */}

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-3 pb-4 border-t border-[var(--border)] animate-fadeIn">
                        <div className="flex flex-col gap-1 pt-3">
                            {navItems.map((item) => {
                                const active = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${active
                                            ? 'bg-[#FF3366]/10 text-[#FF3366] border border-[#FF3366]/20'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                                            }`}
                                    >
                                        <span className={active ? 'text-[#FF3366]' : 'text-[var(--text-muted)]'}>
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/diagnostics"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
                                    bg-gradient-to-r from-[#FF3366] to-[#CC2952] transition-all duration-200"
                            >
                                Start Analysis
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
