export type PortfolioItem = {
  name: string;
  category: string;
  image: string;
  outcome: string;
};

const PORTFOLIO_IMAGE = (file: string) => `/images/portfolio/${file}`;

export const portfolio: PortfolioItem[] = [
  {
    name: "Headway ABI Australia",
    category: "NDIS · Website + SEO",
    image: PORTFOLIO_IMAGE("headway-abi.webp"),
    outcome: "Consistent participant enquiries and brand growth.",
  },
  {
    name: "Demore Lending",
    category: "Finance · Website + SEO",
    image: PORTFOLIO_IMAGE("demore-lending.avif"),
    outcome: "Qualified commercial finance enquiries direct from search.",
  },
  {
    name: "OSAN Ability",
    category: "NDIS · Social + Content",
    image: PORTFOLIO_IMAGE("osan-ability.avif"),
    outcome: "Community and participant reach across VIC.",
  },
  {
    name: "The T-Spoon Cafe",
    category: "Hospitality · Local SEO",
    image: PORTFOLIO_IMAGE("tspoon.avif"),
    outcome: "Mid-week covers up 30%.",
  },
  {
    name: "ADL99 Cybersecurity",
    category: "Technology · Website + SEO",
    image: PORTFOLIO_IMAGE("ADL99.avif"),
    outcome: "Enterprise cybersecurity leads direct from organic search.",
  },
  {
    name: "GPS Vehicle Inspections",
    category: "Automotive · Google Ads",
    image: PORTFOLIO_IMAGE("gps.avif"),
    outcome: "Fully booked mobile inspection schedule.",
  },
  {
    name: "Two Brothers Removalist",
    category: "Removalists · SEO + Google Ads",
    image: PORTFOLIO_IMAGE("two-brothers.avif"),
    outcome: "Consistent moving enquiries across Sydney.",
  },
  {
    name: "Care Remedy",
    category: "NDIS · SEO + Social",
    image: PORTFOLIO_IMAGE("care-remedy.avif"),
    outcome: "Participant enquiries across Sydney + Melbourne.",
  },
  {
    name: "Satisfinance",
    category: "Finance · Website + SEO",
    image: PORTFOLIO_IMAGE("satisfinance.avif"),
    outcome: "Broker enquiries qualified before the call.",
  },
  {
    name: "AJ Engineering",
    category: "Consultancy · Website + SEO",
    image: PORTFOLIO_IMAGE("aj-engineering.avif"),
    outcome: "Enterprise enquiries direct from organic.",
  },
  {
    name: "Jose Journeys",
    category: "NDIS · Website + SEO",
    image: PORTFOLIO_IMAGE("jose-journeys.avif"),
    outcome: "NDIS travel and support participant enquiries.",
  },
  {
    name: "Jabbs Excavation",
    category: "Tradies · Website + SEO",
    image: PORTFOLIO_IMAGE("jabbs.avif"),
    outcome: "Ranked page one for excavation across NSW.",
  },
];
