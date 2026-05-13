'use client';

import { motion } from 'framer-motion';
import { Heart, Target, TrendingUp } from 'lucide-react';

const cards = [
    {
        title: 'Cardiovascular Analysis',
        icon: Heart,
        color: 'text-blue-600 bg-blue-50',
        darkTone: 'dark:text-blue-300',
        stats: '9M deaths recorded annually',
        description: 'Heart disease remains the leading cause of global mortality. Our system helps monitor and identify patterns that require clinical attention, aiming to reduce these statistics through accessible technology.',
    },
    {
        title: 'Diagnostic Motivation',
        icon: Target,
        color: 'text-indigo-600 bg-indigo-50',
        darkTone: 'dark:text-indigo-300',
        stats: 'Early Detection Saves Lives',
        description: 'Our mission is to democratize cardiac health monitoring. By making reliable heartbeat classification available to everyone, we enable proactive healthcare and earlier interventions.',
    },
];

export default function InfoCards() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-4 rounded-2xl ${card.color} dark:bg-slate-800/80 ${card.darkTone} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{card.title}</h3>
                                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{card.stats}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-600">
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                        "{card.description}"
                                    </p>
                                </div>
                                
                                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                                    <span>Learn more about our methodology</span>
                                    <TrendingUp size={16} className="ml-2" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
