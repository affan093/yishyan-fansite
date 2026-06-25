"use client";

import { useMemo, useState } from "react";
import {
  majorEvents,
  theatreEvents,
  type MajorEvent,
  type TheatreEvent,
} from "@/lib/data";

const CATEGORY_FILTERS = [
  "All",
  "Live Performance",
  "Meet & Greet",
  "Talk Show",
  "Birthday Event",
  "Special Event",
  "Tencho",
] as const;

type CategoryFilter = (typeof CATEGORY_FILTERS)[number];

export default function EventsSection() {
  const [category, setCategory] =
    useState<CategoryFilter>("All");

  const [sortNewest, setSortNewest] =
    useState(true);

  const today = new Date();

  const upcomingMajorEvents = useMemo(() => {
    return [...majorEvents]
      .filter(
        (event) => new Date(event.date) >= today
      )
      .sort((a, b) =>
        a.date.localeCompare(b.date)
      )
      .slice(0, 5);
  }, []);

  const upcomingTheatreEvents = useMemo(() => {
    return [...theatreEvents]
      .filter(
        (event) => new Date(event.date) >= today
      )
      .sort((a, b) =>
        a.date.localeCompare(b.date)
      )
      .slice(0, 5);
  }, []);

  const filteredMajorEvents = useMemo(() => {
    let result = [...majorEvents];

    if (category !== "All") {
      result = result.filter((event) =>
        event.category.includes(category)
      );
    }

    result.sort((a, b) =>
      sortNewest
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );

    return result;
  }, [category, sortNewest]);

  const filteredTheatreEvents = useMemo(() => {
    const result = [...theatreEvents];

    result.sort((a, b) =>
      sortNewest
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    );

    return result;
  }, [sortNewest]);

  const birthdayCount =
    majorEvents.filter((e) =>
      e.category.includes("Birthday Event")
    ).length +
    theatreEvents.filter(
      (e) => e.category === "Birthday Party"
    ).length;

  const livePerformanceCount =
    majorEvents.filter((e) =>
      e.category.includes("Live Performance")
    ).length;

  return (
    <section className="section-container space-y-8 py-6 pb-10">

      {/* HEADER + STATS */}

      {/* EVENT STATISTICS */}

<div>
  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
    Event Statistics
  </h3>

  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
    <MiniStatCard
      label="Events"
      value={majorEvents.length}
    />

    <MiniStatCard
      label="Theatre"
      value={theatreEvents.length}
    />

    <MiniStatCard
      label="Live Perfomance"
      value={livePerformanceCount}
    />

    <MiniStatCard
      label="Birthday"
      value={birthdayCount}
    />
  </div>
</div>

{/* UPCOMING EVENTS HEADER */}

<div>
  <h2 className="text-2xl font-bold text-[#1e3a8a]">
    ⭐ Upcoming Events
  </h2>

  <p className="text-sm text-slate-500">
    Upcoming appearances and theatre activities
  </p>
</div>

      {/* UPCOMING EVENTS */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* THEATRE */}

        <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-[#2563eb]">
            🎭 Theatre
          </h3>

          <div className="space-y-3">
            {upcomingTheatreEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl border border-slate-200 p-3"
              >
                <p className="font-semibold">
                  {event.title}
                </p>

                <p className="text-sm text-slate-500">
                  📅 {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MAJOR EVENTS */}

        <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-[#2563eb]">
            🎤 Events
          </h3>

          <div className="space-y-3">
            {upcomingMajorEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl border border-slate-200 p-3"
              >
                <p className="font-semibold">
                  {event.title}
                </p>

                <p className="text-sm text-slate-500">
                  📅 {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FILTERS */}

      <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
        <h3 className="mb-3 font-bold text-[#1e3a8a]">
          🔍 Filters
        </h3>

        <div className="flex flex-wrap gap-2">
          {CATEGORY_FILTERS.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "border border-blue-300 bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={() =>
              setSortNewest(!sortNewest)
            }
            className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium"
          >
            Sort:
            {sortNewest
              ? " Newest First ▼"
              : " Oldest First ▲"}
          </button>
        </div>
      </div>

      {/* EVENTS LIST */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* MAJOR EVENTS */}

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#1e3a8a]">
            🎤 Major Events
          </h2>

          <div className="max-h-[700px] space-y-3 overflow-y-auto pr-2">
            {filteredMajorEvents.map((event) => (
              <MajorEventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>

        {/* THEATRE EVENTS */}

        <div>
          <h2 className="mb-4 text-xl font-bold text-[#1e3a8a]">
            🎭 Theatre Events
          </h2>

          <div className="max-h-[700px] space-y-3 overflow-y-auto pr-2">
            {filteredTheatreEvents.map((event) => (
              <TheatreEventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>

      </div>
    {/* EVENT DISCLAIMER */}
    <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-[#1e3a8a]">
          📅 Event Disclaimer
        </p>

        <p className="mt-2">
          Event information is compiled based on announcements
          published through KLP48's official social media
          platforms and official channels.
        </p>

        <p className="mt-2">
          This list focuses only on events and activities
          attended by Yishyan and may not include every
          KLP48 event.
        </p>

        <p className="mt-2">
          While efforts are made to keep the information
          accurate and up to date, there may occasionally be
          missing or incorrect details.
        </p>

        <p className="mt-2">
          If you notice any errors or omissions, please
          kindly inform the administrator.
        </p>

        <p className="mt-2 font-medium text-[#1e3a8a]">
          Thank you for your support and understanding.
        </p>
      </div>

    </section>
  );
}

function MajorEventCard({
  event,
}: {
  event: MajorEvent;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:border-blue-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900">
          {event.title}
        </h3>

        <span className="whitespace-nowrap text-xs text-slate-500">
          {event.date}
        </span>
      </div>

      <p className="mt-1 text-sm text-slate-500">
        📍 {event.venue}
      </p>

      <div className="mt-2 flex flex-wrap gap-1">
        {event.category.map((cat) => (
          <span
            key={cat}
            className="rounded-full bg-blue-100 px-2 py-1 text-[11px] text-blue-700"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}

function TheatreEventCard({
  event,
}: {
  event: TheatreEvent;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:border-purple-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900">
          {event.title}
        </h3>

        <span className="whitespace-nowrap text-xs text-slate-500">
          {event.date}
        </span>
      </div>

      <p className="mt-2">
        <span className="rounded-full bg-purple-100 px-2 py-1 text-[11px] text-purple-700">
          {event.category}
        </span>
      </p>
    </div>
  );
}

function MiniStatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-center">
      <div className="text-xl font-bold text-[#1e3a8a]">
        {value}
      </div>

      <div className="text-xs text-slate-500">
        {label}
      </div>
    </div>
  );
}