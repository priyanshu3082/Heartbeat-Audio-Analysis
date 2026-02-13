import type { Metadata } from 'next';
import TutorialContent from '@/components/TutorialContent';

export const metadata: Metadata = {
    title: 'Recording Tutorial | Dr. Cardionix',
    description: 'Learn how to properly record your heartbeat for accurate AI diagnostics.',
};

export default function TutorialPage() {
    return <TutorialContent />;
}
