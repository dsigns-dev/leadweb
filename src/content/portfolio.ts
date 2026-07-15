export type PortfolioItem = {
  name: string;
  category: string;
  image: string;
  outcome: string;
};

const CASE = (folder: string, file: string) => `/images/case-studies/${folder}/${file}`;
const CASE_FILE = (file: string) => `/images/case-studies/${file}`;

export const portfolio: PortfolioItem[] = [
  {
    name: "Advanced Tree Lopping",
    category: "Tradies · SEO + Google Ads",
    image: CASE("tree-lopping", "1.webp"),
    outcome: "Consistent lead flow across Greater Sydney.",
  },
  {
    name: "Jabbs Excavation",
    category: "Tradies · Website + SEO",
    image: CASE("jabbs-excavations", "1.webp"),
    outcome: "Ranked page one for excavation across NSW.",
  },
  {
    name: "Six Brothers Removalist",
    category: "Removalists · Ads + Social",
    image: CASE("six-brothers", "1.webp"),
    outcome: "Interstate lead volume up, cost per lead down.",
  },
  {
    name: "GPS Vehicle Inspections",
    category: "Automotive · Google Ads",
    image: CASE("gps", "1.webp"),
    outcome: "Fully booked mobile inspection schedule.",
  },
  {
    name: "Satisfinance",
    category: "Finance · Website + SEO",
    image: CASE("satisfinance", "1.webp"),
    outcome: "Broker enquiries qualified before the call.",
  },
  {
    name: "Care Remedy",
    category: "NDIS · SEO + Social",
    image: CASE("care-remedy", "1.webp"),
    outcome: "Participant enquiries across Sydney + Melbourne.",
  },
  {
    name: "The Castor Master",
    category: "E-commerce · SEO",
    image: CASE("castor-master", "1.webp"),
    outcome: "Ranked #1 for core commercial terms.",
  },
  {
    name: "Takeaway Packaging",
    category: "Wholesale · Website",
    image: CASE("take-away", "1.webp"),
    outcome: "Wholesale enquiries direct from search.",
  },
  {
    name: "Deep Slice Pizza",
    category: "Hospitality · Local Marketing",
    image: CASE("deepslicepizza", "1.webp"),
    outcome: "Mid-week covers up 30%.",
  },
  {
    name: "AJ Engineering",
    category: "Consultancy · Website + SEO",
    image: CASE("aj-engineering", "1.webp"),
    outcome: "Enterprise enquiries direct from organic.",
  },
  {
    name: "OSAN Ability",
    category: "NDIS · Social + Content",
    image: CASE("osan", "1.webp"),
    outcome: "Community and participant reach across VIC.",
  },
  {
    name: "RMB Constructions",
    category: "Construction · SEO + Ads",
    image: CASE_FILE("rmb-construction.webp"),
    outcome: "Commercial project enquiries every week.",
  },
];
