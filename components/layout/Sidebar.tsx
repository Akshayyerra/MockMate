"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    Mic,
    History,
    Settings,
} from "lucide-react";

const menu = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Resume",
        href: "/resume",
        icon: FileText,
    },
    {
        name: "Interview",
        href: "/interview",
        icon: Mic,
    },
    {
        name: "History",
        href: "/history",
        icon: History,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-10">
                MockMate
            </h1>

            <nav className="space-y-4">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800"
                        >
                            <Icon size={20} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}