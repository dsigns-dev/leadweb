import type { Metadata } from "next";
import { Section, Lede, CTA } from "@/components/primitives";
import { ServiceCards } from "@/components/service-cards";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Digital Marketing Services — Google Ads SEO and Pay Per Lead",
  description:
    "Google Ads, SEO, websites, social media, pay-per-lead and rent-a-website — every service built to move revenue, not vanity metrics.",
  openGraph: {
    title: "Digital Marketing Services — Google Ads SEO and Pay Per Lead",
    description: "Six services, one standard: measured in booked jobs.",
    url: "/services/",
  },
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Digital Marketing" }]} />
      <Section className="pt-10 md:pt-16">
        <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Digital Marketing Services
        </h1>
        <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          One standard across every service: measured in booked jobs.
        </p>
        <Lede>
          Pick the channel that moves the needle for your business. Or ask us — we'll tell you which
          one earns the first dollar fastest based on your cash flow, margin, and urgency.
        </Lede>
      </Section>
      <Section className="pt-0">
        <ServiceCards />
      </Section>
      <CTA />
    </>
  );
}
