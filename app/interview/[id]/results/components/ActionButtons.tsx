"use client";

import { useRouter } from "next/navigation";
import { Home, RotateCcw, Download, Share2 } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    interviewId: string;
};

export default function ActionButtons({
    interviewId,
}: Props) {
    const router = useRouter();

    const handleDownload = () => {
        window.print();
    };

    const handleShare = async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "My MockMate Interview Result",
                    text: "Check out my AI interview result!",
                    url,
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            await navigator.clipboard.writeText(url);
            alert("Result link copied to clipboard!");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
            {/* Dashboard */}
            <button
                onClick={() => router.push("/dashboard")}
                className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 font-semibold shadow-lg transition"
            >
                <Home size={20} />
                Dashboard
            </button>

            {/* Retake */}
            <button
                onClick={() => router.push(`/interview/${interviewId}`)}
                className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white py-4 font-semibold shadow-lg transition"
            >
                <RotateCcw size={20} />
                Retake
            </button>

            {/* Download */}
            <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white py-4 font-semibold shadow-lg transition"
            >
                <Download size={20} />
                Download PDF
            </button>

            {/* Share */}
            <button
                onClick={handleShare}
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white py-4 font-semibold shadow-lg transition"
            >
                <Share2 size={20} />
                Share
            </button>
        </motion.div>
    );
}