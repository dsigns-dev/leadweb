import type { Metadata } from "next";
import { Section, Eyebrow, H1, Lede } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Leadweb — Sydney Digital Marketing Agency",
  description:
    "Book a 20-minute strategy call. We'll audit your current lead flow, spot the leaks, and give you a plan you can action.",
  openGraph: {
    title: "Contact Leadweb — Sydney Digital Marketing Agency",
    description: "Book a strategy call with a Sydney-based team that ships every week.",
    url: "/contact-us/",
  },
  alternates: {
    canonical: "/contact-us/",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Leadweb",
    telephone: "+61-2-9191-8049",
    areaServed: "AU",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 611, 150 George Street",
      addressLocality: "Parramatta",
      addressRegion: "NSW",
      postalCode: "2150",
      addressCountry: "AU",
    },
    url: "https://www.leadweb.com.au/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section className="pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <H1>Let's talk about where your leads are actually leaking.</H1>
            <Lede>
              A 20-minute call with a strategist. No pitch deck. No discovery-call theatre. You walk
              away with an action plan whether we work together or not.
            </Lede>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" />
                <a href="tel:0291918049" className="text-foreground hover:text-brand">
                  02 9191 8049
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" />
                <a href="mailto:hello@leadweb.com.au" className="text-foreground hover:text-brand">
                  hello@leadweb.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand mt-0.5" />
                <span className="text-ink-dim">
                  Suite 611, 150 George Street, Parramatta NSW 2150 — serving all of Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand" />
                <span className="text-ink-dim">Mon–Fri · 8:30am–6pm AEST</span>
              </li>
            </ul>
          </div>
          <LeadForm
            config={{
              kind: "general",
              title: "Book a strategy call",
              subtitle: "Real strategist replies within one business day.",
            }}
          />
        </div>
      </Section>
    </>
  );
}
