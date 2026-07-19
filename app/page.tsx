import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-extrabold">
            Practice Smart.
            <br />
            Get Hired.
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            MockMate helps you prepare for interviews using AI-powered
            personalized questions, instant feedback, and performance
            analytics.
          </p>
        </div>
      </section>
    </main>
  );
}