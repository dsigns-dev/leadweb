import { Link } from "@/components/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6 md:pt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-dim">
        <li className="flex items-center gap-1.5">
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="transition-colors hover:text-brand">
                {c.label}
              </Link>
            ) : (
              <span
                aria-current={i === items.length - 1 ? "page" : undefined}
                className="text-foreground"
              >
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
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
