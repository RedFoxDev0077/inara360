# INARA 360 · Landing

Landing page for INARA 360, built with Next.js 16 (App Router), React 19 and Tailwind CSS 4.
The page is fully static (prerendered) for SEO and speed. The only server code is the demo form endpoint.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where things are

| What | File |
| --- | --- |
| All copy (ES), contact data, domain | `src/content/site.ts` |
| Sections (hero, features, copilot, portal, FAQ, demo, footer) | `src/components/Sections.tsx` |
| Hero dashboard mockup (coded, illustrative figures) | `src/components/DashboardMockup.tsx` |
| Demo form / API endpoint | `src/components/DemoForm.tsx`, `src/app/api/contact/route.ts` |
| Photos (optimised WebP + alt texts) | `src/assets/images/` (`index.ts`) |
| Image optimisation script | `scripts/optimize-images.mjs` → `npm run images` |
| Brand colours and fonts | `src/app/globals.css` (`@theme`) |
| SEO: metadata, sitemap, robots, OG image, JSON-LD | `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.jpg`, `page.tsx` |

## Images

Raw images go in `img/`. `npm run images` crops them to each section's ratio, resizes, renames and
compresses them to WebP in `src/assets/images/` (and the social image to `src/app/opengraph-image.jpg`).
`next/image` then serves AVIF/WebP at the right width per device, with blur placeholders.
To swap a photo: drop the new file in `img/`, update its `src` in the script, run `npm run images`.

## Pending from INARA before launch

- Real domain → `NEXT_PUBLIC_SITE_URL` env var (or `site.url`).
- Platform login URL → `site.loginUrl`.
- Contact email → `site.email`.
- Official logo (SVG) → replace `src/components/Logo.tsx`.
- Real site photos to replace the AI-generated ones (hero and client portal first).
- Where demo requests should go (email, CRM, Airtable…) → `src/app/api/contact/route.ts` currently only logs them.
- French and English versions: copy is centralised in `site.ts`, ready to duplicate per locale.
