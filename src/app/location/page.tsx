import type { Metadata } from "next";
import { Section, Lede, CTA } from "@/components/primitives";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { locations, locationServices, visibleCityList } from "@/content/locations";
import { Link } from "@/components/link";

export const metadata: Metadata = {
  title: "Google Ads Agency Serviced Cities — Leadweb Marketing",
  description:
    "Leadweb runs Google Ads accounts for owners across Sydney, Melbourne, Brisbane, Perth and Adelaide.",
  openGraph: {
    title: "Google Ads Agency Serviced Cities — Leadweb Marketing",
    description: "Locations we serve across Australia.",
    url: "/location/",
  },
  alternates: {
    canonical: "/location/",
  },
};

export default function LocationHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Locations" }]} />
      <Section className="pt-10 md:pt-16">
        <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Leadweb Marketing service areas
        </h1>
        <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Nationwide capability. Local accountability.
        </p>
        <Lede>
          Sydney-headquartered, running accounts in every capital. Pick a service and city.
        </Lede>
      </Section>
      {locationServices.map((svc) => (
        <Section key={svc.key} className="pt-0">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">{svc.label} by city</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCityList.map((c) => {
              const slug = `${svc.slugPrefix}-${c.citySlug}`;
              const loc = locations.find((l) => l.slug === slug);
              if (!loc) return null;
              return (
                <Link
                  key={slug}
                  to="/$slug"
                  params={{ slug }}
                  className="group rounded-2xl border border-hairline bg-surface/50 p-5 transition-colors hover:border-brand/60"
                >
                  <div className="text-xs font-medium uppercase tracking-widest text-brand">
                    {c.state}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {svc.short} · {c.city}
                  </h3>
                  <p className="mt-2 text-sm text-ink-dim">
                    Run for {c.city} businesses — no lock-in after 90 days.
                  </p>
                </Link>
              );
            })}
          </div>
        </Section>
      ))}
      <CTA />
    </>
  );
}
