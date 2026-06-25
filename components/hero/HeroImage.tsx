"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center rounded-2xl border-2 border-[#93c5fd] bg-gradient-to-b from-blue-100 to-blue-50 text-center text-sm text-blue-700 md:max-w-[320px]"
        role="img"
        aria-label="Yishyan portrait placeholder"
      >
        <span>
          Add your photo at
          <br />
          <code className="text-xs">public/images/hero/hero.jpg</code>
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/images/hero/hero.jpg"
      alt="Yishyan"
      width={320}
      height={400}
      priority
      className="aspect-[4/5] w-full max-w-[280px] rounded-2xl border-2 border-[#93c5fd] object-cover shadow-lg md:max-w-[320px]"
      onError={() => setFailed(true)}
    />
  );
}
