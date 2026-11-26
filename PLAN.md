# The Night the Stars Went Out — an interactive observatory story

## Goal and users
A long, branching interactive story for teenagers reading English at B1 level, set in a
mysterious mountain observatory where the stars are going out one by one. Reading time is
at least 30 minutes across the branching paths. Working = the reader can play the whole
story in the browser, make meaningful choices that change scenes and the ending, reach one
of four distinct endings, and see their collected endings — all on a fully static site
with no external services, fonts, CDNs or APIs.

## Scope
- In scope: static web app (plain HTML/CSS/JS), full story graph (~35+ scenes,
  ~9,000+ words), choice system with items/flags/traits, 4 gated endings with an
  epilogue recap, ending gallery, save/resume via localStorage, text-size and
  reduced-motion settings, living starfield canvas + original generated illustrations,
  mobile-first responsive UI.
- Out of scope: accounts, servers, analytics, multi-language versions, sound (kept as
  written onomatopoeia instead), iOS/Android apps.

## Look and feel (user-selected)
Framer-inspired: motion-rich, dark and glossy, fully original. Glass panels with soft
borders and inner glow, springy eased transitions (transform/opacity only), glowing
brass accent on deep ink-blue/violet, serif display type over clean sans body using
system font stacks (no webfont downloads). One signature idea: the starfield behind the
text literally loses stars as the story darkens and returns, changed, at the endings.

Design brief: teens reading at night · pull the reader into a mystery they shape ·
hushed, starlit, uneasy wonder · midnight-gloss direction · the sky that thins and heals.

## Architecture
- Pure static files: `index.html`, `css/styles.css`, `js/background.js` (canvas
  starfield/aurora), `js/story-part1.js`, `js/story-part2.js` (story data as
  `window.STORY_*`), `js/engine.js` (render loop, state, saves). No build step, no
  dependencies, works from `file://` or any static host.
- Data model: nodes `{id, chapter, chapterTitle, title, img, mood, text[], choices[]}`;
  choices carry `if` gates (items/flags/traits), effects (set flags, add items, trait
  points) and `to` targets. Ending nodes carry `{ending:{id,name}}` + conditional
  epilogue paragraphs.
- State: `localStorage["vale.save"]` (current node, flags, items, traits, visited),
  `localStorage["vale.endings"]` (gallery), `localStorage["vale.settings"]`.
- Hosting: any static host (preview on :3000 for this run).

## Risks and assumptions
- Risk: total words are the deliverable's backbone — mitigated with a graph validator
  (all targets resolve, all 4 endings reachable, per-path word counts).
- Assumed: English-only (request is for B1 English), reading speed ~120 wpm for B1
  teens, localStorage acceptable for saves (no external services allowed anyway).

## Phases
## Phase 1: Shell, engine and a playable opening
- [x] Static shell: index.html, glossy dark styles, canvas starfield with mood control
- [x] Engine: node rendering, gated choices, effects, saves/resume, settings
- [x] Story chapters 1–3 wired and playable end to end
- Acceptance: a reader can open the site, start the story, make choices and see the
  starfield react.

## Phase 2: Full story graph and four endings
- [x] Chapters 1–8 authored (arrival → the Meridian door)
- [x] Chapters 9–10 + four endings (Warden / Morning Without Stars / Song Between
      Stars / Town That Looked Up) with gated paths and epilogue recaps
- [x] Ending gallery + "how each ending is earned" hints after completion
- Acceptance: all four endings reachable; validator confirms graph integrity and
  ≥30 min reading per main path.

## Phase 3: Art and polish
- [x] 4 original generated illustrations for key scenes
- [x] Motion polish: scene transitions, staggered choices, reduced-motion fallback
- Acceptance: browser checks at 390 px and 1280 px pass with no overflow or console
  errors.

(All phases completed in this run at the user's request for the finished story.)
