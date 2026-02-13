'use client';

export default function DashboardContent() {
    const datasets = [
        {
            title: 'Survey Data',
            icon: '📝',
            color: 'from-green-600 to-emerald-600',
            description: 'Originally, the data come from the CDC and is a major part of the Behavioral Risk Factor Surveillance System (BRFSS), which conducts annual telephone surveys to gather data on the health status of U.S. residents.',
            stats: [
                { label: 'Total Respondents', value: '401,958' },
                { label: 'Data Points', value: '279' },
                { label: 'Year', value: '2020' },
            ],
            link: 'https://www.cdc.gov/brfss/annual_data/annual_2020.html',
        },
        {
            title: 'Heart Failure Clinical Records',
            icon: '💉',
            color: 'from-red-600 to-pink-600',
            description: 'This data contains the medical records of 299 patients who had heart failure, collected during their follow-up period, where each patient profile has 13 clinical features.',
            stats: [
                { label: 'Total Patients', value: '299' },
                { label: 'Clinical Features', value: '13' },
                { label: 'Source', value: 'UCI ML' },
            ],
            link: 'https://archive.ics.uci.edu/dataset/519/heart+failure+clinical+records',
        },
        {
            title: 'Heartbeat Sound Dataset',
            icon: '💓',
            color: 'from-purple-600 to-blue-600',
            description: 'The data contains audio recordings of the heart and class labels. There are several types of heart sounds that can be dangerous symptoms. Total 585 audio files with class label.',
            stats: [
                { label: 'Audio Files', value: '585' },
                { label: 'Duration Range', value: '1-30s' },
                { label: 'Categories', value: 'Multi-class' },
            ],
            link: 'https://www.kaggle.com/datasets/mersico/dangerous-heartbeat-dataset-dhd',
        },
    ];

    const keyFeatures = [
        'BMI (Body Mass Index)',
        'Smoking History',
        'Alcohol Consumption',
        'Physical Activity',
        'Sleep Time',
        'Age Category',
        'Sex',
        'General Health',
        'Mental Health',
        'Diabetes',
        'Stroke History',
        'Heart Disease',
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Statistics and Heart Disease
                    </span>
                    <span className="ml-4">📊</span>
                </h1>
                <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-300">
                        Sometimes statistics can say much more than the text in an article.
                        On this page you will see interactive information about research datasets
                        with which you can understand the influence of various factors on the heart.
                    </p>
                </div>
            </div>

            {/* Datasets */}
            <div className="space-y-12 mb-16">
                {datasets.map((dataset, index) => (
                    <div
                        key={index}
                        className="glass rounded-3xl p-10 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <div className={`text-5xl w-20 h-20 rounded-2xl bg-gradient-to-br ${dataset.color} flex items-center justify-center`}>
                                    {dataset.icon}
                                </div>
                                <h2 className={`text-3xl font-bold bg-gradient-to-r ${dataset.color} bg-clip-text text-transparent`}>
                                    {dataset.title}
                                </h2>
                            </div>

                            <a
                                href={dataset.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 py-3 bg-gradient-to-r ${dataset.color} rounded-xl font-semibold 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2`}
                            >
                                <span>View Source</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Description */}
                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50 mb-6">
                            <p className="text-gray-300 leading-relaxed">{dataset.description}</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {dataset.stats.map((stat, statIndex) => (
                                <div
                                    key={statIndex}
                                    className={`glass rounded-xl p-6 text-center bg-gradient-to-br ${dataset.color} bg-opacity-10 
                           transform transition-all duration-300 hover:scale-105`}
                                >
                                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r ${dataset.color} bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Key Features Section */}
            <div className="glass rounded-3xl p-10 glow-accent animate-fadeIn">
                <h2 className="text-4xl font-bold text-center mb-8 text-cardio-accent">
                    🔬 Key Research Features
                </h2>

                <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                    Our AI model analyzes multiple health factors to provide comprehensive cardiovascular risk assessment:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {keyFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-cardio-accent/10
                       border border-cardio-accent/20 hover:border-cardio-accent/50"
                        >
                            <div className="text-2xl mb-2">📌</div>
                            <div className="text-sm font-medium text-gray-300">{feature}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-6 bg-blue-900/20 rounded-2xl border border-blue-600/30">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3 text-center">🎯 Research Impact</h3>
                    <p className="text-gray-300 text-center">
                        These comprehensive datasets enable our AI to detect subtle patterns in cardiovascular health,
                        potentially identifying risks before they become critical. Early detection saves lives.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 animate-fadeIn">
                <a
                    href="/diagnostics"
                    className="inline-block px-12 py-6 bg-gradient-to-r from-cardio-primary to-red-600 rounded-2xl font-bold text-xl
                   transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cardio-primary/50"
                >
                    Try AI Diagnostics Now 🩺
                </a>
            </div>
        </div>
    );
}
