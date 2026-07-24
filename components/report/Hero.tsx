import { Trophy, Sparkles } from "lucide-react";

interface HeroProps {
    score: number;
}

export default function Hero({ score }: HeroProps) {
    const getMessage = () => {
        if (score >= 90)
            return {
                title: "Outstanding Performance",
                color: "text-green-400",
            };

        if (score >= 75)
            return {
                title: "Great Job",
                color: "text-blue-400",
            };

        if (score >= 60)
            return {
                title: "Good Progress",
                color: "text-yellow-400",
            };

        return {
            title: "Keep Practicing",
            color: "text-red-400",
        };
    };

    const status = getMessage();

    return (
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 p-8 shadow-2xl">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <Sparkles className="h-8 w-8 text-yellow-300" />

                        <span className="text-lg font-semibold text-indigo-100">
                            AI Interview Report
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold text-white">
                        {score}%
                    </h1>

                    <p className={`mt-4 text-2xl font-semibold ${status.color}`}>
                        {status.title}
                    </p>

                    <p className="mt-4 max-w-2xl text-indigo-100">
                        Here's a complete analysis of your interview performance.
                        Review your strengths, improve weak areas, and prepare for
                        your next interview.
                    </p>
                </div>

                <div className="rounded-full bg-white/10 p-8 backdrop-blur-xl">
                    <Trophy className="h-24 w-24 text-yellow-300" />
                </div>
            </div>
        </div>
    );
}