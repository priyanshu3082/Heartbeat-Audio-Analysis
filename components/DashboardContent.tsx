'use client';

import { Database, FileBarChart2, FlaskConical, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function DashboardContent() {
    const datasets = [
        {
            title: 'Survey Data',
            icon: FileBarChart2,
            color: 'text-blue-700 bg-blue-100',
            description:
                'Originally, the data come from the CDC and is a major part of the Behavioral Risk Factor Surveillance System (BRFSS), which conducts annual telephone surveys to gather data on the health status of U.S. residents.',
            stats: [
                { label: 'Total Respondents', value: '401,958' },
                { label: 'Data Points', value: '279' },
                { label: 'Year', value: '2020' },
            ],
            link: 'https://www.cdc.gov/brfss/annual_data/annual_2020.html',
        },
        {
            title: 'Heart Failure Clinical Records',
            icon: FlaskConical,
            color: 'text-blue-700 bg-blue-100',
            description:
                'This data contains the medical records of 299 patients who had heart failure, collected during their follow-up period, where each patient profile has 13 clinical features.',
            stats: [
                { label: 'Total Patients', value: '299' },
                { label: 'Clinical Features', value: '13' },
                { label: 'Source', value: 'UCI ML' },
            ],
            link: 'https://archive.ics.uci.edu/dataset/519/heart+failure+clinical+records',
        },
        {
            title: 'Heartbeat Sound Dataset',
            icon: Database,
            color: 'text-blue-700 bg-blue-100',
            description:
                'The data contains audio recordings of the heart and class labels. There are several types of heart sounds that can be dangerous symptoms. Total 585 audio files with class label.',
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
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-slate-50">Clinical Data Overview</h1>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-3xl mx-auto border border-blue-100 dark:border-slate-700 shadow-sm">
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Sometimes statistics can say much more than the text in an article. On this page you will see interactive
                        information about research datasets with which you can understand the influence of various factors on the
                        heart.
                    </p>
                </div>
            </div>

            <div className="space-y-12 mb-16">
                {datasets.map((dataset, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-blue-100 dark:border-slate-700 shadow-sm transform transition-all duration-500 hover:shadow-md animate-fadeIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                                <div className={`w-20 h-20 rounded-2xl ${dataset.color} dark:bg-slate-800 dark:text-blue-300 flex items-center justify-center`}>
                                    <dataset.icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{dataset.title}</h2>
                            </div>

                            <a
                                href={dataset.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold transform transition-all duration-300 hover:bg-blue-700 hover:shadow-lg flex items-center space-x-2"
                            >
                                <span>View Source</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>

                        <div className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 mb-6">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{dataset.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {dataset.stats.map((stat, statIndex) => (
                                <div
                                    key={statIndex}
                                    className="rounded-xl p-6 text-center bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-600 transform transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-700"
                                >
                                    <div className="text-3xl font-bold mb-2 text-blue-700 dark:text-blue-300">{stat.value}</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-blue-100 dark:border-slate-700 shadow-sm animate-fadeIn">
                <h2 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-slate-50">Key Research Features</h2>

                <p className="text-center text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                    Our AI model analyzes multiple health factors to provide comprehensive cardiovascular risk assessment:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {keyFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-800 border border-blue-100 dark:border-slate-600"
                        >
                            <div className="text-blue-700 dark:text-blue-400 mb-2 flex justify-center">
                                <CheckCircle2 size={20} />
                            </div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-6 bg-blue-50 dark:bg-slate-800 rounded-2xl border border-blue-200 dark:border-slate-600">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 text-center">Research Impact</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-center">
                        These comprehensive datasets enable our AI to detect subtle patterns in cardiovascular health, potentially
                        identifying risks before they become critical. Early detection saves lives.
                    </p>
                </div>
            </div>

            <div className="text-center mt-16 animate-fadeIn">
                <a
                    href="/diagnostics"
                    className="inline-block px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl transform transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                >
                    Launch AI Diagnostics
                </a>
            </div>
        </div>
    );
}
