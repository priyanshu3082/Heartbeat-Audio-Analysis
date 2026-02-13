import type { Metadata } from 'next';
import DiagnosticsContent from '@/components/DiagnosticsContent';

export const metadata: Metadata = {
    title: 'AI Diagnostics | Heartbeat Audio Analysis',
    description: 'Upload or record your heartbeat for AI-powered cardiovascular analysis.',
};

export default function DiagnosticsPage() {
    return <DiagnosticsContent />;
}
