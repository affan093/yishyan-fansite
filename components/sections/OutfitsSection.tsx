"use client";

import { useState } from "react";
import CardImage from "@/components/ui/CardImage";
import { outfitCategories } from "@/lib/data";

export default function OutfitsSection() {
  const [expanded, setExpanded] = useState<string>("uniform");

  return (
    <section className="section-container space-y-4 py-6 pb-10">
      {outfitCategories.map((category) => {
        const isOpen = expanded === category.id;

        return (
          <div
            key={category.id}
            className="overflow-hidden rounded-2xl shadow-md"
          >
            <button
              type="button"
              onClick={() =>
                setExpanded(isOpen ? "" : category.id)
              }
              className="flex w-full items-center justify-between gap-3 bg-[#2563eb] px-5 py-4 text-left text-white"
              aria-expanded={isOpen}
            >
              <span className="flex min-w-0 items-center gap-2 font-semibold">
                <span>{category.icon}</span>
                {category.title}
              </span>

              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-white px-3 py-0.5 text-xs font-bold text-[#2563eb]">
                  {category.count} outfits
                </span>

                <span className="text-lg">
                  {isOpen ? "−" : "▼"}
                </span>
              </span>
            </button>

            {isOpen && (
              <div className="content-card rounded-t-none border-t-0 p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {category.outfits.map((outfit) => (
                    <article
                      key={outfit.id}
                      className={`overflow-hidden rounded-xl bg-gradient-to-br ${outfit.color} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <CardImage
                          src={outfit.image}
                          alt={outfit.name}
                          fallbackClassName={outfit.color}
                        />
                      </div>

                      <div className={`bg-gradient-to-br ${outfit.color} px-3 py-3 text-center text-white`}>
                        <h3 className="font-bold">
                          {outfit.name}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-white/90">
                          {outfit.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

    {/* DISCLAIMER */}
      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-[#1e3a8a]">
          📸 Outfit Disclaimer
        </p>

        <p className="mt-2">
          All photos featured in this section are sourced from
          Yishyan's official social media platforms and publicly
          shared content.
        </p>

        <p className="mt-2">
          This gallery is created solely for fan appreciation.
          For the latest updates, additional photos and more
          information about Yishyan, please visit and support
          her official social media platforms.
        </p>
      </div>

    </section>
  );
}

