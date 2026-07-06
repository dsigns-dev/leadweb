import { CTAButton } from "@/components/primitives";
import { SearchX } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Leadweb",
  description: "Sorry, we couldn’t find the page you’re looking for.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      {/* Abstract 404 Background Typography */}
      <div className="absolute -z-10 select-none text-[200px] font-bold leading-none tracking-tighter text-brand/[0.02] sm:text-[300px] md:text-[400px]">
        404
      </div>

      {/* Visual Element */}
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-surface-2 shadow-sm border border-hairline/60">
        <div className="absolute inset-0 rounded-full bg-brand/5" />
        <SearchX className="relative z-10 h-10 w-10 text-brand" />
      </div>

      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Page not found
      </h1>

      <p className="mx-auto mt-6 max-w-md text-lg text-ink-dim md:text-xl leading-relaxed">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn’t
        exist.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <CTAButton to="/">Return to homepage</CTAButton>
        <CTAButton to="/services" variant="ghost">
          View our services
        </CTAButton>
      </div>
    </div>
  );
}
