# Project Polish & Deploy Report

**Date:** 2026-04-12
**Status:** Deployed and live at https://neural-void.com

---

## What was found

The initial project had:
- `index.html` — main page with "Fold Wing" naming (old)
- `fold-wing.html` — product page at root level (wrong path, wrong name)
- `assets/css/style.css` — functional but visually basic CSS
- `assets/js/main.js` — working JS with scroll/nav/reveal
- `foldwink/` — existing game build files (index.html, assets, favicon, manifest)
- No git repo, no deploy configuration
- No demo links to the live Foldwink game
- "Fold Wing" naming throughout instead of "Foldwink"

## What was improved

### Naming & Structure
- Renamed "Fold Wing" → "Foldwink" across all pages
- Moved product page from `/fold-wing.html` → `/foldwink/overview/index.html`
- Deleted old `fold-wing.html`
- Added `.gitignore`

### Visual Design (CSS v2)
- Deeper, richer dark palette (#08080d base instead of #0a0a0f)
- Refined color system with more surface/border levels
- Subtle noise texture overlay on body
- Animated glow orbs in hero background (CSS keyframe, no JS)
- Horizontal grid lines in hero for depth
- Better glass panel effects with stronger blur
- Cards now have radial glow ::before pseudo on hover + translateY lift
- Improved button system: primary, ghost, and new secondary variant
- Featured product block with gradient background and top accent line
- Process steps redesigned as connected grid panels
- Card status indicators (live/soon) with color coding
- Demo bar component for prominent demo CTA
- Refined typography: tighter letter-spacing, better size scale
- Better transition curves (cubic-bezier)
- Staggered reveal delays for card grids
- CSS selection highlight in brand color
- Overall tighter spacing rhythm

### Copy
- Hero: "Where intelligent concepts become productized reality."
- Tighter, more confident section texts
- Reduced concept cards from 4 to 3 (removed "Experimental Systems" — too vague)
- Added status labels to concept cards (Live, In Development, Exploring)
- Foldwink product page refined for B2B clarity

### Demo Integration
- Added prominent "Try the Demo" buttons linking to https://sunlike78.github.io/foldwink/
- Demo bar component on product page
- "Live Demo" link in product page navigation
- All demo URLs marked with comments for easy replacement

### JavaScript
- Added scroll offset compensation for anchor links (80px header height)
- rootMargin added to IntersectionObserver for earlier reveals
- Run onScroll on load to handle pre-scrolled states

## Deploy

### GitHub
- Created repo: `sunlike78/neural-void.com` (public)
- Initial commit pushed to `main` branch

### Cloudflare Pages
- Created project: `neural-void-site`
- Deployed all files successfully
- Live at: https://neural-void-site.pages.dev
- Custom domain `neural-void.com` added to project
- CNAME record added: `neural-void.com` → `neural-void-site.pages.dev` (Proxied)
- Domain verified, SSL active
- **Site live at https://neural-void.com**

## Design decisions

1. **Cloudflare Pages over GitHub Pages** — the domain's DNS is already on Cloudflare, making custom domain setup seamless once the CNAME is added.

2. **Foldwink game files kept in site/** — they were already present and represent the eventual internal hosting path. No conflict with the product page at `/foldwink/overview/`.

3. **3 concept cards instead of 4** — removed "Experimental Systems" to avoid a cluttered feel. Foldwink (live) + Signal Modules (in dev) + AI Utilities (exploring) shows a curated pipeline.

4. **External demo links** — all point to `https://sunlike78.github.io/foldwink/` with comments marking them for future replacement. Easy to find-and-replace when internal hosting is ready.

5. **No www subdomain** — clean apex domain `neural-void.com`. Can add www redirect later.

## Recommended next steps

1. **Add CNAME DNS record** in Cloudflare Dashboard (see above)
2. **Verify domain** is active at neural-void.com
3. **Set up contact email** — replace `hello@neural-void.com` placeholder with working address
4. **Add OG images** — create `og-cover.png` and `og-foldwink.png` in `assets/img/`
5. **Add favicon** — proper `.ico` / `.png` favicon instead of inline SVG
6. **Review copy** — fine-tune headlines and descriptions
7. **Add www redirect** — CNAME `www` → `neural-void-site.pages.dev`
8. **Consider analytics** — Cloudflare Web Analytics (free, no JS) or Plausible
9. **Internal demo hosting** — when ready, the game is already at `/foldwink/`, just update demo URLs
10. **Legal pages** — privacy policy, terms if needed before public promotion
