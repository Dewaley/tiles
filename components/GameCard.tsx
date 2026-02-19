import Link from "next/link";
import React from "react";

type GameCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  comingSoon?: boolean;
  children?: React.ReactNode;
};

export default function GameCard({
  title,
  description,
  href,
  badge,
  comingSoon = false,
  children,
}: GameCardProps) {
  const cardClassName = [
    "flex h-full flex-col rounded-3xl border border-border-subtle bg-surface/80 p-6 transition group-hover:-translate-y-1",
    comingSoon ? "blur-sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <article className={cardClassName}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-text-secondary">
              {badge}
            </span>
          ) : null}
          {comingSoon ? (
            <span className="rounded-full border border-border-subtle bg-background/80 px-3 py-1 text-xs font-semibold text-text-secondary">
              Coming soon
            </span>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-sm text-text-secondary">{description}</p>
      {children}
    </article>
  );

  if (comingSoon) {
    return (
      <div
        className="group relative block h-full cursor-not-allowed"
        aria-disabled
      >
        {content}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-3xl border border-border-subtle bg-background/70 text-sm font-semibold text-text-primary shadow-[0_15px_40px_rgba(15,23,42,0.12)]">
          Coming soon
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className="group block h-full">
      {content}
    </Link>
  );
}
