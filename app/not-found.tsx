import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container mx-auto px-6 min-h-[80vh] flex items-center justify-center">
            <div className="text-center max-w-md animate-fadeInUp">

                {/* ECG flatline graphic */}
                <div className="mb-8 h-16 relative">
                    <svg viewBox="0 0 600 60" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="nf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4F72FF" stopOpacity="0.1" />
                                <stop offset="45%" stopColor="#FF3366" stopOpacity="0.7" />
                                <stop offset="55%" stopColor="#FF3366" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#4F72FF" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        {/* Flatline with a small blip */}
                        <path
                            d="M0,30 L220,30 L240,30 L250,8 L260,52 L270,30 L280,30 L600,30"
                            stroke="url(#nf-grad)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse-slow"
                        />
                    </svg>
                </div>

                {/* 404 number */}
                <div className="text-8xl font-bold tracking-tight mb-2 text-gradient-main"
                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                    404
                </div>

                <h1 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    Page not found
                </h1>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xs mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get your heart back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                            bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                            hover:from-[#FF4D7A] hover:to-[#E63060]
                            transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/25"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Go Home
                    </Link>
                    <Link
                        href="/diagnostics"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                            border border-white/10 text-[var(--text-secondary)]
                            hover:border-white/20 hover:text-[var(--text-primary)] hover:bg-white/[0.03]
                            transition-all duration-200"
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Start Diagnosis
                    </Link>
                </div>
            </div>
        </div>
    );
}
