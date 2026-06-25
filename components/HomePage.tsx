"use client";

import { useCallback, useRef, useState } from "react";
import type { TabId } from "@/lib/data";
import SiteHeader from "@/components/navigation/SiteHeader";
import HeroSection from "@/components/hero/HeroSection";
import TabNavigation from "@/components/tabs/TabNavigation";
import ProfileSection from "@/components/sections/ProfileSection";
import BirthdaySection from "@/components/sections/BirthdaySection";
import CatchphraseSection from "@/components/sections/CatchphraseSection";
import SocialSection from "@/components/sections/SocialSection";
import OutfitsSection from "@/components/sections/OutfitsSection";
import EventsSection from "@/components/sections/EventsSection";
import PhotocardsSection from "@/components/sections/PhotocardsSection";
import MerchSection from "@/components/sections/MerchSection";
import ChecklistSection from "@/components/sections/ChecklistSection";
import OthersSection from "@/components/sections/OthersSection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);

  const showHomeSections = activeTab === null || activeTab === "Profile";

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleViewProfile = useCallback(() => {
    setActiveTab("Profile");
    window.setTimeout(() => scrollToRef(profileRef), 50);
  }, []);

  const handleFollow = useCallback(() => {
    if (activeTab !== null && activeTab !== "Profile") {
      setActiveTab(null);
    }
    window.setTimeout(() => scrollToRef(followRef), 50);
  }, [activeTab]);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SiteHeader activeTab={activeTab} onTabChange={handleTabChange} />

      <main>
        {showHomeSections && (
          <>
            <HeroSection onViewProfile={handleViewProfile} onFollow={handleFollow} />
            
            {activeTab === "Profile" && (
              <div ref={profileRef}>
                <ProfileSection />
              </div>
            )}
            <BirthdaySection />
            <CatchphraseSection />
            <div ref={followRef}>
              <SocialSection />
            </div>

            {/* WEBSITE DISCLAIMER */}
            <section className="section-container py-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-slate-600 shadow-sm">
                <p className="font-semibold text-[#1e3a8a]">
                  ℹ️ Website Disclaimer
                </p>

                <p className="mt-2">
                  This website is a fan-made project created to archive and celebrate the
                  activities, memories, events, outfits, and journey of Yishyan.
                </p>

                <p className="mt-2">
                  It is not an official KLP48 website and is not affiliated with, endorsed
                  by, or associated with KLP48, Yishyan, or their management.
                </p>

                <p className="mt-2">
                  All information, photos, and event records are compiled from publicly
                  available sources and official social media platforms for fan appreciation
                  purposes only. All content belongs to their respective owners.
                </p>

                <p className="mt-2">
                  Thank you for visiting and supporting Yishyan. 💙
                </p>
              </div>
            </section>

          </>
        )}

        {activeTab === "Outfits" && <OutfitsSection />}
        {activeTab === "Events" && <EventsSection />}
        {activeTab === "Photocards" && <PhotocardsSection />}
        {activeTab === "Merch" && <MerchSection />}
        {activeTab === "Checklist" && <ChecklistSection />}
        {activeTab === "Others" && <OthersSection />}
      </main>

      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  );
}
