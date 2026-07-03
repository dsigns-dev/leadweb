import leadGen from "@/assets/blog/covers/lead-gen.jpg";
import ppl from "@/assets/blog/covers/ppl-vs-retainer.jpg";
import googleAds from "@/assets/blog/covers/google-ads.jpg";
import seo2026 from "@/assets/blog/covers/seo-2026.jpg";
import strategy from "@/assets/blog/covers/strategy.jpg";
import cpl from "@/assets/blog/covers/cpl-benchmarks.jpg";
import localSeo from "@/assets/blog/covers/local-seo.jpg";
import metaAds from "@/assets/blog/covers/meta-ads.jpg";
import growth from "@/assets/blog/covers/growth.jpg";
import websiteCro from "@/assets/blog/covers/website-cro.jpg";

export const covers: Record<string, { src: string }> = {
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

export function coverFor(slug: string): string {
  return (covers[slug] ?? leadGen).src;
}
