"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
          })
        }
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </main>
  );
}