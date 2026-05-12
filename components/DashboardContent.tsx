'use client';

import Link from 'next/link';

const datasets = [
    {
        title: 'CDC Survey Data',
        tag: 'Behavioral Risk',
        description: 'Originally from the CDC Behavioral Risk Factor Surveillance System (BRFSS), which conducts annual telephone surveys to gather data on the health status of U.S. residents.',
        stats: [
            { label: 'Respondents', value: '401,958' },
            { label: 'Data Points', value: '279' },
            { label: 'Year', value: '2020' },
        ],
        link: 'https://www.cdc.gov/brfss/annual_data/annual_2020.html',
        accent: '#00DEB4',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: 'Heart Failure Clinical Records',
        tag: 'Medical Records',
        description: 'Medical records of 299 patients who had heart failure, collected during their follow-up period. Each patient profile contains 13 clinical features from UCI Machine Learning Repository.',
        stats: [
            { label: 'Patients', value: '299' },
            { label: 'Clinical Features', value: '13' },
            { label: 'Source', value: 'UCI ML' },
        ],
        link: 'https://archive.ics.uci.edu/dataset/519/heart+failure+clinical+records',
        accent: '#FF3366',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        title: 'Heartbeat Sound Dataset',
        tag: 'Audio Data',
        description: 'Audio recordings of the heart with class labels covering several dangerous heart sound types. A rich dataset enabling our AI to learn from real-world cardiac recordings.',
        stats: [
            { label: 'Audio Files', value: '585' },
            { label: 'Duration Range', value: '1–30s' },
            { label: 'Type', value: 'Multi-class' },
        ],
        link: 'https://www.kaggle.com/datasets/mersico/dangerous-heartbeat-dataset-dhd',
        accent: '#4F72FF',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
        ),
    },
];

const keyFeatures = [
    'BMI', 'Smoking History', 'Alcohol Consumption', 'Physical Activity',
    'Sleep Time', 'Age Category', 'Sex', 'General Health',
    'Mental Health', 'Diabetes', 'Stroke History', 'Heart Disease',
];

export default function DashboardContent() {
    return (
        <div className="container mx-auto px-6 py-16">


            {/* Datasets */}
            <div className="space-y-5 mb-14">
                {datasets.map((ds, i) => (
                    <div
                        key={i}
                        className="glass rounded-2xl overflow-hidden animate-fadeInUp hover:border-white/10 transition-colors duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Top accent line */}
                        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${ds.accent}60, transparent)` }} />

                        <div className="p-7">
                            {/* Header row */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${ds.accent}18`, border: `1px solid ${ds.accent}30`, color: ds.accent }}>
                                        {ds.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-base font-semibold text-[var(--text-primary)]">{ds.title}</h2>
                                            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                                                style={{ background: `${ds.accent}15`, color: ds.accent }}>
                                                {ds.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={ds.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                                        border border-white/8 text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                                        hover:bg-white/[0.03] transition-all duration-200"
                                >
                                    View Source
                                    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{ds.description}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                {ds.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-xl p-3 text-center"
                                        style={{ background: `${ds.accent}08`, border: `1px solid ${ds.accent}18` }}>
                                        <div className="text-xl font-bold mb-0.5" style={{ color: ds.accent,
                                            fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-7 mb-14 animate-fadeInUp">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#00DEB4]/12 border border-[#00DEB4]/25 flex items-center justify-center">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#00DEB4]">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-[var(--text-primary)]">Key Research Features</h2>
                        <p className="text-xs text-[var(--text-muted)]">Health factors analyzed by our AI model</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
                    {keyFeatures.map((feature) => (
                        <div key={feature}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.025] border border-white/[0.05]
                                hover:bg-[#00DEB4]/5 hover:border-[#00DEB4]/20 transition-all duration-200 group cursor-default">
                            <div className="w-1 h-1 rounded-full bg-[#00DEB4] opacity-50 group-hover:opacity-100 transition-opacity" />
                            <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="p-4 rounded-xl bg-[#4F72FF]/6 border border-[#4F72FF]/15">
                    <p className="text-xs text-[var(--text-secondary)] text-center leading-relaxed">
                        These comprehensive datasets enable our AI to detect subtle patterns in cardiovascular health,
                        potentially identifying risks before they become critical.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fadeInUp">
                <Link
                    href="/diagnostics"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold
                        bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                        hover:from-[#FF4D7A] hover:to-[#E63060]
                        transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF3366]/30"
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Try AI Diagnostics
                </Link>
            </div>
        </div>
    );
}
