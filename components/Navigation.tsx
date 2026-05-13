'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, Activity, Microscope, BookOpen, Stethoscope, Menu, X, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/health', label: 'Health', icon: Activity },
    { href: '/dashboard', label: 'Dashboard', icon: Microscope },
    { href: '/tutorial', label: 'Tutorial', icon: BookOpen },
    { href: '/diagnostics', label: 'Diagnostics', icon: Stethoscope },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-2' : 'bg-white dark:bg-slate-900 py-4'
        } border-b border-blue-100 dark:border-slate-800`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:scale-105 transition-transform duration-300">
                            <HeartPulse size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                            Heartbeat <span className="text-blue-600 dark:text-blue-400 font-extrabold">AI</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 group ${
                                            isActive
                                                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                                                : 'text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <Icon size={18} className={`${isActive ? 'text-blue-700 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-blue-700 dark:group-hover:text-blue-300'} transition-colors`} />
                                        <span>{item.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 dark:bg-blue-400 rounded-full mx-4"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                        <ThemeToggle />
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-white dark:bg-slate-900 mt-2 border border-blue-100 dark:border-slate-700 rounded-xl"
                        >
                            <div className="py-4 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                                isActive
                                                    ? 'bg-blue-700 dark:bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none'
                                                    : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800'
                                            }`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
