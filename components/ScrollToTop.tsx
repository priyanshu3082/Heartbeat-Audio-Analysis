'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl flex items-center justify-center
                glass border border-white/10
                text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                hover:border-[#FF3366]/30 hover:bg-[#FF3366]/8
                transition-all duration-200 hover:scale-110 animate-fadeInUp
                shadow-lg shadow-black/20"
        >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd" />
            </svg>
        </button>
    );
}
