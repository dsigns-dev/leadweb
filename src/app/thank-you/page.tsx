import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Thanks — we'll be in touch | Leadweb",
  description: "Your brief has landed. A strategist will reply within one business day.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    url: "/thank-you/",
  },
  alternates: {
    canonical: "/thank-you/",
  },
};

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 py-24">
      {/* Subtle radial background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-background to-background" />

      <div className="relative z-10 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="overflow-hidden rounded-3xl border border-hairline bg-surface/60 p-8 text-center shadow-2xl backdrop-blur-2xl md:p-16">
          {/* Elegant Check Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-brand/20 to-transparent p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-surface shadow-[0_0_40px_-10px_var(--color-brand)]">
              <Check className="h-10 w-10 text-brand" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            You're all set!
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-balance text-lg text-ink-dim md:text-xl">
            Your brief has successfully landed. A strategist will review it and
            reach out within <strong>one business day</strong>.
          </p>

          <hr className="mx-auto my-10 w-12 border-t-2 border-hairline" />

          <p className="text-xs font-medium uppercase tracking-widest text-ink-dim">
            While you wait
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-medium text-brand-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-brand/25 sm:w-auto"
            >
              See our recent work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-full border border-hairline bg-surface px-8 py-4 text-sm font-medium text-ink transition-all hover:bg-surface-2 sm:w-auto"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
