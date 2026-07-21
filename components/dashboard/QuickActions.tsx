import Link from "next/link";

export default function QuickActions() {
    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-bold">
                Quick Actions
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                <Link
                    href="/resume"
                    className="rounded-lg bg-green-600 p-4 text-center text-white hover:bg-green-700"
                >
                    📄 Upload Resume
                </Link>

                <Link
                    href="/interview"
                    className="rounded-lg bg-blue-600 p-4 text-center text-white hover:bg-blue-700"
                >
                    🎤 Start Interview
                </Link>
            </div>
        </div>
    );
}