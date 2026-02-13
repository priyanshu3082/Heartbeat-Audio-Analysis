'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="container mx-auto px-4 pt-20 pb-32">
            <div className="text-center max-w-5xl mx-auto animate-fadeIn">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cardio-primary via-purple-500 to-cardio-secondary bg-clip-text text-transparent">
                        Heartbeat Audio Analysis
                    </span>
                    <span className="ml-4 inline-block animate-heartbeat">❤️</span>
                </h1>

                {/* Subtitle */}
                <div className="glass rounded-2xl p-8 mb-12 glow">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                        <span className="text-cardio-accent font-semibold">AI-powered heartbeat analysis</span> available to everyone at <span className="text-cardio-primary font-semibold">any time</span>!
                        Just record the sounds of your heartbeat as indicated in the instructions and send us 🫶🏻
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link
                        href="/diagnostics"
                        className="group px-8 py-4 bg-gradient-to-r from-cardio-primary to-red-600 rounded-xl font-semibold text-lg
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cardio-primary/50
                     flex items-center space-x-2"
                    >
                        <span>Start Diagnosis</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>

                    <Link
                        href="/tutorial"
                        className="px-8 py-4 glass rounded-xl font-semibold text-lg border-2 border-cardio-secondary
                     transform transition-all duration-300 hover:scale-105 hover:bg-cardio-secondary/20 hover:border-cardio-secondary/50
                     flex items-center space-x-2"
                    >
                        <span>📖</span>
                        <span>View Tutorial</span>
                    </Link>
                </div>

                {/* Pulse Animation Bar */}
                <div className="relative h-24 overflow-hidden rounded-lg glass">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-16 relative">
                            {/* ECG Line Animation */}
                            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path
                                    d="M0,50 L200,50 L220,20 L240,80 L260,50 L1000,50"
                                    stroke="url(#pulse-gradient)"
                                    strokeWidth="3"
                                    fill="none"
                                    className="animate-pulse-slow"
                                />
                                <defs>
                                    <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#e63c3c" />
                                        <stop offset="50%" stopColor="#ff6b6b" />
                                        <stop offset="100%" stopColor="#353cbd" />
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
