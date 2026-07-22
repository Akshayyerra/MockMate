import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ai } from "@/lib/gemini";
import { QuestionType } from "@prisma/client";

async function generateWithRetry(prompt: string, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-flash-latest",
                contents: prompt,
            });

            return response;
        } catch (error: any) {
            const status =
                error?.status ??
                error?.code ??
                error?.response?.status;

            console.error(`Gemini Attempt ${i + 1} Failed`);
            console.error(error);

            if (status === 503 && i < retries - 1) {
                console.log(`Retrying Gemini (${i + 1}/${retries})...`);

                await new Promise((resolve) =>
                    setTimeout(resolve, 2000 * (i + 1))
                );

                continue;
            }

            throw error;
        }
    }

    throw new Error("Gemini failed after multiple retries.");
}

export async function POST(req: Request) {
    try {
        // Authenticate User
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Request Body
        const { company, role } = await req.json();

        if (!company || !role) {
            return NextResponse.json(
                {
                    error: "Company and Role are required.",
                },
                {
                    status: 400,
                }
            );
        }

        // Gemini Prompt
        const prompt = `
You are an expert software engineering interviewer.

Generate exactly 10 interview questions.

Company:
${company}

Role:
${role}

Rules:

- Return ONLY valid JSON.
- Do NOT wrap in markdown.
- Do NOT add explanations.
- Use ONLY these enum values:

TECHNICAL
BEHAVIORAL
CODING
PROBLEM_SOLVING
SYSTEM_DESIGN
HR

Example:

[
  {
    "question": "Tell me about yourself.",
    "type": "BEHAVIORAL"
  },
  {
    "question": "Explain REST APIs.",
    "type": "TECHNICAL"
  }
]
`;

        // Generate Questions
        const response = await generateWithRetry(prompt);

        const text = response.text;

        if (!text || text.trim().length === 0) {
            return NextResponse.json(
                {
                    error: "Gemini returned an empty response.",
                },
                {
                    status: 500,
                }
            );
        }

        // Clean Markdown
        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        let questions: {
            question: string;
            type: string;
        }[];

        try {
            questions = JSON.parse(cleaned);

            if (!Array.isArray(questions)) {
                throw new Error("Gemini did not return an array.");
            }
        } catch (err) {
            console.error("Invalid JSON from Gemini:");
            console.error(cleaned);

            return NextResponse.json(
                {
                    error: "Gemini returned invalid JSON.",
                },
                {
                    status: 500,
                }
            );
        }

        if (questions.length === 0) {
            return NextResponse.json(
                {
                    error: "Gemini returned no questions.",
                },
                {
                    status: 500,
                }
            );
        }

        const validTypes: Record<string, QuestionType> = {
            TECHNICAL: QuestionType.TECHNICAL,
            BEHAVIORAL: QuestionType.BEHAVIORAL,
            CODING: QuestionType.CODING,
            PROBLEM_SOLVING: QuestionType.PROBLEM_SOLVING,
            SYSTEM_DESIGN: QuestionType.SYSTEM_DESIGN,
            HR: QuestionType.HR,
        };

        // Validate Each Question
        const formattedQuestions = questions.map((q) => ({
            question: q.question?.trim() || "Untitled Question",
            type: validTypes[q.type] ?? QuestionType.TECHNICAL,
        }));

        // Create Interview
        const interview = await prisma.interview.create({
            data: {
                company,
                role,
                userId: session.user.id,
            },
        });

        // Save Questions
        await prisma.question.createMany({
            data: formattedQuestions.map((q) => ({
                interviewId: interview.id,
                question: q.question,
                type: q.type,
            })),
        });

        return NextResponse.json({
            success: true,
            interviewId: interview.id,
        });
    } catch (error: any) {
        console.error("Create Interview Error:");
        console.error(error);

        return NextResponse.json(
            {
                error:
                    error?.message ||
                    "Failed to create interview.",
            },
            {
                status: 500,
            }
        );
    }
}