'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Zap, Activity, Waves, Binary } from 'lucide-react';

export default function AISection() {
    const techStack = [
        { name: 'Neural Networks', icon: BrainCircuit },
        { name: 'ONNX Runtime', icon: Cpu },
        { name: 'Audio Processing', icon: Waves },
        { name: 'MFCC Extraction', icon: Binary },
        { name: 'Real-time Analysis', icon: Zap },
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-[40px] flex items-center justify-center p-12 border border-blue-100 dark:border-slate-700 shadow-premium">
                                <div className="grid grid-cols-2 gap-8 w-full h-full">
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-4">
                                        <div className="p-3 bg-blue-100 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-blue-400">
                                            <BrainCircuit size={40} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100">ML Engine</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-4 mt-8">
                                        <div className="p-3 bg-indigo-100 dark:bg-slate-800 rounded-xl text-indigo-600 dark:text-indigo-300">
                                            <Waves size={40} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Signal Processing</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-4 -mt-4">
                                        <div className="p-3 bg-cyan-100 dark:bg-slate-800 rounded-xl text-cyan-600 dark:text-cyan-300">
                                            <Binary size={40} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Feature Analysis</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-4 mt-4">
                                        <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-xl text-white">
                                            <Activity size={40} className="animate-pulse" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Clinical Output</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/40 rounded-full blur-[80px] opacity-30"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/40 rounded-full blur-[80px] opacity-30"></div>
                        </motion.div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
                                Bridging Modern <span className="text-blue-600 dark:text-blue-400">Medicine</span> <br />
                                and Artificial Intelligence
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                Classifying heartbeat audio is a complex challenge that requires robust machine learning models.
                                Our system processes real-world audio data, filtered for background noise, to identify subtle
                                cardiac symptoms that are often difficult for the human ear to distinguish.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                'Robust classification of non-trivial audio patterns',
                                'Advanced filtering of environmental background noise',
                                'High-precision differentiation between cardiac states',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-slate-700 dark:text-slate-200 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                        <Zap size={14} fill="currentColor" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                            <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                                Technological Core
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-semibold flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-300 transition-all cursor-default"
                                        >
                                            <Icon size={16} />
                                            <span>{tech.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
