"use client";

interface NavigationProps {
    currentQuestion: number;
    totalQuestions: number;
    loading?: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

export default function Navigation({
    currentQuestion,
    totalQuestions,
    loading = false,
    onPrevious,
    onNext,
}: NavigationProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <button
                onClick={onPrevious}
                disabled={currentQuestion === 1 || loading}
                className="rounded-lg bg-slate-700 px-5 py-2 text-white transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                ← Previous
            </button>

            <span className="text-sm text-slate-400">
                Question {currentQuestion} of {totalQuestions}
            </span>

            <button
                onClick={onNext}
                disabled={loading}
                className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {loading ? "Generating..." : "Submit & Next →"}
            </button>
        </div>
    );
}