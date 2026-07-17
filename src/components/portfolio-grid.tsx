import { portfolio } from "@/content/portfolio";
import { SmoothImage } from "@/components/smooth-image";

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
  }

  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => {
        const isGoogleAds = p.image.includes("/google-ads/");
        const isSeo = p.image.includes("/seo/");
        const isGpsSeo = p.name === "GPS Vehicle Inspections" && isSeo;

        let aspectClass = "aspect-4/3";
        if (isSeo) {
          aspectClass = "aspect-[3/4]";
        } else if (isGoogleAds) {
          aspectClass = "aspect-4/3"; // Lesser card size
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
        }

        return (
          <figure
            key={p.name}
            className="flex flex-col h-full group overflow-hidden rounded-2xl border border-hairline bg-surface/50"
          >
            {isGoogleAds || isSeo ? (
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
              <p className="mt-1 text-sm text-ink-dim">{p.outcome}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
