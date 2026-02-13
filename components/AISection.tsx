'use client';

export default function AISection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="glass rounded-3xl p-10 glow-blue animate-fadeIn">
                <h2 className="text-4xl font-bold text-cardio-secondary mb-6 text-center">
                    Medicine and AI 🤖
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Icon/Visual */}
                    <div className="relative">
                        <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-cardio-secondary/20 to-cardio-accent/20 
                          flex items-center justify-center relative overflow-hidden">
                            <div className="text-9xl opacity-20 absolute">🧠</div>
                            <div className="text-9xl opacity-20 absolute top-10 right-10">❤️</div>
                            <div className="text-7xl z-10">🔬</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <div className="glass rounded-xl p-6 bg-cardio-dark/50">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                The problem is of particular interest to machine learning researchers as it involves classification of audio sample data,
                                where distinguishing between classes of interest is non-trivial.
                            </p>
                        </div>

                        <div className="glass rounded-xl p-6 bg-cardio-dark/50">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Data is gathered in real-world situations and frequently contains background noise of every conceivable type.
                                The differences between heart sounds corresponding to different heart symptoms can also be extremely subtle and challenging to separate.
                            </p>
                        </div>

                        <div className="glass rounded-xl p-6 bg-cardio-dark/50">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Success in classifying this form of data requires extremely robust classifiers.
                                Despite its medical significance, to date this is a relatively unexplored application for machine learning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Stack */}
                <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="text-2xl font-semibold text-center mb-6 text-cardio-accent">
                        Powered By Advanced Technology
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Neural Networks', 'ONNX Runtime', 'Audio Processing', 'MFCC Extraction', 'Real-time Analysis'].map((tech) => (
                            <span
                                key={tech}
                                className="px-6 py-3 glass rounded-full text-sm font-medium border border-cardio-secondary/30 
                         hover:border-cardio-secondary hover:bg-cardio-secondary/10 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
