import type { LocationContent } from "@/content/locations";
import { Section, H2, Lede, CTAButton, CheckList, CTA } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ServiceCards } from "@/components/service-cards";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";

export function LocationPage({ content }: { content: LocationContent }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Locations", to: "/location" }, { label: content.city }]} />
      <Section className="pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {content.h1}
            </h1>
            <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {content.tagline}
            </p>
            <Lede>{content.lede}</Lede>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact-us">Book a call</CTAButton>
              <CTAButton to="/google-ads-brief" variant="ghost">
                Send an ads brief
              </CTAButton>
            </div>
          </div>
          <div>
            <LeadForm
              config={{
                kind: "google-ads",
                title: `${content.serviceLabel} — ${content.city}`,
                subtitle:
                  "Tell us about your goals. We'll come back with a straight answer within one business day.",
              }}
            />
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Why {content.city} owners work with us</H2>
        <div className="mt-8">
          <CheckList items={content.bullets} />
        </div>
      </Section>
      {content.proofPoints && content.proofPoints.length > 0 ? (
        <Section className="pt-0">
          <H2>What you actually get</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.proofPoints.map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-hairline bg-surface/60 p-6 text-sm text-ink-dim"
              >
                {p}
              </div>
            ))}
          </div>
          {content.ctaLine ? (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="text-base text-foreground">{content.ctaLine}</p>
              <CTAButton to="/contact-us">Book a call</CTAButton>
            </div>
          ) : null}
        </Section>
      ) : null}
      <Section className="pt-0">
        <H2>Every service, run for {content.city} businesses</H2>
        <div className="mt-10">
          <ServiceCards />
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Serving all of {content.city}</H2>
        <div className="mt-6 flex flex-wrap gap-2">
          {content.neighbourhoods.map((n) => (
            <span
              key={n}
              className="rounded-full border border-hairline bg-surface/60 px-3 py-1 text-sm text-ink-dim"
            >
              {n}
            </span>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Recent work</H2>
        <div className="mt-10">
          <PortfolioGrid limit={6} />
        </div>
      </Section>
      <CTA />
    </>
  );
}

export function locationHead(content: LocationContent, path: string) {
  return {
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `https://www.leadweb.com.au${path}#business`,
          name: `Leadweb — ${content.serviceLabel} ${content.city}`,
          description: content.metaDescription,
          url: `https://www.leadweb.com.au${path}`,
          telephone: "+61-2-9191-8049",
          email: "hello@leadweb.com.au",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Suite 611, 150 George Street",
            addressLocality: "Parramatta",
            addressRegion: "NSW",
            postalCode: "2150",
            addressCountry: "AU",
          },
          areaServed: {
            "@type": "City",
            name: content.city,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: content.state,
            },
          },
          sameAs: [
            "https://www.facebook.com/leadwebmarketing",
            "https://www.linkedin.com/company/leadweb",
          ],
        }),
      },
      breadcrumbJsonLd([
        { label: "Locations", to: "/location" },
        { label: content.city, to: path },
      ]),
    ],
  };
}
