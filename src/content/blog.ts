import type { StaticImageData } from "next/image";
import authorPhoto from "@/assets/blog/basheer-padanna.webp";

export const author: {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo: StaticImageData;
} = {
  name: "Basheer Padanna",
  role: "Founder & Lead Strategist, Leadweb Marketing",
  bio: "Basheer has spent 15+ years building lead-generation systems for Australian trades, health, legal and professional services businesses. He founded Leadweb — the digital marketing and lead generation division of DSIGNS Australia Pty Limited — to give owners a straight-talking alternative to agencies that hide behind vanity metrics. Every campaign he runs is judged on booked jobs, cost per lead, and revenue in the bank.",
  linkedin: "https://www.linkedin.com/in/basheerpadanna",
  photo: authorPhoto,
};

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered"; items: string[] }
  | {
      type: "stats";
      heading: string;
      source?: string;
      items: Array<{ v: string; l: string }>;
    }
  | { type: "callout"; heading: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "cta";
      heading: string;
      body: string;
      buttonLabel: string;
      to: string;
    }
  | { type: "links"; heading: string; items: Array<{ label: string; to: string; desc: string }> };

export type BlogPost = {
  slug: string;
  kicker: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category:
    | "Lead Generation"
    | "Pay Per Lead"
    | "Google Ads"
    | "SEO"
    | "Digital Marketing"
    | "Growth Marketing";
  readMinutes: number;
  publishedAt: string; // ISO date
  updatedAt?: string;
  tags?: string[];
  sections: BlogSection[];
};

// --- helper for compact authoring ---
const p = (text: string): BlogSection => ({ type: "p", text });
const h2 = (text: string, id?: string): BlogSection => ({ type: "h2", text, id });
const h3 = (text: string): BlogSection => ({ type: "h3", text });
const list = (items: string[]): BlogSection => ({ type: "list", items });
const ordered = (items: string[]): BlogSection => ({ type: "ordered", items });
const stats = (
  heading: string,
  items: Array<{ v: string; l: string }>,
  source?: string,
): BlogSection => ({ type: "stats", heading, items, source });
const callout = (heading: string, text: string): BlogSection => ({
  type: "callout",
  heading,
  text,
});
const quote = (text: string, cite?: string): BlogSection => ({ type: "quote", text, cite });
const cta = (heading: string, body: string, buttonLabel: string, to: string): BlogSection => ({
  type: "cta",
  heading,
  body,
  buttonLabel,
  to,
});
const links = (
  heading: string,
  items: Array<{ label: string; to: string; desc: string }>,
): BlogSection => ({ type: "links", heading, items });

export const posts: BlogPost[] = [
  {
    slug: "lead-generation-for-australian-businesses",
    kicker: "Lead Generation for Australian Businesses",
    title: "Lead Generation for Australian Businesses in 2026: What Actually Works Now",
    metaTitle: "Lead Generation Australia 2026 — What Actually Works | Leadweb Marketing",
    metaDescription:
      "A no-fluff guide to lead generation for Australian business owners. Real benchmarks, channel mix, and the moves that separate a $30 lead from a $300 one.",
    excerpt:
      "If your pipeline feels flat while your ad spend keeps climbing, you're not alone. Here's how lead generation really works in Australia in 2026 — and where owners are quietly winning.",
    category: "Lead Generation",
    readMinutes: 14,
    publishedAt: "2026-01-14",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "Every week I get on a call with a business owner who says the same thing: \"I know what I'm doing — the phone just isn't ringing like it used to.\" They're usually right on both counts. Lead generation in Australia has changed sharply in the last 24 months, and the tactics that pulled work in 2021 quietly stopped working around late 2024. If you're feeling that shift, this piece is for you.",
      ),
      p(
        "This isn't a primer on what a lead is or why you need marketing. If you're reading this, you've already built a business, hired people, and probably burned through at least one agency that promised the world and delivered a spreadsheet full of impressions. What follows is the honest version of how lead generation works in Australia right now, in 2026 — the maths, the channel mix, the platform shifts, and the specific plays that are quietly moving the needle for the owners I talk to every week.",
      ),
      p(
        "I'll be pointing back to specific service pages throughout because most of these levers only work when they compound with each other. Read to the end — the last three sections are where most owners realise which lever they've been ignoring.",
      ),
      h2("Why lead generation feels harder than it used to"),
      p(
        "Three things collided at once: CPCs on high-intent Google searches climbed roughly 30-50% across trade and professional service categories, Google's AI Overviews started answering top-of-funnel questions without a click, and buyers now compare five to seven providers before they even fill in a form. Meanwhile, lead-sharing platforms like HiPages and Oneflare kept selling the same lead to three or four of your competitors.",
      ),
      p(
        "There's a fourth shift most owners underestimate: the buyer's tolerance for friction has collapsed. Ten years ago a customer would fill in a form and wait a day for a callback. In 2026 they've already messaged three of your competitors on WhatsApp before you finish your coffee. If your reply lands after 48 minutes, you're statistically out of the running — the first three responders take roughly 70% of the work.",
      ),
      p(
        "The businesses growing right now aren't the ones with the biggest budgets. They're the ones who noticed the shift, retooled their funnel around it, and stopped throwing money at channels their competitors optimised out of two years ago.",
      ),
      stats(
        "Australian lead-generation reality check",
        [
          { v: "91%", l: "of Aussie buyers Google a service provider before enquiring" },
          { v: "5.7", l: "average providers a buyer compares before booking" },
          { v: "48 min", l: "median time before a warm lead goes cold" },
          { v: "$68", l: "median cost per qualified lead across trades in 2025" },
        ],
        "Leadweb client benchmark, Think with Google AU 2025, HubSpot ANZ",
      ),
      h2("What actually changed in the last 24 months"),
      p(
        "It's worth naming the shifts explicitly, because most agency proposals still price like it's 2022. Once you know what's changed, you can spot the pitch decks that were built five years ago and dusted off last month.",
      ),
      h3("Google is now the answer engine, not the directory"),
      p(
        'AI Overviews now sit on top of more than half of commercial searches in Australia. For an informational query — "how much does a bathroom reno cost" — the Overview often answers well enough that the click never happens. For a commercial query — "bathroom renovator Parramatta" — the Overview typically references local providers, and the classic three-pack plus organic results still drive most clicks. The net effect: fewer clicks on top-of-funnel content, higher-value clicks on bottom-of-funnel commercial pages.',
      ),
      h3("Meta became viable again for services"),
      p(
        'For years Meta was written off by service businesses as "where you buy likes." That flipped in 2024 when Meta\'s lead-form and Advantage+ audiences quietly got much better. On a strong offer, Meta now delivers qualified leads at 40-60% of Google Ads cost in most trade and health verticals. The sales cycle is longer, but the maths often works.',
      ),
      h3("Buyers verify you before they contact you"),
      p(
        "Almost every lead who calls you has already opened your Google Business Profile, read three of your reviews, checked whether you replied to a bad one, and scrolled your Instagram. If any of those look neglected, they've already ruled you out and you'll never know they were there.",
      ),
      h2("The channel mix that's working right now"),
      p(
        'There is no single "best" channel. What works is a compound of three assets that reinforce each other: a fast site that converts, a channel that produces demand today, and a channel that produces demand tomorrow. Skip any leg and the stool wobbles.',
      ),
      h3("1. Google Ads — the fastest way to buy demand"),
      p(
        "For most service businesses under $10M revenue, Google Ads on high-intent commercial keywords is still the fastest lever to pull. The catch: keyword bloat kills it. A tight account with 15-25 killer terms, exact-match discipline and call-tracking will beat a sprawling account every single time.",
      ),
      p(
        "The other catch is landing page discipline. If you send Google Ads traffic to your homepage in 2026, you're paying twice — once for the click and once for the confused visitor who bounces to a competitor whose landing page named their exact search. Budget for a dedicated page per money-service; the conversion lift usually pays for the build in the first month.",
      ),
      h3("2. Local SEO — the compounding asset"),
      p(
        "SEO takes 90-180 days to move, but the leads it produces cost roughly a third of paid ones on a fully-loaded basis and keep coming long after the invoice is paid. If you're not investing here in 2026, you're renting your business from Google.",
      ),
      p(
        "The unfair advantage in local SEO isn't technical — it's operational. Weekly Google Business Profile posts, a review request built into your job-completion workflow, and one new suburb-specific service page per month will out-rank agencies dumping citations in bulk. Google is scoring for signs of a real, active business, not for tricks.",
      ),
      h3("3. Pay per lead or rent-a-website for cashflow-sensitive months"),
      p(
        "Not every owner wants to fund a 90-day SEO ramp. Pay-per-lead models — where you only pay for the qualified enquiry — de-risk that first quarter. The trade-off is a higher cost per lead, but zero cash out for the plumbing.",
      ),
      h3("4. Email and SMS to your existing list — the free channel everyone ignores"),
      p(
        "The cheapest lead you'll ever generate is the one from a past customer. A monthly SMS with a genuine seasonal offer to your customer list typically outperforms most cold channels on ROI, and you already paid to acquire the audience. If you don't have a customer list yet, start capturing one this week — even a spreadsheet is enough to begin.",
      ),
      callout(
        "Owner heuristic",
        "If your average job value is under $500 and your close rate is under 30%, pay-per-lead maths gets tight fast. If your average job is $2k+ and you close well on the phone, it usually wins.",
      ),
      cta(
        "Not sure which channel to start with?",
        "Send us your site, your average job value and your monthly lead volume. We'll come back with a channel-by-channel plan built for your numbers — free, no pitch.",
        "Get my growth plan",
        "/grow-your-business-form",
      ),
      h2("The seven questions that decide your lead cost"),
      ordered([
        "How specific is your service page — one page per service, or one page for everything?",
        "Does your site load in under 2 seconds on 4G?",
        "Is your Google Business Profile fully filled out with weekly posts?",
        "Are you tracking calls, form fills and WhatsApp separately?",
        "How fast do you respond to a new lead — under 5 minutes, or same day?",
        "Do you have reviews from the last 30 days, or are they all from 2022?",
        "Are you retargeting the 96% of first-time visitors who didn't enquire?",
      ]),
      p(
        "If you can honestly say yes to five of the seven, your problem isn't lead generation — it's leadership of the sales process. If you're at three or fewer, the leaks in the funnel are costing you more than any ad spend.",
      ),
      h2("The 48-minute lead-response rule"),
      p(
        "Every serious study of inbound lead response over the last decade has said roughly the same thing: the first responder wins the deal 60-70% of the time, and speed matters more than polish. In 2026 that window has compressed further because buyers are messaging multiple providers simultaneously.",
      ),
      p(
        'Practical setup: route every new lead into a shared inbox or a lightweight CRM, page the on-call person by SMS the moment it lands, and send a templated "we\'ve got your job, calling you in 5 minutes" reply automatically. That single change lifts booked-job rate by 20-40% in most businesses without spending another dollar on ads.',
      ),
      quote(
        "We doubled our booked jobs in a quarter without touching ad spend. All we did was answer faster and stop losing hot leads to voicemail.",
        "Owner, Sydney electrical business",
      ),
      h2("What good looks like in 2026 — a target scorecard"),
      stats("Owner scorecard for a healthy lead engine", [
        { v: "<5 min", l: "First response to any new lead, 7 days a week" },
        { v: ">12%", l: "Landing-page conversion rate on paid traffic" },
        { v: "4.7★+", l: "Google review average with reviews in the last 30 days" },
        { v: ">40%", l: "Share of enquiries from organic, direct or referral (not paid)" },
      ]),
      p(
        "If your business hits three of these four, you're already in the top quartile of Australian service businesses on lead generation. If you hit four, your problem is capacity, not marketing — and it's time to talk about hiring or systems, not more ads.",
      ),
      h2("Five common mistakes I see almost weekly"),
      list([
        "Judging channels on cost per lead instead of cost per booked job — the two are wildly different once quality is factored in.",
        'Running Google Ads to the homepage because "the page looks nice." It\'s not built to convert paid intent.',
        "Turning off marketing when you're busy. The pipeline you kill today shows up as an empty diary in eight weeks.",
        "Buying lead-sharing platform leads without tracking close rate. Half the time the maths is negative and no one is looking.",
        'Refusing to add a phone number to the top of the site because "forms are cleaner." Around 55% of service-business enquiries still come by phone.',
      ]),
      h2("Frequently asked owner questions"),
      h3("How long before I see results from a real lead-gen program?"),
      p(
        "Google Ads: leads in week one, sensible cost per lead by week four. Meta: leads in week one, but sales cycle usually a fortnight longer than search. SEO: first meaningful ranking movement at 60-90 days, revenue impact from 90-180 days. Referral and email: immediate on the existing list, months to build a new one.",
      ),
      h3("What's a realistic monthly budget to start?"),
      p(
        "For a service business doing $500k-$3M revenue, we usually see healthy lead flow start at $2,500-$5,000/month across media plus $2,000-$4,000/month for the work behind it (management, landing pages, SEO). Below $2,500/month total, you're better off doing pay-per-lead or focusing on referral and reviews.",
      ),
      h3("Should I hire in-house or use an agency?"),
      p(
        "A single in-house marketer can rarely be world-class at Google Ads, SEO, creative and analytics all at once. Owners under $10M revenue almost always get more per dollar from a focused agency with specialists per channel; above that it starts to make sense to bring an ops-focused hire in-house and keep specialists on retainer.",
      ),
      cta(
        "Want a plain-English audit of your current lead flow?",
        "Send us your website and we'll come back with the three biggest leaks and what they're worth in booked jobs — free, no pitch.",
        "Book the free audit",
        "/contact-us",
      ),
      h2("Where to go next"),
      p(
        "Every business is a different shape, so the exact mix will vary. Start with the channel that matches your cashflow reality this quarter, then layer.",
      ),
      links("Related reads and services", [
        { label: "Google Ads", to: "/services/google-ads", desc: "Buy demand this week" },
        { label: "SEO", to: "/services/seo", desc: "Compound demand over 6-12 months" },
        {
          label: "Pay Per Lead",
          to: "/services/pay-per-lead",
          desc: "Only pay when the phone rings",
        },
      ]),
    ],
  },

  {
    slug: "pay-per-lead-vs-retainer",
    kicker: "Pay Lead Vs Monthly Retainer",
    title: "Pay Per Lead vs Retainer Agency: Which Model Actually Delivers ROI?",
    metaTitle: "Pay Per Lead vs Retainer — Which Delivers ROI? | Leadweb Marketing",
    metaDescription:
      "A CFO-friendly breakdown of pay-per-lead vs monthly retainer agencies. Cost per lead maths, risk profile, and when each model wins.",
    excerpt:
      "Both models can work. Both can also bleed you dry. Here's the honest maths on when pay-per-lead beats a retainer — and when it absolutely doesn't.",
    category: "Pay Per Lead",
    readMinutes: 13,
    publishedAt: "2026-01-20",
    updatedAt: "2026-07-10",
    sections: [
      p(
        '"Just tell me — should I pay $3,000 a month to an agency, or $100 per lead to a pay-per-lead service?" It\'s the most-asked question I get from business owners in Sydney, and the honest answer is: it depends on four numbers you already know but rarely put on the same page.',
      ),
      p(
        "This is a decision that gets made emotionally in most businesses. Owners burned by a retainer swear off agencies and move to pay-per-lead. Owners burned by a lead-sharing platform where every enquiry went to three competitors swear off pay-per-lead and hire an agency. Both reactions are understandable and both usually pick the wrong model for the wrong reason. The right choice is a maths problem, not a scar tissue problem.",
      ),
      p(
        "This piece walks through the actual maths, the risk profile of each model, and the specific business shapes where one clearly beats the other. If you're in the middle of switching models — or resenting the one you're on — read to the end before you make a call.",
      ),
      h2("The four numbers that decide it"),
      list([
        "Average job value (revenue per closed job)",
        "Close rate (leads that turn into paying customers)",
        "Volume you can service (jobs per month before quality suffers)",
        "Cash sensitivity (can you fund a 90-day ramp?)",
      ]),
      p(
        'You need all four on the same page. Owners routinely quote me one of the numbers — usually job value — while assuming the other three. That\'s how a healthy-sounding "only $150 a lead" ends up losing money after close rate and servicing cost are factored in. Write your four numbers down before you read any further.',
      ),
      stats("Two owners, same industry, different answer", [
        { v: "$8k avg job", l: "Owner A — commercial plumbing, 40% close rate" },
        { v: "$280 lead", l: "Owner A pays this happily → ~$700 CAC" },
        { v: "$450 avg job", l: "Owner B — residential handyman, 22% close rate" },
        { v: "$120 lead", l: "Owner B pays this → $545 CAC on a $450 job. Loss." },
      ]),
      p(
        "The two owners above are real (industry disguised). Same city, same broad category, opposite conclusions on pay-per-lead. Owner A is buying $8k jobs for $700 in acquisition — a 91% gross margin on marketing. Owner B is losing money on every lead and doesn't realise it because the invoices still land and cashflow feels fine. Volume masks the maths for months.",
      ),
      h2("What a retainer agency actually gives you"),
      p(
        "A good retainer buys you assets you keep: a tuned Google Ads account, a ranking website, tracked landing pages, remarketing audiences, and reporting you can defend to your accountant. The risk sits with you — if it doesn't work, you still paid.",
      ),
      h3("The upside owners underestimate"),
      p(
        "With a retainer, every dollar you spend builds compounding equity. A Google Ads account with 18 months of conversion data bids smarter than a fresh one. An SEO site that ranked six months ago tends to keep ranking. A remarketing audience of 15,000 warm visitors is worth cash. When you eventually sell the business, these assets are on the ledger. Pay-per-lead builds no such equity.",
      ),
      h3("The downside owners underestimate"),
      p(
        "You have to actively manage the manager. A retainer where you don't open the reports for three months is where the wheels come off — not because agencies are lazy, but because without your context (busy season, service lines you want more of, jobs you don't) the account drifts. Budget 30 minutes a week for the check-in call. If you can't, retainer isn't for you.",
      ),
      h2("What pay per lead actually gives you"),
      p(
        "The provider takes the risk on the plumbing. You get an inbound call or form fill and you pay for the qualified ones only. The trade-off: you don't own the ranking site, ads account or audience. Stop paying and the leads stop.",
      ),
      h3("Exclusive vs shared — the single most important question to ask"),
      p(
        'Not all pay-per-lead is created equal. "Shared" leads (HiPages, Oneflare, most lead brokers) sell the same enquiry to three or four of your competitors. Your close rate typically drops from 30-40% to 8-15% on a shared lead, which changes the maths dramatically. "Exclusive" leads go to one buyer only — you. Always ask before signing anything.',
      ),
      callout(
        "The one that surprises owners",
        "Under most pay-per-lead contracts you don't take the loss on wasted clicks, agency mismanagement, or a bad quarter of Google algorithm changes. That's genuinely valuable — as long as the per-lead price makes sense against your job value.",
      ),
      h2("The maths every owner should run before signing anything"),
      p(
        "Two formulas do the heavy lifting. Learn them and you'll never be talked into a bad deal again.",
      ),
      p(
        "First: Cost of Acquisition (CAC) = Cost per Lead ÷ Close Rate. If leads cost you $120 and you close 25% of them, your true CAC is $480. Second: Gross Marketing Profit = Average Job Value − CAC − Cost of Delivery. If the answer is less than 20% of the job value, the model is too tight to survive a bad month.",
      ),
      stats("The CAC test — quick reference", [
        { v: "<10%", l: "of job value on CAC → very healthy" },
        { v: "10-20%", l: "on CAC → healthy for most services" },
        { v: "20-30%", l: "on CAC → tight; needs strong repeat/referral tail" },
        { v: ">30%", l: "on CAC → almost always a loss when servicing is honest" },
      ]),
      cta(
        "Want me to run these numbers on your business?",
        "Send me your job value, close rate and current cost per lead. I'll model both scenarios and tell you which model wins — even if it isn't ours.",
        "Get the free comparison",
        "/contact-us",
      ),
      h2("A simple decision tree"),
      ordered([
        "Job value under $500 and close rate under 30% → retainer, always. PPL maths won't work.",
        "Job value $500–$2,000 → either can work. Pick based on cash: retainer if you can fund 90 days, PPL if you can't.",
        "Job value $2,000+ with strong sales process → PPL almost always wins on speed and risk.",
        "You want an asset you own long-term (site, ads account, audiences) → retainer, no debate.",
      ]),
      p(
        "One nuance: if you're brand-new to a market or launching a new service line, pay-per-lead is a fast way to test demand without committing to a $30k build. Once demand is proven, roll the winnings into a retainer that builds you the asset you'll keep.",
      ),
      quote(
        "We stopped worrying about CPC and started worrying about cost per booked job. Everything changed.",
        "Owner, Sydney electrical contractor",
      ),
      h2("Red flags in either model"),
      list([
        "PPL providers who won't tell you the number of other buyers per lead",
        "Retainer agencies with no call tracking or CRM integration",
        "Any contract locking you in for 12 months without an exit clause",
        'Lead "credits" instead of refunds for genuinely junk leads',
        "Reporting that talks about impressions instead of booked work",
      ]),
      h2("The hybrid model most owners never consider"),
      p(
        "The healthiest engine we see in the client book is a hybrid: a retainer running Google Ads and SEO to build the asset base, plus a pay-per-lead layer for overflow months or a specific service line where the sales cycle is fast and the margins fat enough to absorb the higher per-lead cost. This spreads risk, protects cashflow, and gives you a lever to pull in either direction depending on the quarter.",
      ),
      h2("Frequently asked questions"),
      h3("What happens if I want to leave a retainer?"),
      p(
        "In a well-structured retainer you leave with your Google Ads account, your website, your CRM data, your remarketing audiences and any content built for you. If the agency won't hand any of that over, that's a serious red flag — read your contract carefully before signing anything with a 12-month lock-in.",
      ),
      h3("Is pay-per-lead the same as buying HiPages leads?"),
      p(
        "No. HiPages and similar platforms are lead-sharing brokers — the same lead goes to multiple buyers. A proper exclusive pay-per-lead model runs its own Google Ads or SEO engine and sends each enquiry to one business only. Close rates are typically 2-3x higher.",
      ),
      h3("Can I start with pay-per-lead and switch later?"),
      p(
        "Yes, and many owners do. Use pay-per-lead to fund the first 90 days while a retainer-driven site and ads account come online, then throttle the PPL down as your owned channels ramp up.",
      ),
      cta(
        "Not sure which model fits your numbers?",
        "Send us your average job value, close rate and monthly volume. We'll model both and tell you which one to pick — even if it isn't us.",
        "Get the free comparison",
        "/contact-us",
      ),
      links("Explore the models", [
        {
          label: "Pay Per Lead service",
          to: "/services/pay-per-lead",
          desc: "How our exclusive-lead model works",
        },
        {
          label: "Google Ads (retainer)",
          to: "/services/google-ads",
          desc: "Ads account you own and keep",
        },
        {
          label: "Pay Per Lead for Tradies",
          to: "/pay-per-lead-for-tradies",
          desc: "Tradie-specific pricing tiers",
        },
      ]),
    ],
  },

  {
    slug: "google-ads-for-small-business",
    kicker: "Google Ads for Small Business",
    title: "Google Ads for Small Business: Stop Burning Budget on the Wrong Keywords",
    metaTitle: "Google Ads for Small Business Australia | Leadweb Marketing",
    metaDescription:
      "How Australian small-business owners can cut their Google Ads spend by 30-50% while getting more booked jobs. Real tactics, no jargon.",
    excerpt:
      "Most small-business Google Ads accounts waste 30-50% of budget on keywords that never convert. Here's how to find those leaks and plug them this week.",
    category: "Google Ads",
    readMinutes: 14,
    publishedAt: "2026-01-27",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "I've audited close to 900 Google Ads accounts over the last decade. The single most common finding — across trades, dentists, lawyers, gyms — is that 30-50% of the monthly spend is going to keywords that have never produced a booked job. Not a bad lead. Not a lead at all.",
      ),
      p(
        "That waste isn't the agency being lazy or the owner being incompetent. It's the compounding effect of Google's platform quietly nudging every account towards higher spend and looser match types, combined with the fact that most owners look at reports monthly instead of the search terms weekly. The good news: once you know exactly where the leaks are, plugging them is the fastest performance uplift you can get in your whole business. Most owners see meaningful change within two weeks.",
      ),
      p(
        "This post is the audit checklist I run on new client accounts, written for owners who want to sanity-check their agency or their own hands-on setup. Nothing here needs a PhD — but it does need weekly attention.",
      ),
      stats(
        "The 900-audit average",
        [
          { v: "37%", l: "of spend on zero-conversion keywords" },
          { v: "18%", l: "of clicks from irrelevant search terms" },
          { v: "$0", l: "call tracking configured (yes, really)" },
          { v: "2.4x", l: "typical uplift after 60 days of clean-up" },
        ],
        "Leadweb account audits, 2018–2025",
      ),
      h2("Why Google Ads quietly gets worse over time"),
      p(
        "An account that was tight and profitable 18 months ago rarely stays that way. Google iterates the platform constantly — new match-type behaviours, new automated bidding recommendations, Performance Max campaigns being turned on by default. Every one of those changes tilts the account towards spending more of your budget in places you didn't approve. If nobody is watching, the account drifts. Every account drifts. The only defence is the weekly ritual further down this post.",
      ),
      h2("The three account setups that quietly bleed money"),
      h3("1. Broad match with no negative keyword list"),
      p(
        'Broad match is Google\'s default and it\'s fine — as long as you\'re feeding it a robust negative keyword list. Without one, a plumber ends up paying for "how to plumb a p-trap YouTube." A dentist pays for "dentist salary Australia." A lawyer pays for "free legal advice reddit." None of them ever become clients.',
      ),
      p(
        "Start with a universal negative list — free, cheap, DIY, reddit, YouTube, job, salary, course, training, wiki, meaning, definition — and apply it at account level. Then run the Search Terms report weekly and add every irrelevant query. Most accounts should have 300+ negatives within 90 days.",
      ),
      h3("2. Search + Display bundled in one campaign"),
      p(
        "Google's onboarding wizard loves to tick both boxes. Display eats 60-80% of the budget and produces almost none of the conversions. Separate campaigns, always. Kill Display for lead-gen unless you're running a specific remarketing play.",
      ),
      h3("3. Smart Bidding on a fresh account with no conversion data"),
      p(
        "Smart Bidding needs at least 30 conversions in 30 days before it stops being expensive guessing. Start on Manual CPC, get the account to that threshold, then flip.",
      ),
      h3('4. Performance Max as the default "easy" campaign'),
      p(
        "Performance Max is Google's most-pushed campaign type in 2026 and its most opaque. For established brands with existing data it can work; for small businesses it usually spends unpredictably across surfaces you didn't ask for. If you run PMax, at minimum cap its budget, feed it a strong asset group, and exclude your brand terms so it doesn't take credit for demand you'd have captured for free.",
      ),
      callout(
        "The 90-minute weekly ritual",
        "Every Monday: run the Search Terms report, negative-out anything irrelevant, pause any keyword with 50+ clicks and zero conversions, and increase bids on the 3 keywords with the best cost per lead. That's it. 90 minutes. Most small businesses skip it and wonder why the account drifts.",
      ),
      h2("Conversion tracking — the invisible foundation"),
      p(
        'Half the accounts I audit are technically "tracking conversions" but tracking the wrong things. "Page viewed for 30 seconds" is not a conversion. "Contact page opened" is not a conversion. A phone call over 90 seconds, a submitted form, or a booking confirmation is a conversion. Fix this before you optimise anything else — bidding on garbage signals will always beat you.',
      ),
      p(
        "The gold-standard stack: call-tracking (with 60-90 second qualifying threshold) on every ad extension and the site, form submissions posted into a CRM, and where possible offline conversion imports that mark which leads actually closed. Once Google knows which clicks turned into revenue — not just leads — Smart Bidding gets dramatically better.",
      ),
      cta(
        "Want me to audit your account this week?",
        "45-minute Loom video walkthrough — what's leaking, what to fix first, and what it's worth in monthly leads. Free even if you don't work with us.",
        "Book the free ads audit",
        "/google-ads-brief",
      ),
      h2("What a lean small-business account looks like"),
      ordered([
        "One campaign per service line — not per suburb.",
        "5-15 exact + phrase match keywords per ad group.",
        "A dedicated landing page per service (not the homepage).",
        "Call tracking on every ad extension.",
        "Conversion actions weighted: booked job > form fill > phone click.",
        "Weekly search-terms review; monthly bid + budget review.",
      ]),
      h2("Landing pages: the multiplier no one wants to build"),
      p(
        "You can cut CPC in half by writing better ads. You can cut cost per booked job by two-thirds by building a proper landing page per service. It's the highest-leverage change in the whole system and it's the one most owners skip because \"the website already exists.\"",
      ),
      list([
        "One page per money-service — not per suburb, per service.",
        "H1 names the outcome the searcher is after, in their language.",
        "Trust bar in the hero — insurance, guarantees, years in business.",
        "Phone number tap-to-call top-right and sticky on mobile.",
        "A 3-5 field form, not the 9-field monster your CRM defaulted to.",
        "Real reviews with names and dates, not stock testimonials.",
      ]),
      h2("What good performance looks like in Australia"),
      stats(
        "AU service-business Google Ads benchmarks",
        [
          { v: "8-14%", l: "Click-through rate on high-intent commercial terms" },
          { v: "$4-$12", l: "Cost per click on most trade + health terms" },
          { v: "$40-$140", l: "Cost per qualified lead (median)" },
          { v: "12-25%", l: "Landing page conversion rate for lean pages" },
        ],
        "Leadweb 2025 client benchmark",
      ),
      h2("The 30-day account rescue plan"),
      ordered([
        "Week 1: Fix conversion tracking. Call tracking, form tracking, offline import if possible. Nothing else matters if this is wrong.",
        "Week 2: Split any bundled Search + Display campaigns. Kill Display for lead-gen. Cap Performance Max budget.",
        "Week 3: Purge keywords with 50+ clicks and zero conversions. Build a 200-line negative keyword list from the last 90 days of search terms.",
        "Week 4: Rebuild one landing page for your highest-spend service. Point traffic at it. Measure the lift.",
      ]),
      p(
        "Do those four weeks and you'll typically see a 25-50% drop in cost per lead. Most owners find the exercise pays for a year of consulting before they hit day 30.",
      ),
      h2("Frequently asked owner questions"),
      h3("Should I use Google's automated recommendations?"),
      p(
        "Read them, apply nothing automatically. Google's recommendations are optimised for Google's revenue, not yours. Some are genuinely useful (broken ads, disapproved extensions); most are budget-increase nudges dressed as best practice.",
      ),
      h3("How much should I spend?"),
      p(
        "Enough to hit 30 conversions in 30 days per campaign — that's the threshold at which Smart Bidding starts working properly. In most Australian service categories that's $2,000-$6,000/month per money service. Below that, run manual CPC and be patient.",
      ),
      h3("Do I need an agency or can I run this myself?"),
      p(
        "If you can dedicate the weekly 90 minutes and enjoy the tinkering, you can run a small account well. If you can't, an agency with a specialist paid-search operator will usually make its fee back within 60 days by plugging the leaks you don't have time to see.",
      ),
      cta(
        "Want us to audit your Google Ads account?",
        "45-minute Loom video walkthrough of what's leaking, what to fix first, and what it's worth in monthly leads. Free — even if you don't work with us.",
        "Book the free ads audit",
        "/google-ads-brief",
      ),
      links("Keep reading", [
        {
          label: "Google Ads service",
          to: "/services/google-ads",
          desc: "Managed weekly by a specialist",
        },
        {
          label: "Digital marketing for tradies",
          to: "/industries/digital-marketing-for-tradie",
          desc: "Tradie-specific playbook",
        },
        { label: "SEO", to: "/services/seo", desc: "The compounding sister to Google Ads" },
      ]),
    ],
  },

  {
    slug: "seo-in-2026-ai-overviews-and-eeat",
    kicker: "SEO 2026",
    title: "SEO in 2026: Ranking with AI Overviews, E-E-A-T and Fewer Clicks",
    metaTitle: "SEO in 2026 — AI Overviews & E-E-A-T Guide | Leadweb Marketing",
    metaDescription:
      "AI Overviews are eating the top of Google. Here's how Australian businesses are still winning organic traffic — and turning it into booked jobs.",
    excerpt:
      "AI Overviews now appear on more than half of Aussie service-industry searches. Here's how SEO actually works in 2026 — and why the fundamentals matter more, not less.",
    category: "SEO",
    readMinutes: 15,
    publishedAt: "2026-02-03",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "Every quarter someone announces the death of SEO. Every quarter, organic search still drives more revenue for Australian service businesses than any other channel. What did change in 2025 — genuinely, meaningfully — is where the click lands.",
      ),
      p(
        "The panic in most SEO commentary is aimed at bloggers, affiliates and thin-content sites — the businesses whose only product was a click. If you run a service business that solves a paid problem, the picture is far less scary. In fact, for commercial searches with local intent, organic click-through has quietly gone up in the last twelve months, because AI Overviews shortened the visual page and pushed the map pack and top three organic results into more valuable real estate.",
      ),
      p(
        "This piece is the SEO playbook we actually run for clients in 2026 — what changed, what didn't, what's worth doing this quarter, and what to stop paying for. If you've had an agency quote you $5k/month for \"content marketing\" without ever mentioning your booked-job rate, read to the end before you sign.",
      ),
      stats(
        "The 2026 organic reality",
        [
          { v: "54%", l: "of AU commercial searches now show an AI Overview" },
          { v: "-31%", l: "click-through on informational queries with an AI Overview" },
          { v: "+18%", l: "click-through on high-intent commercial + local queries" },
          { v: "72%", l: "of clicks still go to the top 3 organic results" },
        ],
        "Ahrefs, Semrush AU, Leadweb client cohort 2025",
      ),
      h2("Why commercial SEO actually got easier"),
      p(
        'AI Overviews are eating the informational middle — "how do I unblock a drain," "what does an SEO do," etc. Which sounds bad, until you realise your business never made money from those clicks anyway. What survived (and grew) is the transactional end: "emergency plumber Parramatta," "dentist near me open Saturday," "conveyancing Bondi price." Those clicks still go to page one, and page one is now shorter because AI ate the fold.',
      ),
      p(
        "The shift also killed off a whole category of low-effort competitor: the aggregator sites, thin affiliate blogs and content mills that used to squat on your keywords. When Google's own AI answers the informational query, those sites lose the click, lose the ad revenue, and stop investing in the vertical. That leaves more room for real businesses with real reviews and real photos to rank on the queries that actually pay.",
      ),
      h2("The three types of query and how they behave in 2026"),
      h3('Informational ("how does…", "what is…", "why won\'t…")'),
      p(
        "Answered directly by AI Overview in most cases. Click-through has fallen 30-40%. Still worth writing about — but only when it feeds a commercial page. Every info article should end with a clear internal link and CTA into the service page that pays.",
      ),
      h3('Commercial ("best [service]", "[service] near me", "[service] [suburb]")'),
      p(
        "Click-through has grown. The map pack plus the top three organic results own most of the traffic. This is where 80% of your SEO investment should sit if you're a service business.",
      ),
      h3('Navigational ("[your brand]", "[competitor] reviews")'),
      p(
        "Unchanged. Google still sends brand searches to the brand's site. Make sure your homepage ranks first for your own name and that a competitor isn't buying your brand as a paid keyword.",
      ),
      h2("E-E-A-T isn't a buzzword any more — it's a scoring signal"),
      p(
        "Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust) framework moved from a raters' guide to a measurable input in 2025. Practically, that means the pages that win now do three things:",
      ),
      ordered([
        "Show a real author with a real face, credentials and other content on the same topic.",
        "Cite first-party experience — case studies, before/after photos, dated projects, named clients.",
        "Have consistent NAP (Name, Address, Phone), verified Google Business Profile, and real reviews under 60 days old.",
      ]),
      p(
        "None of this is optional any more. A well-written service page with no named author, no photos and no real client outcomes now loses to a plainer page that has all three. Google's scoring models are explicitly looking for signs that a real, accountable business wrote the page, not a content mill or an AI-generated template.",
      ),
      callout(
        "Fast-win checklist",
        "Add an author bio block with photo, credentials and LinkedIn to every service page. Add a case-study block with a specific dollar or job-count outcome. Ask three happy clients this week for a Google review with a project detail in it. That trio alone lifts most sites in 30-60 days.",
      ),
      h2("What content actually ranks now"),
      p(
        'Thin "top 10 tips" articles are dead. What\'s ranking is depth-plus-authorship: 1,500-3,000 word pieces written by (or bylined to) someone with obvious skin in the game, with schema markup, original data or examples, and clear internal linking to the commercial pages that pay the bills.',
      ),
      p(
        "Original data is the unfair advantage most owners overlook. You already have data no one else has — your quote-to-close rates by service, the seasonality of your enquiries, the top five reasons customers cancel. Turning even one of those into a public post per quarter builds authority faster than any keyword targeting could.",
      ),
      cta(
        "Want a 40-point SEO audit of your site?",
        "Free, no pitch. We'll send you the top 5 wins for the next 90 days — the same audit we run on new clients before any work begins.",
        "Get the free SEO audit",
        "/seo-brief",
      ),
      h2("The 2026 technical SEO baseline"),
      list([
        "Core Web Vitals green on mobile (LCP <2.5s, INP <200ms, CLS <0.1)",
        "Structured data: Organization, LocalBusiness, FAQPage, Article, BreadcrumbList",
        "Fully-crawled XML sitemap with lastmod dates that actually change",
        "HTTPS everywhere, no mixed content, HSTS preload",
        "Internal links from every blog post to at least 2 commercial pages",
      ]),
      p(
        "Technical SEO in 2026 is table stakes, not a differentiator. Get it green once, then leave it alone. The compounding wins are on the content and reputation side — which is where most owners under-invest.",
      ),
      h2("Local SEO is now the biggest single lever"),
      p(
        "For any business with a service area, the Google Business Profile and the map pack drive more enquiries than the classic organic listings do. Practical priorities: complete every field on your GBP, add 25+ real photos, post weekly, reply to every review within 24 hours (the good ones too), and build a service-page-per-suburb only where you actually service the area. Faking suburb coverage is a fast way to get manual-action penalised in 2026.",
      ),
      h2("What to stop paying for"),
      list([
        "Bulk directory submissions and citation packages — Google devalued them years ago.",
        "AI-generated content dumps published under no named author.",
        '"Domain Rating" or "DA" as a KPI in your reports — it\'s a third-party tool score, not a Google signal.',
        "Guest-post link farms that promise 20 backlinks a month; the risk-reward flipped negative in 2024.",
        "Any SEO retainer that can't tie work to booked jobs within 6 months.",
      ]),
      h2("The 90-day SEO plan we actually run"),
      ordered([
        "Days 1-14: Technical audit + tracking. Fix Core Web Vitals, install proper schema, connect GA4 + Search Console with conversion tracking.",
        "Days 15-45: On-page overhaul of the 5 highest-intent commercial pages. New H1s, expanded content, author bios, real case studies, internal links.",
        "Days 30-60: GBP and reputation. Post weekly, request reviews weekly, reply to everything within 24 hours.",
        "Days 45-90: One authority content piece per fortnight, each internally linked into a commercial page.",
        "Day 90: Review Search Console query data, prune what's not working, double down on what is.",
      ]),
      h2("Frequently asked owner questions"),
      h3("Has AI killed the SEO industry?"),
      p(
        "It killed a chunk of it — the low-effort blog-and-hope end. Real SEO focused on commercial intent, local presence and reputation is arguably more valuable now than it was three years ago, because fewer competitors are doing it well.",
      ),
      h3("Should I use AI to write my content?"),
      p(
        "As a drafting tool with heavy editorial control from a real subject-matter expert, yes. As a publish-and-forget content mill, no — Google's spam models are increasingly good at detecting it, and even when they don't, users bounce.",
      ),
      h3("How long before SEO pays back?"),
      p(
        "Local SEO and GBP work: 30-60 days. On-page and content: 90-180 days. Authority and links: 6-12 months. Anyone promising page-one rankings inside 30 days is either brand-searching your business name or lying.",
      ),
      cta(
        "Want to see where your site stands?",
        "We'll run your domain through the same 40-point SEO audit we use with clients and send you the top 5 wins for the next 90 days. No cost, no pitch.",
        "Get the free SEO audit",
        "/seo-brief",
      ),
      links("Related reading", [
        { label: "SEO service", to: "/services/seo", desc: "Ranking work that ties to revenue" },
        {
          label: "SEO agency Sydney",
          to: "/seo-agency-sydney",
          desc: "Local-market SEO playbook",
        },
        {
          label: "Digital marketing",
          to: "/services/google-ads",
          desc: "Pair SEO with paid for compounding demand",
        },
      ]),
    ],
  },

  {
    slug: "digital-marketing-strategy-that-books-jobs",
    kicker: "Digital Marketing That Actually Books Jobs",
    title: "The Digital Marketing Strategy That Actually Books Jobs (Not Just Clicks)",
    metaTitle: "Digital Marketing Strategy That Books Jobs | Leadweb Marketing",
    metaDescription:
      "A booked-job-first framework for digital marketing. Skip the vanity metrics and build a system that ties every dollar back to revenue.",
    excerpt:
      "Impressions don't pay staff. Here's a booked-job-first framework for digital marketing that any owner can audit their agency against.",
    category: "Digital Marketing",
    readMinutes: 13,
    publishedAt: "2026-02-10",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "There are only three questions a digital marketing strategy has to answer: where does the next enquiry come from, what does it cost, and did it turn into revenue? Everything else — impressions, reach, engagement — is scaffolding that agencies use to sound busy.",
      ),
      p(
        "Most owners I talk to don't need a bigger strategy. They need a smaller, honest one that survives contact with a busy quarter. The framework below is the one we run with clients turning over $500k to $30M. It fits on a single page, ties every dollar to a booked job, and gives you the language to hold any agency — including us — to account.",
      ),
      p(
        "It also happens to be the fastest way to find the 20-30% of your current marketing spend that isn't producing anything. Run through it with your last quarter's numbers before you sign a single new contract.",
      ),
      h2("The booked-job-first framework"),
      ordered([
        "Define the money job. What service, at what average value, do you actually want more of?",
        "Map the buyer journey. Who searches? What do they type? Where do they compare?",
        "Pick two demand channels — one fast (paid), one compounding (SEO/content).",
        "Build one conversion asset per money job — page, form, phone, done.",
        "Instrument the funnel end-to-end. Call tracking. CRM. Booked-job attribution.",
        "Review weekly, not monthly. Move budget toward what works within 7 days.",
      ]),
      h3("Step 1 in more detail: the money job"),
      p(
        "Almost every business has three or four services, one of which pays for everything else. In a plumbing business it might be commercial fitouts; in a dental practice it might be Invisalign; in a law firm it might be conveyancing. Your strategy should aim 70% of the marketing spend at the money job — not spread evenly across the menu.",
      ),
      h3("Step 2 in more detail: the journey"),
      p(
        "For every money job, write down five things: who initiates the search (owner, wife, office manager), what they Google, what they compare, what makes them anxious, and what triggers the buy. That single page becomes the brief for every landing page, ad and follow-up SMS you ever write.",
      ),
      h3("Step 3 in more detail: fast + compounding"),
      p(
        "Two channels is the sweet spot for most owners. Any fewer and you're one algorithm change away from a dead quarter. Any more and you'll under-execute all of them. Pick one demand-capture channel (usually Google Ads) and one demand-generation or compounding channel (SEO, referral, email, or Meta with a strong offer).",
      ),
      stats(
        "Where strategy usually breaks",
        [
          { v: "1 in 4", l: "AU service businesses have call tracking" },
          { v: "1 in 9", l: "map booked jobs back to source" },
          { v: "62%", l: "review marketing performance monthly or worse" },
          { v: "$4.10", l: "average return per $1 for owners who review weekly" },
        ],
        "Leadweb 2025 owner survey (n=340)",
      ),
      callout(
        "The one metric that changes everything",
        "Cost per booked job. Not cost per click. Not cost per lead. Cost per booked job. Once an owner sees this number, every other decision gets easier — including the decision to fire an agency.",
      ),
      h2("The five-page marketing plan every owner should have"),
      p(
        "Everything above should collapse into a five-page document you can hand to any employee, agency or investor. Page one: the money job and target volume. Page two: the buyer, the journey, the anxieties. Page three: the two channels, the budget split, the person accountable. Page four: the metrics that matter and the review cadence. Page five: the 90-day roadmap.",
      ),
      p(
        "If your current marketing plan is a slide deck with 40 tactics, an org chart and no target number, you don't have a plan — you have a wish list. Ruthlessly cut it back.",
      ),
      cta(
        "Want a booked-job-first plan built for your numbers?",
        "Answer six questions and a senior strategist will send you a channel + budget plan tied to your money job. One business day turnaround. No pitch.",
        "Get my growth plan",
        "/grow-your-business-form",
      ),
      h2("What to stop measuring"),
      list([
        "Impressions (a number that can grow while revenue shrinks)",
        "Instagram followers (unless you sell via DMs — most don't)",
        "Average time on page (a search-abandonment metric wearing a suit)",
        "Domain Rating (a tool score, not a customer)",
      ]),
      h2("What to start measuring instead"),
      list([
        "Cost per qualified lead by source",
        "Lead-to-quote conversion rate",
        "Quote-to-job conversion rate",
        "Average job value by lead source",
        "Payback period per channel",
      ]),
      p(
        "The last one — payback period — is the metric CFOs love and owners rarely calculate. If a lead source produces $1 of revenue for every $1 spent inside 30 days, that's a scaling opportunity. If it takes 12 months to pay back, it's a growth investment. Both can be right; you just need to know which is which so you don't panic-cut the wrong channel in a tight quarter.",
      ),
      h2("The weekly 45-minute review that actually moves numbers"),
      ordered([
        "Open the marketing dashboard. Total leads, cost per lead, booked jobs, revenue by source.",
        "Compare against the previous 4 weeks — spot the biggest change up and down.",
        "Pull search-terms or creative-level data on whichever channel moved the most.",
        "Make one change. Bigger budget, pause, new headline, new offer. One.",
        "Write it down with a date. Next week you'll know whether the change worked.",
      ]),
      p(
        "This 45-minute ritual is what separates the businesses growing 30% year on year from those flatlining while spending the same amount on marketing. There's no secret channel or hidden tactic — just weekly attention to a small handful of numbers.",
      ),
      h2("Signs your current strategy isn't working"),
      list([
        "Your reports talk about traffic and rankings, not booked jobs and revenue.",
        "You couldn't tell me your cost per booked job right now without a spreadsheet exercise.",
        'You\'re paying for services you don\'t understand — "content strategy," "brand governance," "awareness campaigns."',
        "Marketing is a monthly conversation, not a weekly one.",
        "You've forgotten what problem you originally hired the agency to solve.",
      ]),
      h2("Frequently asked owner questions"),
      h3("How much of my revenue should go on marketing?"),
      p(
        "For service businesses growing intentionally, 5-10% of revenue is a healthy range. Below 3% you're usually maintenance-mode. Above 15% for a sustained period and either you're pre-launch or something is broken in the conversion side, not the media side.",
      ),
      h3("Should I brief my agency on strategy or execution?"),
      p(
        "Both, but in different meetings. A monthly strategic review is for the money job, target volumes and channel mix. Weekly ops calls are for creative, keywords, offers. Confusing the two is how strategy meetings turn into tactical bike-shedding.",
      ),
      cta(
        "Want a booked-job-first plan for your business?",
        "Answer six questions and a strategist will build a channel + budget plan for your money job. One business day turnaround.",
        "Get my growth plan",
        "/grow-your-business-form",
      ),
      links("Go deeper", [
        { label: "Services overview", to: "/services", desc: "How we run each channel" },
        { label: "About Leadweb", to: "/about-us", desc: "Why we run this way" },
        { label: "Portfolio", to: "/about-us", desc: "Booked-job case studies" },
      ]),
    ],
  },

  {
    slug: "cost-per-lead-benchmarks-australia",
    kicker: "Cost Per Lead Generation Benchmarks",
    title: "Cost Per Lead Benchmarks Across Australian Industries (2026 Data)",
    metaTitle: "Cost Per Lead Benchmarks Australia 2026 | Leadweb Marketing",
    metaDescription:
      "Real cost-per-lead benchmarks across Australian trades, health, legal, real estate and professional services. Know what you should be paying.",
    excerpt:
      "Are you overpaying for leads? Here are 2026 CPL benchmarks across 12 Australian industries — plus the levers that push your number down.",
    category: "Lead Generation",
    readMinutes: 12,
    publishedAt: "2026-02-17",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "The single most useful number for a business owner talking to an agency isn't ROAS, isn't CTR — it's a defensible cost-per-lead range for their industry. Without it you're negotiating blind. So here are the numbers we see across our own book of clients, cross-checked against WordStream ANZ and public data from 2025.",
      ),
      p(
        'Two caveats before the tables. First, "lead" here means a qualified enquiry — a real phone call over 60 seconds or a form fill from someone in your service area asking about something you sell. Not an accidental click, not a job seeker, not a wrong-number call. Second, these are ranges, not promises. Your position inside the range depends on the operational discipline described further down.',
      ),
      p(
        "If your current numbers sit outside the top of these ranges, don't assume you have a media problem. Nine times out of ten it's a conversion problem — the media is fine, the landing page or the sales response is what's broken.",
      ),
      stats("AU cost per qualified lead — Google Ads (2025)", [
        { v: "$45-$95", l: "Plumbing, electrical, HVAC trades" },
        { v: "$65-$140", l: "Dental, cosmetic clinics" },
        { v: "$120-$280", l: "Law firms (personal injury, family)" },
        { v: "$35-$85", l: "Fitness, beauty, allied health" },
      ]),
      stats("AU cost per qualified lead — Meta + Facebook Ads (2025)", [
        { v: "$18-$45", l: "Fitness challenges, beauty offers" },
        { v: "$35-$90", l: "Home services with strong offer" },
        { v: "$60-$180", l: "High-ticket B2B / professional" },
      ]),
      stats("Pay Per Lead pricing (AU exclusive-lead market, 2025)", [
        { v: "$50-$100", l: "Small residential jobs — handyman, cleaning" },
        { v: "$100-$200", l: "Standard trades — plumbing, electrical" },
        { v: "$200-$500", l: "High-value trades — commercial, roofing" },
      ]),
      h2("Why the ranges are so wide"),
      p(
        'A plumber in a low-competition regional town can genuinely generate $30 leads. The same plumber in inner Sydney will pay $80+ for the same click. Suburb, seasonality, competitor density, offer strength and time of day all move the number by a factor of 2-3x. When someone quotes you a single "industry average," they\'re usually citing a US number from 2022.',
      ),
      p(
        "The other big driver is call-tracking honesty. A business that counts every phone click as a lead will report a much lower CPL than a business that only counts calls over 90 seconds from someone in their service area. When comparing your numbers to any benchmark — including these — check what definition you're using.",
      ),
      h2("Cost per lead is the wrong ceiling — cost per booked job is the right one"),
      p(
        "CPL is a useful diagnostic, but the number that pays your wages is cost per booked job (CAC). A $200 lead with a 50% close rate ($400 CAC) is cheaper than a $50 lead with an 8% close rate ($625 CAC). Owners who obsess over dropping CPL sometimes optimise their way into worse-quality leads and higher CAC without realising it.",
      ),
      stats(
        "The CAC benchmark most agencies won't quote",
        [
          { v: "$150-$400", l: "Trades — plumbing, electrical, HVAC" },
          { v: "$350-$900", l: "Dental, cosmetic clinics" },
          { v: "$800-$2,500", l: "Personal injury and family law" },
          { v: "$120-$350", l: "Fitness, beauty, allied health" },
        ],
        "Leadweb 2025 client cohort — booked-job attribution",
      ),
      h2("What pushes your CPL down"),
      list([
        "Tightening keywords to commercial intent only",
        "Landing page conversion rate above 12%",
        "Answering leads in under 5 minutes",
        "60+ Google reviews under 4.7 stars average",
        "Retargeting audiences of 5,000+ warm visitors",
      ]),
      p(
        "The two levers with the biggest compounding effect are conversion rate and review volume. A landing page that converts at 14% instead of 6% doesn't just halve your CPL — it also feeds Google's algorithm faster, which lowers your CPC over time. And a Google Business Profile with 60+ recent reviews will out-rank a competitor with better SEO but only 12 reviews from three years ago.",
      ),
      h2("What pushes your CPL up"),
      list([
        "Running ads to your homepage",
        "Broad match keywords with no negative list",
        "Slow mobile site (LCP over 3s)",
        "Forms with 8+ fields",
        "No call tracking (you can't optimise what you can't see)",
      ]),
      h2("Seasonal shifts every owner should plan for"),
      p(
        "Cost per lead is not flat across the year in Australia. Home-services CPLs typically spike 20-40% during peak summer storms and winter heating breakdowns, drop into holiday shutdown weeks, then normalise in Feb and March. Health and cosmetic clinics see a January + February surge as new-year resolution buyers appear. Legal spending peaks in March-April (EOFY-adjacent) and September. If your agency reports look at month-on-month without acknowledging seasonality, take them with salt.",
      ),
      cta(
        "Want your CPL benchmarked against your industry?",
        "Send us your last 60 days of ad data. We'll compare it to our client book and tell you exactly where the biggest wins are — free, no pitch.",
        "Get benchmarked",
        "/contact-us",
      ),
      callout(
        "Reality check",
        "If your CPL is 2x the top of the range above, you don't have a media problem — you have a conversion problem. More budget won't fix it. Fix the landing page and the response time first.",
      ),
      h2("How to actually use these numbers with your agency"),
      ordered([
        "Ask them what your CPL was last month by service and by campaign.",
        "Ask them what percentage of those leads booked a job — if they can't tell you, offline conversion tracking isn't set up.",
        "Compare your CPL and CAC against the ranges above. Flag anything more than 50% outside.",
        'Ask what specific change they\'re making this month to move the number. If the answer is "optimising bids," push for something concrete.',
        "Set a 90-day target and a review date. Numbers without a deadline drift forever.",
      ]),
      h2("Frequently asked owner questions"),
      h3("Should I switch platforms if my CPL is high?"),
      p(
        "Rarely. In 95% of cases, the same money spent on landing-page and response-time work will drop CPL faster than switching from Google to Meta or vice versa. Fix the funnel before you change the media.",
      ),
      h3("Why does my competitor claim they pay $10 a lead?"),
      p(
        "Because they're either counting differently (page views, phone clicks, MQLs), running in a much less competitive location, or exaggerating at the pub. Ignore the number and ask what their booked jobs per month are — that's the honest metric.",
      ),
      h3("Is a $500 lead ever worth it?"),
      p(
        "Absolutely — for the right business. A commercial plumber closing 40% of $8k jobs happily pays $500 for a lead. A residential handyman closing 22% of $450 jobs cannot. It's not about the lead price; it's about the CAC-to-LTV ratio.",
      ),
      cta(
        "Want your CPL benchmarked against your industry?",
        "Send us your last 60 days of ad data. We'll compare it to our client book and tell you where the biggest wins are.",
        "Get benchmarked",
        "/contact-us",
      ),
      links("Industry deep-dives", [
        {
          label: "Marketing for tradies",
          to: "/industries/digital-marketing-for-tradie",
          desc: "Trade-specific CPL and channels",
        },
        {
          label: "Marketing for dentists",
          to: "/industries/digital-marketing-for-dentists",
          desc: "Dental CPL benchmarks",
        },
        {
          label: "Marketing for law firms",
          to: "/industries/digital-marketing-for-law-firms",
          desc: "Legal CPL benchmarks",
        },
      ]),
    ],
  },

  {
    slug: "local-seo-for-tradies",
    kicker: "Local SEO for Tradies",
    title: "Local SEO for Tradies: How to Dominate Your Suburb on Google",
    metaTitle: "Local SEO for Tradies Australia | Leadweb Marketing",
    metaDescription:
      "The exact local SEO playbook Australian tradies are using to rank in the Google Map Pack and beat HiPages listings in their suburb.",
    excerpt:
      "The Google Map Pack is where 70% of tradie enquiries start. Here's the playbook to own it in your suburb — without paying HiPages a cent.",
    category: "SEO",
    readMinutes: 13,
    publishedAt: "2026-02-24",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "If you're a tradie in Australia, your single most valuable piece of digital real estate isn't your website. It's the three-pack that appears under the map when someone Googles \"plumber near me.\" Own that and the phone rings. Ignore it and you're paying HiPages for the privilege.",
      ),
      p(
        "The good news for owners reading this: most of your local competitors are quietly ignoring the Google Business Profile the same way they ignored websites in 2010. This is the last window of unfair advantage in tradie marketing. It doesn't cost a cent to fix, it takes a few hours a month once set up, and it produces leads that call your mobile directly with no ad spend against them.",
      ),
      p(
        "This is the same playbook I run with plumbers, sparkies, HVAC installers and roofers across greater Sydney. It works in inner-city Bondi and it works in outer-suburbs Penrith. What changes is the pace — dense competition means more reviews and more photos, but the moves are the same.",
      ),
      stats("Why the Map Pack matters", [
        { v: "70%", l: "of local-service searches on mobile go to the Map Pack first" },
        { v: "4.8s", l: "average time on a Map Pack listing before a call/click" },
        { v: "3x", l: "more calls than a top-10 organic result" },
        { v: "$0", l: "per click when a customer taps 'Call' from the pack" },
      ]),
      h2("How Google decides who ranks in the three-pack"),
      p(
        "Google's local ranking model boils down to three factors: relevance (do your categories and services match the query), distance (how close are you to the searcher), and prominence (how established and reviewed is the business). You can't cheat distance — Google knows where the phone is. But relevance and prominence are entirely under your control, and they're where every ranking gain comes from.",
      ),
      p(
        "Relevance is set by your primary category, secondary categories, service list, and the words on your website. Prominence is set by review volume, review recency, citation consistency, and how much activity your GBP shows week to week. Get all four right and you'll out-rank a bigger competitor with a stale profile within 60-90 days.",
      ),
      h2("The 8-step tradie Map Pack playbook"),
      ordered([
        "Claim and verify your Google Business Profile (still. some tradies haven't).",
        "Set exact service categories — Primary matches your money job.",
        "Fill every field: hours, service areas, description, services list, attributes.",
        "Upload 25+ real photos — jobs in progress, vehicles, team, before/afters.",
        "Post weekly — jobs done, offers, tips. Little effort, big signal.",
        "Ask every happy customer for a review — reply to every one within 24 hours.",
        "Build 20+ NAP-consistent citations (True Local, Yellow Pages, Yelp AU, industry directories).",
        "Point your website's Local Business schema at the exact same NAP.",
      ]),
      h3("Getting the primary category right"),
      p(
        'The primary category is the single biggest lever on the whole profile. "Plumber" ranks for a much broader set of queries than "emergency plumber service" — but the second is more specific and often wins the exact-match query. As a rule, set the primary to your money-job service (Plumber, Electrician, Roofing Contractor) and add three to five secondary categories for the adjacent services you also want to appear for.',
      ),
      h3("Photos that actually move rankings"),
      p(
        "Google's own data has publicly noted that profiles with 100+ photos get roughly 520% more calls than profiles with fewer than 10. What matters isn't stock imagery — it's real, geotagged photos of jobs in your service area, uploaded on a rolling basis so the profile looks active. Add three to five photos a week from the ute after every job. Ten minutes total, huge cumulative effect.",
      ),
      h3("Weekly posts are the free ranking signal owners ignore"),
      p(
        "GBP Posts are the equivalent of a mini blog attached to your profile. They tell Google the business is active, they add fresh text for the algorithm to read, and they show up in the profile for real customers deciding whether to call. A photo of the job you finished on Friday plus a two-line caption takes 90 seconds. Do it every week and you'll out-signal 95% of your local competition.",
      ),
      callout(
        "The review script that works",
        "Text them within 30 minutes of finishing the job: \"Thanks [Name] — really appreciate the work. If you've got 30 seconds, a Google review makes a massive difference for a small business like ours. Here's the link: [link]\" Response rate: about 4x a generic email.",
      ),
      h2("The reviews-per-month target that actually ranks"),
      p(
        "You don't need 500 reviews to dominate a suburb. What you need is a steady drip — five to ten fresh reviews a month, replied to within 24 hours, with the business name and location naturally appearing in some of them. A profile with 80 reviews at 4.8 stars, three added in the last month, will out-rank a competitor with 400 reviews all from 2022.",
      ),
      p(
        "Reply to every review, positive and negative. Google reads replies, and prospective customers absolutely read them. A calm, factual reply to a two-star review shows more about your business than the review itself does.",
      ),
      cta(
        "Want us to audit your Google Business Profile?",
        "Free 15-minute video review of your GBP, top 5 fixes, and what they're worth in ranking positions. Tradies only — we know the industry.",
        "Get the free GBP audit",
        "/contact-us",
      ),
      h2("What kills tradie Map Pack rankings"),
      list([
        "Using a PO Box instead of a real address",
        "Different phone number on GBP vs your website",
        "Photos all uploaded on day one, then nothing for 6 months",
        "Reviews all from 2023, none from the last 90 days",
        'Service area set to "all of Sydney" (too broad — Google trusts specificity)',
      ]),
      p(
        "The specificity point matters most. A tradie who honestly services five suburbs will out-rank a competitor who claims to cover all of greater Sydney. Google would rather trust a small, verifiable service area than a huge, dubious one.",
      ),
      h2("Suburb pages: when they help and when they hurt"),
      p(
        'A well-written service-plus-suburb page ("Emergency Plumber in Parramatta") can lift you into the classic organic results just below the map pack. But only if you actually service the suburb, the content is genuinely different from your other suburb pages, and you can back it up with a case study or job photo from that suburb.',
      ),
      p(
        "The fastest way to get penalised in 2026 is to auto-generate 300 suburb pages from a template. Google's spam models spot the pattern within weeks and quietly demote the whole domain. Build suburb pages one at a time, on suburbs you truly cover, with real proof.",
      ),
      h2("Beating HiPages in your own suburb"),
      p(
        "HiPages, Oneflare and the other lead-sharing platforms rank because they have huge domain authority and heavy internal linking. You can't out-authority them domain-for-domain. What you can do is out-specifically them on the local query: hyper-relevant GBP, weekly recent reviews, real photos and a service-page-per-suburb that's obviously written by a human who's actually been there. In practice, this puts a well-run tradie business above HiPages in the local pack — which is where 70% of the clicks are going anyway.",
      ),
      h2("Frequently asked owner questions"),
      h3("Do I need a physical shopfront to rank?"),
      p(
        "No. Service-area businesses (SABs) rank in the map pack based on where the customer is searching from, not where your address is. You do need a verified address (Google will post you a code) but you can then hide it and set a service area instead. This is the standard setup for tradies.",
      ),
      h3("Can I put keywords in my business name?"),
      p(
        "No — and doing so risks suspension. Your GBP business name must match your actual registered business name. If your business is legitimately \"Sydney Emergency Plumbers Pty Ltd\" that's fine. Adding suburb or service keywords you don't legally trade under is against Google's guidelines.",
      ),
      h3("How long before I see results?"),
      p(
        "Fresh profile with the full setup done properly: first ranking movement in 30-60 days, steady map-pack presence in 60-90 days. Mature profile with the reactivation work above: often ranking gains inside two to three weeks because most of the signals are already there and just need refreshing.",
      ),
      cta(
        "Want us to audit your Google Business Profile?",
        "Free 15-minute video review of your GBP, top 5 fixes, and what they're worth in ranking positions. Tradies only — we know the industry.",
        "Get the free GBP audit",
        "/contact-us",
      ),
      links("More for tradies", [
        {
          label: "Digital marketing for tradies",
          to: "/industries/digital-marketing-for-tradie",
          desc: "The full playbook",
        },
        {
          label: "Pay per lead for tradies",
          to: "/pay-per-lead-for-tradies",
          desc: "Exclusive leads, no HiPages",
        },
        { label: "SEO service", to: "/services/seo", desc: "Ranking work end-to-end" },
      ]),
    ],
  },

  {
    slug: "meta-ads-for-service-businesses",
    kicker: "Meta Ads for Service-Based Businesses",
    title: "Meta Ads for Service Businesses: From Scroll to Booked Call",
    metaTitle: "Meta Ads for Australian Service Businesses | Leadweb Marketing",
    metaDescription:
      "How Australian service businesses turn Facebook and Instagram scrolls into booked calls — with real CPL benchmarks and creative that converts.",
    excerpt:
      "Meta Ads are the cheapest way to buy attention in Australia — if you know what you're doing. Here's the creative and offer stack that turns scrolls into calls.",
    category: "Digital Marketing",
    readMinutes: 13,
    publishedAt: "2026-03-03",
    updatedAt: "2026-07-10",
    sections: [
      p(
        'Meta Ads (Facebook + Instagram) get dismissed by service-business owners as "where you buy likes." Which is a shame, because when the offer, creative and audience line up, they produce leads at roughly 40-60% of the Google Ads cost. The catch — and it\'s a real one — is that Meta is a demand-generation channel, not a demand-capture channel. You have to create the want.',
      ),
      p(
        "The owners winning on Meta in 2026 aren't the ones with the biggest creative budgets. They're the ones who understood that the platform rewards native-looking content, strong specific offers, and fast follow-up. This piece walks through the exact stack we run for service-business clients — the offer, the creative, the audiences, the follow-up, and the numbers to expect.",
      ),
      p(
        "If you tried Meta three years ago and it \"didn't work,\" the platform has changed substantially. Advantage+ audiences, better lead forms, and much cheaper video hosting mean the model that failed in 2022 often works today with less effort than you'd expect.",
      ),
      h2("Search vs Social: two very different buyers"),
      stats("The mindset difference", [
        { v: "Google", l: '"I already want this — who does it?"' },
        { v: "Meta", l: '"I wasn\'t thinking about this — but tell me more."' },
        { v: "60%", l: "cheaper CPL on Meta when the offer is compelling" },
        { v: "3x", l: "longer sales cycle on Meta leads on average" },
      ]),
      p(
        "This one distinction changes everything about how you write ads, structure landing pages and follow up on leads. A Google Ads lead often wants a quote in the next hour. A Meta lead often wants information first, a quote second, and a decision in a week. Treating them the same is the fastest way to burn Meta budget.",
      ),
      h2("The offer stack that works on Meta"),
      ordered([
        'A specific, scroll-stopping offer ("$99 gutter clean this month" beats "quality gutter cleaning")',
        "A hero visual that looks native to the feed, not to an agency deck",
        "A short-form video (15-30s) with captions burnt in",
        "A one-page landing (or Meta Lead Form) — no navigation, no distractions",
        "A follow-up SMS within 5 minutes (60% of Meta leads never answer the first call)",
      ]),
      h3('Why a specific price beats "quality service"'),
      p(
        "The Meta feed is a competitive attention environment. A generic ad has to earn a click on brand alone; a specific-price ad earns a click on curiosity plus arithmetic. Even if only 15% of leads take the exact advertised offer, you now have their number and permission to sell them a bigger job.",
      ),
      h3("Native creative vs agency creative"),
      p(
        'The single fastest way to spot an ad that will underperform is to look at whether it feels like something a friend could have posted. Slick agency creative with big logos and rendered graphics reads as an ad instantly and gets scrolled past. A phone-shot video of the owner walking through a finished job, with the caption "just finished this one in Blacktown," reads as content — and gets watched.',
      ),
      callout(
        "The single biggest mistake",
        'Running Meta Ads with no offer. "Get in touch for a quote" is not an offer — it\'s a request. Give people a reason to click today: a price, a bonus, a deadline, a checklist.',
      ),
      h2("Meta Lead Forms vs landing pages: which to use"),
      p(
        "Meta Lead Forms are the built-in mini-form that fills itself in from the user's Facebook profile. CPLs are typically 30-50% lower than pushing traffic to a landing page. The trade-off: lead quality is lower — because friction is lower — and lead capture happens inside Meta, so getting the data into your CRM and phone in real time requires a bit of setup.",
      ),
      p(
        "Rule of thumb: use Lead Forms when volume matters more than per-lead quality (fitness challenges, low-ticket offers, cosmetic consults). Use landing pages when the average job value is high enough that a slightly better-qualified lead is worth the higher CPL (roofing, commercial trades, professional services).",
      ),
      h2("Creative that stops the scroll"),
      list([
        "Real photos of your team and jobs — not stock",
        "Owner talking to camera (yes, you)",
        "Before/after slides with dollar or time savings",
        "Customer testimonial video (30-60s, unpolished is fine)",
        "Screen-recording of the review the customer just left you",
      ]),
      p(
        "You should be shipping three to five new creative variants a week. Meta's algorithm quickly finds the winner and rests the losers. Ad accounts that ship one creative a month have almost no chance against competitors iterating weekly.",
      ),
      cta(
        "Want a Meta Ads playbook built for your business?",
        "Tell us your service, average job value and area. We'll come back with a creative + audience + offer plan you can either hand to us or run yourself. Free, no pitch.",
        "Get the free Meta plan",
        "/social-media-brief",
      ),
      h2("Audience layers to test in order"),
      ordered([
        "Warm: your customer list (upload for lookalike + retargeting)",
        "Warm: 90-day website visitors",
        "Warm: 365-day video viewers of 25%+",
        "Cold: 1% lookalike of customers, geo-fenced to your service area",
        "Cold: interest + geo combos as a distant fifth",
      ]),
      p(
        "In 2026, Meta's Advantage+ audience option has quietly become the default best answer for cold traffic in most service categories. Feed it your conversion signal, exclude existing customers, add a geo constraint to your service area, and let the algorithm find the pattern. Manual interest stacking rarely beats it any more.",
      ),
      h2("The 5-minute follow-up rule"),
      p(
        "The single biggest variable in Meta ROI is not the ad, the offer or the creative. It's how fast you call the lead. A Meta lead who fills a form on Sunday night and is called Monday morning has already forgotten they enquired. A Meta lead called back inside five minutes closes at roughly 3-4x the rate of one called back the next day.",
      ),
      p(
        "Set up an SMS auto-reply the second the form fills, then a phone call within five minutes during business hours. Send a follow-up SMS after any unanswered call. This piece of ops discipline alone can double the ROAS of a Meta account with no creative change.",
      ),
      h2("What good Meta performance looks like in Australia"),
      stats("AU Meta Ads benchmarks — service businesses (2025)", [
        { v: "$4-$18", l: "Cost per lead (Meta Lead Form, strong offer)" },
        { v: "$25-$90", l: "Cost per qualified lead (landing page, higher-ticket)" },
        { v: "8-15%", l: "Landing-page conversion rate for Meta traffic" },
        { v: "15-30%", l: "Booking rate on Meta leads with 5-min follow-up" },
      ]),
      h2("Frequently asked owner questions"),
      h3("Does Meta work for boring services (plumbing, legal, accounting)?"),
      p(
        'Yes — the more "boring" the service, the more the offer and the human matter. A relatable owner-to-camera video will out-perform a slick production every time in these categories.',
      ),
      h3("How much do I need to spend to test properly?"),
      p(
        "Minimum $1,500 over 30 days to generate enough data for the algorithm. Below that you're guessing. $3,000-$5,000/month is where most service businesses find their sweet spot.",
      ),
      h3("Should I run Google and Meta at the same time?"),
      p(
        "Once each channel is producing at target CPL independently, yes — they compound. Meta creates the awareness, Google captures the resulting branded search. Running both from a standing start splits attention and slows the learning phase.",
      ),
      cta(
        "Want a Meta Ads playbook built for your business?",
        "Tell us your service, average job value and area. We'll come back with a creative + audience + offer plan you can either hand to us or run yourself.",
        "Get the free Meta plan",
        "/social-media-brief",
      ),
      links("Related services", [
        {
          label: "Social Media Marketing",
          to: "/services/social-media-marketing",
          desc: "Managed Meta + LinkedIn",
        },
        { label: "Google Ads", to: "/services/google-ads", desc: "Pair Meta with search intent" },
        {
          label: "Web Design",
          to: "/services/web-design",
          desc: "Landing pages that convert Meta clicks",
        },
      ]),
    ],
  },

  {
    slug: "growth-marketing-vs-digital-marketing",
    kicker: "Growth Marketing vs Digital Marketing",
    title: "Growth Marketing vs Digital Marketing: What's the Actual Difference?",
    metaTitle: "Growth Marketing vs Digital Marketing — Explained | Leadweb Marketing",
    metaDescription:
      "Growth marketing and digital marketing aren't the same thing. Here's the difference, when each matters, and which one you need first.",
    excerpt:
      '"Growth marketing" gets used as a fancy synonym for "digital marketing." It isn\'t. Here\'s the actual difference — and which one your business needs first.',
    category: "Growth Marketing",
    readMinutes: 12,
    publishedAt: "2026-03-10",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "Every second agency in Sydney now calls itself a \"growth marketing\" agency. Most of them are running the same Google Ads and SEO they were running five years ago. That's not growth marketing — that's digital marketing with better slides.",
      ),
      p(
        "The confusion matters because the two disciplines solve different problems, and hiring the wrong one at the wrong stage of your business is a fast way to burn cash. A tradie doing $600k a year with 20 leads a month doesn't need a growth marketer running Bayesian A/B tests — they need someone tightening a Google Ads account and building a proper landing page. A software company doing $8M with 5,000 free trials a month doesn't need another paid-search operator — they need someone finding the activation drop-off between signup and first-value.",
      ),
      p(
        "This piece defines both disciplines honestly, describes when each starts to earn its keep, and gives you the questions to ask before you hire.",
      ),
      h2("Digital marketing: the channels"),
      p(
        "Digital marketing is the collection of paid, owned and earned channels that put your business in front of buyers: Google Ads, SEO, Meta, LinkedIn, email, content. Each channel has its own craft and its own operator. Good digital marketing is deep, technical, channel-specific execution.",
      ),
      p(
        "The digital marketer's day is spent inside platforms — ad accounts, CMSes, analytics tools. Their questions are channel-shaped: which keywords, which creatives, which audiences, which bid strategy. Their KPIs are channel-level: cost per click, cost per lead, ranking position, reach. Their weekly wins look like a lower CPC or a higher ROAS on a specific campaign.",
      ),
      p(
        "This is not a lesser discipline. Ninety percent of the money made from marketing in Australian service businesses is made through good, boring digital-marketing execution. Growth marketing without solid channel execution underneath it is a slide deck.",
      ),
      h2("Growth marketing: the system"),
      p(
        'Growth marketing is what sits above the channels. It\'s the experimentation engine that decides what to test, what to kill, what to double down on — across the full funnel from ad to activation to retention to referral. It\'s less "which channel" and more "what\'s the smallest test that will teach us the most this month."',
      ),
      p(
        "The growth marketer's day is spent in spreadsheets, dashboards and cross-functional meetings. Their questions are funnel-shaped: which step of the journey has the biggest drop-off, which cohort of customers has the highest lifetime value, which activation moment predicts long-term retention. Their KPIs are business-level: CAC, LTV, payback period, retention curves. Their wins look like a percentage-point improvement in a conversion step that quietly compounds through the whole funnel.",
      ),
      stats("How the roles differ", [
        { v: "Channels", l: "Digital marketer thinks in — Google Ads, SEO, Meta" },
        { v: "Experiments", l: "Growth marketer thinks in — funnel steps, activation, LTV" },
        { v: "Weekly ops", l: "Digital marketer optimises — bids, keywords, creatives" },
        { v: "Weekly ops", l: "Growth marketer optimises — funnel bottlenecks, offers" },
      ]),
      h2("The overlap — and why the labels get confused"),
      p(
        "The two roles overlap on landing pages, offers, and reporting. Both care about conversion rate. Both care about cost per lead. The difference is where each begins their thinking. A digital marketer starts with the media plan and asks how to make it convert. A growth marketer starts with the funnel and asks which channel — if any — best feeds the biggest bottleneck.",
      ),
      callout(
        "Which one do you actually need?",
        "If you have fewer than 30 leads a month, hire digital marketing execution. There's not enough volume to run experiments on. Once you're consistently over 50-100 leads/month, growth marketing starts paying for itself.",
      ),
      cta(
        "Not sure which role you actually need?",
        "Send us your monthly lead volume, revenue and current agency spend. We'll tell you honestly whether you need better channel execution or a growth system built on top.",
        "Book the 15-minute call",
        "/contact-us",
      ),
      h2("A simple growth experiment framework"),
      ordered([
        "Pick the funnel step with the biggest drop-off (usually lead → quote or quote → booked).",
        'Form a hypothesis. "If we send a video quote instead of a PDF, close rate rises."',
        "Run for 30 days, minimum sample size 30.",
        "Read the result. Kill, iterate or roll out.",
        "Move to the next biggest drop-off.",
      ]),
      p(
        "The discipline that makes this work is honesty about what an experiment can prove. Sample size 30 is a minimum, not an ideal — you'll get directional signal, not certainty. If a change looks positive, roll it out and measure the aggregate effect over 90 days. If it looks negative or flat, kill it and move on. The businesses that stall are the ones that fall in love with a hypothesis and keep re-testing it hoping for a different answer.",
      ),
      h2("Where growth marketing actually earns its keep"),
      list([
        "Uncovering a broken funnel step nobody had measured (e.g. 40% of quotes are opened but never returned).",
        "Killing spend on a channel that looks profitable at the CPL layer but is losing money at the CAC layer.",
        "Finding the customer segment worth 3x more LTV and quietly rebuilding acquisition around it.",
        "Running the pricing/offer experiments no one else in the business has time to design.",
        "Building the reporting layer that ties every dollar to booked revenue — not just leads.",
      ]),
      h2("The hiring order for most service businesses"),
      ordered([
        "Under $500k revenue: one great generalist digital marketer or a focused agency running one channel well.",
        "$500k-$3M: agency across two channels (usually paid search + SEO) plus in-house ops discipline (fast follow-up, CRM hygiene).",
        "$3M-$10M: multi-channel agency plus part-time growth strategist (fractional or agency-provided) running the funnel and experiment layer.",
        "$10M+: in-house head of growth, plus specialist agencies per channel, plus analytics engineering.",
      ]),
      h2("Red flags in either discipline"),
      list([
        'A "growth marketer" whose entire toolkit is Google Ads and SEO with a rebrand.',
        "A digital marketing agency that can't produce a single funnel diagram of your business.",
        'Anyone using the word "growth hack" unironically in 2026.',
        "Reports that grow more elaborate as the results get worse.",
        "Any pitch that promises a fixed multiple of return on ad spend before they've seen your numbers.",
      ]),
      h2("Frequently asked owner questions"),
      h3("Can one person be both?"),
      p(
        "Rarely well. The mindset, tools and daily rituals are different enough that most operators are stronger at one or the other. Small businesses often need someone who leans digital-marketing with growth-marketing awareness; larger businesses need distinct people for each.",
      ),
      h3("Which pays more?"),
      p(
        "Growth marketing roles typically pay 30-60% more once the business is large enough to support them. That's not because the discipline is more valuable per hour — it's because the leverage is higher when there's enough volume for small percentage improvements to compound.",
      ),
      cta(
        "Want to know which one your business needs?",
        "10-minute call, no pitch. We'll tell you whether you need better channel execution or a growth system — often it's the former.",
        "Book the 10-minute call",
        "/contact-us",
      ),
      links("Related", [
        { label: "Services", to: "/services", desc: "Channel execution we run" },
        {
          label: "Digital marketing for small business",
          to: "/industries/digital-marketing-for-small-businesses",
          desc: "Right-sized playbook",
        },
        { label: "About Leadweb", to: "/about-us", desc: "How we run growth for owners" },
      ]),
    ],
  },

  {
    slug: "why-your-website-isnt-converting",
    kicker: "Website Conversion Rate Optimisation",
    title: "Why Your Website Isn't Converting (And the 7 Fixes That Actually Matter)",
    metaTitle: "Why Your Website Isn't Converting — 7 Fixes | Leadweb Marketing",
    metaDescription:
      "Traffic but no leads? Here are the 7 website fixes that lift conversion for Australian service businesses — most take under an hour.",
    excerpt:
      "Traffic is fine. Leads aren't. Here are the 7 website fixes that lift conversion rates for Australian service businesses — ranked by effort vs impact.",
    category: "Digital Marketing",
    readMinutes: 13,
    publishedAt: "2026-03-17",
    updatedAt: "2026-07-10",
    sections: [
      p(
        "The most common conversation I have with owners running ads goes like this: \"The clicks are cheap enough. The leads just aren't there.\" Nine times out of ten, the problem isn't the ad account. It's the 8 seconds after the click, on the landing page.",
      ),
      p(
        "The maths of website conversion is unforgiving. A site converting at 2% needs twice the traffic — twice the ad spend — of a site converting at 4%. Doubling conversion rate is often easier than doubling traffic, and it's always cheaper. The seven fixes below are the ones that keep showing up in every conversion audit I do, ranked by the ratio of effort to impact.",
      ),
      p(
        "None of them require a rebuild. All of them can be done inside a fortnight. Most owners see a measurable lift within the first month, and the compounding effect on ad ROI usually pays for the changes ten times over inside a quarter.",
      ),
      stats(
        "Where visitors bounce",
        [
          { v: "53%", l: "of mobile visitors leave if a page takes over 3s" },
          { v: "8 sec", l: "median time before a visitor decides to stay or bounce" },
          { v: "12%+", l: "conversion rate on service-page landings (top quartile)" },
          { v: "2.4%", l: "median conversion rate on homepages used as landing pages" },
        ],
        "Think with Google, Leadweb client data 2024-2025",
      ),
      h2("Before the fixes: measure what's actually broken"),
      p(
        "Every conversion project should start with three numbers: current conversion rate, mobile-vs-desktop split, and where users drop off (a heatmap or scroll-depth report). Without those you're guessing. GA4 handles conversion tracking, Microsoft Clarity is free and gives you the heatmap. Twenty minutes of setup, then you'll know which of the seven fixes below will move the biggest number.",
      ),
      h2("The 7 fixes, ranked"),
      ordered([
        "Speed. Compress hero images. Lazy-load everything below the fold. Get LCP under 2.5s. Nothing else matters if this is broken.",
        'One clear H1 that names the outcome, not the service. "Get quoted in 30 minutes" beats "Sydney\'s #1 plumbing service."',
        "Phone number top-right on every page, tappable on mobile.",
        "Social proof above the fold — real photo, real name, real number outcome.",
        "A form under 5 fields. Every extra field cuts conversion 8-10%.",
        "Sticky CTA on mobile — the button follows the scroll.",
        "Trust bar — insurance logos, warranty, years in business — in the hero band.",
      ]),
      h3("Fix 1 in depth — speed"),
      p(
        "Every second of load time above 2.5s on mobile costs you 10-15% of conversions. The two culprits in 90% of the sites I audit: an oversized hero image (5MB when it should be 200KB) and third-party scripts loading synchronously (chat widgets, tag managers, analytics duplicates). Compress images to WebP under 300KB, defer non-essential scripts, and cache aggressively. Owners who do just these two things typically see a 20-30% conversion lift with no other change.",
      ),
      h3("Fix 2 in depth — the H1 that names the outcome"),
      p(
        '"Sydney\'s #1 plumbing service" is a claim. "Emergency plumber to your door in 60 minutes — flat-rate quote before we start" is an outcome. Visitors don\'t buy claims; they buy outcomes they can picture. Write the H1 as the sentence a customer would say to a friend describing what they just got from you.',
      ),
      h3("Fix 3 in depth — the phone number that never hides"),
      p(
        "Around 55% of service-business enquiries still come by phone. If the number is hidden in a footer or requires a click to reveal, you're forcing every phone-preferring customer through friction. Top-right, tappable, always visible, on every page. This one change alone routinely lifts total enquiries by 15-25% on sites that had the number buried.",
      ),
      h3("Fix 4 in depth — social proof that isn't stock"),
      p(
        '"John S., very happy customer" convinces no one. "Sarah in Bondi — \'Fixed our leak in 45 minutes, quoted $180, charged $180\'" convinces almost everyone. Real names, real suburbs, specific outcomes. If you can add a photo of the customer or the completed job, better again. If you have Google reviews, pull the actual review text through with schema so it appears both on-page and in search results.',
      ),
      h3("Fix 5 in depth — the five-field form"),
      p(
        "Every field is a chance for a visitor to give up. Name, phone, suburb, service, message — done. Job title? Company size? Preferred contact time? Cut them. If your CRM demands them, capture them on the follow-up call. The primary job of the form is to get you the phone number so you can have the qualifying conversation.",
      ),
      h3("Fix 6 in depth — the sticky mobile CTA"),
      p(
        'Mobile visitors scroll. Desktop visitors scan. A sticky CTA bar at the bottom of the mobile viewport — "Call now" plus "Get a quote" — puts the action button under the visitor\'s thumb regardless of where they are on the page. This is the single easiest change on the list and it typically lifts mobile enquiries by 10-20% on its own.',
      ),
      h3("Fix 7 in depth — the trust bar"),
      p(
        'In the hero band, before anything else scrolls into view: license number, insurance status, years in business, satisfaction guarantee, industry association memberships. This addresses the anxiety of "is this a real, accountable business" that every serious buyer has before they enquire — and it kills the objection before it forms.',
      ),
      callout(
        "The fastest test in the world",
        "Open your homepage on your phone. Time yourself trying to book a job. If it takes more than 15 seconds, your customers already left.",
      ),
      cta(
        "Want a video walkthrough of the leaks in your site?",
        "10-minute Loom on the 3 biggest conversion leaks, in plain English. Free — most owners fix at least one that same week.",
        "Get the free walkthrough",
        "/web-design-brief",
      ),
      h2("What to stop doing"),
      list([
        "Sliders / carousels (nobody clicks the second slide)",
        "Stock photos of people who don't work at your business",
        '"Contact us" as your main CTA (name the outcome instead)',
        "Video backgrounds that autoplay",
        "Cookie banners that block the fold",
      ]),
      p(
        'Sliders in particular have been publicly killed by every serious CRO study for a decade and are still on 40% of the sites I audit. They kill your LCP score, they hide your best offer behind a click no one takes, and they signal "designed in 2014." Replace them with a single strong hero and move on.',
      ),
      h2("The 14-day conversion sprint"),
      ordered([
        "Day 1-2: Install heatmap + conversion tracking. Get baseline numbers.",
        "Day 3-5: Speed fixes. Compress images, defer scripts, cache aggressively.",
        "Day 6-8: New H1, trust bar, phone number top-right and sticky.",
        "Day 9-11: Rewrite form to five fields. Add real social proof.",
        "Day 12-14: Ship. Measure the new conversion rate against baseline.",
      ]),
      p(
        "Two weeks of focused work, no rebuild required, and most sites in the client book lift conversion by 40-80% by the end of the sprint. The site pays for itself in the first month of the higher conversion rate feeding back into cheaper ad performance.",
      ),
      h2("When it really is time for a rebuild"),
      list([
        "The current site is more than 5 years old and built on a platform your developer can't easily edit.",
        "Mobile performance is genuinely unfixable (chronic layout shift, unresponsive templates).",
        "The brand and offer have moved on so far that the site no longer describes the business.",
        "SEO is being actively hurt by the technical foundation (bad Core Web Vitals, thin content templates you can't extend).",
      ]),
      p(
        "Even then, do a two-week conversion sprint on the existing site first. It buys you cashflow to fund the rebuild and gives the new site a benchmark to beat.",
      ),
      h2("Frequently asked owner questions"),
      h3("How much conversion lift can I realistically expect?"),
      p(
        "Starting from a typical small-business site (~2% conversion), a proper CRO pass usually gets to 5-8% within a month. Top-quartile service-page performance sits at 10-15%. Beyond that requires a strong offer, mature brand and heavy social proof.",
      ),
      h3("Do I need a designer or a developer?"),
      p(
        "Both, briefly. A CRO-focused designer to draft the new layout, a developer to implement it cleanly, and someone who can measure the result. Or hire an agency who does all three end-to-end.",
      ),
      h3("Should I A/B test everything?"),
      p(
        "Only once you have enough traffic to run tests to significance — usually 5,000+ visitors per variant per month. Below that, just ship changes based on best practice and measure the aggregate effect over 30-60 days. Small-business A/B testing is mostly theatre.",
      ),
      cta(
        "Want a video walkthrough of your site?",
        "10-minute Loom on the 3 biggest conversion leaks, in plain English. Free — most owners fix at least one that same week.",
        "Get the free walkthrough",
        "/web-design-brief",
      ),
      links("Related services", [
        { label: "Web Design", to: "/services/web-design", desc: "Conversion-first sites" },
        { label: "Rent a Website", to: "/services/rent-website", desc: "Skip the build cost" },
        {
          label: "Google Ads",
          to: "/services/google-ads",
          desc: "Feed the site with the right traffic",
        },
      ]),
    ],
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((p) => [p.slug, p]),
);

export const postSlugList = posts.map((p) => p.slug);

// ---- Tags & Categories ----

const tagsBySlug: Record<string, string[]> = {
  "lead-generation-for-australian-businesses": [
    "Lead Generation",
    "Strategy",
    "Benchmarks",
    "Australia",
  ],
  "pay-per-lead-vs-retainer": ["Pay Per Lead", "Pricing", "Agency Models"],
  "google-ads-for-small-business": ["Google Ads", "PPC", "Small Business"],
  "seo-in-2026-ai-overviews-and-eeat": ["SEO", "AI Overviews", "E-E-A-T"],
  "digital-marketing-strategy-that-books-jobs": ["Digital Marketing", "Strategy", "Bookings"],
  "cost-per-lead-benchmarks-australia": [
    "Lead Generation",
    "Benchmarks",
    "Cost Per Lead",
    "Australia",
  ],
  "local-seo-for-tradies": ["SEO", "Local SEO", "Tradies"],
  "meta-ads-for-service-businesses": ["Meta Ads", "Facebook Ads", "Service Business"],
  "growth-marketing-vs-digital-marketing": ["Growth Marketing", "Digital Marketing", "Strategy"],
  "why-your-website-isnt-converting": ["CRO", "Web Design", "Conversion"],
};

for (const post of posts) {
  post.tags = tagsBySlug[post.slug] ?? [post.category];
}

export function slugifyTaxonomy(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type Taxonomy = { name: string; slug: string; count: number };

export const categories: Taxonomy[] = Array.from(
  posts.reduce((m, p) => {
    m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, new Map<string, number>()),
)
  .map(([name, count]) => ({ name, slug: slugifyTaxonomy(name), count }))
  .sort((a, b) => b.count - a.count);

export const tags: Taxonomy[] = Array.from(
  posts.reduce((m, p) => {
    for (const t of p.tags ?? []) m.set(t, (m.get(t) ?? 0) + 1);
    return m;
  }, new Map<string, number>()),
)
  .map(([name, count]) => ({ name, slug: slugifyTaxonomy(name), count }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

export const categoryBySlug: Record<string, Taxonomy> = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
);

export const tagBySlug: Record<string, Taxonomy> = Object.fromEntries(tags.map((t) => [t.slug, t]));

export function postsInCategory(slug: string): BlogPost[] {
  const cat = categoryBySlug[slug];
  if (!cat) return [];
  return posts.filter((p) => p.category === cat.name);
}

export function postsWithTag(slug: string): BlogPost[] {
  const tag = tagBySlug[slug];
  if (!tag) return [];
  return posts.filter((p) => (p.tags ?? []).includes(tag.name));
}
