import type { StaticImageData } from "next/image";
import leadGen from "@/assets/blog/covers/lead-gen.webp";
import ppl from "@/assets/blog/covers/ppl-vs-retainer.webp";
import googleAds from "@/assets/blog/covers/google-ads.webp";
import seo2026 from "@/assets/blog/covers/seo-2026.webp";
import strategy from "@/assets/blog/covers/strategy.webp";
import cpl from "@/assets/blog/covers/cpl-benchmarks.webp";
import localSeo from "@/assets/blog/covers/local-seo.webp";
import metaAds from "@/assets/blog/covers/meta-ads.webp";
import growth from "@/assets/blog/covers/growth.webp";
import websiteCro from "@/assets/blog/covers/website-cro.webp";

export const covers: Record<string, StaticImageData> = {
  "lead-generation-for-australian-businesses": leadGen,
  "pay-per-lead-vs-retainer": ppl,
  "google-ads-for-small-business": googleAds,
  "seo-in-2026-ai-overviews-and-eeat": seo2026,
  "digital-marketing-strategy-that-books-jobs": strategy,
  "cost-per-lead-benchmarks-australia": cpl,
  "local-seo-for-tradies": localSeo,
  "meta-ads-for-service-businesses": metaAds,
  "growth-marketing-vs-digital-marketing": growth,
  "why-your-website-isnt-converting": websiteCro,
};

export function coverFor(slug: string): StaticImageData {
  return covers[slug] ?? leadGen;
}
