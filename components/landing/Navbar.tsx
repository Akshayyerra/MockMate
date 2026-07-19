"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <BrainCircuit className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold tracking-tight">
                        MockMate
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="#features" className="text-gray-600 hover:text-black">
                        Features
                    </Link>

                    <Link href="#how-it-works" className="text-gray-600 hover:text-black">
                        How It Works
                    </Link>

                    <Link href="#pricing" className="text-gray-600 hover:text-black">
                        Pricing
                    </Link>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="rounded-lg px-4 py-2 font-medium hover:bg-gray-100">
                        Login
                    </button>

                    <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}