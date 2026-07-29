"use client";

import { useEffect, useState } from "react";

import InterviewHeader from "./InterviewHeader";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import AnswerBox from "./AnswerBox";
import Navigation from "./Navigation";

interface Question {
    id: string;
    question: string;
    answer: string | null;
}

interface Interview {
    id: string;
    company: string;
    role: string;
    questions: Question[];
}

interface InterviewClientProps {
    interview: Interview;
}

export default function InterviewClient({
    interview,
}: InterviewClientProps) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [loading, setLoading] = useState(false);

    const [questions, setQuestions] = useState(interview.questions);
    const totalQuestions = questions.length;

    const [answer, setAnswer] = useState(
        questions[0]?.answer ?? ""
    );

    useEffect(() => {
        setAnswer(questions[currentQuestion - 1]?.answer ?? "");
    }, [currentQuestion, questions]);

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleNext = async () => {
        setLoading(true);

        try {
            const current = questions[currentQuestion - 1];

            const response = await fetch("/api/interview/answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questionId: current.id,
                    answer,
                }),
            });

            const data = await response.json();

            if (data.success && data.nextQuestion) {
                setQuestions((prev) => [...prev, data.nextQuestion]);

                setCurrentQuestion((prev) => prev + 1);
                setAnswer("");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <InterviewHeader
                company={interview.company}
                role={interview.role}
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
            />

            <ProgressBar
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
            />

            <QuestionCard
                question={questions[currentQuestion - 1]?.question ?? ""}
            />

            <AnswerBox
                value={answer}
                onChange={setAnswer}
            />

            <Navigation
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
                loading={loading}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </div>
    );
}