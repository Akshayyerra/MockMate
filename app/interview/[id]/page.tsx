import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import InterviewClient from "@/components/interview/InterviewClient";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function InterviewPage({ params }: Props) {
    const { id } = await params;

    const interview = await prisma.interview.findUnique({
        where: { id },
        include: {
            questions: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });

    if (!interview) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950">
            <InterviewClient interview={interview} />
        </main>
    );
}