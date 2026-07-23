"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-32">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 blur-[140px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: .95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-xl shadow-2xl"
                >
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Ready to Get Started?
                    </span>

                    <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight text-white md:text-6xl">
                        Ace Your Next
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Technical Interview
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                        Upload your resume, generate personalized AI interviews, receive
                        instant feedback, and improve your confidence before your dream job
                        interview.
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-wrap justify-center gap-5">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                        >
                            Start Free
                            <ArrowRight className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#features"
                            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-indigo-500/40 hover:bg-white/10"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-400" />
                            No Credit Card
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-400" />
                            Free to Start
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-400" />
                            AI Powered
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-400" />
                            Instant Feedback
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}