'use client';

export default function InfoCards() {
    return (
        <section className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-5">

                {/* Card 1 — Cardiovascular Disease Stats */}
                <div className="glass rounded-2xl p-7 animate-fadeInUp hover:border-[#FF3366]/20 transition-colors duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/20
                            flex items-center justify-center group-hover:bg-[#FF3366]/15 transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FF3366]">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-0.5">
                                Cardiovascular Disease
                            </h2>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF3366] uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse-slow" />
                                9M deaths in 2019
                            </span>
                        </div>
                    </div>

                    {/* Big stat */}
                    <div className="mb-5 p-4 rounded-xl bg-[#FF3366]/5 border border-[#FF3366]/10">
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-4xl font-bold text-gradient-red" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>16%</span>
                            <span className="text-sm text-[var(--text-secondary)]">of all deaths worldwide</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
                            <div className="bg-gradient-to-r from-[#FF3366] to-[#FF6B8A] h-1.5 rounded-full" style={{ width: '16%' }} />
                        </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Heart disease has remained the leading cause of death globally for 20 years. Deaths from cardiovascular
                        disease have increased by more than 2 million since 2000, reaching nearly 9 million in 2019.
                    </p>
                </div>

                {/* Card 2 — Mission */}
                <div className="glass rounded-2xl p-7 animate-fadeInUp delay-100 hover:border-[#4F72FF]/20 transition-colors duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#4F72FF]/10 border border-[#4F72FF]/20
                            flex items-center justify-center group-hover:bg-[#4F72FF]/15 transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4F72FF]">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-0.5">
                                Our Mission
                            </h2>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00DEB4] uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00DEB4]" />
                                Early Detection Saves Lives
                            </span>
                        </div>
                    </div>

                    {/* Pillars */}
                    <div className="space-y-2.5 mb-5">
                        {[
                            { label: 'Accessible', desc: 'Free AI diagnostics for everyone', color: '#00DEB4' },
                            { label: 'Accurate', desc: 'Robust ML classifiers for audio', color: '#4F72FF' },
                            { label: 'Early Detection', desc: 'Catch conditions before symptoms', color: '#FF3366' },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                                <div className="w-1.5 h-8 rounded-full flex-shrink-0" style={{ background: item.color }} />
                                <div>
                                    <div className="text-sm font-medium text-[var(--text-primary)]">{item.label}</div>
                                    <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Any method that can help detect cardiovascular disease early can save many lives. We believe in a
                        future where deaths from early-stage curable diseases disappear forever.
                    </p>
                </div>
            </div>
        </section>
    );
}
