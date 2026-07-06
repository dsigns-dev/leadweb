"use client";

import { useState, type ImgHTMLAttributes } from "react";

type SmoothImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> & {
  /** When true, sets fetchPriority="high" and skips lazy loading */
  priority?: boolean;
};

/**
 * Drop-in `<img>` replacement that fades in smoothly once loaded.
 *
 * - Starts at opacity 0 with a subtle upward translate
 * - Transitions to full opacity + natural position on load
 * - Accepts all standard <img> attributes
 */
export function SmoothImage({
  priority = false,
  className = "",
  style,
  ...rest
}: SmoothImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...rest}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      onLoad={() => setLoaded(true)}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    />
  );
}
