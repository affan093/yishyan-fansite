"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { photocardSets, photocardStats } from "@/lib/data";

type Filter = "All" | 2024 | 2025 | 2026 | "Special";

const FILTER_OPTIONS: Filter[] = ["All", 2024, 2025, 2026, "Special"];

function getReleaseYear(releaseDate: string): number | null {
  const match = releaseDate.match(/\d{4}/);
  return match ? Number(match[0]) : null;
}

export default function PhotocardsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredSets = useMemo(() => {
    if (filter === "All") return photocardSets;
    if (filter === "Special") {
      return photocardSets.filter((set) => "isSpecial" in set && set.isSpecial);
    }
    return photocardSets.filter((set) => getReleaseYear(set.releaseDate) === filter);
  }, [filter]);

  return (
    <section className="section-container space-y-8 py-6 pb-10">

      {/* COLLECTION OVERVIEW */}
      <div className="rounded-2xl border border-[#93c5fd] bg-blue-50/80 p-5">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#1e3a8a]">
          📊 Collection Overview
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard
            value={photocardStats.totalSeries}
            label="Total Series"
            borderColor="border-blue-300"
          />

          <StatCard
            value={photocardStats.totalCards}
            label="Total Photocards"
            borderColor="border-purple-300"
          />

          <StatCard
            value={photocardStats.specialCards}
            label="Special Cards"
            borderColor="border-amber-300"
          />
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              filter === item
                ? "bg-[#2563eb] text-white"
                : "border border-[#2563eb] bg-white text-[#2563eb] hover:bg-blue-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PHOTOCARD SERIES */}
      {filteredSets.length === 0 ? (
        <p className="rounded-2xl border border-blue-100 bg-white p-5 text-center text-slate-500">
          No photocard series found for this filter.
        </p>
      ) : (
        filteredSets.map((series) => (
          <div
            key={series.id}
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#2563eb]">
              {series.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {series.releaseDate}
            </p>

            <p className="mt-2 text-slate-600">
              {series.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {series.cards.map((card: string, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <Image
                    src={card}
                    alt={`${series.title} Card ${index + 1}`}
                    width={400}
                    height={560}
                    className="h-auto w-full object-cover transition hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}

function StatCard({
  value,
  label,
  borderColor,
}: {
  value: number;
  label: string;
  borderColor: string;
}) {
  return (
    <div
      className={`rounded-xl border-2 ${borderColor} bg-white p-4 text-center shadow-sm`}
    >
      <p className="text-3xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        {label}
      </p>
    </div>
  );
}
