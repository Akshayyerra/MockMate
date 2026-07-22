import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import Hero from "./components/Hero";
import ScoreCircle from "./components/ScoreCircle";
import StatsCards from "./components/StatsCards";
import SummaryCard from "./components/SummaryCard";
import QuestionCard from "./components/QuestionCard";
import ActionButtons from "./components/ActionButtons";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ResultsPage({ params }: Props) {
    const { id } = await params;

    const interview = await prisma.interview.findUnique({
        where: {
            id,
        },
        include: {
            questions: true,
        },
    });

    if (!interview) {
        notFound();
    }

    const overallScore = interview.score ?? 0;

    const averageScore =
        interview.questions.length > 0
            ? Math.round(
                interview.questions.reduce(
                    (sum, q) => sum + (q.score ?? 0),
                    0
                ) / interview.questions.length
            )
            : 0;

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Hero */}
                <Hero
                    company={interview.company}
                    role={interview.role}
                    createdAt={interview.createdAt}
                />

                {/* Score Circle */}
                <div className="mt-10">
                    <ScoreCircle score={overallScore} />
                </div>

                {/* Stats */}
                <div className="mt-8">
                    <StatsCards
                        score={overallScore}
                        totalQuestions={interview.questions.length}
                        averageScore={averageScore}
                    />
                </div>

                {/* AI Summary */}
                <div className="mt-8">
                    <SummaryCard
                        feedback={interview.feedback}
                    />
                </div>

                {/* Questions */}
                <section className="mt-10">

                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                            Question Analysis
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                            Review your answers and AI feedback for each interview question.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {interview.questions.map((question, index) => (
                            <QuestionCard
                                key={question.id}
                                index={index}
                                question={question}
                            />
                        ))}
                    </div>

                </section>

                {/* Bottom Buttons */}
                <div className="mt-14">
                    <ActionButtons
                        interviewId={interview.id}
                    />
                </div>

            </div>

        </main>
    );
}