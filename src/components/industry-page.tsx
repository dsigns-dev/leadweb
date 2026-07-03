import type { IndustryContent } from "@/content/industries";
import { Section, Eyebrow, H1, H2, Lede, CTAButton, CheckList, CTA } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { Link } from "@/components/link";
import { services } from "@/content/services";
import { ArrowRight } from "lucide-react";
import { ImageTiles } from "@/components/image-tiles";
import tradieImg from "@/assets/industries/tradie.jpg";
import dentistsImg from "@/assets/industries/dentists.jpg";
import doctorImg from "@/assets/industries/doctor.jpg";
import financialImg from "@/assets/industries/financial-services.jpg";
import fitnessImg from "@/assets/industries/fitness.jpg";
import lawImg from "@/assets/industries/law-firms.jpg";
import nonProfitImg from "@/assets/industries/non-profits.jpg";
import proServicesImg from "@/assets/industries/professional-services.jpg";
import realEstateImg from "@/assets/industries/real-estates.jpg";
import restaurantImg from "@/assets/industries/restaurant.jpg";
import smallBizImg from "@/assets/industries/small-businesses.jpg";
import beautyImg from "@/assets/industries/beauty-skincare.jpg";

const HERO_IMAGES: Record<string, { src: string }> = {
  "digital-marketing-for-tradie": tradieImg,
  "digital-marketing-for-dentists": dentistsImg,
  "digital-marketing-for-doctor": doctorImg,
  "digital-marketing-for-financial-services": financialImg,
  "digital-marketing-for-fitness": fitnessImg,
  "digital-marketing-for-law-firms": lawImg,
  "digital-marketing-for-non-profits": nonProfitImg,
  "digital-marketing-for-professional-services": proServicesImg,
  "digital-marketing-for-real-estates": realEstateImg,
  "digital-marketing-for-restaurant": restaurantImg,
  "digital-marketing-for-small-businesses": smallBizImg,
  "digital-marketing-for-beauty-skincare": beautyImg,
};

export function IndustryPage({ content }: { content: IndustryContent }) {
  const featured = services.filter((s) =>
    ["seo", "google-ads", "social-media-marketing", "web-design"].includes(s.slug),
  );
  const heroImage = HERO_IMAGES[content.slug];
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: content.name }]} />
      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Industry · {content.name}</Eyebrow>
            <H1>{content.h1}</H1>
            {heroImage ? (
              <div className="mt-8 overflow-hidden rounded-2xl border border-hairline shadow-lg">
                <img
                  src={heroImage.src}
                  alt={`Digital marketing for ${content.name.toLowerCase()} — Leadweb`}
                  width={1600}
                  height={1000}
                  fetchPriority="high"
                  className="h-full w-full object-cover aspect-[16/10]"
                />
              </div>
            ) : null}
            <Lede>{content.lede}</Lede>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact-us">Book a strategy call</CTAButton>
              <CTAButton to="/services" variant="ghost">
                See services
              </CTAButton>
            </div>
          </div>
          <div>
            <LeadForm
              config={{
                kind: "general",
                title: `Marketing for ${content.name.toLowerCase()}`,
                subtitle: "Send a quick brief. A strategist replies within a business day.",
              }}
            />
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <H2>What we do differently for {content.name.toLowerCase()}</H2>
        <div className="mt-8">
          <CheckList items={content.bullets} />
        </div>
      </Section>
      <ImageTiles
        heading={`Why ${content.name.toLowerCase()} choose Leadweb`}
        subheading="One team owning the site, the ads, and the phone — so every lead is tracked, answered, and worth answering."
        tiles={[
          {
            kicker: "Ranked & Ready",
            title: "Traffic that converts",
            body: "SEO and ads tuned around your best-margin service, not vanity keywords.",
            tone: "brand",
          },
          {
            kicker: "Exclusive Leads",
            title: "Real phones ringing",
            body: "Every enquiry routed straight to you — never shared with a competitor.",
            tone: "warm",
          },
          {
            kicker: "Owner-Level Reporting",
            title: "Numbers, not fluff",
            body: "Monthly report on booked jobs and cost per lead — in that order.",
            tone: "green",
          },
        ]}
      />
      <Section className="pt-0">
        <H2>The playbook</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.playbook.map((p) => (
            <div key={p.title} className="rounded-2xl border border-hairline bg-surface/50 p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Channels we run for {content.name.toLowerCase()}</H2>
        <p className="mt-3 max-w-2xl text-ink-dim">
          Every industry gets a different channel mix. These are the ones we lean on most for{" "}
          {content.name.toLowerCase()}.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              className="group flex h-full flex-col justify-between rounded-2xl border border-hairline bg-surface/40 p-5 transition-colors hover:border-brand/60"
            >
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-brand">
                  Digital Marketing
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-dim line-clamp-3">{s.lede}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                See how{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Recent work</H2>
        <p className="mt-3 max-w-2xl text-ink-dim">{content.results}</p>
        <div className="mt-10">
          <PortfolioGrid limit={6} />
        </div>
      </Section>
      <CTA />
    </>
  );
}

export function industryHead(content: IndustryContent, path: string) {
  return {
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      breadcrumbJsonLd([
        { label: "Industries", to: "/industries" },
        { label: content.name, to: path },
      ]),
    ],
  };
}
