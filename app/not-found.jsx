"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          404
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
          It may have been moved or deleted.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-lime-400 px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Back to Home
          </button>

          <button
            onClick={() => router.push("/projects")}
            className="rounded-md border px-5 py-3 font-medium transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            View Projects
          </button>
        </div>
      </div>
    </main>
  );
}