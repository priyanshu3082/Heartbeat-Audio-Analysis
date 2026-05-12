'use client';

const techStack = [
    {
        name: 'Neural Networks',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'ONNX Runtime',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'Audio Processing',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'MFCC Extraction',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
        ),
    },
    {
        name: 'Real-time Analysis',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
        ),
    },
];

const highlights = [
    {
        title: 'Complex Classification',
        body: 'The problem involves classification of audio sample data where distinguishing between classes is non-trivial — requiring extremely robust machine learning classifiers.',
        color: '#4F72FF',
    },
    {
        title: 'Real-world Conditions',
        body: 'Data is gathered in real-world situations and frequently contains background noise of every conceivable type, making signal extraction a significant challenge.',
        color: '#FF3366',
    },
    {
        title: 'Unexplored Territory',
        body: 'Despite its medical significance, heartbeat sound classification remains a relatively unexplored application for machine learning — with enormous potential impact.',
        color: '#00DEB4',
    },
];

export default function AISection() {
    return (
        <section className="container mx-auto px-6 py-12">
            <div className="glass rounded-2xl overflow-hidden animate-fadeInUp">

                {/* Header bar */}
                <div className="px-8 py-6 border-b border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2.5 mb-1.5">
                                <div className="w-7 h-7 rounded-lg bg-[#4F72FF]/15 border border-[#4F72FF]/25 flex items-center justify-center">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#4F72FF]">
                                        <path d="M13 7H7v6h6V7z" />
                                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-[var(--text-primary)]">Medicine &amp; AI</h2>
                            </div>
                            <p className="text-sm text-[var(--text-muted)]">
                                How machine learning transforms cardiac diagnostics
                            </p>
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                                        bg-white/[0.04] border border-white/[0.07] text-[var(--text-secondary)]
                                        hover:bg-[#4F72FF]/8 hover:border-[#4F72FF]/20 hover:text-[#7C99FF]
                                        transition-all duration-200 cursor-default"
                                >
                                    <span className="text-[var(--text-muted)]">{tech.icon}</span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="grid md:grid-cols-3 gap-4">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]
                                    hover:bg-white/[0.04] hover:border-white/[0.09] transition-all duration-200 group"
                            >
                                <div className="w-1 h-8 rounded-full mb-4 group-hover:h-10 transition-all duration-200"
                                    style={{ background: item.color }} />
                                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* Divider with decorative waveform */}
                    <div className="mt-7 pt-7 border-t border-white/[0.05] flex items-center gap-4">
                        <div className="flex-1 h-8">
                            <svg viewBox="0 0 400 32" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                    d="M0,16 L60,16 L70,4 L80,28 L90,4 L100,28 L110,16 L160,16 L170,8 L180,24 L190,8 L200,24 L210,16 L280,16 L290,4 L300,28 L310,4 L320,28 L330,16 L400,16"
                                    stroke="url(#mini-ecg)" strokeWidth="1.5" fill="none"
                                    className="animate-pulse-slow"
                                />
                                <defs>
                                    <linearGradient id="mini-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4F72FF" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#FF3366" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#4F72FF" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">Powered by Advanced Technology</span>
                        <div className="flex-1 h-8 scale-x-[-1]">
                            <svg viewBox="0 0 400 32" className="w-full h-full" preserveAspectRatio="none">
                                <path
                                    d="M0,16 L60,16 L70,4 L80,28 L90,4 L100,28 L110,16 L160,16 L170,8 L180,24 L190,8 L200,24 L210,16 L280,16 L290,4 L300,28 L310,4 L320,28 L330,16 L400,16"
                                    stroke="url(#mini-ecg2)" strokeWidth="1.5" fill="none"
                                    className="animate-pulse-slow"
                                />
                                <defs>
                                    <linearGradient id="mini-ecg2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4F72FF" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#FF3366" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#4F72FF" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
