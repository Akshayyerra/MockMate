import { Bot } from "lucide-react";

interface QuestionCardProps {
    question: string;
}

export default function QuestionCard({
    question,
}: QuestionCardProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-indigo-500/20 p-3">
                    <Bot className="h-7 w-7 text-indigo-400" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        AI Interviewer
                    </h2>
                    <p className="text-sm text-slate-400">
                        Read the question carefully before answering.
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-xl leading-8 text-slate-200">
                    {question}
                </p>
            </div>
        </div>
    );
}