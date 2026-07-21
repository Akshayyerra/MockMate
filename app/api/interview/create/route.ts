import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST() {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get the latest uploaded resume
        const resume = await prisma.resume.findFirst({
            where: {
                userId: session.user.id,
            },
            orderBy: {
                uploadedAt: "desc",
            },
        });

        if (!resume) {
            return NextResponse.json(
                { error: "Please upload a resume first." },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            resume: resume.content,
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}