'use client';

import { useState } from 'react';

export default function HealthContent() {
    const [activeTab, setActiveTab] = useState<'habits' | 'lifestyle'>('habits');

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Heart Health Guide 💊
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Learn how to maintain a healthy heart and extend your life
                </p>
            </div>

            {/* Life Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="glass rounded-2xl p-8 animate-fadeIn">
                    <h2 className="text-3xl font-bold mb-4 text-white">Lifespan ⏳</h2>
                    <div className="w-full h-64 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 mb-6 flex items-center justify-center">
                        <span className="text-7xl">🕐</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Human life is fragile and not so long. Every action you take can affect your health in the future.
                        One way or another, almost all of us hit the threshold of average life expectancy, which is about 74.5 years.
                        Just as important is not only the numbers that you live, but also the quality of this life.
                        Summarizing all of the above, I want to convey to you the value of your time and health, because they have their limits.
                    </p>
                </div>

                <div className="glass rounded-2xl p-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-3xl font-bold mb-4 text-white">Heart and Life Path ❤️</h2>
                    <div className="w-full h-64 rounded-xl bg-gradient-to-br from-red-600/20 to-pink-600/20 mb-6 flex items-center justify-center">
                        <span className="text-7xl">💔</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Half of patients with heart failure live no more than five years, a significant proportion of them die within just one year.
                        The heart plays a big role in the quality and duration of human life,
                        so it is important to learn how to detect problems of the cardiovascular system in advance.
                    </p>
                </div>
            </div>

            {/* How to keep a life streak */}
            <div className="glass rounded-3xl p-10 mb-16 glow">
                <h2 className="text-4xl font-bold mb-6 text-center">How to keep a life streak? 🎯</h2>
                <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                    Now that you understand the importance of the contribution of the cardiovascular system to your life expectancy,
                    I would like to give a couple of useful tips without further ado.
                    This is a brief summary of the most important factors that affect the heart which I know.
                </p>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab('habits')}
                        className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${activeTab === 'habits'
                                ? 'bg-cardio-primary text-white glow'
                                : 'glass hover:bg-white/5'
                            }`}
                    >
                        Bad Habits 🚫
                    </button>
                    <button
                        onClick={() => setActiveTab('lifestyle')}
                        className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${activeTab === 'lifestyle'
                                ? 'bg-green-600 text-white glow'
                                : 'glass hover:bg-white/5'
                            }`}
                    >
                        Healthy Lifestyle ✅
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'habits' ? (
                    <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                        {/* Alcohol */}
                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50">
                            <h3 className="text-2xl font-bold mb-4 text-red-400">Alcohol 🥃</h3>
                            <div className="w-full h-48 rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 mb-4 flex items-center justify-center">
                                <span className="text-6xl">🍺</span>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Strongest cellular poison</h4>
                                    <p className="text-sm">Being the strongest cellular poison, alcohol damages the cells of the heart muscle
                                        and increases blood pressure (even with a single dose - for several days), poisoning the nervous and cardiovascular systems.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">The most harmful alcohol</h4>
                                    <p className="text-sm">The most harmful alcohol can be called beer,
                                        the cobalt contained in the foam increases the load on the heart muscle.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Bovine heart</h4>
                                    <p className="text-sm">With frequent use of alcohol, an excess amount of fat accumulates in the heart muscle,
                                        it is reborn, becomes flabby. The heart becomes weak, enlarged and can hardly cope with its work.</p>
                                </div>
                            </div>
                        </div>

                        {/* Smoking */}
                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50">
                            <h3 className="text-2xl font-bold mb-4 text-red-400">Smoking 🚬</h3>
                            <div className="w-full h-48 rounded-xl bg-gradient-to-br from-gray-600/20 to-red-600/20 mb-4 flex items-center justify-center">
                                <span className="text-6xl">🚭</span>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Nicotine</h4>
                                    <p className="text-sm">Nicotine causes an increase in blood pressure and heart rate,
                                        and carbon monoxide causes heart failure.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Tobacco smoke</h4>
                                    <p className="text-sm">Tobacco smoke contains carbon monoxide (carbon monoxide), which prevents the blood from carrying oxygen.
                                        Therefore, to supply the body with oxygen, the heart has to work harder.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Cardiac spasm</h4>
                                    <p className="text-sm">Cardiac spasm is the most common complication of smoking.
                                        The result of such a spasm can be a myocardial infarction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                        {/* Food */}
                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50">
                            <h3 className="text-2xl font-bold mb-4 text-green-400">Healthy Food 🥗</h3>
                            <div className="w-full h-48 rounded-xl bg-gradient-to-br from-green-600/20 to-lime-600/20 mb-4 flex items-center justify-center">
                                <span className="text-6xl">🍎</span>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Healthy fruits</h4>
                                    <p className="text-sm mb-2">Almost all fresh fruits are good for the heart. Therefore, in the summer you need to eat as much as possible:</p>
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        <li>Apples</li>
                                        <li>Pears</li>
                                        <li>Plums</li>
                                        <li>All kinds of berries</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Dark-colored berries</h4>
                                    <p className="text-sm">All dark-colored berries (blueberries, blackberries, currants) not only replenish
                                        the body's vitamin supply and nourish the heart muscle, but also increase the level of hemoglobin in the blood.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Calcium sources</h4>
                                    <p className="text-sm">Milk, cheese, yogurt, fish (salmon and sardines), seeds (sesame and chia), nuts, figs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sleep */}
                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50">
                            <h3 className="text-2xl font-bold mb-4 text-green-400">Quality Sleep 💤</h3>
                            <div className="w-full h-48 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 mb-4 flex items-center justify-center">
                                <span className="text-6xl">😴</span>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">The heart needs sleep too</h4>
                                    <p className="text-sm">Sleep is a time of rest for the whole body.
                                        Even the heart, which works day and night, naturally slows down during sleep.
                                        Therefore, poor heart function caused by heart disease can deprive the body of normal rest during sleep.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">How much sleep?</h4>
                                    <p className="text-sm">On average, the duration of sleep should be about seven hours.
                                        Adults are recommended to sleep for seven to nine hours,
                                        but for people over 65, six to eight hours is enough.</p>
                                </div>
                                <div className="mt-4 p-4 bg-blue-600/20 rounded-lg">
                                    <p className="text-sm font-semibold text-blue-300">
                                        💡 Tip: Maintain a consistent sleep schedule for optimal heart health!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
