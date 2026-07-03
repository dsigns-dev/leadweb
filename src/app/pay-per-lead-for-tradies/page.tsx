import type { Metadata } from "next";
import { Section, Eyebrow, H1, H2, Lede, CheckList, StatRow, CTA } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Pay Per Lead for Tradies Sydney | Leadweb",
  description:
    "Exclusive, real-time leads for electricians, plumbers, builders and trades. You only pay for leads that match your service and postcode.",
  openGraph: {
    title: "Pay Per Lead for Tradies Sydney | Leadweb",
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
            <Eyebrow>Pay Per Lead · Tradies</Eyebrow>
            <H1>Book more jobs without becoming a marketer.</H1>
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
