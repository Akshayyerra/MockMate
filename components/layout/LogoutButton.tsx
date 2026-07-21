"use client";

import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
    return (
        <button
            onClick={() =>
                authClient.signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            window.location.href = "/";
                        },
                    },
                })
            }
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
            Logout
        </button>
    );
}