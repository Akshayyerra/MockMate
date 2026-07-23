"use client";

import {
    FileText,
    Trophy,
    Target,
    Clock,
} from "lucide-react";

const stats = [
    {
        title: "Interviews",
        value: "18",
        icon: FileText,
        color: "from-indigo-500 to-violet-600",
    },
    {
        title: "Average Score",
        value: "87%",
        icon: Trophy,
        color: "from-emerald-500 to-green-600",
    },
    {
        title: "Success Rate",
        value: "91%",
        icon: Target,
        color: "from-pink-500 to-rose-600",
    },
    {
        title: "Practice Time",
        value: "24h",
        icon: Clock,
        color: "from-orange-500 to-red-600",
    },
];

export default function StatsCards() {
    return (
        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
                    >
                        <div
                            className={`mb-5 inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-3`}
                        >
                            <Icon className="h-6 w-6 text-white" />
                        </div>

                        <h3 className="text-slate-400">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-4xl font-bold text-white">
                            {item.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}