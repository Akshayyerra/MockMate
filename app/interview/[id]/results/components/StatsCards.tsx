"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
    Trophy,
    CircleHelp,
    Target,
    CheckCircle2,
} from "lucide-react";

type Props = {
    score: number;
    totalQuestions: number;
    averageScore: number;
};

export default function StatsCards({
    score,
    totalQuestions,
    averageScore,
}: Props) {
    const cards = [
        {
            title: "Overall Score",
            value: score,
            suffix: "%",
            icon: Trophy,
            color: "from-indigo-500 to-purple-500",
        },
        {
            title: "Questions",
            value: totalQuestions,
            suffix: "",
            icon: CircleHelp,
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Average",
            value: averageScore,
            suffix: "%",
            icon: Target,
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Completion",
            value: 100,
            suffix: "%",
            icon: CheckCircle2,
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className={`rounded-3xl bg-gradient-to-br ${card.color} text-white shadow-xl p-6`}
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-white/80 text-sm">
                                    {card.title}
                                </p>

                                <h2 className="text-4xl font-bold mt-3">
                                    <CountUp end={card.value} duration={2} />
                                    {card.suffix}
                                </h2>
                            </div>

                            <div className="bg-white/20 rounded-2xl p-4">
                                <Icon size={34} />
                            </div>

                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}