import type { Metadata } from "next";
import { Poppins, Barlow, Barlow_Condensed } from "next/font/google";
import "../styles.css";
import { SiteChrome } from "@/components/site-chrome";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leadweb.com.au"),
  title: "Leadweb Marketing I SEO Google Ads Pay Per Lead and More",
  description:
    "Leadweb is a Sydney digital marketing agency for owners who are done chasing leads. Google Ads, SEO, websites and pay-per-lead — measured in booked jobs, not clicks.",
  authors: [{ name: "Leadweb" }],
  openGraph: {
    siteName: "Leadweb Marketing",
    title: "Leadweb Marketing I SEO Google Ads Pay Per Lead and More",
    description:
      "Leadweb is a Sydney digital marketing agency for owners who are done chasing leads. Google Ads, SEO, websites and pay-per-lead — measured in booked jobs, not clicks.",
    type: "website",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Leadweb — Sydney Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@leadweb",
    title: "Leadweb Marketing I SEO Google Ads Pay Per Lead and More",
    description:
      "Leadweb is a Sydney digital marketing agency for owners who are done chasing leads. Google Ads, SEO, websites and pay-per-lead — measured in booked jobs, not clicks.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Leadweb — Sydney Digital Marketing",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXNXWQ8T');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Leadweb",
              url: "https://www.leadweb.com.au/",
              logo: "https://www.leadweb.com.au/wp-content/uploads/2023/04/LEADWEB-WEBSITE-LOGO-1-213x41.png",
              telephone: "+61-2-9191-8049",
              areaServed: "AU",
              sameAs: [
                "https://facebook.com/leadwebmarketing",
                "https://www.linkedin.com/company/leadwebmarketing",
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXNXWQ8T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
