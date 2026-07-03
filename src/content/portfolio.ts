export type PortfolioItem = {
  name: string;
  category: string;
  image: string;
  outcome: string;
};

// Client screenshots reused from the existing Leadweb WordPress media library so
// case-study visuals stay authentic — no misrepresenting brand imagery.
const wp = (p: string) => `https://www.leadweb.com.au/wp-content/uploads/${p}`;

export const portfolio: PortfolioItem[] = [
  {
    name: "Advanced Tree Lopping",
    category: "Tradies · SEO + Google Ads",
    image: wp("2023/03/Advanced-Tree-Lopping-0.png"),
    outcome: "Consistent lead flow across Greater Sydney.",
  },
  {
    name: "Jabbs Excavation",
    category: "Tradies · Website + SEO",
    image: wp("2023/03/Jabbs-Excavation.png"),
    outcome: "Ranked page one for excavation across NSW.",
  },
  {
    name: "Six Brothers Removalist",
    category: "Removalists · Ads + Social",
    image: wp("2023/03/removalist.sydney.png"),
    outcome: "Interstate lead volume up, cost per lead down.",
  },
  {
    name: "GPS Vehicle Inspections",
    category: "Automotive · Google Ads",
    image: wp("2023/03/GPS-Vehicle-Inspections-0.png"),
    outcome: "Fully booked mobile inspection schedule.",
  },
  {
    name: "Satisfinance",
    category: "Finance · Website + SEO",
    image: wp("2023/03/Satisfinance.png"),
    outcome: "Broker enquiries qualified before the call.",
  },
  {
    name: "Care Remedy",
    category: "NDIS · SEO + Social",
    image: wp("2023/03/Care-Remedy-0.png"),
    outcome: "Participant enquiries across Sydney + Melbourne.",
  },
  {
    name: "The Castor Master",
    category: "E-commerce · SEO",
    image: wp("2023/03/The-Castor-Master-0.png"),
    outcome: "Ranked #1 for core commercial terms.",
  },
  {
    name: "Takeaway Packaging",
    category: "Wholesale · Website",
    image: wp("2023/03/takeawaypackaging.png"),
    outcome: "Wholesale enquiries direct from search.",
  },
  {
    name: "Deep Slice Pizza",
    category: "Hospitality · Local Marketing",
    image: wp("2023/03/deepslicepizza-1.png"),
    outcome: "Mid-week covers up 30%.",
  },
  {
    name: "AJ Engineering",
    category: "Consultancy · Website + SEO",
    image: wp("2023/03/AJ-Engineering-Consultancy-0.png"),
    outcome: "Enterprise enquiries direct from organic.",
  },
  {
    name: "OSAN Ability",
    category: "NDIS · Social + Content",
    image: wp("2023/04/Social-Media-for-OSAN-Ability.jpg"),
    outcome: "Community and participant reach across VIC.",
  },
  {
    name: "RMB Constructions",
    category: "Construction · SEO + Ads",
    image: wp("2023/04/Digital-Marketing-for-RMB-Constructions.jpg"),
    outcome: "Commercial project enquiries every week.",
  },
];
