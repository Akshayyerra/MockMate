import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { extractPdfText } from "@/lib/pdf";

export async function POST(request: Request) {
    try {
        console.log("1. Resume upload started");

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        console.log("2. Session:", session);

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const formData = await request.formData();

        const file = formData.get("file") as File;

        console.log("3. File:", file?.name);

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 }
            );
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        console.log("4. Parsing PDF...");

        const text = await extractPdfText(buffer);

        console.log("5. PDF parsed");
        console.log("Text length:", text.length);

        console.log("6. Saving to database...");

        const resume = await prisma.resume.create({
            data: {
                fileName: file.name,
                content: text,
                userId: session.user.id,
            },
        });

        console.log("7. Saved!");

        return NextResponse.json({
            success: true,
            resume,
        });
    } catch (error) {
        console.error("ERROR:", error);

        return NextResponse.json(
            {
                error: "Failed to upload resume",
            },
            {
                status: 500,
            }
        );
    }
}