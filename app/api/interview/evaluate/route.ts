import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
    try {
        // Authenticate user
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get interview id
        const { interviewId } = await req.json();

        if (!interviewId) {
            return NextResponse.json(
                { error: "Interview ID is required." },
                { status: 400 }
            );
        }

        // Load interview
        const interview = await prisma.interview.findUnique({
            where: {
                id: interviewId,
            },
            include: {
                questions: {
                    orderBy: {
                        createdAt: "asc",
                    },
                },
            },
        });

        if (!interview) {
            return NextResponse.json(
                { error: "Interview not found." },
                { status: 404 }
            );
        }

        // Gemini prompt
        const prompt = `
You are a Senior Software Engineering Interviewer.

Evaluate the candidate's answers.

Instructions:

- Score every answer from 0 to 100.
- Give 2-3 sentences of constructive feedback for every answer.
- Give an overall interview score.
- Give an overall interview summary.

Return ONLY valid JSON.

Example:

{
  "overallScore": 86,
  "overallFeedback": "Excellent technical skills. Improve behavioral responses.",
  "questions": [
    {
      "score": 90,
      "feedback": "Very strong technical explanation."
    }
  ]
}

Questions and Answers:

${JSON.stringify(interview.questions, null, 2)}
`;

        // Gemini call
        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: prompt,
        });

        const rawText = response.text ?? "";

        const cleaned = rawText
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        let result;

        try {
            result = JSON.parse(cleaned);
        } catch (err) {
            console.error("Gemini returned invalid JSON:");
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

        // Validate response
        if (
            !result.questions ||
            result.questions.length !== interview.questions.length
        ) {
            return NextResponse.json(
                {
                    error: "Gemini response is incomplete.",
                },
                {
                    status: 500,
                }
            );
        }

        // Save interview result
        await prisma.interview.update({
            where: {
                id: interviewId,
            },
            data: {
                score: result.overallScore,
                feedback: result.overallFeedback,
            },
        });

        // Save every question
        for (let i = 0; i < interview.questions.length; i++) {
            await prisma.question.update({
                where: {
                    id: interview.questions[i].id,
                },
                data: {
                    score: result.questions[i].score,
                    feedback: result.questions[i].feedback,
                },
            });
        }

        return NextResponse.json({
            success: true,
            overallScore: result.overallScore,
        });
    } catch (error) {
        console.error("Evaluation Error:", error);

        return NextResponse.json(
            {
                error: "Evaluation failed.",
            },
            {
                status: 500,
            }
        );
    }
}