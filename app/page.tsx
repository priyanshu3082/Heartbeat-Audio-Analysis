import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import AISection from "@/components/AISection";

export default function Home() {
    return (
        <div className="relative">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-40 w-96 h-96 bg-cardio-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 -right-40 w-96 h-96 bg-cardio-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cardio-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Hero />
                <InfoCards />
                <AISection />
            </div>
        </div>
    );
}
