"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Software Engineer @ Google",
        image: "RS",
        review:
            "MockMate completely changed the way I prepared for interviews. The AI feedback helped me identify weak areas and improve quickly.",
    },
    {
        name: "Priya Reddy",
        role: "SDE Intern @ Amazon",
        image: "PR",
        review:
            "The resume-based interview questions felt incredibly realistic. I walked into my interview feeling much more confident.",
    },
    {
        name: "Arjun Patel",
        role: "Frontend Developer @ Microsoft",
        image: "AP",
        review:
            "The dashboard and performance reports made it easy to track my progress. Highly recommended for every student.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
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
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Loved by
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Students
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Hear what candidates have to say about preparing with MockMate.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((user, index) => (
                        <motion.div
                            key={user.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                            }}
                            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40"
                        >
                            {/* Stars */}
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="leading-8 text-slate-300">
                                "{user.review}"
                            </p>

                            {/* User */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-bold text-white">
                                    {user.image}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white">
                                        {user.name}
                                    </h4>

                                    <p className="text-sm text-slate-400">
                                        {user.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}