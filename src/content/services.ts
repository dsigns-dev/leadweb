export type ServiceContent = {
  slug: string;
  path: string;
  briefPath: string;
  kicker: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  problem: string[];
  approach: Array<{ title: string; body: string }>;
  deliverables: string[];
  faqs: Array<{ q: string; a: string }>;
  formTitle: string;
  formSubtitle: string;
  /* Optional PPL-specific sections */
  carouselImages?: string[];
  whySection?: {
    heading: string;
    body: string;
    subheading: string;
    items: string[];
  };
  blueSection?: {
    heading: string;
    body: string;
    resultHeading: string;
    resultImages: Array<{ src: string; alt: string }>;
  };
  sectionHeadings?: {
    problem?: string;
    problemSub?: string;
    approach?: string;
    deliverables?: string;
  };
};

export const services: ServiceContent[] = [
  {
    slug: "google-ads",
    path: "/services/google-ads",
    briefPath: "/google-ads-brief",
    kicker: "Google Ads Services",
    title: "Google Ads",
    h1: "Google Ads that stop bleeding budget on tyre-kickers.",
    metaTitle: "Google Ads Services | Leadweb Marketing",
    metaDescription:
      "Google Ads built around booked jobs, not click reports. Weekly optimisation, tight negative lists, landing pages that convert. Sydney-based.",
    lede: "You already know the tactics. What you need is an operator who ships every week, defends your budget from junk clicks, and reports on money — not impressions.",
    problem: [
      "Cost per lead has crept up 30–50% and nobody can explain why.",
      "Half your leads never answer the phone or aren't in your service area.",
      "Your last agency sent glossy monthly reports and made no changes to the account.",
      "You're paying for clicks on keywords you'd never bid on if you saw the search query report.",
    ],
    approach: [
      {
        title: "Week 1 — Account autopsy",
        body: "Full audit of campaigns, keywords, search terms, conversions, and landing pages. You get the findings whether you engage us or not.",
      },
      {
        title: "Week 2 — Restructure",
        body: "SKAGs where they earn their keep, tight match-type control, aggressive negative lists, geo and daypart filters aligned to when your team actually closes.",
      },
      {
        title: "Week 3 — Landing pages",
        body: "Purpose-built pages per campaign — same offer as the ad, above-the-fold form, phone-tap CTA, third-party proof. Built by us, not slapped into a page builder.",
      },
      {
        title: "Ongoing — Weekly ops",
        body: "Bid, budget, and creative changes weekly. Monthly review call on revenue attributed, not vanity metrics.",
      },
    ],
    deliverables: [
      "Google Ads account rebuild or greenfield launch",
      "Conversion tracking that ties clicks to booked jobs",
      "Call tracking with recording and lead-quality scoring",
      "Dedicated landing pages built by us",
      "Weekly optimisation, monthly strategy review",
      "Direct Slack/WhatsApp line to your account manager",
    ],
    faqs: [
      {
        q: "What's the minimum ad spend you'll take on?",
        a: "$2,000/month in media. Below that, Google Ads rarely returns enough data to optimise properly and you'd be better off with SEO or a pay-per-lead arrangement.",
      },
      {
        q: "How long before we see a change in cost per lead?",
        a: "Search terms and negatives move the needle inside 2 weeks. Structural rebuilds and new landing pages typically drop CPL 20–40% inside 60–90 days, depending on how the account was set up.",
      },
      {
        q: "Do you lock us into a 12-month contract?",
        a: "No. Month-to-month after a 90-day initial engagement. If we're not earning our fee, you shouldn't be paying it.",
      },
      {
        q: "Who owns the account?",
        a: "You do. Always. Google Ads, Analytics, tag manager, landing pages — all under your login.",
      },
    ],
    formTitle: "Get a Google Ads audit",
    formSubtitle:
      "Send us your account details. You'll get a written audit with the top 5 things costing you money — whether you hire us or not.",
  },
  {
    slug: "seo",
    path: "/services/seo",
    briefPath: "/seo-brief",
    kicker: "SEO Services",
    title: "SEO",
    h1: "SEO measured in booked jobs, not backlink counts.",
    metaTitle: "Search Engine Optimisation | Leadweb Marketing",
    metaDescription:
      "SEO that moves revenue: technical fixes, category and location pages built for conversion, and outreach that earns links that actually rank.",
    lede: "You've had the agency that shipped a PDF audit and a Semrush login. You need one that ships pages, code, and links every month and reports on the money.",
    problem: [
      "You rank for your brand and nothing else that pays the bills.",
      "Content is written for word count, not for the searcher's next action.",
      "Your site is technically slow and Google Search Console is a wall of red.",
      "You have no idea which keywords actually produce revenue.",
    ],
    approach: [
      {
        title: "1. Revenue-mapped keyword strategy",
        body: "We build the keyword universe around the services that make you money. Everything else is deprioritised, no matter the search volume.",
      },
      {
        title: "2. Technical baseline",
        body: "Core Web Vitals, crawl, indexation, schema, internal linking. Fixed once, monitored monthly.",
      },
      {
        title: "3. Conversion-first content",
        body: "Service, location, and comparison pages designed to convert — not 2,000-word blog posts nobody reads.",
      },
      {
        title: "4. Links you'd be proud to name",
        body: "Digital PR, industry placements, partner links. No PBNs, no comment spam, nothing you'd have to hide.",
      },
    ],
    deliverables: [
      "Technical SEO fixes and ongoing monitoring",
      "Keyword-to-URL map tied to revenue targets",
      "New/rewritten conversion-focused pages monthly",
      "Local SEO for your service area + Google Business Profile",
      "Link acquisition (digital PR + partnerships)",
      "Monthly report on rankings, traffic, and enquiries — in that order of importance",
    ],
    faqs: [
      {
        q: "How long does SEO take to pay off?",
        a: "Local and long-tail wins in 60–120 days. Competitive commercial terms 6–12 months. Anyone quoting faster on competitive terms is either lying or selling you rented traffic.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No, and anyone who does is either lying or planning to game a term nobody searches. We guarantee the work — pages shipped, links earned, technical debt paid down.",
      },
      {
        q: "Will you write the content?",
        a: "Yes. Content is included. Written by humans with industry briefs from you, not generic AI slop.",
      },
      {
        q: "Can you work alongside our existing dev team?",
        a: "Yes — we usually do. We ship spec, tickets, and QA; your team merges. Or we handle it end-to-end.",
      },
    ],
    formTitle: "Get an SEO revenue audit",
    formSubtitle:
      "We'll pull your rankings, traffic, and technical health, then send back the 5 changes with the biggest revenue upside for your business.",
  },
  {
    slug: "web-design",
    path: "/services/web-design",
    briefPath: "/web-design-brief",
    kicker: "Web Design Services",
    title: "Web Design",
    h1: "Websites that look sharp and convert like a landing page.",
    metaTitle: "Web Design & Development Sydney | Leadweb Marketing",
    metaDescription:
      "Fast, conversion-focused websites for service businesses. Built to rank on Google and turn traffic into booked jobs.",
    lede: "A brochure site with a form buried in the footer is a lead leak. We design and build sites that treat every page like a landing page.",
    problem: [
      "Your current site was designed for looks, not for a phone tap.",
      "It's slow, so Google Ads costs more and SEO underperforms.",
      "Editing the smallest thing means a dev ticket and a two-week wait.",
      "You can't tell from analytics which pages actually generate calls.",
    ],
    approach: [
      {
        title: "1. Positioning + IA",
        body: "We start with the offer, the buyer, and the objection — not the homepage hero.",
      },
      {
        title: "2. Conversion-first design",
        body: "Every page has one job, one CTA, one primary action. Trust proof where the eye lands.",
      },
      {
        title: "3. Engineered for speed",
        body: "Modern stack, images optimised, sub-2s LCP as standard. Rebuilds Core Web Vitals into green.",
      },
      {
        title: "4. You edit it yourself",
        body: "Simple CMS for the parts you'll change often. No dev ticket to fix a typo.",
      },
    ],
    deliverables: [
      "Full site design in Figma with copy",
      "Custom-built, fast front end (no bloated page builders)",
      "Analytics + call tracking + conversion goals wired up",
      "SEO fundamentals (schema, sitemaps, meta, redirects)",
      "Editor training + Loom walkthroughs",
      "30 days of post-launch support included",
    ],
    faqs: [
      {
        q: "How long does a build take?",
        a: "4–8 weeks depending on page count and content readiness. We give you a locked timeline before you sign.",
      },
      {
        q: "Do you write the copy?",
        a: "Yes — copywriting is included. We interview you, mine your calls, and write in your voice.",
      },
      {
        q: "What stack?",
        a: "Modern JS (Next / TanStack), headless CMS. Blazing fast, easy to maintain, portable if you ever leave.",
      },
      {
        q: "Do you handle hosting?",
        a: "Yes, on premium edge hosting. Or we deploy to your own hosting — your call.",
      },
    ],
    formTitle: "Start a website brief",
    formSubtitle:
      "Tell us what the site needs to do. We'll come back with a scope, timeline, and fixed price.",
  },
  {
    slug: "social-media-marketing",
    path: "/services/social-media-marketing",
    briefPath: "/social-media-brief",
    kicker: "Social Media Marketing Services",
    title: "Social Media Marketing",
    h1: "Social that supports the sale — not just the vanity metrics.",
    metaTitle: "Social Media Marketing Sydney | Leadweb Marketing",
    metaDescription:
      "Organic + paid social that builds trust, warms your list, and shortens the sales cycle. For service businesses that want more than likes.",
    lede: "You don't need another agency posting reels of your logo animating. You need social that shows up in the buyer's feed while they're deciding, and makes the next call easier.",
    problem: [
      "You've paid for 'engagement' that never turned into a single enquiry.",
      "Your feed looks like every other business in your industry.",
      "You have no content system — posting is whatever the account manager remembers on Friday.",
      "You know paid social should work but haven't found anyone who can make it profitable.",
    ],
    approach: [
      {
        title: "1. Content that answers real buyer questions",
        body: "We interview your sales team and turn the top objections into content.",
      },
      {
        title: "2. Native production",
        body: "Shot on-site or remotely, edited for the platform, not repurposed like an afterthought.",
      },
      {
        title: "3. Paid amplification",
        body: "Meta + LinkedIn ads warming your best prospects and retargeting site visitors that didn't convert.",
      },
      {
        title: "4. Measured on pipeline",
        body: "We track which posts and ads assisted a booked call, not just reach.",
      },
    ],
    deliverables: [
      "Monthly content calendar aligned to your sales cycle",
      "Short-form video production (remote or on-site)",
      "Community management + inbox triage",
      "Meta/Instagram + LinkedIn paid campaigns",
      "Retargeting from your website traffic",
      "Monthly report on assisted conversions and pipeline impact",
    ],
    faqs: [
      {
        q: "Which platforms do you cover?",
        a: "Meta (Facebook/Instagram), LinkedIn, TikTok, YouTube Shorts. We recommend based on where your buyer actually is.",
      },
      {
        q: "Do you produce the content?",
        a: "Yes. On-site shoots monthly in Sydney, or remote batch shoots for interstate clients.",
      },
      {
        q: "Minimum ad spend?",
        a: "$1,500/month across platforms is our floor. Below that the algorithms don't have enough signal.",
      },
      {
        q: "Do we own the content?",
        a: "Yes. All raw footage and edits are yours, delivered monthly.",
      },
    ],
    formTitle: "Start a social brief",
    formSubtitle:
      "Tell us what you're trying to make happen. We'll propose a channel mix, cadence, and cost.",
  },
  {
    slug: "pay-per-lead",
    path: "/services/pay-per-lead",
    briefPath: "/pay-per-lead-service-brief",
    kicker: "Pay Per Lead Service",
    title: "Pay Per Lead",
    h1: "Pay Per Lead Service",
    metaTitle: "Pay Per Lead | Pay for Results Not the Process I Leadweb",
    metaDescription:
      "Pay Per Lead service Australiawide. We build the website, run the campaigns, rank on page one — you only pay for genuine phone calls and enquiries. Exclusive to your business.",
    lede: "Whether your business is B2B, B2C or just looking for a fast track to growth, we understand you and we've got you covered. Pay per lead is an option that can help everybody - stop paying for uncertainty and start only paying for the leads we get to your business!",
    problem: [
      "91% Of Search Never Click Past Page 1",
      "Page#1 is where the money is.",
      "Top ranking websites spend a fortune to get there!",
      "Relying on an agency who can't promise results is like gambling!",
      "We are not like HiPages or Oneflare. Our leads are solely directed to 1 provider.",
      "No long term contracts, just month by month",
      "It is lucrative lead generation system at it's best!",
    ],
    approach: [
      {
        title: "Local Understanding",
        body: "You'll be working with a project manager who has experience in your industry and a team who can deliver results driven graphics and landing pages to build an online presence. We'll ask a series of questions that will help us better to understand the essence of what we want to achieve.",
      },
      {
        title: "Expert Execution",
        body: "We start with the industry research, competitor performance analysis and smart strategy to beat the competition. We display you as the best in the industry and create qualified leads in an ongoing basis. We take all precautionary action to get the result we want!",
      },
      {
        title: "Creative & Technology",
        body: "We hand picked best creatives and technology experts to carefully craft the online performance. We have graphic designers, website developers, copywriters, SEO specialists, Adwords geeks and Social Media queens to get the results we want.",
      },
      {
        title: "Call Tracking & Reporting",
        body: "After our team has worked their magic deigning your new website. Pending approval we will move the it over to your domain from its temporary location. From here you'll begin to see a better user experience with longer screen-time and conversion rate increase.",
      },
      {
        title: "Up-keep",
        body: "Depending on you specifically, as our client, you may have the general knowledge and time to maintain your website. However, Leadweb's service suit's all types of business owners, with an option to do a monthly, or quarterly check in, for routine updates or security maintenance. Happy to guide and support where needed.",
      },
      {
        title: "Results",
        body: "Our team in their initial questionnaire will establish what existing data you may have and what our goal is over the coming months in relation to growth. Once your website is live, our team will advise on how you can continue to analyse growth moving forward, now that you have a fresh look!",
      },
    ],
    deliverables: [
      "We discuss your keywords of interest, look at the competition and plan a strategy to gain top spot on search results",
      "Attack with multiple domains and websites to dominate the search results",
      "You only pay for the results — every lead is tracked and reported",
      "Avoid paying for the process and start only paying for results",
      "Exclusive leads solely directed to 1 provider — not like HiPages or Oneflare",
      "No long term contracts, just month by month",
    ],
    faqs: [
      {
        q: "What is Pay Per Lead Service?",
        a: "It is the quickest way to getting leads to your business. Instead of paying for the process of getting leads (Building website and paying for marketing) , You only Pay Per Lead. A lead is a genuine phone call or online enquiry to related to your business offerings.",
      },
      {
        q: "How does it work?",
        a: "You tell us the industry and types of enquiries you want to target. if we don't have a website which ranks well in your industry, we will build a new one and bring it to the top of the Google search results (Paid and Organic campaigns). We track all incoming leads and report to you every month. You pay only for the leads.",
      },
      {
        q: "How much it costs?",
        a: "With Pay Per lead service, The cost per lead will depend on the industry. If you are in a low competitive industry (floor sanding, pressure cleaning, car mechanic), it will be around $50-$100 per lead. If you are in a medium level competitive industry (home repair, blinds and shutters, accountants, cleaners), cost per lead will be around $100-$200 and if it is a highly competitive industry (real estate, home builders, mortgage brokers, removalists) , cost per lead will be around $200-$500. We usually get started with a deposit of $5K. We get our team to work on the website build and setting up marketing campaigns. Your deposit will be adjusted towards future leads generated.",
      },
      {
        q: "Do you have contract agreement and what if I am not happy with outcome?",
        a: "The beauty about Pay Per Lead service is that, you are not locked into any longterm contract. We will send an agreement for you to review and sign. Once accepted our contract runs month to month unless you cancel in writing. You can cancel the service anytime (30 days notice is required). We will work until we fulfil all the leads we agreed to generate.",
      },
    ],
    formTitle: "Get a pay-per-lead quote",
    formSubtitle:
      "Tell us your industry, service area and the volume you want. We'll come back with a per-lead price and start date.",
    carouselImages: [
      "/pay-per-lead/carousel-1.webp",
      "/pay-per-lead/carousel-2.webp",
      "/pay-per-lead/carousel-3.webp",
      "/pay-per-lead/carousel-4.webp",
      "/pay-per-lead/carousel-5.webp",
      "/pay-per-lead/carousel-6.webp",
      "/pay-per-lead/carousel-7.webp",
      "/pay-per-lead/carousel-8.webp",
    ],
    whySection: {
      heading: "Why Pay Per Lead?",
      body: "To achieve that top spot on a search engine takes expensive marketing that doesn't always work. It takes commitment to digital media platforms like your Website and Social Profiles on Google, Facebook, Instagram and LinkedIn. The slow rise to page one of a search engine can be an expensive, uncertain and tedious process. We're here to fix that for you. Let us remove the risk, the copious amounts of time spent on marketing and the uncertainty of success. Here is our website 'super solution', You only Pay for Lead. No risk! No catch!",
      subheading: "Key Facts of Focus",
      items: [
        "91% Of Search Never Click Past Page 1",
        "Page#1 is where the money is.",
        "Top ranking websites spend a fortune to get there!",
        "Relying on an agency who can't promise results is like gambling!",
        "We are not like HiPages or Oneflare. Our leads are solely directed to 1 provider.",
        "No long term contracts, just month by month",
        "It is lucrative lead generation system at it's best!",
      ],
    },
    blueSection: {
      heading: "So How we do it & What are the choices?",
      body: "We discuss your keywords of interest, look at the competition and plan a strategy to gain top spot on search results and attack with multiple domains and websites. You only pay for the results! If we get leads for you (Obviously each and every lead is tracked and reported ). Essentially, you avoid paying for the process and you can start only paying for results!",
      resultHeading: "Let the Results speak for Us",
      resultImages: [
        { src: "/pay-per-lead/result-rankings.webp", alt: "Leadweb ranking report" },
        { src: "/pay-per-lead/result-calls.webp", alt: "Leadweb call tracking report" },
      ],
    },
    sectionHeadings: {
      approach: "Why Us?",
    },
  },
  {
    slug: "rent-website",
    path: "/services/rent-website",
    briefPath: "/rent-website-brief",
    kicker: "Rent Website Service",
    title: "Rent a Website",
    h1: "A ranked, converting website on a monthly rent — no build cost.",
    metaTitle: "Rent a Website Service | Hire a Top Ranking Website I Leadweb",
    metaDescription:
      "Move into a website we've already built, ranked, and tuned for your industry and postcode. Fixed monthly rent, leads from day one.",
    lede: "We've already done the ranking work in your industry and postcode. Instead of paying $15k to build and 6 months to rank, you move in — and the leads start on day one.",
    problem: [
      "You need leads this month, not in 6.",
      "You don't want to sign off on a website build right now.",
      "You want a predictable monthly cost with predictable lead volume.",
      "You'd rather rent a proven asset than gamble on a new one.",
    ],
    approach: [
      {
        title: "1. We check availability in your postcode",
        body: "Rented sites are exclusive to one business per service area — first in, first served.",
      },
      {
        title: "2. We rebrand the site to your business",
        body: "Your logo, phone, ABN, testimonials — live inside 5 business days.",
      },
      {
        title: "3. Leads route to you",
        body: "Every call and form fill goes straight to your phone / inbox / CRM.",
      },
      {
        title: "4. Fixed monthly rent",
        body: "One invoice per month. No ad spend on top, no per-lead fees.",
      },
    ],
    deliverables: [
      "Ranked site rebranded to your business",
      "All calls and forms delivered to you",
      "Ongoing SEO + technical maintenance included",
      "Exclusive to your postcode / service area",
      "Month-to-month after initial 6-month term",
    ],
    faqs: [
      {
        q: "Which industries do you have sites for?",
        a: "Tradies (electricians, plumbers, tree lopping, removalists, etc.), NDIS providers, dental, and select professional services. Ask for your industry and postcode.",
      },
      {
        q: "What's the monthly rent?",
        a: "Ranges from $499 to $2,500+ /month depending on the industry, postcode competitiveness, and current lead volume of the site.",
      },
      {
        q: "Do I own the site if I stop?",
        a: "No — the site stays with us and is offered to the next operator. You get all the leads generated during your tenancy.",
      },
      {
        q: "Can I move to a custom build later?",
        a: "Yes — many clients start on a rented site, then commission a custom build once revenue is proven.",
      },
    ],
    formTitle: "Check availability in your postcode",
    formSubtitle:
      "Tell us your industry and service area. We'll confirm availability and current lead volume within a business day.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
