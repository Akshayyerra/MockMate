import {
    FileText,
    Bot,
    MessageSquare,
    BarChart3,
    Target,
    Mic,
} from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "Resume Analysis",
        description:
            "Upload your resume and receive AI-powered insights to improve your profile.",
    },
    {
        icon: Bot,
        title: "AI Mock Interviews",
        description:
            "Practice personalized technical and HR interviews generated from your resume and job description.",
    },
    {
        icon: MessageSquare,
        title: "Instant Feedback",
        description:
            "Receive detailed feedback on communication, technical accuracy, and confidence.",
    },
    {
        icon: BarChart3,
        title: "Progress Analytics",
        description:
            "Track your interview scores and monitor your improvement over time.",
    },
    {
        icon: Target,
        title: "ATS Resume Score",
        description:
            "Check how well your resume matches a job description and identify missing keywords.",
    },
    {
        icon: Mic,
        title: "Voice Interviews",
        description:
            "Practice speaking with AI and improve your confidence. (Coming Soon)",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-surface py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Features
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-heading">
                        Everything You Need to Crack Interviews
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-body">
                        MockMate combines AI, resume analysis, interview practice, and
                        analytics into one powerful platform.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                    <Icon className="h-7 w-7 text-primary" />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-heading">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 leading-7 text-body">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}