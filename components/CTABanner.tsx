'use client';

import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="container mx-auto px-6 py-12">
            <div className="relative rounded-2xl overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D1629] to-[#060D1F]" />
                <div className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse 70% 90% at 80% 50%, rgba(255,51,102,0.12) 0%, transparent 60%)' }} />
                <div className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse 50% 80% at 10% 50%, rgba(79,114,255,0.10) 0%, transparent 60%)' }} />
                <div className="absolute inset-0 border border-white/[0.07] rounded-2xl" />

                {/* ECG background decoration */}
                <div className="absolute inset-y-0 right-0 w-1/2 opacity-5 pointer-events-none flex items-center">
                    <svg viewBox="0 0 600 120" className="w-full h-32" preserveAspectRatio="none">
                        <path
                            d="M0,60 L100,60 L120,60 L135,10 L148,110 L162,5 L175,115 L190,60 L220,60
                               L300,60 L320,60 L335,10 L348,110 L362,5 L375,115 L390,60 L420,60
                               L500,60 L520,60 L535,10 L548,110 L562,5 L575,115 L590,60 L600,60"
                            stroke="#FF3366" strokeWidth="3" fill="none"
                        />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center gap-8">

                    {/* Left */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-[#FF3366]/10 border border-[#FF3366]/20 text-[#FF6B8A]
                            text-xs font-semibold uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse-slow" />
                            Free AI Analysis
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                            Know your heart.
                            <br />
                            <span className="text-gradient-main">Start today.</span>
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)] max-w-sm">
                            No sign-up. No cost. Just record your heartbeat and get results in under 2 seconds.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                        <Link href="/diagnostics"
                            className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base
                                bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                                hover:from-[#FF4D7A] hover:to-[#E63060]
                                transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF3366]/30">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Start Diagnosis
                        </Link>
                        <Link href="/tutorial"
                            className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors flex items-center gap-1">
                            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            Read the guide first
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
