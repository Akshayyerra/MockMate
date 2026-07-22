"use client";

import { useState } from "react";

export default function TestPage() {
    const [result, setResult] = useState("");

    async function generateInterview() {
        const res = await fetch("/api/interview/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: "Google",
                role: "Software Engineer",
            }),
        });

        const data = await res.json();
        setResult(JSON.stringify(data, null, 2));
    }

    return (
        <div className="p-10">
            <button
                onClick={generateInterview}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Generate Interview
            </button>

            <pre className="mt-5">{result}</pre>
        </div>
    );
}