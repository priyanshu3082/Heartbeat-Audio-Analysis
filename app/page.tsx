import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
    return (
        <div className="relative">
            {/* Ambient background orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 -left-40 w-96 h-96 bg-[#4F72FF]/8 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-40 -right-40 w-80 h-80 bg-[#FF3366]/6 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]
                    bg-[#00DEB4]/4 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: '3s' }} />
            </div>

            <div className="relative z-10">
                <Hero />
                <InfoCards />
                <HowItWorks />
                <FeaturesSection />
                <AISection />
                <CTABanner />
            </div>
        </div>
    );
}
