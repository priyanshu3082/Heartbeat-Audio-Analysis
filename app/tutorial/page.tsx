import type { Metadata } from 'next';
import TutorialContent from '@/components/TutorialContent';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Recording Tutorial | Heartbeat Audio Analysis',
    description: 'Learn how to properly record your heartbeat for accurate AI diagnostics.',
};

export default function TutorialPage() {
    return (
        <>
            <PageHero
                badge="Step-by-Step Guide"
                title="Recording Guide"
                subtitle="Follow these four steps to capture a clean, accurate heartbeat recording for analysis."
                accentColor="#A04FF7"
            />
            <TutorialContent />
        </>
    );
}
