import GameCard from "@/components/GameCard";
import { crosswordTiles, sudokuTiles, wordleTiles } from "./gameData";
import Image from "next/image";

export default function GameShelf() {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Game shelf
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Pick a classic</h2>
        </div>
        <p className="max-w-md text-sm text-text-secondary">
          Fast rounds, beautiful boards, and familiar rules. Every game is
          tuned for quick focus and joyful competition.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <GameCard
          title="Wordle"
          description="Guess the five-letter word and chase the perfect streak."
          href="/wordle"
          badge="Daily"
        >
          <Image src="/images/wordle.png" width={100} height={100} alt="Wordle" className="w-full" />
        </GameCard>

        <GameCard
          title="Dots & Boxes"
          description="Draw the lines, claim the squares, and outsmart your rival."
          href="/dots-and-boxes"
          badge="Strategy"
          comingSoon
        >
          <div className="relative mt-4 grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={`dots-${index}`}
                className="h-2 w-2 rounded-full bg-text-secondary/60"
              />
            ))}
            <span className="absolute left-[12%] top-[36%] h-0.5 w-[48%] bg-text-secondary/60" />
            <span className="absolute left-[36%] top-[60%] h-0.5 w-[36%] bg-text-secondary/60" />
            <span className="absolute left-[44%] top-[28%] h-[36%] w-0.5 bg-text-secondary/60" />
          </div>
        </GameCard>

        <GameCard
          title="Hangman"
          description="Save the sketch by guessing the word before it’s complete."
          href="/hangman"
          badge="Classic"
          comingSoon
        >
          <svg
            viewBox="0 0 140 120"
            className="mt-4 h-20 w-full text-text-secondary"
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
        </GameCard>

        <GameCard
          title="Mini Crossword"
          description="A compact grid to kickstart your morning vocabulary."
          href="/mini-crossword"
          badge="5 min"
          comingSoon
        >
          <div className="mt-4 grid grid-cols-4 gap-1">
            {crosswordTiles.map((value, index) => (
              <div
                key={`cross-${index}`}
                className="flex h-7 w-7 items-center justify-center rounded bg-background/70 text-xs font-semibold"
              >
                {value}
              </div>
            ))}
          </div>
        </GameCard>

        <GameCard
          title="Sudoku"
          description="Balance the grid and keep every row perfectly clean."
          href="/sudoku"
          badge="Logic"
          comingSoon
        >
          <div className="mt-4 grid grid-cols-3 gap-2">
            {sudokuTiles.map((value, index) => (
              <div
                key={`sudoku-${index}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-background/70 text-sm font-semibold"
              >
                {value || ""}
              </div>
            ))}
          </div>
        </GameCard>

        <GameCard
          title="Word Search"
          description="Find the hidden words and clear the board at your pace."
          href="/word-search"
          badge="Chill"
          comingSoon
        >
          <div className="mt-4 grid grid-cols-5 gap-1 text-xs font-semibold">
            {"GAMEL".split("").map((letter, index) => (
              <div
                key={`word-${index}`}
                className="flex h-7 w-7 items-center justify-center rounded bg-background/70"
              >
                {letter}
              </div>
            ))}
            {"PUZZL".split("").map((letter, index) => (
              <div
                key={`word-two-${index}`}
                className="flex h-7 w-7 items-center justify-center rounded bg-background/70"
              >
                {letter}
              </div>
            ))}
          </div>
        </GameCard>
      </div>
    </section>
  );
}
