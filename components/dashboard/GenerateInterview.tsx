"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenerateInterview() {
    const router = useRouter();

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateInterview() {
        if (!company || !role) {
            alert("Please enter company and role.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/interview/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    company,
                    role,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Failed to generate interview.");
                return;
            }

            router.push(`/interview/${data.interviewId}`);
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
                Generate AI Interview
            </h2>

            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
            />

            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-lg p-3 mb-6"
            />

            <button
                onClick={generateInterview}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
                {loading ? "Generating..." : "Generate Interview"}
            </button>
        </div>
    );
}