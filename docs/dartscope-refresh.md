# DartScope media refresh — 24 September 2026

## Published source

The live Finnish and US App Store pages and Apple's public lookup endpoint were checked on 24 September 2026. They showed DartScope **1.0.6**, released **23 September 2026 at 18:32:16 UTC**, with six new iPhone screenshots. The previous portfolio captured version 1.0.5 artwork on 22 September.

- Listing: https://apps.apple.com/fi/app/dartscope/id6760133199
- Lookup: https://itunes.apple.com/lookup?id=6760133199&country=fi
- The listing supports the updated venue-map, Quick Match, guest browsing and signed-in match-history copy. These are not unreleased features inferred from the app's private repository.

## Implementation

`src/data/dartscopeMedia.json` is the shared, checked-in manifest for the homepage image, project previews, consulting thumbnail and complete project-page gallery. It records the release, image dimensions, descriptive alternative text, captions and Apple CDN source for every image. `public/work/sources.json` retains the existing project-wide provenance format.

The six actual Apple screenshots are stored locally as WebP images at 718 × 1560. Versioned filenames avoid serving the old files from image caches. Visitors do not contact Apple or a screenshot service to render portfolio images. There is no runtime or build-time lookup dependency.

The discovery and scoring screenshots form the compact project preview; all six appear on `/projects/dartscope`. Each gallery image has a standard keyboard-accessible link to its full-size local image. The existing visual direction, unrelated projects, CV content and CV print styling are preserved.

## Updating a future release

1. Check the live listing and lookup response rather than relying on a cached search result. Review the actual published images before changing feature copy.
2. Save the approved screenshots with a new release-specific filename. Update the manifest's release, capture time, sources, dimensions, captions and alternative text, and update `public/work/sources.json` to match.
3. Keep the `discover` and `score` identifiers for the two compact previews, or update that selection deliberately. Remove unused old images only after all references are replaced.
4. Update the reviewed release assertions in `scripts/verify-dartscope.mjs`. Run lint, production build, typecheck, `npm run test:portfolio`, and `node scripts/verify-dartscope.mjs`. Inspect the generated desktop and mobile screenshots and verify the one-page CV.

This is a reviewed snapshot, not an automatic synchronization with App Store updates. No dependency or deployment configuration change is required.
