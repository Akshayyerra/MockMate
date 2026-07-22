import GenerateInterview from "@/components/dashboard/GenerateInterview";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">
                    MockMate Dashboard
                </h1>

                <p className="text-gray-600 mb-8">
                    Generate an AI interview tailored to your resume.
                </p>

                <GenerateInterview />
            </div>
        </main>
    );
}