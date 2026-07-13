import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tagBySlug, postsWithTag, tags } from "@/content/blog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { BlogFilterBar, PostGrid } from "@/components/blog-filter-bar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tags.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tag = tagBySlug[resolvedParams.slug];
  if (!tag) {
    return {
      title: "Tag not found | Leadweb",
    };
  }
  const title = `${tag.name} — Blog Tag | Leadweb Marketing`;
  const description = `Every Leadweb article tagged ${tag.name}. Practical growth reads for Australian business owners.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/blog/tag/${tag.slug}/`,
      type: "website",
    },
    alternates: {
      canonical: `/blog/tag/${tag.slug}/`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const resolvedParams = await params;
  const tag = tagBySlug[resolvedParams.slug];
  if (!tag) {
    notFound();
  }
  const items = postsWithTag(resolvedParams.slug);

  const jsonLd = breadcrumbJsonLd([
    { label: "Blog", to: "/blog" },
    { label: `#${tag.name}`, to: `/blog/tag/${tag.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.children }} />
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: `#${tag.name}` }]} />
      <section className="container-page pb-6 pt-6 md:pt-10">
        <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Tag
        </h1>
        <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          #{tag.name}
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink-dim">
          {items.length} article{items.length === 1 ? "" : "s"} tagged {tag.name}.
        </p>
      </section>
      <section className="container-page pb-24">
        <BlogFilterBar activeTag={tag.slug} />
        <PostGrid items={items} />
      </section>
    </>
  );
}
