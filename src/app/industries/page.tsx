import type { Metadata } from "next";
import { Section, Lede, CTA } from "@/components/primitives";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { industries } from "@/content/industries";
import { Link } from "@/components/link";

export const metadata: Metadata = {
  title: "Industries We Work With — Leadweb Marketing",
  description:
    "Digital marketing playbooks for tradies, dentists, law firms, real estate, financial services, non-profits and more.",
  openGraph: {
    title: "Industries We Work With — Leadweb Marketing",
    description: "Industry-specific playbooks, not generic templates.",
    url: "/industries/",
  },
  alternates: {
    canonical: "/industries/",
  },
};

export default function IndustriesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries" }]} />
      <Section className="pt-10 md:pt-16">
        <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Industries
        </h1>
        <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Every industry gets its own playbook.
        </p>
        <Lede>
          Ranking a dentist and ranking a tree lopper aren't the same job. Pick your industry to see
          how we run it.
        </Lede>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to={`/industries/${i.slug}`}
              className="group rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors hover:border-brand/60"
            >
              <div className="text-xs font-medium uppercase tracking-widest text-brand">
                Playbook
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold">{i.name}</h3>
              <p className="mt-2 text-sm text-ink-dim">{i.lede}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
