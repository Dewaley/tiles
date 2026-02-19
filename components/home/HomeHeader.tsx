import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-between gap-6">
      <Logo />
      {/* <nav className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex">
      </nav> */}
      <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-background/80 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <span aria-hidden>🔥</span>
        <span>12-day streak</span>
      </div>
    </header>
  );
}
