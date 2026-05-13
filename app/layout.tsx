import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { Heart } from "lucide-react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const themeInitScript = `(function(){try{var k='heartbeat-theme',t=localStorage.getItem(k);if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.remove('dark');else if(window.matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.classList.add('dark');}catch(e){}})();`;

export const metadata: Metadata = {
    title: "Heartbeat Audio Analysis - AI Heart Health Diagnostics",
    description:
        "Heartbeat Audio Analysis - AI-powered cardiovascular diagnostics available to everyone. Record your heartbeat and get instant AI-powered health insights.",
    keywords: ["cardiology", "heart health", "AI diagnostics", "heartbeat analysis", "cardiovascular"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <ThemeProvider>
                    <Navigation />
                    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                        {children}
                    </main>
                    <ScrollToTop />
                    <footer className="bg-slate-50 border-t border-slate-200 py-16 mt-20 dark:bg-slate-900 dark:border-slate-800">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                                        <Heart size={20} fill="currentColor" />
                                    </div>
                                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                                        Heartbeat <span className="text-blue-600 dark:text-blue-400">AI</span>
                                    </span>
                                </div>

                                <div className="flex flex-wrap justify-center gap-8 text-slate-600 dark:text-slate-400 font-medium text-sm">
                                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Home
                                    </Link>
                                    <Link href="/diagnostics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Diagnostics
                                    </Link>
                                    <Link href="/health" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Health
                                    </Link>
                                    <Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Dashboard
                                    </Link>
                                    <Link href="/tutorial" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Tutorial
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                                    © 2026 Heartbeat Audio Analysis - Clinical AI Diagnostics Platform
                                </p>
                                <div className="max-w-2xl mx-auto">
                                    <p className="text-slate-400 dark:text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest">
                                        Disclaimer: This application is for educational and research purposes only. It is not a certified medical device.
                                        Always consult with a qualified healthcare professional for medical diagnosis and advice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
