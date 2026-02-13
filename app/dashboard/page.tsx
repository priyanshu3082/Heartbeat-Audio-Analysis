import type { Metadata } from 'next';
import DashboardContent from '@/components/DashboardContent';

export const metadata: Metadata = {
    title: 'Research Dashboard | Heartbeat Audio Analysis',
    description: 'View statistics and research data on cardiovascular diseases.',
};

export default function DashboardPage() {
    return <DashboardContent />;
}
