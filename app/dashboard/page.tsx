import type { Metadata } from 'next';
import DashboardContent from '@/components/DashboardContent';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Research Dashboard | Heartbeat Audio Analysis',
    description: 'View statistics and research data on cardiovascular diseases.',
};

export default function DashboardPage() {
    return (
        <>
            <PageHero
                badge="Research Data"
                title="Statistics & Heart Disease"
                subtitle="Explore the research datasets that power our AI — revealing how lifestyle factors influence cardiovascular health."
                accentColor="#00DEB4"
            />
            <DashboardContent />
        </>
    );
}
