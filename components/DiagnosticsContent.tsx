'use client';

import { useState, useRef } from 'react';
import { AlertTriangle, CheckCircle2, CircleStop, FileAudio2, Mic, RotateCcw, BarChart3, ListChecks } from 'lucide-react';

type PredictionResult = {
    predicted: string;
    probability: number;
    outputs: { [key: string]: number };
} | null;

export default function DiagnosticsContent() {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<PredictionResult>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

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
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                const file = new File([blob], 'recording.webm', { type: 'audio/webm' });
                setAudioFile(file);
                setAudioUrl(URL.createObjectURL(blob));
                stream.getTracks().forEach((track) => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing microphone:', error);
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
            const mockResult: PredictionResult = {
                predicted: Math.random() > 0.5 ? 'healthy' : 'abnormal',
                probability: 0.75 + Math.random() * 0.2,
                outputs: {
                    healthy: 0.75,
                    abnormal: 0.2,
                    artifact: 0.05,
                },
            };

            setResult(mockResult);
            setIsAnalyzing(false);
        }, 3000);
    };

    const getStatusColor = (predicted: string) => {
        switch (predicted) {
            case 'healthy':
                return 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800';
            case 'abnormal':
                return 'bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800';
            default:
                return 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-700';
        }
    };

    const getStatusIcon = (predicted: string) => {
        switch (predicted) {
            case 'healthy':
                return <CheckCircle2 size={48} className="text-emerald-600 dark:text-emerald-400" />;
            case 'abnormal':
                return <AlertTriangle size={48} className="text-amber-600 dark:text-amber-400" />;
            default:
                return <BarChart3 size={48} className="text-slate-500 dark:text-slate-400" />;
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-slate-50">AI Heart Diagnostics</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Upload or record your heartbeat for instant AI analysis
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 mb-12 max-w-4xl mx-auto animate-fadeIn border border-blue-100 dark:border-slate-700 shadow-sm">
                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                        <ListChecks size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Instructions</h3>
                        <ol className="space-y-2 text-slate-600 dark:text-slate-300">
                            <li>1. Record your heartbeat for at least 20 seconds</li>
                            <li>2. Or upload a pre-recorded audio file (WAV, MP3, M4A, OGG)</li>
                            <li>3. Make sure the recording is clear with minimal background noise</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 animate-fadeIn border border-blue-100 dark:border-slate-700 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-slate-50">
                        <FileAudio2 size={24} className="mr-3 text-blue-700 dark:text-blue-400" />
                        Upload Audio File
                    </h3>

                    <label className="block">
                        <div className="border-2 border-dashed border-blue-300 dark:border-slate-600 rounded-xl p-12 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300">
                            <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
                            <div className="mb-4 flex justify-center text-blue-700 dark:text-blue-400">
                                <FileAudio2 size={44} />
                            </div>
                            <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                                {audioFile ? audioFile.name : 'Click to upload or drag and drop'}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">WAV, MP3, M4A, OGG, FLAC</p>
                        </div>
                    </label>
                </div>

                <div
                    className="bg-white dark:bg-slate-900 rounded-2xl p-8 animate-fadeIn border border-blue-100 dark:border-slate-700 shadow-sm"
                    style={{ animationDelay: '0.1s' }}
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-slate-50">
                        <Mic size={24} className="mr-3 text-blue-700 dark:text-blue-400" />
                        Record Audio
                    </h3>

                    <div className="text-center">
                        <button
                            type="button"
                            onClick={isRecording ? stopRecording : startRecording}
                            className={`w-32 h-32 rounded-full font-bold text-xl mb-4 mx-auto block text-white transform transition-all duration-300 hover:scale-110 ${
                                isRecording
                                    ? 'bg-red-600 animate-pulse-slow shadow-2xl shadow-red-200'
                                    : 'bg-gradient-to-br from-blue-600 to-cyan-600 hover:shadow-2xl hover:shadow-blue-200'
                            }`}
                        >
                            {isRecording ? <CircleStop className="mx-auto" size={40} /> : <Mic className="mx-auto" size={40} />}
                        </button>

                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                            {isRecording ? 'Recording...' : 'Click to start recording'}
                        </p>

                        {isRecording && (
                            <div className="flex items-center justify-center space-x-2 text-red-600">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm">Recording in progress</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {audioUrl && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto mb-12 animate-fadeIn border border-blue-100 dark:border-slate-700 shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-slate-900 dark:text-slate-50">
                        <FileAudio2 size={24} className="mr-3 text-blue-700 dark:text-blue-400" />
                        Audio Preview
                    </h3>
                    <audio controls src={audioUrl} className="w-full" />
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Duration should be at least 20 seconds</p>
                </div>
            )}

            {audioFile && !result && (
                <div className="text-center mb-12 animate-fadeIn">
                    <button
                        type="button"
                        onClick={analyzeAudio}
                        disabled={isAnalyzing}
                        className="px-12 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl transform transition-all duration-300 hover:bg-blue-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isAnalyzing ? (
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Analyzing Heart Sounds...</span>
                            </div>
                        ) : (
                            <>Analyze Heartbeat</>
                        )}
                    </button>
                </div>
            )}

            {result && (
                <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
                    <div className={`rounded-3xl p-10 border ${getStatusColor(result.predicted)}`}>
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">{getStatusIcon(result.predicted)}</div>
                            <h2 className="text-4xl font-bold mb-4 capitalize text-slate-900 dark:text-slate-50">{result.predicted}</h2>
                            <p className="text-2xl text-slate-600 dark:text-slate-300">
                                Confidence:{' '}
                                <span className="font-bold text-slate-900 dark:text-slate-50">
                                    {(result.probability * 100).toFixed(1)}%
                                </span>
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600">
                            <p className="text-lg text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                                {result.predicted === 'healthy' ? (
                                    <>
                                        Currently, your heartbeat recording indicates <strong>absence of deviations from the norm</strong>{' '}
                                        in the cardiovascular system. In any case, for a more reliable result, you need to take
                                        measurements three times a day for at least 3-5 days.
                                    </>
                                ) : (
                                    <>
                                        Currently, your heartbeat recording shows <strong>deviations from the norm</strong>, which can be
                                        either symptoms of serious heart disease or a temporary phenomenon. Please consult with a
                                        healthcare professional for proper medical advice.
                                    </>
                                )}
                            </p>

                            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-800">
                                <p className="text-sm text-amber-800 dark:text-amber-200 text-center">
                                    <strong>Important:</strong> It is important to remember that we do not have a medical license and
                                    cannot give recommendations or make diagnoses. Always consult with qualified healthcare professionals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-blue-100 dark:border-slate-700 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-50">Detailed Analysis</h3>

                        <div className="space-y-4">
                            {Object.entries(result.outputs).map(([category, probability]) => (
                                <div key={category}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold capitalize text-slate-700 dark:text-slate-200">{category}</span>
                                        <span className="text-blue-700 dark:text-blue-400 font-semibold">
                                            {(probability * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${
                                                category === 'healthy'
                                                    ? 'from-emerald-500 to-emerald-600'
                                                    : category === 'abnormal'
                                                      ? 'from-amber-500 to-orange-500'
                                                      : 'from-blue-400 to-blue-500'
                                            } transition-all duration-1000`}
                                            style={{ width: `${probability * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={() => {
                                setAudioFile(null);
                                setAudioUrl(null);
                                setResult(null);
                            }}
                            className="px-8 py-4 bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-600 rounded-xl text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <RotateCcw size={16} />
                            Analyze Another
                        </button>

                        <button
                            type="button"
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <BarChart3 size={16} />
                            View History
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
