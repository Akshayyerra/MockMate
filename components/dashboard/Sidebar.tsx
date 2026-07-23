"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BrainCircuit,
    LayoutDashboard,
    FileText,
    BarChart3,
    User,
    Settings,
    LogOut,
} from "lucide-react";

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Interviews",
        href: "/dashboard/interviews",
        icon: FileText,
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
    },
    {
        name: "Profile",
        href: "/dashboard/profile",
        icon: User,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden w-72 border-r border-white/10 bg-slate-950 lg:flex lg:flex-col">
            <div className="border-b border-white/10 p-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-3">
                        <BrainCircuit className="h-7 w-7 text-white" />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-white">
                            MockMate
                        </h1>

                        <p className="text-xs text-slate-400">
                            AI Interview Platform
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-2 p-5">
                {links.map((link) => {
                    const Icon = link.icon;
                    const active = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${active
                                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg"
                                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-white/10 p-5">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}