"use client";

import { useMemo } from "react";

interface AnswerBoxProps {
    value: string;
    onChange: (value: string) => void;
}

export default function AnswerBox({
    value,
    onChange,
}: AnswerBoxProps) {
    const wordCount = useMemo(() => {
        return value.trim()
            ? value.trim().split(/\s+/).length
            : 0;
    }, [value]);

    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Your Answer
                    </h2>

                    <p className="text-sm text-slate-400">
                        Give a detailed answer just like in a real interview.
                    </p>
                </div>

                <div className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                    {wordCount} words
                </div>
            </div>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Start typing your answer..."
                rows={10}
                className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 p-5 text-slate-200 outline-none transition focus:border-indigo-500"
            />

            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>
                    Tip: Explain your thought process before giving the final answer.
                </span>

                <span>{value.length} characters</span>
            </div>
        </div>
    );
}