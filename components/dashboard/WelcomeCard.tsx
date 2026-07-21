type WelcomeCardProps = {
    name: string;
};

export default function WelcomeCard({
    name,
}: WelcomeCardProps) {
    return (
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
            <h1 className="text-3xl font-bold">
                Welcome back, {name} 👋
            </h1>

            <p className="mt-2 text-blue-100">
                Ready for your next AI mock interview?
            </p>
        </div>
    );
}