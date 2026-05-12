'use client';

import { useState } from 'react';

const habitItems = [
    {
        title: 'Alcohol',
        accent: '#FF3366',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
            </svg>
        ),
        points: [
            { heading: 'Strongest cellular poison', body: 'Alcohol damages heart muscle cells and increases blood pressure (even with a single dose — for several days), poisoning the nervous and cardiovascular systems.' },
            { heading: 'The most harmful alcohol', body: 'Beer is particularly harmful — cobalt in the foam increases the load on the heart muscle significantly.' },
            { heading: '"Bovine heart" effect', body: 'With frequent alcohol use, excess fat accumulates in the heart muscle. It degenerates, becomes flabby, enlarged, and can barely cope with its function.' },
        ],
    },
    {
        title: 'Smoking',
        accent: '#FF6B00',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
        ),
        points: [
            { heading: 'Nicotine & pressure', body: 'Nicotine raises blood pressure and heart rate. Carbon monoxide in smoke causes heart failure by blocking the blood\'s ability to carry oxygen.' },
            { heading: 'Oxygen deprivation', body: 'Tobacco smoke forces the heart to work harder to compensate for reduced oxygen-carrying capacity in the bloodstream.' },
            { heading: 'Cardiac spasm risk', body: 'Cardiac spasms are the most common smoking complication. The result can be a full myocardial infarction (heart attack).' },
        ],
    },
];

const lifestyleItems = [
    {
        title: 'Healthy Food',
        accent: '#00DEB4',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
            </svg>
        ),
        points: [
            { heading: 'Heart-healthy fruits', body: 'Apples, pears, plums, and all kinds of berries are excellent for the heart. Eat as much fresh fruit as possible during summer months.' },
            { heading: 'Dark-colored berries', body: 'Blueberries, blackberries, and currants replenish vitamins, nourish the heart muscle, and increase hemoglobin levels in the blood.' },
            { heading: 'Calcium sources', body: 'Include milk, cheese, yogurt, salmon, sardines, sesame and chia seeds, nuts, and figs for strong cardiovascular support.' },
        ],
    },
    {
        title: 'Quality Sleep',
        accent: '#4F72FF',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        ),
        points: [
            { heading: 'The heart needs rest', body: 'Even the heart, which works day and night, naturally slows during sleep. Poor sleep deprives the body of essential cardiovascular recovery.' },
            { heading: 'Optimal duration', body: 'Adults need 7–9 hours; those over 65 need 6–8 hours. Consistent sleep duration is key to cardiovascular health.' },
            { heading: 'Sleep schedule', body: 'Maintaining a consistent sleep and wake schedule — even on weekends — dramatically improves heart health outcomes over time.' },
        ],
    },
];

export default function HealthContent() {
    const [activeTab, setActiveTab] = useState<'habits' | 'lifestyle'>('habits');

    const items = activeTab === 'habits' ? habitItems : lifestyleItems;

    return (
        <div className="container mx-auto px-6 py-16">


            {/* Life stat cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-12 animate-fadeInUp">
                <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-[#4F72FF]/12 border border-[#4F72FF]/25 flex items-center justify-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#4F72FF]">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-base font-semibold text-[var(--text-primary)]">Human Lifespan</h2>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-gradient-blue" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>74.5</span>
                        <span className="text-sm text-[var(--text-secondary)]">years average</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Every action affects your future health. Life matters not just in years lived, but in the quality of those years. Your time and health both have limits.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 animate-fadeInUp delay-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/20 flex items-center justify-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#FF3366]">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-base font-semibold text-[var(--text-primary)]">Heart Failure Prognosis</h2>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold text-gradient-red" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>50%</span>
                        <span className="text-sm text-[var(--text-secondary)]">survive beyond 5 years</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Half of heart failure patients live no more than five years; many die within one year. Early detection is critical to improving these outcomes.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="glass rounded-2xl overflow-hidden animate-fadeInUp">
                {/* Tab header */}
                <div className="flex border-b border-white/[0.06]">
                    <button
                        onClick={() => setActiveTab('habits')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                            activeTab === 'habits'
                                ? 'border-[#FF3366] text-[#FF3366] bg-[#FF3366]/4'
                                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.02]'
                        }`}
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                        Bad Habits
                    </button>
                    <button
                        onClick={() => setActiveTab('lifestyle')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                            activeTab === 'lifestyle'
                                ? 'border-[#00DEB4] text-[#00DEB4] bg-[#00DEB4]/4'
                                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.02]'
                        }`}
                    >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Healthy Lifestyle
                    </button>
                </div>

                {/* Tab content */}
                <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-5 animate-fadeIn">
                        {items.map((item) => (
                            <div key={item.title}
                                className="rounded-xl p-5 bg-white/[0.02] border border-white/[0.05]
                                    hover:bg-white/[0.04] transition-colors duration-200">
                                {/* Card header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}25`,
                                                 color: item.accent }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</h3>
                                </div>

                                {/* Points */}
                                <div className="space-y-3">
                                    {item.points.map((pt) => (
                                        <div key={pt.heading}
                                            className="pl-3 border-l-2"
                                            style={{ borderColor: `${item.accent}40` }}>
                                            <div className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">
                                                {pt.heading}
                                            </div>
                                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{pt.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
