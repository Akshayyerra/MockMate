import Image from "next/image";

type NavbarProps = {
    name: string;
    image?: string | null;
};

export default function Navbar({
    name,
    image,
}: NavbarProps) {
    return (
        <header className="flex items-center justify-between border-b bg-white px-8 py-4">
            <h2 className="text-2xl font-bold">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">
                <span className="font-medium">
                    {name}
                </span>

                {image && (
                    <Image
                        src={image}
                        alt={name}
                        width={42}
                        height={42}
                        className="rounded-full"
                    />
                )}
            </div>
        </header>
    );
}