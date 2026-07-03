import type { Metadata } from "next";
import { Section, Eyebrow, H1, H2, Lede, StatRow, CTA } from "@/components/primitives";

export const metadata: Metadata = {
  title: "About Leadweb — Sydney Digital Marketing Agency",
  description:
    "Sydney-based digital marketing agency. Owner-operated. Twelve years running paid, SEO and web for Australian businesses that measure success in booked jobs.",
  openGraph: {
    title: "About Leadweb — Sydney Digital Marketing Agency",
    description:
      "Owner-operated Sydney agency built for business owners who measure the P&L, not the impressions.",
    url: "/about-us/",
  },
  alternates: {
    canonical: "/about-us/",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24">
        <Eyebrow>About Leadweb</Eyebrow>
        <H1>
          Owner-operated. Sydney-based. Built for people who read the P&amp;L, not the impressions
          report.
        </H1>
        <Lede>
          We started Leadweb because the agency model was broken. Retainers padded with account
          managers who didn't touch the account. Reports written to justify the fee, not to change
          the business. We do the opposite.
        </Lede>
        <p className="mt-6 max-w-3xl text-sm text-ink-dim">
          Leadweb Marketing is a division of{" "}
          <strong className="text-foreground">DSIGNS Australia Pty Limited</strong>, specialising in
          digital marketing and lead generation for Australian business owners.
        </p>
      </Section>

      <Section className="pt-0">
        <StatRow
          stats={[
            { v: "2013", l: "Founded in Sydney" },
            { v: "80+", l: "Active clients" },
            { v: "$18M+", l: "Managed ad spend" },
            { v: "12", l: "Team — no offshore account handling" },
          ]}
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <H2>What we believe.</H2>
          <div className="space-y-6 text-ink-dim">
            <p>
              <strong className="text-foreground">Marketing is an operational discipline.</strong>{" "}
              Weekly shipping beats quarterly strategy.
            </p>
            <p>
              <strong className="text-foreground">No lock-in on your accounts.</strong> When we run
              growth work on your own ads, analytics and site, it stays under your login. Our Pay
              Per Lead and Rent Website services run on Leadweb infrastructure — you rent the
              results, not the plumbing — and that's spelt out upfront.
            </p>
            <p>
              <strong className="text-foreground">
                If we're not earning our fee, you shouldn't be paying it.
              </strong>{" "}
              That's why we're month-to-month after the initial 90 days.
            </p>
            <p>
              <strong className="text-foreground">
                Reports should help you decide, not admire.
              </strong>{" "}
              Leads in. Cost per lead. Revenue attributed. Everything else is noise.
            </p>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
