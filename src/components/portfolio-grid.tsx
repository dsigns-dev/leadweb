import { portfolio } from "@/content/portfolio";
import { SmoothImage } from "@/components/smooth-image";
import { ShowcaseCard } from "@/components/showcase-card";

const pplShowcaseItems = [
  { name: "Interstate Removalists Sydney", image: "/images/payperlead/1.webp" },
  { name: "Removalists Sydney", image: "/images/payperlead/2.webp" },
  { name: "NDIS Providers Sydney", image: "/images/payperlead/3.webp" },
];

export function PortfolioGrid({ limit, serviceSlug }: { limit?: number; serviceSlug?: string }) {
  let items = portfolio;

  if (serviceSlug === "google-ads") {
    items = [
      {
        name: "Complete Connect",
        category: "Telecommunications",
        image: "/images/google-ads/1.avif",
        outcome:
          "Lead generation campaigns targeting commercial office networks, fiber installation, and data cabling enquiries.",
      },
      {
        name: "GPS Vehicle Inspections",
        category: "Automotive Inspections",
        image: "/images/google-ads/2.avif",
        outcome:
          "Highly optimized Google Search campaigns targeting mobile pre-purchase vehicle checks across Sydney.",
      },
      {
        name: "OSAN Ability",
        category: "NDIS Provider",
        image: "/images/google-ads/3.avif",
        outcome:
          "NDIS participant acquisition and SIL vacancy lead campaigns focused on support needs in Sydney.",
      },
      {
        name: "Removalists Sydney",
        category: "Removalist Services",
        image: "/images/google-ads/4.avif",
        outcome:
          "High-intent local search ads targeting residential moves, office relocations, and packing services.",
      },
      {
        name: "RMB Constructions",
        category: "Custom Home Construction",
        image: "/images/google-ads/5.avif",
        outcome:
          "Premium lead campaigns targeting high-end new home builds, knockdown rebuilds, and duplex developments.",
      },
      {
        name: "Therappy Sydney",
        category: "Allied Health",
        image: "/images/google-ads/6.avif",
        outcome:
          "Search campaigns targeting parents and support coordinators for kids' occupational therapy and speech pathology.",
      },
    ];
  } else if (serviceSlug === "seo") {
    items = [
      {
        name: "GPS Vehicle Inspections",
        category: "Automotive Inspections",
        image: "/images/seo/1.avif",
        outcome:
          "Dominating local search queries for mobile pre-purchase vehicle inspections and mechanic checks across Sydney.",
      },
      {
        name: "OSAN Ability",
        category: "NDIS Provider",
        image: "/images/seo/2.avif",
        outcome:
          "Organic search optimization driving leads for NDIS support services, SIL vacancies, and community participation.",
      },
      {
        name: "ADL99 Cybersecurity",
        category: "Cybersecurity",
        image: "/images/seo/6.avif",
        outcome:
          "B2B search campaigns optimized for defense layer security software, firewall audits, and cyber consulting.",
      },
      {
        name: "Pineapple Funding",
        category: "Finance & Lending",
        image: "/images/seo/3.avif",
        outcome:
          "Search engine optimization driving mortgage broker, business loan, and equipment finance leads.",
      },
      {
        name: "Rococo Decor",
        category: "Painting & Decorating",
        image: "/images/seo/5.avif",
        outcome:
          "Targeted local SEO campaign focusing on high-end residential painting, commercial decorating, and custom finishes.",
      },
    ];
  } else if (serviceSlug === "social-media-marketing") {
    items = [
      {
        name: "GPS Vehicle Inspections",
        category: "Automotive Inspections",
        image: "/images/social-media/gps-inspect-all-makes-models.avif",
        outcome:
          "Social media creatives promoting mobile pre-purchase vehicle inspections across all makes and models.",
      },
      {
        name: "Zee Care",
        category: "NDIS Provider",
        image: "/images/social-media/zee-care-treated-like-person.avif",
        outcome:
          "Person-centred social media campaigns highlighting compassionate NDIS care and individual support.",
      },
      {
        name: "Six Brothers Removalists",
        category: "Removalist Services",
        image: "/images/social-media/six-brothers-backloading-removals.avif",
        outcome:
          "Scroll-stopping social creatives for backloading and interstate removals across Sydney.",
      },
      {
        name: "OSAN Ability",
        category: "NDIS Provider",
        image: "/images/social-media/osan-looking-for-ndis-provider.avif",
        outcome:
          "Engaging social posts driving NDIS participant enquiries for disability support and community services.",
      },
      {
        name: "OSAN Ability",
        category: "NDIS Provider Support",
        image: "/images/social-media/osan-looking-for-ndis-provider.webp",
        outcome:
          "Targeted NDIS Facebook campaigns promoting personalized support plans and group programs.",
      },
      {
        name: "Zee Care",
        category: "NDIS Support Services",
        image: "/images/social-media/zee-care-independence-support.webp",
        outcome:
          "Independence-focused social content promoting daily living and community participation support.",
      },
    ];
  }

  // Pay Per Lead and Rent Website use the scrolling showcase cards
  if (serviceSlug === "pay-per-lead" || serviceSlug === "rent-website") {
    return (
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pplShowcaseItems.map((p) => (
          <ShowcaseCard key={p.image} name={p.name} image={p.image} />
        ))}
      </div>
    );
  }

  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => {
        const isGoogleAds = p.image.includes("/google-ads/");
        const isSeo = p.image.includes("/seo/");
        const isSocial = p.image.includes("/social-media/");
        const isGpsSeo = p.name === "GPS Vehicle Inspections" && isSeo;

        let aspectClass = "aspect-4/3";
        if (isSeo) {
          aspectClass = "aspect-[3/4]";
        } else if (isGoogleAds) {
          aspectClass = "aspect-4/3"; // Lesser card size
        } else if (isSocial) {
          aspectClass = "aspect-square"; // 1:1 for social media creatives
        }

        let imageFitClass = "object-cover";
        if (isGoogleAds) {
          imageFitClass = "object-contain object-top bg-white";
        } else if (isSeo) {
          if (isGpsSeo) {
            imageFitClass = "object-contain object-center bg-white"; // GPS image centered
          } else {
            imageFitClass = "object-contain object-top bg-white";
          }
        } else if (isSocial) {
          imageFitClass = "object-cover object-center bg-white";
        }

        return (
          <figure
            key={p.image}
            className="flex flex-col h-full group overflow-hidden rounded-2xl border border-hairline bg-surface/50"
          >
            {isGoogleAds || isSeo || isSocial ? (
              <div
                className={`relative ${aspectClass} overflow-hidden bg-white w-full border-b border-hairline`}
              >
                <SmoothImage
                  src={p.image}
                  alt={`${p.name} — case study`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`h-full w-full ${imageFitClass} transition-all duration-700 group-hover:scale-105`}
                />
              </div>
            ) : (
              <div className="relative aspect-4/3 overflow-hidden bg-background/40">
                <SmoothImage
                  src={p.image}
                  alt={`${p.name} — case study`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            )}
            <figcaption className="p-5 flex flex-col flex-1">
              <div className="text-xs font-medium uppercase tracking-widest text-brand">
                {p.category}
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-foreground">
                {p.name}
              </div>
              {!isGoogleAds && !isSeo && !isSocial ? null : (
                <p className="mt-1 text-sm text-ink-dim">{p.outcome}</p>
              )}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
