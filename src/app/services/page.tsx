import type { Metadata } from "next";
import { Section, Eyebrow, H1, Lede, CTA } from "@/components/primitives";
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
        <Eyebrow>Digital Marketing</Eyebrow>
        <H1>One standard across every service: measured in booked jobs.</H1>
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
