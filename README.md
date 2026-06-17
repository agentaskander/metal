# America’s Panel Fab Website

Commercial website and lead-generation platform for America’s Panel Fab and the American Super Panel™ product line.

## Port Registry

Do not use default Vite ports.

- `8190`: internal private master site. Do not overwrite with public-safe experiments.
- `8192`: beta review site.
- `8193`: public-safe copy.

## Commands

```bash
npm run dev:master
npm run dev:beta
npm run dev:public
npm run pages:master
npm run pages:beta
npm run pages:public
npm run build
npm run lint
```

`npm run dev` maps to `dev:master` intentionally.

Use `dev:*` for Vite UI work. Use `pages:*` when testing Cloudflare Pages Functions such as quote requests and plan uploads.

## Cloudflare Pages

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Primary domain: `AmericasPanelFab.com`
- Secondary product domain: `AmericanSuperPanel.com`

SPA route fallback rules live in `public/_redirects`.

Configure this host redirect in Cloudflare Redirect Rules:

- `AmericanSuperPanel.com/*` -> `https://AmericasPanelFab.com/super-panel`
- Preserve query string: enabled

## Lead Capture

Lead capture is implemented with Cloudflare Pages Functions:

- `POST /api/quote`: validates Turnstile and sends a structured quote request email.
- `POST /api/upload-plans`: validates Turnstile, stores uploaded plans in R2, and emails sales with the lead summary and R2 object keys.

Required Cloudflare bindings and vars are in `wrangler.jsonc`.

Production setup:

1. Enable Cloudflare Email Sending for `americaspanelfab.com`.
2. Create the R2 bucket `americas-panel-fab-leads`.
3. Add the R2 binding named `LEAD_UPLOADS`.
4. Set `CLOUDFLARE_ACCOUNT_ID`.
5. Set the secret `EMAIL_API_TOKEN` with Email Sending permission.
6. Set the secret `TURNSTILE_SECRET_KEY`.
7. Set `VITE_TURNSTILE_SITE_KEY` in Pages build environment variables.
8. Confirm `SALES_FROM_EMAIL`, `SALES_FROM_NAME`, and `SALES_TO_EMAIL`.

For local Pages Function testing, copy `.dev.vars.example` to `.dev.vars` and fill in real values. Do not commit `.dev.vars`.

## Buying Tools

- `/selector`: interactive American Super Panel™ system selector.
- `/resources`: contractor and bid resources.
- `/downloads/quote-request-checklist.txt`
- `/downloads/plan-upload-instructions.txt`
- `/downloads/submittal-package-guide.txt`
- `/downloads/finish-selection-guide.txt`
