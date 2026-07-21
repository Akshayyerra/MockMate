import { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: string | number;
    icon: LucideIcon;
};

export default function StatCard({
    title,
    value,
    icon: Icon,
}: StatCardProps) {
    return (
        <div className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>
                </div>

                <Icon
                    size={38}
                    className="text-blue-600"
                />
            </div>
        </div>
    );
}