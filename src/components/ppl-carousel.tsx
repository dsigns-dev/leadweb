"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PPLCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  /* Auto-advance every 4 seconds */
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  /* Touch / swipe support */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={`${src}-${index}`} className="relative aspect-[4/3] min-w-full">
            <Image
              src={src}
              alt={`Pay per lead search result example ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute inset-y-0 left-0 z-10 flex w-12 cursor-pointer items-center justify-center bg-gradient-to-r from-black/20 to-transparent text-white opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 md:w-14"
      >
        <ChevronLeft className="h-7 w-7 drop-shadow-md" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute inset-y-0 right-0 z-10 flex w-12 cursor-pointer items-center justify-center bg-gradient-to-l from-black/20 to-transparent text-white opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 md:w-14"
      >
        <ChevronRight className="h-7 w-7 drop-shadow-md" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
