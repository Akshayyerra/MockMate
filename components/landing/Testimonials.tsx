import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Software Engineer at Google",
        review:
            "MockMate helped me prepare for my interviews with realistic AI questions. The feedback was incredibly useful.",
    },
    {
        name: "Priya Reddy",
        role: "SDE at Amazon",
        review:
            "The resume analysis and ATS score helped me improve my resume before applying. Highly recommended!",
    },
    {
        name: "Arjun Patel",
        role: "Frontend Developer at Microsoft",
        review:
            "The interview dashboard made it easy to track my progress. I felt much more confident before my interviews.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-heading">
                        Trusted by Students and Professionals
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-body">
                        Thousands of learners use MockMate to improve their interview skills
                        and land their dream jobs.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-4 flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="leading-7 text-body">
                                "{item.review}"
                            </p>

                            <div className="mt-6">
                                <h3 className="font-semibold text-heading">{item.name}</h3>
                                <p className="text-sm text-body">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}