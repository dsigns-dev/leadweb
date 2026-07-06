"use client";

import { Link } from "@/components/link";
import { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { locations, locationServices, visibleCityList } from "@/content/locations";

type Column = {
  heading: string;
  hint?: string;
  items: Array<{ label: string; to: string; desc?: string }>;
};
type Panel = {
  label: string;
  to?: string;
  columns: Column[];
  cta?: { label: string; to: string; note?: string };
};

const panels: Panel[] = [
  {
    label: "Digital Marketing",
    to: "/services",
    columns: [
      {
        heading: "Performance channels",
        hint: "Paid + organic that produce booked jobs.",
        items: [
          { label: "SEO", to: "/services/seo", desc: "Rank on revenue-moving terms" },
          { label: "Google Ads", to: "/services/google-ads", desc: "Weekly-optimised paid search" },
          {
            label: "Social Media Marketing",
            to: "/services/social-media-marketing",
            desc: "Organic + paid Meta / LinkedIn",
          },
        ],
      },
      {
        heading: "Build & rent",
        hint: "Sites and lead-gen assets.",
        items: [
          { label: "Web Design", to: "/services/web-design", desc: "Conversion-first websites" },
          {
            label: "Rent a Website",
            to: "/services/rent-website",
            desc: "Ranked site, monthly rent",
          },
          {
            label: "Pay Per Lead",
            to: "/services/pay-per-lead",
            desc: "Only pay for qualified leads",
          },
        ],
      },
    ],
    cta: {
      label: "Book a free strategy session",
      to: "/grow-your-business-form",
      note: "One business day reply.",
    },
  },
  {
    label: "Industries",
    to: "/industries",
    columns: [
      {
        heading: "Trades & local services",
        items: [
          { label: "Tradies", to: "/industries/digital-marketing-for-tradie" },
          {
            label: "Restaurants & Hospitality",
            to: "/industries/digital-marketing-for-restaurant",
          },
          { label: "Beauty & Skincare", to: "/industries/digital-marketing-for-beauty-skincare" },
          { label: "Fitness & Gyms", to: "/industries/digital-marketing-for-fitness" },
        ],
      },
      {
        heading: "Health & professional",
        items: [
          { label: "Dentists", to: "/industries/digital-marketing-for-dentists" },
          { label: "Doctors & Clinics", to: "/industries/digital-marketing-for-doctor" },
          { label: "Law Firms", to: "/industries/digital-marketing-for-law-firms" },
          {
            label: "Financial Services",
            to: "/industries/digital-marketing-for-financial-services",
          },
          {
            label: "Professional Services",
            to: "/industries/digital-marketing-for-professional-services",
          },
        ],
      },
      {
        heading: "Business & impact",
        items: [
          { label: "Small Business", to: "/industries/digital-marketing-for-small-businesses" },
          { label: "Real Estate", to: "/industries/digital-marketing-for-real-estates" },
          { label: "Non-Profits", to: "/industries/digital-marketing-for-non-profits" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    to: "/location",
    columns: locationServices.map((svc) => ({
      heading: svc.label,
      items: visibleCityList
        .map((c) => {
          const slug = `${svc.slugPrefix}-${c.citySlug}`;
          const loc = locations.find((l) => l.slug === slug);
          if (!loc) return null;
          return { label: c.city, to: `/location/${slug}`, desc: c.state };
        })
        .filter((x): x is { label: string; to: string; desc: string } => x !== null),
    })),
  },
];

export function MegaMenu() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenLabel(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <nav className="hidden items-center gap-1 text-sm lg:flex">
      {panels.map((p) => (
        <div
          key={p.label}
          className="relative"
          onMouseEnter={() => {
            cancelClose();
            setOpenLabel(p.label);
          }}
          onMouseLeave={scheduleClose}
        >
          <MenuTrigger
            to={p.to}
            isOpen={openLabel === p.label}
            onFocus={() => setOpenLabel(p.label)}
          >
            {p.label}
          </MenuTrigger>
          {openLabel === p.label ? (
            <MegaPanel panel={p} onNavigate={() => setOpenLabel(null)} />
          ) : null}
        </div>
      ))}
      <Link
        to="/about-us"
        className="rounded-md px-3 py-2 text-ink-dim transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
      >
        About
      </Link>
      <Link
        to="/blog"
        className="rounded-md px-3 py-2 text-ink-dim transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
      >
        Blog
      </Link>
      <Link
        to="/contact-us"
        className="rounded-md px-3 py-2 text-ink-dim transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
      >
        Contact
      </Link>
    </nav>
  );
}

function MenuTrigger({
  to,
  isOpen,
  onFocus,
  children,
}: {
  to?: string;
  isOpen: boolean;
  onFocus: () => void;
  children: ReactNode;
}) {
  const cls = `inline-flex items-center gap-1 rounded-md px-3 py-2 text-ink-dim transition-colors hover:text-foreground ${isOpen ? "text-foreground" : ""}`;
  const chevron = (
    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
  );
  if (to) {
    return (
      <Link
        to={to}
        onFocus={onFocus}
        className={cls}
        activeProps={{ className: "text-foreground" }}
      >
        {children}
        {chevron}
      </Link>
    );
  }
  return (
    <button type="button" onFocus={onFocus} className={cls} aria-expanded={isOpen}>
      {children}
      {chevron}
    </button>
  );
}

function MegaPanel({ panel, onNavigate }: { panel: Panel; onNavigate: () => void }) {
  const withCta = Boolean(panel.cta);
  return (
    <div
      className={`absolute left-1/2 top-full z-50 mt-2 w-screen ${panel.columns.length >= 5 ? "max-w-6xl" : "max-w-5xl"} -translate-x-1/2 px-4`}
    >
      <div className="overflow-hidden rounded-2xl border border-hairline bg-background shadow-2xl shadow-brand/10 ring-1 ring-black/5">
        <div className={`grid gap-6 p-6 ${withCta ? "md:grid-cols-[1.4fr_1fr]" : ""}`}>
          <div
            className={`grid gap-6 ${
              panel.columns.length >= 5
                ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                : panel.columns.length > 2
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
            }`}
          >
            {panel.columns.map((col) => (
              <div key={col.heading}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
                  {col.heading}
                </div>
                {col.hint ? <p className="mb-3 text-xs text-ink-dim">{col.hint}</p> : null}
                <ul className="space-y-1">
                  {col.items.map((it) => (
                    <li key={it.to}>
                      <Link
                        to={it.to}
                        onClick={onNavigate}
                        className="group block rounded-lg px-3 py-2 transition-colors hover:bg-surface"
                      >
                        <div className="text-sm font-medium text-foreground group-hover:text-brand">
                          {it.label}
                        </div>
                        {it.desc ? (
                          <div className="mt-0.5 text-xs text-ink-dim">{it.desc}</div>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {panel.cta ? (
            <aside className="relative overflow-hidden rounded-xl bg-surface p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                Not sure where to start?
              </div>
              <h4 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                Six questions and a real strategist calls you back.
              </h4>
              <p className="mt-2 text-xs text-ink-dim">{panel.cta.note}</p>
              <Link
                to={panel.cta.to}
                onClick={onNavigate}
                className="mt-4 inline-flex rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground"
              >
                {panel.cta.label}
              </Link>
            </aside>
          ) : null}
        </div>
        {panel.to ? (
          <div className="border-t border-hairline bg-surface/60 px-6 py-3 text-xs text-ink-dim">
            <Link
              to={panel.to}
              onClick={onNavigate}
              className="font-medium text-brand hover:underline"
            >
              View all {panel.label.toLowerCase()} →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-4">
      {panels.map((p) => (
        <details key={p.label} className="group rounded-lg border border-hairline">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-foreground">
            {p.label}
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-hairline px-4 py-3">
            {p.to ? (
              <Link
                to={p.to}
                onClick={onNavigate}
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand"
              >
                All {p.label}
              </Link>
            ) : null}
            {p.columns.map((col) => (
              <div key={col.heading} className="mt-3 first:mt-0">
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-ink-dim">
                  {col.heading}
                </div>
                <ul className="space-y-1">
                  {col.items.map((it) => (
                    <li key={it.to}>
                      <Link
                        to={it.to}
                        onClick={onNavigate}
                        className="block py-1 text-sm text-foreground"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      ))}
      <Link
        to="/about-us"
        onClick={onNavigate}
        className="block rounded-lg border border-hairline px-4 py-3 text-sm font-medium text-foreground"
      >
        About
      </Link>
      <Link
        to="/blog"
        onClick={onNavigate}
        className="block rounded-lg border border-hairline px-4 py-3 text-sm font-medium text-foreground"
      >
        Blog
      </Link>
      <Link
        to="/contact-us"
        onClick={onNavigate}
        className="block rounded-lg border border-hairline px-4 py-3 text-sm font-medium text-foreground"
      >
        Contact
      </Link>
    </div>
  );
}

// Re-export data for related-links sections
export const megaPanels = panels;
// Suppress unused warnings for data imports used indirectly
void services;
void industries;
