"use client";

import Link from "next/link";
import { BrainCircuit, Menu } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                        <BrainCircuit className="h-6 w-6 text-white" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-white">
                            MockMate
                        </h1>
                        <p className="-mt-1 text-xs text-slate-400">
                            AI Interview Platform
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                            {item.name}

                            <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Right Buttons */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                        className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        href="/dashboard"
                        className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="rounded-xl border border-white/10 p-2 text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:text-white md:hidden">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </motion.header>
    );
}