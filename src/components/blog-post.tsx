"use client";

import { Link } from "@/components/link";
import { ArrowRight, Calendar, Clock, Linkedin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogPost, BlogSection } from "@/content/blog";
import { author, posts, categories, slugifyTaxonomy } from "@/content/blog";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import sidebarPhoto from "@/assets/blog/sidebar-enquiry.webp";
import { coverFor } from "@/content/blog-covers";
import { SmoothImage } from "@/components/smooth-image";

export function BlogPostView({ post }: { post: BlogPost }) {
  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length ? related : fallback;
  const published = new Date(post.publishedAt);
  const publishedLabel = published.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
      <article className="container-page grid gap-12 pb-24 pt-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-ink-dim">
            <Link
              to="/blog/category/$slug"
              params={{ slug: slugifyTaxonomy(post.category) }}
              className="rounded-full bg-brand/10 px-3 py-1 font-semibold uppercase tracking-widest text-brand hover:bg-brand/20"
            >
              {post.category}
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {publishedLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
            </span>
          </div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-dim">{post.excerpt}</p>

          <AuthorInline />

          <div className="mt-8 overflow-hidden rounded-2xl border border-hairline">
            <SmoothImage
              src={coverFor(post.slug)}
              alt={post.title}
              width={1280}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="prose-body mt-10 max-w-none">
            {post.sections.map((s, i) => (
              <SectionRenderer key={i} section={s} />
            ))}
          </div>

          {post.tags && post.tags.length ? (
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-hairline pt-6">
              <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-ink-dim">
                Tags
              </span>
              {post.tags.map((t) => (
                <Link
                  key={t}
                  to="/blog/tag/$slug"
                  params={{ slug: slugifyTaxonomy(t) }}
                  className="rounded-full border border-hairline bg-background/60 px-2.5 py-1 text-[11px] font-medium text-ink-dim hover:border-brand/60 hover:text-brand"
                >
                  #{t}
                </Link>
              ))}
            </div>
          ) : null}

          <AuthorCard />

          {relatedPosts.length ? (
            <div className="mt-16">
              <h2 className="mb-6 font-display text-2xl font-semibold">Keep reading</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to="/blog/$slug"
                    params={{ slug: rp.slug }}
                    className="group overflow-hidden rounded-2xl border border-hairline bg-surface/40 transition-colors hover:border-brand/60"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-surface">
                      <SmoothImage
                        src={coverFor(rp.slug)}
                        alt={rp.title}
                        width={1280}
                        height={800}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                        {rp.category}
                      </div>
                      <div className="mt-2 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-brand">
                        {rp.title}
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-ink-dim">{rp.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <SidebarEnquiry />
          <SidebarArchive currentSlug={post.slug} />
          <SidebarAuthor />
        </aside>
      </article>
    </>
  );
}

function SectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "p":
      return <p className="mb-5 text-[17px] leading-[1.75] text-foreground/90">{section.text}</p>;
    case "h2":
      return (
        <h2
          id={section.id}
          className="mt-12 mb-4 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl"
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 mb-3 font-display text-xl font-semibold text-foreground md:text-2xl">
          {section.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2 pl-1">
          {section.items.map((it) => (
            <li key={it} className="flex gap-3 text-[17px] leading-relaxed text-foreground/90">
              <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered":
      return (
        <ol className="mb-6 space-y-3 pl-0">
          {section.items.map((it, i) => (
            <li key={it} className="flex gap-4 text-[17px] leading-relaxed text-foreground/90">
              <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <span className="pt-0.5">{it}</span>
            </li>
          ))}
        </ol>
      );
    case "stats":
      return (
        <div className="my-8 rounded-2xl border border-brand/25 bg-brand/[0.04] p-6">
          <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-brand">
            {section.heading}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {section.items.map((s) => (
              <div key={s.l} className="rounded-xl bg-background/60 p-4">
                <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-ink-dim">{s.l}</div>
              </div>
            ))}
          </div>
          {section.source ? (
            <p className="mt-4 text-xs text-ink-dim">Source: {section.source}</p>
          ) : null}
        </div>
      );
    case "callout":
      return (
        <div className="my-8 rounded-2xl border-l-4 border-brand bg-surface/60 p-6">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            {section.heading}
          </div>
          <p className="text-[17px] leading-relaxed text-foreground/90">{section.text}</p>
        </div>
      );
    case "quote":
      return (
        <figure className="my-8 rounded-2xl bg-surface/60 p-8 text-center">
          <blockquote className="font-display text-2xl italic leading-snug text-foreground">
            “{section.text}”
          </blockquote>
          {section.cite ? (
            <figcaption className="mt-3 text-sm text-ink-dim">— {section.cite}</figcaption>
          ) : null}
        </figure>
      );
    case "cta":
      return (
        <div className="my-10 overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-brand/10 via-surface/60 to-background p-7">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">
            Ready when you are
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
            {section.heading}
          </h3>
          <p className="mt-2 text-[17px] leading-relaxed text-ink-dim">{section.body}</p>
          <Link
            to={section.to}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
          >
            {section.buttonLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      );
    case "links":
      return (
        <div className="my-8 rounded-2xl border border-hairline bg-surface/40 p-6">
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-dim">
            {section.heading}
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {section.items.map((it) => (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className="group block rounded-xl border border-hairline bg-background/60 p-4 transition-colors hover:border-brand/60"
                >
                  <div className="text-sm font-semibold text-foreground group-hover:text-brand">
                    {it.label}
                  </div>
                  <div className="mt-1 text-xs text-ink-dim">{it.desc}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

function AuthorInline() {
  return (
    <div className="mt-8 flex items-center gap-3 border-y border-hairline py-4">
      <SmoothImage
        src={author.photo}
        alt={author.name}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <div className="text-sm font-semibold text-foreground">{author.name}</div>
        <div className="text-xs text-ink-dim">{author.role}</div>
      </div>
    </div>
  );
}

function AuthorCard() {
  return (
    <div className="mt-14 rounded-2xl border border-hairline bg-surface/50 p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <SmoothImage
          src={author.photo}
          alt={author.name}
          width={112}
          height={112}
          className="h-24 w-24 flex-none rounded-full object-cover md:h-28 md:w-28"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">
            About the author
          </div>
          <div className="mt-1 font-display text-xl font-semibold text-foreground">
            {author.name}
          </div>
          <div className="text-sm text-ink-dim">{author.role}</div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{author.bio}</p>
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
          >
            <Linkedin className="h-3.5 w-3.5" /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function SidebarEnquiry() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-brand/20">
      <SmoothImage
        src={sidebarPhoto.src}
        alt="Australian tradie taking a booking call"
        width={640}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
      <div className="relative flex min-h-[380px] flex-col justify-end p-5 text-white">
        <div className="inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground">
          Free growth audit
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight">
          Want the phone ringing?
        </h3>
        <p className="mt-2 text-sm text-white/85">
          A senior strategist reviews your site and sends back the fix. 24 hours.
        </p>
        <Link
          to="/grow-your-business-form"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/40 transition hover:-translate-y-0.5"
        >
          Get my audit <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function SidebarAuthor() {
  return (
    <div className="mt-6 rounded-2xl border border-hairline bg-background p-5">
      <div className="flex items-center gap-3">
        <SmoothImage
          src={author.photo}
          alt={author.name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">
            Written by
          </div>
          <div className="text-sm font-semibold text-foreground">{author.name}</div>
          <div className="text-xs text-ink-dim">{author.role}</div>
        </div>
      </div>
    </div>
  );
}

function SidebarArchive({ currentSlug }: { currentSlug: string }) {
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const archive = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => p.slug !== currentSlug)
      .filter((p) => (category === "all" ? true : slugifyTaxonomy(p.category) === category))
      .filter((p) =>
        q === ""
          ? true
          : p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q),
      )
      .slice()
      .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
      .slice(0, 8);
  }, [category, query, currentSlug]);

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-background">
      <div className="border-b border-hairline px-5 py-3 text-xs font-semibold uppercase tracking-widest text-brand">
        Past posts
      </div>
      <div className="space-y-3 border-b border-hairline px-5 py-4">
        <label className="relative block">
          <span className="sr-only">Search past posts</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-dim" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full rounded-md border border-hairline bg-surface/40 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-ink-dim focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
              category === "all"
                ? "bg-brand text-white"
                : "bg-brand/10 text-brand hover:bg-brand/20"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(c.slug)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                category === c.slug
                  ? "bg-brand text-white"
                  : "bg-brand/10 text-brand hover:bg-brand/20"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <ul className="divide-y divide-hairline">
        {archive.length === 0 && (
          <li className="px-5 py-6 text-center text-sm text-ink-dim">No matching posts.</li>
        )}
        {archive.map((p) => {
          const d = new Date(p.publishedAt);
          const label = d.toLocaleDateString("en-AU", { month: "short", year: "numeric" });
          return (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="flex gap-3 px-5 py-3 transition-colors hover:bg-surface/60"
              >
                <SmoothImage
                  src={coverFor(p.slug)}
                  alt=""
                  width={64}
                  height={64}
                  className="h-14 w-14 flex-none rounded-md object-cover"
                />
                <div className="min-w-0">
                  <div className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                    {p.title}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-dim">
                    {label}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        to="/blog"
        className="block border-t border-hairline px-5 py-3 text-center text-sm font-semibold text-brand hover:bg-brand/5"
      >
        View all posts →
      </Link>
    </div>
  );
}

export function articleJsonLd(post: BlogPost, origin = "https://www.leadweb.com.au") {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
      },
      publisher: {
        "@type": "Organization",
        name: "Leadweb",
      },
      mainEntityOfPage: `${origin}/blog/${post.slug}/`,
    }),
  };
}

export function blogListJsonLd(origin = "https://www.leadweb.com.au") {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Leadweb Blog",
      url: `${origin}/blog/`,
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${origin}/blog/${p.slug}/`,
        datePublished: p.publishedAt,
        author: { "@type": "Person", name: author.name },
      })),
    }),
  };
}
