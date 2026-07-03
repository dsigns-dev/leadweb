import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { getService, services } from "@/content/services";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const content = getService(resolvedParams.slug);
  if (!content) {
    return {
      title: "Service not found | Leadweb",
    };
  }
  const canonical = content.path.endsWith("/") ? content.path : `${content.path}/`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonical,
      type: "website",
    },
    alternates: {
      canonical,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const resolvedParams = await params;
  const content = getService(resolvedParams.slug);
  if (!content) {
    notFound();
  }

  // Generate schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    provider: { "@type": "Organization", name: "Leadweb" },
    areaServed: "AU",
    description: content.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbs = breadcrumbJsonLd([
    { label: "Digital Marketing", to: "/services" },
    { label: content.title, to: content.path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbs.children }}
      />
      <ServicePage content={content} />
    </>
  );
}
