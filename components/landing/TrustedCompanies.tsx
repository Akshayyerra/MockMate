"use client";

import { motion } from "framer-motion";

const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Infosys",
    "TCS",
    "Accenture",
    "Deloitte",
];

export default function TrustedCompanies() {
    return (
        <section className="border-y border-white/5 bg-slate-950 py-14">
            <div className="mx-auto max-w-7xl px-6">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-500"
                >
                    Trusted by candidates preparing for
                </motion.p>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                            }}
                            className="flex h-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] text-lg font-bold text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:text-white"
                        >
                            {company}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}