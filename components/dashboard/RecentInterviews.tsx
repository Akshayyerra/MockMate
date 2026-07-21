const interviews = [
    {
        company: "Google",
        role: "Frontend Developer",
        score: 91,
        date: "20 Jul 2026",
    },
    {
        company: "Amazon",
        role: "SDE Intern",
        score: 85,
        date: "18 Jul 2026",
    },
    {
        company: "Microsoft",
        role: "Full Stack Developer",
        score: 88,
        date: "15 Jul 2026",
    },
];

export default function RecentInterviews() {
    return (
        <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 text-2xl font-bold">
                Recent Interviews
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="border-b">
                        <tr>
                            <th className="py-3 text-left">Company</th>
                            <th className="py-3 text-left">Role</th>
                            <th className="py-3 text-left">Score</th>
                            <th className="py-3 text-left">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {interviews.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="py-4">{item.company}</td>
                                <td>{item.role}</td>
                                <td>{item.score}%</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}