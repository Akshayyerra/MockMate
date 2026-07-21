"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, PlayCircle, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-24">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm"
                >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-body">
                        AI Powered Interview Preparation
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                    className="mt-8 text-5xl font-extrabold leading-tight text-heading md:text-7xl"
                >
                    Practice Smart.
                    <br />

                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Get Hired Faster.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-body"
                >
                    Master technical, HR, and behavioral interviews with
                    AI-generated questions, personalized feedback,
                    resume analysis, and progress tracking—all in one place.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .4 }}
                    className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-primary-hover">
                        Start Free
                        <ArrowRight className="h-5 w-5" />
                    </button>

                    <button className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-8 py-4 font-semibold hover:bg-surface">
                        <PlayCircle className="h-5 w-5" />
                        Watch Demo
                    </button>
                </motion.div>

                {/* Trust */}
                <div className="mt-12 flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                    ))}

                    <span className="ml-2 text-body">
                        Trusted by <strong>10,000+</strong> students
                    </span>
                </div>

            </div>
        </section>
    );
}