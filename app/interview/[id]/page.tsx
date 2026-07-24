import InterviewHeader from "@/components/interview/InterviewHeader";
import ProgressBar from "@/components/interview/ProgressBar";
import QuestionCard from "@/components/interview/QuestionCard";

export default function InterviewPage() {
    return (
        <main className="min-h-screen bg-slate-950 p-8">
            <div className="mx-auto max-w-5xl space-y-6">
                <InterviewHeader
                    company="Google"
                    role="Software Engineer"
                    currentQuestion={1}
                    totalQuestions={10}
                />

                <ProgressBar
                    currentQuestion={1}
                    totalQuestions={10}
                />

                <QuestionCard
                    question="Tell me about yourself and explain why you're interested in this Software Engineer position at Google."
                />
            </div>
        </main>
    );
}