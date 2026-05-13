'use client';

import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

const ecgPath =
    'M0,50 L100,50 L110,30 L120,70 L130,50 L250,50 L260,20 L270,80 L280,50 L400,50 L410,35 L420,65 L430,50 L550,50 L560,10 L570,90 L580,50 L700,50 L710,40 L720,60 L730,50 L850,50 L860,25 L870,75 L880,50 L1000,50';

export default function Hero() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.4 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.4 });

    const transform = useMotionTemplate`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rotateY.set(px * 14);
        rotateX.set(-py * 12);
    };

    const handlePointerLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-slate-950">
            <div className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none text-slate-900 dark:text-slate-100">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200 dark:bg-slate-800 dark:text-blue-300 dark:border-slate-600">
                            <ShieldCheck size={16} />
                            <span>Clinical Grade Audio Analysis</span>
                        </span>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">
                            Precision <span className="text-blue-700 dark:text-blue-400">Cardiac Audio</span> <br />
                            Diagnostics with AI
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Advanced cardiovascular sound analysis available instantly.
                            Record your heartbeat and receive precise, AI-driven medical insights within seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Link
                                href="/diagnostics"
                                className="group px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg
                                 shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all duration-300
                                 dark:shadow-blue-900/40 flex items-center space-x-3"
                            >
                                <span>Start Analysis</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/tutorial"
                                className="px-8 py-4 bg-white text-slate-700 border-2 border-blue-100 rounded-2xl font-bold text-lg
                                 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300
                                 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-800 dark:hover:border-blue-500
                                 flex items-center space-x-3"
                            >
                                <Play size={20} className="fill-current" />
                                <span>View Tutorial</span>
                            </Link>
                        </div>
                    </motion.div>

                    <div
                        ref={wrapRef}
                        className="relative mx-auto max-w-3xl [perspective:1200px]"
                        onPointerMove={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.15 }}
                            style={{ transform: transform, transformStyle: 'preserve-3d' }}
                            className="relative rounded-3xl p-[1px] bg-gradient-to-br from-slate-300 via-blue-200 to-cyan-200 shadow-2xl dark:from-slate-600 dark:via-blue-900 dark:to-slate-800"
                        >
                            <div className="rounded-[22px] overflow-hidden bg-[#0c1222] ring-1 ring-white/10">
                                <div className="px-4 sm:px-6 py-3 border-b border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-900/80 flex flex-wrap items-center justify-between gap-3">
                                    <div className="text-left space-y-0.5">
                                        <p className="text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase">
                                            Resting 12-lead · preview
                                        </p>
                                        <p className="text-xs font-semibold text-slate-200">
                                            Lead II · 25 mm/s · 10 mm/mV
                                        </p>
                                    </div>
                                    <div className="flex gap-6 font-mono text-right">
                                        <div>
                                            <span className="block text-[9px] text-slate-500 uppercase tracking-wider">HR</span>
                                            <span className="text-lg text-emerald-400 tabular-nums">72</span>
                                            <span className="text-[10px] text-slate-500 ml-0.5">bpm</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] text-slate-500 uppercase tracking-wider">PR</span>
                                            <span className="text-lg text-sky-300 tabular-nums">160</span>
                                            <span className="text-[10px] text-slate-500 ml-0.5">ms</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="relative h-44 sm:h-48"
                                    style={{
                                        backgroundColor: '#0a1628',
                                        backgroundImage: `
                                            linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px),
                                            linear-gradient(rgba(34,197,94,0.2) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '10px 10px, 10px 10px, 50px 50px, 50px 50px',
                                    }}
                                >
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="ecgGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
                                                <stop offset="50%" stopColor="#4ade80" stopOpacity="0.9" />
                                                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.15" />
                                            </linearGradient>
                                        </defs>
                                        <path d={ecgPath} stroke="url(#ecgGlow)" strokeWidth="4" fill="none" className="opacity-30" />
                                        <motion.path
                                            d={ecgPath}
                                            stroke="#4ade80"
                                            strokeWidth="2.25"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0.85 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                                        />
                                    </svg>
                                    <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[9px] font-mono text-slate-500 uppercase tracking-wider pointer-events-none">
                                        <span>Demo waveform</span>
                                        <span>Not for diagnosis</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/20 blur-2xl scale-[0.92] opacity-60 dark:opacity-40"
                                aria-hidden
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100 dark:bg-blue-950/40 rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 dark:bg-slate-900/50 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        </section>
    );
}
