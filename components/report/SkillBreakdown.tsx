"use client";

interface Skill {
    name: string;
    score: number;
}

interface SkillBreakdownProps {
    skills: Skill[];
}

export default function SkillBreakdown({
    skills,
}: SkillBreakdownProps) {
    const getColor = (score: number) => {
        if (score >= 90)
            return "from-green-500 to-emerald-500";

        if (score >= 75)
            return "from-blue-500 to-indigo-500";

        if (score >= 60)
            return "from-yellow-500 to-orange-500";

        return "from-red-500 to-rose-500";
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="mb-8 text-2xl font-bold text-white">
                Skill Breakdown
            </h2>

            <div className="space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-slate-300">
                                {skill.name}
                            </span>

                            <span className="font-bold text-white">
                                {skill.score}%
                            </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                            <div
                                className={`h-full rounded-full bg-gradient-to-r ${getColor(
                                    skill.score
                                )} transition-all duration-1000`}
                                style={{
                                    width: `${skill.score}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}