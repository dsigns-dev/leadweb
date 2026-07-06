import { Link } from "@/components/link";
import { categories, tags } from "@/content/blog";
import { coverFor } from "@/content/blog-covers";
import { SmoothImage } from "@/components/smooth-image";

type Props = {
  activeCategory?: string;
  activeTag?: string;
};

export function BlogFilterBar({ activeCategory, activeTag }: Props) {
  const allActive = !activeCategory && !activeTag;
  return (
    <div className="mb-10 space-y-5 rounded-2xl border border-hairline bg-surface/40 p-5">
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-dim">
          Browse by category
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/blog"
            className={
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors " +
              (allActive
                ? "border-brand bg-brand text-brand-foreground"
                : "border-hairline bg-background/60 text-foreground hover:border-brand hover:text-brand")
            }
          >
            All posts
          </Link>
          {categories.map((c) => {
            const active = activeCategory === c.slug;
            return (
              <Link
                key={c.slug}
                to="/blog/category/$slug"
                params={{ slug: c.slug }}
                className={
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors " +
                  (active
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-hairline bg-background/60 text-foreground hover:border-brand hover:text-brand")
                }
              >
                {c.name} <span className="ml-1 opacity-70">({c.count})</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-dim">
          Popular tags
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => {
            const active = activeTag === t.slug;
            return (
              <Link
                key={t.slug}
                to="/blog/tag/$slug"
                params={{ slug: t.slug }}
                className={
                  "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors " +
                  (active
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-hairline bg-background/50 text-ink-dim hover:border-brand/60 hover:text-brand")
                }
              >
                #{t.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PostGrid({
  items,
}: {
  items: Array<{
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    publishedAt: string;
    readMinutes: number;
  }>;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface/40 p-10 text-center text-ink-dim">
        No articles match this filter yet. Check back soon.
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
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
              <span>
                {new Date(p.publishedAt).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{p.readMinutes} min read</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
