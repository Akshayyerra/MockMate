"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How does MockMate generate interview questions?",
        answer:
            "MockMate uses Google's Gemini AI to analyze your resume, target role, and company to generate personalized interview questions.",
    },
    {
        question: "Can I practice company-specific interviews?",
        answer:
            "Yes. You can prepare for interviews from Google, Amazon, Microsoft, Infosys, TCS, Deloitte, Accenture, and many more.",
    },
    {
        question: "Do I receive feedback after every interview?",
        answer:
            "Absolutely. MockMate evaluates your answers and provides detailed scores, strengths, weaknesses, and improvement suggestions.",
    },
    {
        question: "Is my resume stored securely?",
        answer:
            "Yes. Your resume is securely stored and only used to personalize your interview experience.",
    },
    {
        question: "Can I retake interviews?",
        answer:
            "Yes. You can create unlimited interview sessions and track your progress over time.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-4xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Got
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Questions?
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Everything you need to know before starting your AI interview journey.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                        >
                            <button
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-white">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="border-t border-white/10 px-6 py-5 text-slate-400 leading-7">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}