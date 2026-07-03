import { Section, Eyebrow, H1, Lede } from "@/components/primitives";
import { LeadForm, type LeadFormConfig } from "@/components/lead-form";

export function BriefPage({
  kicker,
  h1,
  lede,
  form,
}: {
  kicker: string;
  h1: string;
  lede: string;
  form: LeadFormConfig;
}) {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <Eyebrow>{kicker}</Eyebrow>
          <H1>{h1}</H1>
          <Lede>{lede}</Lede>
          <ul className="mt-8 space-y-3 text-sm text-ink-dim">
            <li>A strategist reviews every brief personally.</li>
            <li>Reply within one business day.</li>
            <li>We tell you if we're not a fit — no upsell theatre.</li>
          </ul>
        </div>
        <div>
          <LeadForm config={form} />
        </div>
      </div>
    </Section>
  );
}

export function briefHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
