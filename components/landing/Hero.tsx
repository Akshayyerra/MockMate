"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    PlayCircle,
    Sparkles,
    BrainCircuit,
    TrendingUp,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 pt-40 pb-24">
            {/* Background Blur */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        <Sparkles className="h-4 w-4" />
                        AI Powered Interview Preparation
                    </div>

                    <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
                        Master Every
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Interview
                        </span>
                        <br />
                        with AI
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                        Practice realistic technical interviews, receive instant AI
                        feedback, improve your communication, and land your dream job with
                        confidence.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                        >
                            Start Practicing
                            <ArrowRight className="h-5 w-5" />
                        </Link>

                        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/10">
                            <PlayCircle className="h-5 w-5" />
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="h-10 w-10 rounded-full bg-indigo-500 ring-2 ring-slate-950" />
                            <div className="h-10 w-10 rounded-full bg-violet-500 ring-2 ring-slate-950" />
                            <div className="h-10 w-10 rounded-full bg-cyan-500 ring-2 ring-slate-950" />
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                10,000+ Students
                            </p>

                            <p className="text-sm text-slate-400">
                                already improving their interviews
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Floating Badge */}
                    <div className="absolute -left-8 top-12 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                        <BrainCircuit className="h-8 w-8 text-indigo-400" />
                    </div>

                    <div className="absolute -right-6 bottom-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                        <TrendingUp className="h-8 w-8 text-emerald-400" />
                    </div>

                    {/* Dashboard Card */}
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">
                                Interview Dashboard
                            </h3>

                            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                                Live
                            </span>
                        </div>

                        <div className="space-y-5">
                            <div className="rounded-2xl bg-slate-800 p-5">
                                <p className="text-sm text-slate-400">
                                    Current Score
                                </p>

                                <h2 className="mt-2 text-5xl font-black text-emerald-400">
                                    92%
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-slate-800 p-5">
                                    <p className="text-sm text-slate-400">
                                        Interviews
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold text-white">
                                        28
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-slate-800 p-5">
                                    <p className="text-sm text-slate-400">
                                        Accuracy
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold text-indigo-400">
                                        96%
                                    </h3>
                                </div>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}