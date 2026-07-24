"use client";

import { MessageSquare, User, Bot, Star } from "lucide-react";

interface QuestionReviewItem {
    question: string;
    answer: string;
    feedback: string;
    score: number;
}

interface QuestionReviewProps {
    questions: QuestionReviewItem[];
}

export default function QuestionReview({
    questions,
}: QuestionReviewProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-8 flex items-center gap-3">
                <MessageSquare className="h-7 w-7 text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">
                    Question Review
                </h2>
            </div>

            <div className="space-y-8">
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-slate-950 p-6"
                    >
                        {/* Question */}
                        <div className="mb-6">
                            <p className="mb-2 text-sm text-indigo-400">
                                Question {index + 1}
                            </p>

                            <h3 className="text-xl font-semibold text-white">
                                {item.question}
                            </h3>
                        </div>

                        {/* Answer */}
                        <div className="mb-6">
                            <div className="mb-2 flex items-center gap-2">
                                <User className="h-5 w-5 text-green-400" />
                                <span className="font-semibold text-green-400">
                                    Your Answer
                                </span>
                            </div>

                            <p className="rounded-xl bg-slate-900 p-4 leading-7 text-slate-300">
                                {item.answer}
                            </p>
                        </div>

                        {/* Feedback */}
                        <div className="mb-6">
                            <div className="mb-2 flex items-center gap-2">
                                <Bot className="h-5 w-5 text-indigo-400" />
                                <span className="font-semibold text-indigo-400">
                                    AI Feedback
                                </span>
                            </div>

                            <p className="rounded-xl bg-indigo-500/10 p-4 leading-7 text-slate-300">
                                {item.feedback}
                            </p>
                        </div>

                        {/* Score */}
                        <div className="flex items-center gap-3">
                            <Star className="h-6 w-6 text-yellow-400" />

                            <span className="text-lg font-bold text-white">
                                {item.score} / 10
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}