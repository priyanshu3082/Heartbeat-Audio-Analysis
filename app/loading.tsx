export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'var(--bg-base)' }}>
            <div className="flex flex-col items-center gap-5">
                {/* Animated heart + ECG */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#FF3366]/10 animate-ping" style={{ animationDuration: '1.5s' }} />
                    <svg viewBox="0 0 24 24" className="w-8 h-8 animate-heartbeat relative z-10" fill="none">
                        <path
                            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                            fill="url(#loading-heart)"
                        />
                        <defs>
                            <linearGradient id="loading-heart" x1="1" y1="1" x2="23" y2="22">
                                <stop offset="0%" stopColor="#FF3366" />
                                <stop offset="100%" stopColor="#4F72FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* ECG loading bar */}
                <div className="w-40 h-8 relative overflow-hidden">
                    <svg viewBox="0 0 160 32" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="ecg-loading" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF3366" stopOpacity="0" />
                                <stop offset="50%" stopColor="#FF3366" stopOpacity="1" />
                                <stop offset="100%" stopColor="#4F72FF" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0,16 L40,16 L48,4 L54,28 L60,4 L66,28 L72,16 L120,16 L128,4 L134,28 L140,4 L146,28 L152,16 L160,16"
                            stroke="url(#ecg-loading)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse-slow"
                        />
                    </svg>
                </div>

                <p className="text-xs text-[var(--text-muted)] font-medium tracking-wide uppercase">
                    Loading
                </p>
            </div>
        </div>
    );
}
