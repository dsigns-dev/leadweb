import type { ServiceContent } from "@/content/services";
import { Section, H2, Lede, CTAButton, CheckList, FAQ, CTA } from "@/components/primitives";
import { LeadForm } from "@/components/lead-form";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { Link } from "@/components/link";
import { services } from "@/content/services";
import { ArrowRight, Check } from "lucide-react";
import { ImageTiles } from "@/components/image-tiles";
import Image from "next/image";
import { PPLCarousel } from "@/components/ppl-carousel";

export function ServicePage({ content }: { content: ServiceContent }) {
  const related = services.filter((s) => s.slug !== content.slug).slice(0, 3);
  const isPPL = !!(content.carouselImages || content.whySection || content.blueSection);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Digital Marketing", to: "/services" }, { label: content.title }]}
      />
      <Section className="pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {content.kicker}
            </h1>
            <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {content.h1}
            </p>
            <Lede>{content.lede}</Lede>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={content.briefPath}>Start a brief</CTAButton>
              <CTAButton to="/contact-us" variant="ghost">
                Talk to a strategist
              </CTAButton>
            </div>
          </div>
          <div>
            <LeadForm
              config={{
                kind: content.slug as never,
                title: content.formTitle,
                subtitle: content.formSubtitle,
                buttonLabel: "Send brief",
              }}
            />
          </div>
        </div>
      </Section>

      {/* PPL: Carousel + Why Pay Per Lead + Key Facts */}
      {content.carouselImages && content.whySection && (
        <Section className="pt-0">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
            <PPLCarousel images={content.carouselImages} />

            <div className="grid gap-6">
              <div className="rounded-2xl border border-hairline bg-surface/50 p-6 md:p-8">
                <H2>{content.whySection.heading}</H2>
                <p className="mt-4 text-lg leading-8 text-ink-dim md:text-xl">
                  {content.whySection.body.includes("You only Pay for Lead") ? (
                    <>
                      {content.whySection.body.split("You only Pay for Lead.")[0]}
                      <strong>You only Pay for Lead. No risk! No catch!</strong>
                    </>
                  ) : (
                    content.whySection.body
                  )}
                </p>
              </div>
              <div className="rounded-2xl border border-hairline bg-surface/50 p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-brand md:text-3xl">
                  {content.whySection.subheading}
                </h3>
                <ul className="mt-5 space-y-3 text-lg text-ink">
                  {content.whySection.items.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <Check className="mt-1 h-5 w-5 flex-none text-brand" />
                      <span>
                        {fact.includes("HiPages") ? (
                          <>
                            We are not like <strong>HiPages</strong> or <strong>Oneflare</strong>.
                            Our leads are solely directed to 1 provider.
                          </>
                        ) : (
                          fact
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* PPL: Blue "So How we do it" section + Result images */}
      {content.blueSection && (
        <section className="bg-brand text-white">
          <div className="container-page py-16 text-center md:py-24">
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              {content.blueSection.heading}
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/95 md:text-3xl">
              {content.blueSection.body}
            </p>

            <h2 className="mt-20 font-display text-4xl font-semibold leading-tight md:text-6xl">
              {content.blueSection.resultHeading}
            </h2>
            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
              {content.blueSection.resultImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isPPL && (
        <Section className="pt-0">
          <H2>Sound familiar?</H2>
          <p className="mt-3 max-w-2xl text-ink-dim">The failure modes we see week after week:</p>
          <div className="mt-8">
            <CheckList items={content.problem} variant="danger" />
          </div>
        </Section>
      )}
      <Section className="pt-0">
        <H2 className={isPPL ? "text-center" : ""}>
          {content.sectionHeadings?.approach ?? "How we run it"}
        </H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.approach.map((a, i) => (
            <div key={a.title} className="rounded-2xl border border-hairline bg-surface/50 p-6">
              {!isPPL && (
                <div className="text-xs font-medium uppercase tracking-widest text-brand">
                  Step {i + 1}
                </div>
              )}
              <h3 className={`${isPPL ? "" : "mt-1 "}font-display text-xl font-semibold`}>
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-ink-dim">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>
      {!isPPL && (
        <Section className="pt-0">
          <H2>{content.sectionHeadings?.deliverables ?? "What you get"}</H2>
          <div className="mt-8">
            <CheckList items={content.deliverables} variant="success" />
          </div>
        </Section>
      )}
      <ImageTiles
        heading={`Why Australian businesses choose Leadweb for ${content.title}`}
        subheading="A senior operator on your account, weekly work in the platform, and reporting that ties every dollar to booked revenue."
        tiles={[
          {
            kicker: "Always Optimising",
            title: "Weekly work in the account",
            body: "Bids, creative, landing pages and offers — tuned every week, not once a quarter.",
            tone: "brand",
          },
          {
            kicker: "Quick Action",
            title: "A real person on the line",
            body: "Direct access to your account manager on Slack or WhatsApp. No ticket queues.",
            tone: "warm",
          },
          {
            kicker: "Straight Numbers",
            title: "Reporting tied to booked jobs",
            body: "Every dollar tracked to leads and revenue — no vanity metrics, no fluff.",
            tone: "green",
          },
        ]}
      />
      <Section className="pt-0">
        <H2>Recent work</H2>
        <div className="mt-10">
          <PortfolioGrid limit={6} serviceSlug={content.slug} />
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Questions we get asked</H2>
        <div className="mt-8">
          <FAQ items={content.faqs} />
        </div>
      </Section>
      <Section className="pt-0">
        <H2>Explore other services</H2>
        <p className="mt-3 max-w-2xl text-ink-dim">
          Everything under our Digital Marketing hub — pick the channel that matches where you're
          stuck.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={r.path}
              className="group flex h-full flex-col justify-between rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors hover:border-brand/60"
            >
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-brand">
                  {r.kicker}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-dim">{r.lede}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

export function serviceHead(content: ServiceContent) {
  return {
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: content.path + "/" },
    ],
    links: [{ rel: "canonical", href: content.path + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: content.title,
          provider: { "@type": "Organization", name: "Leadweb" },
          areaServed: "AU",
          description: content.metaDescription,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      breadcrumbJsonLd([
        { label: "Digital Marketing", to: "/services" },
        { label: content.title, to: content.path },
      ]),
    ],
  };
}
