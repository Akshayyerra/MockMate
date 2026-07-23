"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit,
    BarChart3,
    Trophy,
    CheckCircle2,
} from "lucide-react";

export default function DashboardPreview() {
    return (
        <section className="relative bg-slate-950 py-28 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />
            <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Dashboard Preview
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Your AI Interview
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Command Center
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Track your interview history, analyze performance, monitor progress,
                        and improve with AI-generated feedback.
                    </p>
                </motion.div>

                {/* Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: .95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
                >

                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                Dashboard Overview
                            </h3>

                            <p className="text-slate-400">
                                Welcome back, Akshay 👋
                            </p>
                        </div>

                        <div className="rounded-xl bg-indigo-500/20 px-4 py-2 text-indigo-300">
                            Premium
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-6 md:grid-cols-4">

                        <StatCard
                            icon={<BrainCircuit className="h-7 w-7" />}
                            title="Interviews"
                            value="32"
                        />

                        <StatCard
                            icon={<BarChart3 className="h-7 w-7" />}
                            title="Average Score"
                            value="91%"
                        />

                        <StatCard
                            icon={<Trophy className="h-7 w-7" />}
                            title="Best Score"
                            value="98%"
                        />

                        <StatCard
                            icon={<CheckCircle2 className="h-7 w-7" />}
                            title="Completed"
                            value="24"
                        />

                    </div>

                    {/* Recent Interviews */}
                    <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6">

                        <h4 className="mb-6 text-xl font-semibold text-white">
                            Recent Interviews
                        </h4>

                        <div className="space-y-4">

                            <InterviewRow
                                company="Google"
                                role="Software Engineer"
                                score="94%"
                            />

                            <InterviewRow
                                company="Amazon"
                                role="SDE Intern"
                                score="91%"
                            />

                            <InterviewRow
                                company="Microsoft"
                                role="Frontend Developer"
                                score="96%"
                            />

                            <InterviewRow
                                company="Infosys"
                                role="System Engineer"
                                score="89%"
                            />

                        </div>

                    </div>

                    {/* Progress */}
                    <div className="mt-10">

                        <div className="mb-3 flex justify-between text-sm">
                            <span className="text-slate-400">
                                Weekly Progress
                            </span>

                            <span className="text-white">
                                84%
                            </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

function StatCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-indigo-500/40">
            <div className="mb-5 text-indigo-400">
                {icon}
            </div>

            <p className="text-sm text-slate-400">
                {title}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
                {value}
            </h3>
        </div>
    );
}

function InterviewRow({
    company,
    role,
    score,
}: {
    company: string;
    role: string;
    score: string;
}) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/50 p-4 transition hover:border-indigo-500/30">
            <div>
                <h5 className="font-semibold text-white">
                    {company}
                </h5>

                <p className="text-sm text-slate-400">
                    {role}
                </p>
            </div>

            <div className="rounded-lg bg-emerald-500/20 px-3 py-2 font-semibold text-emerald-400">
                {score}
            </div>
        </div>
    );
}