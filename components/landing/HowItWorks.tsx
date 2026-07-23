"use client";

import { motion } from "framer-motion";
import {
    Upload,
    BrainCircuit,
    MessageSquareText,
    Trophy,
} from "lucide-react";

const steps = [
    {
        icon: Upload,
        title: "Upload Your Resume",
        description:
            "Upload your latest resume so MockMate understands your background, projects, and technical skills.",
    },
    {
        icon: BrainCircuit,
        title: "Generate AI Interview",
        description:
            "Our AI creates personalized interview questions based on your resume, target company, and role.",
    },
    {
        icon: MessageSquareText,
        title: "Answer Questions",
        description:
            "Practice in a realistic interview environment and answer technical, behavioral, and HR questions.",
    },
    {
        icon: Trophy,
        title: "Receive Instant Feedback",
        description:
            "Get AI-powered scores, strengths, weaknesses, and suggestions to improve your performance.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        How It Works
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Interview Preparation
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Made Simple
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Four simple steps to prepare smarter, improve faster, and
                        confidently crack your next interview.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 md:block"></div>

                    <div className="space-y-16">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    className="relative flex flex-col gap-6 md:flex-row md:items-start"
                                >
                                    {/* Circle */}
                                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-xl shadow-indigo-500/30">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>

                                    {/* Card */}
                                    <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:border-indigo-500/40">
                                        <span className="text-sm font-semibold text-indigo-400">
                                            Step {index + 1}
                                        </span>

                                        <h3 className="mt-2 text-2xl font-bold text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-4 leading-8 text-slate-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}