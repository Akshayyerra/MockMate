import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import PerformanceChart from "./PerformanceChart";

export default async function PerformanceChartServer() {
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
            createdAt: "asc",
        },
        select: {
            score: true,
            company: true,
        },
    });

    const data = interviews.map((item, index) => ({
        name: `${index + 1}`,
        score: item.score ?? 0,
    }));

    return <PerformanceChart data={data} />;
}