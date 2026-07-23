"use client";

import { motion } from "framer-motion";
import {
    Users,
    Trophy,
    Briefcase,
    Star,
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "10K+",
        label: "Students Practicing",
        color: "text-indigo-400",
    },
    {
        icon: Trophy,
        value: "95%",
        label: "Interview Success Rate",
        color: "text-emerald-400",
    },
    {
        icon: Briefcase,
        value: "250+",
        label: "Companies Covered",
        color: "text-cyan-400",
    },
    {
        icon: Star,
        value: "4.9/5",
        label: "Average User Rating",
        color: "text-yellow-400",
    },
];

export default function Stats() {
    return (
        <section className="relative bg-slate-950 py-28">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Trusted Worldwide
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Numbers That Speak
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            For Themselves
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Thousands of learners use MockMate to prepare for interviews and
                        improve their confidence.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="rounded-2xl bg-slate-900 p-5">
                                        <Icon className={`h-8 w-8 ${stat.color}`} />
                                    </div>
                                </div>

                                <h3 className="text-5xl font-black text-white">
                                    {stat.value}
                                </h3>

                                <p className="mt-4 text-slate-400">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}