"use client";

import { useMemo, useState } from "react";
import { buildChecklistItems, type ChecklistItem } from "@/lib/data";
import { useChecklist } from "@/lib/useChecklist";

type Filter = "All" | ChecklistItem["category"];

export default function ChecklistSection() {
  const items = useMemo(() => buildChecklistItems(), []);
  const { toggle, clearAll, isChecked, hydrated, totalChecked } = useChecklist();
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((i) => i.category === filter);
  }, [items, filter]);

  const progress = items.length ? Math.round((totalChecked / items.length) * 100) : 0;

  return (
    <section className="section-container py-6 pb-10">
      <div className="content-card p-5 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#1e3a8a]">Collection Checklist</h2>
            <p className="mt-1 text-sm text-slate-600">
              Track photocards, collectibles, and events you have collected. Saved in your browser.
            </p>
          </div>
          {hydrated && (
            <button
              type="button"
              onClick={clearAll}
              className="self-start rounded-full border-2 border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Reset all
            </button>
          )}
        </div>

        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm font-semibold">
            <span className="text-slate-600">
              {totalChecked} / {items.length} collected
            </span>
            <span className="text-[#2563eb]">{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-[#2563eb] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {(
            [
              { value: "All" as const, label: "All" },
              { value: "Photocards" as const, label: "Photocards" },
              { value: "Merch" as const, label: "Collectibles" },
              { value: "Special" as const, label: "Special" },
            ] as const
          ).map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === value
                  ? "bg-[#2563eb] text-white"
                  : "border-2 border-[#2563eb] bg-white text-[#2563eb]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="max-h-[min(60vh,480px)] space-y-2 overflow-y-auto pr-1">
          {!hydrated ? (
            <li className="py-8 text-center text-slate-500">Loading checklist…</li>
          ) : (
            filtered.map((item) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 hover:bg-blue-50">
                  <input
                    type="checkbox"
                    checked={isChecked(item.id)}
                    onChange={() => toggle(item.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#2563eb]"
                  />
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-semibold ${
                        isChecked(item.id) ? "text-slate-400 line-through" : "text-slate-900"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="mt-0.5 flex flex-wrap gap-2 text-xs text-slate-500">
                      <span>
                        {item.category}
                        {item.subcategory ? ` · ${item.subcategory}` : ""}
                      </span>
                      {item.rarity && (
                        <span className="rounded-full bg-white px-2 py-0.5 font-medium text-[#2563eb]">
                          {item.rarity}
                        </span>
                      )}
                    </span>
                  </span>
                </label>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
