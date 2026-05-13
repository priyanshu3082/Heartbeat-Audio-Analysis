'use client';

import Link from 'next/link';

const steps = [
    {
        num: '01',
        title: 'Record Your Heart',
        body: 'Place your phone on your chest or use a stethoscope. Record for at least 20 seconds in a quiet environment.',
        accent: '#4F72FF',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                <path d="M19.14 19.14L21 21M9 9a3 3 0 014 .12" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Upload & Analyze',
        body: 'Drop your audio file or use the in-browser recorder. Our ONNX-powered neural network processes it in seconds.',
        accent: '#FF3366',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M7 12h2l2-5 2 10 2-5h2" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Review Results',
        body: 'Receive a confidence-scored classification — healthy, abnormal, or artifact — with a detailed probability breakdown.',
        accent: '#00DEB4',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="container mx-auto px-6 py-12">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10
                        bg-white/[0.04] text-[var(--text-muted)] text-xs font-semibold uppercase tracking-wider mb-3">
                        Process
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
                </div>
                <Link href="/tutorial"
                    className="self-start sm:self-auto flex items-center gap-1.5 text-sm font-medium
                        text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Full guide
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            {/* Steps */}
            <div className="relative">
                {/* Connector line (desktop) */}
                <div className="hidden md:block absolute top-10 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px
                    bg-gradient-to-r from-[#4F72FF]/30 via-[#FF3366]/30 to-[#00DEB4]/30 z-0" />

                <div className="grid md:grid-cols-3 gap-5 relative z-10">
                    {steps.map((s, i) => (
                        <div
                            key={s.num}
                            className="glass rounded-2xl p-6 group hover:border-white/10 transition-all duration-300 animate-fadeInUp overflow-hidden relative"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Bg glow on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse 100% 80% at 50% 100%, ${s.accent}06, transparent)` }} />

                            <div className="relative">
                                {/* Step number + icon */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                        style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}25`, color: s.accent }}>
                                        {s.icon}
                                    </div>
                                    <span className="text-3xl font-bold leading-none"
                                        style={{ color: `${s.accent}25`, fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        {s.num}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{s.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.body}</p>

                                {/* Bottom accent */}
                                <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${s.accent}60, transparent)` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CTA */}
            <div className="mt-8 flex justify-center">
                <Link href="/diagnostics"
                    className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm
                        bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                        hover:from-[#FF4D7A] hover:to-[#E63060]
                        transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF3366]/25">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Try It Now — It's Free
                </Link>
            </div>
        </section>
    );
}
