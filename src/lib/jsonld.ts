import { author, posts, type BlogPost } from "@/content/blog";

export type Crumb = { label: string; to?: string };

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

export function breadcrumbJsonLd(items: Crumb[], origin = "https://www.leadweb.com.au") {
  const list = [{ label: "Home", to: "/" }, ...items];
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: list.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: c.to
          ? `${origin}${c.to.endsWith("/") || !c.to.startsWith("/") ? c.to : c.to + "/"}`
          : undefined,
      })),
    }),
  };
}
