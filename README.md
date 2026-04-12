# Neural Void — Site

Static website for **Neural Void**, an AI-native product lab.

## Structure

```
site/
  index.html          — Main landing page
  fold-wing.html      — Fold Wing product page
  assets/
    css/style.css     — Global styles (CSS variables, layout, components)
    js/main.js        — Minimal vanilla JS (scroll effects, mobile nav, reveal)
    img/              — Image assets (empty — add OG images, icons, etc.)
```

## Running locally

No build step required. Open `index.html` directly in a browser, or use any local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .

# VS Code — use the Live Server extension
```

## Tech stack

- Pure HTML / CSS / vanilla JavaScript
- No frameworks, no bundlers, no external UI kits
- Google Fonts: Inter + JetBrains Mono (loaded via CDN)
- CSS custom properties for easy theming (see `:root` in `style.css`)

## Key design decisions

- Dark theme with cyan/violet accents — high-end sci-tech aesthetic
- Glass-panel card style with backdrop-filter blur
- Responsive layout (mobile-first breakpoints at 768px and 480px)
- Scroll-reveal animations via IntersectionObserver
- All text in English
- Contact email placeholder: `hello@neural-void.com` (marked with TODO comments)
