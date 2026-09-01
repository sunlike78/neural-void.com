# Project Init Report — Neural Void Site

**Date:** 2026-04-12
**Status:** First draft complete

## Files created

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — hero, about, Fold Wing feature, concepts, process, contact, footer |
| `fold-wing.html` | Dedicated Fold Wing product page — B2B positioning, audience segments, deliverables, pilot timeline, CTA |
| `assets/css/style.css` | Global stylesheet — CSS variables, reset, layout system, components, responsive breakpoints |
| `assets/js/main.js` | Vanilla JS — header scroll, mobile nav toggle, scroll-reveal, smooth anchor scrolling |
| `assets/img/` | Empty directory for future image assets (OG covers, icons, screenshots) |
| `README.md` | Project overview and local run instructions |
| `PROJECT_INIT_REPORT.md` | This file |

## Project structure

```
site/
├── index.html
├── fold-wing.html
├── README.md
├── PROJECT_INIT_REPORT.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
```

## Design decisions

### Visual direction
- Near-black background (`#0a0a0f`) with graphite surface panels
- Electric cyan (`#00e0ff`) as primary accent, violet (`#7c5cff`) as secondary
- Glass-panel cards with `backdrop-filter: blur`
- Ambient gradient glows for hero backgrounds (no external images)
- Large typography (Inter for UI, JetBrains Mono for labels/code)
- Generous whitespace, thin border dividers with subtle glow

### Content & positioning
- Hero: "Digital concepts from the edge of the possible" — confident, non-generic
- Neural Void positioned as curated product lab, not a generic agency
- Fold Wing positioned as B2B white-label engagement module, not a consumer game
- Concepts section shows curated pipeline (4 items) — not a chaotic portfolio dump
- Process section: Concept → Prototype → Pilot → Rollout
- Contact uses `hello@neural-void.com` placeholder (marked with TODO)

### Technical approach
- Zero dependencies beyond Google Fonts CDN
- No build step — open HTML directly or serve with any static server
- CSS custom properties for easy color/spacing changes
- IntersectionObserver for scroll-reveal animations
- Mobile-responsive with breakpoints at 768px and 480px
- SEO basics: title, meta description, Open Graph placeholders

## Cross-links verification
- `index.html` → `fold-wing.html` (Fold Wing section + footer)
- `fold-wing.html` → `index.html` (logo, nav, footer, general inquiry CTA)
- Anchor links within pages work (smooth scroll via JS)

## Recommended next steps

1. **Add OG images** — create `og-cover.png` and `og-fold-wing.png` in `assets/img/`
2. **Set up actual contact email** — replace `hello@neural-void.com` with working address
3. **Add favicon** — replace inline SVG favicon with proper `.ico` / `.png`
4. **Review copy** — refine headlines and descriptions with final brand voice
5. **Add subtle visual elements** — consider animated canvas background, particle effects, or SVG illustrations for hero sections
6. **Initialize git** — set up version control for the project
7. **Deploy** — set up hosting (Netlify, Vercel, Cloudflare Pages, or similar)
8. **Add analytics** — integrate lightweight analytics (Plausible, Fathom, or similar)
9. **Expand Fold Wing page** — add interactive demo embed, testimonials/case studies section
10. **Legal pages** — privacy policy, terms of service if needed before public launch
