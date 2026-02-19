import React from "react";

export default function HomeBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd89b,transparent_65%)] opacity-80 dark:bg-[radial-gradient(circle_at_30%_30%,#7c3f00,transparent_65%)]" />
        <div className="absolute top-40 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_40%_40%,#b6e3ff,transparent_65%)] opacity-70 dark:bg-[radial-gradient(circle_at_40%_40%,#0b2a3b,transparent_65%)]" />
        <div className="absolute -bottom-24 right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_40%_40%,#c7ffd6,transparent_65%)] opacity-70 dark:bg-[radial-gradient(circle_at_40%_40%,#06402e,transparent_65%)]" />
      </div>
      {children}
    </div>
  );
}
