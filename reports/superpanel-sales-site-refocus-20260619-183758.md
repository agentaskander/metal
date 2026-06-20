# American Super Panel Sales Site Refocus

Timestamp: 2026-06-19 18:37:58

Branch: checkpoint/superpanel-refocus-20260619-183110

## Pages Changed

- Home / Industrial Rib sales page
- Products
- Contractors
- Commercial
- Agricultural
- Markets
- Projects
- State landing pages for California, Arizona, Texas, and Florida
- Quote form
- Upload plans form
- Download center text assets
- Public metadata and redirect route map

## Sales-Focused Changes

- Repositioned AmericanSuperPanel.com as the immediate operating sales site.
- Updated hero copy to: "Metal Roofing Panels Built for Contractors."
- Added direct buyer actions: Request a Quote, Upload Plans, and Call Sales.
- Added above-the-fold trust categories: Commercial, Industrial, Agricultural, Residential, and American Made.
- Added contractor-first pages for /contractors, /commercial, and /agricultural.
- Refined products around PBR / R-Panel, AG / Tuff Rib Panel, Trim & Flashing, and Accessories.
- Updated quote and upload forms around contractor sales fields: state, square footage, project type, panel type, files, and notes.
- Added FAQ content for common contractor buying questions.
- Kept American Super Panel tied to Americas Panel Fab without presenting it as a separate unrelated company.

## Removed Corporate / Future Language

- Removed public-site emphasis on ecosystem, platform, future manufacturing, innovation, disruption, and investor-style positioning.
- Removed old product-series language that implied broader strategic architecture instead of immediate panel sales.
- Updated README domain guidance so AmericanSuperPanel.com remains an active product sales microsite.

## NDA-Safe Review

- No machine count, machine output, staff count, warehouse size, startup investment, margins, break-even, financial projections, sales projections, supplier pricing, or private owner background was added.
- No lead-time guarantees, production capacity details, pricing, certification claims, or government strategy claims were added.
- State pages avoid claiming local offices.
- American-made copy avoids tariff, China, political, or NDA-derived claims.

## Validation

- `npm run build`: passed.
- `git diff --check`: passed.
- Sensitive language scan: no matches in public site source, public assets, metadata, or README for the requested corporate/future/NDA-risk terms.

## Screenshots

- reports/superpanel-home-20260619-183758.png
- reports/superpanel-contractors-20260619-183758.png
- reports/superpanel-commercial-20260619-183758.png
- reports/superpanel-agricultural-20260619-183758.png

## Browser Route Checks

- `/`: H1 "Metal Roofing Panels Built for Contractors"; quote and upload actions present.
- `/contractors`: H1 "Built for Contractors"; quote and upload actions present.
- `/commercial`: H1 "Commercial Metal Roofing Panels"; quote and upload actions present.
- `/agricultural`: H1 "Agricultural Metal Roofing & Siding Panels"; quote and upload actions present.
