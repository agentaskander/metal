# Stock Now, Real Photos Later Rollout

Timestamp: 2026-06-19 19:28:41

Branch: public

## Stock Images Selected

- `hero-roll-former`: stock roll-forming machine image for the homepage hero.
- `steel-coils`: stock steel coil inventory image for quality materials.
- `warehouse-roof`: stock commercial warehouse roof image for commercial roofing panels.
- `ag-building`: stock agricultural building image for agricultural project representation.
- `contractor-plans`: stock contractor/plans image for upload and quote workflow.
- `panel-closeup`: stock ribbed panel closeup image for product and gallery use.
- `truck-loading`: stock truck/logistics image for delivery readiness.
- `trim-fabrication`: stock fabrication image for trim and flashing support.

All image URLs now live in `src/content/images.ts`.

## Future Real Photo Plan

Launch immediately with industrial stock photos. Replace with real company photos in this order:

1. Machine photo
2. Steel coils
3. Warehouse
4. Employees
5. Deliveries
6. Customer projects

The first real machine-running photo should replace the stock hero image first.

## Replacement Workflow

1. Take or choose the real photo that matches a key in `content/image-plan.md`.
2. Export a web-friendly horizontal image around 1600-2000px wide.
3. Update only the matching entry in `src/content/images.ts`.
4. Keep the existing layout and component code unchanged.
5. Run `npm run build`.
6. Review desktop and mobile pages before deploy.

## Files Changed

- `src/content/images.ts`
- `src/App.tsx`
- `content/image-plan.md`
- `docs/photo-shot-list.md`
- `reports/photo-strategy-rollout-20260619-192841.md`

## Validation

- `npm run build`: passed.
- `git diff --check`: passed.
- Image URL scan: stock URLs are centralized in `src/content/images.ts`.

## Screenshots

- `reports/photo-strategy-home-20260619-192841.png`
- `reports/photo-strategy-upload-plans-20260619-192841.png`

## Browser Checks

- `/`: H1 "Metal Roofing Panels Built for Contractors"; first six rendered images include roll-forming panels, commercial roof panels, steel coil inventory, truck loading, and contractor plans alt text.
- `/contractors#upload-plans`: H1 "Built for Contractors"; upload workflow route loads and scrolls to the requested section.
