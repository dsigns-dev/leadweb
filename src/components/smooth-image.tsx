"use client";

import { useState, useRef, useEffect } from "react";
import NextImage, { type ImageProps } from "next/image";

type SmoothImageProps = Omit<ImageProps, "onLoad" | "onLoadingComplete"> & {
  /** When true, sets priority and skips lazy loading */
  priority?: boolean;
};

/**
 * Next.js Image wrapper that fades in smoothly once loaded.
 * Handles React SSR/hydration race condition by checking complete state on mount.
 */
export function SmoothImage({
  priority = false,
  className = "",
  sizes,
  ...rest
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  // Default sizes for responsive images if not provided
  const defaultSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <NextImage
      {...rest}
      ref={imgRef}
      priority={priority}
      sizes={sizes ?? defaultSizes}
      onLoad={() => setLoaded(true)}
      className={`transition-all duration-500 ease-out ${className} ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    />
  );
}
