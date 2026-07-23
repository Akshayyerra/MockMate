import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ArrowRight } from "lucide-react";

export default async function RecentInterviews() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) return null;

    const interviews = await prisma.interview.findMany({
        where: {
            userId: session.user.id,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 5,
    });

    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                    Recent Interviews
                </h2>

                <Link
                    href="/dashboard/interviews"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                >
                    View All
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {interviews.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                    <p className="text-slate-400">
                        No interviews yet. Create your first AI interview.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950 p-4"
                        >
                            <div>
                                <h3 className="font-semibold text-white">
                                    {interview.company}
                                </h3>

                                <p className="text-sm text-slate-400">
                                    {interview.role}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="font-bold text-indigo-400">
                                    {interview.score ?? "--"}%
                                </p>

                                <p className="text-xs text-slate-500">
                                    {new Intl.DateTimeFormat("en-GB").format(
                                        new Date(interview.createdAt)
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}