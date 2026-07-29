import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { interviewAI } from "@/lib/interviewAI";

export async function POST(req: NextRequest) {
    try {
        const { questionId, answer } = await req.json();

        if (!questionId || !answer) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Question ID and answer are required.",
                },
                {
                    status: 400,
                }
            );
        }

        // Get current question with interview details
        const currentQuestion = await prisma.question.findUnique({
            where: {
                id: questionId,
            },
            include: {
                interview: true,
            },
        });

        if (!currentQuestion) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Question not found.",
                },
                {
                    status: 404,
                }
            );
        }

        // Single AI call
        const aiResult = await interviewAI(
            currentQuestion.interview.company,
            currentQuestion.interview.role,
            currentQuestion.question,
            answer
        );

        // Save user's answer and AI evaluation
        await prisma.question.update({
            where: {
                id: questionId,
            },
            data: {
                answer,
                score: aiResult.score,
                feedback: aiResult.feedback,
            },
        });

        // Save next generated question
        const createdQuestion = await prisma.question.create({
            data: {
                interviewId: currentQuestion.interviewId,
                question: aiResult.nextQuestion,
                type: currentQuestion.type,
            },
        });

        return NextResponse.json({
            success: true,
            score: aiResult.score,
            feedback: aiResult.feedback,
            nextQuestion: createdQuestion,
        });
    } catch (error) {
        console.error("Interview API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}