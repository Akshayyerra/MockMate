"use client";

import { motion } from "framer-motion";
import {
    HelpCircle,
    MessageSquare,
    Brain,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

type Props = {
    index: number;
    question: {
        id: string;
        question: string;
        answer: string | null;
        feedback: string | null;
        score: number | null;
    };
};

export default function QuestionCard({
    index,
    question,
}: Props) {
    const score = question.score ?? 0;

    const getColor = () => {
        if (score >= 80) return "bg-green-500";
        if (score >= 60) return "bg-yellow-500";
        return "bg-red-500";
    };

    const getBadge = () => {
        if (score >= 80)
            return {
                text: "Excellent",
                icon: CheckCircle2,
                color: "text-green-600",
            };

        if (score >= 60)
            return {
                text: "Average",
                icon: AlertTriangle,
                color: "text-yellow-600",
            };

        return {
            text: "Needs Improvement",
            icon: AlertTriangle,
            color: "text-red-600",
        };
    };

    const badge = getBadge();
    const BadgeIcon = badge.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-700 p-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Question {index + 1}
                        </h2>

                        <div
                            className={`flex items-center gap-2 mt-2 ${badge.color}`}
                        >
                            <BadgeIcon size={18} />

                            <span className="font-medium">
                                {badge.text}
                            </span>
                        </div>
                    </div>

                    <div className="text-center">
                        <div
                            className={`text-white px-5 py-3 rounded-full font-bold text-lg ${getColor()}`}
                        >
                            {score}/100
                        </div>
                    </div>

                </div>

                {/* Progress */}
                <div className="mt-6 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1 }}
                        className={`h-full ${getColor()}`}
                    />

                </div>

            </div>

            {/* Body */}
            <div className="p-8 space-y-8">

                {/* Question */}
                <div>
                    <div className="flex items-center gap-3">
                        <HelpCircle className="text-indigo-600" />

                        <h3 className="font-bold text-lg">
                            Interview Question
                        </h3>
                    </div>

                    <p className="mt-3 leading-8 text-slate-700 dark:text-slate-300">
                        {question.question}
                    </p>
                </div>

                {/* Answer */}
                <div>
                    <div className="flex items-center gap-3">
                        <MessageSquare className="text-blue-600" />

                        <h3 className="font-bold text-lg">
                            Your Answer
                        </h3>
                    </div>

                    <div className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
                        <p className="leading-7 whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                            {question.answer || "No answer submitted."}
                        </p>
                    </div>
                </div>

                {/* AI Feedback */}
                <div>
                    <div className="flex items-center gap-3">
                        <Brain className="text-violet-600" />

                        <h3 className="font-bold text-lg">
                            AI Feedback
                        </h3>
                    </div>

                    <div className="mt-3 rounded-2xl border border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-slate-800 p-5">
                        <p className="leading-7 whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                            {question.feedback || "No AI feedback available."}
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}