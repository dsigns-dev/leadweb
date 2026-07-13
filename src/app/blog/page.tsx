import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "@/content/blog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogListJsonLd } from "@/lib/jsonld";
import { BlogFilterBar } from "@/components/blog-filter-bar";
import { coverFor } from "@/content/blog-covers";
import { Link } from "@/components/link";
import { SmoothImage } from "@/components/smooth-image";

export const metadata: Metadata = {
  title: "Blog — Lead Generation, Google Ads & SEO Insights | Leadweb Marketing",
  description:
    "No-fluff guides on lead generation, pay per lead, Google Ads, SEO and digital marketing for Australian business owners. Written by Basheer Padanna.",
  openGraph: {
    siteName: "Leadweb",
    title: "Leadweb Blog — Lead Generation & Digital Marketing",
    description:
      "Practical, data-backed articles on lead generation, Google Ads, SEO and digital marketing for Australian owners.",
    type: "website",
    url: "/blog/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;
  const listLd = blogListJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: listLd.children }} />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="container-page pb-8 pt-6 md:pt-10">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
          Leadweb Blog
        </div>
        <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Straight-talking growth reads for Australian business owners.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-dim md:text-xl">
          Lead generation, pay per lead, Google Ads, SEO and digital marketing — written by
          operators who run these campaigns every week.
        </p>
      </section>

      {featured && (
        <section className="container-page pb-8">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid gap-8 rounded-3xl border border-hairline bg-surface/50 p-6 transition-colors hover:border-brand/50 md:grid-cols-2 md:p-10"
          >
            <div className="order-2 md:order-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                Featured · {featured.category}
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground group-hover:text-brand md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base text-ink-dim md:text-lg">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-ink-dim">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(featured.publishedAt).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readMinutes} min read
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Read the article{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl md:order-2">
              <SmoothImage
                src={coverFor(featured.slug)}
                alt={featured.title}
                width={1280}
                height={800}
                priority
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        </section>
      )}

      <section className="container-page pb-24">
        <BlogFilterBar />
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Latest articles</h2>
          <span className="text-xs text-ink-dim">{posts.length} articles</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/40 transition-colors hover:border-brand/60"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <SmoothImage
                  src={coverFor(p.slug)}
                  alt={p.title}
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-dim">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-[11px] text-ink-dim">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(p.publishedAt).toLocaleDateString("en-AU", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.readMinutes} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
