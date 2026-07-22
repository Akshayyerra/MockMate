"use client";

import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

type Props = {
    score: number;
};

export default function ScoreCircle({ score }: Props) {
    const getColor = () => {
        if (score >= 80) return "#22c55e";
        if (score >= 60) return "#f59e0b";
        return "#ef4444";
    };

    const getLabel = () => {
        if (score >= 90) return "Outstanding";
        if (score >= 80) return "Excellent";
        if (score >= 70) return "Good";
        if (score >= 60) return "Average";
        return "Needs Improvement";
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-10 flex flex-col items-center"
        >
            <div className="w-52 h-52">
                <CircularProgressbar
                    value={score}
                    strokeWidth={10}
                    styles={buildStyles({
                        pathColor: getColor(),
                        trailColor: "#e5e7eb",
                        textColor: getColor(),
                    })}
                    text=""
                />
            </div>

            <h2 className="text-6xl font-bold mt-6">
                <CountUp end={score} duration={2} />%
            </h2>

            <p
                className="text-xl font-semibold mt-2"
                style={{ color: getColor() }}
            >
                {getLabel()}
            </p>
        </motion.div>
    );
}