import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentInterviews from "@/components/dashboard/RecentInterviews";

import {
    FileText,
    Mic,
    Trophy,
    Clock,
} from "lucide-react";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/");
    }

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />

            <div className="flex-1">
                <Navbar
                    name={session.user.name}
                    image={session.user.image}
                />

                <main className="space-y-8 p-8">
                    <WelcomeCard
                        name={session.user.name}
                    />

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            title="Resumes"
                            value={1}
                            icon={FileText}
                        />

                        <StatCard
                            title="Interviews"
                            value={0}
                            icon={Mic}
                        />

                        <StatCard
                            title="Average Score"
                            value="0%"
                            icon={Trophy}
                        />

                        <StatCard
                            title="Hours Practiced"
                            value={0}
                            icon={Clock}
                        />
                    </div>

                    <QuickActions />
                    <RecentInterviews />
                </main>
            </div>
        </div>
    );
}