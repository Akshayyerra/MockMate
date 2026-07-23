import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    FileText,
    Trophy,
    Target,
    Clock,
} from "lucide-react";

export default async function AnalyticsCards() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) return null;

    const interviews = await prisma.interview.findMany({
        where: {
            userId: session.user.id,
        },
        select: {
            score: true,
            createdAt: true,
        },
    });

    const totalInterviews = interviews.length;

    const scores = interviews
        .map((i) => i.score)
        .filter((score): score is number => score !== null);

    const averageScore =
        scores.length > 0
            ? Math.round(
                scores.reduce((a, b) => a + b, 0) / scores.length
            )
            : 0;

    const successRate =
        scores.length > 0
            ? Math.round(
                (scores.filter((s) => s >= 70).length /
                    scores.length) *
                100
            )
            : 0;

    const hoursPracticed = totalInterviews * 0.5;

    const stats = [
        {
            title: "Interviews",
            value: totalInterviews,
            icon: FileText,
            color: "from-indigo-500 to-violet-600",
        },
        {
            title: "Average Score",
            value: `${averageScore}%`,
            icon: Trophy,
            color: "from-emerald-500 to-green-600",
        },
        {
            title: "Success Rate",
            value: `${successRate}%`,
            icon: Target,
            color: "from-pink-500 to-rose-600",
        },
        {
            title: "Practice Hours",
            value: `${hoursPracticed}h`,
            icon: Clock,
            color: "from-orange-500 to-red-600",
        },
    ];

    return (
        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-indigo-500"
                    >
                        <div
                            className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r ${stat.color} p-3`}
                        >
                            <Icon className="h-6 w-6 text-white" />
                        </div>

                        <p className="text-slate-400">
                            {stat.title}
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-white">
                            {stat.value}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
}