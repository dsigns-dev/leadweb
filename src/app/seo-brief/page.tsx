import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "SEO Brief | Leadweb",
  description: "Send your site. We reply with the fastest revenue-moving SEO fixes.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "SEO Brief | Leadweb",
    description: "Send your site. We reply with the fastest revenue-moving SEO fixes.",
    url: "/seo-brief/",
  },
  alternates: {
    canonical: "/seo-brief/",
  },
};

export default function SeoBrief() {
  return (
    <BriefPage
      kicker="SEO brief"
      h1="Send us your SEO brief."
      lede="Site URL, current rankings, revenue-critical keywords. We'll come back with the 3 fastest revenue-moving fixes."
      form={{
        kind: "seo",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
