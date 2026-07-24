interface InterviewHeaderProps {
    company: string;
    role: string;
    currentQuestion: number;
    totalQuestions: number;
}

export default function InterviewHeader({
    company,
    role,
    currentQuestion,
    totalQuestions,
}: InterviewHeaderProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        AI Mock Interview
                    </h1>

                    <p className="mt-2 text-slate-400">
                        {company} • {role}
                    </p>
                </div>

                <div className="rounded-2xl bg-slate-800 px-5 py-3 text-center">
                    <p className="text-sm text-slate-400">
                        Progress
                    </p>

                    <p className="text-lg font-semibold text-white">
                        Question {currentQuestion} of {totalQuestions}
                    </p>
                </div>
            </div>
        </div>
    );
}