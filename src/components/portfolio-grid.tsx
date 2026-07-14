import { portfolio } from "@/content/portfolio";
import { SmoothImage } from "@/components/smooth-image";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? portfolio.slice(0, limit) : portfolio;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <figure
          key={p.name}
          className="group overflow-hidden rounded-2xl border border-hairline bg-surface/50"
        >
          <div className="relative aspect-4/3 overflow-hidden bg-background/40">
            <SmoothImage
              src={p.image}
              alt={`${p.name} — case study`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="p-5">
            <div className="text-xs font-medium uppercase tracking-widest text-brand">
              {p.category}
            </div>
            <div className="mt-1 font-display text-lg font-semibold text-foreground">{p.name}</div>
            <p className="mt-1 text-sm text-ink-dim">{p.outcome}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
