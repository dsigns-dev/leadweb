"use client";

import { useState, useRef, useEffect, type ImgHTMLAttributes } from "react";

type SmoothImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> & {
  /** When true, sets fetchPriority="high" and skips lazy loading */
  priority?: boolean;
};

/**
 * Drop-in `<img>` replacement that fades in smoothly once loaded.
 * Handles React SSR/hydration race condition by checking `img.complete` on mount.
 */
export function SmoothImage({
  priority = false,
  className = "",
  style,
  ...rest
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      {...rest}
      ref={imgRef}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      onLoad={() => setLoaded(true)}
      className={`transition-all duration-500 ease-out ${className} ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={style}
    />
  );
}
