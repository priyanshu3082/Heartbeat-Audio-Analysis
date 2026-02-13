'use client';

export default function TutorialContent() {
    const steps = [
        {
            step: 1,
            title: 'Prepare your phone',
            icon: '📱',
            color: 'from-blue-600 to-cyan-600',
            content: 'Open any audio recording software like a voice recorder on your phone.',
            image: '🎙️',
        },
        {
            step: 2,
            title: 'Stand up',
            icon: '🧍',
            color: 'from-purple-600 to-pink-600',
            content: `Find a quiet place\nRemove outer clothing (phone must be in direct contact with the skin)\nStand upright on a hard surface`,
            image: '🏠',
        },
        {
            step: 3,
            title: 'Record your heartbeat',
            icon: '❤️',
            color: 'from-red-600 to-orange-600',
            content: 'Place your phone on your chest as shown below',
            image: '📍',
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
            icon: '📤',
            color: 'from-green-600 to-emerald-600',
            content: 'If you used the built-in recorder on this site, the audio is already downloaded. If you recorded audio using other software, simply upload the file to the site. We support all audio formats.',
            image: '☁️',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        User Guide for Heartbeat Recording
                    </span>
                    <span className="ml-4">🧪</span>
                </h1>
                <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-300">
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
                        className="glass rounded-3xl p-8 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        {/* Step Header */}
                        <div className="flex items-center space-x-4 mb-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stepItem.color} flex items-center justify-center text-3xl font-bold`}>
                                {stepItem.step}
                            </div>
                            <div className="flex-1">
                                <h2 className={`text-3xl font-bold bg-gradient-to-r ${stepItem.color} bg-clip-text text-transparent`}>
                                    {stepItem.title}
                                </h2>
                                <p className="text-gray-400">Step {stepItem.step} of {steps.length}</p>
                            </div>
                            <div className="text-5xl">{stepItem.icon}</div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Visual */}
                            <div className={`h-64 rounded-2xl bg-gradient-to-br ${stepItem.color} opacity-20 flex items-center justify-center`}>
                                <span className="text-9xl">{stepItem.image}</span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center">
                                <div className="glass rounded-xl p-6 bg-cardio-dark/50 mb-4">
                                    <p className="text-lg text-gray-300 whitespace-pre-line leading-relaxed">
                                        {stepItem.content}
                                    </p>
                                </div>

                                {/* Notes (if any) */}
                                {stepItem.notes && (
                                    <div className="glass rounded-xl p-6 bg-yellow-900/20 border border-yellow-600/30">
                                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">📋 Important Notes:</h3>
                                        <ul className="space-y-2">
                                            {stepItem.notes.map((note, noteIndex) => (
                                                <li key={noteIndex} className="flex items-start space-x-2 text-gray-300">
                                                    <span className="text-yellow-400 font-bold mt-1">•</span>
                                                    <span className="text-sm">{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-gradient-to-r ${stepItem.color} transition-all duration-1000`}
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
                    className="inline-block px-12 py-6 bg-gradient-to-r from-cardio-primary to-red-600 rounded-2xl font-bold text-xl
                   transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cardio-primary/50"
                >
                    Ready to Start Diagnosis? 🩺
                </a>
            </div>
        </div>
    );
}
