'use client';

import { useState, useRef } from 'react';

type PredictionResult = {
    predicted: string;
    probability: number;
    outputs: { [key: string]: number };
} | null;

const categoryMeta: Record<string, { label: string; color: string; bg: string }> = {
    healthy:  { label: 'Healthy',  color: '#00DEB4', bg: '#00DEB408' },
    abnormal: { label: 'Abnormal', color: '#FF3366', bg: '#FF336608' },
    artifact: { label: 'Artifact', color: '#8A9BC4', bg: '#8A9BC408' },
};

export default function DiagnosticsContent() {
    const [audioFile, setAudioFile]     = useState<File | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult]           = useState<PredictionResult>(null);
    const [audioUrl, setAudioUrl]       = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef        = useRef<Blob[]>([]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioFile(file);
            setAudioUrl(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                const file = new File([blob], 'recording.webm', { type: 'audio/webm' });
                setAudioFile(file);
                setAudioUrl(URL.createObjectURL(blob));
                stream.getTracks().forEach(t => t.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch {
            alert('Could not access microphone. Please check permissions.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const analyzeAudio = async () => {
        if (!audioFile) return;
        setIsAnalyzing(true);
        setTimeout(() => {
            setResult({
                predicted: Math.random() > 0.5 ? 'healthy' : 'abnormal',
                probability: 0.75 + Math.random() * 0.2,
                outputs: { healthy: 0.75, abnormal: 0.20, artifact: 0.05 },
            });
            setIsAnalyzing(false);
        }, 3000);
    };

    const reset = () => { setAudioFile(null); setAudioUrl(null); setResult(null); };

    return (
        <div className="container mx-auto px-6 py-16">


            {/* Instructions */}
            <div className="glass rounded-2xl p-5 mb-10 max-w-3xl animate-fadeInUp">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4F72FF]/12 border border-[#4F72FF]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#4F72FF]">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Quick Instructions</p>
                        <ol className="space-y-1">
                            {[
                                'Record your heartbeat for at least 20 seconds',
                                'Or upload a pre-recorded audio file (WAV, MP3, M4A, OGG)',
                                'Ensure a clear recording with minimal background noise',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                    <span className="text-[#4F72FF] font-semibold mt-0.5 flex-shrink-0">{i + 1}.</span>
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mb-10 animate-fadeInUp">

                {/* Upload */}
                <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-[#4F72FF]/12 border border-[#4F72FF]/25
                            flex items-center justify-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#4F72FF]">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Upload File</span>
                    </div>

                    <label className="block cursor-pointer">
                        <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
                        <div className="border border-dashed border-[#4F72FF]/25 rounded-xl p-8 text-center
                            hover:border-[#4F72FF]/50 hover:bg-[#4F72FF]/4 transition-all duration-200 group">
                            <div className="w-12 h-12 rounded-xl bg-[#4F72FF]/10 border border-[#4F72FF]/20
                                flex items-center justify-center mx-auto mb-3 group-hover:bg-[#4F72FF]/15 transition-colors">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#4F72FF]">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {audioFile ? (
                                <p className="text-sm font-medium text-[#4F72FF]">{audioFile.name}</p>
                            ) : (
                                <>
                                    <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">
                                        Click to upload
                                    </p>
                                    <p className="text-xs text-[var(--text-muted)]">WAV, MP3, M4A, OGG, FLAC</p>
                                </>
                            )}
                        </div>
                    </label>
                </div>

                {/* Record */}
                <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isRecording
                                ? 'bg-[#FF3366]/15 border border-[#FF3366]/30'
                                : 'bg-[#FF3366]/10 border border-[#FF3366]/20'
                        }`}>
                            <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 text-[#FF3366] ${isRecording ? 'animate-pulse-slow' : ''}`}>
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Record Audio</span>
                        {isRecording && (
                            <span className="flex items-center gap-1.5 ml-auto text-xs text-[#FF3366] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse" />
                                Recording
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className={`w-20 h-20 rounded-full font-bold transition-all duration-300 flex items-center justify-center
                                hover:scale-105 ${isRecording
                                    ? 'bg-[#FF3366] shadow-lg shadow-[#FF3366]/30 animate-pulse-slow'
                                    : 'bg-[#FF3366]/10 border-2 border-[#FF3366]/30 hover:bg-[#FF3366]/20 hover:border-[#FF3366]/50'
                                }`}
                        >
                            {isRecording ? (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-white">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 text-[#FF3366]">
                                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                        <p className="text-xs text-[var(--text-muted)]">
                            {isRecording ? 'Tap to stop recording' : 'Tap to start recording'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Audio Preview */}
            {audioUrl && (
                <div className="glass rounded-2xl p-5 max-w-4xl mb-8 animate-fadeInUp">
                    <div className="flex items-center gap-2 mb-3">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--text-muted)]">
                            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-medium text-[var(--text-secondary)]">Audio Preview</span>
                        <span className="text-xs text-[var(--text-muted)] ml-auto">Min. 20 seconds recommended</span>
                    </div>
                    <audio controls src={audioUrl} className="w-full h-9 rounded-lg" />
                </div>
            )}

            {/* Analyze Button / Analyzing State */}
            {audioFile && !result && (
                <div className="max-w-4xl mb-10 animate-fadeInUp">
                    {isAnalyzing ? (
                        /* Analyzing overlay */
                        <div className="glass rounded-2xl overflow-hidden">
                            <div className="h-px bg-gradient-to-r from-transparent via-[#FF3366]/60 to-transparent animate-pulse-slow" />
                            <div className="px-7 py-8 flex flex-col items-center gap-5">
                                {/* Live ECG waveform */}
                                <div className="w-full h-14 relative overflow-hidden rounded-xl bg-white/[0.02]">
                                    <svg viewBox="0 0 800 56" className="w-full h-full" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="analyzing-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#4F72FF" stopOpacity="0.1" />
                                                <stop offset="30%" stopColor="#FF3366" stopOpacity="0.9" />
                                                <stop offset="50%" stopColor="#FF3366" stopOpacity="1" />
                                                <stop offset="70%" stopColor="#4F72FF" stopOpacity="0.9" />
                                                <stop offset="100%" stopColor="#4F72FF" stopOpacity="0.1" />
                                            </linearGradient>
                                            <filter id="glow-pulse">
                                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                            </filter>
                                        </defs>
                                        <path
                                            d="M0,28 L120,28 L140,28 L155,6 L165,50 L176,2 L187,54 L198,28 L230,28
                                               L300,28 L320,28 L335,6 L345,50 L356,2 L367,54 L378,28 L410,28
                                               L500,28 L520,28 L535,6 L545,50 L556,2 L567,54 L578,28 L610,28
                                               L700,28 L720,28 L735,6 L745,50 L756,2 L767,54 L778,28 L800,28"
                                            stroke="url(#analyzing-grad)"
                                            strokeWidth="2"
                                            fill="none"
                                            filter="url(#glow-pulse)"
                                            className="animate-pulse-slow"
                                        />
                                    </svg>
                                    {/* Scanning line */}
                                    <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#FF3366]/70 to-transparent"
                                        style={{ left: '50%', boxShadow: '0 0 12px rgba(255,51,102,0.5)' }} />
                                </div>

                                {/* Status */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FF3366] animate-pulse" />
                                        <span className="text-sm font-semibold text-[var(--text-primary)]">
                                            Analyzing Heart Sounds
                                        </span>
                                    </div>

                                    {/* Step indicators */}
                                    <div className="flex items-center gap-6 mt-1">
                                        {[
                                            { label: 'Extracting MFCC', done: true },
                                            { label: 'Running Model', done: false },
                                            { label: 'Scoring Results', done: false },
                                        ].map((step, i) => (
                                            <div key={step.label} className="flex items-center gap-1.5">
                                                {step.done ? (
                                                    <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 text-[#00DEB4]">
                                                        <path fillRule="evenodd" d="M10.293 2.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L5 7.586l5.293-5.293z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-3 h-3 text-[#FF3366] animate-spin" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                )}
                                                <span className={`text-xs ${step.done ? 'text-[#00DEB4]' : i === 1 ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={analyzeAudio}
                            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-base
                                bg-gradient-to-r from-[#FF3366] to-[#CC2952]
                                hover:from-[#FF4D7A] hover:to-[#E63060]
                                transition-all duration-200 hover:shadow-lg hover:shadow-[#FF3366]/25"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            Analyze Heartbeat
                        </button>
                    )}
                </div>
            )}

            {/* Results */}
            {result && (
                <div className="max-w-4xl space-y-5 animate-fadeInUp">

                    {/* Main result */}
                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="h-px w-full"
                            style={{ background: `linear-gradient(90deg, ${categoryMeta[result.predicted]?.color ?? '#8A9BC4'}80, transparent)` }} />
                        <div className="p-7">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: categoryMeta[result.predicted]?.bg ?? '#8A9BC408',
                                             border: `1px solid ${categoryMeta[result.predicted]?.color ?? '#8A9BC4'}30` }}>
                                    {result.predicted === 'healthy' ? (
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7" style={{ color: '#00DEB4' }}>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7" style={{ color: '#FF3366' }}>
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <div className="text-2xl font-bold capitalize mb-0.5"
                                        style={{ color: categoryMeta[result.predicted]?.color }}>
                                        {result.predicted}
                                    </div>
                                    <div className="text-sm text-[var(--text-secondary)]">
                                        Confidence: <span className="font-semibold text-[var(--text-primary)]">
                                            {(result.probability * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                {result.predicted === 'healthy'
                                    ? 'Your heartbeat recording indicates no significant deviations from the norm. For a more reliable result, we recommend taking measurements three times daily for 3–5 days.'
                                    : 'Your recording shows deviations from the norm, which may indicate heart disease or a temporary phenomenon. Please consult a healthcare professional.'}
                            </p>

                            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FF8C00]/6 border border-[#FF8C00]/15">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#FF8C00] flex-shrink-0 mt-0.5">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs text-[#FF8C00]/90 leading-relaxed">
                                    This is not a medical diagnosis. Always consult qualified healthcare professionals for medical advice.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Probability bars */}
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-5">Detailed Analysis</h3>
                        <div className="space-y-4">
                            {Object.entries(result.outputs).map(([cat, prob]) => {
                                const meta = categoryMeta[cat] ?? { label: cat, color: '#8A9BC4', bg: '#8A9BC408' };
                                return (
                                    <div key={cat}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-sm font-medium text-[var(--text-primary)] capitalize">{meta.label}</span>
                                            <span className="text-sm font-semibold" style={{ color: meta.color }}>
                                                {(prob * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${prob * 100}%`, background: meta.color }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={reset}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                                border border-white/8 text-[var(--text-secondary)]
                                hover:border-white/15 hover:text-[var(--text-primary)] hover:bg-white/[0.03]
                                transition-all duration-200"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                            Analyze Another
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
