import Hero from "@/components/report/Hero";
import ScoreCircle from "@/components/report/ScoreCircle";
import SummaryCard from "@/components/report/SummaryCard";
import SkillBreakdown from "@/components/report/SkillBreakdown";
import QuestionReview from "@/components/report/QuestionReview";

export default function ReportPage() {
    return (
        <main className="min-h-screen bg-slate-950 p-8">
            <div className="mx-auto max-w-7xl space-y-8">

                {/* Hero */}
                <Hero score={91} />

                {/* Score + Summary */}
                <div className="grid gap-8 lg:grid-cols-3">
                    <ScoreCircle score={91} />

                    <div className="lg:col-span-2">
                        <SummaryCard
                            summary="Excellent interview performance. Your communication was clear and your technical explanations were well structured. Continue improving advanced problem-solving and SQL optimization to reach an expert level."
                        />
                    </div>
                </div>

                {/* Skill Breakdown */}
                <SkillBreakdown
                    skills={[
                        {
                            name: "Technical Skills",
                            score: 92,
                        },
                        {
                            name: "Communication",
                            score: 88,
                        },
                        {
                            name: "Problem Solving",
                            score: 81,
                        },
                        {
                            name: "Confidence",
                            score: 94,
                        },
                        {
                            name: "Coding Quality",
                            score: 73,
                        },
                    ]}
                />

                {/* Question Review */}
                <QuestionReview
                    questions={[
                        {
                            question:
                                "Explain the difference between ArrayList and LinkedList.",

                            answer:
                                "ArrayList uses a dynamic array whereas LinkedList stores elements in nodes connected by pointers.",

                            feedback:
                                "Excellent explanation. You should also mention insertion/deletion complexity and memory usage differences.",

                            score: 9,
                        },
                        {
                            question:
                                "What is the time complexity of Binary Search?",

                            answer:
                                "Binary Search runs in O(log n) because it halves the search space on every iteration.",

                            feedback:
                                "Great answer. Also mention that Binary Search requires a sorted array.",

                            score: 10,
                        },
                        {
                            question:
                                "Explain REST APIs.",

                            answer:
                                "REST APIs are web services that use HTTP methods such as GET, POST, PUT and DELETE.",

                            feedback:
                                "Good answer. Improve it by mentioning statelessness, resources, and HTTP status codes.",

                            score: 8,
                        },
                        {
                            question:
                                "What is the difference between SQL and NoSQL databases?",

                            answer:
                                "SQL databases are relational whereas NoSQL databases are non-relational.",

                            feedback:
                                "Correct. Mention examples like MySQL and MongoDB along with scalability differences.",

                            score: 8,
                        },
                        {
                            question:
                                "What is React Virtual DOM?",

                            answer:
                                "Virtual DOM is a lightweight copy of the real DOM that React compares before updating the UI.",

                            feedback:
                                "Excellent explanation. Mention reconciliation and efficient rendering for a complete answer.",

                            score: 9,
                        },
                    ]}
                />
            </div>
        </main>
    );
}