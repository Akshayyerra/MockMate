"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Sparkles,
    TrendingUp,
    MessageSquare,
} from "lucide-react";

type Props = {
    feedback: string | null;
};

export default function SummaryCard({ feedback }: Props) {
    const text =
        feedback || "No AI feedback available.";

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white dark:bg-slate-900 shadow-xl overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8" />

                    <div>
                        <h2 className="text-2xl font-bold">
                            AI Interview Summary
                        </h2>

                        <p className="text-violet-100">
                            Overall evaluation from MockMate AI
                        </p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-8">

                <div className="flex items-start gap-4">
                    <Sparkles className="text-yellow-500 mt-1" />

                    <div>
                        <h3 className="font-semibold text-lg">
                            Overall Feedback
                        </h3>

                        <p className="mt-2 leading-8 text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                            {text}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="rounded-2xl bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-6">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="text-green-600" />

                            <h3 className="font-bold text-green-700 dark:text-green-300">
                                Recommendation
                            </h3>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                            Continue practicing technical interviews
                            regularly. Focus on explaining your
                            reasoning clearly and support your
                            answers with practical examples.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-6">
                        <div className="flex items-center gap-3">
                            <MessageSquare className="text-blue-600" />

                            <h3 className="font-bold text-blue-700 dark:text-blue-300">
                                Interview Tip
                            </h3>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                            Structure answers using the STAR method
                            for behavioral questions and explain
                            your thought process step-by-step for
                            technical questions.
                        </p>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}