import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeProvider from "@/components/ThemeProvider";
import Link from "next/link";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Heartbeat Audio Analysis - AI Heart Health Diagnostics",
    description: "Heartbeat Audio Analysis - AI-powered cardiovascular diagnostics available to everyone. Record your heartbeat and get instant AI-powered health insights.",
    keywords: ["cardiology", "heart health", "AI diagnostics", "heartbeat analysis", "cardiovascular"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <ScrollToTop />

                <footer className="mt-20 border-t border-[var(--border)]"
                    style={{ background: 'var(--bg-footer)' }}>
                    <div className="container mx-auto px-6 py-12">
                        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">

                            {/* Brand */}
                            <div className="max-w-xs">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF3366]/20 to-[#4F72FF]/20
                                        border border-white/10 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                                            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                                                fill="url(#footer-heart)" />
                                            <defs>
                                                <linearGradient id="footer-heart" x1="1" y1="1" x2="23" y2="22">
                                                    <stop offset="0%" stopColor="#FF3366" />
                                                    <stop offset="100%" stopColor="#4F72FF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-[var(--text-primary)]"
                                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        Heartbeat Audio Analysis
                                    </span>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                    AI-powered cardiovascular diagnostics accessible to everyone.
                                    Record your heartbeat and get instant insights.
                                </p>
                            </div>

                            {/* Nav links */}
                            <div className="flex flex-wrap gap-x-12 gap-y-6">
                                <div>
                                    <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Platform</div>
                                    <div className="flex flex-col gap-2">
                                        {[
                                            { href: '/diagnostics', label: 'Diagnostics' },
                                            { href: '/dashboard', label: 'Dashboard' },
                                            { href: '/tutorial', label: 'Tutorial' },
                                        ].map(({ href, label }) => (
                                            <Link key={href} href={href}
                                                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Resources</div>
                                    <div className="flex flex-col gap-2">
                                        {[
                                            { href: '/health', label: 'Health Guide' },
                                            { href: '/tutorial', label: 'How It Works' },
                                        ].map(({ href, label }) => (
                                            <Link key={href} href={href}
                                                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="divider mb-6" />

                        {/* Bottom bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                            <p className="text-xs text-[var(--text-muted)]">
                                © 2026 Heartbeat Audio Analysis. All rights reserved.
                            </p>
                            <p className="text-xs text-[var(--text-muted)] text-center sm:text-right max-w-md">
                                Not a medical device. Always consult a qualified healthcare professional for medical advice.
                            </p>
                        </div>
                    </div>
                </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
