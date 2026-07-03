import type { Metadata } from "next";
import { BriefPage } from "@/components/brief-page";

export const metadata: Metadata = {
  title: "Grow Your Business — Free Strategy Session | Leadweb",
  description:
    "Tell us where your lead flow is stuck. A strategist replies with a plan within one business day.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Grow Your Business — Free Strategy Session | Leadweb",
    description:
      "Tell us where your lead flow is stuck. A strategist replies with a plan within one business day.",
    url: "/grow-your-business-form/",
  },
  alternates: {
    canonical: "/grow-your-business-form/",
  },
};

export default function GrowYourBusinessForm() {
  return (
    <BriefPage
      kicker="Free strategy session"
      h1="Tell us where the lead flow is stuck."
      lede="Skip the 16-step questionnaire. Six questions is enough for a strategist to give you a real plan on the follow-up call."
      form={{
        kind: "general",
        title: "Free strategy session",
        subtitle: "One business day reply. Real strategist, not a chatbot.",
      }}
    />
  );
}
