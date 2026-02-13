'use client';

import { useState, useRef } from 'react';

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
                stream.getTracks().forEach(track => track.stop());
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

        // Simulate AI analysis (in real implementation, this would call an API)
        setTimeout(() => {
            // Mock prediction
            const mockResult: PredictionResult = {
                predicted: Math.random() > 0.5 ? 'healthy' : 'abnormal',
                probability: 0.75 + Math.random() * 0.2,
                outputs: {
                    healthy: 0.75,
                    abnormal: 0.20,
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
                return 'from-green-600 to-emerald-600';
            case 'abnormal':
                return 'from-red-600 to-orange-600';
            default:
                return 'from-gray-600 to-gray-700';
        }
    };

    const getStatusIcon = (predicted: string) => {
        switch (predicted) {
            case 'healthy':
                return '✅';
            case 'abnormal':
                return '⚠️';
            default:
                return '❓';
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
                        AI Heart Diagnostics
                    </span>
                    <span className="ml-4">🩺</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Upload or record your heartbeat for instant AI analysis
                </p>
            </div>

            {/* Instructions */}
            <div className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto animate-fadeIn">
                <div className="flex items-start space-x-4">
                    <span className="text-3xl">📋</span>
                    <div>
                        <h3 className="text-xl font-semibold text-cardio-accent mb-3">Instructions:</h3>
                        <ol className="space-y-2 text-gray-300">
                            <li>1. Record your heartbeat for at least 20 seconds</li>
                            <li>2. Or upload a pre-recorded audio file (WAV, MP3, M4A, OGG)</li>
                            <li>3. Make sure the recording is clear with minimal background noise</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Audio Input Section */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                {/* File Upload */}
                <div className="glass rounded-2xl p-8 animate-fadeIn">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="text-3xl mr-3">📁</span>
                        Upload Audio File
                    </h3>

                    <label className="block">
                        <div className="border-2 border-dashed border-cardio-secondary/50 rounded-xl p-12 text-center cursor-pointer
                          hover:border-cardio-secondary hover:bg-cardio-secondary/5 transition-all duration-300">
                            <input
                                type="file"
                                accept="audio/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <div className="text-6xl mb-4">📤</div>
                            <p className="text-lg font-semibold text-gray-300">
                                {audioFile ? audioFile.name : 'Click to upload or drag and drop'}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">WAV, MP3, M4A, OGG, FLAC</p>
                        </div>
                    </label>
                </div>

                {/* Recording */}
                <div className="glass rounded-2xl p-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="text-3xl mr-3">🎙️</span>
                        Record Audio
                    </h3>

                    <div className="text-center">
                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className={`w-32 h-32 rounded-full font-bold text-xl mb-4 mx-auto block
                       transform transition-all duration-300 hover:scale-110 ${isRecording
                                    ? 'bg-red-600 animate-pulse-slow glow shadow-2xl shadow-red-600/50'
                                    : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-600/50'
                                }`}
                        >
                            {isRecording ? '⏹️' : '🎤'}
                        </button>

                        <p className="text-lg font-semibold text-gray-300 mb-2">
                            {isRecording ? 'Recording...' : 'Click to start recording'}
                        </p>

                        {isRecording && (
                            <div className="flex items-center justify-center space-x-2 text-red-400">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm">Recording in progress</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Audio Player */}
            {audioUrl && (
                <div className="glass rounded-2xl p-8 max-w-4xl mx-auto mb-12 animate-fadeIn">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="text-3xl mr-3">🔊</span>
                        Audio Preview
                    </h3>
                    <audio controls src={audioUrl} className="w-full" />
                    <p className="text-sm text-gray-400 mt-2">Duration should be at least 20 seconds</p>
                </div>
            )}

            {/* Analyze Button */}
            {audioFile && !result && (
                <div className="text-center mb-12 animate-fadeIn">
                    <button
                        onClick={analyzeAudio}
                        disabled={isAnalyzing}
                        className="px-12 py-6 bg-gradient-to-r from-cardio-primary to-red-600 rounded-2xl font-bold text-xl
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cardio-primary/50
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isAnalyzing ? (
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Analyzing Heart Sounds... 🫀</span>
                            </div>
                        ) : (
                            <>Analyze Heartbeat 🔍</>
                        )}
                    </button>
                </div>
            )}

            {/* Results */}
            {result && (
                <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
                    {/* Main Result */}
                    <div className={`glass rounded-3xl p-10 bg-gradient-to-br ${getStatusColor(result.predicted)} bg-opacity-20 glow`}>
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-4">{getStatusIcon(result.predicted)}</div>
                            <h2 className="text-4xl font-bold mb-4 capitalize">{result.predicted}</h2>
                            <p className="text-2xl text-gray-300">
                                Confidence: <span className="font-bold text-white">{(result.probability * 100).toFixed(1)}%</span>
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 bg-cardio-dark/50">
                            <p className="text-lg text-gray-300 text-center leading-relaxed">
                                {result.predicted === 'healthy' ? (
                                    <>
                                        Currently, your heartbeat recording indicates <strong>absence of deviations from the norm</strong> in the cardiovascular system.
                                        In any case, for a more reliable result, you need to take measurements three times a day for at least 3-5 days.
                                    </>
                                ) : (
                                    <>
                                        Currently, your heartbeat recording shows <strong>deviations from the norm</strong>, which can be either symptoms of serious heart disease or a temporary phenomenon.
                                        Please consult with a healthcare professional for proper medical advice.
                                    </>
                                )}
                            </p>

                            <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600/30">
                                <p className="text-sm text-yellow-200 text-center">
                                    ⚠️ <strong>Important:</strong> It is important to remember that we do not have a medical license and cannot give recommendations or make diagnoses.
                                    Always consult with qualified healthcare professionals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Probability Chart */}
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Detailed Analysis</h3>

                        <div className="space-y-4">
                            {Object.entries(result.outputs).map(([category, probability]) => (
                                <div key={category}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold capitalize">{category}</span>
                                        <span className="text-cardio-accent">{(probability * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${category === 'healthy' ? 'from-green-500 to-emerald-500' :
                                                category === 'abnormal' ? 'from-red-500 to-orange-500' :
                                                    'from-gray-500 to-gray-600'
                                                } transition-all duration-1000`}
                                            style={{ width: `${probability * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => {
                                setAudioFile(null);
                                setAudioUrl(null);
                                setResult(null);
                            }}
                            className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
                        >
                            🔄 Analyze Another
                        </button>

                        <button
                            className="px-8 py-4 bg-cardio-secondary rounded-xl font-semibold hover:bg-cardio-secondary/80 transition-all duration-300"
                        >
                            📊 View History
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
