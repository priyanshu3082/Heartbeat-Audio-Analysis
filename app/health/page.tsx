import type { Metadata } from 'next';
import HealthContent from '@/components/HealthContent';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Heart Health Guide | Heartbeat Audio Analysis',
    description: 'Learn about maintaining heart health, healthy lifestyle tips, and preventing cardiovascular diseases.',
};

export default function HealthPage() {
    return (
        <>
            <PageHero
                badge="Heart Health"
                title="Health Guide"
                subtitle="Evidence-based tips on diet, sleep, and harmful habits — everything that directly shapes your cardiovascular health."
                accentColor="#00DEB4"
            />
            <HealthContent />
        </>
    );
}
