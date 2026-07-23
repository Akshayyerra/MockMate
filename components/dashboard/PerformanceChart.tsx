"use client";

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

interface PerformanceChartProps {
    data: {
        name: string;
        score: number;
    }[];
}

export default function PerformanceChart({
    data,
}: PerformanceChartProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">
                Performance Trend
            </h2>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

                        <XAxis
                            dataKey="name"
                            stroke="#94a3b8"
                        />

                        <YAxis
                            domain={[0, 100]}
                            stroke="#94a3b8"
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#6366f1"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}