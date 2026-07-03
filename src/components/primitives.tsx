import { Link } from "@/components/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-page py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </div>
  );
}

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="mt-5 max-w-2xl text-lg text-ink-dim md:text-xl">{children}</p>;
}

export function CTAButton({
  to,
  href,
  children,
  variant = "primary",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
      : "inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand";
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children} <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children} <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-sm text-foreground">
          <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand/15 text-brand">
            <Check className="h-3 w-3" />
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export function StatRow({ stats }: { stats: Array<{ v: string; l: string }> }) {
  return (
    <div className="grid gap-6 border-y border-hairline py-8 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l}>
          <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            {s.v}
          </div>
          <div className="mt-1 text-sm text-ink-dim">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

export function Card({
  title,
  body,
  href,
  kicker,
}: {
  title: string;
  body: string;
  href?: string;
  kicker?: string;
}) {
  const inner = (
    <div className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors hover:border-brand/60">
      {kicker ? (
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">
          {kicker}
        </div>
      ) : null}
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-dim">{body}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
          Learn more{" "}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </div>
  );
  if (href) {
    return (
      <Link to={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}

export function FAQ({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-surface/50">
      {items.map((it) => (
        <details key={it.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
            {it.q}
            <span className="text-brand transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-ink-dim">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({
  title = "Ready to stop losing leads to the competition?",
  body = "Book a 20-minute strategy call. We'll audit your current lead flow, spot the leaks, and give you a plan you can action — even if you don't work with us.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden rounded-3xl border border-hairline bg-surface p-10 md:p-16">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative max-w-3xl">
          <H2>{title}</H2>
          <p className="mt-5 text-lg text-ink-dim">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/contact-us">Book a strategy call</CTAButton>
            <CTAButton to="/services" variant="ghost">
              See what we do
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
