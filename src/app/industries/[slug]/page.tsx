import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/industry-page";
import { getIndustry, industries } from "@/content/industries";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const content = getIndustry(resolvedParams.slug);
  if (!content) {
    return {
      title: "Industry not found | Leadweb",
    };
  }
  const path = `/industries/${content.slug}/`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: path,
      type: "website",
    },
    alternates: {
      canonical: path,
    },
  };
}

export default async function IndustrySlugPage({ params }: Props) {
  const resolvedParams = await params;
  const content = getIndustry(resolvedParams.slug);
  if (!content) {
    notFound();
  }

  const path = `/industries/${content.slug}/`;
  const breadcrumbs = breadcrumbJsonLd([
    { label: "Industries", to: "/industries" },
    { label: content.name, to: path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbs.children }}
      />
      <IndustryPage content={content} />
    </>
  );
}
