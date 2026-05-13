import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import AISection from "@/components/AISection";

export default function Home() {
    return (
        <div className="relative bg-slate-50 dark:bg-slate-950">
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] bg-blue-50 dark:bg-blue-950/30 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-indigo-50 dark:bg-indigo-950/25 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="relative z-10">
                <Hero />
                <div className="bg-slate-50/50 dark:bg-slate-950/80">
                    <InfoCards />
                </div>
                <AISection />

                <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to analyze your heart health?</h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Join thousands of users who trust our AI to provide instant, clear insights into their cardiovascular sound patterns.
                        </p>
                        <a
                            href="/diagnostics"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-slate-100 transition-all shadow-xl shadow-blue-900/20"
                        >
                            Get Started Now
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
