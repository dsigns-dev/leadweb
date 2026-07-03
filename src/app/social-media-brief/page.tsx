import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Social Media Brief | Leadweb",
  description: "Start a social media brief. Channel mix and cadence within one business day.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Social Media Brief | Leadweb",
    description: "Start a social media brief. Channel mix and cadence within one business day.",
    url: "/social-media-brief/",
  },
  alternates: {
    canonical: "/social-media-brief/",
  },
};

export default function SocialMediaBrief() {
  return (
    <BriefPage
      kicker="Social media brief"
      h1="Send us your social brief."
      lede="Where your buyer is, what you're trying to make happen, and where the budget sits. We propose a channel mix and cadence."
      form={{
        kind: "social-media",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
