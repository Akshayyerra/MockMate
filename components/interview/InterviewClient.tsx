"use client";

import { useEffect, useState } from "react";

type Question = {
    id: string;
    question: string;
    type: string;
    answer?: string | null;
};

type Interview = {
    id: string;
    company: string;
    role: string;
    questions: Question[];
};

export default function InterviewClient({
    interview,
}: {
    interview: Interview;
}) {
    const [current, setCurrent] = useState(0);
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const question = interview.questions[current];

    const progress =
        ((current + 1) / interview.questions.length) * 100;

    // Load saved answer whenever the question changes
    useEffect(() => {
        setAnswer(question.answer ?? "");
    }, [question]);

    // Save answer to database
    async function saveAnswer(value: string) {
        try {
            await fetch("/api/interview/answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questionId: question.id,
                    answer: value,
                }),
            });

            interview.questions[current].answer = value;
        } catch (error) {
            console.error("Failed to save answer:", error);
        }
    }

    // Auto-save after 1 second of inactivity
    useEffect(() => {
        const timer = setTimeout(() => {
            saveAnswer(answer);
        }, 1000);

        return () => clearTimeout(timer);
    }, [answer]);

    async function goNext() {
        await saveAnswer(answer);

        if (current < interview.questions.length - 1) {
            setCurrent(current + 1);
        }
    }

    async function goPrevious() {
        await saveAnswer(answer);

        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    async function submitInterview() {
        setLoading(true);

        try {
            await saveAnswer(answer);

            const res = await fetch("/api/interview/evaluate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    interviewId: interview.id,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Evaluation failed");
                return;
            }

            window.location.href = `/interview/${interview.id}/results`;
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold">{interview.company}</h1>

            <p className="text-gray-600 mb-8">{interview.role}</p>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full mb-8">
                <div
                    className="h-3 bg-blue-600 rounded-full transition-all duration-300"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>

            <p className="text-gray-500 mb-2">
                Question {current + 1} / {interview.questions.length}
            </p>

            <div className="border rounded-xl p-6 shadow bg-white">
                <span className="text-sm text-blue-600 font-semibold">
                    {question.type}
                </span>

                <h2 className="text-2xl font-semibold mt-3">
                    {question.question}
                </h2>

                <textarea
                    rows={8}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer..."
                    className="w-full border rounded-lg mt-6 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-between mt-8">
                <button
                    disabled={current === 0 || loading}
                    onClick={goPrevious}
                    className="px-6 py-3 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {current === interview.questions.length - 1 ? (
                    <button
                        onClick={submitInterview}
                        disabled={loading}
                        className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                    >
                        {loading ? "Evaluating..." : "Submit Interview"}
                    </button>
                ) : (
                    <button
                        onClick={goNext}
                        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Next
                    </button>
                )}
            </div>
        </main>
    );
}