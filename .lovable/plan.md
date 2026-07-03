## Goal

Rebuild leadweb.com.au as a modern, fast, SEO-strong TanStack Start site. Preserve every existing URL (including portfolio references) so nothing breaks in Google. Rewrite copy for an **experienced business owner who already understands digital marketing but is losing sleep over inconsistent lead flow** — no beginner explanations, no jargon-selling, direct outcome language.

## URL map (preserved 1:1 from live sitemap)

**Core**

- `/` — Home
- `/about-us/`
- `/contact-us/`
- `/thank-you/`

**Services** (`/services/...`)

- `/services/` (hub)
- `/services/google-ads/`
- `/services/seo/`
- `/services/web-design/`
- `/services/social-media-marketing/`
- `/services/pay-per-lead/`
- `/services/rent-website/`

**Industries** (`/industries/...`) — hub + 11 leaves
beauty-skincare, dentists, doctor, financial-services, fitness, law-firms, non-profits, professional-services, real-estates, restaurant, small-businesses, tradie

**Locations** (`/location/...`) — hub + Sydney, Melbourne, Brisbane, Perth, Adelaide (Google Ads agency)

**Briefs / forms**

- `/web-design-brief/`, `/seo-brief/`, `/social-media-brief/`, `/rent-website-brief/`, `/pay-per-lead-service-brief/`, `/google-ads-brief/`, `/grow-your-business-form/`

**Special**

- `/pay-per-lead-for-tradies/`

**Portfolio** — the live site shows case studies on the home page (no `/portfolio/*` URLs exist). I'll keep the same behaviour: portfolio grid on `/` plus a compact strip on service/industry pages. Case-study images and client names carry over.

## Tech / architecture

- TanStack Start (already scaffolded), file-based routes under `src/routes/` mirroring the URLs above (dot-separated: `services.google-ads.tsx`, `industries.digital-marketing-for-tradie.tsx`, `location.google-ads-agency-sydney.tsx`, etc.).
- Content-heavy pages driven by typed content objects in `src/content/*` so copy stays editable and pages stay fast.
- Shared components: `Header`, `Footer`, `Hero`, `LeadForm` (single multi-step form, one component reused across brief pages via config), `PortfolioGrid`, `LogoStrip`, `ServiceCard`, `IndustryCard`, `LocationHero`, `FAQ`, `CTA`, `TestimonialRow`.
- Design system in `src/styles.css` with semantic tokens. No hard-coded colors in components.
- Images: hero + case-study imagery generated with imagegen (photographic, Sydney/AU business feel). Client logos and case-study screenshots referenced from the existing WP URLs where possible so we don't misrepresent brands.

## SEO (built in, not bolted on)

- Per-route `head()` with unique title (< 60 chars), description (< 160), `og:title`, `og:description`, `og:type`, `twitter:card`. `og:image` only on leaf routes that have a real hero image.
- Self-referential relative canonical + `og:url` per leaf.
- JSON-LD: `Organization` + `WebSite` on root; `LocalBusiness` on `/contact-us/` and `/location/*`; `Service` on `/services/*`; `FAQPage` where an FAQ exists; `BreadcrumbList` on deep routes.
- Single H1 per page, semantic sectioning, alt text on every image.
- `src/routes/sitemap[.]xml.ts` enumerating every route above.
- `public/robots.txt` allowing all, sitemap directive added once a domain is set.
- Fast: SSR HTML, no client-side data fetching for above-the-fold, images sized + lazy-loaded below the fold, font subsetting via `<link>` in root.

## Copy voice (for the target reader)

Reader profile: 5–20+ years running a business, has tried an agency or two, knows what CPC and CAC mean, is tired of dashboards that don't turn into booked jobs.

Rules the copy follows:

- Lead with the _commercial_ outcome (booked jobs, qualified calls, pipeline), not the tactic.
- Name the failure modes they've lived through ("ads that spend on tyre-kickers", "SEO reports that don't move revenue", "a website that looks good and converts nothing").
- Specific numbers over adjectives. Ranges where honest ("typically 20–40% lower cost per lead in 90 days" style, only where LeadWeb's existing case studies support it).
- Short. No "we are passionate about". No "in today's digital landscape".
- Every page ends with a single, concrete next step (book a strategy call / request a lead-flow audit).

## Build order

1. Design system + shared layout (Header/Footer/CTA/LeadForm) + home page.
2. `/services/` hub + 6 service leaves.
3. `/industries/` hub + 12 industry leaves (same template, per-industry copy + hero).
4. `/location/` hub + 5 city leaves (same template, per-city copy + LocalBusiness JSON-LD).
5. `/about-us/`, `/contact-us/`, `/pay-per-lead-for-tradies/`, `/thank-you/`.
6. 6 brief pages + `/grow-your-business-form/` (multi-step form, submits to a placeholder handler you can wire to email later).
7. `sitemap.xml`, `robots.txt`, JSON-LD, final SEO pass.

Forms initially POST to a stub `console.log` handler; wiring to real email/CRM is a follow-up once you tell me where leads should go (email address, HubSpot, Zapier webhook, etc.).

## Design direction

I'll ask 3 quick visual questions (palette, typography, layout) right after you approve this plan, then generate 3 rendered design directions for you to pick from before I build. If you'd rather I just pick a direction and go, say "just build it" and I'll commit to a confident, Sydney-agency-appropriate look (dark, dense, conversion-led — think Linear × a serious performance agency).

## Out of scope (call out and confirm)

- Live form delivery / CRM integration — stub only until you name the destination.
- Blog / news content — no blog URLs exist in the current sitemap so I'm not adding one.
- Multi-language.
- Client login / dashboard.
