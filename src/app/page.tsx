import type { Metadata } from "next";
import { Section, Eyebrow, H2, CTAButton, StatRow, CTA } from "@/components/primitives";
import { ServiceCards } from "@/components/service-cards";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ImageTiles } from "@/components/image-tiles";
import { industries } from "@/content/industries";
import { Link } from "@/components/link";
import { SmoothImage } from "@/components/smooth-image";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.webp";

export const metadata: Metadata = {
  title: "Leadweb Marketing I SEO Google Ads Pay Per Lead and More",
  description:
    "Leadweb is a Sydney digital marketing agency for owners who are done chasing leads. Google Ads, SEO, websites and pay-per-lead — measured in booked jobs, not clicks.",
  openGraph: {
    title: "Leadweb Marketing I SEO Google Ads Pay Per Lead and More",
    description:
      "Sydney digital marketing agency. Google Ads, SEO, websites and pay-per-lead — measured in booked jobs, not clicks.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0f1a] text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(202 98% 40% / 0.35) 0%, transparent 55%), radial-gradient(circle at 85% 80%, hsl(202 98% 45% / 0.25) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h1 className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                Sydney digital marketing agency
              </h1>
              <p className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
                Your business isn't broken.
                <br />
                <span className="text-brand">Your lead flow is.</span>
              </p>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                You've run the ads. You've paid for the SEO. You've had the flashy website built.
                The phone still doesn't ring the way it should. We fix that — with weekly work,
                transparent numbers, and reporting a business owner can actually use.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTAButton to="/contact-us">Book a 20-min strategy call</CTAButton>
                <CTAButton to="/services" variant="ghost-white">
                  See how we work
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ borderRadius: "48% 12% 42% 12% / 18% 42% 18% 42%" }}
              >
                <SmoothImage
                  src={heroImage.src}
                  alt="Australian tradies on a job site — the kind of business Leadweb generates leads for"
                  width={1600}
                  height={1280}
                  priority
                  className="h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a0f1a]/60 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-background"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,80 Q720,0 1440,80 Z" fill="currentColor" />
        </svg>
      </section>

      <Section className="pt-8">
        <StatRow
          stats={[
            { v: "12+ yrs", l: "Running accounts for Australian owners" },
            { v: "80+", l: "Active retained clients across AU" },
            { v: "$18M+", l: "In managed ad spend to date" },
            { v: "No lock-in", l: "After the initial 90-day term" },
          ]}
        />
      </Section>

      {/* Services */}
      <Section className="pt-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <H2>Six ways we get owners more of the right leads.</H2>
          </div>
          <Link to="/services" className="text-sm font-medium text-brand hover:underline">
            All services →
          </Link>
        </div>
        <ServiceCards />
      </Section>

      <ImageTiles
        heading="Why Australian owners choose Leadweb"
        subheading="One team owning the site, the ads, and the phone. Weekly work, transparent numbers, no lock-in after the first 90 days."
        tiles={[
          {
            kicker: "Ranked & Ready",
            title: "Traffic that converts",
            body: "SEO and ads tuned to the searches that actually book jobs — not vanity keywords.",
            tone: "brand",
          },
          {
            kicker: "Quick Action",
            title: "Real phones ringing",
            body: "Exclusive leads sent straight to your team. Never shared, never resold.",
            tone: "warm",
          },
          {
            kicker: "Owner Reporting",
            title: "Numbers, not fluff",
            body: "Monthly report on booked jobs and cost per lead — in that order of importance.",
            tone: "green",
          },
        ]}
      />

      {/* Portfolio */}
      <Section className="pt-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <H2>Real clients. Real search results. Real phones ringing.</H2>
          </div>
        </div>
        <PortfolioGrid />
      </Section>

      {/* Industries */}
      <Section className="pt-4">
        <div className="mb-10">
          <Eyebrow>Industries</Eyebrow>
          <H2>We know these industries because we've worked in them.</H2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to={`/industries/${i.slug}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-hairline bg-surface/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-sm"
            >
              <div>
                <div className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                  {i.name}
                </div>
                <div className="mt-1 text-xs text-ink-dim">Digital marketing playbook</div>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm transition-all duration-300 group-hover:scale-110">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>The way we work</Eyebrow>
            <H2>Weekly work. Monthly reviews. Reports that fit on one screen.</H2>
          </div>
          <div className="space-y-6">
            {[
              {
                t: "You get a strategist, not an account handler",
                b: "The person on your calls is the person changing your ads and shipping your pages.",
              },
              {
                t: "We ship every week",
                b: "Fortnightly, at minimum, you see a changelog of what we did and why. No dead months.",
              },
              {
                t: "Reports a business owner can read",
                b: "Leads in, cost per lead, revenue. Not screenshots of impressions.",
              },
              {
                t: "No lock-in, no lost work",
                b: "Month-to-month after the first 90 days. Whatever we build for you on your accounts stays with you.",
              },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-brand/60 pl-5">
                <h3 className="font-display text-lg font-semibold">{x.t}</h3>
                <p className="mt-1 text-sm text-ink-dim">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title="You already know what needs fixing. Let's fix it."
        body="Book a 20-minute strategy call. No pitch deck, no discovery-call theatre — just a conversation about where your lead flow is leaking and the fastest way to plug it."
      />
    </>
  );
}
