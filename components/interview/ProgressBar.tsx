"use client";

interface ProgressBarProps {
    currentQuestion: number;
    totalQuestions: number;
}

export default function ProgressBar({
    currentQuestion,
    totalQuestions,
}: ProgressBarProps) {
    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">
                    Interview Progress
                </span>

                <span className="text-sm font-semibold text-indigo-400">
                    {Math.round(progress)}%
                </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}