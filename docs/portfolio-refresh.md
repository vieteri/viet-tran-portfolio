# Portfolio and CV refresh

## Content source

- Viet confirmed **100+ client integrations** on 22 September 2026. This is a career-wide delivery total, not a claim of 100 customers or 100 integrations at S-Pankki alone.
- Shared career titles, periods and education come from `src/data/experience.ts` and `src/data/education.ts`. Existing education dates are preserved; they were not independently reverified.
- Live references: https://tmbeauty.fi/, https://apps.apple.com/us/app/kovafit/id6758958067 and https://apps.apple.com/us/app/dartscope/id6760133199. Public listings establish the app names and advertised features. No download, revenue, review or business-conversion claims are made.
- Client work and independent products are labelled separately from employment experience.

## CV

The canonical route is `/about/cv`; `/cv` redirects there. The old CV component re-exports the canonical implementation so stale employer data cannot be rendered from it.

The CV is a curated single-column document using 10.5pt body text, normal document flow and 12mm A4 margins. There is no fixed height, overflow clipping or shrink-to-fit transform. Print/save PDF uses the browser print dialog. Use A4, 100% scale and turn off browser-generated headers and footers.

`src/data/cv.ts` curates concise descriptions while retaining shared role names and dates. New career entries must be reviewed deliberately instead of making the one-page document grow automatically.

## Verification

```
npm ci
npm run lint
npm run build
npm run typecheck
npx playwright install --with-deps chromium
npm run test:portfolio
```

The regression script starts the built app, checks routes, navigation, references, canonical links, horizontal overflow at 320/390/768/1440px, real project 404s, and the print button. It exports the CV from both desktop and mobile viewport sizes and asserts exactly one PDF page. CI independently checks searchable text, page dimensions and final CV content using pypdf. Screenshots, PDFs and a JSON report are uploaded as a workflow artifact.

To test an accessible preview instead of a local build:

```
PORTFOLIO_BASE_URL=https://your-preview.vercel.app npm run test:portfolio
```

This does not bypass deployment protection. Protected previews require the owner's normal authorized access.

## Release order

Push `preview/consulting-cv-2026`, verify CI and the existing Vercel Git integration's preview status, then open the replacement PR to `main`. Do not merge or promote production as part of this refresh. The earlier PR #4 is superseded only after its replacement has been created.
