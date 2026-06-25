"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function BirthdaySection() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  const audioRef = useRef<HTMLAudioElement>(null);

  const openBirthdayCard = () => {
    if (password !== "yishyanklp48") {
      alert("Incorrect password.");
      return;
    }


    setOpen(true);

    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 },
    });

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const closeBirthdayCard = () => {
    setOpen(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section id="birthday" className="section-container pb-20">
      <div className="glass-card p-10 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
          SPECIAL EVENT
        </p>

        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Birthday Surprise
        </h2>

        <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-300">
          A special birthday project dedicated to Yishyan with heartfelt memories,
          celebration, and appreciation.
        </p>

        <div className="mx-auto mb-6 max-w-sm rounded-2xl bg-slate-900/60 p-4 backdrop-blur-md">
          <input
            type="password"
            placeholder="Enter Birthday Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-blue-400/40
              bg-slate-950
              px-4
              py-3
              text-center
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-blue-400
            "
          />
        </div>


        <button
          onClick={openBirthdayCard}
          className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 hover:bg-blue-500"
        >
          🎉 Open Birthday Surprise
        </button>

        <audio ref={audioRef} src="/audio/birthday.m4a" preload="auto" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-blue-300/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={closeBirthdayCard}
              className="sticky top-4 ml-auto mr-4 mt-4 block z-50 text-3xl font-bold text-white hover:scale-110 transition"
            >
              ✕
            </button>

            <div className="grid gap-0 lg:grid-cols-[1fr_280px]">

              {/* LETTER */}
              <div className="p-8 md:p-12">
                <div className="rounded-3xl bg-[#fffdf7] p-8 text-left shadow-xl">
                  <h2 className="mb-6 text-3xl font-bold text-slate-800">
                    🎂 Happy Birthday Yishyan
                  </h2>

                  <div className="space-y-4 leading-8 text-slate-700">
                    <p>Hi Yishyan, Happy Birthday! 🎂💙</p>

                    <p>
                      Semoga Yishyan sentiasa sihat, bahagia, dan dimurahkan rezeki dalam apa jua yang dilakukan.
                    </p>

                    <p>
                      I want you to know that meeting you is one of the most important things in my life.
                      You really remind me of a little part of the "old me" that I feel I've lost as I've grown older, huhu.
                      Seeing your spirit and determination reminds me of a time when I was still learning and growing myself. 
                      Maybe that's one of the reasons why I always want to support you and see you continue to shine. Hihi.
                    </p>

                    <p>
                      What I like the most about you is your smile. Honestly, your smile can really make my day. 
                      Even the smallest moments with you become memories that I treasure.
                    </p>

                    <p>
                      Thank you for always being yourself, and for creating so many happy memories for all of us.
                    </p>

                    <p>Happy Birthday once again, Yishyan. My pretty and strong oshi 💙</p>

                    <p className="pt-4 font-semibold">— Affan</p>
                  </div>
                </div>
              </div>

              {/* PHOTO */}
              <div className="flex flex-col items-center justify-center border-t border-white/10 p-6 lg:border-l lg:border-t-0">
                <Image
                  src="/images/birthday-memory.jpg"
                  alt="Birthday Memory"
                  width={250}
                  height={333}
                  className="rounded-2xl border-2 border-white/20 object-cover shadow-xl"
                />

                <p className="mt-4 text-center text-sm text-blue-200">
                  My Pretty and Strong Oshi 💙
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}