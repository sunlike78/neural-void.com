# Neural Void — Site

Brand site for **Neural Void**, an AI-native product lab.
Live at [neural-void.com](https://neural-void.com).

## Structure

```
site/
├── index.html                    — Main landing page
├── foldwink/
│   ├── overview/
│   │   └── index.html            — Foldwink product page (B2B)
│   ├── index.html                — Foldwink game build (existing)
│   └── assets/, favicon.svg …    — Game assets (existing)
├── assets/
│   ├── css/style.css             — Global styles (CSS variables, components)
│   ├── js/main.js                — Vanilla JS (scroll, nav, reveal)
│   └── img/                      — Favicon, OG images
└── .gitignore
```

## Pages

| URL path               | Content                                    |
|-------------------------|--------------------------------------------|
| `/`                     | Main landing — hero, about, Foldwink, concepts, process, contact |
| `/foldwink/overview/`   | Foldwink product page — B2B positioning, audience, deliverables, pilot timeline |
| `/foldwink/`            | Foldwink game build (existing, not part of this site project)     |
| `/privacy/`             | Privacy policy                                                    |

## Running locally

No build step. Use any static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .

# Or just open index.html in a browser (anchor links with / paths need a server)
```

## Deploying

Site is deployed via **Cloudflare Pages** (project: `neural-void-site`).

```bash
npx wrangler pages deploy . --project-name neural-void-site --branch main
```

## Where to edit

| What                | Where                                                       |
|---------------------|-------------------------------------------------------------|
| Colors / theme      | `assets/css/style.css` → `:root` CSS variables              |
| Brand copy          | `index.html` — look for section comments                    |
| Foldwink copy       | `foldwink/overview/index.html` — look for section comments  |
| Demo URL            | All demo links point to `/foldwink/` (internal)             |
| Contact email       | `hello@neural-void.com` — configured via Cloudflare Email Routing |
| CTA buttons         | Inside `hero-actions`, `featured-actions`, `cta-actions` divs |
| OG images           | Replace PNGs in `assets/img/` with designed versions if needed |

## Tech

- Pure HTML / CSS / vanilla JS — no frameworks, no build step
- Google Fonts CDN: Inter + JetBrains Mono
- CSS custom properties for theming
- IntersectionObserver for scroll-reveal
- Responsive: 768px and 480px breakpoints
