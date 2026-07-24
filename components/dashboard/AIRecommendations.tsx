import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Sparkles, TrendingUp, Target, BookOpen } from "lucide-react";

export default async function AIRecommendations() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) return null;

    const interviews = await prisma.interview.findMany({
        where: {
            userId: session.user.id,
            score: {
                not: null,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 5,
    });

    const average =
        interviews.length > 0
            ? Math.round(
                interviews.reduce((sum, i) => sum + (i.score ?? 0), 0) /
                interviews.length
            )
            : 0;

    const recommendations = [];

    if (average < 60) {
        recommendations.push({
            icon: BookOpen,
            title: "Strengthen Fundamentals",
            description:
                "Focus on core programming concepts and solve beginner-level coding problems daily.",
        });
    }

    if (average >= 60 && average < 80) {
        recommendations.push({
            icon: Target,
            title: "Practice Mock Interviews",
            description:
                "You're improving. Practice more company-specific mock interviews to build confidence.",
        });
    }

    if (average >= 80) {
        recommendations.push({
            icon: TrendingUp,
            title: "Increase Difficulty",
            description:
                "Excellent performance! Try advanced interview questions and system design rounds.",
        });
    }

    recommendations.push({
        icon: Sparkles,
        title: "AI Tip",
        description:
            "Review your interview feedback after every session to identify recurring mistakes.",
    });

    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">
                AI Recommendations
            </h2>

            <div className="space-y-4">
                {recommendations.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950 p-4"
                        >
                            <div className="rounded-xl bg-indigo-600/20 p-3">
                                <Icon className="h-6 w-6 text-indigo-400" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}