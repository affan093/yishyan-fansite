"use client";

import { TABS, type TabId } from "@/lib/data";

type TabNavigationProps = {
  activeTab: TabId | null;
  onTabChange: (tab: TabId) => void;
};

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2"
      aria-label="Main navigation"
    >
      <div className="section-container">
        <div className="scrollbar-hide flex gap-1 overflow-x-auto rounded-full bg-[#2563eb] p-1.5 shadow-lg">
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition md:px-5 ${
                  isActive
                    ? "bg-white text-[#2563eb] shadow-sm"
                    : "text-white hover:bg-white/15"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
