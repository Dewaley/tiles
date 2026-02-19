import Link from "next/link";
import { wordleTiles } from "@/components/home/gameData";

export default function FeaturedPanel() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border-subtle bg-surface/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.15)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              <Link
                href="/wordle"
                className="transition hover:text-text-secondary"
              >
                Wordle Rush
              </Link>
            </h2>
          </div>
          <span className="rounded-full border border-border-subtle bg-background/80 px-3 py-1 text-xs font-semibold text-text-secondary">
            Daily
          </span>
        </div>
        <div className="mt-6 grid gap-5">
          <div className="rounded-2xl border border-border-subtle bg-background/70 p-4">
            <div className="grid grid-cols-5 gap-1">
              {wordleTiles.map((tile, index) => (
                <div
                  key={`tile-${index}`}
                  className={`h-6 w-6 rounded ${tile}`}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-text-secondary">
              Find the word in 5 tries.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/dots-and-boxes"
              className="block relative overflow-hidden rounded-2xl border border-border-subtle bg-background/70 p-4 transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold">Dots & Boxes</p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className="h-2 w-2 rounded-full bg-text-secondary/60"
                  />
                ))}
              </div>
              <span className="absolute left-[18%] top-[54%] h-0.5 w-[38%] bg-text-secondary/60" />
              <span className="absolute left-[48%] top-[34%] h-0.5 w-[32%] bg-text-secondary/60" />
              <span className="absolute left-[33%] top-[28%] h-[32%] w-0.5 bg-text-secondary/60" />
            </Link>
            <Link
              href="/hangman"
              className="block rounded-2xl border border-border-subtle bg-background/70 p-4 transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold">Hangman</p>
              <svg
                viewBox="0 0 140 120"
                className="mt-3 h-20 w-full text-text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M20 100h80" />
                <path d="M40 100V20h50" />
                <path d="M90 20v18" />
                <circle cx="90" cy="50" r="12" />
                <path d="M90 62v20" />
                <path d="M90 70l-12 14" />
                <path d="M90 70l12 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 -left-6 w-48 rotate-[-4deg] rounded-2xl border border-border-subtle bg-background/90 p-4 text-sm shadow-[0_15px_35px_rgba(15,23,42,0.18)]">
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          Streak club
        </p>
        <p className="mt-2 text-2xl font-semibold">12 days</p>
        <p className="mt-1 text-xs text-text-secondary">Keep the glow alive.</p>
      </div>
    </div>
  );
}
