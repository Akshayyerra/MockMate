import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

async function generateWithRetry(
    prompt: string,
    retries = 3
) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-3.5-flash",
                contents: prompt,
            });

            return response.text;
        } catch (error) {
            if (i === retries - 1) throw error;

            await new Promise((resolve) => setTimeout(resolve, 2000));
        }
    }

    return "";
}

export async function GET() {
    try {
        const text = await generateWithRetry("Say hello from Gemini.");

        return NextResponse.json({
            success: true,
            text,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            }
        );
    }
}