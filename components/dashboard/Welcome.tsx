"use client";

import { Sparkles } from "lucide-react";

export default function Welcome() {
    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";

    return (
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 p-8 shadow-2xl">
            <div className="flex items-center justify-between">
                <div>
                    <p className="mb-2 text-indigo-100">
                        {greeting} 👋
                    </p>

                    <h2 className="text-4xl font-bold text-white">
                        Welcome back to MockMate
                    </h2>

                    <p className="mt-3 max-w-2xl text-indigo-100">
                        Practice AI-powered mock interviews, improve your confidence,
                        and track your interview performance over time.
                    </p>
                </div>

                <div className="hidden rounded-3xl bg-white/10 p-6 backdrop-blur lg:block">
                    <Sparkles className="h-16 w-16 text-yellow-300" />
                </div>
            </div>
        </div>
    );
}