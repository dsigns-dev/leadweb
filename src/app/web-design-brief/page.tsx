import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Web Design Brief | Leadweb",
  description: "Start a website brief. Scope, timeline and fixed price within one business day.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Web Design Brief | Leadweb",
    description: "Start a website brief. Scope, timeline and fixed price within one business day.",
    url: "/web-design-brief/",
  },
  alternates: {
    canonical: "/web-design-brief/",
  },
};

export default function WebDesignBrief() {
  return (
    <BriefPage
      kicker="Web design brief"
      h1="Send us your website brief."
      lede="What the site needs to do, who visits it, and what a successful visit looks like. We reply with scope, timeline and fixed price."
      form={{
        kind: "web-design",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
