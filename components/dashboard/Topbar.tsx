"use client";

import { Bell, Search, Settings } from "lucide-react";

export default function Topbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-8 py-5">
                {/* Left */}
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="text-sm text-slate-400">
                        Welcome back! Ready for today's interview?
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-72 rounded-xl border border-white/10 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-indigo-500"
                        />
                    </div>

                    {/* Notification */}
                    <button className="rounded-xl border border-white/10 bg-slate-900 p-3 text-slate-400 transition hover:text-white">
                        <Bell className="h-5 w-5" />
                    </button>

                    {/* Settings */}
                    <button className="rounded-xl border border-white/10 bg-slate-900 p-3 text-slate-400 transition hover:text-white">
                        <Settings className="h-5 w-5" />
                    </button>

                    {/* Avatar */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}