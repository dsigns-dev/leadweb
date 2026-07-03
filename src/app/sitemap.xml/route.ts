import { locations } from "@/content/locations";
import { posts, categories, tags } from "@/content/blog";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about-us/", changefreq: "monthly", priority: "0.7" },
  { path: "/contact-us/", changefreq: "monthly", priority: "0.7" },
  { path: "/services/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/google-ads/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/seo/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/web-design/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/social-media-marketing/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/pay-per-lead/", changefreq: "monthly", priority: "0.9" },
  { path: "/services/rent-website/", changefreq: "monthly", priority: "0.9" },
  { path: "/industries/", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/digital-marketing-for-tradie/", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/digital-marketing-for-dentists/", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/digital-marketing-for-doctor/", changefreq: "monthly", priority: "0.8" },
  {
    path: "/industries/digital-marketing-for-financial-services/",
    changefreq: "monthly",
    priority: "0.8",
  },
  { path: "/industries/digital-marketing-for-fitness/", changefreq: "monthly", priority: "0.8" },
  { path: "/industries/digital-marketing-for-law-firms/", changefreq: "monthly", priority: "0.8" },
  {
    path: "/industries/digital-marketing-for-non-profits/",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/industries/digital-marketing-for-professional-services/",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/industries/digital-marketing-for-real-estates/",
    changefreq: "monthly",
    priority: "0.8",
  },
  { path: "/industries/digital-marketing-for-restaurant/", changefreq: "monthly", priority: "0.8" },
  {
    path: "/industries/digital-marketing-for-small-businesses/",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/industries/digital-marketing-for-beauty-skincare/",
    changefreq: "monthly",
    priority: "0.8",
  },
  { path: "/location/", changefreq: "monthly", priority: "0.7" },
  ...locations.map((l) => ({
    path: `/location/${l.slug}/`,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
  { path: "/pay-per-lead-for-tradies/", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/", changefreq: "weekly", priority: "0.8" },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}/`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...categories.map((c) => ({
    path: `/blog/category/${c.slug}/`,
    changefreq: "weekly" as const,
    priority: "0.6",
  })),
  ...tags.map((t) => ({
    path: `/blog/tag/${t.slug}/`,
    changefreq: "weekly" as const,
    priority: "0.5",
  })),
];

export async function GET() {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
