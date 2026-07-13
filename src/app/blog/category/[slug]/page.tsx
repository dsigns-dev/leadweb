import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryBySlug, postsInCategory, categories } from "@/content/blog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { BlogFilterBar, PostGrid } from "@/components/blog-filter-bar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const cat = categoryBySlug[resolvedParams.slug];
  if (!cat) {
    return {
      title: "Category not found | Leadweb",
    };
  }
  const title = `${cat.name} — Blog Articles | Leadweb Marketing`;
  const description = `Read every Leadweb article filed under ${cat.name}. Practical, data-backed guides for Australian business owners.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/blog/category/${cat.slug}/`,
      type: "website",
    },
    alternates: {
      canonical: `/blog/category/${cat.slug}/`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = categoryBySlug[resolvedParams.slug];
  if (!category) {
    notFound();
  }
  const items = postsInCategory(resolvedParams.slug);

  const jsonLd = breadcrumbJsonLd([
    { label: "Blog", to: "/blog" },
    { label: category.name, to: `/blog/category/${category.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd.children }} />
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: category.name }]} />
      <section className="container-page pb-6 pt-6 md:pt-10">
        <h1 className="mb-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-dim">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Category
        </h1>
        <p className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
          {category.name}
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink-dim">
          {items.length} article{items.length === 1 ? "" : "s"} filed under {category.name}.
        </p>
      </section>
      <section className="container-page pb-24">
        <BlogFilterBar activeCategory={category.slug} />
        <PostGrid items={items} />
      </section>
    </>
  );
}
