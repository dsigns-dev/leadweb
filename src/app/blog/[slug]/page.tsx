import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, postsBySlug } from "@/content/blog";
import { BlogPostView } from "@/components/blog-post";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = postsBySlug[resolvedParams.slug];
  if (!post) {
    return {
      title: "Article not found | Leadweb",
    };
  }
  const url = `/blog/${post.slug}/`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: "Basheer Padanna" }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Basheer Padanna"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostRoute({ params }: Props) {
  const resolvedParams = await params;
  const post = postsBySlug[resolvedParams.slug];
  if (!post) {
    notFound();
  }

  const artJsonLd = articleJsonLd(post);
  const breadcrumb = breadcrumbJsonLd([
    { label: "Blog", to: "/blog" },
    { label: post.title, to: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: artJsonLd.children }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb.children }}
      />
      <BlogPostView post={post} />
    </>
  );
}
