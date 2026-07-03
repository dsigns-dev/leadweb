import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Rent a Website Brief | Leadweb",
  description: "Check availability of a ranked site in your industry and postcode.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Rent a Website Brief | Leadweb",
    description: "Check availability of a ranked site in your industry and postcode.",
    url: "/rent-website-brief/",
  },
  alternates: {
    canonical: "/rent-website-brief/",
  },
};

export default function RentWebsiteBrief() {
  return (
    <BriefPage
      kicker="Rent a website brief"
      h1="Check rent-a-website availability."
      lede="Tell us your industry and postcode. We confirm availability and current lead volume of the site within a business day."
      form={{
        kind: "rent-website",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
