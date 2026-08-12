"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050a14] text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-3xl font-light text-[#00d4ff]">Something went wrong</h2>
          <p className="text-sm text-white/60">{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 rounded-lg bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.4)] text-[#00d4ff] text-xs uppercase tracking-widest hover:bg-[rgba(0,212,255,0.25)] transition-all"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
