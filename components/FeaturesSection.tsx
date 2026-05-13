'use client';

import Link from 'next/link';

const features = [
    {
        title: 'Record or Upload',
        description: 'Use your phone as a stethoscope — record directly in-browser or upload a saved audio file.',
        accent: '#4F72FF',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                <path d="M19.14 19.14L21 21" />
                <path d="M9 9a3 3 0 014.12-.12" />
            </svg>
        ),
        href: '/tutorial',
        linkLabel: 'See tutorial',
    },
    {
        title: 'AI Analysis',
        description: 'Our neural network processes MFCC features extracted from your recording in under 2 seconds.',
        accent: '#FF3366',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M7 12h2l2-5 2 10 2-5h2" />
            </svg>
        ),
        href: '/diagnostics',
        linkLabel: 'Try it now',
    },
    {
        title: 'Instant Results',
        description: 'Receive a confidence-scored classification — healthy, abnormal, or artifact — with a detailed breakdown.',
        accent: '#00DEB4',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        href: '/diagnostics',
        linkLabel: 'See example',
    },
    {
        title: 'Research-Backed',
        description: 'Trained on 585 real cardiac audio recordings plus CDC survey data covering 400k+ respondents.',
        accent: '#A04FF7',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
        ),
        href: '/dashboard',
        linkLabel: 'View data',
    },
    {
        title: 'Health Guidance',
        description: 'Explore evidence-based tips on diet, sleep, and harmful habits that affect your cardiovascular health.',
        accent: '#FF8C00',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        ),
        href: '/health',
        linkLabel: 'Read guide',
    },
    {
        title: 'Free & Open',
        description: 'No sign-up required. Built on open-source datasets and available to everyone, everywhere.',
        accent: '#52C9B8',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
        href: '/diagnostics',
        linkLabel: 'Get started',
    },
];

export default function FeaturesSection() {
    return (
        <section className="container mx-auto px-6 py-12">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10
                        bg-white/[0.04] text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider mb-3">
                        Platform Features
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Everything you need
                    </h2>
                </div>
                <Link href="/diagnostics"
                    className="self-start sm:self-auto flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)]
                        hover:text-[var(--text-primary)] transition-colors">
                    Start analysis
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f, i) => (
                    <div
                        key={f.title}
                        className="group relative glass rounded-2xl p-5 animate-fadeInUp
                            hover:border-white/10 transition-all duration-300 overflow-hidden"
                        style={{ animationDelay: `${i * 0.07}s` }}
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                            style={{ background: `radial-gradient(ellipse 80% 80% at 50% 0%, ${f.accent}08, transparent)` }} />

                        <div className="relative">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                                style={{ background: `${f.accent}12`, border: `1px solid ${f.accent}22`, color: f.accent }}>
                                {f.icon}
                            </div>

                            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">{f.title}</h3>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{f.description}</p>

                            <Link href={f.href}
                                className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                                style={{ color: f.accent }}>
                                {f.linkLabel}
                                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
