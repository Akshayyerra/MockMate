"use client";

interface ScoreCircleProps {
    score: number;
}

export default function ScoreCircle({
    score,
}: ScoreCircleProps) {
    const radius = 85;
    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference - (score / 100) * circumference;

    const getColor = () => {
        if (score >= 90) return "#22c55e";
        if (score >= 75) return "#3b82f6";
        if (score >= 60) return "#f59e0b";
        return "#ef4444";
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-900 p-8">
            <div className="relative h-52 w-52">

                <svg
                    className="-rotate-90"
                    width="210"
                    height="210"
                >
                    <circle
                        cx="105"
                        cy="105"
                        r={radius}
                        stroke="#1e293b"
                        strokeWidth="16"
                        fill="transparent"
                    />

                    <circle
                        cx="105"
                        cy="105"
                        r={radius}
                        stroke={getColor()}
                        strokeWidth="16"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{
                            transition: "stroke-dashoffset 1.5s ease",
                        }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-bold text-white">
                        {score}%
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Overall Score
                    </p>
                </div>
            </div>
        </div>
    );
}