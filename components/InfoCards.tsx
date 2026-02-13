'use client';

export default function InfoCards() {
    const cards = [
        {
            title: 'Cardiovascular Diseases',
            icon: '💔',
            color: 'from-blue-600 to-blue-800',
            stats: '9M deaths in 2019',
            description: 'Heart disease has remained the leading cause of death worldwide for 20 years. However, they have never claimed as many lives as they do today. Deaths from cardiovascular disease have increased by more than 2 million since 2000, reaching nearly 9 million in 2019. Heart disease today accounts for 16% of all deaths worldwide.',
        },
        {
            title: 'Motivation',
            icon: '🎯',
            color: 'from-purple-600 to-purple-800',
            stats: 'Early Detection Saves Lives',
            description: 'Any method that can help detect signs of cardiovascular disease early can save many lives. Our goal is to make a reliable classifier accessible to every person. We see a future world in which deaths from diseases that can be cured in their early stages will disappear forever. Together we can go beyond human capabilities 🌎',
        },
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="glass rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Icon & Title */}
                        <div className="flex items-center space-x-4 mb-4">
                            <div className={`text-5xl p-4 rounded-xl bg-gradient-to-br ${card.color}`}>
                                {card.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-cardio-secondary">{card.title}</h2>
                                <p className="text-sm text-cardio-accent font-semibold">{card.stats}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="glass rounded-xl p-6 bg-cardio-dark/50">
                            <p className="text-gray-300 leading-relaxed">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
