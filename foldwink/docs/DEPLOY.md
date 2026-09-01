# Deploy Foldwink

Foldwink is a static web/PWA. The canonical product is a direct web deployment;
itch.io is an optional discovery channel, not the primary payment path.

## Free web/PWA deployment

1. Run the local gates:

   ```bash
   npm run typecheck
   npm run lint
   npm test
   npm run validate
   npm run build
   npm run test:e2e
   npm run release:preflight
   ```

2. Upload the contents of `dist/` to a static host at the canonical origin.
   The Vite `base: "./"` configuration supports root and subpath hosting.

3. On the deployed URL, complete the human checks in
   [ITCH_QA_CHECKLIST.md](ITCH_QA_CHECKLIST.md): iPhone Safari safe areas,
   Android Chrome, audio unlock, native sharing, PWA installation, and daily
   continuity.

Cloudflare Pages, Netlify, GitHub Pages, object storage/CDNs, and a normal
static web server all work. Use `npm run build` as the build command and
`dist` as the publish directory.

## Optional paid activation

Do not configure payment links until the direct free build is live and works on
real devices.

1. Configure the public `VITE_KOFI_HANDLE` and
   `VITE_SUPPORTER_CHECKOUT_URL` values at the host.
2. Set `FOLDWINK_CANONICAL_URL` locally and run:

   ```bash
   npm run release:preflight:paid
   ```

3. Set the hosted checkout success return to the exact printed URL.
4. Deploy and test the real flow:
   CTA -> hosted checkout -> `?supporter=success` -> cosmetic badge.

The supporter flag is trust-based and cosmetic. Never gate the daily puzzle,
Easy mode, archive, Winks, retries, or any active-puzzle advantage.

## Optional itch.io channel

Build an HTML5 upload archive:

```bash
npm run pack:itch
```

The archive is written to `itch.io/export/`. It uses relative asset URLs and
is covered by browser embed tests. Upload it as an HTML5 game with the embedded
viewport set generously; the app also offers a player-initiated full-size launch
from constrained embeds.

If butler is installed, logged in, and the local `.itch-target` is correct,
publish with:

```bash
npm run release:butler
```

This is a real public push. Confirm the target and channel before running it.
After upload, open the actual itch iframe on phone and desktop; local tests
cannot verify itch's dashboard sizing or cache propagation.

## Content-only update

Puzzle content is bundled. For every active-pool change:

1. Run draft/reference validation.
2. Run `npm run validate`, `npm test`, and `npm run build`.
3. Rebuild the deployment artifact.
4. Deploy the new `dist/` or itch archive.
5. Smoke-test the deployed version.

## Release checklist

- [ ] Local gates passed on the exact artifact
- [ ] README and release notes match the artifact version and current counts
- [ ] Known limitations reviewed
- [ ] Direct web/PWA URL deployed and device-checked
- [ ] Optional itch archive uploaded and iframe-checked
- [ ] Optional payment return tested before CTAs are enabled
