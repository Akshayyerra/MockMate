import { Sparkles } from "lucide-react";

interface SummaryCardProps {
    summary: string;
}

export default function SummaryCard({
    summary,
}: SummaryCardProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-indigo-400" />

                <h2 className="text-xl font-bold text-white">
                    AI Summary
                </h2>
            </div>

            <p className="leading-8 text-slate-300">
                {summary}
            </p>
        </div>
    );
}