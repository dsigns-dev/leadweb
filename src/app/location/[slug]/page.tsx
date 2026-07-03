import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage, locationHead } from "@/components/location-page";
import { getLocation, locations } from "@/content/locations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const content = getLocation(resolvedParams.slug);
  if (!content) {
    return {
      title: "Location not found | Leadweb",
    };
  }
  const headData = locationHead(content, `/location/${content.slug}/`);
  const meta: Record<string, string> = {};

  headData.meta.forEach((m: Record<string, string | undefined>) => {
    if (m.title) meta.title = m.title;
    if (m.name === "description" && m.content) meta.description = m.content;
  });

  const canonical = headData.links?.[0]?.href || `/location/${content.slug}/`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
    },
    alternates: {
      canonical,
    },
  };
}

export default async function LocationSlugPage({ params }: Props) {
  const resolvedParams = await params;
  const content = getLocation(resolvedParams.slug);
  if (!content) {
    notFound();
  }
  return <LocationPage content={content} />;
}
