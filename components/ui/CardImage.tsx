"use client";

import Image from "next/image";
import { useState } from "react";

type CardImageProps = {
  src: string;
  alt: string;
  fallbackClassName?: string;
  className?: string;
  sizes?: string;
};

export default function CardImage({
  src,
  alt,
  fallbackClassName = "from-blue-400 to-blue-600",
  className = "",
  sizes = "(max-width: 640px) 100vw, 25vw",
}: CardImageProps) {
  const [failed, setFailed] = useState(false);
  const isSvg = src.endsWith(".svg");

  if (failed) {
    return (
      <div
        className={`flex h-full min-h-[100px] w-full items-center justify-center bg-gradient-to-br ${fallbackClassName} ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
