"use client";

import { useEffect } from "react";
import { TABS, type TabId } from "@/lib/data";

type MobileMenuProps = {
  open: boolean;
  activeTab: TabId | null;
  onClose: () => void;
  onTabChange: (tab: TabId) => void;
};

export default function MobileMenu({ open, activeTab, onClose, onTabChange }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close menu"
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,280px)] flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-blue-100 px-4 py-4">
          <span className="font-bold text-[#1e3a8a]">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-2xl text-slate-500 hover:bg-blue-50"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Go to section
          </p>
          <ul className="space-y-1">
            {TABS.map((tab) => (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => {
                    onTabChange(tab);
                    onClose();
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-left font-semibold transition ${
                    tab === activeTab
                      ? "bg-[#2563eb] text-white"
                      : "text-slate-700 hover:bg-blue-50"
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
