import type { Metadata } from "next";
import { Section, H2, Lede, CheckList, StatRow, CTA } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Pay Per Lead for Tradies Sydney | Leadweb Marketing",
  description:
    "Exclusive, real-time leads for electricians, plumbers, builders and trades. You only pay for leads that match your service and postcode.",
  openGraph: {
    title: "Pay Per Lead for Tradies Sydney | Leadweb Marketing",
    description: "Exclusive leads for tradies. No retainer, no ad spend, no shared enquiries.",
    url: "/pay-per-lead-for-tradies/",
  },
  alternates: {
    canonical: "/pay-per-lead-for-tradies/",
  },
};

export default function PPLTradiesPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Pay Per Lead for Tradies
            </h1>
            <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Book more jobs without becoming a marketer.
            </p>
            <Lede>
              You're excellent on the tools. That's the job. Ours is filling your calendar with
              exclusive leads in your postcode — you only pay when a qualified enquiry lands.
            </Lede>
          </div>
          <LeadForm
            config={{
              kind: "pay-per-lead",
              title: "Check availability",
              subtitle:
                "Tell us your trade and postcode. We'll confirm availability within a business day.",
            }}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <StatRow
          stats={[
            { v: "Exclusive", l: "Never shared with competitors" },
            { v: "Real time", l: "SMS + email delivery" },
            { v: "Refundable", l: "Bad-fit leads credited, no fight" },
            { v: "Pause anytime", l: "Cap weekly / monthly volume" },
          ]}
        />
      </Section>

      <Section className="pt-0">
        <H2>What we cover</H2>
        <div className="mt-8">
          <CheckList
            items={[
              "Electricians",
              "Plumbers",
              "Builders & renovations",
              "Tree lopping & arborists",
              "Excavation & earthworks",
              "Bricklayers & concreters",
              "Removalists",
              "Roofing & gutter",
              "Awnings, blinds, security screens",
              "Painting & rendering",
            ]}
          />
        </div>
      </Section>

      <CTA />
    </>
  );
}
