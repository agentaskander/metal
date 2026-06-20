# Domain Separation SEO Audit

Timestamp: 2026-06-19 20:20:32

Root branch: `checkpoint/domain-separation-20260619-201947`

Audited worktrees:

- AmericanSuperPanel.com: `/Users/askander/dev/apps/metal/americansuperpanel-com`, branch `public`, commit `6119dd9`
- AmericasPanelFab.com: `/Users/askander/dev/apps/metal/americaspanelfab-com`, branch `beta`, commit `91b9c0d`

## Executive Summary

AmericanSuperPanel.com and AmericasPanelFab.com are directionally separated, but the separation is not yet strict enough for long-term SEO.

AmericanSuperPanel.com already reads like the revenue site. It should remain the primary lead-generation site for panels, quote requests, calls, and plan uploads.

AmericasPanelFab.com still carries too much product-sales language and several American Super Panel product sections. That creates content-overlap risk because both domains can talk about panels, contractors, quote workflows, finishes, resources, and state pages.

The highest technical SEO risk is that both sites are React SPAs with one static `index.html` title and meta description. That means every client-side route can share the same title and meta description unless Cloudflare/SSR/static route metadata is added.

## Keyword Ownership Map

| Keyword / Intent | Owner | Notes |
| --- | --- | --- |
| metal roofing panels | AmericanSuperPanel.com | Primary revenue keyword. Keep off APF except as a link/reference to Super. |
| PBR panel | AmericanSuperPanel.com | Needs dedicated `/pbr-panel`. |
| R-panel | AmericanSuperPanel.com | Can live on `/pbr-panel` or separate `/r-panel` later. |
| AG panel | AmericanSuperPanel.com | Needs dedicated `/ag-panel`. |
| Tuff Rib panel | AmericanSuperPanel.com | Can live on `/ag-panel` or separate `/tuff-rib-panel` later. |
| commercial metal roofing panels | AmericanSuperPanel.com | `/commercial` should own this. |
| agricultural metal panels | AmericanSuperPanel.com | `/agricultural` should own this. |
| custom length metal panels | AmericanSuperPanel.com | Use in quote, products, contractors. |
| contractor roofing panels | AmericanSuperPanel.com | `/contractors` should own this. |
| roof panel supplier | AmericanSuperPanel.com | Use in title/meta and quote pages. |
| metal panel fabrication | AmericasPanelFab.com | APF authority keyword. |
| architectural metal fabrication | AmericasPanelFab.com | APF authority/capability keyword. |
| roll forming services | AmericasPanelFab.com | Needs dedicated `/roll-forming`. |
| metal manufacturing | AmericasPanelFab.com | Corporate authority keyword. |
| custom sheet metal fabrication | AmericasPanelFab.com | Needs dedicated `/custom-fabrication`. |
| panel fabrication company | AmericasPanelFab.com | About/manufacturing pages. |
| contractor manufacturing partner | AmericasPanelFab.com | Partner/capability positioning, not product quote intent. |

## Pages Assigned To Each Domain

### AmericanSuperPanel.com

Revenue and contractor-facing pages:

- `/`
- `/products`
- `/pbr-panel` missing
- `/ag-panel` missing
- `/trim-and-flashing` missing
- `/commercial`
- `/agricultural`
- `/contractors`
- `/california-metal-panels`
- `/arizona-metal-panels`
- `/texas-metal-panels`
- `/florida-metal-panels`
- `/request-quote` missing
- `/upload-plans` missing

Current supporting pages also present:

- `/american-super-panel-industrial-rib`
- `/industrial`
- `/residential`
- `/finishes`
- `/resources`
- `/selector`
- `/markets`
- `/projects`
- `/about`
- `/contact`

### AmericasPanelFab.com

Authority and manufacturing-platform pages:

- `/`
- `/about`
- `/manufacturing` missing as a standalone route
- `/capabilities` missing
- `/roll-forming` missing
- `/custom-fabrication` missing
- `/contact`

Current APF content includes product/resource/market/state pages that overlap with ASP and should be reduced, noindexed, redirected, or reframed as neutral manufacturing education.

## Duplicate Content Findings

### Technical Duplicate Risks

1. Both domains currently have one static SPA title/meta layer.
   - ASP title: `American Super Panel | Metal Roofing Panels Built for Contractors`
   - APF title: `Americas Panel Fab | Metal Panel Manufacturing Platform`
   - Risk: all client-side routes can inherit the same title and meta description.

2. No canonical tags were found in either domain's `index.html`.
   - Risk: search engines have no explicit per-route canonical signal.
   - Required: self-canonical URLs for every domain route.

3. No JSON-LD schema was found in either app source/index.
   - ASP needs Product, FAQ, LocalBusiness, and quote/action schema.
   - APF needs Organization, Manufacturer, and AboutPage schema.

### Exact H1 / Page Title Findings

Exact duplicate H1/page-title strings were not found within the extracted route title strings for either worktree.

Risk remains because similar sections exist on both domains:

- `Products`
- `Services`
- `Colors & Finishes`
- `Contractor & Bid Resources`
- `Panel System Selector`
- `Markets Served`
- `Projects`
- `American Super Panel™`
- `A finish system worthy of commercial specifications.`
- `More than panels: a cleaner path to submittals, warranties, and procurement.`
- `A faster path from drawings to fabricated packages.`
- `Manufacturing support from takeoff to closeout.`
- `Future-ready gallery for finished work.`
- `A manufacturing company built for serious metal panel work.`

### Content Overlap Risks

APF currently overlaps ASP on:

- metal roofing panel sales language
- state metal panel pages
- contractor quote workflows
- American Super Panel product sections
- product downloads/resources
- panel selector language
- finish/color selection
- commercial/agricultural project categories

ASP currently overlaps APF on:

- manufacturing language in the footer and product copy
- roll-forming imagery and manufacturing credibility
- fabrication/package support

This is acceptable only if ASP uses manufacturing language to support buying confidence, while APF owns manufacturing authority and avoids product-sales lead capture.

## Linking Rules Audit

### FAB -> SUPER

Recommended:

- Strong links from APF homepage to AmericanSuperPanel.com.
- CTAs should point to Super for products and quote intent:
  - `View American Super Panel™`
  - `Request Quote`
  - `View Products`

Observed risk:

- APF still has its own product/resource/quote-style content. That weakens the rule because APF can compete with Super for product sales intent.

### SUPER -> FAB

Recommended:

- Minimal link only.
- Footer disclosure: `Manufactured by Americas Panel Fab`.
- No large APF navigation and no competing APF CTA.

Observed:

- ASP footer disclosure is aligned with this rule.
- ASP should not add APF nav items or large APF CTAs.

## Canonical Recommendations

### AmericanSuperPanel.com

Every ASP route should self-canonical to `https://www.americansuperpanel.com/{route}` or the chosen non-www equivalent.

Do not canonicalize ASP pages to APF.

Priority canonical routes:

- `/`
- `/products`
- `/pbr-panel`
- `/ag-panel`
- `/trim-and-flashing`
- `/commercial`
- `/agricultural`
- `/contractors`
- `/california-metal-panels`
- `/arizona-metal-panels`
- `/texas-metal-panels`
- `/florida-metal-panels`
- `/request-quote`
- `/upload-plans`

### AmericasPanelFab.com

Every APF route should self-canonical to `https://www.americaspanelfab.com/{route}` or the chosen non-www equivalent.

Do not canonicalize APF pages to ASP except by linking users to ASP product/quote pages.

Priority canonical routes:

- `/`
- `/about`
- `/manufacturing`
- `/capabilities`
- `/roll-forming`
- `/custom-fabrication`
- `/contact`

## Schema Recommendations

### ASP Schema

- Home: LocalBusiness or Organization with product/service area.
- Product pages: Product schema for PBR/R-Panel, AG/Tuff Rib, Industrial Rib, trim/flashing.
- FAQ sections: FAQPage schema.
- Quote/upload pages: WebPage + potential `potentialAction` for quote request.

### APF Schema

- Home: Organization + Manufacturer.
- About: AboutPage.
- Manufacturing/capabilities: Service or WebPage schema focused on fabrication/roll forming.
- Contact: ContactPage.

## Missing Landing Pages

### ASP Missing

- `/pbr-panel`
- `/ag-panel`
- `/trim-and-flashing`
- `/request-quote`
- `/upload-plans`

Recommended next ASP pages:

1. `/pbr-panel`
2. `/ag-panel`
3. `/trim-and-flashing`
4. `/request-quote`
5. `/upload-plans`

### APF Missing

- `/manufacturing`
- `/capabilities`
- `/roll-forming`
- `/custom-fabrication`

Recommended next APF pages:

1. `/manufacturing`
2. `/capabilities`
3. `/roll-forming`
4. `/custom-fabrication`

## Recommended Separation

### Keep On ASP

- Product names and panel types
- PBR/R-panel/AG/Tuff Rib keywords
- commercial/agricultural panel buying copy
- request quote CTAs
- upload plans CTAs
- contractor bulk order language
- state panel pages
- color/sample/order language

### Keep On APF

- company story
- manufacturing authority
- fabrication capability
- roll forming education
- custom sheet metal fabrication
- partner/recruiting/investor language
- industry education
- supplier/dealer/manufacturer network concepts

### Remove Or Reframe On APF

- product-sales quote funnels
- ASP product pages that compete with Super
- state pages targeting `metal roofing panels`
- contractor-first quote language
- panel selector content that recommends ASP products as if APF is the sales site

## Implementation Priority

1. Add route-level SEO metadata and canonical support for both SPAs.
2. Add ASP landing pages: `/pbr-panel`, `/ag-panel`, `/trim-and-flashing`, `/request-quote`, `/upload-plans`.
3. Add APF authority pages: `/manufacturing`, `/capabilities`, `/roll-forming`, `/custom-fabrication`.
4. Move APF product/quote intent toward links to ASP.
5. Add schema by domain role.
6. Review sitemap/robots after route metadata exists.

## Validation

- Root/internal build: passed with `npm run build`.
- ASP `public` build: passed with `npm run build`.
- APF `beta` build: passed with `npm run build`.
- `git diff --check`: passed.
- Private `_doc/` remained untracked and was not committed.
