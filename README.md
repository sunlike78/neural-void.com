# Neural Void — Site

Brand site for **Neural Void**, an AI-native product lab.
Live at [neural-void-site.pages.dev](https://neural-void-site.pages.dev) (→ neural-void.com after DNS activation).

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
│   └── img/                      — Image assets (add OG images here)
└── .gitignore
```

## Pages

| URL path               | Content                                    |
|-------------------------|--------------------------------------------|
| `/`                     | Main landing — hero, about, Foldwink, concepts, process, contact |
| `/foldwink/overview/`   | Foldwink product page — B2B positioning, audience, deliverables, pilot timeline |
| `/foldwink/`            | Foldwink game build (existing, not part of this site project)     |

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
| Demo URL            | Search for `sunlike78.github.io/foldwink` — replace all     |
| Contact email       | Search for `hello@neural-void.com` — replace all (marked TODO) |
| CTA buttons         | Inside `hero-actions`, `featured-actions`, `cta-actions` divs |
| OG images           | Add files to `assets/img/`, update `og:image` meta tags     |

## Demo flow

Foldwink demo links currently point to the external temporary URL:
`https://sunlike78.github.io/foldwink/`

When ready to host internally, replace all demo URLs with the internal path (e.g., `/foldwink/` or a dedicated demo subdomain).

## Tech

- Pure HTML / CSS / vanilla JS — no frameworks, no build step
- Google Fonts CDN: Inter + JetBrains Mono
- CSS custom properties for theming
- IntersectionObserver for scroll-reveal
- Responsive: 768px and 480px breakpoints
