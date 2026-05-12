'use client';

import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: 'Prepare Your Phone',
        accent: '#4F72FF',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
        ),
        content: 'Open any audio recording software like a voice recorder on your phone.',
    },
    {
        step: 2,
        title: 'Find a Quiet Position',
        accent: '#A04FF7',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
        ),
        content: 'Find a quiet place. Remove outer clothing so the phone is in direct contact with your skin. Stand upright on a hard, flat surface.',
    },
    {
        step: 3,
        title: 'Record Your Heartbeat',
        accent: '#FF3366',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
        ),
        content: 'Place your phone on your chest with the microphone side facing your skin.',
        notes: [
            'Recording must be at least 20 seconds long',
            'You can record at rest or after physical activity',
            'Hold the phone vertically against your chest',
            'No gap between your body and the phone',
            'Stay still and avoid making sounds',
            'Ensure the microphone side faces inward',
        ],
    },
    {
        step: 4,
        title: 'Upload Your Audio',
        accent: '#00DEB4',
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        ),
        content: 'If you used the built-in recorder on this site, the audio is already ready. If you used external software, upload the file. All common audio formats are supported.',
    },
];

export default function TutorialContent() {
    return (
        <div className="container mx-auto px-6 py-16">


            {/* Progress indicator */}
            <div className="flex items-center gap-0 mb-10 max-w-lg animate-fadeInUp">
                {steps.map((s, i) => (
                    <div key={s.step} className="flex items-center flex-1 last:flex-none">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                            style={{ background: `${s.accent}20`, border: `1.5px solid ${s.accent}50`, color: s.accent }}>
                            {s.step}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="flex-1 h-px mx-1"
                                style={{ background: `linear-gradient(90deg, ${s.accent}30, ${steps[i + 1].accent}30)` }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Steps */}
            <div className="space-y-5 mb-14">
                {steps.map((s, i) => (
                    <div
                        key={s.step}
                        className="glass rounded-2xl overflow-hidden animate-fadeInUp"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Top accent */}
                        <div className="h-px" style={{ background: `linear-gradient(90deg, ${s.accent}60, transparent)` }} />

                        <div className="p-6">
                            {/* Step header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25`, color: s.accent }}>
                                    {s.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-medium mb-0.5" style={{ color: s.accent }}>
                                        Step {s.step} of {steps.length}
                                    </div>
                                    <h2 className="text-base font-semibold text-[var(--text-primary)]">{s.title}</h2>
                                </div>

                                {/* Progress bar pill */}
                                <div className="ml-auto hidden sm:flex items-center gap-2">
                                    <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full rounded-full transition-all duration-700"
                                            style={{ width: `${(s.step / steps.length) * 100}%`, background: s.accent }} />
                                    </div>
                                    <span className="text-xs text-[var(--text-muted)]">
                                        {Math.round((s.step / steps.length) * 100)}%
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{s.content}</p>

                            {/* Notes */}
                            {s.notes && (
                                <div className="rounded-xl p-4 bg-[#FF8C00]/5 border border-[#FF8C00]/15">
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#FF8C00] flex-shrink-0">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-semibold text-[#FF8C00] uppercase tracking-wide">Important Notes</span>
                                    </div>
                                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                                        {s.notes.map((note) => (
                                            <li key={note} className="flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-[#FF8C00]/60 flex-shrink-0 mt-2" />
                                                <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeInUp">
                <Link
                    href="/diagnostics"
                    className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-base
                        bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                        hover:from-[#FF4D7A] hover:to-[#E63060]
                        transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FF3366]/30"
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Start Diagnosis
                </Link>
                <span className="text-xs text-[var(--text-muted)]">You're ready to go</span>
            </div>
        </div>
    );
}
