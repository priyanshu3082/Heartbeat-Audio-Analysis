'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative container mx-auto px-6 pt-24 pb-28 overflow-hidden">

            {/* Background orb decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full
                bg-gradient-to-b from-[#4F72FF]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full
                bg-[#FF3366]/6 blur-3xl pointer-events-none" />

            <div className="relative text-center max-w-4xl mx-auto">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4F72FF]/25
                    bg-[#4F72FF]/8 text-[#7C99FF] text-xs font-semibold uppercase tracking-wider mb-8 animate-fadeInUp">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00DEB4] animate-pulse-slow" />
                    AI-Powered Cardiac Analysis
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-fadeInUp delay-100">
                    <span className="text-gradient-main">Heartbeat</span>
                    <br />
                    <span className="text-[var(--text-primary)]">Audio Analysis</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10 animate-fadeInUp delay-200">
                    Record the sounds of your heart and receive instant AI-powered insights.
                    Early detection of cardiovascular conditions — accessible to everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16 animate-fadeInUp delay-300">
                    <Link
                        href="/diagnostics"
                        className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-base
                            bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                            hover:from-[#FF4D7A] hover:to-[#E63060]
                            transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF3366]/30"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Start Diagnosis
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    <Link
                        href="/tutorial"
                        className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-base
                            border border-white/10 text-[var(--text-secondary)]
                            hover:border-white/20 hover:text-[var(--text-primary)] hover:bg-white/[0.03]
                            transition-all duration-200"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        View Tutorial
                    </Link>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16 animate-fadeInUp delay-400">
                    {[
                        { value: '97%', label: 'Accuracy' },
                        { value: '<2s', label: 'Analysis Time' },
                        { value: '5', label: 'Conditions Detected' },
                    ].map((stat) => (
                        <div key={stat.label} className="glass rounded-xl py-4 px-3 text-center">
                            <div className="text-2xl font-bold text-gradient-red mb-0.5" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                {stat.value}
                            </div>
                            <div className="text-xs text-[var(--text-muted)] font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ECG Waveform */}
                <div className="relative h-20 w-full rounded-2xl overflow-hidden glass animate-fadeInUp delay-500">
                    <div className="absolute inset-0 flex items-center">
                        <svg className="w-full h-12" viewBox="0 0 1200 80" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="ecg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4F72FF" stopOpacity="0.1" />
                                    <stop offset="40%" stopColor="#FF3366" stopOpacity="0.8" />
                                    <stop offset="55%" stopColor="#FF3366" stopOpacity="1" />
                                    <stop offset="70%" stopColor="#4F72FF" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#4F72FF" stopOpacity="0.1" />
                                </linearGradient>
                                <filter id="ecg-blur">
                                    <feGaussianBlur stdDeviation="1" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            {/* Flat line */}
                            <path
                                d="M0,40 L300,40 L320,40 L340,10 L355,70 L370,5 L385,75 L400,40 L420,40 L440,40
                                   L460,40 L480,38 L490,42 L500,40
                                   L600,40 L620,40 L640,10 L655,70 L670,5 L685,75 L700,40 L720,40
                                   L900,40 L920,40 L940,10 L955,70 L970,5 L985,75 L1000,40 L1020,40 L1200,40"
                                stroke="url(#ecg-grad)"
                                strokeWidth="2"
                                fill="none"
                                filter="url(#ecg-blur)"
                                className="animate-pulse-slow"
                            />
                        </svg>
                    </div>
                    {/* Scan line effect */}
                    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FF3366]/50 to-transparent"
                        style={{ left: '50%', boxShadow: '0 0 8px rgba(255,51,102,0.4)' }} />
                </div>
            </div>
        </section>
    );
}
