import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Google Ads Brief | Leadweb",
  description:
    "Send the details. A senior media buyer replies with the top 5 changes they would make to your account.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Google Ads Brief | Leadweb",
    description:
      "Send the details. A senior media buyer replies with the top 5 changes they would make to your account.",
    url: "/google-ads-brief/",
  },
  alternates: {
    canonical: "/google-ads-brief/",
  },
};

export default function GoogleAdsBrief() {
  return (
    <BriefPage
      kicker="Google Ads brief"
      h1="Send us your Google Ads brief."
      lede="Account details, budget, target CPL, service area. A senior media buyer replies within one business day with the top 5 things they'd change in your account."
      form={{
        kind: "google-ads",
        title: "Project brief",
        subtitle: "The more we know upfront, the sharper the response.",
      }}
    />
  );
}
