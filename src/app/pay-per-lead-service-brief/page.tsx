import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Pay Per Lead Brief | Leadweb",
  description: "Get a pay-per-lead price for your service and postcode.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Pay Per Lead Brief | Leadweb",
    description: "Get a pay-per-lead price for your service and postcode.",
    url: "/pay-per-lead-service-brief/",
  },
  alternates: {
    canonical: "/pay-per-lead-service-brief/",
  },
};

export default function PayPerLeadServiceBrief() {
  return (
    <BriefPage
      kicker="Pay per lead brief"
      h1="Get a pay-per-lead quote."
      lede="Your service, service area, and monthly target volume. We come back with a per-lead price and start date."
      form={{
        kind: "pay-per-lead",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
