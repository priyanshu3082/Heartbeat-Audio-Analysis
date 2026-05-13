import type { Metadata } from 'next';
import DiagnosticsContent from '@/components/DiagnosticsContent';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'AI Diagnostics | Heartbeat Audio Analysis',
    description: 'Upload or record your heartbeat for AI-powered cardiovascular analysis.',
};

export default function DiagnosticsPage() {
    return (
        <>
            <PageHero
                badge="AI Diagnostics"
                title="Heart Sound Analysis"
                subtitle="Upload or record your heartbeat. Our neural network analyzes it for signs of cardiovascular conditions in seconds."
                accentColor="#FF3366"
            />
            <DiagnosticsContent />
        </>
    );
}
