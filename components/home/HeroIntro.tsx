import Link from "next/link";

export default function HeroIntro() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-3 rounded-full border border-border-subtle bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary">
        <span className="h-2 w-2 rounded-full bg-tile-correct" />
        Puzzles, wordplay, strategy
      </div>
      <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
        Your daily arcade for
        <span className="block bg-[linear-gradient(90deg,#0f172a,#0ea5e9,#16a34a)] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,#e2e8f0,#38bdf8,#4ade80)]">
          clever minds and quick wins
        </span>
      </h1>
      <p className="max-w-xl text-lg text-text-secondary">
        Gamely curates the best bite-sized games, from Wordle bursts to
        strategic Dots & Boxes showdowns. Pick a classic, start a streak, and
        keep your brain in play.
      </p>
      <div className="flex flex-wrap gap-3">
        {/* <Link
          href="/daily"
          className="rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-background shadow-[0_18px_40px_rgba(15,23,42,0.25)]"
        >
          Start today’s puzzle
        </Link> */}
        {/* <Link
          href="/classics"
          className="rounded-full border border-border-subtle bg-background/80 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur"
        >
          Browse classics
        </Link> */}
      </div>
      {/* <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border-subtle bg-surface/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Daily drops
          </p>
          <p className="mt-2 text-2xl font-semibold">3 fresh</p>
        </div>
        <div className="rounded-2xl border border-border-subtle bg-surface/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Average time
          </p>
          <p className="mt-2 text-2xl font-semibold">6 mins</p>
        </div>
        <div className="rounded-2xl border border-border-subtle bg-surface/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Active streaks
          </p>
          <p className="mt-2 text-2xl font-semibold">18,402</p>
        </div>
      </div> */}
    </div>
  );
}
