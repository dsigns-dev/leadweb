"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen overlay shown while a lead form is submitting.
 * Renders a pulsing animated spinner + message, and blocks
 * all interaction until dismissed.
 */
export function SubmittingOverlay({ visible }: { visible: boolean }) {
  const [mounted, setMounted] = useState(false);

  // Delay mount animation for a smooth entrance
  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      aria-live="assertive"
      role="alert"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className={`relative mx-4 w-full max-w-sm transform rounded-2xl border border-hairline bg-background p-8 text-center shadow-2xl transition-all duration-500 ${
          mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
        }`}
      >
        {/* Animated spinner */}
        <div className="mx-auto mb-6 h-14 w-14">
          <svg
            className="h-14 w-14 animate-spin"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              className="text-hairline"
            />
            <path
              d="M28 4a24 24 0 0 1 24 24"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-brand"
            />
          </svg>
        </div>

        {/* Pulsing text */}
        <h3 className="font-display text-xl font-semibold text-foreground">Sending your brief…</h3>
        <p className="mt-2 animate-pulse text-sm text-ink-dim">
          Hold tight — we're saving your details.
        </p>

        {/* Animated dots */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <span
            className="inline-block h-2 w-2 rounded-full bg-brand animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="inline-block h-2 w-2 rounded-full bg-brand animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="inline-block h-2 w-2 rounded-full bg-brand animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
