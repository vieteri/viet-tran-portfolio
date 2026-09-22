# viet.fi visual direction

## Scope and authority

The owner rejected the dark/teal, repeated-card redesign as too "Codexy" on 22 September 2026 and requested Impeccable guidance. This revision replaces that presentation. It does not change employment facts, project claims, contact details, the 100+ career-wide integration total, or the one-page CV content and print layout.

This is the implemented design direction, not a record of owner approval of individual fonts or colors. Main and production remain outside this change; review takes place on PR #5's preview branch.

## Point of view

A personal software practice, demonstrated through real work rather than dashboard furniture. A prospective client should meet Viet, see things he has actually shipped, understand the services, and find a direct way to contact him.

Working use-scene assumption: a prospective client comparing engineers on a laptop in an ordinary daylight office, or following a link on a phone. A light mineral-blue reading surface supports that scene without falling back to a white SaaS dashboard or a cream-and-black luxury template.

## Visual system

- Mineral-blue surfaces, blue-black ink, restrained warm brick links/actions. Tokens are OKLCH in globals.css.
- Newsreader display type with occasional italic phrasing, paired with Manrope for reading and navigation. Fonts are bundled through next/font, not requested from Google at runtime.
- Display type capped at 6rem and tracking never below -0.04em.
- Unboxed sections; thin horizontal rules where they express grouping.
- Real screenshot montage in the first viewport. The portrait is a personal introduction, not a bordered hero card.
- Project-led composition: a wide client website followed by two differently sized, staggered app stories. On phones, these become a readable single sequence.
- No heading kickers, redundant section numbers, statistics strip, generic globe/phone placeholders, gradient text, decorative glass, or repeated icon-heading-description cards.
- One brief reveal for the project montage; content remains visible without JavaScript. Respect reduced motion.
- Buttons name actions; links have hover and visible keyboard-focus treatments. Header remains solid rather than translucent.

## Real assets

public/work contains a captured TM Beauty homepage and screenshots from the published KovaFit and DartScope App Store listings. sources.json records origins and capture dates. These are actual references, not fictional dashboards. The website capture is cropped to remove unused bottom whitespace; the app screenshots are not redrawn. Files are local and need no visitor request to a third-party screenshot service.

## CV exception

The CV keeps its existing Arial, 10.5pt body, A4 margins and print layout. Do not propagate the website's display typography or expansive spacing into the CV. Its print behavior is a functional constraint, not a place to restyle for consistency.

## Guidance consulted

Official pbakaus/impeccable skill 4.3.1:
- https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md
- reference/new-work.md, reference/init.md, reference/craft-floor.md

The launcher was unavailable in this tool environment. Guidance and project context were read directly; this is not a claim that Impeccable's interactive CLI, decision-board workflow, or detector ran.

## Review contract

Inspect the built desktop and mobile pages together, plus the printed CV. Check routes, links, loaded image assets, horizontal overflow, keyboard navigation, contrast, reduced motion and the one-page PDF. Fix concrete defects in one batch, then confirm. Do not let another generic design system replace these decisions in later edits.
