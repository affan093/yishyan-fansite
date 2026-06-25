"use client";

import HeroImage from "@/components/hero/HeroImage";
import { profileDetails } from "@/lib/data";

type HeroSectionProps = {
  onViewProfile: () => void;
  onFollow: () => void;
};

export default function HeroSection({ onViewProfile, onFollow }: HeroSectionProps) {
  return (
    <section className="section-container py-8 md:py-12">
      <div className="content-card p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
          <div className="flex w-full justify-center md:w-auto md:shrink-0">
            <HeroImage />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1e3a8a] md:text-4xl">
              {profileDetails.stageName}
            </h2>
            <p className="mt-1 text-lg font-medium text-[#2563eb]">{profileDetails.title}</p>
            <p className="mt-4 text-[#334155] leading-relaxed">
              Welcome to the Yi Shyan's fan site dedicated to Foo Yi Shyan, the captain of KLP48.
              Explore her profile, stage outfits, events, merchandise, and more!
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <button
                type="button"
                onClick={onViewProfile}
                className="rounded-xl bg-[#2563eb] px-6 py-3 font-semibold text-white transition hover:bg-[#1d4ed8]"
              >
                View Profile
              </button>
              <button
                type="button"
                onClick={onFollow}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2563eb] bg-white px-6 py-3 font-semibold text-[#2563eb] transition hover:bg-blue-50"
              >
                <span aria-hidden>♥</span>
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
