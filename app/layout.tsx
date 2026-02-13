import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
    title: "Dr. Cardionix - AI Heart Health Diagnostics",
    description: "Dr. Cardio Sonix is your cardiologist available to everyone at any time! Just record the sounds of your heartbeat and get AI-powered diagnostics.",
    keywords: ["cardiology", "heart health", "AI diagnostics", "heartbeat analysis", "cardiovascular"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="glass border-t border-white/10 py-8 mt-20">
                    <div className="container mx-auto px-4 text-center text-gray-400">
                        <p className="mb-2">© 2026 Dr. Cardionix - AI-Powered Heart Health Platform</p>
                        <p className="text-sm">Made with ❤️ by Daniil K. | Rebuilt with Next.js</p>
                        <p className="text-xs mt-4 text-gray-500">
                            Disclaimer: This is not a medical device. Always consult with healthcare professionals for medical advice.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
