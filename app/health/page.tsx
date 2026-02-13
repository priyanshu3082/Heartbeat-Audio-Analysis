import type { Metadata } from 'next';
import HealthContent from '@/components/HealthContent';

export const metadata: Metadata = {
    title: 'Heart Health Guide | Heartbeat Audio Analysis',
    description: 'Learn about maintaining heart health, healthy lifestyle tips, and preventing cardiovascular diseases.',
};

export default function HealthPage() {
    return <HealthContent />;
}
