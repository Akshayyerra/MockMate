import { Building2, Briefcase, CalendarDays } from "lucide-react";

type HeroProps = {
    company: string;
    role: string;
    createdAt: Date;
};

export default function Hero({
    company,
    role,
    createdAt,
}: HeroProps) {
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date(createdAt));

    return (
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white p-10 shadow-xl">
            <p className="text-white/80 uppercase tracking-[0.3em] text-sm">
                AI Interview Report
            </p>

            <h1 className="text-5xl font-bold mt-3">
                Interview Results
            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                    <Building2 size={20} />
                    <span>{company}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Briefcase size={20} />
                    <span>{role}</span>
                </div>

                <div className="flex items-center gap-2">
                    <CalendarDays size={20} />
                    <span>{formattedDate}</span>
                </div>
            </div>
        </div>
    );
}