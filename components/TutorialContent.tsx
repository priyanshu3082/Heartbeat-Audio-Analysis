'use client';
import { Mic, Smartphone, UserRound, Upload, ClipboardList } from 'lucide-react';

export default function TutorialContent() {
    const steps = [
        {
            step: 1,
            title: 'Prepare your phone',
            icon: Smartphone,
            color: 'from-blue-500 to-cyan-500',
            content: 'Open any audio recording software like a voice recorder on your phone.',
            image: Mic,
        },
        {
            step: 2,
            title: 'Stand up',
            icon: UserRound,
            color: 'from-blue-500 to-indigo-500',
            content: `Find a quiet place\nRemove outer clothing (phone must be in direct contact with the skin)\nStand upright on a hard surface`,
            image: UserRound,
        },
        {
            step: 3,
            title: 'Record your heartbeat',
            icon: Mic,
            color: 'from-blue-600 to-cyan-600',
            content: 'Place your phone on your chest as shown below',
            image: Mic,
            notes: [
                'Recording must have duration not less than 20 seconds',
                'You can record both at rest and after physical activity',
                'Phone should be in a vertical position',
                'Distance between your body and the phone should not remain',
                'Try not to move or make unnecessary sounds',
                'Make sure you put the phone on the side with the microphone',
            ],
        },
        {
            step: 4,
            title: 'Upload audio',
            icon: Upload,
            color: 'from-blue-500 to-indigo-600',
            content: 'If you used the built-in recorder on this site, the audio is already downloaded. If you recorded audio using other software, simply upload the file to the site. We support all audio formats.',
            image: Upload,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-slate-50">
                    Heartbeat Recording Protocol
                </h1>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-3xl mx-auto border border-blue-100 dark:border-slate-700 shadow-sm">
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        If you already have an audio recording, then simply download it,
                        but we recommend that you familiarize yourself with it
                        to know how to correctly record your heartbeat.
                    </p>
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-12">
                {steps.map((stepItem, index) => (
                    <div
                        key={stepItem.step}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-blue-100 dark:border-slate-700 shadow-sm transform transition-all duration-500 hover:shadow-md animate-fadeIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        {/* Step Header */}
                        <div className="flex items-center space-x-4 mb-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stepItem.color} flex items-center justify-center text-3xl font-bold text-white shadow-inner`}>
                                {stepItem.step}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                    {stepItem.title}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400">Step {stepItem.step} of {steps.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                                <stepItem.icon size={24} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Visual */}
                            <div className={`h-64 rounded-2xl bg-gradient-to-br ${stepItem.color} opacity-20 flex items-center justify-center`}>
                                <stepItem.image size={96} className="text-blue-900 dark:text-blue-200 opacity-70" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center">
                                <div className="rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 mb-4">
                                    <p className="text-lg text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                                        {stepItem.content}
                                    </p>
                                </div>

                                {/* Notes (if any) */}
                                {stepItem.notes && (
                                    <div className="rounded-xl p-6 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-600">
                                        <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                                            <ClipboardList size={18} />
                                            Important Notes
                                        </h3>
                                        <ul className="space-y-2">
                                            {stepItem.notes.map((note, noteIndex) => (
                                                <li key={noteIndex} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                                                    <span className="text-blue-700 dark:text-blue-400 font-bold mt-1">•</span>
                                                    <span className="text-sm">{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-6 h-2 bg-blue-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
                                style={{ width: `${(stepItem.step / steps.length) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16 animate-fadeIn">
                <a
                    href="/diagnostics"
                    className="inline-block px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl transform transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                >
                    Continue to Diagnostics
                </a>
            </div>
        </div>
    );
}
