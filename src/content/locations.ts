export type LocationService =
  "google-ads" | "digital-marketing" | "seo" | "lead-generation" | "pay-per-lead";

export const locationServices: {
  key: LocationService;
  label: string;
  short: string;
  slugPrefix: string;
  intro: (city: string) => string;
  bullets: (city: string) => string[];
  metaTitle: (city: string) => string;
  metaDescription: (city: string) => string;
  h1: (city: string) => string;
}[] = [
  {
    key: "google-ads",
    label: "Google Ads",
    short: "Google Ads",
    slugPrefix: "google-ads-agency",
    intro: (c) =>
      `We run Google Ads for ${c} owners who want cost per lead down and booked jobs up — weekly optimisation, transparent reporting, no lock-in.`,
    bullets: (c) => [
      `Weekly optimisation on your ${c} account, not a template`,
      "Tight geo, device and audience controls",
      "Call tracking + lead-quality scoring",
      "Landing pages purpose-built for each campaign",
    ],
    metaTitle: (c) => `Google Ads Agency ${c} | Leadweb Marketing`,
    metaDescription: (c) =>
      `${c} Google Ads management with weekly optimisation, transparent reporting and no lock-in contracts.`,
    h1: (c) => `Google Ads agency in ${c} for owners who are done overpaying for leads.`,
  },
  {
    key: "digital-marketing",
    label: "Digital Marketing",
    short: "Digital Marketing",
    slugPrefix: "digital-marketing-agency",
    intro: (c) =>
      `A full-stack digital marketing team for ${c} businesses — SEO, Google Ads, social and web working together to grow booked revenue.`,
    bullets: (c) => [
      `One strategist accountable for every channel in ${c}`,
      "SEO, paid, social and web ship from the same team",
      "Monthly revenue-first reporting, not vanity dashboards",
      "Month-to-month after the first 90 days",
    ],
    metaTitle: (c) => `Digital Marketing Agency ${c} | Leadweb Marketing`,
    metaDescription: (c) =>
      `${c} digital marketing agency covering SEO, Google Ads, social and web. Revenue-first reporting, no lock-in.`,
    h1: (c) => `Digital marketing agency in ${c} that ties every channel to booked revenue.`,
  },
  {
    key: "seo",
    label: "SEO",
    short: "SEO",
    slugPrefix: "seo-agency",
    intro: (c) =>
      `SEO for ${c} businesses that want to own page one on the terms that actually convert — not vanity keywords.`,
    bullets: (c) => [
      `${c} keyword and competitor research done by humans`,
      "Technical, on-page and content shipped monthly",
      "Local pack and map optimisation for service-area businesses",
      "Monthly reporting on rankings, traffic and enquiries",
    ],
    metaTitle: (c) =>
      c === "Sydney"
        ? "SEO Agency Sydney | Technical SEO, Local SEO and Content SEO"
        : c === "Melbourne"
          ? "SEO Agency Melbourne | Rank organically and generate leads"
          : c === "Brisbane"
            ? "SEO Agency Brisbane | Rank in targeted locations for your services"
            : `SEO Agency ${c} | Leadweb Marketing`,
    metaDescription: (c) =>
      `${c} SEO agency ranking service businesses on revenue-moving terms. Technical, on-page, content and local pack — all in-house.`,
    h1: (c) => `SEO agency in ${c} for owners who want rankings tied to revenue.`,
  },
  {
    key: "lead-generation",
    label: "Lead Generation",
    short: "Lead Generation",
    slugPrefix: "lead-generation-agency",
    intro: (c) =>
      `Lead generation for ${c} businesses — the full stack of paid, organic and landing pages engineered to fill your calendar.`,
    bullets: (c) => [
      `Paid + SEO working together for ${c} demand`,
      "Landing pages, forms and call tracking built in",
      "CRM handover so nothing gets dropped",
      "Reported on cost per booked job, not cost per click",
    ],
    metaTitle: (c) => `Lead Generation Agency ${c} | Leadweb Marketing`,
    metaDescription: (c) =>
      `${c} lead generation agency. Paid, SEO, landing pages and call tracking engineered to book qualified jobs — not clicks.`,
    h1: (c) => `Lead generation for ${c} businesses — measured in booked jobs.`,
  },
  {
    key: "pay-per-lead",
    label: "Pay Per Lead",
    short: "Pay Per Lead",
    slugPrefix: "pay-per-lead",
    intro: (c) =>
      `Pay Per Lead for ${c} — we build the assets, run the media, and you only pay for exclusive, qualified leads delivered in real time.`,
    bullets: (c) => [
      `Exclusive leads for one ${c} business per category`,
      "No management fees — you pay per lead, not per click",
      "Real-time delivery to your phone, email or CRM",
      "30-day notice, no long contracts",
    ],
    metaTitle: (c) => `Pay Per Lead ${c} | Leadweb Marketing`,
    metaDescription: (c) =>
      `Pay Per Lead in ${c}. Exclusive, qualified leads delivered in real time. You only pay for the leads, not the process.`,
    h1: (c) => `Pay Per Lead in ${c}. Only pay for the leads — not the process to get them.`,
  },
];

export type LocationContent = {
  slug: string;
  city: string;
  state: string;
  service: LocationService;
  serviceLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  bullets: string[];
  neighbourhoods: string[];
  proofPoints?: string[];
  ctaLine?: string;
};

type CityBase = {
  citySlug: string;
  city: string;
  state: string;
  neighbourhoods: string[];
  lede: string;
  hidden?: boolean;
};

const cities: CityBase[] = [
  {
    citySlug: "sydney",
    city: "Sydney",
    state: "NSW",
    lede: "We're headquartered in Sydney and most of our team ships from here. That means faster loops, on-site visits, and a real understanding of the Sydney service-area landscape.",
    neighbourhoods: [
      "CBD",
      "North Shore",
      "Eastern Suburbs",
      "Inner West",
      "Northern Beaches",
      "South West",
      "Hills District",
      "Parramatta",
      "Sutherland",
      "Western Sydney",
    ],
  },
  {
    citySlug: "melbourne",
    city: "Melbourne",
    state: "VIC",
    lede: "We run Melbourne accounts remotely with a level of ownership most local shops don't match — including monthly on-site visits for retained clients.",
    neighbourhoods: [
      "CBD",
      "Inner North",
      "Inner East",
      "Inner South",
      "Bayside",
      "Eastern Suburbs",
      "South East",
      "Western Suburbs",
      "Mornington Peninsula",
    ],
  },
  {
    citySlug: "brisbane",
    city: "Brisbane",
    state: "QLD",
    lede: "SEQ businesses trust us with accounts from the Gold Coast to the Sunshine Coast. We treat every account like an owner would: defend the budget, ship changes, report on money.",
    neighbourhoods: [
      "CBD",
      "Inner North",
      "Inner South",
      "Western Suburbs",
      "Redlands",
      "Ipswich",
      "Logan",
      "Gold Coast",
      "Sunshine Coast",
    ],
  },
  {
    citySlug: "perth",
    city: "Perth",
    state: "WA",
    lede: "Perth's market rewards operators who spend media efficiently and defend against interstate spillover. That's the account discipline we bring.",
    neighbourhoods: [
      "CBD",
      "Northern Suburbs",
      "Eastern Suburbs",
      "South of River",
      "Fremantle",
      "Joondalup",
      "Rockingham",
    ],
  },
  {
    citySlug: "adelaide",
    city: "Adelaide",
    state: "SA",
    lede: "Adelaide's tighter market means every dollar counts twice. We build accounts around that — narrow, deep, and defended.",
    neighbourhoods: [
      "CBD",
      "Inner North",
      "Inner South",
      "Eastern Suburbs",
      "Western Suburbs",
      "Adelaide Hills",
      "Barossa",
    ],
  },
  // Hidden SEO landing cities — reachable by URL, not shown in nav or hub.
  {
    citySlug: "parramatta",
    city: "Parramatta",
    state: "NSW",
    hidden: true,
    lede: "Parramatta is Sydney's second CBD — a dense, competitive service-area market where account discipline separates winners from budget donors.",
    neighbourhoods: [
      "Parramatta CBD",
      "Harris Park",
      "Rosehill",
      "Westmead",
      "North Parramatta",
      "Granville",
    ],
  },
  {
    citySlug: "blacktown",
    city: "Blacktown",
    state: "NSW",
    hidden: true,
    lede: "Blacktown and the greater Western Sydney corridor is one of Australia's fastest-growing service catchments. We build campaigns to match.",
    neighbourhoods: [
      "Blacktown CBD",
      "Seven Hills",
      "Mount Druitt",
      "Rooty Hill",
      "Doonside",
      "Quakers Hill",
    ],
  },
  {
    citySlug: "penrith",
    city: "Penrith",
    state: "NSW",
    hidden: true,
    lede: "Penrith owners compete for jobs across a wide geo. Tight targeting and honest reporting matter more here than clever creative.",
    neighbourhoods: [
      "Penrith CBD",
      "St Marys",
      "Kingswood",
      "Cranebrook",
      "Emu Plains",
      "Glenmore Park",
    ],
  },
  {
    citySlug: "bankstown",
    city: "Bankstown",
    state: "NSW",
    hidden: true,
    lede: "Bankstown and the South West is a high-intent, price-sensitive market. We defend budget and chase booked jobs, not vanity impressions.",
    neighbourhoods: ["Bankstown CBD", "Chester Hill", "Yagoona", "Padstow", "Revesby", "Panania"],
  },
  {
    citySlug: "campbelltown",
    city: "Campbelltown",
    state: "NSW",
    hidden: true,
    lede: "Campbelltown and Macarthur is a growth belt — new estates, new households, new demand. We build campaigns that ride that wave.",
    neighbourhoods: ["Campbelltown CBD", "Ingleburn", "Minto", "Leumeah", "Ambarvale", "Camden"],
  },
  {
    citySlug: "wollongong",
    city: "Wollongong",
    state: "NSW",
    hidden: true,
    lede: "The Illawarra rewards operators who know its geography. We run tight, transparent accounts for Wollongong service businesses.",
    neighbourhoods: [
      "Wollongong CBD",
      "Fairy Meadow",
      "Corrimal",
      "Figtree",
      "Dapto",
      "Shellharbour",
    ],
  },
  {
    citySlug: "newcastle",
    city: "Newcastle",
    state: "NSW",
    hidden: true,
    lede: "Newcastle and the Hunter is a coastal market with strong trade, health and hospitality demand. We build accounts that convert it.",
    neighbourhoods: [
      "Newcastle CBD",
      "Hamilton",
      "Merewether",
      "Charlestown",
      "Kotara",
      "Lake Macquarie",
      "Maitland",
    ],
  },
  {
    citySlug: "chatswood",
    city: "Chatswood",
    state: "NSW",
    hidden: true,
    lede: "Chatswood and the Upper North Shore is a high-value, high-competition market. Every keyword auction is expensive — we make each click count.",
    neighbourhoods: [
      "Chatswood CBD",
      "Willoughby",
      "Artarmon",
      "Roseville",
      "Lindfield",
      "Killara",
      "Gordon",
    ],
  },
  {
    citySlug: "burwood",
    city: "Burwood",
    state: "NSW",
    hidden: true,
    lede: "Burwood and the Inner West runs on referrals and Google searches. We win the Google side so your reputation compounds.",
    neighbourhoods: ["Burwood CBD", "Strathfield", "Croydon", "Ashfield", "Enfield", "Concord"],
  },
  {
    citySlug: "balmain",
    city: "Balmain",
    state: "NSW",
    hidden: true,
    lede: "Balmain and the Balmain peninsula is a tight, brand-conscious market. We build accounts that respect that — and still book jobs.",
    neighbourhoods: ["Balmain", "Rozelle", "Birchgrove", "Lilyfield", "Leichhardt", "Annandale"],
  },
  {
    citySlug: "bondi",
    city: "Bondi",
    state: "NSW",
    hidden: true,
    lede: "Bondi and the Eastern Suburbs is a premium market with fierce competition. We spend media where it converts, not where it looks good.",
    neighbourhoods: ["Bondi", "Bondi Beach", "Bondi Junction", "Bronte", "Waverley", "Tamarama"],
  },
  {
    citySlug: "double-bay",
    city: "Double Bay",
    state: "NSW",
    hidden: true,
    lede: "Double Bay and the Eastern Suburbs harbour strip is a premium, brand-conscious market. We match the standard on the digital side.",
    neighbourhoods: [
      "Double Bay",
      "Rose Bay",
      "Point Piper",
      "Vaucluse",
      "Woollahra",
      "Bellevue Hill",
    ],
  },
];

type OverrideBlock = { lede: string; bullets: string[] };
type CityOverride = {
  proof: string[];
  cta: string;
} & Partial<Record<LocationService, OverrideBlock>>;

const hiddenOverrides: Record<string, CityOverride> = {
  parramatta: {
    proof: [
      "Sydney HQ — on-site in Parramatta any week you need us",
      "Weekly ship cycle, monthly revenue-first reporting",
      "Month-to-month after the first 90 days — no lock-in",
    ],
    cta: "Book a 20-minute Parramatta market audit — no pitch deck, no obligation.",
    "google-ads": {
      lede: "Parramatta paid auctions are Sydney-priced. We tighten geo, dayparting and audience layers so your budget books jobs inside the LGA — not leaks to Blacktown or the Hills.",
      bullets: [
        "Geo-fenced to Parramatta LGA plus a 15-minute drive-time overlay",
        "Bid modifiers for the Westmead health precinct, Rosehill and Harris Park",
        "Call tracking + lead scoring wired into your CRM",
        "Landing pages written for Parramatta trade, health and commercial buyers",
      ],
    },
    "digital-marketing": {
      lede: "One team running SEO, paid and social for Parramatta operators competing against North Shore agencies on smaller budgets — and still winning on discipline.",
      bullets: [
        "Senior strategist accountable for every Parramatta channel",
        "SEO, paid and social shipping on the same weekly cycle",
        "Reporting tied to booked jobs across the Parramatta LGA",
        "Month-to-month after 90 days — no retainer theatre",
      ],
    },
    seo: {
      lede: "Own the Parramatta modifiers, the Westmead health cluster and the M4 corridor terms your competitors keep missing.",
      bullets: [
        "Local pack + Google Map optimisation across Parramatta postcodes",
        "Suburb landing pages for Harris Park, Rosehill and Westmead",
        "Technical fixes, on-page and content shipped every month",
        "Backlinks earned from real Western Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, organic and landing pages engineered for the Parramatta commercial and trade catchment — measured in booked jobs, not clicks.",
      bullets: [
        "Paid + SEO feeding one Parramatta pipeline",
        "Call tracking and CRM handover built in from day one",
        "Forms tuned for Parramatta trade and professional-services buyers",
        "Cost per booked job reported monthly — not cost per click",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Parramatta leads delivered live. One business per category — you own the postcode, you don't share it.",
      bullets: [
        "Exclusive to one Parramatta business per trade or category",
        "Leads pushed to your phone, email or CRM in real time",
        "No management fee — pay only for qualified leads",
        "30-day notice, no long contracts",
      ],
    },
  },
  blacktown: {
    proof: [
      "Sydney HQ — on-site in Blacktown or Mount Druitt any week",
      "Weekly optimisation, transparent monthly reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Get a free Blacktown lead-flow audit — real strategist reply within one business day.",
    "google-ads": {
      lede: "Blacktown catchments run from Seven Hills to Mount Druitt. We map bids by suburb and household intent so your spend doesn't get burned on tyre-kickers.",
      bullets: [
        "Geo layers across Blacktown, Seven Hills, Mount Druitt and Doonside",
        "Household income and device bid modifiers",
        "Call recording + junk-lead filtering built in",
        "Mobile-first landing pages — 80% of Blacktown clicks are on phone",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Blacktown operators serving the fastest-growing corridor in the country — SEO, paid and social under one plan.",
      bullets: [
        "Cross-channel plan for the Blacktown-to-Rooty Hill corridor",
        "Weekly ship cycle, monthly revenue-first reporting",
        "One senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Blacktown LGA — Seven Hills, Mount Druitt, Rooty Hill and Doonside — on the terms families actually search.",
      bullets: [
        "Local pack + map optimisation across the Blacktown LGA",
        "Suburb landing pages for the growth corridor",
        "Content built around real Western Sydney search behaviour",
        "Backlinks from local Western Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for the Blacktown household market — booked jobs, not clicks.",
      bullets: [
        "Paid + organic working one Blacktown pipeline",
        "Call tracking with junk-lead filtering",
        "Forms tuned for price-sensitive household buyers",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Blacktown leads — one operator per category, delivered live so you can quote first and win.",
      bullets: [
        "Exclusive to one Blacktown business per trade",
        "Real-time delivery to phone, email or CRM",
        "Pay only for qualified, contactable leads",
        "30-day notice, no lock-in",
      ],
    },
  },
  penrith: {
    proof: [
      "Sydney HQ — Penrith on-site visits available",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Book a 20-minute Penrith lead-audit call. No pitch deck. Real plan.",
    "google-ads": {
      lede: "Penrith spans from St Marys to Emu Plains — that's a wide bidding footprint. We tighten it so you're not paying for clicks 40 minutes away.",
      bullets: [
        "Geo layers for Penrith CBD, St Marys, Kingswood, Emu Plains and Glenmore Park",
        "Drive-time overlays keep bids inside your service window",
        "Call tracking + junk-lead filtering",
        "Landing pages built for Penrith household buyers",
      ],
    },
    "digital-marketing": {
      lede: "One team, all channels, run for Penrith operators covering the western growth belt.",
      bullets: [
        "Cross-channel plan mapped to Penrith LGA demand",
        "Weekly ship cycle — no dashboard theatre",
        "Senior strategist accountable for booked jobs",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across every Penrith suburb your team actually services — St Marys, Kingswood, Cranebrook, Emu Plains, Glenmore Park.",
      bullets: [
        "Local pack + Google Map optimisation for Penrith postcodes",
        "Suburb landing pages that reflect real service areas",
        "Technical, on-page and content shipped monthly",
        "Backlinks earned from Western Sydney sources",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered to fill the calendar for Penrith service businesses covering a wide geo.",
      bullets: [
        "One pipeline fed by paid and organic",
        "Call tracking and CRM handover built in",
        "Forms tuned for household and light-commercial buyers",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Penrith leads delivered live — one operator per trade, so you're not fighting three competitors on the same call.",
      bullets: [
        "Exclusive to one Penrith business per category",
        "Real-time delivery to your phone",
        "Pay per qualified lead, not per click",
        "30-day notice, no lock-in",
      ],
    },
  },
  bankstown: {
    proof: [
      "Sydney HQ — on-site in Bankstown or Revesby any week",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Book a free Bankstown lead-flow audit. Straight answer within one business day.",
    "google-ads": {
      lede: "Bankstown searchers are price-aware and high-intent. We build accounts that filter tyre-kickers before they cost you a click.",
      bullets: [
        "Geo layers across Bankstown, Yagoona, Revesby, Padstow and Panania",
        "Negative-keyword lists tuned to a price-sensitive market",
        "Call recording + junk-lead scoring",
        "Landing pages that speak to South-West buyers",
      ],
    },
    "digital-marketing": {
      lede: "One team running SEO, paid and social for Bankstown operators — disciplined spend, honest reporting, booked jobs.",
      bullets: [
        "Cross-channel plan for the South-West Sydney corridor",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account, not a junior",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Bankstown LGA on the terms that actually convert South-West Sydney buyers.",
      bullets: [
        "Local pack + map optimisation across Bankstown postcodes",
        "Suburb landing pages for Yagoona, Padstow, Revesby and Panania",
        "Technical, on-page and content shipped monthly",
        "Local backlinks from South-West Sydney sources",
      ],
    },
    "lead-generation": {
      lede: "Paid, organic and landing pages engineered for the Bankstown household and trade market — booked jobs, not vanity metrics.",
      bullets: [
        "Paid + SEO feeding one pipeline",
        "Junk-lead filtering built into every form",
        "CRM handover so nothing gets dropped",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Bankstown leads — one operator per trade, delivered live so you quote first.",
      bullets: [
        "Exclusive to one Bankstown business per category",
        "Real-time delivery to phone or CRM",
        "Pay only for qualified, contactable leads",
        "30-day notice, no lock-in",
      ],
    },
  },
  campbelltown: {
    proof: [
      "Sydney HQ — Campbelltown on-site visits available",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Get a Campbelltown lead-flow audit. Real plan, one business day.",
    "google-ads": {
      lede: "Macarthur is growing fast — new estates in Ambarvale, Menangle Park and Gregory Hills. We keep bids anchored to today's demand, not old suburb data.",
      bullets: [
        "Geo layers across Campbelltown, Ingleburn, Minto, Leumeah and Camden",
        "New-estate targeting for Ambarvale and Gregory Hills",
        "Call tracking + junk-lead scoring",
        "Landing pages built for new-build homeowners",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Campbelltown operators riding the Macarthur growth wave — SEO, paid and social under one plan.",
      bullets: [
        "Cross-channel plan for the Macarthur growth belt",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Macarthur LGA — Campbelltown, Ingleburn, Minto, Camden — on the terms new-estate households actually search.",
      bullets: [
        "Local pack + map optimisation across Macarthur postcodes",
        "Suburb landing pages for new-estate targeting",
        "Technical, on-page and content shipped monthly",
        "Backlinks from South-West Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Campbelltown and Macarthur — booked jobs from new-estate households.",
      bullets: [
        "One pipeline fed by paid and organic",
        "Call tracking + CRM handover",
        "Forms tuned for new-build owners",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Campbelltown leads — one operator per trade, delivered live across the Macarthur belt.",
      bullets: [
        "Exclusive to one Campbelltown business per category",
        "Real-time delivery to phone, email or CRM",
        "Pay per qualified lead, not per click",
        "30-day notice, no lock-in",
      ],
    },
  },
  wollongong: {
    proof: [
      "Illawarra accounts run from Sydney HQ, on-site visits available",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Wollongong lead-flow audit — no obligation, real strategist.",
    "google-ads": {
      lede: "Wollongong runs from Corrimal to Shellharbour — a narrow coastal geo. We tighten bids to the corridor so budget doesn't spill into Sydney or the Highlands.",
      bullets: [
        "Geo layers along the Illawarra coast — Corrimal to Shellharbour",
        "Drive-time overlays for Figtree, Dapto and Fairy Meadow",
        "Call tracking + junk-lead filtering",
        "Landing pages built for Illawarra buyers",
      ],
    },
    "digital-marketing": {
      lede: "One team running SEO, paid and social for Wollongong operators — Illawarra-aware, Sydney-grade execution.",
      bullets: [
        "Cross-channel plan mapped to the Illawarra corridor",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Illawarra — Wollongong CBD, Corrimal, Figtree, Dapto and Shellharbour — on the terms that book jobs.",
      bullets: [
        "Local pack + map optimisation across Illawarra postcodes",
        "Suburb landing pages for the coastal corridor",
        "Technical, on-page and content shipped monthly",
        "Backlinks from Illawarra publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Wollongong trade, health and hospitality operators.",
      bullets: [
        "One pipeline fed by paid and organic",
        "Call tracking + CRM handover",
        "Forms tuned for Illawarra service catchments",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Illawarra leads — one Wollongong operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Wollongong business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  newcastle: {
    proof: [
      "Hunter accounts run from Sydney HQ, Newcastle on-site visits available",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Newcastle lead-flow audit — one business day reply.",
    "google-ads": {
      lede: "Newcastle and the Hunter is a wide catchment — CBD to Lake Macquarie to Maitland. We map bids by corridor so your budget doesn't leak.",
      bullets: [
        "Geo layers across Newcastle, Charlestown, Kotara, Lake Macquarie and Maitland",
        "Drive-time overlays per branch or service area",
        "Call tracking + junk-lead scoring",
        "Landing pages built for Hunter buyers",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Newcastle operators — SEO, paid and social running on one weekly cycle.",
      bullets: [
        "Cross-channel plan mapped to the Hunter catchment",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Hunter — Newcastle, Charlestown, Kotara, Lake Macquarie and Maitland — on the terms that book jobs.",
      bullets: [
        "Local pack + map optimisation across Hunter postcodes",
        "Suburb landing pages that reflect real service areas",
        "Technical, on-page and content shipped monthly",
        "Backlinks from Hunter publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Newcastle trade, health and hospitality — booked jobs, not clicks.",
      bullets: [
        "One Newcastle pipeline fed by paid and organic",
        "Call tracking + CRM handover",
        "Forms tuned for Hunter buyer intent",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Newcastle leads — one Hunter operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Newcastle business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  chatswood: {
    proof: [
      "Sydney HQ — Chatswood on-site any week",
      "Weekly optimisation on premium-CPC accounts",
      "Month-to-month after 90 days",
    ],
    cta: "Get a Chatswood account audit — we'll show you where budget is being burned.",
    "google-ads": {
      lede: "Chatswood auctions are among the most expensive in Sydney. Every click matters — we defend spend with tight audience, geo and dayparting layers.",
      bullets: [
        "Geo layers across Chatswood, Willoughby, Artarmon, Roseville and Killara",
        "Audience layers for high-value North Shore households",
        "Call tracking with lead-value scoring",
        "Landing pages that meet Upper North Shore expectations",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Chatswood operators competing in Sydney's most expensive auctions — disciplined spend, premium execution.",
      bullets: [
        "Cross-channel plan for the Upper North Shore",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Upper North Shore — Chatswood, Willoughby, Lindfield, Killara and Gordon — on premium, high-intent terms.",
      bullets: [
        "Local pack + map optimisation across North Shore postcodes",
        "Suburb landing pages for premium buyer intent",
        "Technical, on-page and content shipped monthly",
        "Backlinks earned from real Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Chatswood professional-services and health operators — high-value leads only.",
      bullets: [
        "Paid + organic feeding one high-value pipeline",
        "Lead-value scoring so junk gets filtered",
        "CRM handover with owner-level attention",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Chatswood leads — one operator per trade, delivered live in Sydney's most competitive postcode.",
      bullets: [
        "Exclusive to one Chatswood business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  burwood: {
    proof: [
      "Sydney HQ — Burwood on-site any week",
      "Weekly optimisation, monthly transparent reporting",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Burwood lead-flow audit — real strategist, one business day reply.",
    "google-ads": {
      lede: "Burwood and the Inner West is dense and multilingual. We tailor ad copy, extensions and landing pages to match local buyer intent.",
      bullets: [
        "Geo layers across Burwood, Strathfield, Croydon, Ashfield and Concord",
        "Ad copy tested for Inner West buyer language",
        "Call tracking + junk-lead scoring",
        "Landing pages for referral-plus-search buyers",
      ],
    },
    "digital-marketing": {
      lede: "One team running SEO, paid and social for Inner West operators — so Google reinforces the referrals you're already earning.",
      bullets: [
        "Cross-channel plan mapped to Inner West demand",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Inner West — Burwood, Strathfield, Ashfield and Concord — on the terms locals actually search.",
      bullets: [
        "Local pack + map optimisation across Inner West postcodes",
        "Suburb landing pages for real referral catchments",
        "Technical, on-page and content shipped monthly",
        "Backlinks from Inner West publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Burwood operators — booked jobs, not vanity clicks.",
      bullets: [
        "One pipeline fed by paid and organic",
        "Call tracking + CRM handover",
        "Forms tuned for Inner West buyer intent",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Burwood leads — one Inner West operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Burwood business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  balmain: {
    proof: [
      "Sydney HQ — Balmain on-site any week",
      "Weekly optimisation with premium-brand discipline",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Balmain audit — we'll match your brand standard on the digital side.",
    "google-ads": {
      lede: "Balmain is a tight, brand-conscious peninsula. We run accounts that book jobs without ever cheapening the brand.",
      bullets: [
        "Geo layers across Balmain, Rozelle, Birchgrove and Lilyfield",
        "Ad copy calibrated to Balmain buyer standards",
        "Call tracking + junk-lead scoring",
        "Landing pages that match your brand — not a template",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Balmain operators — SEO, paid and social ship together at premium-brand standards.",
      bullets: [
        "Cross-channel plan mapped to the peninsula",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across the Balmain peninsula — Rozelle, Birchgrove, Leichhardt and Annandale — on terms premium buyers actually search.",
      bullets: [
        "Local pack + map optimisation for the peninsula",
        "Suburb landing pages that respect the brand",
        "Technical, on-page and content shipped monthly",
        "Backlinks from real Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Balmain premium operators — high-value leads, premium execution.",
      bullets: [
        "Paid + organic feeding one high-value pipeline",
        "Lead-value scoring so junk gets filtered",
        "CRM handover with owner-level attention",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Balmain leads — one peninsula operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Balmain business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  bondi: {
    proof: [
      "Sydney HQ — Bondi on-site any week",
      "Weekly optimisation on premium Eastern Suburbs accounts",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Bondi audit — we'll show you where premium spend is being wasted.",
    "google-ads": {
      lede: "Bondi and the Eastern Suburbs are premium and crowded. We spend media where it converts — not where it looks good on a report.",
      bullets: [
        "Geo layers across Bondi, Bondi Junction, Bronte, Waverley and Tamarama",
        "Audience layers for high-value Eastern Suburbs households",
        "Call tracking with lead-value scoring",
        "Landing pages that match Eastern Suburbs standards",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Bondi operators — SEO, paid and social ship together, calibrated to premium Eastern Suburbs demand.",
      bullets: [
        "Cross-channel plan for the Eastern Suburbs",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across Bondi, Bondi Junction, Bronte and Waverley on premium, high-intent terms — not vanity keywords.",
      bullets: [
        "Local pack + map optimisation across Eastern postcodes",
        "Suburb landing pages for premium buyer intent",
        "Technical, on-page and content shipped monthly",
        "Backlinks earned from real Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Bondi premium operators — high-value leads, filtered hard.",
      bullets: [
        "Paid + organic feeding one premium pipeline",
        "Lead-value scoring so junk gets filtered",
        "CRM handover with owner-level attention",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Bondi leads — one Eastern Suburbs operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Bondi business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
  "double-bay": {
    proof: [
      "Sydney HQ — Double Bay on-site any week",
      "Weekly optimisation at premium-brand standards",
      "Month-to-month after 90 days",
    ],
    cta: "Book a Double Bay audit — premium-brand discipline, no pitch deck.",
    "google-ads": {
      lede: "Double Bay is an ultra-premium harbour strip. We run accounts calibrated to that — brand-safe creative, high-value keywords, tight audience layers.",
      bullets: [
        "Geo layers across Double Bay, Rose Bay, Point Piper, Vaucluse and Woollahra",
        "Audience layers for ultra-high-value households",
        "Call tracking with lead-value scoring",
        "Landing pages that match ultra-premium standards",
      ],
    },
    "digital-marketing": {
      lede: "Full-stack digital marketing for Double Bay operators — SEO, paid and social ship together, calibrated to ultra-premium buyer intent.",
      bullets: [
        "Cross-channel plan for the harbour strip",
        "Weekly ship cycle, monthly revenue reporting",
        "Senior strategist on your account",
        "Month-to-month after 90 days",
      ],
    },
    seo: {
      lede: "Rank across Double Bay, Rose Bay, Woollahra and Bellevue Hill on ultra-premium, high-intent terms.",
      bullets: [
        "Local pack + map optimisation across harbour postcodes",
        "Suburb landing pages that respect the brand",
        "Technical, on-page and content shipped monthly",
        "Backlinks earned from premium Sydney publications",
      ],
    },
    "lead-generation": {
      lede: "Paid, SEO and landing pages engineered for Double Bay operators — ultra-high-value leads, filtered hard.",
      bullets: [
        "Paid + organic feeding one premium pipeline",
        "Lead-value scoring so junk gets filtered",
        "CRM handover with owner-level attention",
        "Cost per booked job reported monthly",
      ],
    },
    "pay-per-lead": {
      lede: "Exclusive Double Bay leads — one harbour operator per trade, delivered live.",
      bullets: [
        "Exclusive to one Double Bay business per category",
        "Real-time delivery to phone or CRM",
        "Pay per qualified lead only",
        "30-day notice, no lock-in",
      ],
    },
  },
};

export const locations: LocationContent[] = locationServices.flatMap((svc) =>
  cities.map((c) => ({
    slug: `${svc.slugPrefix}-${c.citySlug}`,
    city: c.city,
    state: c.state,
    service: svc.key,
    serviceLabel: svc.label,
    h1: svc.h1(c.city),
    metaTitle: svc.metaTitle(c.city),
    metaDescription: svc.metaDescription(c.city),
    lede: `${svc.intro(c.city)} ${c.lede}`,
    bullets: svc.bullets(c.city),
    neighbourhoods: c.neighbourhoods,
    ...(hiddenOverrides[c.citySlug]?.[svc.key] ?? {}),
    proofPoints: hiddenOverrides[c.citySlug]?.proof,
    ctaLine: hiddenOverrides[c.citySlug]?.cta,
  })),
);

export const cityList = cities.map((c) => ({
  citySlug: c.citySlug,
  city: c.city,
  state: c.state,
  hidden: c.hidden ?? false,
}));
export const visibleCityList = cityList.filter((c) => !c.hidden);

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
