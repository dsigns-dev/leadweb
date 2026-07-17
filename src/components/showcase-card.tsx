"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface ShowcaseCardProps {
  name: string;
  image: string;
}

export function ShowcaseCard({ name, image }: ShowcaseCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const isTouchDevice = useRef(false);

  // Calculates the scroll translation limit and duration dynamically based on image height
  const calculateParams = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;
    const containerH = el.parentElement?.clientHeight ?? 400;
    const imageH = el.offsetHeight;
    const overflow = Math.max(0, imageH - containerH);

    // Constant slow scrolling speed: 180px per second
    const speed = 180;
    const duration = overflow / speed;
    const durationStr = `${Math.max(2.5, duration)}s`;

    el.style.setProperty("--scroll-duration-down", durationStr);
    el.style.setProperty("--scroll-duration-up", durationStr);
    el.style.setProperty("--max-translate", `-${overflow}px`);
  }, []);

  // Desktop hover interactions
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice.current) return;
    calculateParams();
    setActive(true);
  }, [calculateParams]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice.current) return;
    setActive(false);
  }, []);

  // Mobile touch interactions
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isTouchDevice.current = true;
    e.stopPropagation();
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      calculateParams();
      setActive((prev) => !prev);
    },
    [calculateParams],
  );

  // Reset scroll if user taps outside on touch devices
  useEffect(() => {
    if (!active || !isTouchDevice.current) return;

    const handleOutsideTouch = (e: TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("touchstart", handleOutsideTouch, { passive: true });
    return () => document.removeEventListener("touchstart", handleOutsideTouch);
  }, [active]);

  return (
    <article
      ref={cardRef}
      className="wds-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="wds-card__viewport">
        <img
          ref={imgRef}
          src={image}
          alt={name}
          className={`wds-card__image ${active ? "is-scrolling" : ""}`}
          onLoad={calculateParams}
          loading="lazy"
        />
      </div>
      <h3 className="wds-card__name">{name}</h3>
    </article>
  );
}
