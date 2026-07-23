import Welcome from "@/components/dashboard/Welcome";
import StatsCards from "@/components/dashboard/StatsCards";
import GenerateInterview from "@/components/dashboard/GenerateInterview";
import RecentInterviews from "@/components/dashboard/RecentInterviews";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import PerformanceChartServer from "@/components/dashboard/PerformanceChartServer";

export default function DashboardPage() {
    return (
        <main className="p-8">
            <Welcome />

            <AnalyticsCards />

            <div className="mt-8">
                <PerformanceChartServer />
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
                <GenerateInterview />
                <RecentInterviews />
            </div>
        </main>
    );
}