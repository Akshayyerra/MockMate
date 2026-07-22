import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req: Request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const { questionId, answer } = await req.json();

    await prisma.question.update({
        where: {
            id: questionId,
        },
        data: {
            answer,
        },
    });

    return NextResponse.json({
        success: true,
    });
}