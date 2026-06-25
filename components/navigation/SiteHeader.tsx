"use client";

import { useEffect, useState } from "react";
import type { TabId } from "@/lib/data";
import MobileMenu from "@/components/navigation/MobileMenu";

function formatDateTime(date: Date, compact = false) {
  if (compact) {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

type SiteHeaderProps = {
  activeTab: TabId | null;
  onTabChange: (tab: TabId) => void;
};

export default function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const [now, setNow] = useState<Date | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#2563eb] text-white shadow-md">
        <div className="section-container flex items-center justify-between gap-3 py-3 md:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl md:h-12 md:w-12 md:text-2xl"
              aria-hidden
            >
              🦋
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-bold leading-tight md:text-2xl">Welcome</h1>
              <p className="truncate text-xs text-blue-100 md:text-sm">To Yi Shyan's Fan Site</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <p className="hidden text-right text-xs text-blue-50 sm:block md:text-sm whitespace-nowrap">
              {now ? formatDateTime(now) : "—"}
            </p>
            <p className="text-right text-[10px] leading-tight text-blue-50 sm:hidden">
              {now ? formatDateTime(now, true) : "—"}
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        activeTab={activeTab}
        onClose={() => setMenuOpen(false)}
        onTabChange={onTabChange}
      />
    </>
  );
}
