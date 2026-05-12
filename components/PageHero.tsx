interface PageHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    accentColor?: string;
}

export default function PageHero({
    badge,
    title,
    subtitle,
    accentColor = '#4F72FF',
}: PageHeroProps) {
    return (
        <div className="relative border-b border-white/[0.05] overflow-hidden"
            style={{ background: 'rgba(13, 22, 41, 0.4)' }}>
            {/* Subtle bg glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 80% at 50% 100%, ${accentColor}08, transparent)` }} />

            {/* Thin ECG line */}
            <div className="absolute bottom-0 left-0 right-0 h-8 opacity-20 pointer-events-none">
                <svg viewBox="0 0 1200 32" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0,16 L200,16 L215,4 L225,28 L235,2 L245,30 L255,16 L400,16
                           L550,16 L565,4 L575,28 L585,2 L595,30 L605,16 L750,16
                           L900,16 L915,4 L925,28 L935,2 L945,30 L955,16 L1200,16"
                        stroke={accentColor}
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 pt-12 pb-10 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{
                        background: `${accentColor}10`,
                        border: `1px solid ${accentColor}25`,
                        color: accentColor,
                    }}>
                    {badge}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    {title}
                </h1>
                <p className="text-sm text-[var(--text-secondary)] max-w-lg">{subtitle}</p>
            </div>
        </div>
    );
}
