"use client";

import {
    LineChart,
    Line,
    XAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { week: "W1", score: 55 },
    { week: "W2", score: 68 },
    { week: "W3", score: 74 },
    { week: "W4", score: 82 },
    { week: "W5", score: 91 },
];

const interviews = [
    {
        company: "Google",
        role: "Software Engineer",
        score: 91,
    },
    {
        company: "Amazon",
        role: "SDE I",
        score: 87,
    },
    {
        company: "Microsoft",
        role: "Frontend Engineer",
        score: 94,
    },
];

export default function DashboardPreview() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">
                        Dashboard Preview
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-heading">
                        Track Your Interview Journey
                    </h2>

                    <p className="mt-4 text-body">
                        Monitor interviews, resume performance and AI feedback from a
                        beautiful dashboard.
                    </p>

                </div>

                <div className="rounded-3xl border border-border bg-surface p-8 shadow-xl">

                    <div className="grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="text-body">
                                Overall Score
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-primary">
                                92%
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="text-body">
                                Interviews
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-heading">
                                15
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h3 className="text-body">
                                Resume Score
                            </h3>

                            <p className="mt-3 text-5xl font-bold text-secondary">
                                88%
                            </p>
                        </div>

                    </div>

                    <div className="mt-12 h-72 rounded-2xl bg-white p-6 shadow-sm">

                        <h3 className="mb-6 text-xl font-semibold">
                            Interview Progress
                        </h3>

                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                        >
                            <LineChart data={data}>
                                <XAxis dataKey="week" />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#2563EB"
                                    strokeWidth={4}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm">

                        <h3 className="mb-6 text-xl font-semibold">
                            Recent Interviews
                        </h3>

                        {interviews.map((item) => (

                            <div
                                key={item.company}
                                className="mb-4 flex items-center justify-between rounded-xl border border-border p-4"
                            >

                                <div>

                                    <p className="font-semibold">
                                        {item.company}
                                    </p>

                                    <p className="text-sm text-body">
                                        {item.role}
                                    </p>

                                </div>

                                <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                                    {item.score}%
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}