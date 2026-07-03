export type IndustryContent = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  bullets: string[];
  playbook: Array<{ title: string; body: string }>;
  results: string;
};

export const industries: IndustryContent[] = [
  {
    slug: "digital-marketing-for-tradie",
    name: "Tradies",
    h1: "Digital marketing for tradies who want the phone ringing before smoko.",
    metaTitle: "Digital Marketing for Tradies Sydney | Leadweb",
    metaDescription:
      "Google Ads, SEO and pay-per-lead built for electricians, plumbers, builders, tree loppers and removalists. Booked jobs, not clicks.",
    lede: "You're one of the best on the tools in your postcode. That won't matter until the phone rings. We run the marketing so you can run the crew.",
    bullets: [
      "Google Local Service Ads set up properly and defended weekly",
      "Service + suburb pages that rank without keyword stuffing",
      "Call tracking so you know which quotes came from where",
      "Pay-per-lead available if you'd rather skip the retainer entirely",
    ],
    playbook: [
      {
        title: "Own your suburbs",
        body: "One page per service × suburb combo — built to convert, not to pad word count.",
      },
      {
        title: "Google Business Profile that actually books",
        body: "Reviews strategy, service categories, photo pipeline, weekly posts. Not a set-and-forget.",
      },
      {
        title: "Ads that survive the news cycle",
        body: "Search + LSA + retargeting stack, negative-keyword lists that block junk work you don't want to quote on.",
      },
      {
        title: "Report on jobs, not clicks",
        body: "Weekly summary: leads in, quotes sent, jobs won. Nothing else matters.",
      },
    ],
    results:
      "Tree lopping, excavation, removalist, bricklaying, awnings, blinds and more — see the portfolio below.",
  },
  {
    slug: "digital-marketing-for-dentists",
    name: "Dentists",
    h1: "Marketing for dental practices that fills the chair — not the CRM.",
    metaTitle: "Digital Marketing for Dentists Sydney | Leadweb",
    metaDescription:
      "SEO, Google Ads and websites for dental practices. New patient enquiries measured against chair utilisation, not vanity metrics.",
    lede: "New patient acquisition costs are up across the industry. We build channels that lower it — and keep it low.",
    bullets: [
      "New-patient landing pages per treatment (implants, Invisalign, cosmetic)",
      "Local SEO that ranks you in the map pack for every suburb you serve",
      "Meta ads that fill quieter days of the week",
      "AHPRA-compliant copy and creative",
    ],
    playbook: [
      {
        title: "Treatment-led SEO",
        body: "Ranking pages built per treatment, not one bloated 'services' page.",
      },
      {
        title: "Reviews as a growth channel",
        body: "Automated post-visit review flow that lifts your Google rating and map-pack CTR.",
      },
      {
        title: "Ads that respect the funnel",
        body: "Different landing pages for emergency vs cosmetic vs implants — same offer as the ad, always.",
      },
      {
        title: "Track down to the chair",
        body: "New-patient enquiries tagged by source, matched to bookings and utilisation.",
      },
    ],
    results: "Suitable for solo practices through to multi-location groups.",
  },
  {
    slug: "digital-marketing-for-doctor",
    name: "Doctors & Clinics",
    h1: "Patient acquisition for GPs, allied health and specialist clinics.",
    metaTitle: "Digital Marketing for Doctors & Clinics | Leadweb",
    metaDescription:
      "Compliant, effective SEO and paid media for medical clinics and allied health providers. New patient bookings, measured properly.",
    lede: "Medical marketing is a compliance-heavy discipline. We run channels that grow patient bookings without putting your registration at risk.",
    bullets: [
      "AHPRA-aware copy review on every asset",
      "HotDoc / HealthEngine integration for tracked bookings",
      "SEO for services and conditions",
      "Local pack + reviews strategy",
    ],
    playbook: [
      {
        title: "Condition + treatment pages",
        body: "Written by people who understand both the medicine and the buyer intent.",
      },
      {
        title: "Booking-first UX",
        body: "One tap from search result to booking — no interstitials, no forms.",
      },
      {
        title: "Reviews without pressure tactics",
        body: "Compliant workflows that grow your rating without the coercive prompts AHPRA flags.",
      },
    ],
    results: "GP clinics, physio, chiro, osteo, psychology, specialist rooms.",
  },
  {
    slug: "digital-marketing-for-financial-services",
    name: "Financial Services",
    h1: "Digital marketing for brokers, advisers and financial services businesses.",
    metaTitle: "Digital Marketing for Financial Services | Leadweb",
    metaDescription:
      "Compliant, high-intent lead generation for mortgage brokers, financial advisers and fintech. Qualified enquiries, not lead-gen junk.",
    lede: "In financial services the wrong lead costs more than no lead — it costs an hour of your best adviser. We build channels that surface intent, not just clicks.",
    bullets: [
      "Pre-qualification built into every form",
      "SEO for high-intent service and location terms",
      "Google Ads with tight audience + geo controls",
      "Content built for authority and search",
    ],
    playbook: [
      {
        title: "Qualify before the call",
        body: "Multi-step forms that filter out non-fits before they hit your calendar.",
      },
      {
        title: "Rank for the money terms",
        body: "'best mortgage broker [suburb]', 'refinance [suburb]', condition-specific advice queries.",
      },
      {
        title: "Nurture that respects the buyer",
        body: "Email sequences that inform, then invite — no boiler-room sequences.",
      },
    ],
    results: "Mortgage brokers, financial advisers, accountants, insurance.",
  },
  {
    slug: "digital-marketing-for-fitness",
    name: "Fitness & Gyms",
    h1: "Fill your gym floor with members who actually stay.",
    metaTitle: "Digital Marketing for Gyms & Fitness | Leadweb",
    metaDescription:
      "Marketing for gyms, PT studios and boutique fitness. Trial-to-member conversion beats cheap leads, every time.",
    lede: "A cheap trial lead who cancels in week 3 costs you more than a $200 CPL that stays for 18 months. We build funnels that optimise for LTV.",
    bullets: [
      "Trial funnels that pre-qualify",
      "Onboarding built for retention",
      "Local SEO for suburb + modality (F45, HIIT, yoga, reformer)",
      "Meta + Google ads tuned to LTV, not CPL",
    ],
    playbook: [
      {
        title: "Trial that filters",
        body: "Small commitment upfront (form + card details) filters window-shoppers from serious enquiries.",
      },
      {
        title: "Onboarding as marketing",
        body: "First 14 days of the member journey mapped and automated — the highest-ROI marketing spend you'll make.",
      },
      {
        title: "Community content",
        body: "Native content shot in the studio — the fastest trust builder in fitness.",
      },
    ],
    results: "F45, CrossFit, boutique studios, reformer pilates, PT businesses.",
  },
  {
    slug: "digital-marketing-for-law-firms",
    name: "Law Firms",
    h1: "Marketing for law firms that brings in matters, not just enquiries.",
    metaTitle: "Digital Marketing for Law Firms | Leadweb",
    metaDescription:
      "SEO, Google Ads and content marketing for family, criminal, commercial and personal injury firms. Qualified matters, tracked to intake.",
    lede: "A tyre-kicker enquiry costs a partner's hour. We build channels that produce matters — not enquiries that go nowhere.",
    bullets: [
      "Practice-area + suburb SEO",
      "Content authority built from your senior lawyers' expertise",
      "Google Ads with intent qualifiers",
      "Intake tracking end-to-end",
    ],
    playbook: [
      {
        title: "Rank on practice + location",
        body: "'family lawyer parramatta', 'commercial litigation sydney' — the queries that book consultations.",
      },
      {
        title: "Author-driven content",
        body: "Real bylines, real bios, real E-E-A-T. Not generic legal blog fluff.",
      },
      {
        title: "Qualify at the form",
        body: "Multi-step intake that saves paralegal time and books straight into your calendar.",
      },
    ],
    results: "Family, criminal, commercial, personal injury, immigration.",
  },
  {
    slug: "digital-marketing-for-non-profits",
    name: "Non-Profits",
    h1: "Marketing for non-profits that grows donations and awareness.",
    metaTitle: "Digital Marketing for Non-Profits | Leadweb",
    metaDescription:
      "Google Ad Grants, SEO and campaign management for Australian non-profits. Every dollar reported against impact.",
    lede: "You get $10k/month in free Google Ad Grants. Most non-profits waste it. We spend it — and add paid + organic layers that grow reach, donations, and volunteer sign-ups.",
    bullets: [
      "Google Ad Grants set up and managed",
      "Donation-page conversion optimisation",
      "Content and SEO on your issue areas",
      "Campaign landing pages for appeals",
    ],
    playbook: [
      {
        title: "Use the grant properly",
        body: "Multiple campaigns, geo controls, sitelinks, negatives — most agencies leave the grant on autopilot and lose it.",
      },
      {
        title: "Donation pages that convert",
        body: "Suggested amounts, monthly-vs-once, tax-deductible messaging in the fold.",
      },
      {
        title: "Own the search results on your cause",
        body: "SEO that owns the top 3 spots for the issues you campaign on.",
      },
    ],
    results: "NDIS providers, community services, advocacy, health charities.",
  },
  {
    slug: "digital-marketing-for-professional-services",
    name: "Professional Services",
    h1: "Marketing for consultancies and professional services firms.",
    metaTitle: "Digital Marketing for Professional Services | Leadweb",
    metaDescription:
      "Positioning, SEO and paid media for consultancies, accountants, agencies and B2B service firms.",
    lede: "You sell trust and expertise. Your website and search presence should reflect that — most don't. We fix the credibility gap and turn traffic into introductions.",
    bullets: [
      "Positioning-led messaging",
      "SEO on services + industries you serve",
      "LinkedIn ads and thought-leadership distribution",
      "Case-study production",
    ],
    playbook: [
      {
        title: "Sharper positioning first",
        body: "Before we touch a channel — clarify who you're for and what you're best at. Every page reads better after this.",
      },
      {
        title: "Case studies as the flywheel",
        body: "One deep case study per quarter, distributed across SEO, LinkedIn, sales enablement.",
      },
      {
        title: "Ads that support sales",
        body: "LinkedIn retargeting on ICPs your BDRs are working.",
      },
    ],
    results: "Consultancies, accountants, engineering firms, B2B agencies.",
  },
  {
    slug: "digital-marketing-for-real-estates",
    name: "Real Estate",
    h1: "Digital marketing for real estate that wins listings.",
    metaTitle: "Digital Marketing for Real Estate | Leadweb",
    metaDescription:
      "SEO, paid ads and vendor-focused marketing for real estate agencies in Sydney and nationwide.",
    lede: "Buyer leads are cheap. Vendor leads are what pay the office. We build channels that produce appraisals and listings, not just database entries.",
    bullets: [
      "Vendor-focused SEO and ads",
      "Appraisal landing pages per suburb",
      "Sold-property SEO that captures buyer intent",
      "Agent personal-brand content",
    ],
    playbook: [
      {
        title: "Appraisal funnels per suburb",
        body: "One page per suburb, with local market data, recent sales, and a one-tap appraisal request.",
      },
      {
        title: "Own the 'sold' terms",
        body: "Sold-property pages ranking for '[suburb] sold prices' — pure buyer intent, feeding your database.",
      },
      {
        title: "Agent-led content",
        body: "Short-form video with your top agents, distributed across Instagram, TikTok, YouTube Shorts.",
      },
    ],
    results: "Independent agencies through to franchise offices.",
  },
  {
    slug: "digital-marketing-for-restaurant",
    name: "Restaurants & Hospitality",
    h1: "Marketing for restaurants that fills tables — mid-week included.",
    metaTitle: "Digital Marketing for Restaurants | Leadweb",
    metaDescription:
      "Local SEO, Meta ads and Google Business Profile management for restaurants, cafes and hospitality venues.",
    lede: "Fri/Sat books itself. Mon–Wed is where the money is made or lost. We build local marketing that lifts the quiet nights.",
    bullets: [
      "Google Business Profile as your primary asset",
      "Reviews strategy",
      "Meta ads to a 5–20km radius",
      "Event and special-night landing pages",
    ],
    playbook: [
      {
        title: "Own the map pack",
        body: "Photos, categories, service attributes, weekly posts, reviews cadence.",
      },
      {
        title: "Fill the quiet nights",
        body: "Ads with a specific offer for the specific night, geo-fenced to your catchment.",
      },
      {
        title: "Events + specials as content",
        body: "Every event becomes a landing page, a social post, and an EDM.",
      },
    ],
    results: "Independent restaurants, cafes, bars, function venues.",
  },
  {
    slug: "digital-marketing-for-small-businesses",
    name: "Small Business",
    h1: "Digital marketing for owner-operated small businesses.",
    metaTitle: "Digital Marketing for Small Business Sydney | Leadweb",
    metaDescription:
      "Marketing built for owner-operators. Sharp scope, no fluff retainers, results measured in booked jobs and revenue.",
    lede: "You wear five hats already. You need a marketing partner who ships without needing to be managed — and who reports in language that helps you decide, not admire.",
    bullets: [
      "Fixed-scope engagements you can budget for",
      "One channel done properly beats three done badly",
      "Owner-friendly monthly reports",
      "Direct access to the person doing the work",
    ],
    playbook: [
      {
        title: "Pick the right first channel",
        body: "Cash flow, urgency, and margin drive the recommendation — not what we're best at selling.",
      },
      {
        title: "Ship in weeks, not quarters",
        body: "Owners lose faith when nothing changes for months. We ship visible work every fortnight.",
      },
      {
        title: "Owner-friendly reporting",
        body: "Leads in, cost per lead, revenue. That's the report.",
      },
    ],
    results: "Trades, retail, services, professional services, e-commerce.",
  },
  {
    slug: "digital-marketing-for-beauty-skincare",
    name: "Beauty & Skincare",
    h1: "Marketing for beauty clinics, salons and skincare brands.",
    metaTitle: "Digital Marketing for Beauty & Skincare | Leadweb",
    metaDescription:
      "SEO, paid social and content for beauty clinics, salons and DTC skincare brands. Bookings and DTC revenue, measured properly.",
    lede: "Beauty is one of the most competitive local markets and one of the most reward-heavy DTC categories. We run both plays.",
    bullets: [
      "Local SEO for treatment + suburb",
      "Meta and TikTok content that converts to bookings",
      "DTC ecommerce funnels + retention",
      "Influencer sourcing and management",
    ],
    playbook: [
      {
        title: "Treatment pages that book",
        body: "One page per treatment, per location, with the exact offer as the ad.",
      },
      {
        title: "Content native to the platform",
        body: "Vertical video shot in-clinic, edited for TikTok/Reels, not repurposed corporate content.",
      },
      {
        title: "Retention as growth",
        body: "Post-visit and post-purchase flows that lift repeat rate — cheaper than acquiring new.",
      },
    ],
    results: "Cosmetic clinics, laser, skincare brands, hair salons.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
