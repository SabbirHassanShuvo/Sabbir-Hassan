import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#080808] text-white px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa]">
          404 — Page Not Found
        </p>
        <h1 className="text-6xl md:text-7xl font-serif font-light text-white">
          Oops!
        </h1>
        <p className="text-white/60 text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(167,139,250,0.35)] bg-[rgba(167,139,250,0.1)] text-[#a78bfa] hover:bg-[rgba(167,139,250,0.2)] text-xs uppercase tracking-widest transition-all"
          >
            <ArrowLeft size={14} />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
