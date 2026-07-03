import type { Metadata } from "next";
import { Section, Eyebrow, H1, Lede, CTAButton } from "@/components/primitives";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Thanks — we'll be in touch | Leadweb",
  description: "Your brief has landed. A strategist will reply within one business day.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    url: "/thank-you/",
  },
  alternates: {
    canonical: "/thank-you/",
  },
};

export default function ThankYouPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Check className="h-7 w-7" />
        </div>
        <Eyebrow>Brief received</Eyebrow>
        <H1>Thanks — a strategist will be in touch inside one business day.</H1>
        <Lede>In the meantime, have a look at what we've built for owners like you.</Lede>
        <div className="mt-8 flex justify-center gap-3">
          <CTAButton to="/">See recent work</CTAButton>
          <CTAButton to="/services" variant="ghost">
            Explore services
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
